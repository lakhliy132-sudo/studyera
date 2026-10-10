-- Sujet de français, examen régional 2016 (session normale), académie
-- Guelmim-Oued Noun, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2016 جهة كلميم واد نون »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme « الأكاديمية الجهوية للتربية والتكوين جهة كلميم - واد نون » ;
-- « الدورة العادية : يونيو 2016 », « المترشحون الرسميون », durée « ساعتان ».
-- Coefficient 4 pour lettres et sciences humaines, sciences expérimentales,
-- sciences mathématiques, sciences et technologies, arts appliqués ; 3 pour
-- sciences économiques et gestion : laissé vide.
-- Question 2 (« 1pt.(½ pt.x2) ») et question 3 (« 2pts. (½ pt.x4) ») découpées
-- en A/B et a/b selon le corrigé ; questions 3a/3b : vrai ou faux avec
-- justification, saisies en questions libres.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2016,
  $sujet$normale$sujet$,
  $sujet$Guelmim-Oued Noun$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, arts appliqués, sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

Nous quittâmes cette atmosphère de faste⁽¹⁾ pour nous trouver dans le quartier des épices. Nous étions près de la *médersa* Attarinne, cette belle maison où logent les étudiants, quand je rappelai à ma mère la satinette de Lalla Kanza la *chouafa*. Ma mère me félicita d'avoir une si bonne mémoire. Elle rebroussa chemin. Le long de la rue elle maudissait toutes les *chouafas* de la terre, ces femmes calamiteuses qui ne manquaient aucune occasion de vous empoisonner la vie. Elle se demandait ce qu'elle avait bien pu faire de l'argent de cette maudite sorcière de Kanza qui pouvait, si elle le voulait, faire ses commissions elle-même. Elle se mit à l'angle d'une boutique, entreprit de minutieuses recherches, s'énerva, s'agita, lança de nouvelles imprécations contre les *chouafas* et leurs acolytes⁽²⁾, finit par retrouver l'argent au fond d'une poche de son caftan.

Nous ne tardâmes pas à trouver un marchand de satinette. Sans discuter le prix, ma mère demanda un certain nombre de coudées. Elle le paya et nous partîmes enfin.

La bonne humeur de ma mère avait disparu. Elle ne cessa pas de me gourmander⁽³⁾ sans raison jusqu'à l'arrivée chez nous. Elle remit à Lalla Kanza sa satinette noire, lui rendit sa monnaie et monta l'escalier, gémissant et soupirant à chaque marche.

Rahma sortit sur le palier. Elle nous invita dans sa chambre. Elle demanda à ma mère de lui montrer ses acquisitions.

La chambre de Rahma était de mêmes dimensions que la nôtre. Une cloison de bois patinée par l'âge, la coupait aux trois quarts. Derrière cette cloison, Rahma entassait ses provisions d'hiver. Elles consistaient surtout en pains de sel d'un rose taché de gris et en grappes d'oignons. La pièce meublée pauvrement de matelas bosselés et d'une natte de jonc (…).

*1- Faste : richesse. 2- Acolytes : compagnons. 3- Gourmander : blâmer /gronder.*

## I. Étude de texte (10 points)

**1.** Compréhension. Recopiez et complétez le tableau suivant : **(1pt.(¼ x4))**

| Titre de l'œuvre | Auteur | Genre littéraire | Une autre œuvre du même auteur |
|---|---|---|---|
| | | | |

**2A.** Où se trouvent le narrateur et sa mère ? (Choisissez la bonne réponse) **(1pt.(½ pt.x2))**

a- Chez Lalla Aïcha  
b- Chez Sid El Arafi  
c- À la kissaria.

**2B.** Pourquoi sont-ils allés à ce lieu ?

**3a.** Répondez par « Vrai » ou « Faux » en justifiant vos réponses : La chambre de Rahma est richement meublée. **(2pts. (½ pt.x4))**

**3b.** Répondez par « Vrai » ou « Faux » en justifiant vos réponses : Sidi Mohammed et sa mère ont eu une grande difficulté à trouver le vêtement que désirait la *Chouafa*.

**4A.** De quelle manière la mère du narrateur évoque-t-elle les voyantes : d'une manière valorisante ou dévalorisante ? **(½ pt.)**

a- valorisante  
b- dévalorisante

**4B.** Relevez du texte deux termes qui justifient votre réponse. **(½ pt.)**

**5.** Relevez du 1er paragraphe du texte un **discours indirect**. **(½ pt.)**

**6A.** Relevez du texte une **comparaison**. **(½ pt.)**

**6B.** Quel est le point commun (ressemblance) entre les deux éléments comparés. **(½ pt.)**

**7.** Relevez du 1er paragraphe un **nom** qui signifie « **souhaits de malheur** ». **(½ pt.)**

**8A.** Relevez du texte une **subordonnée relative**. **(½ pt.)**

**8B.** Déterminez le **pronom relatif** employé. **(½ pt.)**

**9.** Trouvez-vous du plaisir à faire vos achats dans un souk (marché populaire) ? Justifiez votre réponse par un argument. **(1pt. (½ pt.x2))**

