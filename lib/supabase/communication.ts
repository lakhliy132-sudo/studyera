/**
 * Fonctions de LECTURE (Server Components) pour la communication
 * CEO/élèves (annonces publiques + messagerie privée un-à-un) —
 * demandé explicitement par l'utilisateur ("je veux ajouter une case
 * de la comminucation... moi ceo of the site talk avec les eleves").
 *
 * ⚠️ Uniquement des lectures ici, volontairement : ce fichier importe
 * `creerClientServeur` (donc `next/headers`, réservé aux Server
 * Components). Les écritures (publier une annonce, envoyer un
 * message, marquer comme lu) vivent directement dans les composants
 * client concernés (`FormulaireAnnonce.tsx`, `FilMessages.tsx`), pas
 * ici — bogue réel rencontré en vérifiant : un premier essai les
 * avait mises dans ce même fichier, et un Client Component qui
 * importe ne serait-ce qu'UNE fonction d'un fichier qui importe
 * `next/headers` fait planter toute la page ("You're importing a
 * component that needs next/headers"), même si la fonction
 * effectivement utilisée n'en a pas besoin — la limite serveur/client
 * de Next.js s'applique au fichier entier, pas export par export.
 * Même principe déjà en place pour `creerClientNavigateur`, toujours
 * appelé directement depuis les composants (voir BoutonMarquerLu.tsx),
 * jamais réexporté depuis un fichier partagé avec des lectures serveur.
 *
 * ⚠️ Ces tables (`annonces`, `messages`) et le correctif de
 * `est_admin()` dont elles dépendent viennent de deux migrations pas
 * encore appliquées à la base au moment où ce fichier est écrit (voir
 * supabase/migrations/20260901010000_fix_recursion_est_admin.sql et
 * 20260901020000_communication_annonces_messages.sql) : rien ici ne
 * fonctionnera tant qu'elles n'auront pas été exécutées manuellement
 * (SQL editor du tableau de bord Supabase — voir ETAT.md pour le
 * pourquoi : pas de connexion Postgres directe dans cet
 * environnement, seulement les clés REST anon/service_role, qui ne
 * permettent pas d'exécuter du DDL).
 */

import { creerClientServeur } from "@/lib/supabase/server";
import type { Annonce, Message } from "@/types/base-de-donnees";

// --- Annonces ---

/**
 * Les annonces les plus récentes d'abord — lecture publique (tout
 * utilisateur connecté), voir la policy RLS correspondante.
 *
 * Volontairement non bloquante, comme `enregistrerActivite` : appelée
 * depuis le tableau de bord (page vue par tout élève à chaque
 * connexion), une erreur ici — table `annonces` pas encore créée
 * parce que la migration correspondante n'a pas encore été appliquée
 * manuellement, voir le commentaire en tête de fichier — ne doit
 * jamais faire planter tout le tableau de bord. `BlocAnnonces` gère
 * déjà très bien un tableau vide (message neutre "Aucune annonce pour
 * le moment.").
 */
export async function recupererAnnonces(limite?: number): Promise<Annonce[]> {
  try {
    const supabase = await creerClientServeur();
    let requete = supabase.from("annonces").select("*").order("created_at", { ascending: false });
    if (limite) requete = requete.limit(limite);

    const { data, error } = await requete;
    if (error) throw error;
    return (data as Annonce[]) ?? [];
  } catch (erreur) {
    console.error("recupererAnnonces:", erreur);
    return [];
  }
}

// --- Messages ---

/**
 * Le fil de messages d'un élève précis, du plus ancien au plus récent
 * (ordre naturel de lecture d'une conversation). Appelable par
 * l'élève lui-même ou par un admin (voir la policy RLS SELECT).
 *
 * Non bloquante comme `recupererAnnonces` : tant que la migration
 * créant `messages` n'a pas été appliquée, la page affiche un fil
 * vide plutôt qu'une erreur.
 */
export async function recupererMessagesEleve(eleveId: string): Promise<Message[]> {
  try {
    const supabase = await creerClientServeur();
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("eleve_id", eleveId)
      .order("created_at", { ascending: true });

    if (error) throw error;
    return (data as Message[]) ?? [];
  } catch (erreur) {
    console.error("recupererMessagesEleve:", erreur);
    return [];
  }
}

export interface FilMessagesResume {
  eleveId: string;
  eleveEmail: string | null;
  eleveNomComplet: string | null;
  dernierMessage: Message;
  nonLusDeLEleve: number;
}

/**
 * Vue "boîte de réception" pour l'espace admin : un fil par élève
 * ayant échangé au moins un message, avec le dernier message et le
 * nombre de messages de l'élève pas encore marqués lus. `profils` n'a
 * pas de relation directe avec `messages` au niveau du schéma (même
 * situation que `copies`, voir lib/supabase/admin.ts) : requête
 * séparée pour enrichir avec l'identité de l'élève.
 */
export async function recupererFilsMessagesPourAdmin(): Promise<FilMessagesResume[]> {
  try {
    const supabase = await creerClientServeur();
    const { data: messages, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) throw error;
    if (!messages || messages.length === 0) return [];

    const lignes = messages as Message[];
    const parEleve = new Map<string, Message[]>();
    for (const ligne of lignes) {
      const liste = parEleve.get(ligne.eleve_id) ?? [];
      liste.push(ligne);
      parEleve.set(ligne.eleve_id, liste);
    }

    const idsEleves = [...parEleve.keys()];
    const { data: profils, error: erreurProfils } = await supabase
      .from("profils")
      .select("id, email, nom_complet")
      .in("id", idsEleves);
    if (erreurProfils) throw erreurProfils;

    const profilParId = new Map((profils ?? []).map((profil) => [profil.id, profil]));

    const fils: FilMessagesResume[] = [];
    for (const [eleveId, messagesDuFil] of parEleve) {
      const profil = profilParId.get(eleveId);
      fils.push({
        eleveId,
        eleveEmail: profil?.email ?? null,
        eleveNomComplet: profil?.nom_complet ?? null,
        dernierMessage: messagesDuFil[messagesDuFil.length - 1],
        nonLusDeLEleve: messagesDuFil.filter((m) => m.auteur_id === eleveId && !m.lu).length,
      });
    }

    // Fil avec l'échange le plus récent en premier.
    fils.sort(
      (a, b) => new Date(b.dernierMessage.created_at).getTime() - new Date(a.dernierMessage.created_at).getTime(),
    );
    return fils;
  } catch (erreur) {
    console.error("recupererFilsMessagesPourAdmin:", erreur);
    return [];
  }
}

/** Identité d'un élève précis (email/nom), pour l'en-tête de
 * /administration/messages/[eleveId]. `null` si l'id ne correspond à
 * aucun profil (URL tapée à la main avec un id invalide, par exemple). */
export async function recupererProfilEleve(
  eleveId: string,
): Promise<{ email: string | null; nomComplet: string | null } | null> {
  const supabase = await creerClientServeur();
  const { data, error } = await supabase
    .from("profils")
    .select("email, nom_complet")
    .eq("id", eleveId)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;
  return { email: data.email, nomComplet: data.nom_complet };
}
