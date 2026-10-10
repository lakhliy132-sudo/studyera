-- Sujet de français, examen régional 2022 (session normale), académie
-- Rabat-Salé-Kénitra, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2022 جهة الرباط سلا القنيطرة »).
-- Le PDF ne contient pas de corrigé : aucune réponse n'est saisie.
--
-- Académie de Rabat-Salé-Kénitra (« جهة الرباط سلا القنيطرة »), « الدورة العادية
-- يونيو 2022 », « القطب العلمي والتقني والمهني », « الموضوع الرئيسي » (code 1BAC S1 STP),
-- durée « (2) ساعتان » ; aucun coefficient sur la feuille.
-- Le sujet se présente comme une copie à remplir (lignes pointillées, cadre
-- « لا يكتب شيء في هذا الإطار », pages lignées pour la production) : ces éléments
-- ne sont pas reproduits. La feuille ne donne pas de critères pour la
-- production écrite.
-- Le PDF ne contient pas le corrigé de ce sujet : sa dernière page est le
-- corrigé d'un autre sujet (académie de Tanger-Tétouan-Al Hoceïma, « La Boîte à
-- merveilles », juin 2022) ; elle est ignorée. Aucune réponse n'est saisie.
-- Le texte porte « prétendues nécessitées politiques » : laissé comme sur la
-- feuille.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, questions)
values (
  $sujet$francais$sujet$,
  2022,
  $sujet$normale$sujet$,
  $sujet$Rabat-Salé-Kénitra$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Pôle scientifique, technique et professionnel$sujet$,
  120,
  $sujet$## Texte

Puisque le jour ne paraît pas encore, que faire de la nuit ? Il m'est venu une idée. Je me suis levé et j'ai promené ma lampe sur les quatre murs de ma cellule. Ils sont couverts d'écritures, de dessins, de figures bizarres, de noms qui se mêlent et s'effacent les uns les autres. Il semble que chaque condamné ait voulu laisser trace, ici du moins. C'est du crayon, de la craie, du charbon, des lettres noires, blanches, grises, souvent de profondes entailles dans la pierre, çà et là des caractères rouillés qu'on dirait écrits avec du sang. Certes, si j'avais l'esprit plus libre, je prendrais intérêt à ce livre étrange qui se développe page à page à mes yeux sur chaque pierre de ce cachot. J'aimerais à recomposer un tout de ces fragments de pensée, épars sur la dalle : à retrouver chaque homme sous chaque nom ; à rendre le sens et la vie à ces inscriptions mutilées, à ces phrases démembrées, à ces mots tronqués, corps sans tête comme ceux qui les ont écrits.

À la hauteur de mon chevet, il y a deux cœurs enflammés, percés d'une flèche, et au-dessus *Amour pour la vie*. Le malheureux ne prenait pas un long engagement.

À côté, une espèce de chapeau à trois cornes avec une petite figure grossièrement dessinée au-dessous, et ces mots : *Vive l'empereur* ! *1824.*

Encore des cœurs enflammés, avec cette inscription, caractéristique dans une prison : *J'aime et j'adore Mathieu Danvin*. JACQUES.

Sur le mur opposé on lit ce nom : *Papavoine*⁽¹⁾. Le *P* majuscule est brodé d'arabesques et enjolivé avec soin.

Un couplet d'une chanson obscène.

Un bonnet de liberté sculpté assez profondément dans la pierre, avec ceci dessous : - *Bories*⁽²⁾ - *La République*. C'était un des quatre sous-officiers de La Rochelle⁽³⁾. Pauvre jeune homme ! Que leurs prétendues nécessitées politiques sont hideuses ! Pour une idée, pour une rêverie, pour une abstraction, cette horrible réalité qu'on appelle la guillotine ! Et moi qui me plaignais, moi, misérable qui ai commis un véritable crime, qui ai versé du sang !

Je n'irai pas plus loin dans ma recherche. - Je viens de voir, crayonnée en blanc au coin du mur, une image épouvantable, la figure de cet échafaud qui, à l'heure qu'il est, se dresse peut-être pour moi.

– La lampe a failli me tomber des mains.

*Notes :*

*1- **Papavoine** : a été guillotiné le 25 mars 1825 pour avoir tué à coups de couteau deux petits garçons de cinq à six ans, qui jouaient près de leur mère.*

*2- **Bories** : a été exécuté le 21 septembre 1822 pour avoir été à la tête de la tentative d'insurrection.*

*3- **La Rochelle** : est une ville côtière du sud-ouest de la France*

## I. Étude de texte (10 points)

**1.** A- Contextualiser (2 points) — D'après votre connaissance de l'œuvre, complétez le texte suivant : *Ce passage est extrait de ………… écrit par ………… en ………… et dont le genre est …………* **(0.25 x 4)**

**2.** Pour situer cet extrait, complétez ce tableau : **(0.25 x 4)**

| | Vrai | Faux |
|---|---|---|
| Le condamné se trouve en face de la place de Grève. | | |
| Il est marié et lettré. | | |
| Il est dans son cachot à Bicêtre. | | |
| Il est célibataire et analphabète. | | |

**3.** B- Analyser (6 points) — Quelle distraction le condamné a-t-il trouvée pour remplir son temps la nuit? **(01 pt)**

**4a.** Que découvre-t-il ? **(0,50)**

**4b.** Justifiez à l'aide d'une figure de style **(0,50)**

**5a.** Relevez dans le texte 2 mots appartenant au champ lexical de l'écriture : **(0,25x2)**

**5b.** Ce champ lexical permet ici de : Raconter, Décrire ou Convaincre. Recopiez la bonne réponse **(0.50)**

a- Raconter  
b- Décrire  
c- Convaincre

**6a.** *'Je prendrais intérêt à ce livre étrange'* De quel livre s'agit-il ? **(0.5)**

**6b.** Quelle est la figure de style contenue dans cette phrase ? **(0.5)**

**7.** Reliez chaque personnage au crime qu'il a commis : (Personnages / Crimes commis : a- Vol qualifié ; b- Crime politique ; c- Homicide volontaire) **(0.5x2)**

| 1- Papavoine | 2- Bories |
|---|---|
| | |

**8.** Quel est le sentiment éprouvé par le narrateur à la fin du texte ? Justifiez votre réponse **(1point)**

**9.** C- Réagir (2 points) — Le condamné souffre énormément dans son cachot. Avez-vous pitié de lui ? Exprimez votre avis en deux à trois phrases bien construites **(1point)**

**10.** On dit que la peine de mort permet de donner l'exemple. Qu'en pensez-vous ? Exprimez votre avis en deux à trois phrases bien construites **(1point)**

## II. Production écrite (10 points)

Certains jeunes, écrivent, dessinent, font des graffitis… sur les murs des lycées, les portes des toilettes, ou encore sur les tables des classes…

Approuvez- vous cette forme d'expression ?

Développez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Puisque le jour ne paraît pas encore, que faire de la nuit ? Il m'est venu une idée. Je me suis levé et j'ai promené ma lampe sur les quatre murs de ma cellule. Ils sont couverts d'écritures, de dessins, de figures bizarres, de noms qui se mêlent et s'effacent les uns les autres. Il semble que chaque condamné ait voulu laisser trace, ici du moins. C'est du crayon, de la craie, du charbon, des lettres noires, blanches, grises, souvent de profondes entailles dans la pierre, çà et là des caractères rouillés qu'on dirait écrits avec du sang. Certes, si j'avais l'esprit plus libre, je prendrais intérêt à ce livre étrange qui se développe page à page à mes yeux sur chaque pierre de ce cachot. J'aimerais à recomposer un tout de ces fragments de pensée, épars sur la dalle : à retrouver chaque homme sous chaque nom ; à rendre le sens et la vie à ces inscriptions mutilées, à ces phrases démembrées, à ces mots tronqués, corps sans tête comme ceux qui les ont écrits.\n\nÀ la hauteur de mon chevet, il y a deux cœurs enflammés, percés d'une flèche, et au-dessus *Amour pour la vie*. Le malheureux ne prenait pas un long engagement.\n\nÀ côté, une espèce de chapeau à trois cornes avec une petite figure grossièrement dessinée au-dessous, et ces mots : *Vive l'empereur* ! *1824.*\n\nEncore des cœurs enflammés, avec cette inscription, caractéristique dans une prison : *J'aime et j'adore Mathieu Danvin*. JACQUES.\n\nSur le mur opposé on lit ce nom : *Papavoine*⁽¹⁾. Le *P* majuscule est brodé d'arabesques et enjolivé avec soin.\n\nUn couplet d'une chanson obscène.\n\nUn bonnet de liberté sculpté assez profondément dans la pierre, avec ceci dessous : - *Bories*⁽²⁾ - *La République*. C'était un des quatre sous-officiers de La Rochelle⁽³⁾. Pauvre jeune homme ! Que leurs prétendues nécessitées politiques sont hideuses ! Pour une idée, pour une rêverie, pour une abstraction, cette horrible réalité qu'on appelle la guillotine ! Et moi qui me plaignais, moi, misérable qui ai commis un véritable crime, qui ai versé du sang !\n\nJe n'irai pas plus loin dans ma recherche. - Je viens de voir, crayonnée en blanc au coin du mur, une image épouvantable, la figure de cet échafaud qui, à l'heure qu'il est, se dresse peut-être pour moi.\n\n– La lampe a failli me tomber des mains.\n\n*Notes :*\n\n*1- **Papavoine** : a été guillotiné le 25 mars 1825 pour avoir tué à coups de couteau deux petits garçons de cinq à six ans, qui jouaient près de leur mère.*\n\n*2- **Bories** : a été exécuté le 21 septembre 1822 pour avoir été à la tête de la tentative d'insurrection.*\n\n*3- **La Rochelle** : est une ville côtière du sud-ouest de la France*", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "A- Contextualiser (2 points) — D'après votre connaissance de l'œuvre, complétez le texte suivant : *Ce passage est extrait de ………… écrit par ………… en ………… et dont le genre est …………*", "correction": ""}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "Pour situer cet extrait, complétez ce tableau :", "affirmations": [{"texte": "Le condamné se trouve en face de la place de Grève.", "vrai": null}, {"texte": "Il est marié et lettré.", "vrai": null}, {"texte": "Il est dans son cachot à Bicêtre.", "vrai": null}, {"texte": "Il est célibataire et analphabète.", "vrai": null}]}, {"type": "libre", "numero": "3", "points": 1, "enonce": "B- Analyser (6 points) — Quelle distraction le condamné a-t-il trouvée pour remplir son temps la nuit?", "correction": ""}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Que découvre-t-il ?", "correction": ""}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Justifiez à l'aide d'une figure de style", "correction": ""}, {"type": "libre", "numero": "5a", "points": 0.5, "enonce": "Relevez dans le texte 2 mots appartenant au champ lexical de l'écriture :", "correction": ""}, {"type": "choix", "numero": "5b", "points": 0.5, "enonce": "Ce champ lexical permet ici de : Raconter, Décrire ou Convaincre. Recopiez la bonne réponse", "options": ["Raconter", "Décrire", "Convaincre"], "bonne": null}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "*'Je prendrais intérêt à ce livre étrange'* De quel livre s'agit-il ?", "correction": ""}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "Quelle est la figure de style contenue dans cette phrase ?", "correction": ""}, {"type": "tableau", "numero": "7", "points": 1, "enonce": "Reliez chaque personnage au crime qu'il a commis : (Personnages / Crimes commis : a- Vol qualifié ; b- Crime politique ; c- Homicide volontaire)", "champs": [{"libelle": "1- Papavoine", "reponse": ""}, {"libelle": "2- Bories", "reponse": ""}]}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Quel est le sentiment éprouvé par le narrateur à la fin du texte ? Justifiez votre réponse", "correction": ""}, {"type": "libre", "numero": "9", "points": 1, "enonce": "C- Réagir (2 points) — Le condamné souffre énormément dans son cachot. Avez-vous pitié de lui ? Exprimez votre avis en deux à trois phrases bien construites", "correction": ""}, {"type": "libre", "numero": "10", "points": 1, "enonce": "On dit que la peine de mort permet de donner l'exemple. Qu'en pensez-vous ? Exprimez votre avis en deux à trois phrases bien construites", "correction": ""}]}, {"titre": "II. Production écrite", "points": 10, "texte": "Certains jeunes, écrivent, dessinent, font des graffitis… sur les murs des lycées, les portes des toilettes, ou encore sur les tables des classes…\n\nApprouvez- vous cette forme d'expression ?\n\nDéveloppez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  questions = excluded.questions;
