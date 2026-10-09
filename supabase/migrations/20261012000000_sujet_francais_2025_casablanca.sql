-- Sujet de français, examen régional 2025, académie de
-- Casablanca-Settat. Transcrit mot pour mot depuis le PDF scanné fourni
-- par l'utilisateur (4 pages, dont deux de lignes de réponse) ; aucune
-- réponse n'est saisie, le sujet a été fourni sans corrigé. Les fautes
-- de la feuille (« Qu'elle est la tonalité », « reconnaissait-vous »,
-- « ponctuatio. ») sont gardées telles quelles.
--
-- En-tête de la feuille, en arabe : « الدورة العادية 2025 » (session
-- normale), « مدة الإنجاز : ساعتان » (2 heures), « الشعبة أو المسلك :
-- الشعب العلمية والأدبية، الفنون التطبيقية، العلوم الاقتصادية والتدبير،
-- العلوم والتكنولوجيات », traduit en français pour la filière.
-- Le coefficient (« المعامل 3/4 ») reste vide : deux valeurs, sans dire
-- laquelle va à quelle série, et la colonne n'en tient qu'une.
--
-- L'œuvre n'est pas nommée sur la feuille (la question 1 la demande) :
-- le passage (départ de la chaîne des forçats, Bicêtre) est tiré du
-- Dernier Jour d'un condamné, d'où le libellé qui sert au filtre.
--
-- Les mots soulignés sur la feuille (expliqués en note) sont en gras.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, questions)
values (
  $sujet$francais$sujet$,
  2025,
  $sujet$normale$sujet$,
  $sujet$Casablanca-Settat$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Scientifiques et littéraires, arts appliqués, sciences économiques et gestion, sciences et technologies$sujet$,
  120,
  $sujet$## Texte

Il s'était établi entre la foule et les charrettes je ne sais quel horrible dialogue : injures d'un côté, bravades de l'autre, imprécations des deux parts ; mais, à un signe du capitaine, je vis les coups de bâton pleuvoir au hasard dans les charrettes, sur les épaules ou sur les têtes, et tout rentra dans cette espèce de calme extérieur qu'on appelle l'*ordre*. Mais les yeux étaient pleins de vengeance, et les poings des misérables se crispaient sur leurs genoux.

Les cinq charrettes, escortées de gendarmes à cheval et d'argousins à pied, disparurent successivement sous la haute porte cintrée de bicêtre ; une sixième les suivit, dans laquelle ballottaient pêle-mêle les chaudières, les gamelles de cuivre et les chaînes de rechange. Quelques **gardes-chiourme** qui s'étaient attardés à la cantine sortirent en courant pour rejoindre leur escouade. La foule s'écoula. Tout ce spectacle s'évanouit comme une fantasmagorie. On entendit s'affaiblir par degrés dans l'air le bruit lourd des roues et des pieds des chevaux sur la route pavée de Fontainebleau, le claquement des fouets, le cliquetis des chaînes, et les hurlements du peuple qui souhaitait malheur au voyage des galériens.

Et c'est là pour eux le commencement !

Que me disait-il donc, l'avocat ? **Les galères** ! Ah ! oui, plutôt mille fois la mort ! plutôt l'échafaud que le bagne, plutôt le néant que l'enfer ; plutôt livrer mon cou au couteau de Guillotin qu'au **carcan de la chiourme** ! Les galères, juste ciel !

---

*__Gardes-chiourme__ : gardiens de prison*

*__Carcan de la chiourme__ : chaine de fer que l'on mettait aux galériens pour qu'ils ne s'échappent pas.*

*__Les galères__ : peine que subissait ceux qui étaient condamnés à ramer sur les galères.*

## I. Etude de texte : (10 pts)

1) Complétez le tableau suivant par les informations qui conviennent. **(0.25x4)**

| Titre de l'œuvre | Nom de l'auteur | Son genre | Date de sa parution |
|---|---|---|---|
| | | | |

2) Pour situer cet extrait par rapport à l'œuvre, cochez la bonne réponse : **(1pt)**

| Le narrateur se trouve : | dans sa cellule ? | au tribunal ? | à l'infirmerie ? |
|---|---|---|---|
| | | | |

3) Qu'est ce qu'on transportait dans les charrettes évoquées dans le texte ? **(1pt)**

4) Par quelle intervention des gardes/soldats, l'ordre a été rétabli ? justifiez votre réponse à partir du texte **(0.5x2)**

5) Qui a donné l'ordre aux soldats d'intervenir ? Justifiez votre réponse à partir du texte. **(0.5x2)**

6) Le narrateur préfère-t-il les galères à la guillotine ? Justifiez votre réponse à partir du texte **(0.5x2)**

7) Qu'elle est la tonalité du dernier paragraphe ? Justifiez votre réponse. **(0.5x2)**

8) « je vis les coups de bâton pleuvoir au hasard dans les charrettes » : quelle figure de style reconnaissait-vous dans cette phrase ? Quelle en est l'effet recherché ?

La figure de style **(0.5)** — L'effet recherché **(0.5)**

9) Dans cet extrait les galériens sont maltraités par les gardiens et par le peuple. Approuvez-vous cette conduite ? Justifiez brièvement votre réponse. **(0.5 + 0.5)**

10) Le voyage des galériens est présenté dans ce texte comme un spectacle pour la foule. Partagez-vous l'idée de se distraire des misères et des souffrances des gens? Justifiez votre réponse. **(0.5 + 0.5)**

