-- Sujet de français, examen régional 2018 (session normale), académie
-- Drâa-Tafilalet, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2018 جهة درعة تافيلالت »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين درعة - تافيلالت »,
-- « الامتحان الجهوي الموحد - دورة يونيو 2018 », « المستوى: السنة الأولى
-- بكالوريا », durée « ساعتان ». Coefficient non unique : 04 pour toutes les
-- séries sauf sciences économiques et gestion (03).
-- La feuille ne donne pas de ligne « Extrait de » sous le texte.
-- Question 3 : le vrai/faux (0,5pt) et la justification (0,5pt) sont saisis
-- séparément ; le corrigé note chaque item « (0,25pt x 2) » (réponse +
-- expression).
-- Les intitulés « Critères d'évaluation du discours » et « Critères
-- d'évaluation de la langue » sont soulignés sur la feuille (en gras ici).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2018,
  $sujet$normale$sujet$,
  $sujet$Drâa-Tafilalet$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies (toutes filières), sciences économiques et gestion, arts appliqués$sujet$,
  120,
  $sujet$## Texte

On apporta dans le préau un large baquet. Les gardes-chiourme rompirent la danse des forçats à coups de bâton, et les conduisirent à ce baquet dans lequel on voyait nager je ne sais quelles herbes dans je ne sais quel liquide fumant et sale. Ils mangèrent.

Puis, ayant mangé, ils jetèrent sur le pavé ce qui restait de leur soupe et de leur pain bis, et se remirent à danser et à chanter. Il paraît qu'on leur laisse cette liberté le jour du ferrage et la nuit qui le suit.

J'observais ce spectacle étrange avec une curiosité si avide, si palpitante, si attentive, que je m'étais oublié moi-même. Un profond sentiment de pitié me remuait jusqu'aux entrailles, et leurs rires me faisaient pleurer.

Tout à coup, à travers la rêverie profonde où j'étais tombé, je vis la ronde hurlante s'arrêter et se taire. Puis tous les yeux se tournèrent vers la fenêtre que j'occupais. - Le condamné ! Le condamné ! crièrent-ils tous en me montrant du doigt ; et les explosions de joie redoublèrent.

Je restai pétrifié.

J'ignore d'où ils me connaissaient et comment ils m'avaient reconnu.

– Bonjour! Bonsoir! me crièrent-ils avec leur ricanement atroce. Un des plus jeunes, condamné aux galères perpétuelles, face luisante et plombée, me regarda d'un air d'envie en disant : - Il est heureux ! il sera rogné ! Adieu, camarade !

Je ne puis dire ce qui se passait en moi. J'étais leur camarade en effet. La Grève est sœur de Toulon. J'étais même placé plus bas qu'eux : ils me faisaient honneur. Je frissonnai.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1pt)**

| Titre de l'œuvre | Auteur | Genre littéraire | Siècle |
|---|---|---|---|
| | | | |

**2a.** Pour situer ce texte dans l'œuvre, répondez aux questions suivantes : a) Où se trouvait le narrateur ? **(0,5pt)**

**2b.** b) À quel spectacle assistait-il ? **(0,5pt)**

**3.** Répondez par vrai ou faux : **(0,5pt)**

| | Vrai | Faux |
|---|---|---|
| Les gardes maltraitent les forçats. | | |
| On sert une nourriture de mauvaise qualité aux forçats. | | |

**3j.** Justifiez votre réponse en relevant une expression dans le texte pour chaque phrase. **(0,5pt)**

**4a.** a- Quel sentiment éprouvait le narrateur à l'égard des forçats qui dansaient ? **(0,5pt)**

**4b.** b- Justifiez votre réponse par un indice tiré du texte. **(0,5pt)**

**5.** A partir de l'énoncé suivant : « La Grève est sœur de Toulon », dites quelle sera la destination du narrateur et celle des forçats ? **(1pt)**

**6.** L'énoncé suivant, « il sera rogné » veut dire : (Choisissez et recopiez la bonne réponse.) **(1pt)**

a- Il sera pendu.  
b- Il sera emprisonné.  
c- Il sera guillotiné.

**7.** Relevez dans le texte deux mots appartenant au champ lexical de la prison. **(1pt)**

**8.** Identifiez la figure de style contenue dans l'énoncé suivant : « …leurs rires me faisaient pleurer.». **(1pt)**

