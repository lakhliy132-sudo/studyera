-- Sujet de français, examen régional 2024, académie de
-- Casablanca-Settat, sur Antigone de Jean Anouilh. Transcrit mot pour
-- mot depuis les six pages fournies par l'utilisateur.
--
-- Complété ensuite d'après le PDF officiel de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2024 جهة الدار
-- البيضاء سطات », 10 pages : sujet sur 8 pages et « CORRIGÉ ET BARÈME »
-- sur 2) :
-- - l'en-tête : « الدورة العادية 2024 » (session normale), « مدة
--   الإنجاز : 2 ساعات » (2 heures), « الشعبة : آداب، علوم، اقتصاد،
--   تكنولوجيا، فنون تطبيقية », traduit en français pour la filière ;
-- - le corrigé, recopié tel quel (« Les éléments de réponse sont donnés
--   à titre indicatif »), question par question et en entier dans
--   corrige_mdx.
-- Le coefficient reste vide : « المعامل 3 أو 4 », deux valeurs pour une
-- seule colonne.
--
-- Les sous-questions sans lettre sur la feuille (6 et 8) sont numérotées
-- 6a/6b et 8a/8b dans le mode entraînement ; le barème du corrigé les
-- note bien 0,5 + 0,5.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2024,
  $sujet$normale$sujet$,
  $sujet$Casablanca-Settat$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Lettres, sciences, économie, technologie, arts appliqués$sujet$,
  120,
  $sujet$## Texte

**LE GARDE**

Si vous avez besoin de quelque chose, c'est différent. Je peux appeler.

**ANTIGONE**

Non. Je voudrais seulement que tu remettes une lettre à quelqu'un quand je serai morte.

**LE GARDE**

Comment ça, une lettre ?

**ANTIGONE**

Une lettre que j'écrirai.

**LE GARDE**

Ah ! ça non ! Pas d'histoires ! Une lettre ! Comme vous y allez, vous ! Je risquerais gros, moi, à ce petit jeu-là !

**ANTIGONE**

Je te donnerai cet anneau si tu acceptes.

**LE GARDE**

C'est de l'or ?

**ANTIGONE**

Oui. C'est de l'or.

**LE GARDE**

Vous comprenez, si on me fouille, moi, c'est le conseil de guerre. Cela vous est égal à vous ? *(Il regarde encore la bague.)* Ce que je peux, si vous voulez, c'est écrire sur mon carnet ce que vous auriez voulu dire. Après, j'arracherai la page. De mon écriture, ce n'est pas pareil.

**ANTIGONE**, *a les yeux fermés : elle murmure avec un pauvre rictus.*

Ton écriture… *(Elle a un petit frisson.)* C'est trop laid, tout cela, tout est trop laid.

**LE GARDE**, *vexé, fait mine de rendre la bague.*

Vous savez, si vous ne voulez pas, moi…

**ANTIGONE**

Si. Garde la bague et écris. Mais fais vite… J'ai peur que nous n'ayons plus le temps…

Ecris : « Mon chéri…»

**LE GARDE**, *qui a pris son carnet et suce sa mine.*

C'est pour votre bon ami ?

**ANTIGONE**

Mon chéri, j'ai voulu mourir et tu ne vas peut-être plus m'aimer…

**LE GARDE**, *répète lentement de sa grosse voix en écrivant.*

« Mon chéri, j'ai voulu mourir et tu ne vas peut-être plus m'aimer…»

**ANTIGONE**

Et Créon avait raison, c'est terrible, maintenant, à côté de cet homme, je ne sais plus pourquoi je meurs. J'ai peur…

**LE GARDE**, *qui peine sur sa dictée.*

« Créon avait raison, c'est terrible…»

**ANTIGONE**

Oh ! Hémon, notre petit garçon. Je le comprends seulement maintenant combien c'était simple de vivre…

**LE GARDE**, *s'arrête.*

Eh ! Dites, vous allez trop vite. Comment voulez-vous que j'écrive ? Il faut le temps tout de même…

**ANTIGONE** — Où en étais-tu ?

**LE GARDE**, *se relit.*

« C'est terrible maintenant à côté de cet homme… »

