"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { IconeFleche } from "@/components/icones";
import type { AnnaleResumee } from "@/lib/supabase/annales";

const SESSIONS = [
  { cle: "toutes", libelle: "Toutes sessions" },
  { cle: "normale", libelle: "Normale" },
  { cle: "rattrapage", libelle: "Rattrapage" },
] as const;

type CleSession = (typeof SESSIONS)[number]["cle"];

/** Pastille d'état : verte et pleine si la ressource existe, grise et
 * éteinte sinon — l'élève voit d'un coup d'œil ce qu'il trouvera. */
function Etat({ actif, libelle }: { actif: boolean; libelle: string }) {
  return (
    <span
      className={`flex items-center gap-1.5 text-xs ${actif ? "font-semibold text-validation" : "text-subtle-foreground"}`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${actif ? "bg-validation" : "bg-border-strong"}`}
      />
      {libelle}
    </span>
  );
}

/** Un bouton de filtre de la colonne de gauche : libellé, nombre de
 * sujets concernés (compté sur la liste, jamais écrit en dur), et état
 * actif. Sur téléphone, ces boutons deviennent des pastilles en ligne. */
function Choix({
  actif,
  libelle,
  nombre,
  onClick,
}: {
  actif: boolean;
  libelle: string;
  nombre: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={actif}
      className={`flex shrink-0 items-center justify-between gap-3 rounded-[10px] px-3 py-2 text-start text-sm transition-colors lg:w-full ${
        actif
          ? "bg-primary font-semibold text-white"
          : "border border-border bg-surface text-foreground hover:border-border-strong lg:border-transparent lg:bg-transparent lg:hover:bg-surface-muted"
      }`}
    >
      <span>{libelle}</span>
      <span
        className={`rounded-full px-1.5 text-xs font-bold tabular-nums ${actif ? "bg-white/20 text-white" : "text-subtle-foreground"}`}
      >
        {nombre}
      </span>
    </button>
  );
}

function Groupe({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-bold tracking-[0.14em] text-subtle-foreground uppercase">
        {titre}
      </p>
      <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:-mx-9 sm:px-9 lg:mx-0 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:px-0 lg:pb-0">
        {children}
      </div>
    </div>
  );
}

/**
 * La liste filtrable des sujets d'une matière. Recomposée à la demande
 * de l'utilisateur (« une autre composition pour les examens régionaux,
 * filtres année… ») : les filtres passent dans une colonne à gauche
 * (année, session, académie, œuvre), chacun avec le nombre de sujets
 * qu'il donne, et les sujets sont rangés par année, la plus récente
 * d'abord. Sur téléphone, la colonne passe au-dessus et chaque filtre
 * devient une rangée de pastilles qui défile.
 *
 * Composant client : les filtres agissent sans aller-retour serveur. La
 * liste complète d'une matière tient largement en mémoire (quelques
 * dizaines de sujets au plus).
 *
 * Un filtre n'apparaît que s'il départage quelque chose : pas de menu
 * des œuvres en arabe ni en histoire-géographie (pas d'œuvre au
 * programme), pas de choix de session tant que tous les sujets sont de
 * la session normale.
 */
export default function ListeAnnales({
  annales,
  matiereSlug,
  titreMatiere,
}: {
  annales: AnnaleResumee[];
  matiereSlug: string;
  titreMatiere: string;
}) {
  const [recherche, setRecherche] = useState("");
  const [annee, setAnnee] = useState<number | "toutes">("toutes");
  const [session, setSession] = useState<CleSession>("toutes");
  const [oeuvre, setOeuvre] = useState("toutes");
  const [academie, setAcademie] = useState("toutes");

  const compter = <T,>(valeurs: (T | null)[]) => {
    const comptes = new Map<T, number>();
    for (const v of valeurs) if (v !== null && v !== "") comptes.set(v, (comptes.get(v) ?? 0) + 1);
    return comptes;
  };

  const annees = useMemo(
    () => [...compter(annales.map((a) => a.annee)).entries()].sort((a, b) => b[0] - a[0]),
    [annales],
  );
  const academies = useMemo(
    () => [...compter(annales.map((a) => a.academie)).entries()].sort((a, b) => a[0].localeCompare(b[0], "fr")),
    [annales],
  );
  const oeuvres = useMemo(
    () => [...compter(annales.map((a) => a.oeuvre)).entries()].sort((a, b) => a[0].localeCompare(b[0], "fr")),
    [annales],
  );
  const sessions = useMemo(() => compter(annales.map((a) => a.session)), [annales]);

  const visibles = useMemo(() => {
    const termes = recherche.trim().toLowerCase();
    return annales.filter((annale) => {
      if (annee !== "toutes" && annale.annee !== annee) return false;
      if (session !== "toutes" && annale.session !== session) return false;
      if (oeuvre !== "toutes" && annale.oeuvre !== oeuvre) return false;
      if (academie !== "toutes" && annale.academie !== academie) return false;
      if (!termes) return true;
      const texte =
        `${annale.annee} ${annale.session} ${annale.oeuvre ?? ""} ${annale.academie ?? ""}`.toLowerCase();
      return termes.split(/\s+/).every((mot) => texte.includes(mot));
    });
  }, [annales, recherche, annee, session, oeuvre, academie]);

  // Les sujets visibles, rangés par année (déjà triés du plus récent
  // au plus ancien par la requête).
  const parAnnee = useMemo(() => {
    const groupes: { annee: number; sujets: AnnaleResumee[] }[] = [];
    for (const a of visibles) {
      const dernier = groupes[groupes.length - 1];
      if (dernier?.annee === a.annee) dernier.sujets.push(a);
      else groupes.push({ annee: a.annee, sujets: [a] });
    }
    return groupes;
  }, [visibles]);

  const filtre =
    recherche !== "" || annee !== "toutes" || session !== "toutes" || oeuvre !== "toutes" || academie !== "toutes";

  function toutEffacer() {
    setRecherche("");
    setAnnee("toutes");
    setSession("toutes");
    setOeuvre("toutes");
    setAcademie("toutes");
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
      <aside className="flex flex-col gap-5 lg:sticky lg:top-6 lg:self-start">
        <label htmlFor="recherche-annales" className="sr-only">
          Rechercher un sujet
        </label>
        <input
          id="recherche-annales"
          type="search"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          placeholder={oeuvres.length > 0 ? "2022, Antigone…" : "2023, Casablanca…"}
          className="w-full rounded-[12px] border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-subtle-foreground focus:border-primary focus:outline-none"
        />

        {annees.length > 1 && (
          <Groupe titre="Année">
            <Choix actif={annee === "toutes"} libelle="Toutes" nombre={annales.length} onClick={() => setAnnee("toutes")} />
            {annees.map(([a, n]) => (
              <Choix key={a} actif={annee === a} libelle={String(a)} nombre={n} onClick={() => setAnnee(a)} />
            ))}
          </Groupe>
        )}

        {sessions.size > 1 && (
          <Groupe titre="Session">
            {SESSIONS.map((s) => (
              <Choix
                key={s.cle}
                actif={session === s.cle}
                libelle={s.cle === "toutes" ? "Toutes" : s.libelle}
                nombre={s.cle === "toutes" ? annales.length : (sessions.get(s.cle) ?? 0)}
                onClick={() => setSession(s.cle)}
              />
            ))}
          </Groupe>
        )}

        {academies.length > 1 && (
          <Groupe titre="Académie">
            <Choix actif={academie === "toutes"} libelle="Toutes" nombre={annales.length} onClick={() => setAcademie("toutes")} />
            {academies.map(([a, n]) => (
              <Choix key={a} actif={academie === a} libelle={a} nombre={n} onClick={() => setAcademie(a)} />
            ))}
          </Groupe>
        )}

        {oeuvres.length > 1 && (
          <Groupe titre="Œuvre">
            <Choix actif={oeuvre === "toutes"} libelle="Toutes" nombre={annales.length} onClick={() => setOeuvre("toutes")} />
            {oeuvres.map(([o, n]) => (
              <Choix key={o} actif={oeuvre === o} libelle={o} nombre={n} onClick={() => setOeuvre(o)} />
            ))}
          </Groupe>
        )}
      </aside>

      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            <strong className="font-bold text-ink">{visibles.length}</strong>{" "}
            {visibles.length > 1 ? "sujets" : "sujet"}
            {filtre && ` sur ${annales.length}`}
          </p>
          {filtre && (
            <button type="button" onClick={toutEffacer} className="text-sm font-semibold text-primary hover:underline">
              Effacer les filtres
            </button>
          )}
        </div>

        {visibles.length === 0 ? (
          <p className="rounded-[18px] border border-dashed border-border-strong bg-surface p-8 text-center text-sm text-muted-foreground">
            Aucun sujet ne correspond à cette recherche.
          </p>
        ) : (
          parAnnee.map((groupe) => (
            <section key={groupe.annee} className="flex flex-col gap-4">
              <div className="flex items-baseline gap-4">
                <h2 className="font-serif text-[34px] leading-none font-bold text-ink sm:text-[42px]">
                  {groupe.annee}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {groupe.sujets.length} {groupe.sujets.length > 1 ? "sujets" : "sujet"}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-border" />
              </div>

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 2xl:grid-cols-3">
                {groupe.sujets.map((annale) => (
                  <li key={annale.id}>
                    <Link
                      href={`/examens-regionaux/${matiereSlug}/${annale.id}`}
                      className="group flex h-full items-center gap-4 rounded-[16px] border border-border bg-surface p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)] sm:p-5"
                    >
                      <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <span className="font-titre text-lg leading-snug font-bold text-ink">
                          {annale.academie ?? titreMatiere}
                        </span>
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-primary-tint px-2.5 py-0.5 text-xs font-bold text-primary">
                            Session {annale.session}
                          </span>
                          {annale.oeuvre && (
                            <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-ink">
                              {annale.oeuvre}
                            </span>
                          )}
                        </span>
                        <span className="flex items-center gap-3">
                          <Etat actif={annale.aCorrige} libelle="Corrigé" />
                          <Etat actif={annale.aEntrainement} libelle="Entraînement" />
                        </span>
                      </div>
                      <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-muted text-primary transition-colors group-hover:bg-primary group-hover:text-white"
                      >
                        <IconeFleche className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
