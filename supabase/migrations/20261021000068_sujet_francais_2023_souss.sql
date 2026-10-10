-- Sujet de français, examen régional 2023 (session normale), académie
-- Souss-Massa, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2023 جهة سوس ماسة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie régionale d'éducation et de formation « جهة سوس ماسة », session
-- normale (« الدورة: العادية / يونيو 2023 »), « الأولى بكالوريا (متمدرسون) »,
-- « الشعب العلمية والتقنية » ; durée « ساعتان ». Coefficient : 3 pour
-- sciences économiques et gestion, 4 pour les autres séries.
-- PDF scanné : texte établi depuis l'OCR et vérifié sur le scan.
-- Le corrigé ne donne pas de grille détaillée pour la production écrite :
-- seules ses consignes de notation (discours /05, langue /05) sont
-- recopiées.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2023,
  $sujet$normale$sujet$,
  $sujet$Souss-Massa$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Séries scientifiques et techniques : sciences expérimentales, sciences mathématiques, technologies, arts appliqués, sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

Une heure vient de sonner. Je ne sais laquelle : j'entends mal le marteau de l'horloge. Il me semble que j'ai un bruit d'orgue dans les oreilles ; ce sont mes dernières pensées qui bourdonnent.

À ce moment suprême où je me recueille dans mes souvenirs, j'y retrouve mon crime avec horreur ; mais je voudrais me repentir davantage encore. J'avais plus de remords avant ma condamnation ; depuis il me semble qu'il n'ait plus de place que pour les pensées de mort. Pourtant, je voudrais bien me repentir beaucoup.

Quand j'ai rêvé une minute à ce qu'il y a de passé dans ma vie, et j'en reviens au coup de hache qui doit la terminer tout à l'heure, je frissonne comme d'une chose nouvelle. Ma belle enfance ! Ma belle jeunesse ! Étoffe dorée dont l'extrémité est sanglante. Entre alors et à présent, il y a une rivière de sang, le sang de l'autre et le mien.

Si on lit un jour mon histoire, après tant d'année d'innocence et de bonheur, on ne voudra pas croire à cette année exécrable, qui s'ouvre par un crime et se termine par un supplice ; elle aura l'air dépareillée.

Et pourtant, misérables lois et misérables hommes, je n'étais pas un homme méchant !

Oh ! mourir dans quelques heures, et penser qu'il y a un an, à pareil jour, j'étais libre et pur, que je faisais mes promenades d'automne, que j'errais sous les arbres, et je marchais dans les feuilles.

***Remords :** sentiment douloureux, accompagné de honte, que cause la conscience d'avoir mal fait.*  
***Se repentir :** regretter la faute commise et exprimer le désir de ne plus recommencer, voire de réparer.*

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(01pt.(0,25x4))**

| Titre de l'œuvre | Auteur | Genre littéraire | Thèse défendue |
|---|---|---|---|
| | | | |

**2.** Classez les événements de l'œuvre dans leur **ordre chronologique**. a-Transfert à la Conciergerie. b-Crime et procès. c-Trajet vers la place de Grève puis installation à l'hôtel de ville. d-Séjour pendant six semaines à Bicêtre. **(01pt.)**

**3.** Montrez par une phrase du texte que l'exécution du condamné est très proche. **(01pt.)**

**4.** Le narrateur a été condamné pour avoir commis : Choisissez la bonne réponse en la justifiant à partir d'un indice tiré du texte. **(01pt.(0,5x2))**

a- Un vol ;  
b- Un viol ;  
c- Un meurtre.

**5.** Répondez par ***vrai*** ou ***faux*** : **(01pt.(0,25x4))**

| | Vrai | Faux |
|---|---|---|
| a- Il était une heure de l'après-midi quand le texte ci-dessus est écrit. | | |
| b- À aucun moment, le condamné n'a éprouvé du regret pour avoir commis son crime. | | |
| c- Ceux qui liront son histoire trouveront anormal qu'il soit devenu criminel. | | |
| d- Avant le crime, le condamné menait une vie très heureuse. | | |

**6.** L'argument majeur par lequel le narrateur essaie de convaincre qu'il ne mérite pas la peine de mort est qu'il était autrefois : **Recopiez la bonne réponse.** **(01pt.)**

a- *beau* ;  
b- *bon* ;  
c- *heureux* ;  
d- *libre.*

**7.** Le narrateur évoque son passé avec une tonalité (registre) : **Recopiez la bonne réponse.** **(01pt.)**

a- *tragique* ;  
b- *pathétique* ;  
c- *lyrique* ;  
d- *ironique.*

**8.** Quelle figure de style reconnaissez-vous dans la phrase suivante ? « *Étoffe dorée dont l'extrémité est sanglante* » **(01pt.)**

**9.** Quel sentiment vous inspire le personnage de l'œuvre : la pitié, le dégoût, l'indifférence... ? Justifiez votre opinion. **(01pt.(0,5x2))**

