-- Sujet de français, examen régional 2013 (session normale), académie
-- Souss-Massa, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2013 جهة سوس ماسة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie « جهة سوس ماسة درعة » (Souss-Massa-Drâa,
-- avant le découpage régional de 2015, aujourd'hui Souss-Massa) ;
-- « الدورة العادية يونيو 2013 », durée « ساعتان ». Coefficient : 3 pour
-- sciences économiques et gestion, 4 pour les autres séries.
-- Grille de production écrite du corrigé : la note de la colonne « langue »
-- est coupée au bord de la page (« 5 »).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2013,
  $sujet$normale$sujet$,
  $sujet$Souss-Massa$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences économiques et gestion, sciences et technologies électriques, sciences et technologies mécaniques, arts appliqués$sujet$,
  120,
  $sujet$## Texte

Ma mère avait cuisiné une pile de galettes en pâte feuilletée, de forme carrée. Elle les enduisit de beurre frais et de miel. C'était un délice. Je pris deux grands verres de thé à la menthe.

Pendant le repas, mes parents établirent un programme pour la journée. Le matin, mon père se proposait de m'emmener à Moulay Idriss, le patron de la ville. Après la prière en commun, nous reviendrions déjeuner. L'après-midi, j'accompagnerais ma mère chez notre amie Lalla Aïcha. J'aurais le droit d'emporter avec moi l'une de mes trompettes ; le tambour en poterie fragile risquait de se casser en route.

Ma bonne étoile en décida autrement. Après avoir baguenaudé⁽¹⁾ avec mon père dans les rues encombrées de passants, après avoir fait l'acquisition d'un plat de céramique bleue sur la place des notaires où les potiers exposaient ce jour leur production, nous pénétrâmes dans le sanctuaire de Moulay Idriss. Là, nous accomplîmes les rites de la prière de *Louli* et nous partîmes déjeuner.

Lalla Aïcha vint nous surprendre à la fin du repas. Ma mère manifesta une grande joie à la revoir. Les deux femmes se prodiguèrent mutuellement des baisers pointus, des formules de politesse et des mots aimables. Mon père les laissa à leurs effusions⁽²⁾, disparut.

J'avais une envie folle de jouer du tambour, de lancer quelques beuglements avec ma trompette mais je savais que ma mère ne tolérerait pas de tels débordements. Je m'abstins. J'attendais le soir pour me livrer corps et âme à la musique. Je restais dans un coin à écouter les propos de notre visiteuse. Elle laissa entendre dès son arrivée, qu'elle avait beaucoup à raconter. Ma mère disposait de tout son temps et frétillait de curiosité. Elle n'oublia pas, malgré tout, de remplir ses devoirs d'hôtesse. Elle souffla sur la braise, ajouta une bolée d'eau dans la bouilloire, rinça les verres. Elle ouvrit une boîte de fer blanc et en sortit une demi-douzaine de gâteaux de semoule.

– Lalla Aïcha, installe-toi sur le grand divan ; le thé sera bientôt prêt. Non ! Non ! J'ai dit sur le grand divan, à la place d'honneur ! Je t'en supplie, installe-toi confortablement, insista ma mère.

Lalla Aïcha s'affala au milieu des coussins, soupira de satisfaction et commença son récit.

*1- baguenauder : se promener, se balader*  
*2- effusion : manifestation sincère d'un sentiment*

## I. Étude de texte (10 points)

**1.** De quelle œuvre a-t-on extrait ce texte ? Quel en est l'auteur ? **(1/4ptx2)**

**2a.** Recopiez et complétez à partir du texte : (Personnages / Prénoms correspondants) **(1/4ptx4)**

| Le narrateur | Son père | Sa mère | La visiteuse |
|---|---|---|---|
| | | | |

**2b.** D'après votre lecture de l'œuvre, à quelle occasion les parents ont-ils établi un programme pour la journée ? **(1/2pt)**

**3.** Est-ce que ce programme a été entièrement respecté ? Justifiez votre réponse. **(1pt)**

**4a.** Relevez dans le texte : un indice qui montre que la mère est autoritaire ; **(1/2pt)**

**4b.** un indice qui montre que l'enfant est obéissant. **(1/2pt)**

**5.** « *Ma* ***bonne étoile*** *en décida autrement.* » [souligné sur la feuille, en gras ici]. Dans cette phrase, l'expression soulignée signifie : Recopiez la bonne réponse. **(1pt)**

a- étoile filante ;  
b- vedette et star ;  
c- chance et fortune.

**6.** – *Lalla Aïcha, installe-toi sur le grand divan ; le thé sera bientôt prêt. Non ! Non ! J'ai dit sur le grand divan, à la place d'honneur !* Cet énoncé est-il un récit ou un discours ? Justifiez votre réponse. **(1/2ptx2)**

a- un récit  
b- un discours

**7.** « *J'avais une envie folle de jouer du tambour.* » La figure de style employée dans cette phrase est-elle : **(1pt)**

a- L'hyperbole ?  
b- La métaphore ?  
c- La comparaison ?

**8.** Relevez dans le texte quatre mots ou expressions appartenant à la culture marocaine. **(1pt)**

**9.** Après l'arrivée de Lalla Aïcha, le père disparut en laissant les deux femmes tête à tête. Que pensez-vous du comportement du père ? Justifiez votre réponse. **(1pt)**

**10.** Thé, gâteaux et formules de politesse pour accueillir l'invité, comme le veut la tradition. Cette manière de recevoir existe-t-il encore dans notre société ? Justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

*« Vivre loin de sa famille est positif pour un adolescent*. »

Partagez-vous ce point de vue ?

Développez votre réflexion en vous appuyant sur des arguments précis.

| ***Critères d'évaluation du discours*** | | ***Critères d'évaluation de la langue*** | |
|---|---|---|---|
| | 5pts | Vocabulaire (usage de termes précis et variés) | 5pts |
| Conformité de la production à la consigne d'écriture | | Syntaxe (construction de phrases correctes) | |
| Cohérence de l'argumentation | | Ponctuation (usage d'une ponctuation adéquate | |
| Structure du texte (organisation et progression du texte) | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse (ou formulation) non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** L'œuvre : *La boîte à merveilles* (1/4pt) - L'auteur : AHMED SEFRIOUI (1/4pt) **(1/4ptx2)**

**2a.** **(1/4ptx4)**

| Le narrateur | Son père | Sa mère | La visiteuse |
|---|---|---|---|
| Sidi Mohammed | Moulay(ou Maâlem) Abdeslem | Lalla Zoubida | Lalla Aïcha |

**2b.** A l'occasion de la fête de l'Achoura. **(1/2pt)**

**3.** Non. Justification. Exemple : car la famille a reçu la visite inattendue de Lalla Aïcha alors que c'était la mère qui devait lui rendre visite. **(1pt)**

**4a.** Exemple: « *Ma mère ne tolérerait pas de tels débordements.* » **(1/2pt)**

**4b.** Exemple : « *Je m'abstins.* » **(1/2pt)**

**5.** c- chance et fortune. **(1pt)**

**6.** discours. (1/2pt) Justification. Exemples : Indice typographique, le tiret (–), présent de l'indicatif, futur simple, passé composé, présence de l'émetteur (je). (1/2pt) **(1/2ptx2)**

**7.** a- L'hyperbole. **(1pt)**

**8.** Mots ou expressions appartenant à la culture marocaine. Exemples : thé à la menthe ; Moulay Idriss ; sanctuaire de Moulay Idriss ; Lalla Aïcha ; *Louli* ; les rites de la prière de *Louli*. (1/4ptx4) **(1pt)**

**9.** Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. **(1pt)**

**10.** Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. **(1pt)**

### II. Production écrite

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| | 5pts | Vocabulaire (usage de termes précis et variés) | 5 |
| Conformité de la production à la consigne d'écriture | | Syntaxe (construction de phrases correctes) | |
| Cohérence de l'argumentation | | Ponctuation (usage d'une ponctuation adéquate | |
| Structure du texte (organisation et progression du texte) | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Ma mère avait cuisiné une pile de galettes en pâte feuilletée, de forme carrée. Elle les enduisit de beurre frais et de miel. C'était un délice. Je pris deux grands verres de thé à la menthe.\n\nPendant le repas, mes parents établirent un programme pour la journée. Le matin, mon père se proposait de m'emmener à Moulay Idriss, le patron de la ville. Après la prière en commun, nous reviendrions déjeuner. L'après-midi, j'accompagnerais ma mère chez notre amie Lalla Aïcha. J'aurais le droit d'emporter avec moi l'une de mes trompettes ; le tambour en poterie fragile risquait de se casser en route.\n\nMa bonne étoile en décida autrement. Après avoir baguenaudé⁽¹⁾ avec mon père dans les rues encombrées de passants, après avoir fait l'acquisition d'un plat de céramique bleue sur la place des notaires où les potiers exposaient ce jour leur production, nous pénétrâmes dans le sanctuaire de Moulay Idriss. Là, nous accomplîmes les rites de la prière de *Louli* et nous partîmes déjeuner.\n\nLalla Aïcha vint nous surprendre à la fin du repas. Ma mère manifesta une grande joie à la revoir. Les deux femmes se prodiguèrent mutuellement des baisers pointus, des formules de politesse et des mots aimables. Mon père les laissa à leurs effusions⁽²⁾, disparut.\n\nJ'avais une envie folle de jouer du tambour, de lancer quelques beuglements avec ma trompette mais je savais que ma mère ne tolérerait pas de tels débordements. Je m'abstins. J'attendais le soir pour me livrer corps et âme à la musique. Je restais dans un coin à écouter les propos de notre visiteuse. Elle laissa entendre dès son arrivée, qu'elle avait beaucoup à raconter. Ma mère disposait de tout son temps et frétillait de curiosité. Elle n'oublia pas, malgré tout, de remplir ses devoirs d'hôtesse. Elle souffla sur la braise, ajouta une bolée d'eau dans la bouilloire, rinça les verres. Elle ouvrit une boîte de fer blanc et en sortit une demi-douzaine de gâteaux de semoule.\n\n– Lalla Aïcha, installe-toi sur le grand divan ; le thé sera bientôt prêt. Non ! Non ! J'ai dit sur le grand divan, à la place d'honneur ! Je t'en supplie, installe-toi confortablement, insista ma mère.\n\nLalla Aïcha s'affala au milieu des coussins, soupira de satisfaction et commença son récit.\n\n*1- baguenauder : se promener, se balader*  \n*2- effusion : manifestation sincère d'un sentiment*", "questions": [{"type": "libre", "numero": "1", "points": 0.5, "enonce": "De quelle œuvre a-t-on extrait ce texte ? Quel en est l'auteur ?", "correction": "L'œuvre : *La boîte à merveilles* (1/4pt) - L'auteur : AHMED SEFRIOUI (1/4pt)"}, {"type": "tableau", "numero": "2a", "points": 1, "enonce": "Recopiez et complétez à partir du texte : (Personnages / Prénoms correspondants)", "champs": [{"libelle": "Le narrateur", "reponse": "Sidi Mohammed"}, {"libelle": "Son père", "reponse": "Moulay(ou Maâlem) Abdeslem"}, {"libelle": "Sa mère", "reponse": "Lalla Zoubida"}, {"libelle": "La visiteuse", "reponse": "Lalla Aïcha"}]}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "D'après votre lecture de l'œuvre, à quelle occasion les parents ont-ils établi un programme pour la journée ?", "correction": "A l'occasion de la fête de l'Achoura."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Est-ce que ce programme a été entièrement respecté ? Justifiez votre réponse.", "correction": "Non. Justification. Exemple : car la famille a reçu la visite inattendue de Lalla Aïcha alors que c'était la mère qui devait lui rendre visite."}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Relevez dans le texte : un indice qui montre que la mère est autoritaire ;", "correction": "Exemple: « *Ma mère ne tolérerait pas de tels débordements.* »"}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "un indice qui montre que l'enfant est obéissant.", "correction": "Exemple : « *Je m'abstins.* »"}, {"type": "choix", "numero": "5", "points": 1, "enonce": "« *Ma* ***bonne étoile*** *en décida autrement.* » [souligné sur la feuille, en gras ici]. Dans cette phrase, l'expression soulignée signifie : Recopiez la bonne réponse.", "options": ["étoile filante ;", "vedette et star ;", "chance et fortune."], "bonne": 2}, {"type": "choix", "numero": "6", "points": 1, "enonce": "– *Lalla Aïcha, installe-toi sur le grand divan ; le thé sera bientôt prêt. Non ! Non ! J'ai dit sur le grand divan, à la place d'honneur !* Cet énoncé est-il un récit ou un discours ? Justifiez votre réponse.", "options": ["un récit", "un discours"], "bonne": 1}, {"type": "choix", "numero": "7", "points": 1, "enonce": "« *J'avais une envie folle de jouer du tambour.* » La figure de style employée dans cette phrase est-elle :", "options": ["L'hyperbole ?", "La métaphore ?", "La comparaison ?"], "bonne": 0}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Relevez dans le texte quatre mots ou expressions appartenant à la culture marocaine.", "correction": "Mots ou expressions appartenant à la culture marocaine. Exemples : thé à la menthe ; Moulay Idriss ; sanctuaire de Moulay Idriss ; Lalla Aïcha ; *Louli* ; les rites de la prière de *Louli*. (1/4ptx4)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Après l'arrivée de Lalla Aïcha, le père disparut en laissant les deux femmes tête à tête. Que pensez-vous du comportement du père ? Justifiez votre réponse.", "correction": "Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Thé, gâteaux et formules de politesse pour accueillir l'invité, comme le veut la tradition. Cette manière de recevoir existe-t-il encore dans notre société ? Justifiez votre réponse.", "correction": "Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "*« Vivre loin de sa famille est positif pour un adolescent*. »\n\nPartagez-vous ce point de vue ?\n\nDéveloppez votre réflexion en vous appuyant sur des arguments précis.\n\n| ***Critères d'évaluation du discours*** | | ***Critères d'évaluation de la langue*** | |\n|---|---|---|---|\n| | 5pts | Vocabulaire (usage de termes précis et variés) | 5pts |\n| Conformité de la production à la consigne d'écriture | | Syntaxe (construction de phrases correctes) | |\n| Cohérence de l'argumentation | | Ponctuation (usage d'une ponctuation adéquate | |\n| Structure du texte (organisation et progression du texte) | | Orthographe d'usage et grammaticale (respect des règles) | |\n| | | Conjugaison (emploi des temps) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
