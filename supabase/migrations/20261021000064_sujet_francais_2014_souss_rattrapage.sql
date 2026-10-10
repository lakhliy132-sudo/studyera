-- Sujet de français, examen régional 2014 (session de rattrapage), académie
-- Souss-Massa, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2014 جهة سوس ماسة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie « جهة سوس ماسة درعة » (Souss-Massa-Drâa,
-- avant le découpage régional de 2015, aujourd'hui Souss-Massa) ;
-- « الدورة الإستدراكية يوليوز 2014 » (session de rattrapage), durée
-- « ساعتان ». Coefficient : 3 pour sciences économiques et gestion, 4 pour
-- les autres séries.
-- La feuille ne note pas chaque question : elle porte « I- COMPREHENSION :
-- (10 points)(1ptx10) », d'où le barème « 1pt » par question.
-- Texte transcrit depuis la couche texte du PDF (deux colonnes), vérifié
-- sur le scan.
-- Question 1 : la case « Genre » du corrigé porte « Théâtre / tragédie » et,
-- à la ligne, « tragédie moderne » ; les deux lignes sont séparées ici par
-- une virgule.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2014,
  $sujet$rattrapage$sujet$,
  $sujet$Souss-Massa$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences économiques et gestion, sciences et technologies électriques, sciences et technologies mécaniques, arts appliqués$sujet$,
  120,
  $sujet$## Texte

**CRÉON**

Et cette nuit, la première fois, c'était toi aussi?

**ANTIGONE**

Oui. C'était moi. Avec une petite pelle de fer qui nous servait à faire des châteaux de sable sur la plage, pendant les vacances. C'était justement la pelle de Polynice. Il avait gravé son nom au couteau sur le manche. C'est pour cela que je l'ai laissée près de lui. Mais ils l'ont prise. Alors, la seconde fois, j'ai dû recommencer avec mes mains (...).

*Les gardes sont sortis, précédés par le petit page. Créon et Antigone sont seuls l'un en face de l'autre.*

**CRÉON**

Avais-tu parlé de ton projet à quelqu'un?

**ANTIGONE**

Non.

**CRÉON**

As-tu rencontré quelqu'un sur ta route?

**ANTIGONE**

Non, personne.

**CRÉON**

Tu en es bien sûre?

**ANTIGONE**

Oui.

**CRÉON**

Alors, écoute: tu vas rentrer chez toi, te coucher, dire que tu es malade, que tu n'es pas sortie depuis hier. Ta nourrice dira comme toi. Je ferai disparaître ces trois hommes.

**ANTIGONE**

Pourquoi? Puisque vous savez bien que je recommencerai.

*Un silence. Ils se regardent.*

**CRÉON**

Pourquoi as-tu tenté d'enterrer ton frère ?

**ANTIGONE**

Je le devais.

**CRÉON**

Je l'avais interdit.

**ANTIGONE**, *doucement.*

Je le devais tout de même. Ceux qu'on n'enterre pas errent éternellement sans jamais trouver de repos. Si mon frère vivant était rentré harassé d'une longue chasse, je lui aurais enlevé ses chaussures, je lui aurais fait à manger, je lui aurais préparé son lit... Polynice aujourd'hui a achevé sa chasse. Il rentre à la maison où mon père et ma mère, et Etéocle aussi, l'attendent. Il a droit au repos.

**CRÉON**

C'était un révolté et un traître, tu le savais.

**ANTIGONE**

C'était mon frère.

**CRÉON**

Tu avais entendu proclamer l'édit aux carrefours, tu avais lu l'affiche sur tous les murs de la ville?

**ANTIGONE**

Oui.

**CRÉON**

Tu savais le sort qui y était promis à celui, quel qu'il soit, qui oserait lui rendre les honneurs funèbres?

**ANTIGONE**

Oui, je le savais.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1pt)**

| Auteur | Titre | Siècle | Genre |
|---|---|---|---|
| | | | |

**2.** Situez ce passage dans l'œuvre par rapport à la scène qui précède. **(1pt)**