**10.** Est-ce que le remords ou le regret exprimé par un criminel efface le mal causé à la victime et à la société ? Justifiez votre opinion. **(01pt.(0,5x2))**

## II. Production écrite (10 points)

**Choisissez et développez un seul sujet.**

**Sujet1 : Beaucoup de personnes victimes d'agressions (ou de vol, viol, etc.) ne recourent pas à la police pour déposer leur plainte.**

- Que pensez-vous du comportement de ces victimes ?
- Rédigez un texte argumentatif dans lequel vous défendez votre point de vue à l'aide d'arguments pertinents illustrés par des exemples précis.

**Sujet2 : Si vous êtes victime d'une injustice de la part de l'un de vos proches, à quelle personne allez-vous vous confier pour qu'elle vous soutienne ?**

- Dites à qui vous allez vous vous confier et précisez pourquoi en deux ou trois arguments développés et illustrés d'exemples pertinents.

***Lors de la rédaction, vous tenez compte des critères suivants :***

| *Critères d'évaluation du discours* | | *Critères d'évaluation de la langue* | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |
| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Respect des règles orthographiques et grammaticales. | |
| | | Conjugaison (emploi des temps verbaux) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** **(01pt.(0,25x4))**

| Titre de l'œuvre | Auteur | Genre littéraire | Thèse défendue |
|---|---|---|---|
| *Le Dernier jour d'un condamné.* | Victor Hugo | Roman à thèse (roman) | L'abolition de la peine de mort |

**2.** **b**- Crime et procès. **d**- Séjour pendant six semaines à Bicêtre. **a**-Transfert à la Conciergerie. **c**-Trajet vers la place de Grève puis installation à l'hôtel de ville. 01pt.(0,25x4) **(01pt.)**

**3.** *Exemples d'indices : « Et j'en reviens au coup de hache qui doit la terminer tout à l'heure. » « -Oh ! Mourir dans quelques heures. »* **(01pt.)**

**4.** un meurtre. (0,5pt.) Justification : « *Entre alors et à présent il y a une rivière de sang, le sang de l'autre et le mien.* » (0,5pt.) **(01pt.(0,5x2))**

**5.** **(01pt.(0,25x4))**

| | |
|---|---|
| a- Il était une heure de l'après-midi quand le texte ci-dessus est écrit. | Faux |
| b- À aucun moment, le condamné n'a éprouvé du regret pour avoir commis son crime. | Faux |
| c- Ceux qui liront son histoire trouveront anormal qu'il soit devenu criminel. | Vrai |
| d- Avant le crime, le condamné menait une vie très heureuse. | Vrai |

**6.** Bon (b) **(01pt.)**

**7.** **Tonalité lyrique**. **(01pt.)**

**8.** Antithèse ou métaphore. **(01pt.)**

**9.** Accepter toute formulation adéquate où le candidat prend position **(0,5pt.)** en justifiant son point de vue. **(0,5pt.)** **(01pt.(0,5x2))**

**10.** Accepter toute formulation adéquate où le candidat prend position **(0,5pt.)** en justifiant son point de vue. **(0,5pt.)** **(01pt.(0,5x2))**

### II. Production écrite

*IMPORTANT : Lors de la correction, tenir impérativement compte des critères spécifiés en accordant une note partielle relative aux critères du discours additionnée à une autre note partielle relative aux critères de la langue. Ces notes partielles et leur somme doivent être dûment reportées sur la copie du candidat ou de la candidate.*

| Discours … /05 | Langue … /05 |
|---|---|
| Total : … /10 | |

