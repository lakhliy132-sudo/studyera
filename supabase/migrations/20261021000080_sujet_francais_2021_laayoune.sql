-- Sujet de français, examen régional 2021 (session normale), académie
-- Laâyoune-Sakia El Hamra, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2021 جهة العيون الساقية الحمراء »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين لجهة العيون الساقية
-- الحمراء », « الدورة العادية 2021 » (« دورة يونيو 2021 » en page 2), « المترشحون
-- الرسميون », durée « 2س », code « 105 ق 1 ». Coefficient non saisi : 3 pour
-- « العلوم الإقتصادية والتدبير », 4 pour « الشعب العلمية والتقنية والمهنية ».
-- Les pages du PDF sont couchées ; elles ont été redressées pour la lecture.
-- Question 5 : la feuille demande deux actions par personnage ; le corrigé en
-- propose trois au choix pour chacun.
-- Question 7 : la feuille demande « quatre termes ou expressions », le corrigé
-- parle de « Deux mots ou expressions » notés (0.5x2).
-- Production écrite : la feuille annonce 1 / 3 / 3 / 3 pts (consigne, arguments,
-- cohérence, langue) ; le corrigé répartit 5 pts pour la langue et 5 pts pour
-- le discours.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2021,
  $sujet$normale$sujet$,
  $sujet$Laâyoune-Sakia El Hamra$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Sciences économiques et gestion ; séries scientifiques, techniques et professionnelles$sujet$,
  120,
  $sujet$## Texte

J'alertai ma mère, demandai secours à Fatma Bziouya, à Rahma et même à mon ennemie Zineb, la propriétaire de ce démon quadrupède. Tout le monde se précipita sur la terrasse mais le chat, ne sachant pas pourquoi on le poursuivait, s'usait les griffes à grimper le long d'un mur d'une hauteur vertigineuse. J'étais furieux contre le chat. Les femmes essayèrent de me consoler. – Il reviendra ce soir, Zineb te rendra ta chaîne. Zineb! Zineb ! C'était elle qui l'avait chargé de venir se frotter contre moi, abuser de ma gentillesse et me voler mon plus beau bijou. Je suffoquais de colère et d'indignation. Ma rage se déchaîna; je me précipitai sur Zineb. Je lui enfonçai les ongles dans les joues, lui arrachai les cheveux par touffes, lui envoyai de formidables coups de pieds dans le ventre. Elle se défendit, la brute, avec violence, me tira les oreilles, me renversa par terre, me marcha sur la poitrine. Les femmes criaient, essayaient de nous séparer et recevaient des coups de poing et des coups de tête des deux adversaires. Enfin ma mère réussit à me maîtriser. Elle m'amena dans la chambre, me plongea la tête dans un seau d'eau, m'essuya le visage avec un torchon et m'intima l'ordre de me coucher. La poitrine encore secouée de sanglots, je m'endormis presque immédiatement.

## I. Étude de texte (10 points)

**1.** A. Contextualisation du texte — Recopiez et complétez le tableau suivant : **(0.25x4) (1pt)**

| Titre de l'œuvre | Auteur | Genre littéraire | Une autre œuvre de l'auteur |
|---|---|---|---|
| | | | |

**2.** Pour situer le texte ci-dessus, répondez par **Vrai** ou **Faux** aux énoncés suivants : **(1pt)**

| | Vrai | Faux |
|---|---|---|
| A- Le chat appartient à Zineb. | | |
| B- Le narrateur voulait associer le chat à sa joie. | | |
| C- Le chat resta près de Sidi Mohammed. | | |
| D- Le narrateur voulait récupérer sa chaîne d'or. | | |

**3.** B. Analyse du texte — Pourquoi tout le monde se précipita-t-il sur la terrasse ? **(1pt)**

**4.** « **Le chat s'usait les griffes à grimper le long du mur** » veut dire : **(1pt)**

a- Le chat faisait un grand effort pour grimper le mur.  
b- Le chat grimpa le mur facilement.

**5.** Relevez deux actions accomplies réciproquement par Sidi Mohammed et Zineb durant leur dispute : (Recopiez le tableau) **(0.25x4) (1pt)**

| Sidi Mohammed (1- … 2- …) | Zineb (1- … 2- …) |
|---|---|
| | |

**6.** Les femmes voulaient séparer les deux adversaires. Etait-ce facile ? Justifiez votre réponse à partir du texte. **(1pt)**

**7.** Relevez quatre termes ou expressions appartenant au champ lexical de ***la fureur.*** **(1pt)**

**8.** Identifiez la figure de style dans la phrase suivante : « Le long d'un mur d'une hauteur **vertigineuse** » [« vertigineuse » souligné sur la feuille, en gras ici] *Recopiez la bonne réponse* **(1pt)**

