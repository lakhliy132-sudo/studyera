-- Sujet de français, examen régional 2018 (session normale), académie
-- Guelmim-Oued Noun, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2018 جهة كلميم واد نون »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme « الأكاديمية الجهوية للتربية والتكوين جهة كلميم - واد نون » ;
-- « دورة يونيو 2018 », « المترشحون المتمدرسون », durée « ساعتان ».
-- Coefficient 4 pour lettres et sciences humaines, sciences expérimentales,
-- sciences mathématiques, sciences et technologies, arts appliqués ; 3 pour
-- sciences économiques et gestion : laissé vide.
-- Barème global sur la feuille : « 10 points (1pt. X 10) » ; le détail des
-- sous-questions (0,25 / 0,5) vient du corrigé. Dans le texte 1, « L'exemple ! »
-- est en gras sur la feuille.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2018,
  $sujet$normale$sujet$,
  $sujet$Guelmim-Oued Noun$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, sciences économiques et gestion, arts appliqués$sujet$,
  120,
  $sujet$## Texte

**«Texte 01»**

[…] Plus de chance maintenant ! Mon pourvoi sera rejeté, parce que tout est en règle ; les témoins ont bien témoigné, les plaideurs ont bien plaidé, les juges ont bien jugé. Je n'y compte pas, à moins que... Non, folie ! Plus d'espérance ! Le pourvoi, c'est une corde qui vous tient suspendu au-dessus de l'abîme, et qu'on entend craquer à chaque instant, jusqu'à ce qu'elle se casse. C'est comme si le couteau de la guillotine mettait six semaines à tomber.

Si j'avais ma grâce ? - Avoir ma grâce ! Et par qui ? et pourquoi ? et comment ? Il est impossible qu'on me fasse grâce. **L'exemple !** Comme ils disent.

Je n'ai plus que trois pas à faire : Bicêtre, la Conciergerie, la Grève.

**«Texte 02»**

Il est une heure et quart.

Voici ce que j'éprouve maintenant :

Une violente douleur de tête. Les reins froids, le front brûlant. Chaque fois que je me lève ou que je me penche, il me semble qu'il y a un liquide qui flotte dans mon cerveau, et qui fait battre ma cervelle contre les parois du crâne.

J'ai des tressaillements convulsifs, et de temps en temps la plume tombe de mes mains comme par une secousse galvanique.

Les yeux me cuisent comme si j'étais dans la fumée.

J'ai mal dans les coudes.

Encore deux heures et quarante-cinq minutes, et je serai guéri.

## I. Étude de texte (10 points)

**1.** Complétez le paragraphe suivant par les éléments convenables : Les deux textes sont tirés de l'œuvre intitulée …………… , écrite par ……………, publiée au …… siècle et appartenant au genre littéraire…………… . **(1pt.)**

**2a.** Pour situer le « **texte 01** », répondez aux questions suivantes : À qui renvoie le pronom « je » dans le texte ? **(1pt.)**

**2b.** Où se trouve-t-il maintenant ?

**2c.** Où était-il avant ?

**2d.** Combien de temps a-t-il passé dans la prison ?

**3.** Texte 1 : Quelle réaction le personnage a-t-il exprimée par l'expression **en gras** (*L'exemple !*) : **Recopiez la bonne réponse.** **(1pt.)**

a- l'appréciation ?  
b- la fierté ?  
c- le mépris ?

**4A.** Quelle figure de style reconnaissez-vous dans l'énoncé suivant : « *Le pourvoi, c'est une corde qui vous tient suspendu au-dessus de l'abîme, et qu'on entend craquer à chaque instant, jusqu'à ce qu'elle se casse.* » **Recopiez la bonne réponse.** **(1pt.)**

a- une antiphrase ?  
b- Une métaphore ?  
c- Une comparaison ?

**4B.** Quelle position prend le narrateur sur le pourvoi ?

