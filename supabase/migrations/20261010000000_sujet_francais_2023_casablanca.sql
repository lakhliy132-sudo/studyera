-- Sujet de français, examen régional 2023, académie de
-- Casablanca-Settat. Transcrit mot pour mot depuis les deux pages
-- fournies par l'utilisateur ; aucune réponse n'est saisie, le sujet a
-- été fourni sans corrigé.
--
-- L'en-tête de la première page, absent du premier envoi, a été fourni
-- ensuite : « Examen régional du baccalauréat – Session normale : 2023 »,
-- « SERIE : scientifiques, techno, éco, arts appliqués... »,
-- « Coef 04 / 03 », « Durée : 2 heures ». D'où la session, la filière et
-- la durée ci-dessous.
--
-- Le coefficient reste vide : la feuille en donne deux (« 04 / 03 »),
-- sans dire lequel va à quelle série, et la colonne `coefficient` n'en
-- tient qu'un. En choisir un serait inventer.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, questions)
values (
  $sujet$francais$sujet$,
  2023,
  $sujet$normale$sujet$,
  $sujet$Casablanca-Settat$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Scientifiques, techno, éco, arts appliqués...$sujet$,
  120,
  $sujet$## Texte

Certes, la matière est riche ; et, si abrégée que soit ma vie, il y aura bien encore dans les angoisses, dans les terreurs, dans les tortures qui la rempliront, de cette heure à la dernière, de quoi user cette plume et tarir cet encrier. -- D'ailleurs, ces angoisses, le seul moyen d'en moins souffrir, c'est de les observer, et les peindre m'en distraira.

Et puis, ce que j'écrirai ainsi ne sera peut-être pas inutile. Ce journal de mes souffrances, heure par heure, minute par minute, supplice par supplice, si j'ai la force de le mener jusqu'au moment où il me sera *physiquement* impossible de continuer, cette histoire, nécessairement inachevée, mais aussi complète que possible, de mes sensations, ne portera-t-elle point avec elle un grand et profond enseignement ? N'y aura-il pas dans ce procès-verbal de la pensée agonisante, dans cette progression toujours croissante de douleurs, dans cette espèce d'autopsie intellectuelle d'un condamné, plus d'une leçon pour ceux qui condamnent ? Peut-être cette lecture leur rendra-t-elle la main moins légère, quand il s'agira quelque autre fois de jeter une tête qui pense, une tête d'homme, dans ce qu'ils appellent la balance de la justice ? Peut-être n'ont-ils jamais réfléchi, les malheureux, à cette lente succession de tortures que renferme la formule expéditive d'un arrêt de mort ? Se sont-ils jamais seulement arrêtés à cette idée poignante que dans l'homme qu'ils retranchent il y a une intelligence, une intelligence qui avait compté sur la vie, une âme qui ne s'est point disposée pour la mort ? Non. Ils ne voient dans tout cela que la chute verticale d'un couteau triangulaire, et pensent sans doute que pour le condamné il n'y a rien avant, rien après.

Ces feuilles les détromperont. Publiées peut-être un jour, elles arrêteront quelques moments leur esprit sur les souffrances de l'esprit, car ce sont celles-là qu'ils ne soupçonnent pas. Ils sont triomphants de pouvoir tuer sans presque faire souffrir le corps. Hé ! c'est bien de cela qu'il s'agit ! Qu'est-ce que la douleur physique près de la douleur morale ! Horreur et pitié, des lois faites ainsi ! Un jour viendra, et peut-être ces mémoires, derniers confidents d'un misérable, y auront-ils contribué...

À moins qu'après ma mort le vent ne joue dans le préau avec ces morceaux de papier souillés de boue, ou qu'ils n'aillent pourrir à la pluie, collés en étoiles à la vitre cassée d'un guichetier.

## I- Étude de texte (10 points)

1- Recopiez et complétez le tableau suivant : **(0.25pt x4)**

| Auteur | Titre de l'œuvre | Genre littéraire | Siècle |
|---|---|---|---|
| | | | |

2- Pour situer le passage, répondez à la question suivante en choisissant la bonne réponse. **(1pt)**

**Où se trouvait le condamné à mort juste avant d'être à Bicêtre ?**

a- au tribunal, b- à l'hôtel de ville, c- à la place de grève, d- chez lui.

3- Le narrateur croit-il vraiment en l'utilité de ce qu'il écrit ? justifiez votre réponse en relevant un indice dans le texte. **(0.5pt x2)**

4- Répondez par **vrai** ou **faux**. Parmi les thèmes traités dans ce passage, on trouve : **(0.25pt x4)**

- La souffrance morale du condamné à mort.
- L'autopsie qu'on fait subir au condamné à mort.
- Le projet de lecture pour le condamné à mort.
- La force de l'écriture à changer les pratiques judiciaires.

5- Que cherche à exprimer le narrateur par le « peut-être » répété cinq fois dans le texte ? **(1pt)**

6- Quel est l'impact attendu par le narrateur à travers son « journal des souffrances » ? **(1pt)**

7- Relevez dans le texte 4 mots appartenant au champ lexical de « l'écriture. » **(0.25pt x4)**

8- a- Quelle figure de style reconnaissez-vous dans l'énoncé suivant ? **(0.5pt x2)**

**« Ces feuilles les détromperont. »**

b- Quel en est l'effet recherché ?

9- Ce passage vous amène –t-il à sympathiser avec le condamné à mort ? Justifiez votre réaction. **(1pt)**

10- Partagez-vous la conviction du narrateur que la douleur physique n'est rien à côté de la douleur morale ? Justifiez votre réaction. **(1pt)**

**[Pour chacune des deux questions 9 et 10, justifiez par un argument]**

## II- Production écrite (10 points)

**Sujet :** Dans son œuvre *Le Dernier Jour d'un Condamné*, V. Hugo met en valeur l'écriture comme un moyen pour changer les mentalités sur la question de la peine de mort.

Croyez-vous vraiment que l'écriture comme moyen d'expression (romans, journaux et revues, réseaux sociaux…) est capable de changer les personnes et les sociétés ?

**Dans une production écrite argumentée et avec des exemples à l'appui, développez votre réflexion en vous référant à votre expérience personnelle, à votre entourage et à vos lectures.**

*(Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction)*

| Critères d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |
| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |$sujet$,
  $sujet${"parties":[{"titre":"I. Étude de texte","points":10,"consigne":"Lis attentivement le texte et réponds aux questions.","texte":"Certes, la matière est riche ; et, si abrégée que soit ma vie, il y aura bien encore dans les angoisses, dans les terreurs, dans les tortures qui la rempliront, de cette heure à la dernière, de quoi user cette plume et tarir cet encrier. -- D'ailleurs, ces angoisses, le seul moyen d'en moins souffrir, c'est de les observer, et les peindre m'en distraira.\n\nEt puis, ce que j'écrirai ainsi ne sera peut-être pas inutile. Ce journal de mes souffrances, heure par heure, minute par minute, supplice par supplice, si j'ai la force de le mener jusqu'au moment où il me sera *physiquement* impossible de continuer, cette histoire, nécessairement inachevée, mais aussi complète que possible, de mes sensations, ne portera-t-elle point avec elle un grand et profond enseignement ? N'y aura-il pas dans ce procès-verbal de la pensée agonisante, dans cette progression toujours croissante de douleurs, dans cette espèce d'autopsie intellectuelle d'un condamné, plus d'une leçon pour ceux qui condamnent ? Peut-être cette lecture leur rendra-t-elle la main moins légère, quand il s'agira quelque autre fois de jeter une tête qui pense, une tête d'homme, dans ce qu'ils appellent la balance de la justice ? Peut-être n'ont-ils jamais réfléchi, les malheureux, à cette lente succession de tortures que renferme la formule expéditive d'un arrêt de mort ? Se sont-ils jamais seulement arrêtés à cette idée poignante que dans l'homme qu'ils retranchent il y a une intelligence, une intelligence qui avait compté sur la vie, une âme qui ne s'est point disposée pour la mort ? Non. Ils ne voient dans tout cela que la chute verticale d'un couteau triangulaire, et pensent sans doute que pour le condamné il n'y a rien avant, rien après.\n\nCes feuilles les détromperont. Publiées peut-être un jour, elles arrêteront quelques moments leur esprit sur les souffrances de l'esprit, car ce sont celles-là qu'ils ne soupçonnent pas. Ils sont triomphants de pouvoir tuer sans presque faire souffrir le corps. Hé ! c'est bien de cela qu'il s'agit ! Qu'est-ce que la douleur physique près de la douleur morale ! Horreur et pitié, des lois faites ainsi ! Un jour viendra, et peut-être ces mémoires, derniers confidents d'un misérable, y auront-ils contribué...\n\nÀ moins qu'après ma mort le vent ne joue dans le préau avec ces morceaux de papier souillés de boue, ou qu'ils n'aillent pourrir à la pluie, collés en étoiles à la vitre cassée d'un guichetier.","questions":[{"type":"tableau","numero":"1","points":1,"enonce":"Recopiez et complétez le tableau suivant.","champs":[{"libelle":"Auteur","reponse":""},{"libelle":"Titre de l'œuvre","reponse":""},{"libelle":"Genre littéraire","reponse":""},{"libelle":"Siècle","reponse":""}]},{"type":"choix","numero":"2","points":1,"enonce":"Pour situer le passage, répondez à la question suivante en choisissant la bonne réponse. Où se trouvait le condamné à mort juste avant d'être à Bicêtre ?","options":["au tribunal","à l'hôtel de ville","à la place de grève","chez lui"],"bonne":null},{"type":"libre","numero":"3","points":1,"enonce":"Le narrateur croit-il vraiment en l'utilité de ce qu'il écrit ? Justifiez votre réponse en relevant un indice dans le texte.","correction":""},{"type":"vrai-faux","numero":"4","points":1,"enonce":"Répondez par vrai ou faux. Parmi les thèmes traités dans ce passage, on trouve :","affirmations":[{"texte":"La souffrance morale du condamné à mort.","vrai":null},{"texte":"L'autopsie qu'on fait subir au condamné à mort.","vrai":null},{"texte":"Le projet de lecture pour le condamné à mort.","vrai":null},{"texte":"La force de l'écriture à changer les pratiques judiciaires.","vrai":null}]},{"type":"libre","numero":"5","points":1,"enonce":"Que cherche à exprimer le narrateur par le « peut-être » répété cinq fois dans le texte ?","correction":""},{"type":"libre","numero":"6","points":1,"enonce":"Quel est l'impact attendu par le narrateur à travers son « journal des souffrances » ?","correction":""},{"type":"libre","numero":"7","points":1,"enonce":"Relevez dans le texte 4 mots appartenant au champ lexical de « l'écriture ».","correction":""},{"type":"libre","numero":"8a","points":0.5,"enonce":"Quelle figure de style reconnaissez-vous dans l'énoncé suivant ? « Ces feuilles les détromperont. »","correction":""},{"type":"libre","numero":"8b","points":0.5,"enonce":"Quel en est l'effet recherché ?","correction":""},{"type":"libre","numero":"9","points":1,"enonce":"Ce passage vous amène-t-il à sympathiser avec le condamné à mort ? Justifiez votre réaction par un argument.","correction":""},{"type":"libre","numero":"10","points":1,"enonce":"Partagez-vous la conviction du narrateur que la douleur physique n'est rien à côté de la douleur morale ? Justifiez votre réaction par un argument.","correction":""}]},{"titre":"II. Production écrite","points":10,"texte":"**Sujet :** Dans son œuvre *Le Dernier Jour d'un Condamné*, V. Hugo met en valeur l'écriture comme un moyen pour changer les mentalités sur la question de la peine de mort.\n\nCroyez-vous vraiment que l'écriture comme moyen d'expression (romans, journaux et revues, réseaux sociaux…) est capable de changer les personnes et les sociétés ?\n\n**Dans une production écrite argumentée et avec des exemples à l'appui, développez votre réflexion en vous référant à votre expérience personnelle, à votre entourage et à vos lectures.**\n\n*(Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction)*\n\n| Critères d'évaluation | Note à accorder |\n|---|---|\n| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |\n| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |\n| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |","questions":[],"redaction":true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  questions = excluded.questions;
