-- Sujet de français, examen régional 2014 (session normale), académie
-- Béni Mellal-Khénifra, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2014 جهة بني ملال خنيفرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Sujet à deux textes : Le Dernier Jour d'un condamné (texte 1) et
-- Antigone (texte 2) ; l'œuvre retenue pour le filtre est celle du texte 1.
-- L'en-tête (en arabe) nomme l'académie de Tadla-Azilal (aujourd'hui Béni
-- Mellal-Khénifra) ; session normale 2014, durée « ساعتان ». Coefficient
-- vide : 04 pour quatre séries, 03 pour sciences économiques et gestion.
-- Le pronom souligné du texte 2 (« Vous ») est en gras. Le sujet ne chiffre
-- pas les critères de la production écrite ; le corrigé donne 6 et 4 pts.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2014,
  $sujet$normale$sujet$,
  $sujet$Béni Mellal-Khénifra$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

**TEXTE 1 :**

Ô ma grâce ! ma grâce ! on me fera peut-être grâce. Le roi ne m'en veut pas. Qu'on aille chercher mon avocat ! vite l'avocat ! Je veux bien des galères. Cinq ans de galères, et que tout soit dit, - ou vingt ans, - ou à perpétuité avec le fer rouge. Mais grâce de la vie !

Un forçat, cela marche encore, cela va et vient, cela voit le soleil.

**TEXTE 2 :**

**Antigone**

**Vous** me dégoûtez tous avec votre bonheur ! Avec votre vie qu'il faut aimer coûte que coûte. On dirait des chiens qui lèchent tout ce qu'ils trouvent. Et cette petite chance pour tous les jours, si on n'est pas trop exigeant. Moi, je veux tout, tout de suite, - et que ce soit entier- ou alors je refuse ! Je ne veux pas être modeste, moi, et me contenter d'un petit morceau si j'ai été bien sage. Je veux être sûre de tout aujourd'hui et que cela soit aussi beau que quand j'étais petite - ou mourir.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant (texte 2 : Titre de l'œuvre « Antigone », Genre littéraire « Tragédie moderne ») : **(0.25 x 4)**

| Texte 1 — Titre de l'œuvre | Texte 1 — Auteur | Texte 1 — Genre littéraire | Texte 2 — Auteur |
|---|---|---|---|
| | | | |

**2a.** Questions sur le premier texte (texte 1) : Qui est le personnage principal dans ce texte ? **(0.5 pt)**

**2b.** Où se trouve-t-il ? **(0.5 pt)**

**2c.** Que demande-t-il au début du texte ? **(0.5 pt)**

**3.** Le narrateur, est-il très attaché à la vie ou à la mort ? Justifiez à partir du texte. **(0.5 pt + 0.5 pt)**

**4a.** Quel type de phrase domine dans le texte ? **(0.5 pt)**

**4b.** Quel sentiment du personnage traduit-il ? **(0.5 pt)**

**5.** Questions sur le second texte (texte 2) : À qui renvoie le pronom souligné dans le texte ? [souligné sur la feuille, en gras ici] **(1 pt)**

**6a.** Quel sentiment éprouve Antigone au début du texte ? **(0.5 pt)**

**6b.** Relevez une comparaison qui le montre. **(0.5 pt)**

**7.** Selon Antigone, le bonheur doit-il être total ou partiel ? Justifiez votre réponse à partir du texte. **(1 pt)**

**8.** Questions sur les deux textes (textes 1 et 2) : Le thème commun présent dans les deux textes est plutôt : (Recopiez la bonne réponse) **(1 pt)**

a- La vie et la mort.  
b- La réussite et l'échec.  
c- La beauté et la laideur.

**9.** Dans les deux textes deux registres littéraires (tonalités) dominent. Lesquels ? (Recopiez la bonne réponse) **(0.5 pt)**

a- Comique et ironique.  
b- Pathétique et tragique.  
c- Fantastique et satirique.

**10.** Les deux personnages des deux textes ont-ils la même attitude devant la mort ? Justifiez votre réponse. **(0.5 pt x 2)**

## II. Production écrite (10 points)

