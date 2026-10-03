"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";

import {
  corrigerEtEnregistrer,
  type EtatCorrection,
} from "@/app/(eleve)/redaction/actions";
import { IconeFleche } from "@/components/icones";

export interface SujetChoisissable {
  id: string;
  titre: string;
  type: string;
  consigne: string;
  oeuvreTitre: string | null;
}

function BoutonEnvoyer({ desactive }: { desactive: boolean }) {
  // `useFormStatus` doit être appelé dans un composant enfant du
  // `<form>` : il lit l'état de la soumission en cours.
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending || desactive}
      className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Correction en cours…" : "Corriger ma copie"}
      {!pending && <IconeFleche className="size-4" />}
    </button>
  );
}

/**
 * Formulaire d'envoi d'une copie au correcteur : choix du sujet,
 * rappel de la consigne, zone de saisie, envoi.
 *
 * Le texte est tapé ou collé — pas encore de photo de copie : il
 * faudrait un stockage d'images et une transcription, et l'essentiel
 * (recevoir une correction) fonctionne sans.
 *
 * Le compteur de caractères est vérifié ici pour éviter un aller-retour
 * inutile, mais la vraie validation reste dans l'action serveur : un
 * contrôle fait seulement dans le navigateur ne protège rien.
 */
export default function FormulaireCopie({
  sujets,
  quotaRestant,
  correcteurPret,
}: {
  sujets: SujetChoisissable[];
  quotaRestant: number;
  correcteurPret: boolean;
}) {
  const [etat, action] = useActionState<EtatCorrection, FormData>(
    corrigerEtEnregistrer,
    { erreur: null },
  );
  const [sujetId, setSujetId] = useState(sujets[0]?.id ?? "");
  const [texte, setTexte] = useState("");

  const sujet = sujets.find((s) => s.id === sujetId) ?? null;
  const tropCourt = texte.trim().length < 200;

  return (
    <form action={action} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="sujet_id" className="text-sm font-semibold text-ink">
          Le sujet traité
        </label>
        <select
          id="sujet_id"
          name="sujet_id"
          value={sujetId}
          onChange={(e) => setSujetId(e.target.value)}
          className="w-full rounded-[12px] border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
        >
          {sujets.map((s) => (
            <option key={s.id} value={s.id}>
              {s.oeuvreTitre ? `${s.oeuvreTitre} — ` : ""}
              {s.titre}
            </option>
          ))}
        </select>
      </div>

      {sujet && (
        <div className="rounded-[14px] border border-border bg-surface-muted p-4">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Consigne · {sujet.type}
          </p>
          <p className="mt-2 font-lecture text-[15px] leading-relaxed text-foreground">
            {sujet.consigne}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-3">
          <label htmlFor="texte" className="text-sm font-semibold text-ink">
            Ta rédaction
          </label>
          <span
            className={`text-xs ${tropCourt ? "text-muted-foreground" : "text-validation"}`}
          >
            {texte.trim().length} caractères
            {tropCourt ? " (200 minimum)" : ""}
          </span>
        </div>
        <textarea
          id="texte"
          name="texte"
          rows={16}
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
          placeholder="Écris ou colle ici ta rédaction, telle que tu l'as rendue."
          className="w-full resize-y rounded-[14px] border border-border bg-surface p-4 font-lecture text-[15px] leading-relaxed text-foreground focus:border-primary focus:outline-none"
        />
      </div>

      {etat.erreur && (
        <p
          role="alert"
          className="rounded-[12px] border border-erreur/30 bg-erreur/10 px-4 py-3 text-sm text-erreur"
        >
          {etat.erreur}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs text-muted-foreground">
          {quotaRestant > 0
            ? `${quotaRestant} correction${quotaRestant > 1 ? "s" : ""} restante${quotaRestant > 1 ? "s" : ""} aujourd'hui.`
            : "Tu as utilisé toutes tes corrections du jour."}
        </span>
        <BoutonEnvoyer
          desactive={!correcteurPret || quotaRestant <= 0 || tropCourt}
        />
      </div>
    </form>
  );
}
