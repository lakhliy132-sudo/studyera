-- Sujet de français, examen régional 2023 (session normale), académie
-- Guelmim-Oued Noun, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2023 جهة كلميم واد نون »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين جهة كلميم واد نون »,
-- « الدورة: العادية 2023 », « الأولى بكالوريا– مترشحون متمدرسون », « المدة
-- الزمنية:2 ساعات ». Coefficient « 3 أو 4 » : 4 pour les sciences
-- expérimentales, sciences mathématiques, technologies et arts appliqués,
-- 3 pour les sciences économiques et gestion ; laissé vide.
-- Le texte imprimé écrit d'abord « CRÉON » puis « CREON » ; sa dernière
-- phrase est tronquée sur la feuille (« le bon frère, le fils d'Œdipe, le
-- prince loyal avait décidé, lui aussi, de vendre Thèbes au plus offrant. ») :
-- recopiée telle quelle.
-- Question 2a : le corrigé retient « Créon fait savoir à Antigone que ses
-- deux frères la méprisaient » ; reporté tel quel.
-- Question 5 (vrai/faux avec justification, 0,25x4) découpée en 5a et 5b.
-- Question 7 : pas de barème écrit dans le corrigé (1pt sur la feuille).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2023,
  $sujet$normale$sujet$,
  $sujet$Guelmim-Oued Noun$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Sciences expérimentales, sciences mathématiques, technologies, arts appliqués ; sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

**CRÉON :** Pauvre Antigone, avec ta fleur de cotillon ! Sais-tu qui était ton frère ?

**ANTIGONE :** Je savais que vous me diriez du mal de lui en tout cas !

**CREON :** Un petit fêtard imbécile, un petit carnassier dur et sans âme, une petite brute tout juste bonne à aller plus vite que les autres avec ses voitures, à dépenser plus d'argent dans les bars. Une fois, j'étais là, ton père venait de lui refuser une grosse somme qu'il avait perdue au jeu ; il est devenu tout pâle et il a levé le poing en criant un mot ignoble !

**ANTIGONE :** Ce n'est pas vrai !

**CREON :** Son poing de brute à toute volée dans le visage de ton père ! C'était pitoyable. Ton père était assis à sa table, la tête dans ses mains. Il saignait du nez. Il pleurait. Et, dans un coin du bureau, Polynice, ricanant, qui allumait une cigarette.

**ANTIGONE**, *supplie presque maintenant*. Ce n'est pas vrai !

**CREON :** Rappelle-toi, tu avais douze ans. Vous ne l'avez pas revu pendant longtemps. C'est vrai, cela ?

**ANTIGONE**, *sourdement*. Oui, c'est vrai.

**CREON :** C'était après cette dispute. Ton père n'a pas voulu le faire juger. Il s'est engagé dans l'armée argienne. Et, dès qu'il a été chez les Argiens, la chasse à l'homme a commencé contre ton père, contre ce vieil homme qui ne se décidait pas à mourir, à lâcher son royaume. Les attentats se succédaient et les tueurs que nous prenions finissaient toujours par avouer qu'ils avaient reçu de l'argent de lui. Pas seulement de lui, d'ailleurs. Car c'est cela que je veux que tu saches, les coulisses de ce drame où tu brûles de jouer un rôle, la cuisine. J'ai fait faire hier des funérailles grandioses à Étéocle. Étéocle est un héros et un saint pour Thèbes maintenant. Tout le peuple était là. Les enfants des écoles ont donné tous les sous de leur tirelire pour la couronne ; des vieillards, faussement émus, ont magnifié, avec des trémolos dans la voix, le bon frère, le fils d'Œdipe, le prince loyal avait décidé, lui aussi, de vendre Thèbes au plus offrant.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(0,25pt x4)**

| Œuvre | Auteur | Genre littéraire | Siècle |
|---|---|---|---|
| | | | |

**2a.** Situez ce texte par rapport à ce qui précède. Choisissez la bonne réponse parmi les deux propositions suivantes : **(0,5 pt)**

a- Créon fait savoir à Antigone que ses deux frères la méprisaient.  
b- Créon dévoile à Antigone la vraie histoire de ses deux frères.

**2b.** Cette « fleur de cotillon » dont parle Créon a été offerte à Antigone par : **(0,5 pt)**

a- Hémon  
b- Polynice  
c- La nourrice

**3a.** « *Sais-tu qui était* ***ton frère*** ? » a- De qui des deux frères d'Antigone s'agit-il dans la phrase ci-dessus ? **(0,5 pt)**

**3b.** b- Est-il présenté dans le texte de manière valorisante ou dévalorisante ? Justifiez votre réponse par **un indice tiré du texte**. **(0,25x2 pt)**

**4.** Pourquoi Polynice a-t-il insulté et frappé son père ? **(1pt)**

**5a.** Répondez par *vrai* ou *faux* et justifiez vos réponses à partir du texte : a- Œdipe a réagi violemment contre le coup de son fils. **(0,25x4 pt)**

**5b.** b- Après leur dispute, Œdipe a emprisonné son fils Polynice.