## II. Production de l'écrit: (10pts)

**Sujet:** Certaines personnes pensent qu'il faut durcir les jugements et les peines pour réduire la délinquance et la criminalité. Qu'en pensez-vous?

**Rédigez un texte argumentatif dans lequel vous développez votre point de vue à l'aide d'arguments et d'exemples précis.**

*La correction de la production écrite tiendra compte des critères suivants:*

| Critères d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne: traiter le sujet proposé et non un autre | 1 point |
| Produire un texte argumentatif cohérent et bien structuré | 4 points |
| Langue, vocabulaire, syntaxe, orthographe, conjugaison et ponctuatio. | 5 points |$sujet$,
  $sujet${"parties": [{"titre": "I. Etude de texte", "points": 10, "consigne": "Lis attentivement le texte et réponds aux questions.", "texte": "Il s'était établi entre la foule et les charrettes je ne sais quel horrible dialogue : injures d'un côté, bravades de l'autre, imprécations des deux parts ; mais, à un signe du capitaine, je vis les coups de bâton pleuvoir au hasard dans les charrettes, sur les épaules ou sur les têtes, et tout rentra dans cette espèce de calme extérieur qu'on appelle l'*ordre*. Mais les yeux étaient pleins de vengeance, et les poings des misérables se crispaient sur leurs genoux.\n\nLes cinq charrettes, escortées de gendarmes à cheval et d'argousins à pied, disparurent successivement sous la haute porte cintrée de bicêtre ; une sixième les suivit, dans laquelle ballottaient pêle-mêle les chaudières, les gamelles de cuivre et les chaînes de rechange. Quelques **gardes-chiourme** qui s'étaient attardés à la cantine sortirent en courant pour rejoindre leur escouade. La foule s'écoula. Tout ce spectacle s'évanouit comme une fantasmagorie. On entendit s'affaiblir par degrés dans l'air le bruit lourd des roues et des pieds des chevaux sur la route pavée de Fontainebleau, le claquement des fouets, le cliquetis des chaînes, et les hurlements du peuple qui souhaitait malheur au voyage des galériens.\n\nEt c'est là pour eux le commencement !\n\nQue me disait-il donc, l'avocat ? **Les galères** ! Ah ! oui, plutôt mille fois la mort ! plutôt l'échafaud que le bagne, plutôt le néant que l'enfer ; plutôt livrer mon cou au couteau de Guillotin qu'au **carcan de la chiourme** ! Les galères, juste ciel !\n\n---\n\n*__Gardes-chiourme__ : gardiens de prison*\n\n*__Carcan de la chiourme__ : chaine de fer que l'on mettait aux galériens pour qu'ils ne s'échappent pas.*\n\n*__Les galères__ : peine que subissait ceux qui étaient condamnés à ramer sur les galères.*", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Complétez le tableau suivant par les informations qui conviennent.", "champs": [{"libelle": "Titre de l'œuvre", "reponse": ""}, {"libelle": "Nom de l'auteur", "reponse": ""}, {"libelle": "Son genre", "reponse": ""}, {"libelle": "Date de sa parution", "reponse": ""}]}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Pour situer cet extrait par rapport à l'œuvre, cochez la bonne réponse : Le narrateur se trouve :", "options": ["dans sa cellule ?", "au tribunal ?", "à l'infirmerie ?"], "bonne": null}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Qu'est ce qu'on transportait dans les charrettes évoquées dans le texte ?", "correction": ""}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Par quelle intervention des gardes/soldats, l'ordre a été rétabli ? justifiez votre réponse à partir du texte.", "correction": ""}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Qui a donné l'ordre aux soldats d'intervenir ? Justifiez votre réponse à partir du texte.", "correction": ""}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Le narrateur préfère-t-il les galères à la guillotine ? Justifiez votre réponse à partir du texte.", "correction": ""}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Qu'elle est la tonalité du dernier paragraphe ? Justifiez votre réponse.", "correction": ""}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "« je vis les coups de bâton pleuvoir au hasard dans les charrettes » : quelle figure de style reconnaissait-vous dans cette phrase ?", "correction": ""}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "Quelle en est l'effet recherché ?", "correction": ""}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Dans cet extrait les galériens sont maltraités par les gardiens et par le peuple. Approuvez-vous cette conduite ? Justifiez brièvement votre réponse.", "correction": ""}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Le voyage des galériens est présenté dans ce texte comme un spectacle pour la foule. Partagez-vous l'idée de se distraire des misères et des souffrances des gens? Justifiez votre réponse.", "correction": ""}]}, {"titre": "II. Production de l'écrit", "points": 10, "texte": "**Sujet:** Certaines personnes pensent qu'il faut durcir les jugements et les peines pour réduire la délinquance et la criminalité. Qu'en pensez-vous?\n\n**Rédigez un texte argumentatif dans lequel vous développez votre point de vue à l'aide d'arguments et d'exemples précis.**\n\n*La correction de la production écrite tiendra compte des critères suivants:*\n\n| Critères d'évaluation | Note à accorder |\n|---|---|\n| Respect de la consigne: traiter le sujet proposé et non un autre | 1 point |\n| Produire un texte argumentatif cohérent et bien structuré | 4 points |\n| Langue, vocabulaire, syntaxe, orthographe, conjugaison et ponctuatio. | 5 points |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  questions = excluded.questions;
