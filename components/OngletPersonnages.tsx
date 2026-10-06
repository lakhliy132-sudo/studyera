import AvatarPersonnage from "@/components/AvatarPersonnage";
import { IconePersonne } from "@/components/icones";
import { apparencePersonnage } from "@/lib/avatarsPersonnages";
import { libelleChapitre, libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { Chapitre, Personnage } from "@/types/base-de-donnees";

interface OngletPersonnagesProps {
  slug: string;
  personnages: Personnage[];
  /** Chapitre par id de chapitre — pour afficher "Chapitre N" (ou,
   * pour Antigone, le titre de la scène) en pied de carte à partir de
   * `chapitre_apparition_id`, sans requête dédiée : la page appelante
   * a déjà la liste complète des chapitres. */
  chapitreParId: Map<string, Chapitre>;
}

/**
 * Rôles considérés "personnage principal" — demandé explicitement par
 * l'utilisateur ("commence par les personnages principaux et après le
 * personnage secondaire"). Pas de colonne dédiée en base pour porter
 * cette distinction (ajouter une vraie colonne demanderait une
 * migration Supabase à appliquer manuellement, voir
 * `20260829000000_lecture_admin_profils.sql` déjà en attente) : on
 * s'appuie donc sur les libellés `role` déjà saisis pour les
 * personnages centraux de chaque œuvre plutôt que d'inventer un champ
 * supplémentaire. Fragile si ces libellés changent un jour, et déjà
 * étendue une première fois pour couvrir Antigone en plus de La Boîte
 * à Merveilles ("fais moi fiche de lecture et personnage lexique
 * d antigone") — confirme le besoin d'une vraie colonne le jour où la
 * migration en attente pourra être appliquée.
 */
const ROLES_PRINCIPAUX = new Set([
  // La Boîte à Merveilles
  "Narrateur et personnage principal",
  "La mère",
  "Le père",
  // Antigone
  "Personnage principal, fille d'Œdipe",
  "Roi de Thèbes, antagoniste",
  "La sœur d'Antigone",
  "Le fiancé d'Antigone",
]);

/**
 * Initiales pour le médaillon d'une carte personnage (2 lettres,
 * ex. "Sidi Mohammed" -> "SM"). Le contenu entre parenthèses est
 * ignoré (ex. "La Chouafa (tante Kenza)" -> "LC", pas "L(") : c'est un
 * surnom/complément, pas le nom principal.
 */
export function initiales(nom: string): string {
  const motsPrincipaux = nom.replace(/\(.*?\)/g, "").trim().split(/\s+/);
  return motsPrincipaux
    .slice(0, 2)
    .map((mot) => mot[0]?.toUpperCase() ?? "")
    .join("");
}

/** Fond sombre de la carte du personnage principal : la couleur du
 * site assombrie avec une valeur fixe, pour rester foncée en mode
 * sombre où la couleur du site pâlit (même valeur que la fiche de
 * lecture et la carte du parcours de chapitres). */
const FONCE = "color-mix(in srgb, var(--color-primary) 55%, #0a1020)";
const JAUNE = "#f7c948";

/** Étiquettes sous la description d'un personnage principal, comme sur
 * la maquette — demandé par l'utilisateur ("ajoute qlq chose perso en
 * bas de le condamné a mort"). Chacune reprend ce que la fiche du
 * personnage ou la fiche de lecture dit déjà : homme "sans nom",
 * narrateur "à la première personne", "père d'une fille prénommée
 * Marie". */
const ETIQUETTES_PRINCIPAUX: Record<string, Record<string, string[]>> = {
  "dernier-jour-condamne": {
    "Le condamné à mort": ["Anonyme", "Raconte en « je »", "Père de Marie"],
  },
};

/** Les secondaires liés au personnage principal, montrés sous sa carte
 * ("Autour de lui") : reconnus à leur rôle en base, qui les définit par
 * rapport à lui ("Fille du condamné", "Premier amour du narrateur",
 * "Codétenu"…). */
const LIES_AU_PRINCIPAL: Record<string, RegExp> = {
  "dernier-jour-condamne": /condamné|narrateur/i,
};

/** Au-delà de cette longueur, la description d'une carte secondaire est
 * repliée sur cinq lignes, derrière "Lire la suite" : celle des
 * "représentants de la société" faisait une carte trois fois plus
 * haute que ses voisines. */
const DESCRIPTION_LONGUE = 280;

/**
 * Contenu de l'onglet "Personnages" de /oeuvres/[slug], refait d'après
 * une maquette fournie par l'utilisateur ("POUR les personnage je veux
 * qlq chose comme ca") : le personnage principal dans une grande carte
 * sombre, les secondaires en cartes à buste dessiné, rôle, nom, nom
 * arabe et description.
 *
 * Un seul personnage principal (Le Dernier Jour) : il occupe la colonne
 * de gauche, comme sur la maquette. Plusieurs (La Boîte à merveilles,
 * Antigone) : ils passent en rangée au-dessus des secondaires, une
 * colonne de quatre cartes sombres serait bien plus haute que la grille
 * d'en face.
 *
 * Écart avec la maquette : pas d'étiquettes sous la description du
 * principal ("Anonyme", "Père de Marie") ; elles n'existent pas en
 * base. Le chapitre de première apparition, lui, reste en pied de
 * carte.
 */
export default function OngletPersonnages({ slug, personnages, chapitreParId }: OngletPersonnagesProps) {
  const principaux = personnages.filter((p) => p.role && ROLES_PRINCIPAUX.has(p.role));
  const secondaires = personnages.filter((p) => !p.role || !ROLES_PRINCIPAUX.has(p.role));
  const unite = libelleUniteChapitre(slug);
  const apparition = (personnage: Personnage) => {
    const chapitre = personnage.chapitre_apparition_id
      ? chapitreParId.get(personnage.chapitre_apparition_id)
      : undefined;
    return chapitre ? `Apparition : ${libelleChapitre(chapitre, unite)}` : null;
  };
  const seul = principaux.length === 1;

  return (
    <section className="rounded-lg border border-border bg-surface p-4 pb-8 shadow-sm sm:p-9 sm:pb-10">
      <header className="mb-8 flex flex-col items-center text-center sm:mb-10">
        <span
          className="flex size-14 items-center justify-center rounded-[16px] text-white shadow-md"
          style={{ background: FONCE }}
        >
          <IconePersonne className="size-7" />
        </span>
        <h2 className="mt-4 font-serif text-[30px] font-bold tracking-tight text-ink sm:text-[36px]">
          Les personnages de l&apos;œuvre
        </h2>
        <p className="mt-1 text-[15px] text-muted-foreground">
          Qui traverse le récit : le trombinoscope complet de l&apos;œuvre.
        </p>
        <span className="mt-4 h-[3px] w-16 rounded-full" style={{ background: FONCE }} />
      </header>

      {personnages.length === 0 ? (
        <p className="text-center text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <div
          className={
            seul && secondaires.length > 0
              ? "grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
              : "flex flex-col gap-8 sm:gap-10"
          }
        >
          {principaux.length > 0 && (
            <div>
              <h3 className="mb-4 font-serif text-xl font-bold text-ink sm:text-2xl">
                {seul ? "Personnage principal" : "Personnages principaux"}
              </h3>
              <ul
                className={
                  seul
                    ? "grid grid-cols-1"
                    : "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]"
                }
              >
                {principaux.map((personnage) => (
                  <CartePrincipale
                    key={personnage.id}
                    slug={slug}
                    personnage={personnage}
                    apparition={apparition(personnage)}
                  />
                ))}
              </ul>
              {seul && LIES_AU_PRINCIPAL[slug] && (
                <AutourDuPrincipal
                  slug={slug}
                  personnages={secondaires.filter((p) => p.role && LIES_AU_PRINCIPAL[slug].test(p.role))}
                />
              )}
            </div>
          )}
          {secondaires.length > 0 && (
            <div>
              <h3 className="mb-4 font-serif text-xl font-bold text-ink sm:text-2xl">Personnages secondaires</h3>
              <ul
                className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 ${
                  seul ? "2xl:grid-cols-3" : "lg:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {secondaires.map((personnage) => (
                  <CarteSecondaire
                    key={personnage.id}
                    slug={slug}
                    personnage={personnage}
                    apparition={apparition(personnage)}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function CartePrincipale({
  slug,
  personnage,
  apparition,
}: {
  slug: string;
  personnage: Personnage;
  apparition: string | null;
}) {
  const apparence = apparencePersonnage(slug, personnage.nom);
  return (
    <li
      className="flex flex-col overflow-hidden rounded-[26px] text-white shadow-[0_20px_50px_-20px_rgba(10,16,32,0.55)]"
      style={{ background: FONCE }}
    >
      <div className="relative flex h-[250px] items-end justify-center overflow-hidden px-6 pt-6 sm:h-[300px]">
        {personnage.role && (
          <span
            className="absolute top-5 left-5 z-10 max-w-[80%] rounded-full px-3.5 py-1 text-[13px] font-bold text-[#1d2340]"
            style={{ background: JAUNE }}
          >
            {personnage.role}
          </span>
        )}
        <span aria-hidden="true" className="absolute top-12 size-[210px] rounded-full border border-white/15 sm:size-[250px]" />
        {apparence ? (
          <AvatarPersonnage apparence={apparence} fond={false} className="relative size-[210px] sm:size-[250px]" />
        ) : (
          <span
            aria-hidden="true"
            className="relative mb-10 flex size-[130px] items-center justify-center rounded-full bg-white/10 font-serif text-5xl font-bold"
          >
            {initiales(personnage.nom)}
          </span>
        )}
      </div>
      <div className="flex-1 bg-black/15 px-6 pt-6 pb-7 sm:px-8">
        <p className="font-serif text-[28px] leading-tight font-bold sm:text-[32px]">{personnage.nom}</p>
        {personnage.nom_ar && (
          <p dir="rtl" lang="ar" className="mt-1.5 w-fit font-arabe text-xl text-white/70">
            {personnage.nom_ar}
          </p>
        )}
        {personnage.description_fr && (
          <p className="mt-4 font-lecture text-[16.5px] leading-relaxed text-white/85">{personnage.description_fr}</p>
        )}
        {(ETIQUETTES_PRINCIPAUX[slug]?.[personnage.nom] ?? []).length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {ETIQUETTES_PRINCIPAUX[slug][personnage.nom].map((etiquette) => (
              <li key={etiquette} className="rounded-full border border-white/35 px-3.5 py-1.5 text-sm text-white">
                {etiquette}
              </li>
            ))}
          </ul>
        )}
        {apparition && <p className="mt-5 text-[13px] text-white/60">{apparition}</p>}
      </div>
    </li>
  );
}

function AutourDuPrincipal({ slug, personnages }: { slug: string; personnages: Personnage[] }) {
  if (personnages.length === 0) return null;
  return (
    <div className="mt-5 rounded-[22px] border border-border bg-background p-5">
      <h4 className="font-serif text-lg font-bold text-ink">Autour de lui</h4>
      <ul className="mt-3 flex flex-col gap-3">
        {personnages.map((personnage) => {
          const apparence = apparencePersonnage(slug, personnage.nom);
          return (
            <li key={personnage.id} className="flex items-center gap-3">
              <span className="size-11 shrink-0 overflow-hidden rounded-full border border-border">
                {apparence ? (
                  <AvatarPersonnage apparence={apparence} className="size-full" />
                ) : (
                  <span className="flex size-full items-center justify-center bg-primary-tint text-sm font-bold text-ink">
                    {initiales(personnage.nom)}
                  </span>
                )}
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-ink">{personnage.nom}</span>
                <span className="block text-[13.5px] leading-snug text-muted-foreground">{personnage.role}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CarteSecondaire({
  slug,
  personnage,
  apparition,
}: {
  slug: string;
  personnage: Personnage;
  apparition: string | null;
}) {
  const apparence = apparencePersonnage(slug, personnage.nom);
  return (
    // Sur téléphone, carte en ligne (buste à gauche) : 27 cartes en
    // colonne pleine hauteur faisaient une page interminable.
    <li className="flex overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_6px_24px_-10px_rgba(27,58,143,0.18)] transition-transform hover:-translate-y-1 sm:flex-col">
      <div className="flex w-[92px] shrink-0 items-start justify-center bg-primary-tint pt-3 sm:h-[150px] sm:w-auto sm:items-end sm:pt-0">
        {apparence ? (
          <AvatarPersonnage apparence={apparence} fond={false} className="size-[92px] sm:size-[150px]" />
        ) : (
          <span
            aria-hidden="true"
            className="mb-4 flex size-[60px] items-center justify-center rounded-full bg-surface font-serif text-xl font-bold text-ink sm:mb-6 sm:size-[90px] sm:text-3xl"
          >
            {initiales(personnage.nom)}
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col px-4 pt-4 pb-5 sm:px-6 sm:pt-5 sm:pb-6">
        {personnage.role && <p className="text-[13px] font-bold text-muted-foreground">{personnage.role}</p>}
        <p className="mt-1 font-serif text-xl font-bold text-ink">{personnage.nom}</p>
        {personnage.nom_ar && (
          <p dir="rtl" lang="ar" className="mt-0.5 w-fit font-arabe text-[17px] text-muted-foreground">
            {personnage.nom_ar}
          </p>
        )}
        {personnage.description_fr && (
          personnage.description_fr.length > DESCRIPTION_LONGUE ? (
            <details className="group mt-2 sm:mt-3">
              <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="line-clamp-5 text-[14.5px] leading-relaxed text-muted-foreground group-open:line-clamp-none sm:text-[15px]">
                  {personnage.description_fr}
                </span>
                <span className="mt-1.5 inline-block text-sm font-semibold text-primary">
                  <span className="group-open:hidden">Lire la suite</span>
                  <span className="hidden group-open:inline">Réduire</span>
                </span>
              </summary>
            </details>
          ) : (
            <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-[15px]">
              {personnage.description_fr}
            </p>
          )
        )}
        {apparition && (
          <div className="mt-auto pt-4">
            <p className="border-t border-dashed border-border-strong pt-3 text-xs text-subtle-foreground">
              {apparition}
            </p>
          </div>
        )}
      </div>
    </li>
  );
}
