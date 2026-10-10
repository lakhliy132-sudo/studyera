-- Sujet de français, examen régional 2018 (session de rattrapage), académie
-- Dakhla-Oued Ed-Dahab, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2018 جهة الداخلة وادي الذهب »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Dakhla-Oued Ed-Dahab (« الأكاديمية الجهوية للتربية والتكوين
-- لجهة الداخلة وادي الذهب »), « الدورة الاستدراكية 2018 » (session de
-- rattrapage), « المترشحون الرسميون », « السنة الأولى من سلك البكالوريا »,
-- matière « اللغة الأجنبية الأولى », durée « ساعتان ». Coefficient : 3 pour
-- sciences économiques et gestion, 4 pour les autres séries (laissé vide).
-- Questions 4 et 9 b : le corrigé ne donne que le barème de la justification
-- (« Justification : 0,5pt »), sans contenu ; rien n'est ajouté.
-- Le sujet ne donne pas de critères pour la production écrite ; la grille du
-- corrigé (5 + 5 pts, sans détail par ligne) est recopiée.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2018,
  $sujet$rattrapage$sujet$,
  $sujet$Dakhla-Oued Ed-Dahab$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Sciences économiques et gestion ; lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies$sujet$,
  120,
  $sujet$## Texte

C'était par une belle matinée d'août. Il y avait trois jours que mon procès était entamé, trois jours que mon nom et mon crime ralliaient chaque matin une nuée de spectateurs, qui venaient s'abattre sur les bancs de la salle d'audience comme des corbeaux autour d'un cadavre, trois jours que toute cette fantasmagorie des juges, des témoins, des avocats, des procureurs du roi, passait et repassait devant moi, tantôt grotesque, tantôt sanglante, toujours sombre et fatale. Les deux premières nuits, d'inquiétude et de terreur, je n'en avais pu dormir ; la troisième, j'en avais dormi d'ennui et de fatigue. A minuit, j'avais laissé les jurés délibérant. On m'avait ramené sur la paille de mon cachot, et j'étais tombé sur-le-champ dans un sommeil profond, dans un sommeil d'oubli. C'étaient les premières heures de repos depuis bien des jours.

J'étais encore au plus profond de ce profond sommeil lorsqu'on vint me réveiller. Cette fois il ne suffit point du pas lourd et des souliers ferrés du guichetier, du cliquetis de son nœud de clefs, du grincement rauque des verrous ; il fallut pour me tirer de ma léthargie sa rude voix à mon oreille et sa main rude sur mon bras.

– Levez-vous donc !

– J'ouvris les yeux, je me dressai effaré sur mon séant.

En ce moment, par l'étroite et haute fenêtre de ma cellule, je vis au plafond du corridor voisin, seul ciel qu'il me fût donné d'entrevoir ce reflet jaune où des yeux habitués aux ténèbres d'une prison savent si bien reconnaître le soleil. J'aime le soleil.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1 pt)**

| Titre de l'œuvre | Genre de l'œuvre | Siècle | Une autre œuvre de cet auteur |
|---|---|---|---|
| | | | |

**2.** Pendant le procès, le narrateur est emprisonné à : **(1 pt)**

a- l'hôtel de ville  
b- la conciergerie  
c- Bicêtre

**3.** Quelle est la visée dominante de l'œuvre d'où ce texte est extrait ? **(1 pt)**

**4.** Répondez par « vrai » ou « faux », et justifiez votre réponse. **(1pt)**

| | Vrai | Faux |
|---|---|---|
| Le narrateur et l'auteur de ce récit sont les mêmes personnes. | | |

**5.** D'après ce texte, le narrateur est jugé pour : **(1pt)**

a- un vol  
b- un crime  
c- ses idées politiques  
d- son aspect physique

**6a.** « …une nuée de spectateurs, qui venaient s'abattre sur les bancs de la salle d'audience comme des corbeaux autour d'un cadavre. » Quelle est la figure de style employée dans cette phrase ? **(1 pt)**

**6b.** Quel est l'effet recherché par l'emploi de cette figure de style ?

**7.** Relevez du texte deux termes appartenant au champ lexical de la justice et deux termes appartenant au champ lexical de la prison. **(1 pt)**

**8.** Qui a réveillé le prisonnier et comment ? **(1 pt)**

**9a.** La tonalité de ce passage est-elle ? **(1 pt)**

a- Comique  
b- Pathétique.  
c- Ironique.

**9b.** Justifiez votre réponse.

**10.** A votre avis, les conditions de détention à l'époque de l'auteur sont-elles semblables à celles d'aujourd'hui ? Justifiez votre réponse. **(1 pt)**

## II. Production écrite (10 points)

**Sujet :**

*Certaines* personnes de votre entourage pensent que la condamnation des criminels à la peine de mort diminue le taux de criminalité.

Etes-vous de cet avis? Rédigez un texte dans lequel vous exposez votre point de vue en le justifiant par des arguments.$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de correction (à titre indicatif). Toute réponse non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** **(1 pt)**

| Titre de l'œuvre | Genre de l'œuvre | Siècle | Une autre œuvre de cet auteur |
|---|---|---|---|
| Le dernier jour d'un condamné | Roman à thèse | 19ème | Les misérables |

**2.** Pendant le procès, le narrateur est emprisonné à Bicêtre. **(1 pt)**

**3.** La visée dominante de l'œuvre : contribuer à l'abolition de la peine de mort **(1 pt)**

**4.** **(1pt)**

| | |
|---|---|
| Le narrateur et l'auteur de ce récit sont les mêmes personnes. | Vrai |

**5.** Le narrateur est jugé pour un crime. **(1pt)**

