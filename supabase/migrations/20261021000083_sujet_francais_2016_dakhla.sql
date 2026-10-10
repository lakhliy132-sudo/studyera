-- Sujet de français, examen régional 2016 (session normale), académie
-- Dakhla-Oued Ed-Dahab, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2016 جهة الداخلة وادي الذهب »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Dakhla-Oued Ed-Dahab (« جهة الداخلة - وادي الذهب »),
-- « الإمتحان الجهوي الموحد لنيل شهادة البكالوريا - دورة يونيو 2016 »,
-- « المترشحون الرسميون », matière « اللغة الأجنبية الأولى », « الشعب
-- العلمية والتقنية والأدبية », durée « ساعتان ». Aucun coefficient imprimé.
-- Question 5 (vrai ou faux avec justification) : saisie en deux questions
-- libres 5a et 5b pour garder la justification donnée par le corrigé.
-- La question 7 n'a qu'un « A) » sur la feuille (pas de B).
-- Grille de la production écrite : même tableau sur le sujet et le corrigé
-- (5 pts pour le discours, 5 pts pour la langue).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2016,
  $sujet$normale$sujet$,
  $sujet$Dakhla-Oued Ed-Dahab$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Séries scientifiques, techniques et littéraires$sujet$,
  120,
  $sujet$## Texte

**LE CHOEUR**, *s'approche.* Est-ce qu'on ne peut pas imaginer quelque chose, dire qu'elle est folle, l'enfermer ?

**CRÉON** : Ils diront que ce n'est pas vrai. Que je la sauve parce qu'elle allait être la femme de mon fils. Je ne peux pas.

**LE CHŒUR** : Est-ce qu'on ne peut pas gagner du temps, la faire fuir demain ?

**CRÉON** : La foule sait déjà, elle hurle autour du palais. Je ne peux pas.

**HÉMON** : Père, la foule n'est rien. Tu es le maître.

**CRÉON** : Je suis le maître avant la loi. Plus après.

**HÉMON** : Père, je suis ton fils, tu ne peux pas me la laisser prendre.

**CRÉON** : Si, Hémon. Si, mon petit. Du courage. Antigone ne peut plus vivre. Antigone nous a déjà quittés tous.

**HÉMON** : Crois-tu que je pourrai vivre, moi, sans elle ? Crois-tu que je l'accepterai, votre vie ? Et tous les jours, depuis le matin jusqu'au soir, sans elle. Et votre agitation, votre bavardage, votre vide, sans elle.

**CRÉON** : Il faudra bien que tu acceptes, Hémon. Chacun de nous a un jour, plus ou moins triste, plus ou moins lointain, où il doit enfin accepter d'être un homme. Pour toi, c'est aujourd'hui... Et te voilà devant moi avec ces larmes au bord de tes yeux et ton cœur qui te fait mal - mon petit garçon, pour la dernière fois... Quand tu te seras détourné, quand tu auras franchi ce seuil tout à l'heure, ce sera fini.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1pt.(¼ x4))**

| Titre de l'œuvre | Auteur | siècle | Une autre œuvre du même auteur |
|---|---|---|---|
| | | | |

**2a.** En vous fondant sur votre lecture de l'œuvre, répondez aux questions suivantes : Pour quelle raison Créon a-t-il condamné Antigone ? **(1pt. (½ pt.x2))**

**2b.** Ce texte se situe plutôt : (Recopiez la bonne réponse)

a- Au début de l'œuvre  
b- Au milieu de l'œuvre  
c- À la fin de l'œuvre

**3.** Citez deux solutions proposées par le Chœur pour sauver Antigone ? **(1pt.)**

**4a.** Est-ce que Créon accepte les solutions du Chœur ? **(½ pt.)**

**4b.** Justifiez votre réponse par **deux indices** du texte. **(½ pt. (¼ pt.x2))**

**5a.** Répondez par « **Vrai** » ou « **Faux** » et justifiez vos réponses. a. Il y a encore une chance pour sauver Antigone. **(1pt. (¼ x4))**

**5b.** b. Les gens de Thèbes ignorent ce qui s'est passé.

**6.** Relevez du texte une proposition subordonnée relative. **(1pt.)**

**7.** A) « *Elle hurle autour du palais* ». La figure de style employée dans cette phrase est : (Recopiez la bonne réponse) **(1pt.)**

a- Une comparaison  
b- Un oxymore  
c- Une métaphore

