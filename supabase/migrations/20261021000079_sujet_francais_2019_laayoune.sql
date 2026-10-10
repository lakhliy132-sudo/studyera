-- Sujet de français, examen régional 2019 (session normale), académie
-- Laâyoune-Sakia El Hamra.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2019 جهة العيون الساقية الحمراء »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Sujet à deux textes : Le Dernier Jour d'un condamné (texte 1) et La Boîte à
-- merveilles (texte 2) ; aucune œuvre unique n'est retenue pour le filtre.
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين لجهة العيون الساقية
-- الحمراء », « الدورة العادية 2019 », « المترشحون الرسميون », « السنة الاولى من
-- سلك البكالوريا », durée « 2 س » (« ساعتان » sur le corrigé), code 105.
-- Coefficient non saisi : 3 pour « العلوم الاقتصادية والتدبير », 4 pour les lettres
-- et sciences humaines, sciences expérimentales, sciences mathématiques et
-- sciences et technologies.
-- Les deux textes sont en deux colonnes ; ils ont été recopiés depuis le scan.
-- Deux espaces manquants du scan sont rétablis (« mort ! Je », « […] Je ») ;
-- « Faim », « couvre le bien », « moite huileux », « tacherai », « survint » et
-- « ?- Je compte » sont recopiés tels quels.
-- Le corrigé donne « (0,5pt) » à la question 7a et « (0,25x2pt) » à la 7b,
-- l'inverse de la feuille (« 0,25x2 pt » et « 0,50 pt ») ; le total est le même.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2019,
  $sujet$normale$sujet$,
  $sujet$Laâyoune-Sakia El Hamra$sujet$,
  $sujet$Sciences économiques et gestion ; lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies$sujet$,
  120,
  $sujet$## Texte

**TEXTE 1**

Il est dix heures.

O ma pauvre petite fille ! Encore six heures, et je serai mort ! Je serai quelque chose d'immonde qui traînera sur la table froide des amphithéâtres ; une tête qu'on moulera d'un côté, un tronc qu'on disséquera de l'autre ; puis de ce qui restera, on en mettra plein une bière, et le tout ira à Clamart.

Voilà ce qu'ils vont faire de ton père, ces hommes dont aucun ne me hait, qui tous me plaignent et tous pourraient me sauver. Ils vont me tuer. Comprends-tu cela, Marie ? Me tuer de sang-froid, en cérémonie, pour le bien de la chose ! Ah grand Dieu !

Pauvre petite ! Ton père qui t'aimait tant, ton père qui baisait ton petit cou blanc et parfumé, qui passait la main sans cesse dans les boucles de tes cheveux comme sur de la soie ; qui prenait ton joli visage rond dans sa main, qui te faisait sauter sur ses genoux, et le soir joignait tes deux petites mains pour prier Dieu ! […]

Oh ! Si ces jurés l'avaient vue, au moins, ma jolie petite Marie ! Ils auraient compris qu'il ne faut pas tuer le père d'un enfant de trois ans.

**TEXTE 2**

– Je ne veux pas non plus du misérable salaire d'un ouvrier. La saison de la moisson commence à peine, on embauche des moissonneurs. J'irai travailler aux environs de Fès.

– Tu oseras m'abandonner avec un enfant malade ?

– Préfères-tu mourir de Faim ? Aimerais-tu devenir un objet de pitié pour tes amies et tes voisines ? Je serai à deux jours de marche de la ville. Sidi Mohammed ira mieux demain. Fais-lui une soupe à la menthe sauvage ; couvre le bien afin qu'il transpire abondamment. Aujourd'hui, il a moins de fièvre que la nuit dernière.

– C'est un châtiment de Dieu qui nous accable. Ce sont ces maudits bracelets qui ont semé le malheur dans notre maison. Pourquoi ne les vendrais-tu pas ?- Je compte les vendre. Je vous laisserai cet argent pour vous nourrir pendant mon absence. Driss le teigneux nous reste fidèle, il viendra tous les jours faire les courses. Donne-lui à manger, il n'a personne. […] Je vous laisserai seuls pendant un mois. Je tacherai de ne rien dépenser de mon salaire, il me sera possible de remettre l'atelier en marche dès mon retour. Un grand silence s'établit, un silence lourd, moite huileux et noir comme la suie. J'étouffais. Je désirais de toutes mes forces qu'une porte claquât, qu'une voisine poussât un cri de joie ou un gémissement de douleur, que quelque événement extraordinaire survint pour rompre cette angoisse.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant (déjà rempli sur la feuille : texte 1 — Auteur « Victor Hugo », Genre littéraire « Roman à thèse » ; texte 2 — Titre de l'œuvre « La boite à Merveilles », Narrateur « Sidi Mohammed ») : **(0,25x4 pt)**

