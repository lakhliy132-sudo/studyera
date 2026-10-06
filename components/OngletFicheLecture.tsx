import Image from "next/image";

import { initiales } from "@/components/OngletPersonnages";
import { IconeAuteur, IconeInfo, IconeLivre, IconeLivreOuvert } from "@/components/icones";
import type { BiographieAuteur, FicheLecture } from "@/lib/ficheLectureBoiteAMerveilles";
import type { Oeuvre } from "@/types/base-de-donnees";

interface OngletFicheLectureProps {
  oeuvre: Oeuvre;
  /** `null` pour une œuvre qui n'a pas encore de fiche de lecture
   * saisie (voir `lib/ficheLectureBoiteAMerveilles.ts`). */
  fiche: FicheLecture | null;
}

/**
 * Contenu de l'onglet "Fiche de lecture" de /oeuvres/[slug] — demandé
 * explicitement par l'utilisateur ("dans la partie de oeuvre boite a
 * merveilles ajoute moi une partie de fiche de lecture"). Synthétise
 * ce que les autres onglets ne couvrent pas déjà en détail (Personnages,
 * Lexique, Lieux, Thèmes et enjeux ont chacun leur propre onglet) :
 * carte d'identité de l'œuvre, biographie de l'auteur, structure et
 * style.
 *
 * Pas de bloc "Résumé" ni "Thèmes principaux" : retirés à la demande
 * explicite de l'utilisateur ("enleve la case du theme et enjeux" /
 * "enleve le resumé"), ces deux sujets ayant chacun déjà leur propre
 * onglet complet (Chapitres pour le résumé bilingue, Thèmes et enjeux
 * pour le détail chapitre par chapitre).
 *
 * Composant Serveur : aucune interactivité nécessaire, juste de la
 * lecture. Design cohérent avec les autres onglets (carte blanche,
 * icône + titre centrés) pour l'en-tête général, puis des blocs façon
 * `FicheChapitreApercu` (icône + titre dans un bandeau) pour chaque
 * section — même vocabulaire visuel que le reste du site.
 */
export default function OngletFicheLecture({ oeuvre, fiche }: OngletFicheLectureProps) {
  return (
    <section className="rounded-lg border border-border bg-surface p-5 sm:p-9 pb-10 shadow-sm">
      <div className="mb-2 flex items-center justify-center gap-3.5 text-primary">
        <IconeInfo className="size-[30px]" />
        <h2 className="font-serif text-[31px] font-bold tracking-tight text-ink">Fiche de lecture</h2>
      </div>
      <p className="mb-[30px] text-center text-base text-muted-foreground">
        L&apos;essentiel à connaître sur {oeuvre.titre_fr} avant de se plonger dans les chapitres.
      </p>

      {!fiche ? (
        <p className="text-center text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <div className="flex flex-col gap-[22px]">
          <BlocIdentite oeuvre={oeuvre} identite={fiche.identite} />

          <BlocBiographie auteur={oeuvre.auteur} bio={fiche.biographieAuteur} />

          <BlocTexte Icone={IconeLivre} titre="Structure et composition" texte={fiche.structureDetail} />

          <BlocTexte Icone={IconeLivreOuvert} titre="Style et écriture" texte={fiche.styleEcriture} />
        </div>
      )}
    </section>
  );
}

function EnteteBloc({
  Icone,
  titre,
}: {
  Icone: (props: { className?: string }) => React.ReactElement;
  titre: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-border bg-surface px-6 py-4">
      <span className="flex size-[38px] items-center justify-center rounded-[11px] bg-primary-tint text-primary">
        <Icone className="size-5" />
      </span>
      <h3 className="font-serif text-lg font-bold text-ink">{titre}</h3>
    </div>
  );
}

function LigneIdentite({ label, valeur }: { label: string; valeur: string }) {
  return (
    <div className="flex flex-col gap-0.5 py-2.5">
      <dt className="text-[13px] font-semibold tracking-wide text-muted-foreground uppercase">{label}</dt>
      <dd className="text-[15.5px] font-semibold text-ink">{valeur}</dd>
    </div>
  );
}

function BlocIdentite({
  oeuvre,
  identite,
}: {
  oeuvre: Oeuvre;
  identite: FicheLecture["identite"];
}) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-background">
      <EnteteBloc Icone={IconeInfo} titre="Carte d'identité" />
      <dl className="grid grid-cols-1 gap-x-8 divide-y divide-border px-6 sm:grid-cols-2 sm:divide-y-0">
        <LigneIdentite label="Auteur" valeur={oeuvre.auteur ?? "—"} />
        <LigneIdentite label="Titre original" valeur={oeuvre.titre_ar ?? "—"} />
        <LigneIdentite label="Genre" valeur={identite.genre} />
        <LigneIdentite label="Date de publication" valeur={identite.datePublication} />
        <LigneIdentite label="Éditeur" valeur={identite.editeur} />
        <LigneIdentite label="Mouvement" valeur={identite.mouvement} />
        <LigneIdentite label="Narrateur" valeur={identite.narrateur} />
        <LigneIdentite label="Cadre spatio-temporel" valeur={identite.cadreSpatioTemporel} />
        <LigneIdentite label="Structure" valeur={identite.structure} />
        <LigneIdentite label="Registre" valeur={identite.registre} />
      </dl>
      <div className="h-2.5" />
    </div>
  );
}

