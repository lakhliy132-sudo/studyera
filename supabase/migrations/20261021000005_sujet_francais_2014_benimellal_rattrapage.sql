-- Sujet de français, examen régional 2014 (session de rattrapage), académie
-- Béni Mellal-Khénifra, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2014 جهة بني ملال خنيفرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie de Tadla-Azilal (aujourd'hui Béni
-- Mellal-Khénifra) ; session de rattrapage 2014, durée « ساعتان ».
-- Coefficient vide : 04 pour quatre séries, 03 pour sciences économiques
-- et gestion. Le texte de la feuille est numéroté par lignes (les questions
-- 6 et 8 y renvoient) ; la numérotation n'est pas reproduite, les questions
-- citent aussi le début et la fin des passages. Le pronom souligné
-- (« Elles ») est en gras. Le sujet ne chiffre pas les critères de la
-- production écrite ; le corrigé donne 6 et 4 pts.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2014,
  $sujet$rattrapage$sujet$,
  $sujet$Béni Mellal-Khénifra$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

(…) Des yeux sévères se fixèrent un moment sur moi et ma mère reprit :

- **Elles** arrivèrent à Rsif. La foule barrait le chemin. Un marchand vendait des poissons frais un franc soixante-quinze le *Rtal* (…). Les gens se battaient pour se faire servir. Rahma et sa fille furent prises dans les remous de cette cohue. Une fois à l'air libre, Rahma rajusta son *haïk* et constata la disparition de Zineb ! Elle appela, cria, ameuta la foule. Le marchand cessa son trafic, les gens vinrent au secours de la mère affligée, mais la fille restait introuvable.

Rahma revint tout en larmes, nous la consolâmes de notre mieux. Allal le jardinier se dépêcha de prévenir le mari de Rahma. Deux crieurs publics parcoururent la ville en tous sens, donnèrent le signalement de la fille, promettant une récompense à celui qui la ramènerait à ses parents.

Pendant ce temps, nous, faibles femmes, nous ne pouvions que pleurer, offrir notre compassion à la malheureuse mère.

J'avais le cœur gros. Fatma Bziouya et moi nous partîmes à Moulay Idriss. Dans de pareilles circonstances, il faut frapper à la porte de Dieu et de ses saints. Cette porte cède toujours devant les affligés. Une vieille femme surprit notre douleur, elle nous en demanda le motif. Nous la mîmes au courant du triste événement. Elle nous prit par la main et nous emmena à Dar Kitoun, la maison des Idrissides, lieu d'asile de toutes les abandonnées. Là nous trouvâmes Zineb. La *moqqadama* l'avait recueillie et nourrie pour l'amour du Créateur. Elle eut un rial de récompense et nous la remerciâmes pour ses bons soins. Rahma retrouva toute sa gaîté lorsque sa fille lui fut rendue.

- Louange à Dieu ! termina mon père. Prépare le lit à cet enfant, ajouta-t-il. Il tombe de sommeil.

## I. Étude de texte (10 points)

**1.** D'après votre connaissance de l'œuvre, dites si les affirmations suivantes sont vraies ou fausses : **(1 pt)**

| | Vrai | Faux |
|---|---|---|
| Cette œuvre est tirée de La Boîte à Merveilles d'Ahmed Sefrioui. | | |
| L'auteur de cette œuvre a vécu au 19ème siècle. | | |
| Cet auteur a écrit, entre autres, l'Hermine et Le Voyageur sans Bagages. | | |
| Cet auteur est de nationalité marocaine. | | |

**2.** Précisez le genre littéraire auquel appartient l'œuvre dont est extrait ce texte. **(1 pt)**

**3a.** Quels sont les deux personnages qui discutent dans le passage ? **(0.5 pt)**

**3b.** Quel est le sujet de leur conversation ? **(0.5 pt)**

**4a.** « Elles arrivèrent à Rsif. » Quels personnages remplace le pronom souligné dans cette phrase ? [souligné sur la feuille, en gras ici] **(0.5 pt)**

**4b.** Où se trouvent-ils ? **(0.5 pt)**

**5.** Recopiez et complétez le tableau ci-dessous à l'aide des expressions suivantes : la situation initiale / l'événement perturbateur / les péripéties / Le dénouement et la situation finale. (B- Etape du récit pour chaque extrait du passage) **(1pt)**

| Rahma rajusta son haïk et constata la disparition de Zineb | Un marchand vendait des poissons(...) cette cohue | Elle appela, cria, ameuta la foule(...) de toutes les abandonnées. | Là nous trouvâmes Zineb.(...) sa fille lui fut rendue. |
|---|---|---|---|
| | | | |

**6a.** Lisez le passage de : « Rahma revint tout en larmes (...)» à « (..) la malheureuse mère» : Quelle est la réaction des voisins et des voisines suite à l'événement qui est arrivé ? **(0.5 pt)**

**6b.** Relevez un indice qui le montre. **(0.5 pt)**

