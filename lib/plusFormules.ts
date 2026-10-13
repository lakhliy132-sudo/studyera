import { cleCorrecteurPresente } from "@/lib/correcteur";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { QUOTA_QUOTIDIEN_MAX } from "@/lib/quota";
import { resumerAnnalesParMatiere } from "@/lib/supabase/annales";
import { compterCours, recupererOeuvresParFiliere } from "@/lib/supabase/contenu";

/** Les « + » communs aux deux formules (accueil visiteur et /acces) :
 * ce que l'accès ouvre, compté en base au moment de l'affichage. Le
 * correcteur n'y figure que si sa clé d'API est posée. */
export async function plusCommunsFormules(): Promise<string[]> {
  const [nombreCours, annales, oeuvres] = await Promise.all([
    compterCours(FILIERE_ACTUELLE),
    resumerAnnalesParMatiere(),
    recupererOeuvresParFiliere(FILIERE_ACTUELLE),
  ]);
  const nombreAnnales = Object.values(annales).reduce((somme, r) => somme + r.nombre, 0);
  return [
    `${nombreCours} درس فـ 4 مواد`,
    `${nombreAnnales} امتحان جهوي بالكرونو`,
    `${oeuvres.length} مؤلفات ديال الفرنسية فصل بفصل`,
    cleCorrecteurPresente() ? `مصحح الإنشاء: ${QUOTA_QUOTIDIEN_MAX} تصحيحات فالنهار` : null,
    "فلاش كارت وتمارين اللغة",
    "الجماعة والكالندريي ديال الامتحان",
  ].filter((p): p is string => p !== null);
}
