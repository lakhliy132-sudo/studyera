"use client";

import { useState } from "react";

import { creerClientNavigateur } from "@/lib/supabase/client";

type Mode = "connexion" | "inscription" | "oubli";

interface Message {
  type: "erreur" | "succes";
  texte: string;
}

/** Messages de Supabase Auth, en français, par code d'erreur. Un code
 * inconnu donne un message générique plutôt que le texte anglais. */
function traduireErreur(code: string | undefined, mode: Mode): string {
  switch (code) {
    case "invalid_credentials":
      return "E-mail ou mot de passe incorrect.";
    case "email_not_confirmed":
      return "Confirme d'abord ton e-mail : clique sur le lien reçu (regarde aussi dans les spams).";
    case "user_already_exists":
    case "email_exists":
      return "Un compte existe déjà avec cet e-mail. Connecte-toi.";
    case "weak_password":
      return "Mot de passe trop faible : au moins 6 caractères.";
    case "over_email_send_rate_limit":
    case "over_request_rate_limit":
      return "Trop de tentatives d'un coup. Réessaie dans quelques minutes, ou passe par Google.";
    case "email_address_invalid":
      return "Cette adresse e-mail n'est pas valide.";
    default:
      return mode === "connexion"
        ? "La connexion n'a pas marché. Réessaie dans un instant."
        : "Ça n'a pas marché. Réessaie dans un instant.";
  }
}

/**
 * Formulaire de /connexion : se connecter, créer un compte, ou
 * recevoir un lien pour changer de mot de passe. Google ou e-mail et
 * mot de passe, au choix de l'élève (« Google + e-mail/mot de passe »,
 * choisi par l'utilisateur).
 *
 * Après la création d'un compte, l'accès n'est pas encore ouvert : il
 * l'est à la main, une fois le paiement reçu sur WhatsApp (lib/acces.ts).
 * Le compte connecté arrive donc sur /acces, qui l'explique.
 *
 * L'inscription par e-mail demande une confirmation (réglage Supabase
 * « Confirm email ») : sans session au retour de `signUp`, on dit à
 * l'élève d'aller cliquer le lien reçu.
 */