**3.** Relevez dans ce passage une phrase qui montre qu'Antigone reconnaît avoir tenté d'enterrer son frère. **(1pt)**

**4.** Relevez, dans la première didascalie du texte, un indice qui annonce l'affrontement entre les deux personnages. **(1pt)**

**5.** Que propose Créon à Antigone pour mettre fin au problème qui les oppose ? **(1pt)**

**6.** Pourquoi Antigone a-t-elle refusé la proposition de Créon? **(1pt)**

**7.** Relevez dans le texte le nom de 4 personnages morts. **(1pt)**

**8.** « *Ceux qu'on n'enterre pas errent éternellement sans jamais trouver de repos* » A quelle niveau de langue appartient cette phrase : **(1pt)**

a- familier ?  
b- courant ?  
c- soutenu ?

**9.** Antigone a-t-elle raison de s'opposer à Créon ? Justifiez votre réponse. **(1pt)**

**10.** Pensez-vous que Polynice mérite ce que fait Antigone pour lui ? Justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

Vous avez certainement vu dans votre entourage des enfants trembler de peur devant leur parents.

A-t-on vraiment besoin de faire peur aux enfants pour les éduquer ?

Dans un texte bien construit, vous exprimerez votre opinion à l'aide d'arguments précis.

| ***Critères d'évaluation du discours*** | | ***Critères d'évaluation de la langue*** | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5PTS | Vocabulaire (usage de termes précis et variés) | 5PTS |
| Cohérence de l'argumentation | | Syntaxe (construction de phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse (ou formulation) non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(1pt)**

| Auteur | Titre | Siècle | Genre |
|---|---|---|---|
| Jean ANOUILH | Antigone | 20ème siècle | Théâtre / tragédie, tragédie moderne |

**2.** Surprise en train d'enterrer son frère Polynice, Antigone est arrêtée par les gardes. **(1pt)**

**3.** *Oui. C'était moi. La seconde fois, j'ai dû recommencer., …* **(1pt)**

**4.** *L'un en face de l'autre*. **(1pt)**

**5.** Ex : Créon propose à Antigone de rentrer chez elle, de dire qu'elle était malade, Créon fera disparaître les trois hommes. **(1pt)**

**6.** Antigone refuse la proposition car elle considère qu'elle a agi par devoir fraternel. **(1pt)**

**7.** Les 4 personnages morts : Etéocle, Polynice, père (Oedipe), mère (Jocaste) (1/4ptx4) **(1pt)**

**8.** soutenu **(1pt)**

**9.** Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. **(1pt)**

**10.** Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. **(1pt)**

