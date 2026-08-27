"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { initiales } from "@/components/OngletPersonnages";
import {
  IconeDocument,
  IconeFleche,
  IconeLieu,
  IconeLivreOuvert,
  IconePersonne,
  IconeRecherche,
} from "@/components/icones";
import type { Chapitre, EntreeLexique, Personnage, Sujet } from "@/types/base-de-donnees";

interface FicheChapitreApercuProps {
  chapitre: Chapitre;
  /** Tous les personnages de l'œuvre (comme partout ailleurs sur cette
   * page depuis la demande "applique les personnages dans tous les
   * chapitres") — ceux introduits DANS ce chapitre précis
   * (`chapitre_apparition_id === chapitre.id`) sont juste mis en avant
   * visuellement (avatar plein plutôt que contour), pas filtrés à part. */
  personnages: Personnage[];
  /** Mots de lexique de CE chapitre précis uniquement (contrairement à
   * `personnages`, pas de vue "toute l'œuvre" ici — chaque mot de
   * lexique est déjà rattaché à un seul chapitre en base, donc pas le
   * même problème de filtrage que les personnages récurrents). */
  lexique: EntreeLexique[];
  sujets: Sujet[];
}

/**
 * "Fiche du chapitre" : carte englobante avec, en 2/3 + 1/3, la liste
 * des personnages (recherche incluse) puis le lexique, les lieux et
 * les sujets liés à ce chapitre précis — remplace l'ancien aperçu à
 * trois colonnes égales (BlocApercu). Design repris du fichier de
 * référence fourni par l'utilisateur ("Chapitre 3 — La Boîte à
 * Merveilles"), colonne de droite étendue avec un bloc Lexique
 * (absent du fichier de référence) à la demande explicite de
 * l'utilisateur.
 *
 * Composant Client uniquement pour la recherche de personnages (état
 * local) ; Lexique, Lieux et Sujets liés n'ont besoin d'aucune
 * interactivité
 * mais vivent dans le même fichier pour rester à côté visuellement.
 */
export default function FicheChapitreApercu({
  chapitre,
  personnages,
  lexique,
  sujets,
}: FicheChapitreApercuProps) {
  return (
    <section className="relative overflow-hidden rounded-[26px] border border-border bg-surface p-[30px] shadow-[0_1px_3px_rgba(27,58,143,0.05),0_14px_44px_rgba(27,58,143,0.07)]">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-ink),var(--color-primary-vif),var(--color-primary-tint))]"
      />
      <div className="mb-[26px] flex items-center gap-3.5 border-b border-border pt-1.5 pb-[22px]">
        <span className="flex size-11 items-center justify-center rounded-[13px] bg-[linear-gradient(140deg,var(--color-primary),var(--color-ink))] text-white shadow-[0_3px_10px_rgba(29,78,216,0.28)]">
          <IconeDocument className="size-[22px]" />
        </span>
        <div>
          <h2 className="font-serif text-xl font-bold text-ink">Fiche du chapitre</h2>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Tout ce qu&apos;il faut retenir de {chapitre.titre_fr}, en un coup d&apos;œil.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-[22px] lg:grid-cols-[1.85fr_1fr]">
        <BlocPersonnages chapitreId={chapitre.id} personnages={personnages} />

        <div className="flex flex-col gap-[22px]">
          <BlocLexique entrees={lexique} />
          <BlocLieux lieux={chapitre.lieux} />
          <BlocSujets sujets={sujets} />
        </div>
      </div>
    </section>
  );
}

function EnteteBloc({
  Icone,
  titre,
  compte,
}: {
  Icone: (props: { className?: string }) => React.ReactElement;
  titre: string;
  compte: number;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-border bg-surface px-6 py-4">
      <span className="flex size-[38px] items-center justify-center rounded-[11px] bg-primary-tint text-primary">
        <Icone className="size-5" />
      </span>
      <h3 className="font-serif text-lg font-bold text-ink">{titre}</h3>
      <span className="ml-auto rounded-full bg-surface-muted px-3 py-1 text-[13px] font-bold text-primary-vif">
        {compte}
      </span>
    </div>
  );
}