export default function FormulaireConnexion({ modeInitial }: { modeInitial: Mode }) {
  const [mode, setMode] = useState<Mode>(modeInitial);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [voirMotDePasse, setVoirMotDePasse] = useState(false);
  const [enCours, setEnCours] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);

  function changerMode(suivant: Mode) {
    setMode(suivant);
    setMessage(null);
  }

  async function avecGoogle() {
    setEnCours(true);
    const supabase = creerClientNavigateur();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/api/auth/retour` },
    });
    if (error) {
      setEnCours(false);
      setMessage({ type: "erreur", texte: traduireErreur(error.code, mode) });
    }
  }

  async function envoyer(evenement: React.FormEvent) {
    evenement.preventDefault();
    setEnCours(true);
    setMessage(null);
    const supabase = creerClientNavigateur();
    const retour = `${window.location.origin}/api/auth/retour`;

    if (mode === "connexion") {
      const { error } = await supabase.auth.signInWithPassword({ email, password: motDePasse });
      if (error) {
        setMessage({ type: "erreur", texte: traduireErreur(error.code, mode) });
        setEnCours(false);
        return;
      }
      // Rechargement complet : la barre de navigation et le menu
      // dépendent de la session, lue côté serveur.
      window.location.assign("/tableau-de-bord");
      return;
    }

    if (mode === "inscription") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password: motDePasse,
        options: { data: { full_name: nom.trim() || undefined }, emailRedirectTo: retour },
      });
      if (error) {
        setMessage({ type: "erreur", texte: traduireErreur(error.code, mode) });
        setEnCours(false);
        return;
      }
      if (data.session) {
        window.location.assign("/acces");
        return;
      }
      // Confirmation par e-mail active : Supabase répond sans session, et
      // sans identité si l'adresse a déjà un compte (il ne le dit pas
      // autrement, pour ne pas révéler quelles adresses sont inscrites).
      if (data.user && data.user.identities?.length === 0) {
        setMessage({ type: "erreur", texte: traduireErreur("user_already_exists", mode) });
      } else {
        setMessage({
          type: "succes",
          texte: `Compte créé. On t'a envoyé un lien à ${email} : clique dessus pour confirmer ton adresse (regarde aussi dans les spams).`,
        });
      }
      setEnCours(false);
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${retour}?suite=/connexion/nouveau-mot-de-passe`,
    });
    setEnCours(false);
    setMessage(
      error
        ? { type: "erreur", texte: traduireErreur(error.code, mode) }
        : { type: "succes", texte: `Si un compte existe pour ${email}, un lien pour changer ton mot de passe vient de partir.` },
    );
  }

  const titres: Record<Mode, { titre: string; sous: string; bouton: string }> = {
    connexion: { titre: "Content de te revoir", sous: "Connecte-toi pour reprendre tes révisions.", bouton: "Se connecter" },
    inscription: { titre: "Crée ton compte", sous: "Une minute, et ton compte est prêt.", bouton: "Créer mon compte" },
    oubli: { titre: "Mot de passe oublié", sous: "Donne ton e-mail : on t'envoie un lien pour en choisir un nouveau.", bouton: "Envoyer le lien" },
  };
  const t = titres[mode];

  return (
    <div className="flex flex-col gap-7">
      {mode !== "oubli" && (
        <div className="relative grid grid-cols-2 rounded-full bg-surface-muted p-1.5" role="tablist" aria-label="Connexion ou inscription">
          <span
            aria-hidden="true"
            className="absolute inset-y-1.5 start-1.5 w-[calc(50%-6px)] rounded-full bg-surface shadow-[0_4px_14px_-6px_rgba(15,23,42,0.35)] transition-transform duration-300 ease-out"
            style={{ transform: mode === "inscription" ? "translateX(100%)" : "translateX(0)" }}
          />
          {(["connexion", "inscription"] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              onClick={() => changerMode(m)}
              className={`relative rounded-full py-2.5 text-sm font-semibold transition-colors ${mode === m ? "text-ink" : "text-muted-foreground hover:text-ink"}`}
            >
              {m === "connexion" ? "Se connecter" : "Créer un compte"}
            </button>
          ))}
        </div>
      )}

      <div key={mode} className="flex flex-col gap-1.5 animate-entree-carte">
        <h1 className="font-titre text-[28px] leading-tight text-ink sm:text-[34px]">{t.titre}</h1>
        <p className="text-[15px] text-muted-foreground">{t.sous}</p>
      </div>

      {mode !== "oubli" && (
        <>
          <button
            type="button"
            onClick={avecGoogle}
            disabled={enCours}
            className="flex items-center justify-center gap-3 rounded-2xl border border-border-strong bg-surface px-5 py-3.5 text-[15px] font-semibold text-ink transition-all hover:-translate-y-px hover:shadow-[0_10px_24px_-14px_rgba(15,23,42,0.4)] disabled:opacity-60"
          >
            <LogoGoogle />
            Continuer avec Google
          </button>
          <div className="flex items-center gap-4 text-xs font-semibold tracking-wide text-subtle-foreground uppercase">
            <span className="h-px flex-1 bg-border" />
            ou avec ton e-mail
            <span className="h-px flex-1 bg-border" />
          </div>
        </>
      )}

      <form onSubmit={envoyer} className="flex flex-col gap-4">
        {mode === "inscription" && (
          <Champ id="nom" libelle="Prénom et nom">
            <input id="nom" type="text" autoComplete="name" value={nom} onChange={(e) => setNom(e.target.value)} className={CLASSE_CHAMP} placeholder="Ex. Salma Bennani" />
          </Champ>
        )}
        <Champ id="email" libelle="E-mail">
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={CLASSE_CHAMP}
            placeholder="ton.email@exemple.com"
          />
        </Champ>
        {mode !== "oubli" && (
          <Champ
            id="mot-de-passe"
            libelle="Mot de passe"
            action={
              mode === "connexion" ? (
                <button type="button" onClick={() => changerMode("oubli")} className="text-xs font-semibold text-primary hover:underline">
                  Oublié ?
                </button>
              ) : null
            }
          >
            <div className="relative">
              <input
                id="mot-de-passe"
                type={voirMotDePasse ? "text" : "password"}
                required
                minLength={6}
                autoComplete={mode === "inscription" ? "new-password" : "current-password"}
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                className={`${CLASSE_CHAMP} pe-20`}
                placeholder={mode === "inscription" ? "6 caractères minimum" : "••••••••"}
              />
              <button
                type="button"
                onClick={() => setVoirMotDePasse((v) => !v)}
                className="absolute inset-y-0 end-3 my-auto h-fit rounded-md px-2 py-1 text-xs font-semibold text-muted-foreground hover:text-ink"
              >
                {voirMotDePasse ? "Cacher" : "Voir"}
              </button>
            </div>
          </Champ>
        )}

        {message && (
          <p
            role={message.type === "erreur" ? "alert" : "status"}
            className={`rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
              message.type === "erreur" ? "border-erreur/40 bg-erreur/10 text-ink" : "border-validation/40 bg-validation/10 text-ink"
            }`}
          >
            {message.texte}
          </p>
        )}

        <button
          type="submit"
          disabled={enCours}
          className="mt-1 rounded-2xl bg-primary px-5 py-4 text-[15px] font-bold text-primary-foreground shadow-[0_14px_30px_-14px_var(--color-primary)] transition-all hover:-translate-y-px disabled:translate-y-0 disabled:opacity-60"
        >
          {enCours ? "Un instant…" : t.bouton}
        </button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        {mode === "connexion" ? (
          <>
            Pas encore de compte ?{" "}
            <button type="button" onClick={() => changerMode("inscription")} className="font-semibold text-primary hover:underline">
              Crée-le ici
            </button>
          </>
        ) : mode === "inscription" ? (
          <>
            Déjà inscrit ?{" "}
            <button type="button" onClick={() => changerMode("connexion")} className="font-semibold text-primary hover:underline">
              Connecte-toi
            </button>
          </>
        ) : (
          <button type="button" onClick={() => changerMode("connexion")} className="font-semibold text-primary hover:underline">
            ← Retour à la connexion
          </button>
        )}
      </p>
    </div>
  );
}

const CLASSE_CHAMP =
  "w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-[15px] text-foreground transition-colors placeholder:text-subtle-foreground focus:border-primary focus:ring-4 focus:ring-primary/15 focus:outline-none";

function Champ({ id, libelle, action, children }: { id: string; libelle: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-semibold text-ink">
          {libelle}
        </label>
        {action}
      </div>
      {children}
    </div>
  );
}

/** Le « G » de Google, dans ses couleurs (celles de la marque, que
 * l'élève reconnaît : seule exception aux jetons sur ce bouton). */
function LogoGoogle() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
      <path fill="#4285F4" d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.45a5.5 5.5 0 0 1-2.4 3.62v3h3.88c2.27-2.1 3.57-5.18 3.57-8.65Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.93-2.9l-3.88-3c-1.07.72-2.45 1.15-4.05 1.15-3.12 0-5.76-2.1-6.7-4.94H1.3v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.3 14.31a7.2 7.2 0 0 1 0-4.62v-3.1H1.3a12 12 0 0 0 0 10.82l4-3.1Z" />
      <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.6 4.58 1.8l3.43-3.44A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.3 6.59l4 3.1C6.24 6.85 8.88 4.75 12 4.75Z" />
    </svg>
  );
}
