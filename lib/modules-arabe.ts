/** Les 4 modules du programme d'arabe — demandé explicitement par
 * l'utilisateur ("dans la partie d arabe fais 4 case المجزوءة 1 et 2 et
 * 3 et 4"). Une couleur par module, comme les puces de leçons ailleurs
 * sur le site.
 *
 * Les leçons d'un module sont reconnues par le préfixe de leur `slug`
 * (`majzuaa-<numéro>-*`, même principe que `histoire-*`/`geographie-*`
 * pour histoire-géo) plutôt que par une colonne dédiée en base.
 *
 * Partagé entre /arabe (les 4 cases) et /arabe/majzuaa/[numero] (la
 * page d'un module).
 */
/** `sousTitre` : le thème du module. La المجزوءة 3 en a porté un un
 * moment ("المفاهيم: الحداثة - التواصل - الإبداع", repris de la façon
 * dont l'utilisateur avait présenté le module), retiré à sa demande
 * ("DANS MAJZO2A 3 enleve le titre") — le module contient depuis
 * d'autres leçons que ces trois concepts. Le champ reste en place
 * pour un module qui en aurait besoin plus tard. */
export const MODULES_ARABE = [
  { numero: 1, titre: "المجزوءة 1", couleur: "#2563eb", sousTitre: undefined },
  { numero: 2, titre: "المجزوءة 2", couleur: "#7c3aed", sousTitre: undefined },
  { numero: 3, titre: "المجزوءة 3", couleur: "#059669", sousTitre: undefined },
  { numero: 4, titre: "المجزوءة 4", couleur: "#ea580c", sousTitre: undefined },
] as const;

export type ModuleArabe = (typeof MODULES_ARABE)[number];

export function recupererModuleArabe(numero: string): ModuleArabe | undefined {
  return MODULES_ARABE.find((module) => String(module.numero) === numero);
}

export function prefixeSlugModule(numero: number): string {
  return `majzuaa-${numero}-`;
}