a- Oxymore  
b- Hyperbole  
c- Comparaison

**9.** C. Réaction personnelle face au texte — A votre avis, est-il vrai que les voisins d'autrefois sont meilleurs que ceux d'aujourd'hui ? Justifiez votre réponse **(1pt)**

**10.** Si vous étiez à la place de Sidi Mohammed, feriez-vous la même chose (vous battre) ? Justifiez votre réponse **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

« Certaines personnes interviennent pour mettre fin à une dispute, d'autres préfèrent rester à l'écart comme des spectateurs.» Qu'en pensez-vous ?

Rédigez un texte argumentatif dans lequel vous développerez votre point de vue étayé par des arguments et des exemples pertinents.

**Lors de la correction de votre copie, on tiendra compte des critères suivants :**

- Respect de la consigne ……… **(1pt)**
- Pertinence des arguments……… **(3pts)**
- Cohérence et progression des idées……… **(3pts)**
- Correction de la langue……… **(3pts)**$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de réponse (A titre indicatif). Toute réponse non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(0.25x4) (1pt)**

| Titre de l'œuvre | Auteur | Genre littéraire | Une autre œuvre de l'auteur |
|---|---|---|---|
| La Boîte à Merveilles | Ahmed SEFRIOUI | Roman autobiographique | -Le chapelet d'ambre/ -Le jardin des sortilèges/ -La maison de servitude |

**2.** **(1pt)**

| | |
|---|---|
| A- Le chat appartient à Zineb. | Vrai |
| B- Le narrateur voulait associer le chat à sa joie. | Vrai |
| C- Le chat resta près de Sidi Mohammed. | Faux |
| D- Le narrateur voulait récupérer sa chaîne d'or. | Vrai |

**3.** Pour aider Sidi Mohammed à récupérer sa chainette d'or. **(1pt)**

**4.** a- Le chat faisait un grand effort pour grimper le mur. **(1pt)**

**5.** **(0.25x4) (1pt)**

| Sidi Mohammed (1- … 2- …) | Zineb (1- … 2- …) |
|---|---|
| 1- Je lui enfonçai les ongles dans les joues 2- Je lui arrachai les cheveux par touffes 3- Je lui envoyai de formidables coups de pieds dans le ventre | 1- elle me tira les oreilles 2- me renversa par terre 3- me marcha sur la poitrine |

**6.** **Non,** ce n'était pas facile de séparer les deux adversaires. (0.5pt) -*Justification* « Les femmes criaient, essayaient de nous séparer et recevaient des coups **de poing et des coups de tête des deux adversaires.** » (0.5pt) **(1pt)**

**7.** **Deux mots ou expressions** appartenant au champ lexical de « ***la fureur*** » : Furieux, Je suffoquais de colère et d'indignation, violence, ma rage se déchaîna,… (0.5x2) **(1pt)**

**8.** Il s'agit d'une : b- Hyperbole **(1pt)**

**9.** Acceptez toute réponse bien formulée et justifiée. **(1pt)**

**10.** Acceptez toute réponse bien formulée et justifiée. **(1pt)**

### II. Production écrite

**Lors de la correction, il sera tenu compte des critères suivants :**

