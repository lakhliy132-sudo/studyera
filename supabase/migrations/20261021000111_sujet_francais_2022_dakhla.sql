-- Sujet de français, examen régional 2022 (session normale), académie
-- Dakhla-Oued Ed-Dahab, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2022 جهة الداخلة وادي الذهب »).
-- Le PDF ne contient pas de corrigé : aucune réponse n'est saisie.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين لجهة الداخلة - وادي الذهب »,
-- « الامتحان الجهوي الموحد لنيل شهادة الباكالوريا - المترشحون المتمدرسون »,
-- « الدورة العادية - يونيو 2022 », matière « اللغة الأجنبية الأولى », « القطب
-- العلمي والتقني », « مدة الإنجاز: ساعتان ». Coefficient « 3 أو 4 » : deux
-- valeurs, laissé vide. Le PDF ne contient pas de corrigé.
-- Le scan est penché : le texte est recopié depuis l'image. Sur la feuille,
-- « Le garde, Je ne sais pas. » (virgule au lieu des deux-points), « Votre
-- sang », « Je Risquerais gros » et « Adejctif » dans la note sont recopiés
-- tels quels.
-- La partie A s'intitule « Conceptualisation » sur la feuille.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, questions)
values (
  $sujet$francais$sujet$,
  2022,
  $sujet$normale$sujet$,
  $sujet$Dakhla-Oued Ed-Dahab$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Pôle scientifique et technique$sujet$,
  120,
  $sujet$## Texte

**Antigone :** Ecoute…

**Le garde :** Oui.

**Antigone :** Je vais mourir tout à l'heure.

*(Le garde ne répond pas. Un silence. Il fait les cent pas. Au bout d'un moment, il reprend.)*

**Le garde :** D'un autre côté, on a plus de considération pour le garde que pour le sergent de l'active. Le garde, c'est un soldat, mais c'est presque un fonctionnaire.

**Antigone :** Tu crois qu'on a mal pour mourir ?

**Le garde :** Je ne peux pas vous dire. Pendant la guerre, ceux qui étaient touchés au ventre, ils avaient mal. Moi, je n'ai pas été blessé. Et, d'un sens, ça m'a nui pour l'avancement.

**Antigone :** Comment vont-ils me faire mourir ?

**Le garde,** Je ne sais pas. Je crois que j'ai entendu dire que pour ne pas souiller la ville de Votre sang, ils allaient vous murer dans un trou.

**Antigone :** Vivante ?

**Le garde :** Oui, d'abord.

*(Un silence. Le garde se fait une chique.)*

**Antigone :** ô tombeau! ô lit nuptial!⁽¹⁾ ô ma demeure souterraine!… (*Elle est toute petite au milieu de la grande pièce nue. On dirait qu'elle a un peu froid. Elle s'entoure de ses bras. Elle murmure.*) Toute seule…

**Le garde :** (*qui a fini sa chique.*) Aux cavernes de Hadès, aux portes de la ville. En plein soleil. Une drôle de corvée encore pour ceux qui seront de faction. Il avait d'abord été question d'y mettre l'armée. Mais, aux dernières nouvelles, il paraît que c'est encore la garde qui fournira les piquets. Elle a bon dos, la garde ! Etonnez-vous après qu'il existe une jalousie entre le garde et le sergent d'active…

**Antigone :** (*murmure, soudain lasse.*) Deux bêtes…

**Le garde :** Quoi, deux bêtes ?

**Antigone :** Des bêtes se serreraient l'une contre l'autre pour se faire chaud. Je suis toute seule.

**Le garde :** Si vous avez besoin de quelque chose, c'est différent. Je peux appeler.

**Antigone :** Non. Je voudrais seulement que tu remettes une lettre à quelqu'un quand je serai morte.

**Le garde :** Comment ça, une lettre ?

**Antigone :** Une lettre que j'écrirai.

**Le garde :** Ah ! Ça non ! Pas d'histoires ! Une lettre ! Comme vous y allez, vous ! Je Risquerais gros, moi, à ce petit jeu-là !

**Antigone :** Je te donnerai cet anneau si tu acceptes.

**Le garde :** C'est de l'or ?

**Antigone :** Oui. C'est de l'or.

**Le garde :** Vous comprenez, si on me fouille, moi, c'est le conseil de guerre. Cela vous est égal à vous ? (*Il regarde encore la bague.*) Ce que je peux, si vous voulez, c'est écrire sur mon carnet ce que vous auriez voulu dire. Après, j'arracherai la page. De mon écriture, ce n'est pas pareil.

*1- Nuptial : Adejctif relatif aux noces (mariage)*

## I. Étude de texte (10 points)

**1.** A – Conceptualisation : Complétez le tableau suivant : **(0,25ptx4)**

| Auteur | Titre de l'œuvre | Genre | Date d'écriture |
|---|---|---|---|
| | | | |

**2.** Pour situer cet extrait, répondez par "Vrai" ou "Faux" **(0,25ptx4)**

| | Vrai | Faux |
|---|---|---|
| a- Créon a convaincu sa nièce de renoncer à son projet d'enterrement. | | |
| b- Ismène décide enfin d'accompagner Antigone. | | |
| c- Hémon supplie son père pour épargner (ne pas tuer) Antigone. | | |
| d- Créon accepte de faire fuir Antigone. | | |

**3.** B- Analyse de texte : Quels sont les personnages de cette scène ? S'agit-il de leur première rencontre ? **(0,5ptx2)**

**4.** Comment Antigone va-t-elle mourir ? **(1pt)**

**5.** Quel sentiment éprouve- t- elle ? Justifiez votre réponse à partir du texte. **(0,5ptx2)**

**6a.** a- Que demande Antigone au garde ? **(0,5pt)**

**6b.** b- Qu'est-ce qu'elle lui donne en contrepartie (en échange) ? **(0,5pt)**

**7.** Relevez dans le texte quatre termes ou expressions appartenant au champ lexical de la mort. **(0,25ptx4)**

**8a.** **"Mon lit nuptial"** a- A quoi renvoie cette expression ? **(0,5pt)**

**8b.** b- De quelle figure de style s'agit-il ? **(0,5pt)**

**9.** C- Réaction personnelle : Acceptez-vous la conduite indifférente du garde envers Antigone ? Justifiez votre réponse. **(1pt)**

**10.** Si vous étiez à la place du garde, accepteriez-vous la demande d'Antigone? Justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

A l'encontre du garde qui accepte l'anneau en or de la part d'Antigone, certaines personnes pensent que le fait de rendre service à autrui est un devoir (loin de tout intérêt personnel).

Approuvez-vous cette thèse ?

Rédigez un texte argumentatif dans lequel vous exprimez votre opinion en la soutenant par des arguments convaincants, illustrés par des exemples tirés de vos lectures et de votre vécu personnel.

**N.B. : Lors de votre rédaction, vous tenez compte des critères suivants :**

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture. | 5 points | Vocabulaire (usage de termes précis et variés). | 5 points |
| Cohérence de l'argumentation. | | Syntaxe (construction de phrases correctes). | |
| Structure du texte (organisation et progression du texte). | | Conjugaison (emploi des temps). | |
| | | Orthographe d'usage (respect des règles). | |
| | | Ponctuation (usage de ponctuation adéquate). | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**Antigone :** Ecoute…\n\n**Le garde :** Oui.\n\n**Antigone :** Je vais mourir tout à l'heure.\n\n*(Le garde ne répond pas. Un silence. Il fait les cent pas. Au bout d'un moment, il reprend.)*\n\n**Le garde :** D'un autre côté, on a plus de considération pour le garde que pour le sergent de l'active. Le garde, c'est un soldat, mais c'est presque un fonctionnaire.\n\n**Antigone :** Tu crois qu'on a mal pour mourir ?\n\n**Le garde :** Je ne peux pas vous dire. Pendant la guerre, ceux qui étaient touchés au ventre, ils avaient mal. Moi, je n'ai pas été blessé. Et, d'un sens, ça m'a nui pour l'avancement.\n\n**Antigone :** Comment vont-ils me faire mourir ?\n\n**Le garde,** Je ne sais pas. Je crois que j'ai entendu dire que pour ne pas souiller la ville de Votre sang, ils allaient vous murer dans un trou.\n\n**Antigone :** Vivante ?\n\n**Le garde :** Oui, d'abord.\n\n*(Un silence. Le garde se fait une chique.)*\n\n**Antigone :** ô tombeau! ô lit nuptial!⁽¹⁾ ô ma demeure souterraine!… (*Elle est toute petite au milieu de la grande pièce nue. On dirait qu'elle a un peu froid. Elle s'entoure de ses bras. Elle murmure.*) Toute seule…\n\n**Le garde :** (*qui a fini sa chique.*) Aux cavernes de Hadès, aux portes de la ville. En plein soleil. Une drôle de corvée encore pour ceux qui seront de faction. Il avait d'abord été question d'y mettre l'armée. Mais, aux dernières nouvelles, il paraît que c'est encore la garde qui fournira les piquets. Elle a bon dos, la garde ! Etonnez-vous après qu'il existe une jalousie entre le garde et le sergent d'active…\n\n**Antigone :** (*murmure, soudain lasse.*) Deux bêtes…\n\n**Le garde :** Quoi, deux bêtes ?\n\n**Antigone :** Des bêtes se serreraient l'une contre l'autre pour se faire chaud. Je suis toute seule.\n\n**Le garde :** Si vous avez besoin de quelque chose, c'est différent. Je peux appeler.\n\n**Antigone :** Non. Je voudrais seulement que tu remettes une lettre à quelqu'un quand je serai morte.\n\n**Le garde :** Comment ça, une lettre ?\n\n**Antigone :** Une lettre que j'écrirai.\n\n**Le garde :** Ah ! Ça non ! Pas d'histoires ! Une lettre ! Comme vous y allez, vous ! Je Risquerais gros, moi, à ce petit jeu-là !\n\n**Antigone :** Je te donnerai cet anneau si tu acceptes.\n\n**Le garde :** C'est de l'or ?\n\n**Antigone :** Oui. C'est de l'or.\n\n**Le garde :** Vous comprenez, si on me fouille, moi, c'est le conseil de guerre. Cela vous est égal à vous ? (*Il regarde encore la bague.*) Ce que je peux, si vous voulez, c'est écrire sur mon carnet ce que vous auriez voulu dire. Après, j'arracherai la page. De mon écriture, ce n'est pas pareil.\n\n*1- Nuptial : Adejctif relatif aux noces (mariage)*", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "A – Conceptualisation : Complétez le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": ""}, {"libelle": "Titre de l'œuvre", "reponse": ""}, {"libelle": "Genre", "reponse": ""}, {"libelle": "Date d'écriture", "reponse": ""}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "Pour situer cet extrait, répondez par \"Vrai\" ou \"Faux\"", "affirmations": [{"texte": "a- Créon a convaincu sa nièce de renoncer à son projet d'enterrement.", "vrai": null}, {"texte": "b- Ismène décide enfin d'accompagner Antigone.", "vrai": null}, {"texte": "c- Hémon supplie son père pour épargner (ne pas tuer) Antigone.", "vrai": null}, {"texte": "d- Créon accepte de faire fuir Antigone.", "vrai": null}]}, {"type": "libre", "numero": "3", "points": 1, "enonce": "B- Analyse de texte : Quels sont les personnages de cette scène ? S'agit-il de leur première rencontre ?", "correction": ""}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Comment Antigone va-t-elle mourir ?", "correction": ""}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Quel sentiment éprouve- t- elle ? Justifiez votre réponse à partir du texte.", "correction": ""}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "a- Que demande Antigone au garde ?", "correction": ""}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "b- Qu'est-ce qu'elle lui donne en contrepartie (en échange) ?", "correction": ""}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez dans le texte quatre termes ou expressions appartenant au champ lexical de la mort.", "correction": ""}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "**\"Mon lit nuptial\"** a- A quoi renvoie cette expression ?", "correction": ""}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "b- De quelle figure de style s'agit-il ?", "correction": ""}, {"type": "libre", "numero": "9", "points": 1, "enonce": "C- Réaction personnelle : Acceptez-vous la conduite indifférente du garde envers Antigone ? Justifiez votre réponse.", "correction": ""}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Si vous étiez à la place du garde, accepteriez-vous la demande d'Antigone? Justifiez votre réponse.", "correction": ""}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nA l'encontre du garde qui accepte l'anneau en or de la part d'Antigone, certaines personnes pensent que le fait de rendre service à autrui est un devoir (loin de tout intérêt personnel).\n\nApprouvez-vous cette thèse ?\n\nRédigez un texte argumentatif dans lequel vous exprimez votre opinion en la soutenant par des arguments convaincants, illustrés par des exemples tirés de vos lectures et de votre vécu personnel.\n\n**N.B. : Lors de votre rédaction, vous tenez compte des critères suivants :**\n\n| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture. | 5 points | Vocabulaire (usage de termes précis et variés). | 5 points |\n| Cohérence de l'argumentation. | | Syntaxe (construction de phrases correctes). | |\n| Structure du texte (organisation et progression du texte). | | Conjugaison (emploi des temps). | |\n| | | Orthographe d'usage (respect des règles). | |\n| | | Ponctuation (usage de ponctuation adéquate). | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  questions = excluded.questions;
