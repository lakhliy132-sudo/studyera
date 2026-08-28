import Link from "next/link";

import { IconeAuteur, IconeIdee, IconeInfo, IconeLivre, IconeLivreOuvert } from "@/components/icones";
import type { FicheLecture } from "@/lib/ficheLectureBoiteAMerveilles";
import type { Oeuvre } from "@/types/base-de-donnees";

interface OngletFicheLectureProps {
  slug: string;
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
 * style. Le résumé complet, chapitre par chapitre, reste sur l'onglet
 * Chapitres — seul un rappel bref figure ici, avec un lien plutôt
 * qu'une duplication du texte bilingue en entier.
 *
 * Composant Serveur : aucune interactivité nécessaire, juste de la
 * lecture. Design cohérent avec les autres onglets (carte blanche,
 * icône + titre centrés) pour l'en-tête général, puis des blocs façon
 * `FicheChapitreApercu` (icône + titre dans un bandeau) pour chaque
 * section — même vocabulaire visuel que le reste du site.
 */
export default function OngletFicheLecture({ slug, oeuvre, fiche }: OngletFicheLectureProps) {
  return (
    <section className="rounded-lg border border-border bg-surface p-9 pb-10 shadow-sm">
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

          {oeuvre.essentiel_fr && (
            <BlocResume essentiel={oeuvre.essentiel_fr} />
          )}

          <BlocTexte Icone={IconeAuteur} titre="Biographie de l'auteur" texte={fiche.biographieAuteur} />

          <BlocTexte Icone={IconeLivre} titre="Structure et composition" texte={fiche.structureDetail} />

          <BlocThemes slug={slug} themes={fiche.themesPrincipaux} />

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

function BlocResume({ essentiel }: { essentiel: string }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-background">
      <EnteteBloc Icone={IconeLivre} titre="Résumé de l'œuvre" />
      <div className="px-6 pt-4 pb-5">
        <p className="font-lecture text-[15.5px] leading-relaxed text-foreground">{essentiel}</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Résumé bilingue complet et détail chapitre par chapitre dans l&apos;onglet Chapitres.
        </p>
      </div>
    </div>
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

function BlocThemes({ slug, themes }: { slug: string; themes: string[] }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-background">
      <EnteteBloc Icone={IconeIdee} titre="Thèmes principaux" />
      <div className="px-6 pt-4 pb-5">
        <ul className="flex flex-col gap-2">
          {themes.map((theme) => (
            <li key={theme} className="flex items-start gap-2.5 text-[15.5px] text-foreground">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
              />
              {theme}
            </li>
          ))}
        </ul>
        <Link
          href={`/oeuvres/${slug}?onglet=themes`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Voir tous les thèmes, chapitre par chapitre →
        </Link>
      </div>
    </div>
  );
}