function BlocPersonnages({
  chapitreId,
  personnages,
}: {
  chapitreId: string;
  personnages: Personnage[];
}) {
  const [recherche, setRecherche] = useState("");

  const filtres = useMemo(() => {
    const q = recherche.trim().toLowerCase();
    if (!q) return personnages;
    return personnages.filter(
      (p) => p.nom.toLowerCase().includes(q) || (p.role ?? "").toLowerCase().includes(q),
    );
  }, [recherche, personnages]);

  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-background">
      <EnteteBloc Icone={IconePersonne} titre="Personnages" compte={filtres.length} />
      <div className="px-[26px] pt-5 pb-6">
        <div className="relative mb-4">
          <IconeRecherche className="pointer-events-none absolute top-1/2 left-3.5 size-[18px] -translate-y-1/2 text-subtle-foreground" />
          <input
            type="search"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Chercher un personnage…"
            aria-label="Chercher un personnage"
            className="w-full rounded-[10px] border border-border bg-surface py-3 pr-3.5 pl-[42px] text-[15px] text-foreground transition-colors focus:border-primary focus:ring-3 focus:ring-primary-tint focus:outline-none"
          />
        </div>

        {filtres.length === 0 ? (
          <p className="p-6 text-center text-[15px] text-muted-foreground">
            Aucun personnage ne correspond.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {filtres.map((personnage) => {
              const introduitIci = personnage.chapitre_apparition_id === chapitreId;

              return (
                <li
                  key={personnage.id}
                  className="flex items-center gap-3 rounded-[10px] border border-transparent px-3.5 py-3 transition-colors hover:border-border hover:bg-surface"
                >
                  <span
                    aria-hidden="true"
                    className={
                      introduitIci
                        ? "flex size-[38px] shrink-0 items-center justify-center rounded-full border border-primary bg-primary font-serif text-sm font-bold text-white"
                        : "flex size-[38px] shrink-0 items-center justify-center rounded-full border border-border bg-surface-muted font-serif text-sm font-bold text-primary"
                    }
                  >
                    {initiales(personnage.nom)}
                  </span>
                  <span className="min-w-0">
                    <p className="truncate text-[15.5px] font-semibold text-ink">
                      {personnage.nom}
                    </p>
                    {personnage.role && (
                      <p className="truncate text-[13.5px] text-muted-foreground">
                        {personnage.role}
                      </p>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

function BlocLexique({ entrees }: { entrees: EntreeLexique[] }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-background">
      <EnteteBloc Icone={IconeLivreOuvert} titre="Lexique" compte={entrees.length} />
      <div className="px-6 pt-4 pb-5">
        {entrees.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground">Bientôt disponible.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-border">
            {entrees.map((entree) => (
              <li key={entree.id} className="flex items-center justify-between gap-3 py-2.5">
                <span className="min-w-0 truncate border-b-2 border-dotted border-primary-vif text-[15.5px] font-semibold text-ink">
                  {entree.mot}
                </span>
                {entree.sens_ar && (
                  <span
                    dir="rtl"
                    lang="ar"
                    className="shrink-0 font-arabe text-base font-medium text-primary-vif"
                  >
                    {entree.sens_ar}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function BlocLieux({ lieux }: { lieux: string[] }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-background">
      <EnteteBloc Icone={IconeLieu} titre="Lieux" compte={lieux.length} />
      <div className="px-6 pt-4 pb-5">
        {lieux.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground">Bientôt disponible.</p>
        ) : (
          <ul className="relative flex flex-col">
            <span
              aria-hidden="true"
              className="absolute top-3.5 bottom-3.5 left-[18px] w-px bg-[linear-gradient(var(--color-border-strong),var(--color-border),transparent)]"
            />
            {lieux.map((lieu) => (
              <li key={lieu} className="relative flex items-center gap-4 py-2.5">
                <span className="z-10 flex size-[37px] shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface text-primary">
                  <IconeLieu className="size-[17px]" />
                </span>
                <p className="pt-0.5 text-[15.5px] font-semibold text-ink">{lieu}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/** Libellé du badge de type — même logique que OngletSujets. */
function libelleType(type: string | null): string {
  return type === "argumentation" ? "Argumentation" : "Analyse";
}

function BlocSujets({ sujets }: { sujets: Sujet[] }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-background">
      <EnteteBloc Icone={IconeDocument} titre="Sujets liés" compte={sujets.length} />
      <div className="flex flex-col gap-2.5 px-6 pt-4 pb-5">
        {sujets.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground">Bientôt disponible.</p>
        ) : (
          sujets.map((sujet) => (
            <Link
              key={sujet.id}
              href="/redaction/nouvelle"
              className="group block rounded-[10px] border border-border bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
            >
              <p className="mb-1.5 flex items-center gap-2 text-[11px] font-bold tracking-wide text-primary-vif uppercase">
                <IconeDocument className="size-[13px]" />
                {libelleType(sujet.type)}
              </p>
              <p className="font-lecture text-[15px] leading-relaxed text-foreground">
                {sujet.titre}
              </p>
              <span className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-primary">
                Rédiger et faire corriger
                <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