| Texte 1 — Titre de l'œuvre | Texte 1 — Narrateur | Texte 2 — Auteur | Texte 2 — Genre littéraire |
|---|---|---|---|
| | | | |

**2a.** Pour situer les deux textes répondez aux questions suivantes : Dans le **texte 1**, le narrateur est-il : à Bicêtre ; au tribunal ou à la Conciergerie ? - Recopiez la bonne réponse **(0,50 pt)**

a- à Bicêtre  
b- au tribunal  
c- à la Conciergerie

**2b.** Quel événement capital précède-t-il le départ du père dans le **texte 2** ? **(0,50 pt)**

**3a.** TEXTE 1 : A qui le narrateur s'adresse-t-il ? **(0,50 pt)**

**3b.** Pourquoi les deux personnages ne vont-ils plus vivre ensemble ? **(0,50 pt)**

**4.** Combien de temps reste-t-il au narrateur avec l'enfant? **(1 pt)**

**5.** Relevez quatre (4) termes relevant du champ lexical de la mort. **(1 pt)**

**6.** TEXTE 2 : a- Combien de temps le père du narrateur va-t-il s'absenter ? b- Pour quelle raison ? **(0,50x2 pt)**

**7a.** Quelle proposition Lalla Zoubida a-t-elle faite pour empêcher ce départ ? **(0,25x2 pt)**

**7b.** Relevez, de ce passage, deux recommandations faites par le père du narrateur à sa femme, en ce qui concerne la maladie de Sidi Mohammed. **(0,50 pt)**

**8.** **« Je désirais de toutes mes forces […] qu'une voisine poussât un cri de joie ou un gémissement de douleur…. »** Quelle figure de style reconnaissez-vous dans cet énoncé ? Recopiez la bonne réponse. **(1 pt)**

a- une métaphore  
b- une antiphrase ;  
c- une antithèse.

**9.** Faut-il ne pas tuer une personne, qui a commis une faute très grave, parce qu'il est le père d'un(e) petit(e) enfant ? Justifiez votre réponse. **(1 pt)**

**10.** Maâlem Abdeslam a demandé à sa femme de prendre soin de Driss le teigneux pendant son absence. Comment trouvez-vous ce comportement ? Justifiez votre réponse. **(1 pt)**

## II. Production écrite (10 points)

**SUJET :** Pour guérir Sidi Mohammed, son père proposa à sa femme de lui préparer un traitement traditionnel (soupe à la menthe sauvage). Appréciez-vous ce genre de pratiques traditionnelles ? Justifiez votre point de vue à l'aide d'arguments pertinents.

**Le correcteur de votre production tiendra compte des critères suivants :**

- Respect de la consigne ; **(1pt)**
- Pertinence des idées et des arguments ;**(2pts)**
- Cohérence de l'ensemble (enchaînement logique de l'introduction, du développement et de la conclusion ; bonne utilisation des mots de liaison), **(3pts)**
- Correction de la langue. **(4pts)**$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de réponse (à titre indicatif). Toute réponse non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(0,25x4 pt)**

| Texte 1 — Titre de l'œuvre | Texte 1 — Narrateur | Texte 2 — Auteur | Texte 2 — Genre littéraire |
|---|---|---|---|
| Le dernier jour d'un condamné | Le condamné à mort | Ahmed Sefrioui | Roman autobiographique |

**2a.** A la Conciergerie. **(0,50 pt)**

**2b.** L'événement capital qui précède le départ du père est : -La perte de son capital lors de l'achat des bracelets à Lalla Zoubida. **(0,50 pt)**

**3a.** Il s'adresse à sa petite fille Marie; **(0,50 pt)**

