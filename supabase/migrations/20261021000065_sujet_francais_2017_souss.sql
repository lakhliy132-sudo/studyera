-- Sujet de français, examen régional 2017 (session normale), académie
-- Souss-Massa, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2017 جهة سوس ماسة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie régionale d'éducation et de formation « جهة سوس ماسة » (en-tête en
-- arabe), « الدورة العادية 2017 » (juin 2017), durée « ساعتان ». Coefficient :
-- 3 pour sciences économiques et gestion, 4 pour les autres séries.
-- La feuille ne note pas chaque question : elle porte « I - COMPREHENSION :
-- 10 points (1ptx10) », d'où le barème « 1pt » par question ; la question 6
-- (a et b) vaut 1pt en tout.
-- La dernière page du PDF (brouillon de questions et de sujets de
-- production sans rapport avec cette épreuve) est ignorée.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2017,
  $sujet$normale$sujet$,
  $sujet$Souss-Massa$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences économiques et gestion, sciences et technologies électriques, sciences et technologies mécaniques, arts appliqués$sujet$,
  120,
  $sujet$## Texte

Il se fit un grand silence. J'étais parvenu à ma place. Au moment où le tumulte\* cessa dans la foule, il cessa aussi dans mes idées. Je compris tout à coup clairement ce que je n'avais fait qu'entrevoir confusément jusqu'alors, que le moment décisif était venu, et que j'étais là pour entendre ma sentence.

L'explique qui pourra, de la manière dont cette idée me vint, elle ne me causa pas de terreur. Les fenêtres étaient ouvertes ; l'air et le bruit de la ville arrivaient librement du dehors : la salle était claire comme pour une noce ; les gais rayons du soleil traçaient çà et là la figure lumineuse des croisées, tantôt allongée sur le plancher, tantôt développée sur les tables, tantôt brisée à l'angle des murs ; et de ces losanges éclatants aux fenêtres chaque rayon découpait dans l'air un grand prisme de poussière d'or.

Les juges, au fond de la salle, avaient l'air satisfait, probablement de la joie d'avoir bientôt fini. Le visage du président, doucement éclairé par le reflet d'une vitre, avait quelque chose de calme et de bon ; et un jeune assesseur\* causait presque gaiement en chiffonnant son rabat\* avec une jolie dame en chapeau rose, placée par faveur derrière lui.

Les jurés seuls paraissaient blêmes et abattus, mais c'était apparemment de fatigue d'avoir veillé toute la nuit. Quelques-uns bâillaient. Rien, dans leur contenance, n'annonçait des hommes qui viennent de porter une sentence de mort ; et sur les figures de ces bons bourgeois je ne devinais qu'une grande envie de dormir.

En face de moi, une fenêtre était toute grande ouverte. J'entendais rire sur le quai des marchandes de fleurs ; et, au bord de la croisée, une jolie petite plante jaune, toute pénétrée d'un rayon de soleil, jouait avec le vent dans une fente de la pierre.

Comment une idée sinistre aurait-elle pu poindre parmi tant de gracieuses sensations ? Inondé d'air et de soleil, il me fut impossible de penser à autre chose qu'à la liberté.

*1- Tumulte : bruit confus que produisent des personnes assemblées.*  
*2- Assesseur : juge qui aide le président.*  
*3- Rabat : large cravate portée par les juges.*

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1pt)**

| Titre de l'œuvre | Auteur | Genre | Siècle |
|---|---|---|---|
| | | | |

**2.** Par rapport à l'œuvre, le narrateur est : Recopiez la bonne réponse. Justifiez-la. **(1pt)**

a- à Bicêtre  
b- à la Conciergerie  
c- à l'hôtel de ville

**3.** Dans ce passage : a- Où se trouve le narrateur ? b- De quel moment décisif parle-t-il ? c- Quel sentiment éprouve-t-il en attendant ce moment? **(1pt)**

**4.** Recopiez et complétez le tableau suivant: (Personnage / Trait physique ou moral) **(1pt)**

| Les juges | Les jurés | Le président | L'assesseur |
|---|---|---|---|
| | | | |

**5.** Relevez dans le texte quatre mots appartenant au champ lexical de la nature. **(1pt)**

**6a.** Recopiez et complétez les tableaux suivants: a- Enoncé : « *Comment une idée sinistre aurait-elle pu poindre parmi tant de gracieuses sensations* ? » — Niveau de langue : … **(1pt)**

**6b.** b- Enoncé : « *La salle était claire comme pour une noce*.» — Figure de style : …

**7.** Le jugement que porte le narrateur sur les jurés est : Recopiez la bonne réponse et justifiez-la. **(1pt)**