**6a.** Comparaison (0,5pt) **(1 pt)**

**6b.** effet recherché : mettre l'accent sur l'avidité des spectateurs, etc. (0,5pt) accepter toute réponse pertinente

**7.** Champ lexical de la justice : procès, salle d'audience, juges, témoins, avocats, jurés, délibérant ; etc. (0,25 ptx2) Champ lexical de la prison : cachot, verrous, cellule, corridor, prison ; (0,25 ptx2) **(1 pt)**

**8.** Le guichetier. (0,5pt) Brutalement, avec sa voix rude et sa main rude (0,5pt) **(1 pt)**

**9a.** Pathétique (0,5pt) **(1 pt)**

**10.** Point de vue justifié. **(1 pt)**

### II. Production écrite

**Critères d'évaluation du discours : 5 pts**

- Conformité de la production à la consigne d'écriture
- Cohérence de l'argumentation
- Organisation et progression du texte

**Critères d'évaluation de la langue : 5 pts**

- Correction de la langue (ponctuation, orthographe, syntaxe, vocabulaire, conjugaison)$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "C'était par une belle matinée d'août. Il y avait trois jours que mon procès était entamé, trois jours que mon nom et mon crime ralliaient chaque matin une nuée de spectateurs, qui venaient s'abattre sur les bancs de la salle d'audience comme des corbeaux autour d'un cadavre, trois jours que toute cette fantasmagorie des juges, des témoins, des avocats, des procureurs du roi, passait et repassait devant moi, tantôt grotesque, tantôt sanglante, toujours sombre et fatale. Les deux premières nuits, d'inquiétude et de terreur, je n'en avais pu dormir ; la troisième, j'en avais dormi d'ennui et de fatigue. A minuit, j'avais laissé les jurés délibérant. On m'avait ramené sur la paille de mon cachot, et j'étais tombé sur-le-champ dans un sommeil profond, dans un sommeil d'oubli. C'étaient les premières heures de repos depuis bien des jours.\n\nJ'étais encore au plus profond de ce profond sommeil lorsqu'on vint me réveiller. Cette fois il ne suffit point du pas lourd et des souliers ferrés du guichetier, du cliquetis de son nœud de clefs, du grincement rauque des verrous ; il fallut pour me tirer de ma léthargie sa rude voix à mon oreille et sa main rude sur mon bras.\n\n– Levez-vous donc !\n\n– J'ouvris les yeux, je me dressai effaré sur mon séant.\n\nEn ce moment, par l'étroite et haute fenêtre de ma cellule, je vis au plafond du corridor voisin, seul ciel qu'il me fût donné d'entrevoir ce reflet jaune où des yeux habitués aux ténèbres d'une prison savent si bien reconnaître le soleil. J'aime le soleil.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "Le dernier jour d'un condamné"}, {"libelle": "Genre de l'œuvre", "reponse": "Roman à thèse"}, {"libelle": "Siècle", "reponse": "19ème"}, {"libelle": "Une autre œuvre de cet auteur", "reponse": "Les misérables"}]}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Pendant le procès, le narrateur est emprisonné à :", "options": ["l'hôtel de ville", "la conciergerie", "Bicêtre"], "bonne": 2}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Quelle est la visée dominante de l'œuvre d'où ce texte est extrait ?", "correction": "La visée dominante de l'œuvre : contribuer à l'abolition de la peine de mort"}, {"type": "vrai-faux", "numero": "4", "points": 1, "enonce": "Répondez par « vrai » ou « faux », et justifiez votre réponse.", "affirmations": [{"texte": "Le narrateur et l'auteur de ce récit sont les mêmes personnes.", "vrai": true}]}, {"type": "choix", "numero": "5", "points": 1, "enonce": "D'après ce texte, le narrateur est jugé pour :", "options": ["un vol", "un crime", "ses idées politiques", "son aspect physique"], "bonne": 1}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "« …une nuée de spectateurs, qui venaient s'abattre sur les bancs de la salle d'audience comme des corbeaux autour d'un cadavre. » Quelle est la figure de style employée dans cette phrase ?", "correction": "Comparaison (0,5pt)"}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "Quel est l'effet recherché par l'emploi de cette figure de style ?", "correction": "effet recherché : mettre l'accent sur l'avidité des spectateurs, etc. (0,5pt) accepter toute réponse pertinente"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez du texte deux termes appartenant au champ lexical de la justice et deux termes appartenant au champ lexical de la prison.", "correction": "Champ lexical de la justice : procès, salle d'audience, juges, témoins, avocats, jurés, délibérant ; etc. (0,25 ptx2) Champ lexical de la prison : cachot, verrous, cellule, corridor, prison ; (0,25 ptx2)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Qui a réveillé le prisonnier et comment ?", "correction": "Le guichetier. (0,5pt) Brutalement, avec sa voix rude et sa main rude (0,5pt)"}, {"type": "choix", "numero": "9a", "points": 0.5, "enonce": "La tonalité de ce passage est-elle ?", "options": ["Comique", "Pathétique.", "Ironique."], "bonne": 1}, {"type": "libre", "numero": "9b", "points": 0.5, "enonce": "Justifiez votre réponse.", "correction": ""}, {"type": "libre", "numero": "10", "points": 1, "enonce": "A votre avis, les conditions de détention à l'époque de l'auteur sont-elles semblables à celles d'aujourd'hui ? Justifiez votre réponse.", "correction": "Point de vue justifié."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\n*Certaines* personnes de votre entourage pensent que la condamnation des criminels à la peine de mort diminue le taux de criminalité.\n\nEtes-vous de cet avis? Rédigez un texte dans lequel vous exposez votre point de vue en le justifiant par des arguments.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
