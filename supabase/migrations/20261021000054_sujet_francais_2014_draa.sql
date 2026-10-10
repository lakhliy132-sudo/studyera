-- Sujet de français, examen régional 2014 (session normale), académie
-- Drâa-Tafilalet, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2014 جهة درعة تافيلالت »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie « الأكاديمية الجهوية للتربية والتكوين
-- جهة مكناس- تافيلالت » (Meknès-Tafilalet, avant le découpage régional de
-- 2015) ; « الدورة العادية : يونيو 2014 », « خاص بالمترشحين الممدرسين »,
-- durée « ساعتان ». Coefficient vide : 3 pour sciences économiques et
-- gestion, 4 pour les autres séries.
-- Le corrigé officiel est mal numéroté à partir de la question 6 : la
-- réponse 6 b est numérotée « 7) », et les réponses aux questions 7, 8 et 9
-- du sujet sont numérotées 8, 9 et 10. Chaque réponse est rattachée ici à la
-- question qu'elle traite (le contenu ne laisse aucun doute).
-- Question 1 : le corrigé chiffre « en 1910 (0.25pt x 2) à Bordeaux. (0.5pt) »,
-- alors que le sujet donne (0,25pt×2) pour « Quand et où est-il né ? » ;
-- recopié tel quel.
-- Le corrigé de la production écrite se termine par un total « 20 pts »
-- (sous les quatre critères qui font 10 points) : recopié tel quel.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2014,
  $sujet$normale$sujet$,
  $sujet$Drâa-Tafilalet$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences économiques et gestion, sciences et technologies électriques, sciences et technologies mécaniques, arts appliqués$sujet$,
  120,
  $sujet$## Texte

**CRÉON** : Pourquoi fais-tu ce geste, alors ? Pour les autres, pour ceux qui y croient ? Pour les dresser contre moi ?

**ANTIGONE** : Non.

**CRÉON** : Ni pour les autres, ni pour ton frère ? Pour qui alors ?

**ANTIGONE** : Pour personne. Pour moi.

**CRÉON**, *la regarde en silence* : Tu as donc bien envie de mourir ? Tu as l'air d'un petit gibier pris.

**ANTIGONE** : Ne vous attendrissez pas sur moi. Faites comme moi. Faites ce que vous avez à faire. Mais si vous êtes un être humain, faites-le vite. Voilà tout ce que je vous demande. Je n'aurai pas du courage éternellement, c'est vrai.

**CRÉON**, *se rapproche* : Je veux te sauver, Antigone.

**ANTIGONE** : Vous êtes le roi, vous pouvez tout, mais cela, vous ne le pouvez pas.

**CRÉON** : Tu crois ?

**ANTIGONE** : Ni me sauver, ni me contraindre.

**CRÉON** : Orgueilleuse ! Petite Œdipe !

**ANTIGONE** : Vous pouvez seulement me faire mourir.

**CRÉON** : Et si je te fais torturer ?

**ANTIGONE** : Pourquoi ? Pour que je pleure, que je demande grâce, pour que je jure tout ce qu'on voudra, et que je recommence après, quand je n'aurai plus mal ?

**CRÉON**, *lui serre le bras* : Ecoute-moi bien. J'ai le mauvais rôle, c'est entendu, et tu as le bon. Et tu le sens. Mais n'en profite tout de même pas trop, petite peste… […]

**ANTIGONE** : Lâchez-moi. Vous me faites mal au bras avec votre main.

**CRÉON**, *qui serre plus fort* : Non. Moi, je suis le plus fort comme cela, j'en profite aussi.

**ANTIGONE**, *pousse un petit cri* : Aïe !

**CRÉON**, *dont les yeux rient* : C'est peut-être ce que je devrais faire après tout, tout simplement, te tordre le poignet, te tirer les cheveux comme on fait aux filles dans les jeux. (*Il la regarde encore. Il redevient grave. Il lui dit tout près*.) Je suis ton oncle, c'est entendu, mais nous ne sommes pas tendres les uns pour les autres, dans la famille. […]

**ANTIGONE**, *après un temps* : Vous serrez trop, maintenant. Cela ne me fait même plus mal. Je n'ai plus de bras.

