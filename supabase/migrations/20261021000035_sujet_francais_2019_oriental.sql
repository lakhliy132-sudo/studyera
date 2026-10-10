-- Sujet de français, examen régional 2019 (session normale), académie
-- L'Oriental, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2019 جهة الشرق »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de l'Oriental, session normale 2019, d'après le PDF à couche
-- texte ; durée et coefficient non relevés. Le passage souligné de la
-- question 8 est en gras dans la question. Barème de la question 3 :
-- 0,5 + 0,5 dans le sujet, 0,25 x 2 dans le corrigé ; le sujet fait foi.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2019,
  $sujet$normale$sujet$,
  $sujet$L'Oriental$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$## Texte

Le nom de la chose est effroyable, et je ne comprends point comment j'ai pu jusqu'à présent l'écrire et le prononcer.

La combinaison de ces dix lettres, leur aspect, leur physionomie est bien faite pour réveiller une idée épouvantable (…). L'image que j'y attache, à ce mot hideux, est vague, indéterminée, et d'autant plus sinistre.

(…) Mais il est affreux de ne savoir ce que c'est, ni comment s'y prendre. Il paraît qu'il y a une bascule et qu'on vous couche sur le ventre…

– Ah ! Mes cheveux blanchiront avant que ma tête ne tombe !

Je l'ai cependant entrevue une fois.

Je passais sur la place de Grève, en voiture, un jour, vers onze heures du matin. Tout à coup, la voiture s'arrêta.

Il y avait foule sur la place. Je mis la tête à la portière. Une populace encombrait la Grève et le quai, et des femmes, des hommes, des enfants étaient debout sur le parapet. Au-dessus des têtes, on voyait une espèce d'estrade en bois rouge que trois hommes échafaudaient.

Un condamné devait être exécuté le jour même, et l'on bâtissait la machine.

Je détournai la tête avant d'avoir vu. À côté de la voiture, il y avait une femme qui disait à un enfant :

– Tiens, regarde ! le couteau coule mal, ils vont graisser la rainure avec un bout de chandelle.

C'est probablement là qu'ils en sont aujourd'hui. Onze heures viennent de sonner. Ils graissent sans doute la rainure.

Ah ! Cette fois, malheureux, je ne détournerai pas la tête.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant, d'après votre lecture de l'œuvre : **(1pt)**

| Titre de l'œuvre | Auteur de l'œuvre | Genre de l'œuvre | Personnage principal de l'œuvre |
|---|---|---|---|
| | | | |

**2.** D'après votre lecture de l'œuvre, répondez par « Vrai » ou « Faux » : **(1pt)**

| | Vrai | Faux |
|---|---|---|
| Le condamné est célibataire. | | |
| Victor Hugo est contre la peine de mort. | | |
| Bicêtre est une prison à Paris. | | |
| Le condamné obtient la grâce à la fin de l'œuvre. | | |

**3a.** « Le nom de la chose est effroyable ». Cette « chose » est : Recopiez la bonne proposition. **(0.5pt)**

a- la chaise électrique  
b- La corde  
c- La guillotine.

**3b.** Justifiez votre réponse par un indice tiré du texte. **(0.5pt)**

**4a.** Le narrateur avait déjà vu cette « chose » dans le passé. Dites combien de fois. **(0.5pt)**

**4b.** Dites où l'avait-il déjà vue. **(0.5pt)**

**5.** « Il y avait foule sur la place » pour : Recopiez la bonne proposition. **(1pt)**

a- réclamer la libération du condamné.  
b- assister au spectacle de l'exécution.  
c- dénoncer la peine de mort.

**6.** Relevez dans le texte deux adjectifs employés pour décrire la peur du condamné. **(1pt)**

**7.** « Je ne détournerai pas la tête ». Affirma le condamné : Réécrivez cette phrase au discours indirect. **(1pt)**

**8a.** « Ah ! **Mes cheveux blanchiront** avant que ma tête ne tombe ! ». Quelle est la figure de style soulignée [en gras ici] dans cet énoncé ? **(0.5pt)**

**8b.** Cette figure renforce : Recopiez la bonne proposition. **(0.5pt)**

a- La peur du condamné  
b- La joie du condamné  
c- le courage du condamné.

**9.** Proposez un titre convenable au texte. **(1pt)**

**10.** Dans le texte, les enfants, eux aussi, assistent à l'exécution des condamnés à mort. Dites en une ou deux phrases ce que vous en pensez. **(1pt)**

## II. Production écrite (10 points)

**Sujet :** Beaucoup de personnes croient que la peine de mort est un moyen efficace pour lutter contre le crime.

Partagez-vous cette opinion ?

Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.$sujet$,
  $sujet$## Corrigé et barème

*Corrigé et barème de l'académie.*

### I. Étude de texte

**1.** **(1pt)**

| Titre de l'œuvre | Auteur de l'œuvre | Genre de l'œuvre | Personnage principal de l'œuvre |
|---|---|---|---|
| Le Dernier jour d'un condamné | Victor HUGO | Roman Ou Roman à thèse | Le condamné à mort |

**2.** **(1pt)**

| | |
|---|---|
| Le condamné est célibataire. | Faux |
| Victor Hugo est contre la peine de mort. | Vrai |
| Bicêtre est une prison à Paris. | Vrai |
| Le condamné obtient la grâce à la fin de l'œuvre. | Faux |

**3a.** c- La guillotine. **(0.5pt)**

**3b.** La combinaison de ces lettres. **(0.5pt)**

**4a.** Une fois. **(0.5pt)**

**4b.** Sur la place de grève. **(0.5pt)**

**5.** b- assister au spectacle de l'exécution. **(1pt)**