**ANTIGONE**

Je ne sais plus pourquoi je meurs.

## Étude de texte (10 points)

Lisez attentivement le texte et répondez aux questions suivantes :

1- D'après votre connaissance de l'œuvre, complétez le tableau suivant : **(0.25 x 4)**

| Titre | Auteur | Genre | Siècle |
|---|---|---|---|
| | | | |

2- Pour situer ce passage, répondez à ces deux questions : **(0.5 x 2)**

a- Les Gardes ont arrêté Antigone. Pourquoi ?

b- A qui est destinée la lettre que fait écrire Antigone ?

3- Compléter par Vrai ou Faux : **(0.25 x 4)**

| Antigone voulait… | Vrai | Faux |
|---|---|---|
| ⇨ Exprimer son amour à Hémon. | | |
| ⇨ Avouer qu'elle aurait aimé vivre. | | |
| ⇨ Dire pardon à Créon. | | |
| ⇨ Lui demander d'épouser Ismène après sa mort. | | |

4- Est-ce que Le Garde a vite accepté la demande ? Justifiez votre réponse. **(0.5 pt x2)**

5- Antigone pense-t-elle qu'elle ne va plus être aimée ? Justifiez votre réponse **(0.5x2pt)**

6- **« Oh ! Hémon, notre petit garçon. Je le comprends seulement maintenant combien c'était simple de vivre… »**

Quel est le sentiment exprimé par Antigone dans cette réplique ? **(0.5 point)**

Que reflète ce sentiment ? **(0.5 point)**

7- « Le Garde, *répète lentement de sa grosse voix en écrivant.* »

Ces répétitions donnent à ces propos une tonalité : comique, tragique ou satirique ? Entoure la bonne réponse. **(1 pt)**

8- *« Je ne sais plus pourquoi je meurs »* : cette phrase est répétée deux fois.

Quelle est cette figure de style ? **(0.5 pt)**

Que veut-elle nous transmettre sur Antigone ? **(0.5 pt)**

9- Antigone a dit : *« Et Créon avait raison… »*

Pensez-vous qu'elle a changé d'avis ? Développez votre réponse en deux ou trois lignes. **1pt**

10- À partir de votre lecture de la pièce, Antigone a toujours dit *Non* à Créon.

Comment vous la trouvez dans ce passage ? Développez votre réponse en deux ou trois lignes. **(1 point)**

## Production écrite (10 points)

**Sujet :** Dans *Antigone* de Jean Anouilh, personne n'a réussi à convaincre ou à persuader l'héroïne de renoncer à ses idées.

Pensez-vous que nous devons nous accrocher aveuglément à nos idées et nos convictions, ou plutôt, faire des concessions?

Rédigez un texte argumentatif dans lequel vous développez votre point de vue en vous basant sur des arguments et des exemples précis.

***Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction***

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1point. |
| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |$sujet$,
  $sujet$## Corrigé et barème

*Les éléments de réponse sont donnés à titre indicatif.*

### Étude de texte

**1-** D'après votre connaissance de l'œuvre, complétez le tableau suivant : **(0.25 x 4)**

| Titre | Auteur | Genre | Siècle |
|---|---|---|---|
| Antigone | Jean Anouilh | Une tragédie moderne | Vingtième |

**2-** Pour situer ce passage, répondez à ces deux questions : **(0.5 x 2)**

a- Les Gardes ont arrêté Antigone car elle était en train d'enterrer son frère. **(0.5 pt)**

b- À Hémon. **(0.5 pt)**

**3-** Compléter par Vrai ou Faux : **(0.25 x 4)**

| Antigone voulait… | Vrai | Faux |
|---|---|---|
| ⇨ Exprimer son amour à Hémon. | ✓ | |
| ⇨ Avouer qu'elle aurait aimé vivre. | ✓ | |
| ⇨ Dire pardon à Créon. | | ✓ |
| ⇨ Lui demander d'épouser Ismène après sa mort. | | ✓ |