**CRÉON**, *la regarde et la lâche avec un petit sourire. Il murmure* : Dieu sait pourtant si j'ai autre chose à faire aujourd'hui, mais je vais tout de même perdre le temps qu'il faudra et te sauver, petite peste. (*Il la fait asseoir sur une chaise au milieu de la pièce. Il enlève sa veste, il s'avance vers elle, lourd, puissant, en bras de chemise*.) […]. Je ne veux pas te laisser mourir dans une histoire de politique. Tu vaux mieux que cela.

Extrait de "*Antigone*" de Jean Anouilh

## I. Étude de texte (10 points)

**1.** Jean Anouilh est un dramaturge français. - Quand et où est-il né ? (0,25pt×2). - Citez une de ses œuvres autre que « *Antigone* ». (0,5pt). - Quand et où est-il mort ? (0,25pt×2). Pour répondre, vous **pouvez choisir** [souligné sur la feuille, en gras ici] parmi les informations suivantes : 1905, 1910, 1980, 1987, à Paris , à Bordeaux, à Genève, à Lausanne, « *La Sauvage* », « *Les Misérables* ». **(1,5pt)**

**2.** Dans quel genre littéraire classe-t-on la pièce « *Antigone* » de Jean Anouilh ? Pourquoi ? **(1pt)**

**3.** « CRÉON : ***Pourquoi fais-tu ce geste, alors ?*** ». D'après votre lecture de l'œuvre, de quel geste parle Créon dans cette réplique ? **(1pt)**

**4.** Relevez dans le texte une phrase qui montre l'entêtement et la détermination d'Antigone. **(1pt)**

**5.** a- Relevez dans le texte, une didascalie qui montre la colère de Créon ? b- Quelle est la raison de sa colère ? **(1pt)**

**6.** « ***Je n'ai plus de bras***. » a- De quelle figure de style s'agit-il ? Justifiez votre réponse. b- Quelle idée met-elle en relief ? **(1,5pt)**

**7.** Relevez dans le texte deux mots ou expressions appartenant au champ lexical de « la violence ». **(1pt)**

**8.** D'après votre lecture de l'œuvre, Créon a-t-il réussi à convaincre Antigone de renoncer à son projet ? justifiez votre réponse. **(1pt)**

**9.** A la lecture de ce passage, qui selon vous, est en position de force : Créon le roi ou Antigone ? Justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

**SUJET :**

Dans ce texte, Créon est en colère. Il recourt à la violence à l'encontre d'Antigone.

Approuvez-vous ce comportement ?

Rédigez un texte dans lequel vous exposerez votre point de vue sur le sujet.

**NB : Lors de la correction de la production écrite, il sera tenu compte des éléments suivants :**

- *Présentation de la copie :* 2pts
- *Respect de la consigne :* 3 pts.
- *Cohérence textuelle :* 2 pts.
- *Correction de la langue :* 3 pts$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse (à titre indicatif) et barème. NB : Ce corrigé est donné à titre indicatif.*

### I. Étude de texte

**1.** -Jean Anouilh est un dramaturge français. -Il est né en 1910 (0.25pt x 2) à Bordeaux. (0.5pt) -Une de ses œuvres autre que « Antigone » : « La Sauvage » (0.5pt) -Il est mort en 1987 à Lausanne (0.25 pt x2) **(1,5pt)**

**2.** « *Antigone* » de Jean Anouilh est une tragédie moderne : Présence de la fatalité , le thème de la mort qui clôt la pièce …(Accepter toute réponse valable) **(1pt)**

**3.** Le geste dont il s'agit est l'enterrement de son frère Polynice. **(1pt)**

**4.** Une phrase qui montre l'entêtement d'Antigone : « vous pouvez tout, mais cela, vous ne le pouvez pas » ou « Vous pouvez seulement me faire mourir. » ou « je recommence après, quand je n'aurai plus mal »ou « Vous me faites mal au bras avec votre main »ou« Cela ne me fait même plus mal » **(1pt)**

**5.** a- Une didascalie qui montre la colère de Créon : « lui serre le bras » ou « qui serre plus fort » (accepter toute réponse correcte)(0.5pt) b- La raison de cette colère : la désobéissance d'Antigone ou l'entêtement d'Antigone. (0.5pt) **(1pt)**

**6.** a- Il s'agit d'une hyperbole. (1 pt) b- Elle met en relief l'idée du défi, de l'entêtement absolu d'Antigone (0.5pt) (Accepter toute réponse valable) **(1,5pt)**

