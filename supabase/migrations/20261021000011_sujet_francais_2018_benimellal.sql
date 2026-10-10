-- Sujet de français, examen régional 2018 (session normale), académie
-- Béni Mellal-Khénifra, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2018 جهة بني ملال خنيفرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Sujet à deux textes : Le Dernier Jour d'un condamné (texte 1) et La Boîte
-- à merveilles (texte 2) ; l'œuvre retenue pour le filtre est celle du
-- texte 1. Académie de Béni Mellal-Khénifra, session normale 2018, durée 2
-- heures (en-tête en arabe). Coefficient vide : 04 ou 03 selon la série.
-- Corrigé de la question 7 : chaque croix lue sur le scan.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2018,
  $sujet$normale$sujet$,
  $sujet$Béni Mellal-Khénifra$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

**Texte 1 :**

Je l'ai prise, je l'ai enlevée dans les bras, je l'ai assise sur mes genoux, je l'ai baisée sur ses cheveux.

Pourquoi pas avec sa mère ? —Sa mère est malade, sa grand'mère aussi. C'est bien.

Elle me regardait d'un air étonné ; caressée, embrassée, dévorée de baisers et se laissant faire ; mais jetant de temps en temps un coup d'œil inquiet sur sa bonne, qui pleurait dans le coin.

Enfin, j'ai pu lui parler.

– Marie ! ai-je dit, ma petite Marie !

Je la serrais violemment contre ma poitrine enflée de sanglots. Elle a poussé un petit cri.

– Oh ! vous me faites du mal, monsieur, m'a-t-elle dit.

Monsieur ! il y a bientôt un an qu'elle ne m'a vu, la pauvre enfant. Elle m'a oublié, visage, parole, accent ; (…) Quoi ! déjà effacé de cette mémoire, la seule où j'eusse voulu vivre ! Quoi ! déjà plus père ! être condamné à ne plus entendre ce mot, ce mot de la langue des enfants, si doux qu'il ne peut rester dans celle des hommes : papa !

**Texte 2 :**

Lorsqu'il passa ses mains sous mes aisselles et me souleva à la hauteur de son turban, je repris entièrement confiance et j'éclatai de rire. (…)

Installé sur les genoux de mon père, je lui racontais les événements qui avaient meublé notre vie pendant son absence. Je lui racontais à ma façon, sans ordre, sans cette obéissance aveugle à la stricte vérité des faits qui rend les récits des grandes personnes dépourvus de saveur et de poésie. Je sautais d'une scène à l'autre, je déformais les détails, j'en inventais au besoin. À chaque instant, ma mère essayait de rectifier ce que j'avançais, mon père la priait de nous laisser en paix.

## I. Étude de texte (10 points)

**1.** Contextualiser (2 points) — Recopiez et complétez le tableau suivant (texte 1 : auteur « Victor Hugo », genre « Roman à thèse » ; texte 2 : « La Boîte à Merveilles », siècle « 20ème ») : **(1pt)**

| Texte 1 — Titre de l'œuvre | Texte 1 — Siècle | Texte 2 — Auteur | Texte 2 — Genre littéraire |
|---|---|---|---|
| | | | |

**2.** Dans les deux textes, le récit se déroule-t-il dans un cadre familial ou amical? Justifiez votre réponse. **(1pt)**

**3a.** Analyser (6 points) — Lisez le texte 1 : « caressée, embrassée, dévorée de baisers. » La figure de style utilisée dans ce passage est-elle une antithèse, une métonymie ou une gradation? **(1pt)**

a- une antithèse  
b- une métonymie  
c- une gradation

**3b.** Quel sentiment cette figure de style met-elle en valeur?

**4.** Marie reconnait-elle son père ? Justifiez votre réponse. **(1pt)**

**5.** Dans ce texte, le narrateur annonce la mort symbolique de : (choisissez la bonne réponse) **(1pt)**

a- ses sentiments envers sa fille.  
b- l'image du papa qu'il représente.  
c- l'un de ses proches.

**6.** Lisez le texte 2 : Recopiez et complétez le tableau suivant (Pronom personnel → Le personnage désigné) : **(0,5 pt)**

| Je | Il |
|---|---|
| | |

**7.** Recopiez et complétez le tableau suivant en mettant une croix X dans la case appropriée **(2 pts)**

| | Vrai | Faux |
|---|---|---|
| L'enfant raconte à son père les événements survenus lors de son absence. | | |
| L'enfant ne respecte pas l'ordre des événements racontés. | | |
| L'enfant obéit à la stricte vérité des faits. | | |
| Le père était indifférent au récit de son fils. | | |

