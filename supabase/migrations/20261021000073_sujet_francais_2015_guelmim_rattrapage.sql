-- Sujet de français, examen régional 2015 (session de rattrapage), académie
-- Guelmim-Oued Noun, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2015 جهة كلميم واد نون »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme « الأكاديمية الجهوية للتربية والتكوين كلميم-السمارة »
-- (Guelmim-Es Semara, aujourd'hui Guelmim-Oued Noun) ; « الدورة الاستدراكية
-- 2015 » (session de rattrapage), « المترشحون الرسميون », durée « ساعتان ».
-- Coefficient 3 pour sciences économiques et gestion, 4 pour lettres et
-- sciences humaines, sciences expérimentales, sciences mathématiques,
-- sciences et technologies : laissé vide.
-- Question 2 (« 1 pt » sur la feuille) découpée en 2a et 2b selon le corrigé
-- (0,5 pt chacune). Le sujet ne donne pas de critères pour la production
-- écrite ; le corrigé donne 5 et 5 pts.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2015,
  $sujet$rattrapage$sujet$,
  $sujet$Guelmim-Oued Noun$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

Le maître ouvrit les yeux, bâilla, distingua au milieu de toutes ces voix, celle qui déformait une phrase vénérée, rectifia le mot défectueux et chercha une position confortable pour reprendre son somme. Mais il remarqua que le soleil avait disparu. Il se frotta les yeux, son visage s'éclaira et la baguette nous fit signe de nous rapprocher. Le bruit cessa brutalement. Installés tout contre l'estrade du *fqih*, nous chantâmes la première sourate du Coran. Les plus petits comme les plus grands la connaissaient. Nous ne quittions jamais l'école le soir sans la chanter. Le vendredi nous la faisions suivre de quelques vers de *Bnou Achir* consacrés au rituel des ablutions et d'une ou deux prières pour implorer la miséricorde de Dieu en faveur de nos parents et de nos maîtres morts et vivants.

Nous étions heureux quand commençaient ces litanies. Elles signifiaient la fin de nos souffrances, le retour à la maison, la course dans les ruelles humides. Enfin, le maître nous libéra un par un. Avant de partir nous nous dirigions vers l'estrade pour le saluer une dernière fois et lui baiser la main.

Chacun prit ses babouches de dessus une étagère placée à l'entrée de la salle d'école et s'en alla.

Il faisait déjà sombre quand j'arrivai à la maison.

En attendant le retour de mon père, je mangeai un morceau de pain sec, sortis ma Boîte à Merveilles et me plongeai dans la contemplation de mes richesses. Le cabochon de verre me fascinait toujours ; je ne cessais de le toucher, de le regarder par transparence, de le serrer avec tendresse contre ma joue.

## I. Étude de texte (10 points)

**1.** De quelle œuvre ce texte est-il extrait ? Quel est le genre de l'œuvre ? Qui en est l'auteur ? Quelle est la date de parution de l'œuvre ? **(1 pt)**

**2a.** D'après votre lecture des passages qui précèdent ce texte, dans quel lieu le narrateur a-t-il accompagné sa mère et Lalla Aïcha ? **(1 pt)**

**2b.** Pourquoi n'est-il pas allé au *Msid* mercredi et jeudi ?

**3.** Ce texte est plutôt : (Justifiez votre réponse.) **(1 pt)**

a- narratif/descriptif.  
b- argumentatif.  
c- injonctif.

**4.** D'après le texte, en quoi le programme du vendredi diffère-t-il de celui des autres jours de la semaine ? **(1 pt)**

**5.** Relevez du texte deux indices qui montrent que le *fqih* manque de sérieux dans son travail. **(1 pt)**

**6.** Quels sentiments le narrateur éprouvait-il à la sortie du *Msid* ? **(1 pt)**

**7.** Relevez quatre termes appartenant au champ lexical de l'école coranique. **(1 pt)**

**8.** Donnez un titre à ce texte. **(1 pt)**

**9.** L'utilisation de « la baguette » par le *fqih* est-elle indispensable (nécessaire) ? Justifiez votre réponse. **(1 pt)**

**10.** A votre avis, les objets de la Boîte à Merveilles sont-ils d'une grande valeur ou non ? Pourquoi ? **(1 pt)**

## II. Production écrite (10 points)

**Sujet :**

Ces derniers temps, la violence dans les établissements scolaires devient un phénomène de plus en plus inquiétant.

Quelles sont les causes principales de cette violence ? Comment peut-on à votre avis y mettre fin ?$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de correction (à titre indicatif). Toute réponse non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** La boîte à merveilles. (0,25 pt) Roman autobiographique. (0,25 pt) Ahmed SEFRIOUI. (0,25 pt) Date de parution : 1954 (0,25 pt) **(1 pt)**

**2a.** Sidi Ali Boughaleb. Accepter : Saint, Mausolée. (0,5 pt) **(1 pt)**

**2b.** A cause de sa fatigue (0,5 pt)

**3.** Narratif/descriptif. (0,5pt) Justification : emploi des temps verbaux, raconte un épisode de sa vie, évoque ses souvenirs. Présence de séquences descriptives. (0,5pt) **(1 pt)**

**4.** Lecture de *Bnou Achir*, prières pour implorer la miséricorde de Dieu. (0,5pt x2) **(1 pt)**

**5.** Somnolait, dormait, bâillait. **(1 pt)**

**6.** Joie, bonheur, sentiment de liberté… **(1 pt)**

**7.** Versets coraniques, planchette, baguette, *fqih*, sourates du Coran, *Bnou Achir*, prières… (0,25 pt x4) **(1 pt)**

**8.** Une journée au *Msid*. **(1 pt)**

**9.** Réponse justifiée. **(1 pt)**

**10.** Point de vue justifié. **(1 pt)**

### II. Production écrite

**Critères d'évaluation du discours : 5 pts**

- Conformité de la production à la consigne d'écriture
- Cohérence de l'argumentation
- Organisation et progression du texte

**Critères d'évaluation de la langue : 5 pts**

- Correction de la langue (ponctuation, orthographe, syntaxe, vocabulaire, conjugaison)$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Le maître ouvrit les yeux, bâilla, distingua au milieu de toutes ces voix, celle qui déformait une phrase vénérée, rectifia le mot défectueux et chercha une position confortable pour reprendre son somme. Mais il remarqua que le soleil avait disparu. Il se frotta les yeux, son visage s'éclaira et la baguette nous fit signe de nous rapprocher. Le bruit cessa brutalement. Installés tout contre l'estrade du *fqih*, nous chantâmes la première sourate du Coran. Les plus petits comme les plus grands la connaissaient. Nous ne quittions jamais l'école le soir sans la chanter. Le vendredi nous la faisions suivre de quelques vers de *Bnou Achir* consacrés au rituel des ablutions et d'une ou deux prières pour implorer la miséricorde de Dieu en faveur de nos parents et de nos maîtres morts et vivants.\n\nNous étions heureux quand commençaient ces litanies. Elles signifiaient la fin de nos souffrances, le retour à la maison, la course dans les ruelles humides. Enfin, le maître nous libéra un par un. Avant de partir nous nous dirigions vers l'estrade pour le saluer une dernière fois et lui baiser la main.\n\nChacun prit ses babouches de dessus une étagère placée à l'entrée de la salle d'école et s'en alla.\n\nIl faisait déjà sombre quand j'arrivai à la maison.\n\nEn attendant le retour de mon père, je mangeai un morceau de pain sec, sortis ma Boîte à Merveilles et me plongeai dans la contemplation de mes richesses. Le cabochon de verre me fascinait toujours ; je ne cessais de le toucher, de le regarder par transparence, de le serrer avec tendresse contre ma joue.", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "De quelle œuvre ce texte est-il extrait ? Quel est le genre de l'œuvre ? Qui en est l'auteur ? Quelle est la date de parution de l'œuvre ?", "correction": "La boîte à merveilles. (0,25 pt) Roman autobiographique. (0,25 pt) Ahmed SEFRIOUI. (0,25 pt) Date de parution : 1954 (0,25 pt)"}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "D'après votre lecture des passages qui précèdent ce texte, dans quel lieu le narrateur a-t-il accompagné sa mère et Lalla Aïcha ?", "correction": "Sidi Ali Boughaleb. Accepter : Saint, Mausolée. (0,5 pt)"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "Pourquoi n'est-il pas allé au *Msid* mercredi et jeudi ?", "correction": "A cause de sa fatigue (0,5 pt)"}, {"type": "choix", "numero": "3", "points": 1, "enonce": "Ce texte est plutôt : (Justifiez votre réponse.)", "options": ["narratif/descriptif.", "argumentatif.", "injonctif."], "bonne": 0}, {"type": "libre", "numero": "4", "points": 1, "enonce": "D'après le texte, en quoi le programme du vendredi diffère-t-il de celui des autres jours de la semaine ?", "correction": "Lecture de *Bnou Achir*, prières pour implorer la miséricorde de Dieu. (0,5pt x2)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Relevez du texte deux indices qui montrent que le *fqih* manque de sérieux dans son travail.", "correction": "Somnolait, dormait, bâillait."}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Quels sentiments le narrateur éprouvait-il à la sortie du *Msid* ?", "correction": "Joie, bonheur, sentiment de liberté…"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez quatre termes appartenant au champ lexical de l'école coranique.", "correction": "Versets coraniques, planchette, baguette, *fqih*, sourates du Coran, *Bnou Achir*, prières… (0,25 pt x4)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Donnez un titre à ce texte.", "correction": "Une journée au *Msid*."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "L'utilisation de « la baguette » par le *fqih* est-elle indispensable (nécessaire) ? Justifiez votre réponse.", "correction": "Réponse justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "A votre avis, les objets de la Boîte à Merveilles sont-ils d'une grande valeur ou non ? Pourquoi ?", "correction": "Point de vue justifié."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nCes derniers temps, la violence dans les établissements scolaires devient un phénomène de plus en plus inquiétant.\n\nQuelles sont les causes principales de cette violence ? Comment peut-on à votre avis y mettre fin ?", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
