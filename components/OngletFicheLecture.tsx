import Image from "next/image";

import { initiales } from "@/components/OngletPersonnages";
import {
  IconeAuteur,
  IconeCalendrier,
  IconeCartes,
  IconeEtoile,
  IconeGlobe,
  IconeIdee,
  IconeInfo,
  IconeLieu,
  IconeLivre,
  IconeLivreOuvert,
  IconeMaison,
  IconeMasques,
  IconePlume,
  IconeTexte,
} from "@/components/icones";
import type { BiographieAuteur, FicheLecture } from "@/lib/ficheLectureBoiteAMerveilles";
import type { Oeuvre } from "@/types/base-de-donnees";

interface OngletFicheLectureProps {
  oeuvre: Oeuvre;
  /** `null` pour une œuvre qui n'a pas encore de fiche de lecture
   * saisie (voir `lib/ficheLectureBoiteAMerveilles.ts`). */
  fiche: FicheLecture | null;
}

type Icone = (props: { className?: string }) => React.ReactElement;

/** Fond sombre des pastilles d'icône et des numéros, tiré de la couleur
 * du site : il reste foncé en mode sombre, où la couleur du site pâlit. */
const FONCE = "color-mix(in srgb, var(--color-primary) 55%, #0a1020)";

/**
 * Contenu de l'onglet "Fiche de lecture" de /oeuvres/[slug], refait
 * d'après une maquette fournie par l'utilisateur ("TU PEUX ME FAIRE
 * COMME CA, ET AUSSI POUR STRUCTURE ET STYLE FAIS QLQ HCOSE PLUS
 * SIMPLE") : carte d'identité en tuiles à icône, biographie avec
 * portrait et tableau, structure et style, encadré "À retenir pour
 * l'examen".
 *
 * Structure et style, "plus simple" que le long paragraphe de la
 * maquette : côte à côte, et découpés phrase par phrase en points
 * courts. Le texte est celui de la fiche, seulement mis en liste.
 *
 * Pas de bloc "Résumé" ni "Thèmes principaux" : retirés à la demande
 * explicite de l'utilisateur ("enleve la case du theme et enjeux" /
 * "enleve le resumé"), ces deux sujets ayant chacun leur onglet.
 *
 * Composant Serveur : aucune interactivité, juste de la lecture.
 */
export default function OngletFicheLecture({ oeuvre, fiche }: OngletFicheLectureProps) {
  return (
    <section className="flex flex-col gap-5 sm:gap-6">
      <header className="flex flex-col items-center px-4 pt-2 text-center">
        <span
          className="flex size-14 items-center justify-center rounded-[16px] text-white shadow-md"
          style={{ background: FONCE }}
        >
          <IconeLivreOuvert className="size-7" />
        </span>
        <h2 className="mt-4 font-serif text-[30px] font-bold tracking-tight text-ink sm:text-[36px]">
          Fiche de lecture
        </h2>
        <p className="mt-1 text-[15px] text-muted-foreground">
          L&apos;essentiel à connaître sur {oeuvre.titre_fr} avant de se plonger dans les chapitres.
        </p>
        <span className="mt-4 h-[3px] w-16 rounded-full" style={{ background: FONCE }} />
      </header>

      {!fiche ? (
        <p className="text-center text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <>
          <BlocIdentite oeuvre={oeuvre} identite={fiche.identite} />
          <BlocBiographie auteur={oeuvre.auteur} bio={fiche.biographieAuteur} />
          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
            <BlocPoints Icone={IconeCartes} titre="Structure et composition" texte={fiche.structureDetail} />
            <BlocPoints Icone={IconePlume} titre="Style et écriture" texte={fiche.styleEcriture} />
          </div>
          <BlocARetenir points={fiche.aRetenir} />
        </>
      )}
    </section>
  );
}

function Carte({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className={`overflow-hidden rounded-[20px] bg-surface shadow-sm ${
        accent ? "border-2 border-primary/35" : "border border-border"
      }`}
    >
      {children}
    </div>
  );
}