**5.** Relevez dans le texte **quatre mots** ou expressions appartenant au champ lexical de **la justice**. **(1pt.)**

**6.** Texte 2 : Que voudrait dire le narrateur à travers l'expression soulignée dans l'énoncé suivant : « *Encore deux heures et quarante-cinq minutes, et* ***je serai guéri*** » ? [souligné sur la feuille, en gras ici] - Choisissez **la bonne réponse** parmi les propositions suivantes : **(1pt.)**

a- il sera relâché.  
b- il sera soulagé par l'exécution.  
c- il sera transféré à l'infirmerie.

**7A.** Relevez dans le texte deux expressions illustrant la douleur physique du condamné. **(1pt.)**

**7B.** Quelle est la cause de cette douleur ?

**8A.** Texte 1 et texte 2 : Quelle est la tonalité dominante dans les deux textes ? **(1pt.)**

**8B.** Quel sentiment cherche le narrateur à susciter chez le lecteur ?

**9.** D'après vous, le narrateur mérite-t-il la grâce ? Justifiez votre réponse par un argument. **(1pt.)**

**10.** Pensez-vous que la justice a bien fait son travail dans l'affaire de ce condamné ? Justifiez votre réponse. **(1pt.)**

## II. Production écrite (10 points)

**Le sujet :** Certaines personnes s'attachent beaucoup plus à leur vie antérieure (passée), au détriment de leur vie postérieure (future). D'autres, au contraire, ne pensent qu'à leur avenir.

Quelle position prenez-vous par rapport à votre vie passée et à votre vie future ?

Exprimez votre point de vue en le justifiant par des arguments et des exemples pertinents.

***Lors de la rédaction, vous tenez compte des critères suivants :***