**9.** Les forçats, traités comme des bêtes par les grades, chantaient et dansaient. A votre avis, cette scène était-elle amusante? Dites pourquoi en une phrase? **(1pt)**

**10.** Selon vous, les prisonniers méritent-ils d'être traités comme des animaux? Justifiez votre réponse en deux phrases. **(1pt)**

## II. Production écrite (10 points)

Certaines personnes pensent que l'univers carcéral (la prison) devrait être une institution de formation et de rééducation en vue d'une réinsertion sociale. Partagez-vous ce point de vue ?

Rédigez un texte argumentatif dans lequel vous exprimez votre point de vue en le justifiant par des arguments et des exemples.

***Important :***

***Lors de la correction, il sera tenu compte des éléments suivants :***

- **Critères d'évaluation du discours** [souligné sur la feuille, en gras ici] : respect de la consigne, cohérence de l'argumentation, organisation et progression du texte. (5pts)
- **Critères d'évaluation de la langue** [souligné sur la feuille, en gras ici] : correction de la langue (ponctuation, orthographe, syntaxe, vocabulaire, conjugaison). (5pts)$sujet$,
  $sujet$## Corrigé et barème

*Barème et corrigé : Ce corrigé est donné à titre indicatif. Le narrateur jugera de la validité des réponses non prévues.*

### I. Étude de texte

**1.** **(1pt)**

| Titre de l'œuvre | Auteur | Genre littéraire | Siècle |
|---|---|---|---|
| Le dernier jour d'un condamné | Victor HUGO | Roman thèse | XIX. Siècle |

**2a.** Une cellule à Bicêtre. **(0,5pt)**

**2b.** Le ferrage des forçats (le spectacle des forçats). **(0,5pt)**

**3.** **(0,5pt)**

| | |
|---|---|
| Les gardes maltraitent les forçats. | Vrai |
| On sert une nourriture de mauvaise qualité aux forçats. | Vrai |

**3j.** a- Vrai, coups de bâton, baquet… (0,25pt x 2) b- Vrai, quelles herbes, quelle liquide fumant et sale, pain bis. (0,25pt x 2) **(0,5pt)**

**4a.** La pitié, la compassion… **(0,5pt)**

**4b.** Un profond sentiment de pitié …, et leurs rires me faisaient pleurer. **(0,5pt)**

**5.** - Le narrateur à La Grève. (0,5pt) - Les forçats à Toulon. (0,5pt) **(1pt)**

**6.** c- Il sera guillotiné. **(1pt)**

**7.** Les gardes-chiourme, forçats, condamné… (0,5pt x 2) **(1pt)**

**8.** Une antithèse. **(1pt)**

**9.** Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5pt x 2) **(1pt)**

**10.** Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5pt x 2) **(1pt)**

### II. Production écrite

