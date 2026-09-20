import { IconeCoeur, IconeEtoile } from "@/components/icones";

/**
 * Carte motivationnelle en bas de la colonne de droite de l'accueil —
 * reprend la maquette fournie par l'utilisateur ("fais la comme dans
 * la photo sur l acceuil") : fond bleu nuit, pastille étoile en haut à
 * gauche, cœur au trait en haut à droite, phrase sur deux lignes, et
 * une silhouette de montagnes en bas.
 *
 * Les montagnes sont un SVG inline plutôt qu'une photo : la maquette
 * n'a été fournie qu'en image de chat, aucun fichier n'est disponible
 * pour la découper, et inventer une photo de banque d'images a déjà
 * été écarté plus tôt dans le projet.
 *
 * Une première version affichait la phrase sur une seule ligne avec un
 * dégradé bleu → mauve, plus éloignée de la maquette.
 */
export default function CarteMotivationAccueil() {
  return (
    <div
      className="relative flex min-h-[150px] flex-col justify-start overflow-hidden rounded-[24px] p-6 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      style={{ background: "linear-gradient(160deg, #1e3a6b 0%, #14224a 55%, #0f1b3d 100%)" }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15">
          <IconeEtoile className="size-[18px]" />
        </span>
        <IconeCoeur className="size-5 shrink-0 text-white/70" />
      </div>

      <p className="relative z-10 mt-4 max-w-[190px] text-sm leading-snug">
        Tu es plus proche de tes rêves que tu ne le penses.
      </p>

      {/* Montagnes décoratives, en bas de la carte comme sur la maquette. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 320 90"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70px] w-full"
      >
        <path d="M0 90 L70 38 L118 72 L168 26 L236 90 Z" fill="rgba(255,255,255,0.10)" />
        <path d="M150 90 L214 34 L268 66 L320 30 L320 90 Z" fill="rgba(255,255,255,0.07)" />
      </svg>
    </div>
  );
}
