-- Sujet de français, examen régional 2026, académie de
-- Casablanca-Settat, sur Antigone de Jean Anouilh. Recopié mot pour
-- mot depuis les quatre pages fournies par l'utilisateur ; aucune
-- réponse n'est saisie, le sujet a été fourni sans corrigé.
--
-- Attention : ces pages ne sont pas un scan de la feuille officielle
-- mais un document retapé (en-tête en français seulement, « Examen
-- régional normalisé - Sujet principal », mention « لا تنسوني من صالح
-- دعائكم »), contrairement aux sujets 2023 à 2025. Le texte d'Anouilh
-- est conforme à l'œuvre ; la fidélité des questions à l'épreuve
-- réelle n'a pas pu être vérifiée.
--
-- En-tête recopié : « Session : Juin 2026 » (session normale),
-- « Durée : 2 heures », « Coefficient : 3 ». Pas de filière indiquée.
--
-- Les questions 2, 3, 4 et 7 ont deux parties (a, b) notées ensemble
-- sur 1 point, sans répartition : chacune reste une seule question à
-- 1 point dans le mode entraînement, plutôt qu'un partage inventé.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, duree_minutes, coefficient, enonce_mdx, questions)
values (
  $sujet$francais$sujet$,
  2026,
  $sujet$normale$sujet$,
  $sujet$Casablanca-Settat$sujet$,
  $sujet$Antigone$sujet$,
  120,
  3,
  $sujet$## Texte

**HÉMON :** Qu'est-ce que tu vas me dire encore ?

**ANTIGONE :** Jure-moi d'abord que tu sortiras sans rien me dire. Sans même me regarder. Si tu m'aimes, jure-le-moi. *(Elle le regarde avec son pauvre visage bouleversé.)* Tu vois comme je te le demande, jure-le-moi, s'il te plaît, Hémon… C'est la dernière folie que tu auras à me passer.

**HÉMON, après un temps :** Je te le jure.

**ANTIGONE :** Merci. Alors, voilà. Hier d'abord. Tu me demandais tout à l'heure pourquoi j'étais venue avec une robe d'Ismène, ce parfum et ce rouge à lèvres. J'étais bête. Je n'étais pas très sûre que tu me désires vraiment et j'avais fait tout cela pour être un peu plus comme les autres filles, pour te donner envie de moi.

**HÉMON :** C'était pour cela ?

**ANTIGONE :** Oui. Et tu as ri et nous nous sommes disputés et mon mauvais caractère a été le plus fort, je me suis sauvée. *(Elle ajoute plus bas.)* Mais j'étais venue chez toi pour que tu me prennes hier soir, pour que je sois ta femme avant. *(Il recule, il va parler, elle crie.)* Tu m'as juré de ne pas me demander pourquoi. Tu m'as juré, Hémon ! *(Elle dit plus bas, humblement.)* Je t'en supplie… *(Et elle ajoute, se détournant, dure.)* D'ailleurs, je vais te dire. Je voulais être ta femme quand même parce que je t'aime comme cela, moi, très fort, et que - je vais te faire de la peine, ô mon chéri, pardon ! - que jamais, jamais, je ne pourrai t'épouser. *(Il est resté muet de stupeur, elle court à la fenêtre, elle crie.)*

Hémon, tu me l'as juré ! Sors. Sors tout de suite sans rien dire. Si tu parles, si tu fais un seul pas vers moi, je me jette par cette fenêtre. Je te le jure, Hémon. Je te le jure sur la tête du petit garçon que nous avons eu tous les deux en rêve, du seul petit garçon que j'aurai jamais. Pars maintenant, pars vite. Tu sauras demain. Tu sauras tout à l'heure. *(Elle achève avec un tel désespoir qu'Hémon obéit et s'éloigne.)* S'il te plaît, pars, Hémon. C'est tout ce que tu peux faire encore pour moi, si tu m'aimes. *(Il est sorti. Elle reste sans bouger, le dos à la salle, puis elle referme la fenêtre, elle vient s'asseoir sur une petite chaise au milieu de la scène, et dit doucement, comme étrangement apaisée.)* Voilà. C'est fini pour Hémon, Antigone.

## I. Étude de texte (10 points)

**1. Complétez le tableau suivant : 1 point**

| Auteur | Titre de l'œuvre | Genre littéraire | Une autre œuvre du même auteur |
|---|---|---|---|
| | | | |

**2. D'après votre lecture de l'œuvre : 1 point**

**a.** Quelle décision Antigone a-t-elle prise concernant le cadavre de Polynice ?

**b.** Hémon est-il au courant de cette décision ?

**3. 1 point**

**a.** Quel projet d'avenir Antigone évoque-t-elle avec Hémon ?

**b.** Justifiez votre réponse par un indice tiré du texte.

**4.** a. Antigone apprend à Hémon une « mauvaise » nouvelle. Laquelle ? **1 point**

**b.** Comment Hémon réagit-il à l'annonce de cette nouvelle ?

**5.** Relevez quatre mots appartenant au champ lexical du mariage. **1 point**

**6.** Qu'est-ce qu'Antigone menace-t-elle de faire si Hémon réagit ? **1 point**

**7. « Jamais, jamais, je ne pourrai t'épouser. » 1 point**

**a.** La figure de style contenue dans cet énoncé est :

• Un oxymore • Une répétition • Une antiphrase

Recopiez la bonne réponse.

**b.** Quel en est l'effet recherché ?

**8.** Comment Antigone se sent-elle après le départ d'Hémon ? **1 point**

**9.** Dans cette scène, Antigone abandonne son mariage pour réaliser son projet. Comment trouvez-vous sa décision ? Répondez en deux à trois phrases. **1 point**

**10.** Selon vous, dans cette scène, Antigone fait-elle preuve de confiance en soi ou d'entêtement ? Répondez en deux à trois phrases. **1 point**

## II. Production écrite (10 points)

**Sujet :**

De nos jours, beaucoup de jeunes, tout comme Antigone, prennent des décisions difficiles (mariage, divorce, études, emploi, immigration, etc.) sans consulter les adultes.

Les jeunes ont-ils raison de prendre seuls leurs décisions ou doivent-ils consulter des adultes ?

Développez votre point de vue en vous basant sur des arguments précis et des exemples clairs.

**Lors de la correction, il sera tenu compte des critères suivants :**

- Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte. **5 points**
- Critères d'évaluation de la langue : orthographe, syntaxe, vocabulaire, conjugaison. **5 points**$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez ce texte et répondez aux questions.", "texte": "**HÉMON :** Qu'est-ce que tu vas me dire encore ?\n\n**ANTIGONE :** Jure-moi d'abord que tu sortiras sans rien me dire. Sans même me regarder. Si tu m'aimes, jure-le-moi. *(Elle le regarde avec son pauvre visage bouleversé.)* Tu vois comme je te le demande, jure-le-moi, s'il te plaît, Hémon… C'est la dernière folie que tu auras à me passer.\n\n**HÉMON, après un temps :** Je te le jure.\n\n**ANTIGONE :** Merci. Alors, voilà. Hier d'abord. Tu me demandais tout à l'heure pourquoi j'étais venue avec une robe d'Ismène, ce parfum et ce rouge à lèvres. J'étais bête. Je n'étais pas très sûre que tu me désires vraiment et j'avais fait tout cela pour être un peu plus comme les autres filles, pour te donner envie de moi.\n\n**HÉMON :** C'était pour cela ?\n\n**ANTIGONE :** Oui. Et tu as ri et nous nous sommes disputés et mon mauvais caractère a été le plus fort, je me suis sauvée. *(Elle ajoute plus bas.)* Mais j'étais venue chez toi pour que tu me prennes hier soir, pour que je sois ta femme avant. *(Il recule, il va parler, elle crie.)* Tu m'as juré de ne pas me demander pourquoi. Tu m'as juré, Hémon ! *(Elle dit plus bas, humblement.)* Je t'en supplie… *(Et elle ajoute, se détournant, dure.)* D'ailleurs, je vais te dire. Je voulais être ta femme quand même parce que je t'aime comme cela, moi, très fort, et que - je vais te faire de la peine, ô mon chéri, pardon ! - que jamais, jamais, je ne pourrai t'épouser. *(Il est resté muet de stupeur, elle court à la fenêtre, elle crie.)*\n\nHémon, tu me l'as juré ! Sors. Sors tout de suite sans rien dire. Si tu parles, si tu fais un seul pas vers moi, je me jette par cette fenêtre. Je te le jure, Hémon. Je te le jure sur la tête du petit garçon que nous avons eu tous les deux en rêve, du seul petit garçon que j'aurai jamais. Pars maintenant, pars vite. Tu sauras demain. Tu sauras tout à l'heure. *(Elle achève avec un tel désespoir qu'Hémon obéit et s'éloigne.)* S'il te plaît, pars, Hémon. C'est tout ce que tu peux faire encore pour moi, si tu m'aimes. *(Il est sorti. Elle reste sans bouger, le dos à la salle, puis elle referme la fenêtre, elle vient s'asseoir sur une petite chaise au milieu de la scène, et dit doucement, comme étrangement apaisée.)* Voilà. C'est fini pour Hémon, Antigone.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Complétez le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": ""}, {"libelle": "Titre de l'œuvre", "reponse": ""}, {"libelle": "Genre littéraire", "reponse": ""}, {"libelle": "Une autre œuvre du même auteur", "reponse": ""}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "D'après votre lecture de l'œuvre : a. Quelle décision Antigone a-t-elle prise concernant le cadavre de Polynice ? b. Hémon est-il au courant de cette décision ?", "correction": ""}, {"type": "libre", "numero": "3", "points": 1, "enonce": "a. Quel projet d'avenir Antigone évoque-t-elle avec Hémon ? b. Justifiez votre réponse par un indice tiré du texte.", "correction": ""}, {"type": "libre", "numero": "4", "points": 1, "enonce": "a. Antigone apprend à Hémon une « mauvaise » nouvelle. Laquelle ? b. Comment Hémon réagit-il à l'annonce de cette nouvelle ?", "correction": ""}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Relevez quatre mots appartenant au champ lexical du mariage.", "correction": ""}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Qu'est-ce qu'Antigone menace-t-elle de faire si Hémon réagit ?", "correction": ""}, {"type": "libre", "numero": "7", "points": 1, "enonce": "« Jamais, jamais, je ne pourrai t'épouser. » a. La figure de style contenue dans cet énoncé est : • Un oxymore • Une répétition • Une antiphrase. Recopiez la bonne réponse. b. Quel en est l'effet recherché ?", "correction": ""}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Comment Antigone se sent-elle après le départ d'Hémon ?", "correction": ""}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Dans cette scène, Antigone abandonne son mariage pour réaliser son projet. Comment trouvez-vous sa décision ? Répondez en deux à trois phrases.", "correction": ""}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Selon vous, dans cette scène, Antigone fait-elle preuve de confiance en soi ou d'entêtement ? Répondez en deux à trois phrases.", "correction": ""}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nDe nos jours, beaucoup de jeunes, tout comme Antigone, prennent des décisions difficiles (mariage, divorce, études, emploi, immigration, etc.) sans consulter les adultes.\n\nLes jeunes ont-ils raison de prendre seuls leurs décisions ou doivent-ils consulter des adultes ?\n\nDéveloppez votre point de vue en vous basant sur des arguments précis et des exemples clairs.\n\n**Lors de la correction, il sera tenu compte des critères suivants :**\n\n- Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte. **5 points**\n- Critères d'évaluation de la langue : orthographe, syntaxe, vocabulaire, conjugaison. **5 points**", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  duree_minutes = excluded.duree_minutes,
  coefficient = excluded.coefficient,
  enonce_mdx = excluded.enonce_mdx,
  questions = excluded.questions;