**7.** Pour quelle raison Fatma Bziouya et la mère du narrateur sont-elles parties à Moulay Driss ? **(1 pt)**

**8a.** Lisez le passage de : « J'avais le cœur gros (...)» à « (...) rendue » : Relevez deux mots appartenant au champ lexical de la religion. **(0.5 pt)**

**8b.** Ce champ lexical met-il en place une atmosphère de calme ou de peur ? **(0.5 pt)**

**9.** Le dénouement de l'histoire est-il heureux ou malheureux ? Justifiez à l'aide d'un indice puisé dans le texte. **(1 pt)**

**10.** L'intention de l'auteur du texte est de mettre en valeur : **(1 pt)**

a- Le désaccord entre les voisins.  
b- L'indifférence face à la souffrance des voisins.  
c- La solidarité entre les voisins.

## II. Production écrite (10 points)

Certains adolescents quittent leur famille suite à des malentendus ou des disputes avec les parents, les frères, les sœurs, . Que pensez-vous de ce comportement ?

Rédigez un texte dans lequel vous défendrez votre point de vue à l'aide d'arguments précis.

**NB :** Lors de la correction de votre production écrite, il sera tenu compte des éléments suivants :

- Respect de la consigne, cohérence et structure de l'argumentation
- Qualité de la langue (vocabulaire, syntaxe, ponctuation, etc.)$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de réponse. Toute réponse imprévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(1 pt)**

| | |
|---|---|
| Cette œuvre est tirée de La Boîte à Merveilles d'Ahmed Sefrioui. | Vrai |
| L'auteur de cette œuvre a vécu au 19ème siècle. | Faux |
| Cet auteur a écrit, entre autres, l'Hermine et Le Voyageur sans Bagages. | Faux |
| Cet auteur est de nationalité marocaine. | Vrai |

**2.** Roman autobiographique / Autobiographie **(1 pt)**

**3a.** La mère du narrateur / le père du narrateur **(0.5 pt)**

**3b.** La disparition et le retour de Zineb **(0.5 pt)**

**4a.** Rahma et sa fille Zineb **(0.5 pt)**

**4b.** à Rsif **(0.5 pt)**

**5.** **(1pt)**

| Rahma rajusta son haïk et constata la disparition de Zineb | Un marchand vendait des poissons(...) cette cohue | Elle appela, cria, ameuta la foule(...) de toutes les abandonnées. | Là nous trouvâmes Zineb.(...) sa fille lui fut rendue. |
|---|---|---|---|
| L'événement perturbateur | La situation initiale | Les péripéties | Le dénouement et la situation finale |

**6a.** Ils aident Rahma à retrouver sa fille / Ils la consolent **(0.5 pt)**

**6b.** « Allal le jardinier se dépêcha de prévenir le mari de Rahma »./ « Deux crieurs publics parcoururent la ville en tous sens...»/ « offrir notre compassion à la malheureuse mère. » **(0.5 pt)**

**7.** Elles sont à la recherche de Zineb. **(1 pt)**

**8a.** Dieu / Créateur. **(0.5 pt)**

**8b.** Une atmosphère de calme. **(0.5 pt)**

**9.** Un dénouement heureux. (0.5 pt) « Là nous trouvâmes Zineb. » ou « Rahma retrouva toute sa gaîté lorsque sa fille lui fut rendue. » (0.5 pt) **(1 pt)**

**10.** c- La solidarité entre les voisins. **(1 pt)**

### II. Production écrite