a- valorisant  
b- dévalorisant  
c- neutre

**8.** L'impression qui se dégage de la description du lieu est plutôt : Recopiez la bonne réponse et justifiez-la. **(1pt)**

a- une impression d'espoir  
b- une impression de désespoir  
c- une impression de peur

**9.** Il faut être privé de sa liberté pour apprécier son importance. Partagez-vous cet avis ? Justifiez votre réponse. **(1pt)**

**10.** Le thème de cette œuvre est-il toujours d'actualité ? Justifiez. **(1pt)**

## II. Production écrite (10 points)

*« Le jeune a besoin d'apprendre de ses erreurs ; il ne faut ni le punir ni le juger. »*

Partagez-vous ce point de vue ?

Rédigez un texte dans lequel vous développerez votre réflexion à l'aide d'arguments et d'exemples précis.

| ***Critères d'évaluation du discours*** | | ***Critères d'évaluation de la langue*** | |
|---|---|---|---|
| | 5pts | Vocabulaire (usage de termes précis et variés) | 5pts |
| Conformité de la production à la consigne d'écriture | | Syntaxe (construction de phrases correctes) | |
| Cohérence de l'argumentation | | Ponctuation (usage d'une ponctuation adéquate) | |
| Structure du texte (organisation et progression du texte) | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse (ou formulation) non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(1pt)**

| Titre de l'œuvre | Auteur | Genre | Siècle |
|---|---|---|---|
| Le Dernier Jour d'un Condamné | Victor Hugo | Roman, roman à thèse | 19ème (XIX°) |

**2.** a- à Bicêtre. (1/2pt) Justification : Début du roman (Chapitre II), le condamné se souvient du déroulement de son procès. (1/2pt) **(1pt)**

**3.** **a**- dans la salle d'audience, au tribunal, au palais de justice. (1/4pt) **b**- du jour où sa sentence (jugement, verdict) va être prononcée. (1/2pt) **c**-serein, calme, il n'a pas peur, il pensait surtout à sa liberté. (1/4pt) **(1pt)**

**4.** **(1pt)**

| Les juges | Les jurés | Le président | L'assesseur |
|---|---|---|---|
| -satisfaits ( joyeux) | -blêmes (abattus) | -calme et bon | -jeune (gai) |

**5.** Soleil, rayon (de soleil) - air - vent – fleurs - plante (1/4ptx4) **(1pt)**

**6a.** Niveau de langue : **Soutenu** (1/2pt) **(1pt)**

**6b.** Figure de style : **Comparaison** (1/2pt)

**7.** b- dévalorisant. (1/2pt) Justification : blêmes - bâillaient – envie de dormir (1/2pt) **(1pt)**

**8.** a- une impression d'espoir. (1/2pt) Justification: narrateur optimiste - impression de gaîté - luminosité de la salle, fenêtres ouvertes – lumière – « *gracieuses sensations* » – liberté,….. (1/2pt) **(1pt)**

**9.** Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. **(1pt)**

**10.** Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. **(1pt)**

