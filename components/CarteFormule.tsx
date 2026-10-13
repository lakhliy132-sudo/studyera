import { lienWhatsapp, prixParMois, type Formule, type PlusFormule } from "@/lib/abonnement";

/** Carte d'une formule. La formule mise en avant est sombre, entourée
 * d'une bordure en dégradé qui glisse ; l'autre reste claire. */
export default function CarteFormule({
  formule,
  vedette,
  plus,
  email = null,
}: {
  formule: Formule;
  vedette: boolean;
  plus: PlusFormule[];
  /** E-mail du compte, ajouté au message WhatsApp pour savoir quel
   * compte activer (page /acces). */
  email?: string | null;
}) {
  const contenu = (
    <div
      className={`flex h-full flex-col gap-6 rounded-[26px] p-7 sm:p-9 ${vedette ? "text-white" : "border border-border bg-surface"}`}
      style={vedette ? { background: "linear-gradient(160deg, var(--fond-sombre-haut), var(--fond-sombre-bas))" } : undefined}
    >
      <span className={`text-xl font-bold ${vedette ? "text-white" : "text-ink"}`}>{formule.nom}</span>
      <div className="flex items-end gap-2">
        <span className={`font-affiche text-7xl leading-none tabular-nums ${vedette ? "text-white" : "text-ink"}`}>{formule.prix}</span>
        <span className="pb-2 text-lg font-bold">درهم</span>
        <span className={`pb-2 text-base ${vedette ? "text-white/70" : "text-muted-foreground"}`}>{formule.periode}</span>
      </div>
      <p className={`border-y py-3 text-[15px] ${vedette ? "border-white/15 text-white/85" : "border-border text-muted-foreground"}`}>
        يعني <strong className={vedette ? "text-white" : "text-ink"}>{prixParMois(formule)}</strong> درهم فالشهر
      </p>
      <ul className="flex flex-1 flex-col gap-3">
        {plus.map((p) => (
          <li key={p.texte} className={`flex items-start gap-3 text-[15px] ${p.fort ? "font-bold" : ""} ${vedette ? "text-white" : p.fort ? "text-ink" : "text-foreground"}`}>
            <span
              className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-sm leading-none font-bold ${vedette ? "bg-white/15 text-white" : "bg-primary-tint text-primary"}`}
            >
              +
            </span>
            {p.texte}
          </li>
        ))}
      </ul>
      <a
        href={lienWhatsapp(formule, email)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-2 inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-lg font-bold text-white transition-transform hover:-translate-y-0.5"
        style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
      >
        {vedette && <span aria-hidden="true" className="absolute inset-0 rounded-full animate-pulsation" style={{ backgroundColor: "#25d366" }} />}
        <IconeWhatsapp className="relative size-6" />
        <span className="relative">خلص عبر واتساب</span>
      </a>
    </div>
  );

  if (!vedette) return contenu;
  return (
    <div
      className="h-full rounded-[28px] p-[2px] shadow-[0_30px_60px_-30px_var(--color-primary)] animate-brillance"
      style={{
        backgroundImage: "linear-gradient(90deg, var(--color-primary), var(--color-consigne), var(--color-primary-vif), var(--color-primary))",
        backgroundSize: "200% 100%",
      }}
    >
      {contenu}
    </div>
  );
}

/** Logo WhatsApp (glyphe officiel simplifié), sur le bouton de paiement. */
function IconeWhatsapp({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.96-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.44 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.37-11.37 0-3.03-1.18-5.89-3.33-8.03" />
    </svg>
  );
}