**8a.** Hémon dit « *Crois-tu que je pourrai vivre, moi, sans elle ?* ». A) Comment appelle-t-on ce type de question qui n'attend pas de réponse ? **(½ pt.)**

**8b.** B) Cette question traduit plutôt : (Recopiez la bonne réponse) **(½ pt.)**

a- Un amour fort  
b- Une joie extrême  
c- Une grande satisfaction

**9.** Pensez-vous que le contrôle excessif des parents limite la liberté des enfants ? Justifiez votre réponse par un argument. **(1pt.(½ pt.x2))**

**10.** Si vous étiez à la place de Créon, accepteriez-vous de sauver Antigone ? Justifiez votre réponse par un argument. **(1pt.(½ pt.x2))**

## II. Production écrite (10 points)

**Sujet :** Certains professeurs affirment : « *Aujourd'hui, nos élèves n'accordent (ne donnent) plus une grande importance à la lecture* ».

Pourquoi, à votre avis, les élèves lisent de moins en moins ? Quelles solutions proposez-vous pour les encourager à lire ?

***Lors de votre rédaction, vous tenez compte des critères suivants :***

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5pts | Vocabulaire (usage de termes précis et variés) | 5pts |
| Cohérence de l'argumentation | | Syntaxe (construction de phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(1pt.(¼ x4))**

| Titre de l'œuvre | Auteur | siècle | Une autre œuvre du même auteur |
|---|---|---|---|
| Antigone | Jean Anouilh | XXème | L'Alouette ; La Grotte ;… |

**2a.** Créon condamne Antigone parce qu'elle a enfreint la loi en entreprenant l'enterrement de son frère Polynice. (½ pt.) **(1pt. (½ pt.x2))**

**2b.** Ce texte se situe plutôt : **à la fin de l'œuvre.** (½ pt.)

**3.** Deux solutions proposées par le Chœur pour sauver Antigone sont : Exemples : La faire fuir demain / - l'enfermer / … (1pt. (½ x2)) **(1pt.)**

**4a.** Non. **(½ pt.)**

**4b.** Justifications : « *La foule sait déjà* » ; « *Je ne peux pas* »… **(½ pt. (¼ pt.x2))**

**5a.** **Faux**. Justification : « *Antigone ne peut plus vivre* » ;… (½ pt. (¼ x2)) **(1pt. (¼ x4))**

**5b.** **Faux**. Justification : « *La foule sait déjà* ». (½ pt. (¼ x2))

**6.** Une relative : [ *qui te fait mal* ] ; [ *où il doit enfin accepter…* ] (1pt. (½ x2)) **(1pt.)**

**7.** La figure de style employée dans cette expression est : c. **une métaphore.** **(1pt.)**

**8a.** Ce type de question est appelé : **question rhétorique** ou **fausse question**, … **(½ pt.)**

**8b.** a- Un amour fort **(½ pt.)**

**9.** Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. **(1pt.(½ pt.x2))**

**10.** Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. **(1pt.(½ pt.x2))**

### II. Production écrite