/**
 * Biographie de l'auteur : médaillon + tableau de fiche biographique
 * (nom, naissance, décès, profession, mouvement, œuvres principales,
 * distinction) — demandé explicitement par l'utilisateur ("FAIS MOI LA
 * BIOGRAPHIE DE L AUTEUR SOUS FORME D UN TABLEU ELEGANT"), à la place
 * du paragraphe continu utilisé jusque-là. Un vrai élément `<table>`
 * (pas la grille `<dl>` de `BlocIdentite`) pour bien correspondre à
 * "tableau" et se distinguer visuellement des autres blocs de cette
 * page.
 *
 * Pas de vraie photo d'Ahmed Sefrioui à côté du tableau (déjà demandé
 * lors d'un tour précédent) : recherchée sur Wikipédia (fr/en) et
 * Wikimedia Commons, introuvable sous une licence réutilisable
 * (l'article Wikipédia français lui-même est marqué "à illustrer",
 * donc sans photo) — un médaillon aux initiales, comme celui des
 * personnages de l'œuvre (`initiales()`/style doré de
 * `OngletPersonnages.tsx`), tient donc la place d'un portrait plutôt
 * qu'une image fabriquée ou une photo non vérifiée. Si une vraie photo
 * est fournie plus tard, la remplacer par une image dans `public/`
 * (même logique que `public/couvertures/`) via `next/image`.
 *
 * C'est fait pour les trois auteurs (Anouilh et Sefrioui : photos
 * fournies par l'utilisateur ; Hugo : portrait de Carjat, domaine
 * public) : le champ `photo` de la biographie remplace les initiales
 * dans le même cercle, avec le même liseré doré.
 */
function BlocBiographie({ auteur, bio }: { auteur: string | null; bio: BiographieAuteur }) {
  const nom = auteur ?? bio.nomComplet;

  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-background">
      <EnteteBloc Icone={IconeAuteur} titre="Biographie de l'auteur" />
      <div className="flex flex-col items-center gap-6 px-6 pt-5 pb-6 sm:flex-row sm:items-start">
        <div className="flex shrink-0 flex-col items-center gap-2.5">
          {bio.photo ? (
            <span className="relative size-[120px] overflow-hidden rounded-full border-2 border-[#E8D5AC]">
              <Image
                src={bio.photo}
                alt={`Portrait de ${nom}`}
                fill
                sizes="120px"
                className="object-cover object-top"
              />
            </span>
          ) : (
            <span
              aria-hidden="true"
              className="flex size-[120px] items-center justify-center rounded-full border-2 border-[#E8D5AC] bg-[linear-gradient(150deg,var(--color-primary-tint),#F4F8FF)] font-serif text-3xl sm:text-4xl font-bold text-ink shadow-[inset_0_0_0_6px_var(--color-surface)]"
            >
              {initiales(nom)}
            </span>
          )}
          <p className="font-serif text-base font-bold text-ink">{nom}</p>
        </div>

        <div className="min-w-0 flex-1 overflow-hidden rounded-[14px] border border-border">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody className="[&>tr:nth-child(even)]:bg-surface-muted">
                <LigneBio label="Nom complet" valeur={bio.nomComplet} />
                <LigneBio label="Naissance" valeur={bio.naissance} />
                <LigneBio label="Décès" valeur={bio.deces} />
                <LigneBio label="Profession" valeur={bio.profession} />
                <LigneBio label="Mouvement" valeur={bio.mouvement} />
                <LigneBio
                  label="Œuvres principales"
                  valeur={
                    <ul className="flex flex-col gap-0.5">
                      {bio.oeuvresPrincipales.map((oeuvre) => (
                        <li key={oeuvre}>{oeuvre}</li>
                      ))}
                    </ul>
                  }
                />
                <LigneBio label="Distinction" valeur={bio.distinction} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function LigneBio({ label, valeur }: { label: string; valeur: React.ReactNode }) {
  return (
    <tr className="border-b border-border last:border-0">
      <th
        scope="row"
        className="w-[150px] px-4 py-3 text-left align-top text-[13px] font-semibold tracking-wide text-muted-foreground uppercase"
      >
        {label}
      </th>
      <td className="px-4 py-3 text-[15px] leading-relaxed text-ink">{valeur}</td>
    </tr>
  );
}

function BlocTexte({
  Icone,
  titre,
  texte,
}: {
  Icone: (props: { className?: string }) => React.ReactElement;
  titre: string;
  texte: string;
}) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-background">
      <EnteteBloc Icone={Icone} titre={titre} />
      <div className="px-6 pt-4 pb-5">
        <p className="font-lecture text-[15.5px] leading-relaxed text-foreground">{texte}</p>
      </div>
    </div>
  );
}
