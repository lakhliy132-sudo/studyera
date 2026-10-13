"use client";

import { useEffect, useState } from "react";

/**
 * Mot qui change toutes les deux secondes dans le grand titre de
 * l'accueil visiteur (« راجع الفرنسية… », « راجع العربية… »), avec
 * une petite entrée animée (`animate-mot-entre`, app/globals.css).
 * Chaque mot a sa couleur : celle de sa matière.
 *
 * La liste complète est donnée aux lecteurs d'écran une seule fois, le
 * mot qui tourne leur est caché pour ne pas être relu en boucle.
 */
export default function MotTournant({ mots }: { mots: { texte: string; couleur: string }[] }) {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const minuteur = setInterval(() => setIndice((i) => (i + 1) % mots.length), 2200);
    return () => clearInterval(minuteur);
  }, [mots.length]);

  const mot = mots[indice];
  return (
    <>
      <span className="sr-only">{mots.map((m) => m.texte).join("، ")}</span>
      <span aria-hidden="true" className="inline-block">
        <span key={mot.texte} className="inline-block animate-mot-entre" style={{ color: mot.couleur }}>
          {mot.texte}
        </span>
      </span>
    </>
  );
}