**10.** Les *chouafas* ne font qu'arnaquer et voler les gens naïfs (simples d'esprit). Partagez-vous cette affirmation ? Justifiez votre réponse par un argument. **(1pt. (½ pt.x2))**

## II. Production écrite (10 points)

**Sujet :** Pour certains, les amis virtuels (rencontrés sur les réseaux sociaux : facebook, twitter,…) sont plus fidèles et plus serviables que les amis réels (qu'on fréquente dans la réalité). Partagez-vous cette affirmation ?

Exprimez votre point de vue dans un texte argumentatif cohérent.

***Lors de votre rédaction, vous tenez compte des critères suivants :***

| Critères d'évaluation du discours (5pts) | Critères d'évaluation de la langue (5pts) |
|---|---|
| Conformité de la production à la consigne d'écriture | Vocabulaire (usage de termes précis et variés) |
| Cohérence de l'argumentation | Syntaxe (construction de phrases correctes) |
| Structure du texte (organisation et progression du texte) | Ponctuation (usage d'une ponctuation adéquate |
| | Orthographe d'usage et grammaticale (respect des règles) |
| | Conjugaison (emploi des temps) |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(1pt.(¼ x4))**

| Titre de l'œuvre | Auteur | Genre littéraire | Une autre œuvre du même auteur |
|---|---|---|---|
| La Boîte à merveilles | Ahmed Sefrioui | Roman autobiographique | Ex. Le Chapelet d'ambre ; La maison de servitude ; etc. |

**2A.** Le narrateur et sa mère se trouvent à la kissaria. (½ pt.) **(1pt.(½ pt.x2))**

**2B.** Pour acheter un gilet rouge à l'occasion de l'Achoura. (½ pt.)

**3a.** Faux. Justif. : « *La pièce meublée pauvrement de matelas…* » 1pt. (½ pt.x2) **(2pts. (½ pt.x4))**

**3b.** Faux. Justif. : « *Nous ne tardâmes pas à trouver un marchand de satinette.* » 1pt.(½pt.x2)

**4A.** La mère du narrateur évoque les voyantes d'une manière dévalorisante. **(½ pt.)**

**4B.** Deux termes qui justifient : « *maudissait* » ; « *maudites sorcières* » **(½ pt.)**

**5.** Un discours indirect : « *Elle se demandait ce qu'elle avait bien pu faire de l'argent…* » **(½ pt.)**

**6A.** Une comparaison : « *La chambre de Rahma était de mêmes dimensions que la nôtre.* » **(½ pt.)**

**6B.** Le point commun : les *mêmes dimensions*. **(½ pt.)**

**7.** Un nom qui signifie « souhaits de malheur » : « *imprécations* » **(½ pt.)**

**8A.** Une subordonnée relative : « *où logent les étudiants* »… **(½ pt.)**

**8B.** Le pronom relatif employé : « où ». **(½ pt.)**

**9.** Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. **(1pt. (½ pt.x2))**

**10.** Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. **(1pt. (½ pt.x2))**

### II. Production écrite

*Lors de la correction, veuillez tenir compte des critères suivants :*

| Critères d'évaluation du discours (5pts) | Critères d'évaluation de la langue (5pts) |
|---|---|
| Conformité de la production à la consigne d'écriture | Vocabulaire (usage de termes précis et variés) |
| Cohérence de l'argumentation | Syntaxe (construction de phrases correctes) |
| Structure du texte (organisation et progression du texte) | Ponctuation (usage d'une ponctuation adéquate |
| | Orthographe d'usage et grammaticale (respect des règles) |
| | Conjugaison (emploi des temps) |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Nous quittâmes cette atmosphère de faste⁽¹⁾ pour nous trouver dans le quartier des épices. Nous étions près de la *médersa* Attarinne, cette belle maison où logent les étudiants, quand je rappelai à ma mère la satinette de Lalla Kanza la *chouafa*. Ma mère me félicita d'avoir une si bonne mémoire. Elle rebroussa chemin. Le long de la rue elle maudissait toutes les *chouafas* de la terre, ces femmes calamiteuses qui ne manquaient aucune occasion de vous empoisonner la vie. Elle se demandait ce qu'elle avait bien pu faire de l'argent de cette maudite sorcière de Kanza qui pouvait, si elle le voulait, faire ses commissions elle-même. Elle se mit à l'angle d'une boutique, entreprit de minutieuses recherches, s'énerva, s'agita, lança de nouvelles imprécations contre les *chouafas* et leurs acolytes⁽²⁾, finit par retrouver l'argent au fond d'une poche de son caftan.\n\nNous ne tardâmes pas à trouver un marchand de satinette. Sans discuter le prix, ma mère demanda un certain nombre de coudées. Elle le paya et nous partîmes enfin.\n\nLa bonne humeur de ma mère avait disparu. Elle ne cessa pas de me gourmander⁽³⁾ sans raison jusqu'à l'arrivée chez nous. Elle remit à Lalla Kanza sa satinette noire, lui rendit sa monnaie et monta l'escalier, gémissant et soupirant à chaque marche.\n\nRahma sortit sur le palier. Elle nous invita dans sa chambre. Elle demanda à ma mère de lui montrer ses acquisitions.\n\nLa chambre de Rahma était de mêmes dimensions que la nôtre. Une cloison de bois patinée par l'âge, la coupait aux trois quarts. Derrière cette cloison, Rahma entassait ses provisions d'hiver. Elles consistaient surtout en pains de sel d'un rose taché de gris et en grappes d'oignons. La pièce meublée pauvrement de matelas bosselés et d'une natte de jonc (…).\n\n*1- Faste : richesse. 2- Acolytes : compagnons. 3- Gourmander : blâmer /gronder.*", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Compréhension. Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "La Boîte à merveilles"}, {"libelle": "Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Une autre œuvre du même auteur", "reponse": "Ex. Le Chapelet d'ambre ; La maison de servitude ; etc."}]}, {"type": "choix", "numero": "2A", "points": 0.5, "enonce": "Où se trouvent le narrateur et sa mère ? (Choisissez la bonne réponse)", "options": ["Chez Lalla Aïcha", "Chez Sid El Arafi", "À la kissaria."], "bonne": 2}, {"type": "libre", "numero": "2B", "points": 0.5, "enonce": "Pourquoi sont-ils allés à ce lieu ?", "correction": "Pour acheter un gilet rouge à l'occasion de l'Achoura. (½ pt.)"}, {"type": "libre", "numero": "3a", "points": 1, "enonce": "Répondez par « Vrai » ou « Faux » en justifiant vos réponses : La chambre de Rahma est richement meublée.", "correction": "Faux. Justif. : « *La pièce meublée pauvrement de matelas…* » 1pt. (½ pt.x2)"}, {"type": "libre", "numero": "3b", "points": 1, "enonce": "Répondez par « Vrai » ou « Faux » en justifiant vos réponses : Sidi Mohammed et sa mère ont eu une grande difficulté à trouver le vêtement que désirait la *Chouafa*.", "correction": "Faux. Justif. : « *Nous ne tardâmes pas à trouver un marchand de satinette.* » 1pt.(½pt.x2)"}, {"type": "choix", "numero": "4A", "points": 0.5, "enonce": "De quelle manière la mère du narrateur évoque-t-elle les voyantes : d'une manière valorisante ou dévalorisante ?", "options": ["valorisante", "dévalorisante"], "bonne": 1}, {"type": "libre", "numero": "4B", "points": 0.5, "enonce": "Relevez du texte deux termes qui justifient votre réponse.", "correction": "Deux termes qui justifient : « *maudissait* » ; « *maudites sorcières* »"}, {"type": "libre", "numero": "5", "points": 0.5, "enonce": "Relevez du 1er paragraphe du texte un **discours indirect**.", "correction": "Un discours indirect : « *Elle se demandait ce qu'elle avait bien pu faire de l'argent…* »"}, {"type": "libre", "numero": "6A", "points": 0.5, "enonce": "Relevez du texte une **comparaison**.", "correction": "Une comparaison : « *La chambre de Rahma était de mêmes dimensions que la nôtre.* »"}, {"type": "libre", "numero": "6B", "points": 0.5, "enonce": "Quel est le point commun (ressemblance) entre les deux éléments comparés.", "correction": "Le point commun : les *mêmes dimensions*."}, {"type": "libre", "numero": "7", "points": 0.5, "enonce": "Relevez du 1er paragraphe un **nom** qui signifie « **souhaits de malheur** ».", "correction": "Un nom qui signifie « souhaits de malheur » : « *imprécations* »"}, {"type": "libre", "numero": "8A", "points": 0.5, "enonce": "Relevez du texte une **subordonnée relative**.", "correction": "Une subordonnée relative : « *où logent les étudiants* »…"}, {"type": "libre", "numero": "8B", "points": 0.5, "enonce": "Déterminez le **pronom relatif** employé.", "correction": "Le pronom relatif employé : « où »."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Trouvez-vous du plaisir à faire vos achats dans un souk (marché populaire) ? Justifiez votre réponse par un argument.", "correction": "Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Les *chouafas* ne font qu'arnaquer et voler les gens naïfs (simples d'esprit). Partagez-vous cette affirmation ? Justifiez votre réponse par un argument.", "correction": "Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Pour certains, les amis virtuels (rencontrés sur les réseaux sociaux : facebook, twitter,…) sont plus fidèles et plus serviables que les amis réels (qu'on fréquente dans la réalité). Partagez-vous cette affirmation ?\n\nExprimez votre point de vue dans un texte argumentatif cohérent.\n\n***Lors de votre rédaction, vous tenez compte des critères suivants :***\n\n| Critères d'évaluation du discours (5pts) | Critères d'évaluation de la langue (5pts) |\n|---|---|\n| Conformité de la production à la consigne d'écriture | Vocabulaire (usage de termes précis et variés) |\n| Cohérence de l'argumentation | Syntaxe (construction de phrases correctes) |\n| Structure du texte (organisation et progression du texte) | Ponctuation (usage d'une ponctuation adéquate |\n| | Orthographe d'usage et grammaticale (respect des règles) |\n| | Conjugaison (emploi des temps) |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
