-- Sujet de français, examen régional 2022, académie de
-- Casablanca-Settat, sur Antigone de Jean Anouilh. Transcrit mot pour
-- mot depuis le PDF officiel de l'académie publié sur moutamadris.ma
-- (« الامتحان الجهوي في اللغة الفرنسية 2022 جهة الدار البيضاء سطات ») :
-- sujet sur 2 pages, « CORRIGÉ ET BARÈME » sur 1 page (le PDF contient
-- ces trois pages en double).
--
-- En-tête : « Session normale : 2022 », « Durée : 2 heures »,
-- « SERIES SCIENTIFIQUES ET TECHNIQUES ». Le coefficient reste vide :
-- « 04/03 », deux valeurs pour une seule colonne.
--
-- Corrigé recopié tel quel, y compris ses écarts avec le sujet (barème
-- de la question 3 : « 0.25ptx4 » dans le sujet, « 0.5ptx2 » dans le
-- corrigé). La question 8 (0.5ptx2) est découpée en 8a (figure, à
-- choisir parmi les trois proposées) et 8b (effet).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2022,
  $sujet$normale$sujet$,
  $sujet$Casablanca-Settat$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Séries scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

**CRÉON**, *qui regarde au loin devant lui.*

Il fallait qu'elle meure.

**LE CHŒUR**

Ne laisse pas mourir Antigone, Créon! Nous allons tous porter cette plaie au côté, pendant des siècles.

**CRÉON**

C'est elle qui voulait mourir. Aucun de nous n'était assez fort pour la décider à vivre. Je le comprends maintenant, Antigone était faite pour être morte. Elle-même ne le savait peut-être pas, mais Polynice n'était qu'un prétexte. Quand elle a dû y renoncer, elle a trouvé autre chose tout de suite. Ce qui importait pour elle, c'était de refuser et de mourir.

**LE CHŒUR**

C'est une enfant, Créon.

**CRÉON**

Que veux-tu que je fasse pour elle? La condamner à vivre?

**Hémon**, *entre en criant.*

Père!

**CRÉON**, *court à lui, l'embrasse.*

Oublie-la, Hémon; oublie-la, mon petit.

**HÉMON**

Tu es fou, père. Lâche-moi.

**CRÉON**, *le tient plus fort.*

J'ai tout essayé pour la sauver, Hémon. J'ai tout essayé, je te le jure. Elle ne t'aime pas. Elle aurait pu vivre. Elle a préféré sa folie et la mort.

**Hémon**, *crie, tentant de s'arracher à son étreinte.*

Mais, père, tu vois bien qu'ils l'emmenent! Père, ne laisse pas ces hommes l'emmener!

**CRÉON**

Elle a parlé maintenant. Tout Thèbes sait ce qu'elle a fait. Je suis obligé de la faire mourir.

## I- Étude de texte (10 points)

1- Recopiez et complétez le tableau suivant : **(0.25pt x4)**

| Titre | Auteur | Genre littéraire | Une œuvre du même auteur |
|---|---|---|---|
| | | | |

2- Ce passage se situe juste après : **(1pt)**

a- La sortie nocturne d'Antigone,
b- Le choix de mourir d'Antigone,
c- La mort d'Antigone.

**Choisissez la bonne réponse.**

3- Recopiez et complétez le tableau suivant par **Vrai** ou **Faux**. **(0.25ptx4)**

| | |
|---|---|
| Hémon accepte d'oublier Antigone. | …………………… |
| Créon veut sauver Antigone. | …………………… |
| Le Chœur condamne Antigone. | …………………… |
| Créon est convaincu de la folie d'Antigone | …………………… |

4- Selon Créon, quel prétexte a choisi Antigone pour mourir ? **(1pt)**

5- Antigone vient d'être condamnée à mort par Créon. Relevez dans le texte un argument utilisé par Créon pour justifier sa décision. **(1pt)**

6- D'après Créon, pourquoi Antigone n'a plus aucune chance de rester en vie? **(1pt)**

7- Que nous apprennent les didascalies (en italique) sur Hémon ? **(1pt)**

8- Identifiez la figure de style contenue dans l'énoncé suivant et dites quel en est l'effet recherché. **(0.5ptx2)**

***« Tout Thèbes sait ce qu'elle a fait. »***

a- Une périphrase, b- une métaphore, c- une métonymie.

9- Comment trouvez-vous la réaction de Hémon vis-à-vis de son père ? **(1pt)**