### II. Production écrite

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5PTS | Vocabulaire (usage de termes précis et variés) | 5PTS |
| Cohérence de l'argumentation | | Syntaxe (construction de phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**CRÉON**\n\nEt cette nuit, la première fois, c'était toi aussi?\n\n**ANTIGONE**\n\nOui. C'était moi. Avec une petite pelle de fer qui nous servait à faire des châteaux de sable sur la plage, pendant les vacances. C'était justement la pelle de Polynice. Il avait gravé son nom au couteau sur le manche. C'est pour cela que je l'ai laissée près de lui. Mais ils l'ont prise. Alors, la seconde fois, j'ai dû recommencer avec mes mains (...).\n\n*Les gardes sont sortis, précédés par le petit page. Créon et Antigone sont seuls l'un en face de l'autre.*\n\n**CRÉON**\n\nAvais-tu parlé de ton projet à quelqu'un?\n\n**ANTIGONE**\n\nNon.\n\n**CRÉON**\n\nAs-tu rencontré quelqu'un sur ta route?\n\n**ANTIGONE**\n\nNon, personne.\n\n**CRÉON**\n\nTu en es bien sûre?\n\n**ANTIGONE**\n\nOui.\n\n**CRÉON**\n\nAlors, écoute: tu vas rentrer chez toi, te coucher, dire que tu es malade, que tu n'es pas sortie depuis hier. Ta nourrice dira comme toi. Je ferai disparaître ces trois hommes.\n\n**ANTIGONE**\n\nPourquoi? Puisque vous savez bien que je recommencerai.\n\n*Un silence. Ils se regardent.*\n\n**CRÉON**\n\nPourquoi as-tu tenté d'enterrer ton frère ?\n\n**ANTIGONE**\n\nJe le devais.\n\n**CRÉON**\n\nJe l'avais interdit.\n\n**ANTIGONE**, *doucement.*\n\nJe le devais tout de même. Ceux qu'on n'enterre pas errent éternellement sans jamais trouver de repos. Si mon frère vivant était rentré harassé d'une longue chasse, je lui aurais enlevé ses chaussures, je lui aurais fait à manger, je lui aurais préparé son lit... Polynice aujourd'hui a achevé sa chasse. Il rentre à la maison où mon père et ma mère, et Etéocle aussi, l'attendent. Il a droit au repos.\n\n**CRÉON**\n\nC'était un révolté et un traître, tu le savais.\n\n**ANTIGONE**\n\nC'était mon frère.\n\n**CRÉON**\n\nTu avais entendu proclamer l'édit aux carrefours, tu avais lu l'affiche sur tous les murs de la ville?\n\n**ANTIGONE**\n\nOui.\n\n**CRÉON**\n\nTu savais le sort qui y était promis à celui, quel qu'il soit, qui oserait lui rendre les honneurs funèbres?\n\n**ANTIGONE**\n\nOui, je le savais.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": "Jean ANOUILH"}, {"libelle": "Titre", "reponse": "Antigone"}, {"libelle": "Siècle", "reponse": "20ème siècle"}, {"libelle": "Genre", "reponse": "Théâtre / tragédie, tragédie moderne"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Situez ce passage dans l'œuvre par rapport à la scène qui précède.", "correction": "Surprise en train d'enterrer son frère Polynice, Antigone est arrêtée par les gardes."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Relevez dans ce passage une phrase qui montre qu'Antigone reconnaît avoir tenté d'enterrer son frère.", "correction": "*Oui. C'était moi. La seconde fois, j'ai dû recommencer., …*"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Relevez, dans la première didascalie du texte, un indice qui annonce l'affrontement entre les deux personnages.", "correction": "*L'un en face de l'autre*."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Que propose Créon à Antigone pour mettre fin au problème qui les oppose ?", "correction": "Ex : Créon propose à Antigone de rentrer chez elle, de dire qu'elle était malade, Créon fera disparaître les trois hommes."}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Pourquoi Antigone a-t-elle refusé la proposition de Créon?", "correction": "Antigone refuse la proposition car elle considère qu'elle a agi par devoir fraternel."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez dans le texte le nom de 4 personnages morts.", "correction": "Les 4 personnages morts : Etéocle, Polynice, père (Oedipe), mère (Jocaste) (1/4ptx4)"}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« *Ceux qu'on n'enterre pas errent éternellement sans jamais trouver de repos* » A quelle niveau de langue appartient cette phrase :", "options": ["familier ?", "courant ?", "soutenu ?"], "bonne": 2}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Antigone a-t-elle raison de s'opposer à Créon ? Justifiez votre réponse.", "correction": "Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Pensez-vous que Polynice mérite ce que fait Antigone pour lui ? Justifiez votre réponse.", "correction": "Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "Vous avez certainement vu dans votre entourage des enfants trembler de peur devant leur parents.\n\nA-t-on vraiment besoin de faire peur aux enfants pour les éduquer ?\n\nDans un texte bien construit, vous exprimerez votre opinion à l'aide d'arguments précis.\n\n| ***Critères d'évaluation du discours*** | | ***Critères d'évaluation de la langue*** | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture | 5PTS | Vocabulaire (usage de termes précis et variés) | 5PTS |\n| Cohérence de l'argumentation | | Syntaxe (construction de phrases correctes) | |\n| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |\n| | | Orthographe d'usage et grammaticale (respect des règles) | |\n| | | Conjugaison (emploi des temps) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