*Le (la) professeur(e) correcteur (trice) est prié(e) de ne pas tenir rigueur du plan choisi par le (la) candidat (e)*$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Une heure vient de sonner. Je ne sais laquelle : j'entends mal le marteau de l'horloge. Il me semble que j'ai un bruit d'orgue dans les oreilles ; ce sont mes dernières pensées qui bourdonnent.\n\nÀ ce moment suprême où je me recueille dans mes souvenirs, j'y retrouve mon crime avec horreur ; mais je voudrais me repentir davantage encore. J'avais plus de remords avant ma condamnation ; depuis il me semble qu'il n'ait plus de place que pour les pensées de mort. Pourtant, je voudrais bien me repentir beaucoup.\n\nQuand j'ai rêvé une minute à ce qu'il y a de passé dans ma vie, et j'en reviens au coup de hache qui doit la terminer tout à l'heure, je frissonne comme d'une chose nouvelle. Ma belle enfance ! Ma belle jeunesse ! Étoffe dorée dont l'extrémité est sanglante. Entre alors et à présent, il y a une rivière de sang, le sang de l'autre et le mien.\n\nSi on lit un jour mon histoire, après tant d'année d'innocence et de bonheur, on ne voudra pas croire à cette année exécrable, qui s'ouvre par un crime et se termine par un supplice ; elle aura l'air dépareillée.\n\nEt pourtant, misérables lois et misérables hommes, je n'étais pas un homme méchant !\n\nOh ! mourir dans quelques heures, et penser qu'il y a un an, à pareil jour, j'étais libre et pur, que je faisais mes promenades d'automne, que j'errais sous les arbres, et je marchais dans les feuilles.\n\n***Remords :** sentiment douloureux, accompagné de honte, que cause la conscience d'avoir mal fait.*  \n***Se repentir :** regretter la faute commise et exprimer le désir de ne plus recommencer, voire de réparer.*", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "*Le Dernier jour d'un condamné.*"}, {"libelle": "Auteur", "reponse": "Victor Hugo"}, {"libelle": "Genre littéraire", "reponse": "Roman à thèse (roman)"}, {"libelle": "Thèse défendue", "reponse": "L'abolition de la peine de mort"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Classez les événements de l'œuvre dans leur **ordre chronologique**. a-Transfert à la Conciergerie. b-Crime et procès. c-Trajet vers la place de Grève puis installation à l'hôtel de ville. d-Séjour pendant six semaines à Bicêtre.", "correction": "**b**- Crime et procès. **d**- Séjour pendant six semaines à Bicêtre. **a**-Transfert à la Conciergerie. **c**-Trajet vers la place de Grève puis installation à l'hôtel de ville. 01pt.(0,25x4)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Montrez par une phrase du texte que l'exécution du condamné est très proche.", "correction": "*Exemples d'indices : « Et j'en reviens au coup de hache qui doit la terminer tout à l'heure. » « -Oh ! Mourir dans quelques heures. »*"}, {"type": "choix", "numero": "4", "points": 1, "enonce": "Le narrateur a été condamné pour avoir commis : Choisissez la bonne réponse en la justifiant à partir d'un indice tiré du texte.", "options": ["Un vol ;", "Un viol ;", "Un meurtre."], "bonne": 2}, {"type": "vrai-faux", "numero": "5", "points": 1, "enonce": "Répondez par ***vrai*** ou ***faux*** :", "affirmations": [{"texte": "a- Il était une heure de l'après-midi quand le texte ci-dessus est écrit.", "vrai": false}, {"texte": "b- À aucun moment, le condamné n'a éprouvé du regret pour avoir commis son crime.", "vrai": false}, {"texte": "c- Ceux qui liront son histoire trouveront anormal qu'il soit devenu criminel.", "vrai": true}, {"texte": "d- Avant le crime, le condamné menait une vie très heureuse.", "vrai": true}]}, {"type": "choix", "numero": "6", "points": 1, "enonce": "L'argument majeur par lequel le narrateur essaie de convaincre qu'il ne mérite pas la peine de mort est qu'il était autrefois : **Recopiez la bonne réponse.**", "options": ["*beau* ;", "*bon* ;", "*heureux* ;", "*libre.*"], "bonne": 1}, {"type": "choix", "numero": "7", "points": 1, "enonce": "Le narrateur évoque son passé avec une tonalité (registre) : **Recopiez la bonne réponse.**", "options": ["*tragique* ;", "*pathétique* ;", "*lyrique* ;", "*ironique.*"], "bonne": 2}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Quelle figure de style reconnaissez-vous dans la phrase suivante ? « *Étoffe dorée dont l'extrémité est sanglante* »", "correction": "Antithèse ou métaphore."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Quel sentiment vous inspire le personnage de l'œuvre : la pitié, le dégoût, l'indifférence... ? Justifiez votre opinion.", "correction": "Accepter toute formulation adéquate où le candidat prend position **(0,5pt.)** en justifiant son point de vue. **(0,5pt.)**"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Est-ce que le remords ou le regret exprimé par un criminel efface le mal causé à la victime et à la société ? Justifiez votre opinion.", "correction": "Accepter toute formulation adéquate où le candidat prend position **(0,5pt.)** en justifiant son point de vue. **(0,5pt.)**"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Choisissez et développez un seul sujet.**\n\n**Sujet1 : Beaucoup de personnes victimes d'agressions (ou de vol, viol, etc.) ne recourent pas à la police pour déposer leur plainte.**\n\n- Que pensez-vous du comportement de ces victimes ?\n- Rédigez un texte argumentatif dans lequel vous défendez votre point de vue à l'aide d'arguments pertinents illustrés par des exemples précis.\n\n**Sujet2 : Si vous êtes victime d'une injustice de la part de l'un de vos proches, à quelle personne allez-vous vous confier pour qu'elle vous soutienne ?**\n\n- Dites à qui vous allez vous vous confier et précisez pourquoi en deux ou trois arguments développés et illustrés d'exemples pertinents.\n\n***Lors de la rédaction, vous tenez compte des critères suivants :***\n\n| *Critères d'évaluation du discours* | | *Critères d'évaluation de la langue* | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |\n| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |\n| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |\n| | | Respect des règles orthographiques et grammaticales. | |\n| | | Conjugaison (emploi des temps verbaux) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