**4-** Le Garde n'a pas vite accepté l'offre d'Antigone. **(0.5pt x2)**
Justification : Ah! ça non! Pas d'histoires ! Une lettre ! Comme vous y allez, vous ! Je risquerais gros, moi, à ce petit jeu-là ! / *vexé, fait mine de rendre la bague*, etc.

**5-** Oui elle pense ainsi **(0.5pt)**
Justification : Mon chéri, j'ai voulu mourir et tu ne vas peut-être plus m'aimer… **(0.5 pt)**

**6-** Dans cette réplique Antigone exprime le sentiment du regret. **(0.5pt)**
Ce sentiment reflète une certaine faiblesse, une nostalgie… (acceptez toute réponse plausible)

**7-** Tonalité comique **1pt**

**8-** Acceptez anaphore /répétition **(0.5)**
Antigone a peur / elle regrette / elle se dit que c'est absurde, etc **(0.5pt)**

**9-** Acceptez toute réponse bien formulée et argumentée **(1pt)**

**10-** Acceptez toute réponse bien formulée et argumentée

### Production écrite

Veuillez corriger les productions écrites à la lumière des critères suivants en **accordant la note finale sur la base des notes partielles attribuées et dûment reportées sur la copie du candidat ou de la candidate :**

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1point. |
| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |$sujet$,
  $sujet${"parties": [{"titre": "Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions suivantes.", "texte": "**LE GARDE**\n\nSi vous avez besoin de quelque chose, c'est différent. Je peux appeler.\n\n**ANTIGONE**\n\nNon. Je voudrais seulement que tu remettes une lettre à quelqu'un quand je serai morte.\n\n**LE GARDE**\n\nComment ça, une lettre ?\n\n**ANTIGONE**\n\nUne lettre que j'écrirai.\n\n**LE GARDE**\n\nAh ! ça non ! Pas d'histoires ! Une lettre ! Comme vous y allez, vous ! Je risquerais gros, moi, à ce petit jeu-là !\n\n**ANTIGONE**\n\nJe te donnerai cet anneau si tu acceptes.\n\n**LE GARDE**\n\nC'est de l'or ?\n\n**ANTIGONE**\n\nOui. C'est de l'or.\n\n**LE GARDE**\n\nVous comprenez, si on me fouille, moi, c'est le conseil de guerre. Cela vous est égal à vous ? *(Il regarde encore la bague.)* Ce que je peux, si vous voulez, c'est écrire sur mon carnet ce que vous auriez voulu dire. Après, j'arracherai la page. De mon écriture, ce n'est pas pareil.\n\n**ANTIGONE**, *a les yeux fermés : elle murmure avec un pauvre rictus.*\n\nTon écriture… *(Elle a un petit frisson.)* C'est trop laid, tout cela, tout est trop laid.\n\n**LE GARDE**, *vexé, fait mine de rendre la bague.*\n\nVous savez, si vous ne voulez pas, moi…\n\n**ANTIGONE**\n\nSi. Garde la bague et écris. Mais fais vite… J'ai peur que nous n'ayons plus le temps…\n\nEcris : « Mon chéri…»\n\n**LE GARDE**, *qui a pris son carnet et suce sa mine.*\n\nC'est pour votre bon ami ?\n\n**ANTIGONE**\n\nMon chéri, j'ai voulu mourir et tu ne vas peut-être plus m'aimer…\n\n**LE GARDE**, *répète lentement de sa grosse voix en écrivant.*\n\n« Mon chéri, j'ai voulu mourir et tu ne vas peut-être plus m'aimer…»\n\n**ANTIGONE**\n\nEt Créon avait raison, c'est terrible, maintenant, à côté de cet homme, je ne sais plus pourquoi je meurs. J'ai peur…\n\n**LE GARDE**, *qui peine sur sa dictée.*\n\n« Créon avait raison, c'est terrible…»\n\n**ANTIGONE**\n\nOh ! Hémon, notre petit garçon. Je le comprends seulement maintenant combien c'était simple de vivre…\n\n**LE GARDE**, *s'arrête.*\n\nEh ! Dites, vous allez trop vite. Comment voulez-vous que j'écrive ? Il faut le temps tout de même…\n\n**ANTIGONE** — Où en étais-tu ?\n\n**LE GARDE**, *se relit.*\n\n« C'est terrible maintenant à côté de cet homme… »\n\n**ANTIGONE**\n\nJe ne sais plus pourquoi je meurs.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "D'après votre connaissance de l'œuvre, complétez le tableau suivant.", "champs": [{"libelle": "Titre", "reponse": "Antigone"}, {"libelle": "Auteur", "reponse": "Jean Anouilh"}, {"libelle": "Genre", "reponse": "Une tragédie moderne"}, {"libelle": "Siècle", "reponse": "Vingtième"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Pour situer ce passage : Les Gardes ont arrêté Antigone. Pourquoi ?", "correction": "Les Gardes ont arrêté Antigone car elle était en train d'enterrer son frère."}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "A qui est destinée la lettre que fait écrire Antigone ?", "correction": "À Hémon."}, {"type": "vrai-faux", "numero": "3", "points": 1, "enonce": "Compléter par Vrai ou Faux : Antigone voulait…", "affirmations": [{"texte": "Exprimer son amour à Hémon.", "vrai": true}, {"texte": "Avouer qu'elle aurait aimé vivre.", "vrai": true}, {"texte": "Dire pardon à Créon.", "vrai": false}, {"texte": "Lui demander d'épouser Ismène après sa mort.", "vrai": false}]}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Est-ce que Le Garde a vite accepté la demande ? Justifiez votre réponse.", "correction": "Le Garde n'a pas vite accepté l'offre d'Antigone. Justification : Ah! ça non! Pas d'histoires ! Une lettre ! Comme vous y allez, vous ! Je risquerais gros, moi, à ce petit jeu-là ! / vexé, fait mine de rendre la bague, etc."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Antigone pense-t-elle qu'elle ne va plus être aimée ? Justifiez votre réponse.", "correction": "Oui elle pense ainsi. Justification : Mon chéri, j'ai voulu mourir et tu ne vas peut-être plus m'aimer…"}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "« Oh ! Hémon, notre petit garçon. Je le comprends seulement maintenant combien c'était simple de vivre… » Quel est le sentiment exprimé par Antigone dans cette réplique ?", "correction": "Dans cette réplique Antigone exprime le sentiment du regret."}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "Que reflète ce sentiment ?", "correction": "Ce sentiment reflète une certaine faiblesse, une nostalgie… (acceptez toute réponse plausible)"}, {"type": "choix", "numero": "7", "points": 1, "enonce": "« Le Garde, répète lentement de sa grosse voix en écrivant. » Ces répétitions donnent à ces propos une tonalité : comique, tragique ou satirique ? Entoure la bonne réponse.", "options": ["comique", "tragique", "satirique"], "bonne": 0}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "« Je ne sais plus pourquoi je meurs » : cette phrase est répétée deux fois. Quelle est cette figure de style ?", "correction": "Acceptez anaphore / répétition."}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "Que veut-elle nous transmettre sur Antigone ?", "correction": "Antigone a peur / elle regrette / elle se dit que c'est absurde, etc."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Antigone a dit : « Et Créon avait raison… » Pensez-vous qu'elle a changé d'avis ? Développez votre réponse en deux ou trois lignes.", "correction": "Acceptez toute réponse bien formulée et argumentée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "À partir de votre lecture de la pièce, Antigone a toujours dit Non à Créon. Comment vous la trouvez dans ce passage ? Développez votre réponse en deux ou trois lignes.", "correction": "Acceptez toute réponse bien formulée et argumentée."}]}, {"titre": "Production écrite", "points": 10, "texte": "**Sujet :** Dans *Antigone* de Jean Anouilh, personne n'a réussi à convaincre ou à persuader l'héroïne de renoncer à ses idées.\n\nPensez-vous que nous devons nous accrocher aveuglément à nos idées et nos convictions, ou plutôt, faire des concessions?\n\nRédigez un texte argumentatif dans lequel vous développez votre point de vue en vous basant sur des arguments et des exemples précis.\n\n***Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction***\n\n| Critère d'évaluation | Note à accorder |\n|---|---|\n| Respect de la consigne (traiter le sujet proposé et non un autre). | 1point. |\n| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |\n| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