function EnteteBloc({ Icone, titre }: { Icone: Icone; titre: string }) {
  return (
    <div className="flex items-center gap-3.5 border-b border-border px-5 py-4 sm:px-6">
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-[12px] text-white"
        style={{ background: FONCE }}
      >
        <Icone className="size-5" />
      </span>
      <h3 className="font-serif text-xl font-bold text-ink">{titre}</h3>
    </div>
  );
}

/* ---------- Carte d'identité ---------- */

function TuileIdentite({
  Icone,
  label,
  valeur,
  arabe = false,
}: {
  Icone: Icone;
  label: string;
  valeur: string;
  arabe?: boolean;
}) {
  return (
    <div className="flex gap-3.5 rounded-[14px] border border-border bg-background p-4">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary-tint text-primary">
        <Icone className="size-[18px]" />
      </span>
      <dl className="min-w-0">
        <dt className="text-[13px] text-muted-foreground">{label}</dt>
        <dd
          dir={arabe ? "rtl" : undefined}
          lang={arabe ? "ar" : undefined}
          className={
            arabe
              ? "mt-0.5 font-arabe text-[17px] font-semibold text-ink"
              : "mt-0.5 text-[15px] leading-snug font-semibold text-ink"
          }
        >
          {valeur}
        </dd>
      </dl>
    </div>
  );
}

function BlocIdentite({ oeuvre, identite }: { oeuvre: Oeuvre; identite: FicheLecture["identite"] }) {
  // Une donnée absente ne donne pas de tuile, plutôt qu'un tiret.
  const tuiles: { Icone: Icone; label: string; valeur: string | null; arabe?: boolean }[] = [
    { Icone: IconeAuteur, label: "Auteur", valeur: oeuvre.auteur },
    { Icone: IconeGlobe, label: "Titre original", valeur: oeuvre.titre_ar, arabe: true },
    { Icone: IconeLivre, label: "Genre", valeur: identite.genre },
    { Icone: IconeCalendrier, label: "Date de publication", valeur: identite.datePublication },
    { Icone: IconeMaison, label: "Éditeur", valeur: identite.editeur },
    { Icone: IconeEtoile, label: "Mouvement", valeur: identite.mouvement },
    { Icone: IconeTexte, label: "Narrateur", valeur: identite.narrateur },
    { Icone: IconeLieu, label: "Cadre spatio-temporel", valeur: identite.cadreSpatioTemporel },
    { Icone: IconeCartes, label: "Structure", valeur: identite.structure },
    { Icone: IconeMasques, label: "Registre", valeur: identite.registre },
  ];

  return (
    <Carte>
      <EnteteBloc Icone={IconeInfo} titre="Carte d'identité" />
      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-5">
        {tuiles.map(({ Icone, label, valeur, arabe }) =>
          valeur ? <TuileIdentite key={label} Icone={Icone} label={label} valeur={valeur} arabe={arabe} /> : null,
        )}
      </div>
    </Carte>
  );
}

/* ---------- Biographie ---------- */

/** "26 février 1802, à Besançon" → "1802". */
function annee(texte: string): string | null {
  return texte.match(/\b(1\d{3}|20\d{2})\b/)?.[1] ?? null;
}

/**
 * Biographie : portrait (ou médaillon aux initiales quand aucune vraie
 * photo n'a été fournie) et tableau de fiche biographique — demandé par
 * l'utilisateur ("FAIS MOI LA BIOGRAPHIE DE L AUTEUR SOUS FORME D UN
 * TABLEU ELEGANT"). Les trois auteurs ont désormais leur portrait
 * (Anouilh et Sefrioui : photos fournies par l'utilisateur ; Hugo :
 * portrait de Carjat, domaine public). Les années sous le nom sont
 * tirées des dates de naissance et de décès de la fiche.
 */
