import Image from "next/image";

interface CouvertureOeuvreProps {
  url: string | null;
  titre: string;
}

/**
 * Couverture d'une œuvre, ou bloc de remplacement portant le titre si
 * aucune couverture n'est définie (jamais d'image cassée). Réutilisé
 * sur la carte de /oeuvres et sur l'en-tête de /oeuvres/[slug] : c'est
 * l'élément appelant qui fixe la taille (ce composant remplit son
 * conteneur via `fill`, le conteneur doit être `relative`).
 */
export default function CouvertureOeuvre({ url, titre }: CouvertureOeuvreProps) {
  if (url) {
    // `sizes` : sans lui, `fill` fait supposer à Next que l'image
    // occupe toute la largeur de l'écran, et il sert la plus grande
    // variante disponible — près de 2 Mo par couverture, pour une
    // vignette qui n'en occupe qu'un quart. Les valeurs suivent la
    // grille de /oeuvres : une colonne sur téléphone, deux à partir de
    // `sm`, trois à partir de `lg`.
    return (
      <Image
        src={url}
        alt={titre}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-surface-muted p-3 text-center text-sm font-medium text-muted-foreground">
      {titre}
    </div>
  );
}