**3b.** Il sera exécuté/ condamné à mort **(0,50 pt)**

**4.** Il lui reste six heures avant sa mort. **(1 pt)**

**5.** Tuer ; moulera ; disséquer ; mort. (0,25x4pt) **(1 pt)**

**6.** a- Il va s'absenter un mois ; b- pour travailler comme moissonneur/ pour gagner de l'argent/ pour se rétablir dans son atelier. **(0,50x2 pt)**

**7a.** La proposition de Lalla Zoubida est : de les vendre ; ce sont de maudits bracelets (0,5pt) **(0,25x2 pt)**

**7b.** Les deux recommandations faites par Maâlem Abdeslam sont : - Fais-lui une soupe à la menthe sauvage/ - couvre-le bien afin qu'il transpire abondamment. (0,25x2pt) **(0,50 pt)**

**8.** La figure de style est : L'antithèse. **(1 pt)**

**9.** Réponse justifiée et bien formulée. **(1 pt)**

**10.** Point de vue justifié et bien formulé. **(1 pt)**

### II. Production écrite

*Critères d'évaluation*

- Respect de la consigne ; (1pt)
- Pertinence des idées et des arguments ; (2pts)
- Cohérence de l'ensemble (enchaînement logique de l'introduction, du développement et de la conclusion ; bonne utilisation des mots de liaison) ; (3pts)
- Correction de la langue. (4pts)$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement les deux textes et répondez aux questions.", "texte": "**TEXTE 1**\n\nIl est dix heures.\n\nO ma pauvre petite fille ! Encore six heures, et je serai mort ! Je serai quelque chose d'immonde qui traînera sur la table froide des amphithéâtres ; une tête qu'on moulera d'un côté, un tronc qu'on disséquera de l'autre ; puis de ce qui restera, on en mettra plein une bière, et le tout ira à Clamart.\n\nVoilà ce qu'ils vont faire de ton père, ces hommes dont aucun ne me hait, qui tous me plaignent et tous pourraient me sauver. Ils vont me tuer. Comprends-tu cela, Marie ? Me tuer de sang-froid, en cérémonie, pour le bien de la chose ! Ah grand Dieu !\n\nPauvre petite ! Ton père qui t'aimait tant, ton père qui baisait ton petit cou blanc et parfumé, qui passait la main sans cesse dans les boucles de tes cheveux comme sur de la soie ; qui prenait ton joli visage rond dans sa main, qui te faisait sauter sur ses genoux, et le soir joignait tes deux petites mains pour prier Dieu ! […]\n\nOh ! Si ces jurés l'avaient vue, au moins, ma jolie petite Marie ! Ils auraient compris qu'il ne faut pas tuer le père d'un enfant de trois ans.\n\n**TEXTE 2**\n\n– Je ne veux pas non plus du misérable salaire d'un ouvrier. La saison de la moisson commence à peine, on embauche des moissonneurs. J'irai travailler aux environs de Fès.\n\n– Tu oseras m'abandonner avec un enfant malade ?\n\n– Préfères-tu mourir de Faim ? Aimerais-tu devenir un objet de pitié pour tes amies et tes voisines ? Je serai à deux jours de marche de la ville. Sidi Mohammed ira mieux demain. Fais-lui une soupe à la menthe sauvage ; couvre le bien afin qu'il transpire abondamment. Aujourd'hui, il a moins de fièvre que la nuit dernière.\n\n– C'est un châtiment de Dieu qui nous accable. Ce sont ces maudits bracelets qui ont semé le malheur dans notre maison. Pourquoi ne les vendrais-tu pas ?- Je compte les vendre. Je vous laisserai cet argent pour vous nourrir pendant mon absence. Driss le teigneux nous reste fidèle, il viendra tous les jours faire les courses. Donne-lui à manger, il n'a personne. […] Je vous laisserai seuls pendant un mois. Je tacherai de ne rien dépenser de mon salaire, il me sera possible de remettre l'atelier en marche dès mon retour. Un grand silence s'établit, un silence lourd, moite huileux et noir comme la suie. J'étouffais. Je désirais de toutes mes forces qu'une porte claquât, qu'une voisine poussât un cri de joie ou un gémissement de douleur, que quelque événement extraordinaire survint pour rompre cette angoisse.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant (déjà rempli sur la feuille : texte 1 — Auteur « Victor Hugo », Genre littéraire « Roman à thèse » ; texte 2 — Titre de l'œuvre « La boite à Merveilles », Narrateur « Sidi Mohammed ») :", "champs": [{"libelle": "Texte 1 — Titre de l'œuvre", "reponse": "Le dernier jour d'un condamné"}, {"libelle": "Texte 1 — Narrateur", "reponse": "Le condamné à mort"}, {"libelle": "Texte 2 — Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Texte 2 — Genre littéraire", "reponse": "Roman autobiographique"}]}, {"type": "choix", "numero": "2a", "points": 0.5, "enonce": "Pour situer les deux textes répondez aux questions suivantes : Dans le **texte 1**, le narrateur est-il : à Bicêtre ; au tribunal ou à la Conciergerie ? - Recopiez la bonne réponse", "options": ["à Bicêtre", "au tribunal", "à la Conciergerie"], "bonne": 2}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "Quel événement capital précède-t-il le départ du père dans le **texte 2** ?", "correction": "L'événement capital qui précède le départ du père est : -La perte de son capital lors de l'achat des bracelets à Lalla Zoubida."}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "TEXTE 1 : A qui le narrateur s'adresse-t-il ?", "correction": "Il s'adresse à sa petite fille Marie;"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Pourquoi les deux personnages ne vont-ils plus vivre ensemble ?", "correction": "Il sera exécuté/ condamné à mort"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Combien de temps reste-t-il au narrateur avec l'enfant?", "correction": "Il lui reste six heures avant sa mort."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Relevez quatre (4) termes relevant du champ lexical de la mort.", "correction": "Tuer ; moulera ; disséquer ; mort. (0,25x4pt)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "TEXTE 2 : a- Combien de temps le père du narrateur va-t-il s'absenter ? b- Pour quelle raison ?", "correction": "a- Il va s'absenter un mois ; b- pour travailler comme moissonneur/ pour gagner de l'argent/ pour se rétablir dans son atelier."}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "Quelle proposition Lalla Zoubida a-t-elle faite pour empêcher ce départ ?", "correction": "La proposition de Lalla Zoubida est : de les vendre ; ce sont de maudits bracelets (0,5pt)"}, {"type": "libre", "numero": "7b", "points": 0.5, "enonce": "Relevez, de ce passage, deux recommandations faites par le père du narrateur à sa femme, en ce qui concerne la maladie de Sidi Mohammed.", "correction": "Les deux recommandations faites par Maâlem Abdeslam sont : - Fais-lui une soupe à la menthe sauvage/ - couvre-le bien afin qu'il transpire abondamment. (0,25x2pt)"}, {"type": "choix", "numero": "8", "points": 1, "enonce": "**« Je désirais de toutes mes forces […] qu'une voisine poussât un cri de joie ou un gémissement de douleur…. »** Quelle figure de style reconnaissez-vous dans cet énoncé ? Recopiez la bonne réponse.", "options": ["une métaphore", "une antiphrase ;", "une antithèse."], "bonne": 2}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Faut-il ne pas tuer une personne, qui a commis une faute très grave, parce qu'il est le père d'un(e) petit(e) enfant ? Justifiez votre réponse.", "correction": "Réponse justifiée et bien formulée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Maâlem Abdeslam a demandé à sa femme de prendre soin de Driss le teigneux pendant son absence. Comment trouvez-vous ce comportement ? Justifiez votre réponse.", "correction": "Point de vue justifié et bien formulé."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**SUJET :** Pour guérir Sidi Mohammed, son père proposa à sa femme de lui préparer un traitement traditionnel (soupe à la menthe sauvage). Appréciez-vous ce genre de pratiques traditionnelles ? Justifiez votre point de vue à l'aide d'arguments pertinents.\n\n**Le correcteur de votre production tiendra compte des critères suivants :**\n\n- Respect de la consigne ; **(1pt)**\n- Pertinence des idées et des arguments ;**(2pts)**\n- Cohérence de l'ensemble (enchaînement logique de l'introduction, du développement et de la conclusion ; bonne utilisation des mots de liaison), **(3pts)**\n- Correction de la langue. **(4pts)**", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