| Critères d'évaluation de la langue | | Critères d'évaluation du discours | |
|---|---|---|---|
| Vocabulaire (usage de termes précis et variés) ; Syntaxe (construction de phrases correctes) ; Ponctuation (usage d'une ponctuation adéquate) ; Orthographe d'usage et grammaticale (respect des règles) ; Conjugaison (emploi des temps) | 5pts | Conformité de la production à la consigne d'écriture. ; Cohérence de l'argumentation ; Structure du texte (organisation et progression du texte) | 5pts |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "J'alertai ma mère, demandai secours à Fatma Bziouya, à Rahma et même à mon ennemie Zineb, la propriétaire de ce démon quadrupède. Tout le monde se précipita sur la terrasse mais le chat, ne sachant pas pourquoi on le poursuivait, s'usait les griffes à grimper le long d'un mur d'une hauteur vertigineuse. J'étais furieux contre le chat. Les femmes essayèrent de me consoler. – Il reviendra ce soir, Zineb te rendra ta chaîne. Zineb! Zineb ! C'était elle qui l'avait chargé de venir se frotter contre moi, abuser de ma gentillesse et me voler mon plus beau bijou. Je suffoquais de colère et d'indignation. Ma rage se déchaîna; je me précipitai sur Zineb. Je lui enfonçai les ongles dans les joues, lui arrachai les cheveux par touffes, lui envoyai de formidables coups de pieds dans le ventre. Elle se défendit, la brute, avec violence, me tira les oreilles, me renversa par terre, me marcha sur la poitrine. Les femmes criaient, essayaient de nous séparer et recevaient des coups de poing et des coups de tête des deux adversaires. Enfin ma mère réussit à me maîtriser. Elle m'amena dans la chambre, me plongea la tête dans un seau d'eau, m'essuya le visage avec un torchon et m'intima l'ordre de me coucher. La poitrine encore secouée de sanglots, je m'endormis presque immédiatement.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "A. Contextualisation du texte — Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "La Boîte à Merveilles"}, {"libelle": "Auteur", "reponse": "Ahmed SEFRIOUI"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Une autre œuvre de l'auteur", "reponse": "-Le chapelet d'ambre/ -Le jardin des sortilèges/ -La maison de servitude"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "Pour situer le texte ci-dessus, répondez par **Vrai** ou **Faux** aux énoncés suivants :", "affirmations": [{"texte": "A- Le chat appartient à Zineb.", "vrai": true}, {"texte": "B- Le narrateur voulait associer le chat à sa joie.", "vrai": true}, {"texte": "C- Le chat resta près de Sidi Mohammed.", "vrai": false}, {"texte": "D- Le narrateur voulait récupérer sa chaîne d'or.", "vrai": true}]}, {"type": "libre", "numero": "3", "points": 1, "enonce": "B. Analyse du texte — Pourquoi tout le monde se précipita-t-il sur la terrasse ?", "correction": "Pour aider Sidi Mohammed à récupérer sa chainette d'or."}, {"type": "choix", "numero": "4", "points": 1, "enonce": "« **Le chat s'usait les griffes à grimper le long du mur** » veut dire :", "options": ["Le chat faisait un grand effort pour grimper le mur.", "Le chat grimpa le mur facilement."], "bonne": 0}, {"type": "tableau", "numero": "5", "points": 1, "enonce": "Relevez deux actions accomplies réciproquement par Sidi Mohammed et Zineb durant leur dispute : (Recopiez le tableau)", "champs": [{"libelle": "Sidi Mohammed (1- … 2- …)", "reponse": "1- Je lui enfonçai les ongles dans les joues 2- Je lui arrachai les cheveux par touffes 3- Je lui envoyai de formidables coups de pieds dans le ventre"}, {"libelle": "Zineb (1- … 2- …)", "reponse": "1- elle me tira les oreilles 2- me renversa par terre 3- me marcha sur la poitrine"}]}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Les femmes voulaient séparer les deux adversaires. Etait-ce facile ? Justifiez votre réponse à partir du texte.", "correction": "**Non,** ce n'était pas facile de séparer les deux adversaires. (0.5pt) -*Justification* « Les femmes criaient, essayaient de nous séparer et recevaient des coups **de poing et des coups de tête des deux adversaires.** » (0.5pt)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez quatre termes ou expressions appartenant au champ lexical de ***la fureur.***", "correction": "**Deux mots ou expressions** appartenant au champ lexical de « ***la fureur*** » : Furieux, Je suffoquais de colère et d'indignation, violence, ma rage se déchaîna,… (0.5x2)"}, {"type": "choix", "numero": "8", "points": 1, "enonce": "Identifiez la figure de style dans la phrase suivante : « Le long d'un mur d'une hauteur **vertigineuse** » [« vertigineuse » souligné sur la feuille, en gras ici] *Recopiez la bonne réponse*", "options": ["Oxymore", "Hyperbole", "Comparaison"], "bonne": 1}, {"type": "libre", "numero": "9", "points": 1, "enonce": "C. Réaction personnelle face au texte — A votre avis, est-il vrai que les voisins d'autrefois sont meilleurs que ceux d'aujourd'hui ? Justifiez votre réponse", "correction": "Acceptez toute réponse bien formulée et justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Si vous étiez à la place de Sidi Mohammed, feriez-vous la même chose (vous battre) ? Justifiez votre réponse", "correction": "Acceptez toute réponse bien formulée et justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\n« Certaines personnes interviennent pour mettre fin à une dispute, d'autres préfèrent rester à l'écart comme des spectateurs.» Qu'en pensez-vous ?\n\nRédigez un texte argumentatif dans lequel vous développerez votre point de vue étayé par des arguments et des exemples pertinents.\n\n**Lors de la correction de votre copie, on tiendra compte des critères suivants :**\n\n- Respect de la consigne ……… **(1pt)**\n- Pertinence des arguments……… **(3pts)**\n- Cohérence et progression des idées……… **(3pts)**\n- Correction de la langue……… **(3pts)**", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