### II. Production écrite

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| | 5pts | Vocabulaire (usage de termes précis et variés) | 5pts |
| Conformité de la production à la consigne d'écriture | | Syntaxe (construction de phrases correctes) | |
| Cohérence de l'argumentation | | Ponctuation (usage d'une ponctuation adéquate) | |
| Structure du texte (organisation et progression du texte) | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Il se fit un grand silence. J'étais parvenu à ma place. Au moment où le tumulte\\* cessa dans la foule, il cessa aussi dans mes idées. Je compris tout à coup clairement ce que je n'avais fait qu'entrevoir confusément jusqu'alors, que le moment décisif était venu, et que j'étais là pour entendre ma sentence.\n\nL'explique qui pourra, de la manière dont cette idée me vint, elle ne me causa pas de terreur. Les fenêtres étaient ouvertes ; l'air et le bruit de la ville arrivaient librement du dehors : la salle était claire comme pour une noce ; les gais rayons du soleil traçaient çà et là la figure lumineuse des croisées, tantôt allongée sur le plancher, tantôt développée sur les tables, tantôt brisée à l'angle des murs ; et de ces losanges éclatants aux fenêtres chaque rayon découpait dans l'air un grand prisme de poussière d'or.\n\nLes juges, au fond de la salle, avaient l'air satisfait, probablement de la joie d'avoir bientôt fini. Le visage du président, doucement éclairé par le reflet d'une vitre, avait quelque chose de calme et de bon ; et un jeune assesseur\\* causait presque gaiement en chiffonnant son rabat\\* avec une jolie dame en chapeau rose, placée par faveur derrière lui.\n\nLes jurés seuls paraissaient blêmes et abattus, mais c'était apparemment de fatigue d'avoir veillé toute la nuit. Quelques-uns bâillaient. Rien, dans leur contenance, n'annonçait des hommes qui viennent de porter une sentence de mort ; et sur les figures de ces bons bourgeois je ne devinais qu'une grande envie de dormir.\n\nEn face de moi, une fenêtre était toute grande ouverte. J'entendais rire sur le quai des marchandes de fleurs ; et, au bord de la croisée, une jolie petite plante jaune, toute pénétrée d'un rayon de soleil, jouait avec le vent dans une fente de la pierre.\n\nComment une idée sinistre aurait-elle pu poindre parmi tant de gracieuses sensations ? Inondé d'air et de soleil, il me fut impossible de penser à autre chose qu'à la liberté.\n\n*1- Tumulte : bruit confus que produisent des personnes assemblées.*  \n*2- Assesseur : juge qui aide le président.*  \n*3- Rabat : large cravate portée par les juges.*", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "Le Dernier Jour d'un Condamné"}, {"libelle": "Auteur", "reponse": "Victor Hugo"}, {"libelle": "Genre", "reponse": "Roman, roman à thèse"}, {"libelle": "Siècle", "reponse": "19ème (XIX°)"}]}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Par rapport à l'œuvre, le narrateur est : Recopiez la bonne réponse. Justifiez-la.", "options": ["à Bicêtre", "à la Conciergerie", "à l'hôtel de ville"], "bonne": 0}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Dans ce passage : a- Où se trouve le narrateur ? b- De quel moment décisif parle-t-il ? c- Quel sentiment éprouve-t-il en attendant ce moment?", "correction": "**a**- dans la salle d'audience, au tribunal, au palais de justice. (1/4pt) **b**- du jour où sa sentence (jugement, verdict) va être prononcée. (1/2pt) **c**-serein, calme, il n'a pas peur, il pensait surtout à sa liberté. (1/4pt)"}, {"type": "tableau", "numero": "4", "points": 1, "enonce": "Recopiez et complétez le tableau suivant: (Personnage / Trait physique ou moral)", "champs": [{"libelle": "Les juges", "reponse": "-satisfaits ( joyeux)"}, {"libelle": "Les jurés", "reponse": "-blêmes (abattus)"}, {"libelle": "Le président", "reponse": "-calme et bon"}, {"libelle": "L'assesseur", "reponse": "-jeune (gai)"}]}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Relevez dans le texte quatre mots appartenant au champ lexical de la nature.", "correction": "Soleil, rayon (de soleil) - air - vent – fleurs - plante (1/4ptx4)"}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "Recopiez et complétez les tableaux suivants: a- Enoncé : « *Comment une idée sinistre aurait-elle pu poindre parmi tant de gracieuses sensations* ? » — Niveau de langue : …", "correction": "Niveau de langue : **Soutenu** (1/2pt)"}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "b- Enoncé : « *La salle était claire comme pour une noce*.» — Figure de style : …", "correction": "Figure de style : **Comparaison** (1/2pt)"}, {"type": "choix", "numero": "7", "points": 1, "enonce": "Le jugement que porte le narrateur sur les jurés est : Recopiez la bonne réponse et justifiez-la.", "options": ["valorisant", "dévalorisant", "neutre"], "bonne": 1}, {"type": "choix", "numero": "8", "points": 1, "enonce": "L'impression qui se dégage de la description du lieu est plutôt : Recopiez la bonne réponse et justifiez-la.", "options": ["une impression d'espoir", "une impression de désespoir", "une impression de peur"], "bonne": 0}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Il faut être privé de sa liberté pour apprécier son importance. Partagez-vous cet avis ? Justifiez votre réponse.", "correction": "Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Le thème de cette œuvre est-il toujours d'actualité ? Justifiez.", "correction": "Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "*« Le jeune a besoin d'apprendre de ses erreurs ; il ne faut ni le punir ni le juger. »*\n\nPartagez-vous ce point de vue ?\n\nRédigez un texte dans lequel vous développerez votre réflexion à l'aide d'arguments et d'exemples précis.\n\n| ***Critères d'évaluation du discours*** | | ***Critères d'évaluation de la langue*** | |\n|---|---|---|---|\n| | 5pts | Vocabulaire (usage de termes précis et variés) | 5pts |\n| Conformité de la production à la consigne d'écriture | | Syntaxe (construction de phrases correctes) | |\n| Cohérence de l'argumentation | | Ponctuation (usage d'une ponctuation adéquate) | |\n| Structure du texte (organisation et progression du texte) | | Orthographe d'usage et grammaticale (respect des règles) | |\n| | | Conjugaison (emploi des temps) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