| Critères d'évaluation du discours (5 pts) | Critères d'évaluation de la langue (5 pts) |
|---|---|
| Conformité de la production à la consigne d'écriture | Vocabulaire (usage de termes précis et variés) |
| Cohérence de l'argumentation | Syntaxe (construction des phrases correctes) |
| Structure du texte (organisation et progression du texte) | Ponctuation (usage d'une ponctuation adéquate) |
| | Respect des règles orthographiques et grammaticales. |
| | Conjugaison (emploi des temps verbaux) |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** Les deux textes sont tirés de l'œuvre intitulée ***Le Dernier jour d'un condamné***, écrite par **Victor Hugo**, publiée au **XIXème** siècle et appartenant au genre littéraire **le roman réaliste**. (0,25 pt.x4) **(1pt.)**

**2a.** « je » renvoie : au condamné (0,25pt.) **(1pt.)**

**2b.** Il se trouve maintenant à Bicêtre. (0,25pt.)

**2c.** Il était à l'infirmerie. (0,25pt.)

**2d.** Il a passé entre cinq et six semaines. (0,25pt.)

**3.** La phrase exclamative en gras exprime : **c- le mépris.** **(1pt.)**

**4A.** Une métaphore (0,5 pt.) **(1pt.)**

**4B.** Le narrateur hésite entre l'espoir et le désespoir de bénéficier du pourvoi ; s'attache jusqu'au bout à une illusion. (0,5 pt.)

**5.** *Pourvoi / Plaideurs /les juges /les témoins…* (0,25pt×4) **(1pt.)**

**6.** Le sens de la phrase soulignée : « *Encore deux heures et quarante-cinq minutes, et je serai guéri.* ». b. Le narrateur sera soulagé par l'exécution. **(1pt.)**

**7A.** Deux expressions illustrant la douleur physique du condamné : ***Douleur de tête / les reins froids …*** (0,5 pt.) **(1pt.)**

**7B.** Cette douleur est due à : L'approche de son heure d'exécution. (0,5pt.)

**8A.** Tonalité dominante : pathétique (½ pt.) **(1pt.)**

**8B.** Sentiment suscité : la pitié. (½ pt.)

**9.** Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. (0,5 x 2) **(1pt.)**

**10.** Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. (0,5 x 2) **(1pt.)**

### II. Production écrite

*Lors de la correction, vous tenez compte des critères suivants :*

| Critères d'évaluation du discours (5 pts) | Critères d'évaluation de la langue (5 pts) |
|---|---|
| Conformité de la production à la consigne d'écriture | Vocabulaire (usage de termes précis et variés) |
| Cohérence de l'argumentation | Syntaxe (construction des phrases correctes) |
| Structure du texte (organisation et progression du texte) | Ponctuation (usage d'une ponctuation adéquate) |
| | Respect des règles orthographiques et grammaticales. |
| | Conjugaison (emploi des temps verbaux) |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement les deux textes et répondez aux questions.", "texte": "**«Texte 01»**\n\n[…] Plus de chance maintenant ! Mon pourvoi sera rejeté, parce que tout est en règle ; les témoins ont bien témoigné, les plaideurs ont bien plaidé, les juges ont bien jugé. Je n'y compte pas, à moins que... Non, folie ! Plus d'espérance ! Le pourvoi, c'est une corde qui vous tient suspendu au-dessus de l'abîme, et qu'on entend craquer à chaque instant, jusqu'à ce qu'elle se casse. C'est comme si le couteau de la guillotine mettait six semaines à tomber.\n\nSi j'avais ma grâce ? - Avoir ma grâce ! Et par qui ? et pourquoi ? et comment ? Il est impossible qu'on me fasse grâce. **L'exemple !** Comme ils disent.\n\nJe n'ai plus que trois pas à faire : Bicêtre, la Conciergerie, la Grève.\n\n**«Texte 02»**\n\nIl est une heure et quart.\n\nVoici ce que j'éprouve maintenant :\n\nUne violente douleur de tête. Les reins froids, le front brûlant. Chaque fois que je me lève ou que je me penche, il me semble qu'il y a un liquide qui flotte dans mon cerveau, et qui fait battre ma cervelle contre les parois du crâne.\n\nJ'ai des tressaillements convulsifs, et de temps en temps la plume tombe de mes mains comme par une secousse galvanique.\n\nLes yeux me cuisent comme si j'étais dans la fumée.\n\nJ'ai mal dans les coudes.\n\nEncore deux heures et quarante-cinq minutes, et je serai guéri.", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "Complétez le paragraphe suivant par les éléments convenables : Les deux textes sont tirés de l'œuvre intitulée …………… , écrite par ……………, publiée au …… siècle et appartenant au genre littéraire…………… .", "correction": "Les deux textes sont tirés de l'œuvre intitulée ***Le Dernier jour d'un condamné***, écrite par **Victor Hugo**, publiée au **XIXème** siècle et appartenant au genre littéraire **le roman réaliste**. (0,25 pt.x4)"}, {"type": "libre", "numero": "2a", "points": 0.25, "enonce": "Pour situer le « **texte 01** », répondez aux questions suivantes : À qui renvoie le pronom « je » dans le texte ?", "correction": "« je » renvoie : au condamné (0,25pt.)"}, {"type": "libre", "numero": "2b", "points": 0.25, "enonce": "Où se trouve-t-il maintenant ?", "correction": "Il se trouve maintenant à Bicêtre. (0,25pt.)"}, {"type": "libre", "numero": "2c", "points": 0.25, "enonce": "Où était-il avant ?", "correction": "Il était à l'infirmerie. (0,25pt.)"}, {"type": "libre", "numero": "2d", "points": 0.25, "enonce": "Combien de temps a-t-il passé dans la prison ?", "correction": "Il a passé entre cinq et six semaines. (0,25pt.)"}, {"type": "choix", "numero": "3", "points": 1, "enonce": "Texte 1 : Quelle réaction le personnage a-t-il exprimée par l'expression **en gras** (*L'exemple !*) : **Recopiez la bonne réponse.**", "options": ["l'appréciation ?", "la fierté ?", "le mépris ?"], "bonne": 2}, {"type": "choix", "numero": "4A", "points": 0.5, "enonce": "Quelle figure de style reconnaissez-vous dans l'énoncé suivant : « *Le pourvoi, c'est une corde qui vous tient suspendu au-dessus de l'abîme, et qu'on entend craquer à chaque instant, jusqu'à ce qu'elle se casse.* » **Recopiez la bonne réponse.**", "options": ["une antiphrase ?", "Une métaphore ?", "Une comparaison ?"], "bonne": 1}, {"type": "libre", "numero": "4B", "points": 0.5, "enonce": "Quelle position prend le narrateur sur le pourvoi ?", "correction": "Le narrateur hésite entre l'espoir et le désespoir de bénéficier du pourvoi ; s'attache jusqu'au bout à une illusion. (0,5 pt.)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Relevez dans le texte **quatre mots** ou expressions appartenant au champ lexical de **la justice**.", "correction": "*Pourvoi / Plaideurs /les juges /les témoins…* (0,25pt×4)"}, {"type": "choix", "numero": "6", "points": 1, "enonce": "Texte 2 : Que voudrait dire le narrateur à travers l'expression soulignée dans l'énoncé suivant : « *Encore deux heures et quarante-cinq minutes, et* ***je serai guéri*** » ? [souligné sur la feuille, en gras ici] - Choisissez **la bonne réponse** parmi les propositions suivantes :", "options": ["il sera relâché.", "il sera soulagé par l'exécution.", "il sera transféré à l'infirmerie."], "bonne": 1}, {"type": "libre", "numero": "7A", "points": 0.5, "enonce": "Relevez dans le texte deux expressions illustrant la douleur physique du condamné.", "correction": "Deux expressions illustrant la douleur physique du condamné : ***Douleur de tête / les reins froids …*** (0,5 pt.)"}, {"type": "libre", "numero": "7B", "points": 0.5, "enonce": "Quelle est la cause de cette douleur ?", "correction": "Cette douleur est due à : L'approche de son heure d'exécution. (0,5pt.)"}, {"type": "libre", "numero": "8A", "points": 0.5, "enonce": "Texte 1 et texte 2 : Quelle est la tonalité dominante dans les deux textes ?", "correction": "Tonalité dominante : pathétique (½ pt.)"}, {"type": "libre", "numero": "8B", "points": 0.5, "enonce": "Quel sentiment cherche le narrateur à susciter chez le lecteur ?", "correction": "Sentiment suscité : la pitié. (½ pt.)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "D'après vous, le narrateur mérite-t-il la grâce ? Justifiez votre réponse par un argument.", "correction": "Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. (0,5 x 2)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Pensez-vous que la justice a bien fait son travail dans l'affaire de ce condamné ? Justifiez votre réponse.", "correction": "Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. (0,5 x 2)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Le sujet :** Certaines personnes s'attachent beaucoup plus à leur vie antérieure (passée), au détriment de leur vie postérieure (future). D'autres, au contraire, ne pensent qu'à leur avenir.\n\nQuelle position prenez-vous par rapport à votre vie passée et à votre vie future ?\n\nExprimez votre point de vue en le justifiant par des arguments et des exemples pertinents.\n\n***Lors de la rédaction, vous tenez compte des critères suivants :***\n\n| Critères d'évaluation du discours (5 pts) | Critères d'évaluation de la langue (5 pts) |\n|---|---|\n| Conformité de la production à la consigne d'écriture | Vocabulaire (usage de termes précis et variés) |\n| Cohérence de l'argumentation | Syntaxe (construction des phrases correctes) |\n| Structure du texte (organisation et progression du texte) | Ponctuation (usage d'une ponctuation adéquate) |\n| | Respect des règles orthographiques et grammaticales. |\n| | Conjugaison (emploi des temps verbaux) |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