*Lors de la correction, veuillez tenir compte des critères suivants :*

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5pts | Vocabulaire (usage de termes précis et variés) | 5pts |
| Cohérence de l'argumentation | | Syntaxe (construction de phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate | |
| | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**LE CHOEUR**, *s'approche.* Est-ce qu'on ne peut pas imaginer quelque chose, dire qu'elle est folle, l'enfermer ?\n\n**CRÉON** : Ils diront que ce n'est pas vrai. Que je la sauve parce qu'elle allait être la femme de mon fils. Je ne peux pas.\n\n**LE CHŒUR** : Est-ce qu'on ne peut pas gagner du temps, la faire fuir demain ?\n\n**CRÉON** : La foule sait déjà, elle hurle autour du palais. Je ne peux pas.\n\n**HÉMON** : Père, la foule n'est rien. Tu es le maître.\n\n**CRÉON** : Je suis le maître avant la loi. Plus après.\n\n**HÉMON** : Père, je suis ton fils, tu ne peux pas me la laisser prendre.\n\n**CRÉON** : Si, Hémon. Si, mon petit. Du courage. Antigone ne peut plus vivre. Antigone nous a déjà quittés tous.\n\n**HÉMON** : Crois-tu que je pourrai vivre, moi, sans elle ? Crois-tu que je l'accepterai, votre vie ? Et tous les jours, depuis le matin jusqu'au soir, sans elle. Et votre agitation, votre bavardage, votre vide, sans elle.\n\n**CRÉON** : Il faudra bien que tu acceptes, Hémon. Chacun de nous a un jour, plus ou moins triste, plus ou moins lointain, où il doit enfin accepter d'être un homme. Pour toi, c'est aujourd'hui... Et te voilà devant moi avec ces larmes au bord de tes yeux et ton cœur qui te fait mal - mon petit garçon, pour la dernière fois... Quand tu te seras détourné, quand tu auras franchi ce seuil tout à l'heure, ce sera fini.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "Antigone"}, {"libelle": "Auteur", "reponse": "Jean Anouilh"}, {"libelle": "siècle", "reponse": "XXème"}, {"libelle": "Une autre œuvre du même auteur", "reponse": "L'Alouette ; La Grotte ;…"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "En vous fondant sur votre lecture de l'œuvre, répondez aux questions suivantes : Pour quelle raison Créon a-t-il condamné Antigone ?", "correction": "Créon condamne Antigone parce qu'elle a enfreint la loi en entreprenant l'enterrement de son frère Polynice. (½ pt.)"}, {"type": "choix", "numero": "2b", "points": 0.5, "enonce": "Ce texte se situe plutôt : (Recopiez la bonne réponse)", "options": ["Au début de l'œuvre", "Au milieu de l'œuvre", "À la fin de l'œuvre"], "bonne": 2}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Citez deux solutions proposées par le Chœur pour sauver Antigone ?", "correction": "Deux solutions proposées par le Chœur pour sauver Antigone sont : Exemples : La faire fuir demain / - l'enfermer / … (1pt. (½ x2))"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Est-ce que Créon accepte les solutions du Chœur ?", "correction": "Non."}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Justifiez votre réponse par **deux indices** du texte.", "correction": "Justifications : « *La foule sait déjà* » ; « *Je ne peux pas* »…"}, {"type": "libre", "numero": "5a", "points": 0.5, "enonce": "Répondez par « **Vrai** » ou « **Faux** » et justifiez vos réponses. a. Il y a encore une chance pour sauver Antigone.", "correction": "**Faux**. Justification : « *Antigone ne peut plus vivre* » ;… (½ pt. (¼ x2))"}, {"type": "libre", "numero": "5b", "points": 0.5, "enonce": "b. Les gens de Thèbes ignorent ce qui s'est passé.", "correction": "**Faux**. Justification : « *La foule sait déjà* ». (½ pt. (¼ x2))"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez du texte une proposition subordonnée relative.", "correction": "Une relative : [ *qui te fait mal* ] ; [ *où il doit enfin accepter…* ] (1pt. (½ x2))"}, {"type": "choix", "numero": "7", "points": 1, "enonce": "A) « *Elle hurle autour du palais* ». La figure de style employée dans cette phrase est : (Recopiez la bonne réponse)", "options": ["Une comparaison", "Un oxymore", "Une métaphore"], "bonne": 2}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "Hémon dit « *Crois-tu que je pourrai vivre, moi, sans elle ?* ». A) Comment appelle-t-on ce type de question qui n'attend pas de réponse ?", "correction": "Ce type de question est appelé : **question rhétorique** ou **fausse question**, …"}, {"type": "choix", "numero": "8b", "points": 0.5, "enonce": "B) Cette question traduit plutôt : (Recopiez la bonne réponse)", "options": ["Un amour fort", "Une joie extrême", "Une grande satisfaction"], "bonne": 0}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Pensez-vous que le contrôle excessif des parents limite la liberté des enfants ? Justifiez votre réponse par un argument.", "correction": "Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Si vous étiez à la place de Créon, accepteriez-vous de sauver Antigone ? Justifiez votre réponse par un argument.", "correction": "Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Certains professeurs affirment : « *Aujourd'hui, nos élèves n'accordent (ne donnent) plus une grande importance à la lecture* ».\n\nPourquoi, à votre avis, les élèves lisent de moins en moins ? Quelles solutions proposez-vous pour les encourager à lire ?\n\n***Lors de votre rédaction, vous tenez compte des critères suivants :***\n\n| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture | 5pts | Vocabulaire (usage de termes précis et variés) | 5pts |\n| Cohérence de l'argumentation | | Syntaxe (construction de phrases correctes) | |\n| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |\n| | | Orthographe d'usage et grammaticale (respect des règles) | |\n| | | Conjugaison (emploi des temps) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