**6.** Relisez la dernière réplique de Créon et dites comment celui-ci a su que Polynice voulait assassiner son père. **(1pt)**

**7.** Les **deux didascalies** contenues dans le texte montrent que : **Recopiez la bonne réponse** **(1pt)**

a- Antigone devient **faible** après avoir découvert la réalité amère de son frère.  
b- Antigone devient **forte** après avoir découvert la réalité amère de son frère.

**8.** « *Un petit fêtard imbécile* ». La figure de style exprimée dans cet énoncé est plutôt : **(1pt)**

a- Personnification  
b- Hyperbole  
c- Périphrase

**9.** Le mauvais comportement de Polynice vis-à-vis de son père est-il acceptable ? Justifiez votre réponse par **un argument**. **(1pt)**

**10.** Certaines personnes sont prêtes à mentir pour arriver à leurs objectifs ? Qu'en pensez-vous ? Justifiez votre réponse par **un argument**. **(1pt)**

## II. Production écrite (10 points)

**Sujet** : Certains adolescents veulent quitter la maison familiale en pensant que c'est la bonne solution pour échapper aux problèmes.

Rédigez un texte argumentatif où vous exprimez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| **Conformité** de la production à la consigne d'écriture | 5 points | **Vocabulaire** (usage des termes précis et variés) | 5 points |
| **Cohérence** de l'argumentation | | **Syntaxe** (construction des phrases correctes) | |
| **Structure** du texte (organisation et progression du texte) | | **Ponctuation** (usage d'une ponctuation adéquate) | |
| | | Respect des règles **orthographiques** et **grammaticales** | |
| | | **Conjugaison** (emploi des temps verbaux) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute formulation - ou réponse - non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** **(0,25pt x4)**

| Œuvre | Auteur | Genre littéraire | Siècle |
|---|---|---|---|
| *Antigone* | Jean Anouilh | Tragédie moderne | 20ème |

**2a.** a- Créon fait savoir à Antigone que ses deux frères la méprisaient. **(0,5 pt)**

**2b.** Polynice. **(0,5 pt)**

**3a.** Polynice **(0,5 pt)**

**3b.** dévalorisante ? « *Un petit fêtard imbécile* **OU** *un petit carnassier dur et sans âme* **OU** *une petite brute* » (0,25pt x 2) **(0,25x2 pt)**

**4.** Car il lui a refusé une grosse somme d'argent qu'il avait perdue au jeu **(1pt)**

**5a.** Faux, « *Ton père était assis à sa table, la tête dans ses mains. Il saignait du nez. Il pleurait* ». **(0,25x4 pt)**

**5b.** Faux, « *Ton père n'a pas voulu le faire juger* ».

**6.** « *les tueurs que nous prenions finissaient toujours par avouer qu'ils avaient reçu de l'argent de lui* » **(1pt)**

**7.** Antigone devient faible après avoir découvert la réalité amère de son frère. **(1pt)**

**8.** Périphrase. **(1pt)**

**9.** Accepter toute formulation où le candidat justifie son point de vue. **(1pt)**

**10.** Accepter toute formulation où le candidat justifie son point de vue. **(1pt)**

### II. Production écrite

**LORS DE LA CORRECTION, TENIR COMPTE DES CRITERES SUIVANTS :**

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| **Conformité** de la production à la consigne d'écriture | 5 points | **Vocabulaire** (usage des termes précis et variés) | 5 points |
| **Cohérence** de l'argumentation | | **Syntaxe** (construction des phrases correctes) | |
| **Structure** du texte (organisation et progression du texte) | | **Ponctuation** (usage d'une ponctuation adéquate) | |
| | | Respect des règles **orthographiques** et **grammaticales** | |
| | | **Conjugaison** (emploi des temps verbaux) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**CRÉON :** Pauvre Antigone, avec ta fleur de cotillon ! Sais-tu qui était ton frère ?\n\n**ANTIGONE :** Je savais que vous me diriez du mal de lui en tout cas !\n\n**CREON :** Un petit fêtard imbécile, un petit carnassier dur et sans âme, une petite brute tout juste bonne à aller plus vite que les autres avec ses voitures, à dépenser plus d'argent dans les bars. Une fois, j'étais là, ton père venait de lui refuser une grosse somme qu'il avait perdue au jeu ; il est devenu tout pâle et il a levé le poing en criant un mot ignoble !\n\n**ANTIGONE :** Ce n'est pas vrai !\n\n**CREON :** Son poing de brute à toute volée dans le visage de ton père ! C'était pitoyable. Ton père était assis à sa table, la tête dans ses mains. Il saignait du nez. Il pleurait. Et, dans un coin du bureau, Polynice, ricanant, qui allumait une cigarette.\n\n**ANTIGONE**, *supplie presque maintenant*. Ce n'est pas vrai !\n\n**CREON :** Rappelle-toi, tu avais douze ans. Vous ne l'avez pas revu pendant longtemps. C'est vrai, cela ?\n\n**ANTIGONE**, *sourdement*. Oui, c'est vrai.\n\n**CREON :** C'était après cette dispute. Ton père n'a pas voulu le faire juger. Il s'est engagé dans l'armée argienne. Et, dès qu'il a été chez les Argiens, la chasse à l'homme a commencé contre ton père, contre ce vieil homme qui ne se décidait pas à mourir, à lâcher son royaume. Les attentats se succédaient et les tueurs que nous prenions finissaient toujours par avouer qu'ils avaient reçu de l'argent de lui. Pas seulement de lui, d'ailleurs. Car c'est cela que je veux que tu saches, les coulisses de ce drame où tu brûles de jouer un rôle, la cuisine. J'ai fait faire hier des funérailles grandioses à Étéocle. Étéocle est un héros et un saint pour Thèbes maintenant. Tout le peuple était là. Les enfants des écoles ont donné tous les sous de leur tirelire pour la couronne ; des vieillards, faussement émus, ont magnifié, avec des trémolos dans la voix, le bon frère, le fils d'Œdipe, le prince loyal avait décidé, lui aussi, de vendre Thèbes au plus offrant.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Œuvre", "reponse": "*Antigone*"}, {"libelle": "Auteur", "reponse": "Jean Anouilh"}, {"libelle": "Genre littéraire", "reponse": "Tragédie moderne"}, {"libelle": "Siècle", "reponse": "20ème"}]}, {"type": "choix", "numero": "2a", "points": 0.5, "enonce": "Situez ce texte par rapport à ce qui précède. Choisissez la bonne réponse parmi les deux propositions suivantes :", "options": ["Créon fait savoir à Antigone que ses deux frères la méprisaient.", "Créon dévoile à Antigone la vraie histoire de ses deux frères."], "bonne": 0}, {"type": "choix", "numero": "2b", "points": 0.5, "enonce": "Cette « fleur de cotillon » dont parle Créon a été offerte à Antigone par :", "options": ["Hémon", "Polynice", "La nourrice"], "bonne": 1}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "« *Sais-tu qui était* ***ton frère*** ? » a- De qui des deux frères d'Antigone s'agit-il dans la phrase ci-dessus ?", "correction": "Polynice"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "b- Est-il présenté dans le texte de manière valorisante ou dévalorisante ? Justifiez votre réponse par **un indice tiré du texte**.", "correction": "dévalorisante ? « *Un petit fêtard imbécile* **OU** *un petit carnassier dur et sans âme* **OU** *une petite brute* » (0,25pt x 2)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Pourquoi Polynice a-t-il insulté et frappé son père ?", "correction": "Car il lui a refusé une grosse somme d'argent qu'il avait perdue au jeu"}, {"type": "libre", "numero": "5a", "points": 0.5, "enonce": "Répondez par *vrai* ou *faux* et justifiez vos réponses à partir du texte : a- Œdipe a réagi violemment contre le coup de son fils.", "correction": "Faux, « *Ton père était assis à sa table, la tête dans ses mains. Il saignait du nez. Il pleurait* »."}, {"type": "libre", "numero": "5b", "points": 0.5, "enonce": "b- Après leur dispute, Œdipe a emprisonné son fils Polynice.", "correction": "Faux, « *Ton père n'a pas voulu le faire juger* »."}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relisez la dernière réplique de Créon et dites comment celui-ci a su que Polynice voulait assassiner son père.", "correction": "« *les tueurs que nous prenions finissaient toujours par avouer qu'ils avaient reçu de l'argent de lui* »"}, {"type": "choix", "numero": "7", "points": 1, "enonce": "Les **deux didascalies** contenues dans le texte montrent que : **Recopiez la bonne réponse**", "options": ["Antigone devient **faible** après avoir découvert la réalité amère de son frère.", "Antigone devient **forte** après avoir découvert la réalité amère de son frère."], "bonne": 0}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« *Un petit fêtard imbécile* ». La figure de style exprimée dans cet énoncé est plutôt :", "options": ["Personnification", "Hyperbole", "Périphrase"], "bonne": 2}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Le mauvais comportement de Polynice vis-à-vis de son père est-il acceptable ? Justifiez votre réponse par **un argument**.", "correction": "Accepter toute formulation où le candidat justifie son point de vue."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Certaines personnes sont prêtes à mentir pour arriver à leurs objectifs ? Qu'en pensez-vous ? Justifiez votre réponse par **un argument**.", "correction": "Accepter toute formulation où le candidat justifie son point de vue."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet** : Certains adolescents veulent quitter la maison familiale en pensant que c'est la bonne solution pour échapper aux problèmes.\n\nRédigez un texte argumentatif où vous exprimez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.\n\n| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |\n|---|---|---|---|\n| **Conformité** de la production à la consigne d'écriture | 5 points | **Vocabulaire** (usage des termes précis et variés) | 5 points |\n| **Cohérence** de l'argumentation | | **Syntaxe** (construction des phrases correctes) | |\n| **Structure** du texte (organisation et progression du texte) | | **Ponctuation** (usage d'une ponctuation adéquate) | |\n| | | Respect des règles **orthographiques** et **grammaticales** | |\n| | | **Conjugaison** (emploi des temps verbaux) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