| *Critères d'évaluation du discours :* | Barème et notation |
|---|---|
| Conformité de la production à la consigne d'écriture. Cohérence de l'argumentation. Structure du texte (organisation et progression du texte). | 5 points |
| *Critères d'évaluation de la langue :* | Barème et notation |
| Syntaxe (Construction de phrases cohérentes) ; Vocabulaire (usage de termes précis et variés) ; Orthographe (respect des règles) ; Conjugaison (emploi des temps) ; Ponctuation (usage d'une ponctuation adéquate) | 5 points |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "On apporta dans le préau un large baquet. Les gardes-chiourme rompirent la danse des forçats à coups de bâton, et les conduisirent à ce baquet dans lequel on voyait nager je ne sais quelles herbes dans je ne sais quel liquide fumant et sale. Ils mangèrent.\n\nPuis, ayant mangé, ils jetèrent sur le pavé ce qui restait de leur soupe et de leur pain bis, et se remirent à danser et à chanter. Il paraît qu'on leur laisse cette liberté le jour du ferrage et la nuit qui le suit.\n\nJ'observais ce spectacle étrange avec une curiosité si avide, si palpitante, si attentive, que je m'étais oublié moi-même. Un profond sentiment de pitié me remuait jusqu'aux entrailles, et leurs rires me faisaient pleurer.\n\nTout à coup, à travers la rêverie profonde où j'étais tombé, je vis la ronde hurlante s'arrêter et se taire. Puis tous les yeux se tournèrent vers la fenêtre que j'occupais. - Le condamné ! Le condamné ! crièrent-ils tous en me montrant du doigt ; et les explosions de joie redoublèrent.\n\nJe restai pétrifié.\n\nJ'ignore d'où ils me connaissaient et comment ils m'avaient reconnu.\n\n– Bonjour! Bonsoir! me crièrent-ils avec leur ricanement atroce. Un des plus jeunes, condamné aux galères perpétuelles, face luisante et plombée, me regarda d'un air d'envie en disant : - Il est heureux ! il sera rogné ! Adieu, camarade !\n\nJe ne puis dire ce qui se passait en moi. J'étais leur camarade en effet. La Grève est sœur de Toulon. J'étais même placé plus bas qu'eux : ils me faisaient honneur. Je frissonnai.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "Le dernier jour d'un condamné"}, {"libelle": "Auteur", "reponse": "Victor HUGO"}, {"libelle": "Genre littéraire", "reponse": "Roman thèse"}, {"libelle": "Siècle", "reponse": "XIX. Siècle"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Pour situer ce texte dans l'œuvre, répondez aux questions suivantes : a) Où se trouvait le narrateur ?", "correction": "Une cellule à Bicêtre."}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "b) À quel spectacle assistait-il ?", "correction": "Le ferrage des forçats (le spectacle des forçats)."}, {"type": "vrai-faux", "numero": "3", "points": 0.5, "enonce": "Répondez par vrai ou faux :", "affirmations": [{"texte": "Les gardes maltraitent les forçats.", "vrai": true}, {"texte": "On sert une nourriture de mauvaise qualité aux forçats.", "vrai": true}]}, {"type": "libre", "numero": "3j", "points": 0.5, "enonce": "Justifiez votre réponse en relevant une expression dans le texte pour chaque phrase.", "correction": "a- Vrai, coups de bâton, baquet… (0,25pt x 2) b- Vrai, quelles herbes, quelle liquide fumant et sale, pain bis. (0,25pt x 2)"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "a- Quel sentiment éprouvait le narrateur à l'égard des forçats qui dansaient ?", "correction": "La pitié, la compassion…"}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "b- Justifiez votre réponse par un indice tiré du texte.", "correction": "Un profond sentiment de pitié …, et leurs rires me faisaient pleurer."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "A partir de l'énoncé suivant : « La Grève est sœur de Toulon », dites quelle sera la destination du narrateur et celle des forçats ?", "correction": "- Le narrateur à La Grève. (0,5pt) - Les forçats à Toulon. (0,5pt)"}, {"type": "choix", "numero": "6", "points": 1, "enonce": "L'énoncé suivant, « il sera rogné » veut dire : (Choisissez et recopiez la bonne réponse.)", "options": ["Il sera pendu.", "Il sera emprisonné.", "Il sera guillotiné."], "bonne": 2}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez dans le texte deux mots appartenant au champ lexical de la prison.", "correction": "Les gardes-chiourme, forçats, condamné… (0,5pt x 2)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Identifiez la figure de style contenue dans l'énoncé suivant : « …leurs rires me faisaient pleurer.».", "correction": "Une antithèse."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Les forçats, traités comme des bêtes par les grades, chantaient et dansaient. A votre avis, cette scène était-elle amusante? Dites pourquoi en une phrase?", "correction": "Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5pt x 2)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Selon vous, les prisonniers méritent-ils d'être traités comme des animaux? Justifiez votre réponse en deux phrases.", "correction": "Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5pt x 2)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "Certaines personnes pensent que l'univers carcéral (la prison) devrait être une institution de formation et de rééducation en vue d'une réinsertion sociale. Partagez-vous ce point de vue ?\n\nRédigez un texte argumentatif dans lequel vous exprimez votre point de vue en le justifiant par des arguments et des exemples.\n\n***Important :***\n\n***Lors de la correction, il sera tenu compte des éléments suivants :***\n\n- **Critères d'évaluation du discours** [souligné sur la feuille, en gras ici] : respect de la consigne, cohérence de l'argumentation, organisation et progression du texte. (5pts)\n- **Critères d'évaluation de la langue** [souligné sur la feuille, en gras ici] : correction de la langue (ponctuation, orthographe, syntaxe, vocabulaire, conjugaison). (5pts)", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