Lors de la correction de la production écrite, tenir compte des éléments suivants : respect de la consigne, cohérence et structure de l'argumentation : 6pts ; qualité de la langue (vocabulaire, syntaxe, ponctuation, etc.) : 4 pts.$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "(…) Des yeux sévères se fixèrent un moment sur moi et ma mère reprit :\n\n- **Elles** arrivèrent à Rsif. La foule barrait le chemin. Un marchand vendait des poissons frais un franc soixante-quinze le *Rtal* (…). Les gens se battaient pour se faire servir. Rahma et sa fille furent prises dans les remous de cette cohue. Une fois à l'air libre, Rahma rajusta son *haïk* et constata la disparition de Zineb ! Elle appela, cria, ameuta la foule. Le marchand cessa son trafic, les gens vinrent au secours de la mère affligée, mais la fille restait introuvable.\n\nRahma revint tout en larmes, nous la consolâmes de notre mieux. Allal le jardinier se dépêcha de prévenir le mari de Rahma. Deux crieurs publics parcoururent la ville en tous sens, donnèrent le signalement de la fille, promettant une récompense à celui qui la ramènerait à ses parents.\n\nPendant ce temps, nous, faibles femmes, nous ne pouvions que pleurer, offrir notre compassion à la malheureuse mère.\n\nJ'avais le cœur gros. Fatma Bziouya et moi nous partîmes à Moulay Idriss. Dans de pareilles circonstances, il faut frapper à la porte de Dieu et de ses saints. Cette porte cède toujours devant les affligés. Une vieille femme surprit notre douleur, elle nous en demanda le motif. Nous la mîmes au courant du triste événement. Elle nous prit par la main et nous emmena à Dar Kitoun, la maison des Idrissides, lieu d'asile de toutes les abandonnées. Là nous trouvâmes Zineb. La *moqqadama* l'avait recueillie et nourrie pour l'amour du Créateur. Elle eut un rial de récompense et nous la remerciâmes pour ses bons soins. Rahma retrouva toute sa gaîté lorsque sa fille lui fut rendue.\n\n- Louange à Dieu ! termina mon père. Prépare le lit à cet enfant, ajouta-t-il. Il tombe de sommeil.", "questions": [{"type": "vrai-faux", "numero": "1", "points": 1, "enonce": "D'après votre connaissance de l'œuvre, dites si les affirmations suivantes sont vraies ou fausses :", "affirmations": [{"texte": "Cette œuvre est tirée de La Boîte à Merveilles d'Ahmed Sefrioui.", "vrai": true}, {"texte": "L'auteur de cette œuvre a vécu au 19ème siècle.", "vrai": false}, {"texte": "Cet auteur a écrit, entre autres, l'Hermine et Le Voyageur sans Bagages.", "vrai": false}, {"texte": "Cet auteur est de nationalité marocaine.", "vrai": true}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Précisez le genre littéraire auquel appartient l'œuvre dont est extrait ce texte.", "correction": "Roman autobiographique / Autobiographie"}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Quels sont les deux personnages qui discutent dans le passage ?", "correction": "La mère du narrateur / le père du narrateur"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Quel est le sujet de leur conversation ?", "correction": "La disparition et le retour de Zineb"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "« Elles arrivèrent à Rsif. » Quels personnages remplace le pronom souligné dans cette phrase ? [souligné sur la feuille, en gras ici]", "correction": "Rahma et sa fille Zineb"}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Où se trouvent-ils ?", "correction": "à Rsif"}, {"type": "tableau", "numero": "5", "points": 1, "enonce": "Recopiez et complétez le tableau ci-dessous à l'aide des expressions suivantes : la situation initiale / l'événement perturbateur / les péripéties / Le dénouement et la situation finale. (B- Etape du récit pour chaque extrait du passage)", "champs": [{"libelle": "Rahma rajusta son haïk et constata la disparition de Zineb", "reponse": "L'événement perturbateur"}, {"libelle": "Un marchand vendait des poissons(...) cette cohue", "reponse": "La situation initiale"}, {"libelle": "Elle appela, cria, ameuta la foule(...) de toutes les abandonnées.", "reponse": "Les péripéties"}, {"libelle": "Là nous trouvâmes Zineb.(...) sa fille lui fut rendue.", "reponse": "Le dénouement et la situation finale"}]}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "Lisez le passage de : « Rahma revint tout en larmes (...)» à « (..) la malheureuse mère» : Quelle est la réaction des voisins et des voisines suite à l'événement qui est arrivé ?", "correction": "Ils aident Rahma à retrouver sa fille / Ils la consolent"}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "Relevez un indice qui le montre.", "correction": "« Allal le jardinier se dépêcha de prévenir le mari de Rahma »./ « Deux crieurs publics parcoururent la ville en tous sens...»/ « offrir notre compassion à la malheureuse mère. »"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Pour quelle raison Fatma Bziouya et la mère du narrateur sont-elles parties à Moulay Driss ?", "correction": "Elles sont à la recherche de Zineb."}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "Lisez le passage de : « J'avais le cœur gros (...)» à « (...) rendue » : Relevez deux mots appartenant au champ lexical de la religion.", "correction": "Dieu / Créateur."}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "Ce champ lexical met-il en place une atmosphère de calme ou de peur ?", "correction": "Une atmosphère de calme."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Le dénouement de l'histoire est-il heureux ou malheureux ? Justifiez à l'aide d'un indice puisé dans le texte.", "correction": "Un dénouement heureux. (0.5 pt) « Là nous trouvâmes Zineb. » ou « Rahma retrouva toute sa gaîté lorsque sa fille lui fut rendue. » (0.5 pt)"}, {"type": "choix", "numero": "10", "points": 1, "enonce": "L'intention de l'auteur du texte est de mettre en valeur :", "options": ["Le désaccord entre les voisins.", "L'indifférence face à la souffrance des voisins.", "La solidarité entre les voisins."], "bonne": 2}]}, {"titre": "II. Production écrite", "points": 10, "texte": "Certains adolescents quittent leur famille suite à des malentendus ou des disputes avec les parents, les frères, les sœurs, . Que pensez-vous de ce comportement ?\n\nRédigez un texte dans lequel vous défendrez votre point de vue à l'aide d'arguments précis.\n\n**NB :** Lors de la correction de votre production écrite, il sera tenu compte des éléments suivants :\n\n- Respect de la consigne, cohérence et structure de l'argumentation\n- Qualité de la langue (vocabulaire, syntaxe, ponctuation, etc.)", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
