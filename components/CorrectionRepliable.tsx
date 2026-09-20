import ContenuMarkdown from "@/components/ContenuMarkdown";
import { IconeChevronBas, IconeCoche } from "@/components/icones";

interface CorrectionRepliableProps {
  /** Contenu Markdown de la correction, titre `##` de section exclu
   * (c'est le `<summary>` qui en tient lieu). */
  contenu: string;
  grandeTaille?: boolean;
  schemaCouleursArabe?: boolean;
}

/**
 * Correction d'un exercice, masquée par défaut derrière un bouton
 * "إظهار التصحيح" — demandé explicitement par l'utilisateur ("fais l
 * option de afficher la correction ou pas") : l'élève tente l'exercice
 * avant de voir le corrigé.
 *
 * `<details>`/`<summary>` natifs plutôt qu'un composant client avec
 * `useState` : même philosophie que le menu mobile de
 * BarreNavigation.tsx, aucun JavaScript nécessaire pour ouvrir/fermer,
 * et l'état reste accessible au clavier et aux lecteurs d'écran.
 */
export default function CorrectionRepliable({
  contenu,
  grandeTaille = false,
  schemaCouleursArabe = false,
}: CorrectionRepliableProps) {
  return (
    <details className="group mt-8 overflow-hidden rounded-[18px] border border-border bg-feuille shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 transition-colors hover:bg-surface-muted [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
            <IconeCoche className="size-4" />
          </span>
          <span className="font-serif text-lg font-bold text-ink">
            <span dir="rtl" className="font-arabe">
              التصحيح
            </span>
            <span className="ms-2 text-sm font-normal text-muted-foreground">— cliquer pour afficher</span>
          </span>
        </span>
        <IconeChevronBas className="size-5 shrink-0 text-subtle-foreground transition-transform group-open:rotate-180" />
      </summary>
      <div className="border-t border-border p-5 sm:p-8">
        <ContenuMarkdown texte={contenu} grandeTaille={grandeTaille} schemaCouleursArabe={schemaCouleursArabe} />
      </div>
    </details>
  );
}
