import { redirect } from "next/navigation";

/**
 * /tableau-de-bord n'existe plus : retiré à la demande de l'utilisateur
 * (« enlève du menu Tableau de bord, je le veux plus »). L'accueil élève
 * (components/AccueilEleve.tsx) a pris sa place. L'adresse renvoie vers
 * l'accueil pour les anciens favoris et les liens déjà partagés.
 */
export default function PageTableauDeBord() {
  redirect("/");
}