10- *“Elle ne t'aime pas. Elle aurait pu vivre. Elle a préféré sa folie et la mort.”* Selon vous, Créon a-t-il dit la vérité à son fils Hémon ? **(1pt)**

## II- Production écrite (10 points)

**Sujet :** Dans le texte, Hémon n'accepte pas la décision de son père Créon.

Les relations parents/ enfants sont souvent difficiles : certains parents sont contre les convictions, les choix et les passions de leurs enfants (style de vie et d'habillement, décisions personnelles…).

**Qu'en pensez-vous ?**

Dans une production écrite argumentée et avec des exemples à l'appui, développez votre réflexion en vous référant à votre expérience personnelle, à votre entourage et à vos lectures.

*(Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction.)*

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |
| Produire un texte argumentatif cohérent. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Le professeur jugera de la validité des réponses non prévues.*

### I- Étude de texte (10 points)

**1-** Recopiez et complétez le tableau suivant : **(0.25pt x4)**

| Titre | Auteur | Genre littéraire | Une œuvre du même auteur |
|---|---|---|---|
| Antigone | Jean Anouilh | Pièce de théâtre (tragédie moderne) | L'Alouette, Le Voyageur sans bagage, Le Bal des voleurs… |

**2-** Ce passage se situe juste après : **(1pt)**
**b- Le choix de mourir d'Antigone,**

**3-** Recopiez et complétez le tableau suivant par Vrai ou Faux. **(0.5ptx2)**

| | |
|---|---|
| Hémon accepte d'oublier Antigone. | **Faux** |
| Créon veut sauver Antigone. | **Vrai** |
| Le Chœur condamne Antigone. | **Faux** |
| Créon est convaincu de la folie d'Antigone | **Vrai** |

**4-** **L'enterrement de Polynice.** **(1pt)**

**5-** *« C'est elle qui voulait mourir », « Antigone était faite pour être morte. »…* **(1pt)**

**6-** **Parce que tout Thèbes sait ce qu'elle a fait. Elle a parlé.** **(1pt)**

**7-** **Que c'est un personnage en colère, furieux contre la décision de son père, d'où sa rage et ses cris.** **(1pt)**

**8-** « *Tout Thèbes sait ce qu'elle a fait.* ». **c-une métonymie.** **(0.5ptx2)**
L'effet : **substituer la ville à tous ses habitants par économie du vocabulaire et de la pensée** (au lieu de dire **tous les habitants de Thèbes**) **sans parler de l'effet stylistique.**

**9-** Une réaction irrespectueuse et condamnable vis-à-vis d'un père./
**Ou** comportement attendu de la part d'un amoureux… **(1pt)**

**10-** Oui, car si Antigone aimait vraiment Hémon, elle aurait sacrifié son projet pour lui.
-Non, car, en personnage tragique, elle ne peut pas échapper à son sort. **(1pt)**

*(Réponses données à titre indicatif. Pour les deux dernières questions de réaction., accorder 1 point si la réponse est argumentée.)*

### II- Production écrite (10 points)

***Important :** Chaque copie sera corrigée à la lumière des critères suivants qu'il importe IMPERATIVEMENT de respecter et de reporter ainsi détaillés sur la copie de l'élève.*

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |
| Produire un texte argumentatif cohérent. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |$sujet$,
  $sujet${"parties": [{"titre": "I- Étude de texte", "points": 10, "consigne": "Lis attentivement le texte et réponds aux questions.", "texte": "**CRÉON**, *qui regarde au loin devant lui.*\n\nIl fallait qu'elle meure.\n\n**LE CHŒUR**\n\nNe laisse pas mourir Antigone, Créon! Nous allons tous porter cette plaie au côté, pendant des siècles.\n\n**CRÉON**\n\nC'est elle qui voulait mourir. Aucun de nous n'était assez fort pour la décider à vivre. Je le comprends maintenant, Antigone était faite pour être morte. Elle-même ne le savait peut-être pas, mais Polynice n'était qu'un prétexte. Quand elle a dû y renoncer, elle a trouvé autre chose tout de suite. Ce qui importait pour elle, c'était de refuser et de mourir.\n\n**LE CHŒUR**\n\nC'est une enfant, Créon.\n\n**CRÉON**\n\nQue veux-tu que je fasse pour elle? La condamner à vivre?\n\n**Hémon**, *entre en criant.*\n\nPère!\n\n**CRÉON**, *court à lui, l'embrasse.*\n\nOublie-la, Hémon; oublie-la, mon petit.\n\n**HÉMON**\n\nTu es fou, père. Lâche-moi.\n\n**CRÉON**, *le tient plus fort.*\n\nJ'ai tout essayé pour la sauver, Hémon. J'ai tout essayé, je te le jure. Elle ne t'aime pas. Elle aurait pu vivre. Elle a préféré sa folie et la mort.\n\n**Hémon**, *crie, tentant de s'arracher à son étreinte.*\n\nMais, père, tu vois bien qu'ils l'emmenent! Père, ne laisse pas ces hommes l'emmener!\n\n**CRÉON**\n\nElle a parlé maintenant. Tout Thèbes sait ce qu'elle a fait. Je suis obligé de la faire mourir.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre", "reponse": "Antigone"}, {"libelle": "Auteur", "reponse": "Jean Anouilh"}, {"libelle": "Genre littéraire", "reponse": "Pièce de théâtre (tragédie moderne)"}, {"libelle": "Une œuvre du même auteur", "reponse": "L'Alouette, Le Voyageur sans bagage, Le Bal des voleurs…"}]}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Ce passage se situe juste après : Choisissez la bonne réponse.", "options": ["La sortie nocturne d'Antigone", "Le choix de mourir d'Antigone", "La mort d'Antigone"], "bonne": 1}, {"type": "vrai-faux", "numero": "3", "points": 1, "enonce": "Recopiez et complétez le tableau suivant par Vrai ou Faux.", "affirmations": [{"texte": "Hémon accepte d'oublier Antigone.", "vrai": false}, {"texte": "Créon veut sauver Antigone.", "vrai": true}, {"texte": "Le Chœur condamne Antigone.", "vrai": false}, {"texte": "Créon est convaincu de la folie d'Antigone", "vrai": true}]}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Selon Créon, quel prétexte a choisi Antigone pour mourir ?", "correction": "L'enterrement de Polynice."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Antigone vient d'être condamnée à mort par Créon. Relevez dans le texte un argument utilisé par Créon pour justifier sa décision.", "correction": "« C'est elle qui voulait mourir », « Antigone était faite pour être morte. »…"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "D'après Créon, pourquoi Antigone n'a plus aucune chance de rester en vie?", "correction": "Parce que tout Thèbes sait ce qu'elle a fait. Elle a parlé."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Que nous apprennent les didascalies (en italique) sur Hémon ?", "correction": "Que c'est un personnage en colère, furieux contre la décision de son père, d'où sa rage et ses cris."}, {"type": "choix", "numero": "8a", "points": 0.5, "enonce": "Identifiez la figure de style contenue dans l'énoncé suivant : « Tout Thèbes sait ce qu'elle a fait. »", "options": ["Une périphrase", "une métaphore", "une métonymie"], "bonne": 2}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "Dites quel en est l'effet recherché.", "correction": "Substituer la ville à tous ses habitants par économie du vocabulaire et de la pensée (au lieu de dire tous les habitants de Thèbes) sans parler de l'effet stylistique."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Comment trouvez-vous la réaction de Hémon vis-à-vis de son père ?", "correction": "Une réaction irrespectueuse et condamnable vis-à-vis d'un père. / Ou comportement attendu de la part d'un amoureux… (Réponse donnée à titre indicatif : accorder 1 point si la réponse est argumentée.)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "“Elle ne t'aime pas. Elle aurait pu vivre. Elle a préféré sa folie et la mort.” Selon vous, Créon a-t-il dit la vérité à son fils Hémon ?", "correction": "Oui, car si Antigone aimait vraiment Hémon, elle aurait sacrifié son projet pour lui. / Non, car, en personnage tragique, elle ne peut pas échapper à son sort. (Réponse donnée à titre indicatif : accorder 1 point si la réponse est argumentée.)"}]}, {"titre": "II- Production écrite", "points": 10, "texte": "**Sujet :** Dans le texte, Hémon n'accepte pas la décision de son père Créon.\n\nLes relations parents/ enfants sont souvent difficiles : certains parents sont contre les convictions, les choix et les passions de leurs enfants (style de vie et d'habillement, décisions personnelles…).\n\n**Qu'en pensez-vous ?**\n\nDans une production écrite argumentée et avec des exemples à l'appui, développez votre réflexion en vous référant à votre expérience personnelle, à votre entourage et à vos lectures.\n\n*(Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction.)*\n\n| Critère d'évaluation | Note à accorder |\n|---|---|\n| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |\n| Produire un texte argumentatif cohérent. | 4 points. |\n| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