Dans le but d'une future réinsertion sociale des prisonniers, on a tendance, aujourd'hui, à intégrer la formation professionnelle dans les prisons (apprentissage des métiers comme la menuiserie, la maçonnerie, la mécanique, l'électricité...).

Rédigez un texte dans lequel vous défendrez votre point de vue à ce sujet en vous appuyant sur des arguments pertinents.

**NB :** Lors de la correction de votre production écrite, il sera tenu compte des éléments suivants :

- Respect de la consigne, cohérence et structure de l'argumentation
- Qualité de la langue (vocabulaire, syntaxe, ponctuation, etc.)$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de réponse. Toute réponse imprévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(0.25 x 4)**

| Texte 1 — Titre de l'œuvre | Texte 1 — Auteur | Texte 1 — Genre littéraire | Texte 2 — Auteur |
|---|---|---|---|
| Le Dernier Jour d'un Condamné | Victor Hugo | Roman à thèse | Jean Anouilh. |

**2a.** Le condamné **(0.5 pt)**

**2b.** en prison/dans la conciergerie/ dans sa cellule. **(0.5 pt)**

**2c.** Il demande sa grâce. **(0.5 pt)**

**3.** Il est très attaché à la vie. (0.5 pt) -« Je veux bien des galères./ Cinq ans de galères(...)/.grâce de la vie. ! » « Un forçat cela marche encore » (0.5 pt) **(0.5 pt + 0.5 pt)**

**4a.** la phrase exclamative **(0.5 pt)**

**4b.** panique, angoisse, terreur (accepter toute réponse pertinente) **(0.5 pt)**

**5.** Créon et les autres / tout le monde. **(1 pt)**

**6a.** le dégoût / la colère / la haine **(0.5 pt)**

**6b.** « On dirait des chiens qui lèchent tout ce qu'ils trouvent. » **(0.5 pt)**

**7.** un bonheur total (0.5 pt) - « Moi, je veux tout, tout de suite, - et que ce soit entier- ou alors je refuse » (0.5 pt) **(1 pt)**

**8.** a- La vie et la mort. **(1 pt)**

**9.** b- Pathétique et tragique. **(0.5 pt)**

**10.** Non. / Antigone est courageuse devant la mort /le condamné manque de courage devant la mort. **(0.5 pt x 2)**

### II. Production écrite

Lors de la correction de la production écrite, tenir compte des éléments suivants : respect de la consigne, cohérence et structure de l'argumentation : 6pts ; qualité de la langue (vocabulaire, syntaxe, ponctuation, etc.) : 4 pts.$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement les deux textes suivants.", "texte": "**TEXTE 1 :**\n\nÔ ma grâce ! ma grâce ! on me fera peut-être grâce. Le roi ne m'en veut pas. Qu'on aille chercher mon avocat ! vite l'avocat ! Je veux bien des galères. Cinq ans de galères, et que tout soit dit, - ou vingt ans, - ou à perpétuité avec le fer rouge. Mais grâce de la vie !\n\nUn forçat, cela marche encore, cela va et vient, cela voit le soleil.\n\n**TEXTE 2 :**\n\n**Antigone**\n\n**Vous** me dégoûtez tous avec votre bonheur ! Avec votre vie qu'il faut aimer coûte que coûte. On dirait des chiens qui lèchent tout ce qu'ils trouvent. Et cette petite chance pour tous les jours, si on n'est pas trop exigeant. Moi, je veux tout, tout de suite, - et que ce soit entier- ou alors je refuse ! Je ne veux pas être modeste, moi, et me contenter d'un petit morceau si j'ai été bien sage. Je veux être sûre de tout aujourd'hui et que cela soit aussi beau que quand j'étais petite - ou mourir.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant (texte 2 : Titre de l'œuvre « Antigone », Genre littéraire « Tragédie moderne ») :", "champs": [{"libelle": "Texte 1 — Titre de l'œuvre", "reponse": "Le Dernier Jour d'un Condamné"}, {"libelle": "Texte 1 — Auteur", "reponse": "Victor Hugo"}, {"libelle": "Texte 1 — Genre littéraire", "reponse": "Roman à thèse"}, {"libelle": "Texte 2 — Auteur", "reponse": "Jean Anouilh."}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Questions sur le premier texte (texte 1) : Qui est le personnage principal dans ce texte ?", "correction": "Le condamné"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "Où se trouve-t-il ?", "correction": "en prison/dans la conciergerie/ dans sa cellule."}, {"type": "libre", "numero": "2c", "points": 0.5, "enonce": "Que demande-t-il au début du texte ?", "correction": "Il demande sa grâce."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Le narrateur, est-il très attaché à la vie ou à la mort ? Justifiez à partir du texte.", "correction": "Il est très attaché à la vie. (0.5 pt) -« Je veux bien des galères./ Cinq ans de galères(...)/.grâce de la vie. ! » « Un forçat cela marche encore » (0.5 pt)"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Quel type de phrase domine dans le texte ?", "correction": "la phrase exclamative"}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Quel sentiment du personnage traduit-il ?", "correction": "panique, angoisse, terreur (accepter toute réponse pertinente)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Questions sur le second texte (texte 2) : À qui renvoie le pronom souligné dans le texte ? [souligné sur la feuille, en gras ici]", "correction": "Créon et les autres / tout le monde."}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "Quel sentiment éprouve Antigone au début du texte ?", "correction": "le dégoût / la colère / la haine"}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "Relevez une comparaison qui le montre.", "correction": "« On dirait des chiens qui lèchent tout ce qu'ils trouvent. »"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Selon Antigone, le bonheur doit-il être total ou partiel ? Justifiez votre réponse à partir du texte.", "correction": "un bonheur total (0.5 pt) - « Moi, je veux tout, tout de suite, - et que ce soit entier- ou alors je refuse » (0.5 pt)"}, {"type": "choix", "numero": "8", "points": 1, "enonce": "Questions sur les deux textes (textes 1 et 2) : Le thème commun présent dans les deux textes est plutôt : (Recopiez la bonne réponse)", "options": ["La vie et la mort.", "La réussite et l'échec.", "La beauté et la laideur."], "bonne": 0}, {"type": "choix", "numero": "9", "points": 0.5, "enonce": "Dans les deux textes deux registres littéraires (tonalités) dominent. Lesquels ? (Recopiez la bonne réponse)", "options": ["Comique et ironique.", "Pathétique et tragique.", "Fantastique et satirique."], "bonne": 1}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Les deux personnages des deux textes ont-ils la même attitude devant la mort ? Justifiez votre réponse.", "correction": "Non. / Antigone est courageuse devant la mort /le condamné manque de courage devant la mort."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "Dans le but d'une future réinsertion sociale des prisonniers, on a tendance, aujourd'hui, à intégrer la formation professionnelle dans les prisons (apprentissage des métiers comme la menuiserie, la maçonnerie, la mécanique, l'électricité...).\n\nRédigez un texte dans lequel vous défendrez votre point de vue à ce sujet en vous appuyant sur des arguments pertinents.\n\n**NB :** Lors de la correction de votre production écrite, il sera tenu compte des éléments suivants :\n\n- Respect de la consigne, cohérence et structure de l'argumentation\n- Qualité de la langue (vocabulaire, syntaxe, ponctuation, etc.)", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
