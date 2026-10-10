-- Sujet de français, examen régional 2013 (session normale), académie
-- Béni Mellal-Khénifra, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2013 جهة بني ملال خنيفرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie de Tadla-Azilal (avant le découpage
-- régional de 2015, aujourd'hui Béni Mellal-Khénifra) ; session normale
-- 2013, durée « ساعتان ». Coefficient vide : 04 pour quatre séries, 03 pour
-- sciences économiques et gestion.
-- Le sujet ne chiffre pas les deux critères de la production écrite ; le
-- corrigé donne 6 pts et 4 pts.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2013,
  $sujet$normale$sujet$,
  $sujet$Béni Mellal-Khénifra$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

**CREON**

(...) Mais je vais te dire quelque chose, à toi, quelque chose que je sais seul, quelque chose d'effroyable : Etéocle, ce prix de vertu, ne valait pas plus cher que Polynice. Le bon fils avait essayé, lui aussi, de faire assassiner son père, le prince loyal avait décidé, lui aussi, de vendre Thèbes au plus offrant. Oui, crois-tu que c'est drôle ? Cette trahison pour laquelle le corps de Polynice est en train de pourrir au soleil, j'ai la preuve maintenant qu'Etéocle, qui dort dans son tombeau de marbre, se préparait, lui aussi, à la commettre. C'est un hasard si Polynice a réussi son coup avant lui. Nous avions affaire à deux larrons en foire qui se trompaient l'un l'autre en nous trompant et qui se sont égorgés comme deux petits voyous qu'ils étaient, pour un règlement de comptes… Seulement, il s'est trouvé que j'ai eu besoin de faire un héros de l'un d'eux. Alors, j'ai fait rechercher leurs cadavres au milieu des autres. On les a retrouvés embrassés - pour la première fois de leur vie sans doute. Ils s'étaient embrochés mutuellement, et puis la charge de la cavalerie argyenne leur avait passé dessus. Ils étaient en bouillie, Antigone, méconnaissables. J'ai fait ramasser un des corps, le moins abîmé des deux, pour mes funérailles nationales, et j'ai donné l'ordre de laisser pourrir l'autre où il était. Je ne sais même pas lequel. Et je t'assure que cela m'est égal.

*(Il y a un long silence, ils ne bougent pas, sans se regarder, puis Antigone dit doucement :)*

**ANTIGONE**

Pourquoi m'avez-vous raconté cela ?

*(Créon se lève, remet sa veste.)*

**CREON**

Valait-il mieux te laisser mourir dans cette pauvre histoire ?

**ANTIGONE**

Peut-être. Moi, je croyais.

*(Il y a un silence encore. Créon s'approche d'elle. )*

**CREON**

Qu'est-ce que tu vas faire maintenant ?

**ANTIGONE**

*(Se lève comme une somnambule.)*

Je vais remonter dans ma chambre.

**CREON**

Ne reste pas trop seule. Va voir Hémon, ce matin. Marie-toi vite.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le paragraphe suivant par les informations données entre parenthèses : Antigone est une …………… écrite par …………… C'est une pièce de théâtre inspirée du …………… antique d'Antigone, fille d'Œdipe. Elle a été jouée pour la première fois en …………… (mythe / tragédie moderne / 1944 / jean Anouilh) **(1 pt)**

**2a.** Pour situer ce texte : Quelle est la décision prise par le roi Créon concernant l'enterrement de Polynice, le frère d'Antigone ? **(1 pt)**

**2b.** Antigone a-t-elle accepté cette décision ?

**3a.** Qui parle le plus dans ce dialogue ? **(0.5 pt)**

**3b.** Pourquoi à votre avis ? **(0.5 pt)**

**4a.** Lisez la tirade de Créon de « Mais je vais te dire... » Jusqu'à « (…) au plus offrant. » Relevez une expression qui montre que ce que va dire Créon à Antigone est un secret. **(1 pt)**

**4b.** L'information qu'il va lui donner est-elle bonne où mauvaise ?

**5.** « Etéocle, ce prix de vertu, ne valait pas plus cher que Polynice. » cela signifie que : (Recopiez la bonne réponse.) **(1 pt)**

a- Etéocle est meilleur que Polynice.  
b- Etéocle est aussi bon que Polynice.  
c- Etéocle est aussi mauvais que Polynice.

**6.** Quelle trahison préparait Etéocle à commettre lui aussi ? **(1 pt)**

**7.** Lisez le passage de : « Nous avions affaire … » jusqu'à « .. l'un d'eux. » Qu'est ce qui justifie, selon Créon, la décision qu'il a prise ? **(1 pt)**

**8a.** Lisez « Alors j'ai fait rechercher … » jusqu'à « ... funérailles nationales. » Relevez deux mots appartenant au champ lexical de la mort. **(1 pt)**

**8b.** Quelle est donc la tonalité (le registre) utilisée dans l'énoncé ?

**9a.** Relevez une comparaison dans les didascalies (passages entre parenthèses). **(0.5 pt)**

**9b.** Quel sentiment d'Antigone suggère cette figure? **(0.5 pt)**

**10a.** Lisez les trois dernières répliques du texte. Que décide Antigone ? **(1 pt)**

**10b.** D'après votre lecture de l'œuvre. Antigone sera-t-elle convaincue par Créon ?

## II. Production écrite (10 points)

Certaines personnes ne gardent pas les secrets qu'on leur confie : ils en parlent à tout le monde.

Rédigez un texte dans lequel vous exposerez votre point de vue concernant un tel comportement. Appuyez votre opinion par des arguments et des exemples précis.

**NB :** Lors de la correction de votre production écrite, il sera tenu compte des éléments suivants :

- Respect de la consigne, cohérence et structure de l'argumentation
- Qualité de la langue (vocabulaire, syntaxe, ponctuation, etc.)$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de réponse. Toute réponse imprévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** Antigone est une tragédie moderne écrite par Jean Anouilh. C'est une pièce de théâtre inspirée du mythe antique d'Antigone, fille d'Œdipe. Elle a été jouée pour la première fois en 1944. (0.25 pt X 4) **(1 pt)**

**2a.** La décision de n'a pas enterrer Polynice, le frère d'Antigone. (0.5 pt) **(1 pt)**

**2b.** Non, elle n'a pas accepté cette décision. (0.5 pt)

**3a.** Créon. **(0.5 pt)**

**3b.** convaincre Antigone d'abandonner l'idée d'enterrer Polynice / sauver Antigone. **(0.5 pt)**

**4a.** « quelque chose que je sais seul » (0.5 pt) **(1 pt)**

**4b.** mauvaise. (0.5 pt)

**5.** c- Etéocle est aussi mauvais que Polynice. **(1 pt)**

**6.** faire assassiner son père et/ou vendre Thèbes au plus offrant. **(1 pt)**

**7.** « Seulement, il s'est trouvé que j'ai eu besoin de faire un héros de l'un deux » **(1 pt)**

**8a.** cadavre, corps, funérailles … (0.25 pt x 2) **(1 pt)**

**8b.** tragique. (0.5 pt)

**9a.** « Se lève comme une somnambule » **(0.5 pt)**

**9b.** choc, surprise, stupéfaction, bouleversement … (accepter tout sentiment synonyme) **(0.5 pt)**

**10a.** remonter dans sa chambre. (0.5 pt) **(1 pt)**

**10b.** Non, elle ne sera pas convaincue par Créon. (0.5 pt)

### II. Production écrite

Lors de la correction de la production écrite, tenir compte des éléments suivants : respect de la consigne, cohérence et structure de l'argumentation : 6pts ; qualité de la langue (vocabulaire, syntaxe, ponctuation, etc.) : 4 pts.$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**CREON**\n\n(...) Mais je vais te dire quelque chose, à toi, quelque chose que je sais seul, quelque chose d'effroyable : Etéocle, ce prix de vertu, ne valait pas plus cher que Polynice. Le bon fils avait essayé, lui aussi, de faire assassiner son père, le prince loyal avait décidé, lui aussi, de vendre Thèbes au plus offrant. Oui, crois-tu que c'est drôle ? Cette trahison pour laquelle le corps de Polynice est en train de pourrir au soleil, j'ai la preuve maintenant qu'Etéocle, qui dort dans son tombeau de marbre, se préparait, lui aussi, à la commettre. C'est un hasard si Polynice a réussi son coup avant lui. Nous avions affaire à deux larrons en foire qui se trompaient l'un l'autre en nous trompant et qui se sont égorgés comme deux petits voyous qu'ils étaient, pour un règlement de comptes… Seulement, il s'est trouvé que j'ai eu besoin de faire un héros de l'un d'eux. Alors, j'ai fait rechercher leurs cadavres au milieu des autres. On les a retrouvés embrassés - pour la première fois de leur vie sans doute. Ils s'étaient embrochés mutuellement, et puis la charge de la cavalerie argyenne leur avait passé dessus. Ils étaient en bouillie, Antigone, méconnaissables. J'ai fait ramasser un des corps, le moins abîmé des deux, pour mes funérailles nationales, et j'ai donné l'ordre de laisser pourrir l'autre où il était. Je ne sais même pas lequel. Et je t'assure que cela m'est égal.\n\n*(Il y a un long silence, ils ne bougent pas, sans se regarder, puis Antigone dit doucement :)*\n\n**ANTIGONE**\n\nPourquoi m'avez-vous raconté cela ?\n\n*(Créon se lève, remet sa veste.)*\n\n**CREON**\n\nValait-il mieux te laisser mourir dans cette pauvre histoire ?\n\n**ANTIGONE**\n\nPeut-être. Moi, je croyais.\n\n*(Il y a un silence encore. Créon s'approche d'elle. )*\n\n**CREON**\n\nQu'est-ce que tu vas faire maintenant ?\n\n**ANTIGONE**\n\n*(Se lève comme une somnambule.)*\n\nJe vais remonter dans ma chambre.\n\n**CREON**\n\nNe reste pas trop seule. Va voir Hémon, ce matin. Marie-toi vite.", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le paragraphe suivant par les informations données entre parenthèses : Antigone est une …………… écrite par …………… C'est une pièce de théâtre inspirée du …………… antique d'Antigone, fille d'Œdipe. Elle a été jouée pour la première fois en …………… (mythe / tragédie moderne / 1944 / jean Anouilh)", "correction": "Antigone est une tragédie moderne écrite par Jean Anouilh. C'est une pièce de théâtre inspirée du mythe antique d'Antigone, fille d'Œdipe. Elle a été jouée pour la première fois en 1944. (0.25 pt X 4)"}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Pour situer ce texte : Quelle est la décision prise par le roi Créon concernant l'enterrement de Polynice, le frère d'Antigone ?", "correction": "La décision de n'a pas enterrer Polynice, le frère d'Antigone. (0.5 pt)"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "Antigone a-t-elle accepté cette décision ?", "correction": "Non, elle n'a pas accepté cette décision. (0.5 pt)"}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Qui parle le plus dans ce dialogue ?", "correction": "Créon."}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Pourquoi à votre avis ?", "correction": "convaincre Antigone d'abandonner l'idée d'enterrer Polynice / sauver Antigone."}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Lisez la tirade de Créon de « Mais je vais te dire... » Jusqu'à « (…) au plus offrant. » Relevez une expression qui montre que ce que va dire Créon à Antigone est un secret.", "correction": "« quelque chose que je sais seul » (0.5 pt)"}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "L'information qu'il va lui donner est-elle bonne où mauvaise ?", "correction": "mauvaise. (0.5 pt)"}, {"type": "choix", "numero": "5", "points": 1, "enonce": "« Etéocle, ce prix de vertu, ne valait pas plus cher que Polynice. » cela signifie que : (Recopiez la bonne réponse.)", "options": ["Etéocle est meilleur que Polynice.", "Etéocle est aussi bon que Polynice.", "Etéocle est aussi mauvais que Polynice."], "bonne": 2}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Quelle trahison préparait Etéocle à commettre lui aussi ?", "correction": "faire assassiner son père et/ou vendre Thèbes au plus offrant."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Lisez le passage de : « Nous avions affaire … » jusqu'à « .. l'un d'eux. » Qu'est ce qui justifie, selon Créon, la décision qu'il a prise ?", "correction": "« Seulement, il s'est trouvé que j'ai eu besoin de faire un héros de l'un deux »"}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "Lisez « Alors j'ai fait rechercher … » jusqu'à « ... funérailles nationales. » Relevez deux mots appartenant au champ lexical de la mort.", "correction": "cadavre, corps, funérailles … (0.25 pt x 2)"}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "Quelle est donc la tonalité (le registre) utilisée dans l'énoncé ?", "correction": "tragique. (0.5 pt)"}, {"type": "libre", "numero": "9a", "points": 0.5, "enonce": "Relevez une comparaison dans les didascalies (passages entre parenthèses).", "correction": "« Se lève comme une somnambule »"}, {"type": "libre", "numero": "9b", "points": 0.5, "enonce": "Quel sentiment d'Antigone suggère cette figure?", "correction": "choc, surprise, stupéfaction, bouleversement … (accepter tout sentiment synonyme)"}, {"type": "libre", "numero": "10a", "points": 0.5, "enonce": "Lisez les trois dernières répliques du texte. Que décide Antigone ?", "correction": "remonter dans sa chambre. (0.5 pt)"}, {"type": "libre", "numero": "10b", "points": 0.5, "enonce": "D'après votre lecture de l'œuvre. Antigone sera-t-elle convaincue par Créon ?", "correction": "Non, elle ne sera pas convaincue par Créon. (0.5 pt)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "Certaines personnes ne gardent pas les secrets qu'on leur confie : ils en parlent à tout le monde.\n\nRédigez un texte dans lequel vous exposerez votre point de vue concernant un tel comportement. Appuyez votre opinion par des arguments et des exemples précis.\n\n**NB :** Lors de la correction de votre production écrite, il sera tenu compte des éléments suivants :\n\n- Respect de la consigne, cohérence et structure de l'argumentation\n- Qualité de la langue (vocabulaire, syntaxe, ponctuation, etc.)", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