**8.** La scène décrite se déroule dans une ambiance de : (Recopiez la bonne réponse) **(0,5pt)**

a- Joie et de bonheur.  
b- Tristesse et de dépit.  
c- Colère et d'indignation.

**9.** Réagir (2 points) — Selon vous, un enfant est-il une source de joie ou de malheur pour ses parents ? Justifiez en vous appuyant sur votre lecture des deux textes. **(2pts)**

## II. Production écrite (10 points)

**Sujet :** Sur un forum internet intitulé « Relations avec les parents », un jeune adolescent a écrit :

« Je ne me sens pas vivre en famille : mon père joue toujours avec son portable et ma mère regarde ses vidéos préférées. »

Réagissez à cette affirmation en rédigeant un texte argumentatif dans lequel vous exprimez votre opinion.

**N.B :** Les éléments suivants seront tenus en compte lors de la correction de votre copie.

- **Discours :** respect de la consigne, cohérence de l'argumentation, structure du texte.
- **Langue :** vocabulaire, syntaxe, ponctuation, orthographe, conjugaison, mise en forme.$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de réponse. Toute réponse imprévue est laissée à l'appréciation des correcteurs.*

### I. Étude de texte

**1.** **(1pt)**

| Texte 1 — Titre de l'œuvre | Texte 1 — Siècle | Texte 2 — Auteur | Texte 2 — Genre littéraire |
|---|---|---|---|
| Le Dernier Jour d'un Condamné | 19ème | Ahmed Sefrioui | Roman autobiographique |

**2.** Un cadre familial./ Le père et son enfant (0,5 ptx2) **(1pt)**

**3a.** la gradation. (0,5 pt) **(1pt)**

**3b.** un sentiment d'amour. (0,5 pt)

**4.** a- non b- Oh! vous me faites du mal, monsieur, m'a-t-elle dit…(accepter toute justification pertinente) (0,5 pt x 2) **(1pt)**

**5.** b- l'image du papa qu'il représente. **(1pt)**

**6.** **(0,5 pt)**

| Je | Il |
|---|---|
| Sidi Mohammed/ le narrateur | Le père du narrateur |

**7.** **(2 pts)**

| | |
|---|---|
| L'enfant raconte à son père les événements survenus lors de son absence. | Vrai |
| L'enfant ne respecte pas l'ordre des événements racontés. | Vrai |
| L'enfant obéit à la stricte vérité des faits. | Faux |
| Le père était indifférent au récit de son fils. | Faux |

**8.** a- Joie et de bonheur. **(0,5pt)**

**9.** Accepter toute réponse pertinemment justifiée. **(2pts)**

### II. Production écrite