**7.** Deux mots qui appartiennent au champ lexical de la violence : Exemple : torturer - serrer le bras. (Accepter toute réponse valable) (0.5pt x 2) **(1pt)**

**8.** Non, Créon n'a pas réussi à Convaincre Antigone de renoncer à son projet parce que : c'est une femme têtue ou parce que Créon finira par la tuer (Accepter toute réponse valable) **(1pt)**

**9.** - C'est Créon qui est en position de force parce qu'il est le roi, parce qu'il a le pouvoir ou encore parce que c'est lui qui mène le dialogue. - C'est Antigone qui est plus forte : elle va jusqu'au bout, elle est sûre d'elle-même, elle réussi calmement à énerver Créon (Accepter toute réponse valable ) **(1pt)**

### II. Production écrite

| | |
|---|---|
| Présentation de la copie : | 2pts |
| Respect de la consigne : | 3 pts. |
| Cohérence textuelle : | 2 pts. |
| Correction de la langue : | 3 pts |
| | 20 pts |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Relisez le texte et répondez aux questions suivantes :", "texte": "**CRÉON** : Pourquoi fais-tu ce geste, alors ? Pour les autres, pour ceux qui y croient ? Pour les dresser contre moi ?\n\n**ANTIGONE** : Non.\n\n**CRÉON** : Ni pour les autres, ni pour ton frère ? Pour qui alors ?\n\n**ANTIGONE** : Pour personne. Pour moi.\n\n**CRÉON**, *la regarde en silence* : Tu as donc bien envie de mourir ? Tu as l'air d'un petit gibier pris.\n\n**ANTIGONE** : Ne vous attendrissez pas sur moi. Faites comme moi. Faites ce que vous avez à faire. Mais si vous êtes un être humain, faites-le vite. Voilà tout ce que je vous demande. Je n'aurai pas du courage éternellement, c'est vrai.\n\n**CRÉON**, *se rapproche* : Je veux te sauver, Antigone.\n\n**ANTIGONE** : Vous êtes le roi, vous pouvez tout, mais cela, vous ne le pouvez pas.\n\n**CRÉON** : Tu crois ?\n\n**ANTIGONE** : Ni me sauver, ni me contraindre.\n\n**CRÉON** : Orgueilleuse ! Petite Œdipe !\n\n**ANTIGONE** : Vous pouvez seulement me faire mourir.\n\n**CRÉON** : Et si je te fais torturer ?\n\n**ANTIGONE** : Pourquoi ? Pour que je pleure, que je demande grâce, pour que je jure tout ce qu'on voudra, et que je recommence après, quand je n'aurai plus mal ?\n\n**CRÉON**, *lui serre le bras* : Ecoute-moi bien. J'ai le mauvais rôle, c'est entendu, et tu as le bon. Et tu le sens. Mais n'en profite tout de même pas trop, petite peste… […]\n\n**ANTIGONE** : Lâchez-moi. Vous me faites mal au bras avec votre main.\n\n**CRÉON**, *qui serre plus fort* : Non. Moi, je suis le plus fort comme cela, j'en profite aussi.\n\n**ANTIGONE**, *pousse un petit cri* : Aïe !\n\n**CRÉON**, *dont les yeux rient* : C'est peut-être ce que je devrais faire après tout, tout simplement, te tordre le poignet, te tirer les cheveux comme on fait aux filles dans les jeux. (*Il la regarde encore. Il redevient grave. Il lui dit tout près*.) Je suis ton oncle, c'est entendu, mais nous ne sommes pas tendres les uns pour les autres, dans la famille. […]\n\n**ANTIGONE**, *après un temps* : Vous serrez trop, maintenant. Cela ne me fait même plus mal. Je n'ai plus de bras.\n\n**CRÉON**, *la regarde et la lâche avec un petit sourire. Il murmure* : Dieu sait pourtant si j'ai autre chose à faire aujourd'hui, mais je vais tout de même perdre le temps qu'il faudra et te sauver, petite peste. (*Il la fait asseoir sur une chaise au milieu de la pièce. Il enlève sa veste, il s'avance vers elle, lourd, puissant, en bras de chemise*.) […]. Je ne veux pas te laisser mourir dans une histoire de politique. Tu vaux mieux que cela.\n\nExtrait de \"*Antigone*\" de Jean Anouilh", "questions": [{"type": "libre", "numero": "1", "points": 1.5, "enonce": "Jean Anouilh est un dramaturge français. - Quand et où est-il né ? (0,25pt×2). - Citez une de ses œuvres autre que « *Antigone* ». (0,5pt). - Quand et où est-il mort ? (0,25pt×2). Pour répondre, vous **pouvez choisir** [souligné sur la feuille, en gras ici] parmi les informations suivantes : 1905, 1910, 1980, 1987, à Paris , à Bordeaux, à Genève, à Lausanne, « *La Sauvage* », « *Les Misérables* ».", "correction": "-Jean Anouilh est un dramaturge français. -Il est né en 1910 (0.25pt x 2) à Bordeaux. (0.5pt) -Une de ses œuvres autre que « Antigone » : « La Sauvage » (0.5pt) -Il est mort en 1987 à Lausanne (0.25 pt x2)"}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Dans quel genre littéraire classe-t-on la pièce « *Antigone* » de Jean Anouilh ? Pourquoi ?", "correction": "« *Antigone* » de Jean Anouilh est une tragédie moderne : Présence de la fatalité , le thème de la mort qui clôt la pièce …(Accepter toute réponse valable)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "« CRÉON : ***Pourquoi fais-tu ce geste, alors ?*** ». D'après votre lecture de l'œuvre, de quel geste parle Créon dans cette réplique ?", "correction": "Le geste dont il s'agit est l'enterrement de son frère Polynice."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Relevez dans le texte une phrase qui montre l'entêtement et la détermination d'Antigone.", "correction": "Une phrase qui montre l'entêtement d'Antigone : « vous pouvez tout, mais cela, vous ne le pouvez pas » ou « Vous pouvez seulement me faire mourir. » ou « je recommence après, quand je n'aurai plus mal »ou « Vous me faites mal au bras avec votre main »ou« Cela ne me fait même plus mal »"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "a- Relevez dans le texte, une didascalie qui montre la colère de Créon ? b- Quelle est la raison de sa colère ?", "correction": "a- Une didascalie qui montre la colère de Créon : « lui serre le bras » ou « qui serre plus fort » (accepter toute réponse correcte)(0.5pt) b- La raison de cette colère : la désobéissance d'Antigone ou l'entêtement d'Antigone. (0.5pt)"}, {"type": "libre", "numero": "6", "points": 1.5, "enonce": "« ***Je n'ai plus de bras***. » a- De quelle figure de style s'agit-il ? Justifiez votre réponse. b- Quelle idée met-elle en relief ?", "correction": "a- Il s'agit d'une hyperbole. (1 pt) b- Elle met en relief l'idée du défi, de l'entêtement absolu d'Antigone (0.5pt) (Accepter toute réponse valable)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez dans le texte deux mots ou expressions appartenant au champ lexical de « la violence ».", "correction": "Deux mots qui appartiennent au champ lexical de la violence : Exemple : torturer - serrer le bras. (Accepter toute réponse valable) (0.5pt x 2)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "D'après votre lecture de l'œuvre, Créon a-t-il réussi à convaincre Antigone de renoncer à son projet ? justifiez votre réponse.", "correction": "Non, Créon n'a pas réussi à Convaincre Antigone de renoncer à son projet parce que : c'est une femme têtue ou parce que Créon finira par la tuer (Accepter toute réponse valable)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "A la lecture de ce passage, qui selon vous, est en position de force : Créon le roi ou Antigone ? Justifiez votre réponse.", "correction": "- C'est Créon qui est en position de force parce qu'il est le roi, parce qu'il a le pouvoir ou encore parce que c'est lui qui mène le dialogue. - C'est Antigone qui est plus forte : elle va jusqu'au bout, elle est sûre d'elle-même, elle réussi calmement à énerver Créon (Accepter toute réponse valable )"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**SUJET :**\n\nDans ce texte, Créon est en colère. Il recourt à la violence à l'encontre d'Antigone.\n\nApprouvez-vous ce comportement ?\n\nRédigez un texte dans lequel vous exposerez votre point de vue sur le sujet.\n\n**NB : Lors de la correction de la production écrite, il sera tenu compte des éléments suivants :**\n\n- *Présentation de la copie :* 2pts\n- *Respect de la consigne :* 3 pts.\n- *Cohérence textuelle :* 2 pts.\n- *Correction de la langue :* 3 pts", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