function BlocBiographie({ auteur, bio }: { auteur: string | null; bio: BiographieAuteur }) {
  const nom = auteur ?? bio.nomComplet;
  const naissance = annee(bio.naissance);
  const deces = annee(bio.deces);

  const lignes: { label: string; valeur: React.ReactNode }[] = [
    { label: "Nom complet", valeur: bio.nomComplet },
    { label: "Naissance", valeur: bio.naissance },
    { label: "Décès", valeur: bio.deces },
    { label: "Profession", valeur: bio.profession },
    { label: "Mouvement", valeur: bio.mouvement },
    {
      label: "Œuvres principales",
      valeur: (
        <ul className="flex flex-col gap-0.5">
          {bio.oeuvresPrincipales.map((titre) => (
            <li key={titre}>{titre}</li>
          ))}
        </ul>
      ),
    },
    { label: "Distinction", valeur: bio.distinction },
  ];

  return (
    <Carte>
      <EnteteBloc Icone={IconePlume} titre="Biographie de l'auteur" />
      <div className="flex flex-col items-center gap-6 p-5 sm:flex-row sm:items-start sm:p-6">
        <div className="flex w-[150px] shrink-0 flex-col items-center text-center">
          <span
            className="relative flex size-[118px] items-center justify-center overflow-hidden rounded-full border-4 bg-primary-tint font-serif text-3xl font-bold text-ink"
            style={{ borderColor: FONCE }}
          >
            {bio.photo ? (
              <Image src={bio.photo} alt={`Portrait de ${nom}`} fill sizes="118px" className="object-cover object-top" />
            ) : (
              <span aria-hidden="true">{initiales(nom)}</span>
            )}
          </span>
          <p className="mt-3 font-serif text-lg font-bold text-ink">{nom}</p>
          {naissance && deces && (
            <p className="text-sm text-muted-foreground">
              {naissance} – {deces}
            </p>
          )}
        </div>

        <dl className="flex w-full min-w-0 flex-col gap-2">
          {lignes.map(({ label, valeur }) => (
            <div
              key={label}
              className="grid grid-cols-1 overflow-hidden rounded-[12px] border border-border sm:grid-cols-[170px_minmax(0,1fr)]"
            >
              <dt className="bg-primary-tint px-4 py-2.5 text-[14px] font-bold text-primary">{label}</dt>
              <dd className="bg-background px-4 py-2.5 text-[15px] leading-relaxed text-foreground">{valeur}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Carte>
  );
}

/* ---------- Structure, style ---------- */

/** Découpe un paragraphe en phrases, pour l'afficher en points. */
function phrases(texte: string): string[] {
  return texte
    .split(/(?<=[.!?])\s+(?=[A-ZÀ-ÖØ-Ý«])/)
    .map((p) => p.trim())
    .filter(Boolean);
}

function BlocPoints({ Icone, titre, texte }: { Icone: Icone; titre: string; texte: string }) {
  return (
    <Carte>
      <EnteteBloc Icone={Icone} titre={titre} />
      <ul className="flex flex-col gap-3 p-5 sm:p-6">
        {phrases(texte).map((phrase) => (
          <li key={phrase} className="flex gap-3 text-[15px] leading-relaxed text-foreground">
            <span aria-hidden="true" className="mt-[9px] size-2 shrink-0 rounded-full" style={{ background: FONCE }} />
            {phrase}
          </li>
        ))}
      </ul>
    </Carte>
  );
}

/* ---------- À retenir ---------- */

/** Met en gras ce qui est entre `**` dans un point "À retenir". */
function avecGras(texte: string) {
  return texte.split(/\*\*(.+?)\*\*/).map((morceau, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-ink">
        {morceau}
      </strong>
    ) : (
      morceau
    ),
  );
}

function BlocARetenir({ points }: { points: string[] }) {
  if (points.length === 0) return null;
  return (
    <Carte accent>
      <div className="flex items-center gap-3.5 px-5 pt-5 sm:px-6">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-[12px] text-white"
          style={{ background: FONCE }}
        >
          <IconeIdee className="size-5" />
        </span>
        <h3 className="font-serif text-xl font-bold text-ink">À retenir pour l&apos;examen</h3>
      </div>
      <ol className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 sm:p-6">
        {points.map((point, i) => (
          <li key={point} className="flex gap-3 rounded-[14px] bg-background p-4 text-[15px] leading-snug text-foreground">
            <span
              className="flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ background: FONCE }}
            >
              {i + 1}
            </span>
            <span>{avecGras(point)}</span>
          </li>
        ))}
      </ol>
    </Carte>
  );
}