**6.** Effroyable – Epouvantable – Affreux (Accepter deux réponses de cette liste) **(1pt)**

**7.** Le condamné affirma qu'il ne retournerait pas la tête. (+) ponctuation. (0.25*4pts) **(1pt)**

**8a.** Une hyperbole. **(0.5pt)**

**8b.** a- La peur du condamné **(0.5pt)**

**9.** Accepter tout titre convenable. **(1pt)**

**10.** Accepter toute réponse appropriée, correctement formulée. **(1pt)**

### II. Production écrite

| | |
|---|---|
| **CRITERES D'EVALUATION DU DISCOURS** | **5 points** |
| - Conformité de la production à la consigne d'écriture. | 2pts |
| - Cohérence de l'argumentation. | 2pts |
| - Structure du texte. | 1pt |
| **CRITERES D'EVALUATION DE LA LANGUE** | **5 points** |
| - Vocabulaire. | 1pt |
| - Syntaxe. | 1pt |
| - Ponctuation. | 1pt |
| - Orthographe. | 1pt |
| - Conjugaison. | 1pt |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Le nom de la chose est effroyable, et je ne comprends point comment j'ai pu jusqu'à présent l'écrire et le prononcer.\n\nLa combinaison de ces dix lettres, leur aspect, leur physionomie est bien faite pour réveiller une idée épouvantable (…). L'image que j'y attache, à ce mot hideux, est vague, indéterminée, et d'autant plus sinistre.\n\n(…) Mais il est affreux de ne savoir ce que c'est, ni comment s'y prendre. Il paraît qu'il y a une bascule et qu'on vous couche sur le ventre…\n\n– Ah ! Mes cheveux blanchiront avant que ma tête ne tombe !\n\nJe l'ai cependant entrevue une fois.\n\nJe passais sur la place de Grève, en voiture, un jour, vers onze heures du matin. Tout à coup, la voiture s'arrêta.\n\nIl y avait foule sur la place. Je mis la tête à la portière. Une populace encombrait la Grève et le quai, et des femmes, des hommes, des enfants étaient debout sur le parapet. Au-dessus des têtes, on voyait une espèce d'estrade en bois rouge que trois hommes échafaudaient.\n\nUn condamné devait être exécuté le jour même, et l'on bâtissait la machine.\n\nJe détournai la tête avant d'avoir vu. À côté de la voiture, il y avait une femme qui disait à un enfant :\n\n– Tiens, regarde ! le couteau coule mal, ils vont graisser la rainure avec un bout de chandelle.\n\nC'est probablement là qu'ils en sont aujourd'hui. Onze heures viennent de sonner. Ils graissent sans doute la rainure.\n\nAh ! Cette fois, malheureux, je ne détournerai pas la tête.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant, d'après votre lecture de l'œuvre :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "Le Dernier jour d'un condamné"}, {"libelle": "Auteur de l'œuvre", "reponse": "Victor HUGO"}, {"libelle": "Genre de l'œuvre", "reponse": "Roman Ou Roman à thèse"}, {"libelle": "Personnage principal de l'œuvre", "reponse": "Le condamné à mort"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "D'après votre lecture de l'œuvre, répondez par « Vrai » ou « Faux » :", "affirmations": [{"texte": "Le condamné est célibataire.", "vrai": false}, {"texte": "Victor Hugo est contre la peine de mort.", "vrai": true}, {"texte": "Bicêtre est une prison à Paris.", "vrai": true}, {"texte": "Le condamné obtient la grâce à la fin de l'œuvre.", "vrai": false}]}, {"type": "choix", "numero": "3a", "points": 0.5, "enonce": "« Le nom de la chose est effroyable ». Cette « chose » est : Recopiez la bonne proposition.", "options": ["la chaise électrique", "La corde", "La guillotine."], "bonne": 2}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Justifiez votre réponse par un indice tiré du texte.", "correction": "La combinaison de ces lettres."}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Le narrateur avait déjà vu cette « chose » dans le passé. Dites combien de fois.", "correction": "Une fois."}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Dites où l'avait-il déjà vue.", "correction": "Sur la place de grève."}, {"type": "choix", "numero": "5", "points": 1, "enonce": "« Il y avait foule sur la place » pour : Recopiez la bonne proposition.", "options": ["réclamer la libération du condamné.", "assister au spectacle de l'exécution.", "dénoncer la peine de mort."], "bonne": 1}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez dans le texte deux adjectifs employés pour décrire la peur du condamné.", "correction": "Effroyable – Epouvantable – Affreux (Accepter deux réponses de cette liste)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "« Je ne détournerai pas la tête ». Affirma le condamné : Réécrivez cette phrase au discours indirect.", "correction": "Le condamné affirma qu'il ne retournerait pas la tête. (+) ponctuation. (0.25*4pts)"}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "« Ah ! **Mes cheveux blanchiront** avant que ma tête ne tombe ! ». Quelle est la figure de style soulignée [en gras ici] dans cet énoncé ?", "correction": "Une hyperbole."}, {"type": "choix", "numero": "8b", "points": 0.5, "enonce": "Cette figure renforce : Recopiez la bonne proposition.", "options": ["La peur du condamné", "La joie du condamné", "le courage du condamné."], "bonne": 0}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Proposez un titre convenable au texte.", "correction": "Accepter tout titre convenable."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Dans le texte, les enfants, eux aussi, assistent à l'exécution des condamnés à mort. Dites en une ou deux phrases ce que vous en pensez.", "correction": "Accepter toute réponse appropriée, correctement formulée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Beaucoup de personnes croient que la peine de mort est un moyen efficace pour lutter contre le crime.\n\nPartagez-vous cette opinion ?\n\nRédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