Tenir compte des éléments suivants lors de la correction de la copie. **Discours :** conformité de la production à la consigne d'écriture, cohérence de l'argumentation, structure du texte (organisation et progression du texte) …… 5 pts. **Langue :** vocabulaire, syntaxe, ponctuation, orthographe, conjugaison …… 5 pts.$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**Texte 1 :**\n\nJe l'ai prise, je l'ai enlevée dans les bras, je l'ai assise sur mes genoux, je l'ai baisée sur ses cheveux.\n\nPourquoi pas avec sa mère ? —Sa mère est malade, sa grand'mère aussi. C'est bien.\n\nElle me regardait d'un air étonné ; caressée, embrassée, dévorée de baisers et se laissant faire ; mais jetant de temps en temps un coup d'œil inquiet sur sa bonne, qui pleurait dans le coin.\n\nEnfin, j'ai pu lui parler.\n\n– Marie ! ai-je dit, ma petite Marie !\n\nJe la serrais violemment contre ma poitrine enflée de sanglots. Elle a poussé un petit cri.\n\n– Oh ! vous me faites du mal, monsieur, m'a-t-elle dit.\n\nMonsieur ! il y a bientôt un an qu'elle ne m'a vu, la pauvre enfant. Elle m'a oublié, visage, parole, accent ; (…) Quoi ! déjà effacé de cette mémoire, la seule où j'eusse voulu vivre ! Quoi ! déjà plus père ! être condamné à ne plus entendre ce mot, ce mot de la langue des enfants, si doux qu'il ne peut rester dans celle des hommes : papa !\n\n**Texte 2 :**\n\nLorsqu'il passa ses mains sous mes aisselles et me souleva à la hauteur de son turban, je repris entièrement confiance et j'éclatai de rire. (…)\n\nInstallé sur les genoux de mon père, je lui racontais les événements qui avaient meublé notre vie pendant son absence. Je lui racontais à ma façon, sans ordre, sans cette obéissance aveugle à la stricte vérité des faits qui rend les récits des grandes personnes dépourvus de saveur et de poésie. Je sautais d'une scène à l'autre, je déformais les détails, j'en inventais au besoin. À chaque instant, ma mère essayait de rectifier ce que j'avançais, mon père la priait de nous laisser en paix.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Contextualiser (2 points) — Recopiez et complétez le tableau suivant (texte 1 : auteur « Victor Hugo », genre « Roman à thèse » ; texte 2 : « La Boîte à Merveilles », siècle « 20ème ») :", "champs": [{"libelle": "Texte 1 — Titre de l'œuvre", "reponse": "Le Dernier Jour d'un Condamné"}, {"libelle": "Texte 1 — Siècle", "reponse": "19ème"}, {"libelle": "Texte 2 — Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Texte 2 — Genre littéraire", "reponse": "Roman autobiographique"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Dans les deux textes, le récit se déroule-t-il dans un cadre familial ou amical? Justifiez votre réponse.", "correction": "Un cadre familial./ Le père et son enfant (0,5 ptx2)"}, {"type": "choix", "numero": "3a", "points": 0.5, "enonce": "Analyser (6 points) — Lisez le texte 1 : « caressée, embrassée, dévorée de baisers. » La figure de style utilisée dans ce passage est-elle une antithèse, une métonymie ou une gradation?", "options": ["une antithèse", "une métonymie", "une gradation"], "bonne": 2}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Quel sentiment cette figure de style met-elle en valeur?", "correction": "un sentiment d'amour. (0,5 pt)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Marie reconnait-elle son père ? Justifiez votre réponse.", "correction": "a- non b- Oh! vous me faites du mal, monsieur, m'a-t-elle dit…(accepter toute justification pertinente) (0,5 pt x 2)"}, {"type": "choix", "numero": "5", "points": 1, "enonce": "Dans ce texte, le narrateur annonce la mort symbolique de : (choisissez la bonne réponse)", "options": ["ses sentiments envers sa fille.", "l'image du papa qu'il représente.", "l'un de ses proches."], "bonne": 1}, {"type": "tableau", "numero": "6", "points": 0.5, "enonce": "Lisez le texte 2 : Recopiez et complétez le tableau suivant (Pronom personnel → Le personnage désigné) :", "champs": [{"libelle": "Je", "reponse": "Sidi Mohammed/ le narrateur"}, {"libelle": "Il", "reponse": "Le père du narrateur"}]}, {"type": "vrai-faux", "numero": "7", "points": 2, "enonce": "Recopiez et complétez le tableau suivant en mettant une croix X dans la case appropriée", "affirmations": [{"texte": "L'enfant raconte à son père les événements survenus lors de son absence.", "vrai": true}, {"texte": "L'enfant ne respecte pas l'ordre des événements racontés.", "vrai": true}, {"texte": "L'enfant obéit à la stricte vérité des faits.", "vrai": false}, {"texte": "Le père était indifférent au récit de son fils.", "vrai": false}]}, {"type": "choix", "numero": "8", "points": 0.5, "enonce": "La scène décrite se déroule dans une ambiance de : (Recopiez la bonne réponse)", "options": ["Joie et de bonheur.", "Tristesse et de dépit.", "Colère et d'indignation."], "bonne": 0}, {"type": "libre", "numero": "9", "points": 2, "enonce": "Réagir (2 points) — Selon vous, un enfant est-il une source de joie ou de malheur pour ses parents ? Justifiez en vous appuyant sur votre lecture des deux textes.", "correction": "Accepter toute réponse pertinemment justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Sur un forum internet intitulé « Relations avec les parents », un jeune adolescent a écrit :\n\n« Je ne me sens pas vivre en famille : mon père joue toujours avec son portable et ma mère regarde ses vidéos préférées. »\n\nRéagissez à cette affirmation en rédigeant un texte argumentatif dans lequel vous exprimez votre opinion.\n\n**N.B :** Les éléments suivants seront tenus en compte lors de la correction de votre copie.\n\n- **Discours :** respect de la consigne, cohérence de l'argumentation, structure du texte.\n- **Langue :** vocabulaire, syntaxe, ponctuation, orthographe, conjugaison, mise en forme.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
