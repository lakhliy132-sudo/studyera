-- Sujet de français, examen régional 2017 (session normale), académie
-- Béni Mellal-Khénifra, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2017 جهة بني ملال خنيفرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Béni Mellal-Khénifra, session normale 2017, durée 2 heures
-- (en-tête en arabe). Coefficient vide : 04 pour quatre séries, 03 pour
-- sciences économiques et gestion. Le texte de la feuille est numéroté par
-- lignes (la question 4 renvoie aux lignes 10 à 15, de « Tout mon fonds de
-- roulement » à « de Fès ») ; la numérotation n'est pas reproduite. Le
-- sujet ne chiffre pas les critères de la production écrite ; le corrigé
-- donne 5 et 5 pts.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2017,
  $sujet$normale$sujet$,
  $sujet$Béni Mellal-Khénifra$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

– (…) Le croyant est souvent éprouvé. J'ai perdu dans la cohue des enchères aux *haïks* tout notre maigre capital. J'avais mis l'argent dans un mouchoir. J'ai dû laisser le mouchoir tomber par terre, croyant le glisser dans ma sacoche.

Ma mère avait relevé la tête. Elle ne disait rien. Mon père, de sa voix calme, continuait :

– Pourquoi se lamenter ? Nous devons louer Dieu en toutes circonstances.

Enfin, ma mère sortit de son silence.

– Qu'allons-nous faire ?

– Je vais travailler.

– Combien as-tu perdu ?

– Tout mon fonds de roulement. Je n'ai pas même de quoi payer mon ouvrier qui n'a rien touché depuis une semaine. Je dois aussi un mois de loyer au propriétaire de l'atelier. Je pensais régler toutes ces dettes et acheter du coton.

– Les marchands ne pourraient-ils pas te faire crédit ? Tu es connu honorablement.

– Jamais je ne m'abaisserai jusqu'à mendier du coton à l'un de ces voleurs. Je ne veux pas non plus du misérable salaire d'un ouvrier. Je suis un montagnard et un paysan. La saison de la moisson commence à peine, on embauche des moissonneurs. J'irai travailler aux environs de Fès.

– Tu oserais m'abandonner avec un enfant malade ?

– Préfèrerais-tu mourir de faim ? Aimerais-tu devenir un objet de pitié pour tes amies et tes voisines ? Je serai à deux jours de marche de la ville. Sidi Mohammed ira mieux demain. Fais-lui une soupe à la menthe sauvage; couvre-le bien afin qu'il transpire abondamment. Aujourd'hui, il a moins de fièvre que la nuit dernière.

– C'est un châtiment de Dieu qui nous accable. Ce sont ces maudits bracelets qui ont semé le malheur dans notre maison. Pourquoi ne les vendrais-tu pas ?

– Je compte les vendre. Je vous laisserai cet argent pour vous nourrir pendant mon absence.

## I. Étude de texte (10 points)

**1.** Contextualisation (2 pts) — Répondez aux questions suivantes : **(1 pt)**

| a- De quelle œuvre est extrait ce texte ? | b- Qui en est l'auteur ? | c- Quel est le genre littéraire de cette œuvre ? | d- En quelle année cette œuvre est-elle publiée ? |
|---|---|---|---|
| | | | |

**2.** D'après votre lecture de l'œuvre, dites si chacune des propositions suivantes est vraie ou fausse : **(1pt)**

| | Vrai | Faux |
|---|---|---|
| Le père du narrateur revient content, le soir, à la maison. | | |
| Le père et la mère du narrateur ne mangent pas et ne parlent pas pendant le dîner. | | |
| Maâlem Abdeslem demande à sa femme de faire des économies. | | |
| Lalla Zoubida pressent un grand malheur. | | |

**3a.** Analyse (6 points) — Lisez le début du texte. Qu'est-ce qui est arrivé au père du narrateur ? **(1pt)**

**3b.** Comment cela lui est-il arrivé ?

**4.** Lisez les lignes 10 à 15 [de « Tout mon fonds de roulement » à « de Fès »]. La situation financière du père est difficile. Relevez deux indices qui le montrent. **(1pt)**

**5a.** Quelle solution propose Lalla Zoubida à son mari ? **(1pt)**

**5b.** A-t-il accepté cette proposition ? Justifiez votre réponse par un indice relevé dans le texte

**6.** Quelle décision le père a-t-il prise pour résoudre son problème ? **(1pt)**

**7.** La mère du narrateur n'est pas d'accord avec son mari sur ce qu'il projette de faire. Relevez du texte deux arguments employés par le père pour la convaincre. **(1pt)**

**8.** Complétez le tableau suivant : Lalla Zoubida — Indice qui le montre : « Ce sont ces maudits bracelets qui ont semé le malheur dans notre maison » ; Mâlem Abdeslem — Trait de caractère (caractéristique morale) : Croyant en Dieu **(1pt)**

| Lalla Zoubida — Trait de caractère | Mâlem Abdeslem — Indice qui le montre |
|---|---|
| | |

**9.** Réaction (2 pts) — La Mère du narrateur pense que ce sont les bracelets qui sont à l'origine des malheurs de la famille. Etes-vous d'accord avec elle ? Justifiez votre opinion par une ou deux phrases. **(1pt)**

**10.** Pensez-vous que le père du narrateur a raison de discuter ses problèmes d'argent avec sa femme ? Justifiez brièvement votre réponse. **(1pt)**

## II. Production écrite (10 points)

**SUJET :** Dans un reportage télévisé sur la solidarité, un citoyen dit : « Je n'aide jamais les pauvres.»

Vous rédigez un écrit argumenté dans lequel vous dites si vous êtes d'accord ou non avec ce citoyen. Vous appuyez votre point de vue par des arguments précis.

**NB :** Les éléments suivants seront tenus en compte lors de la correction de votre copie.

- **Discours :** respect de la consigne, cohérence de l'argumentation, structure du texte.
- **Langue :** vocabulaire, syntaxe, ponctuation, orthographe, conjugaison, mise en forme.$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de réponse. Toute réponse imprévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(1 pt)**

| a- De quelle œuvre est extrait ce texte ? | b- Qui en est l'auteur ? | c- Quel est le genre littéraire de cette œuvre ? | d- En quelle année cette œuvre est-elle publiée ? |
|---|---|---|---|
| La Boîte à Merveilles. | Ahmed Sefrioui. | Roman autobiographique. | 1954. |

**2.** **(1pt)**

| | |
|---|---|
| Le père du narrateur revient content, le soir, à la maison. | Faux |
| Le père et la mère du narrateur ne mangent pas et ne parlent pas pendant le dîner. | Vrai |
| Maâlem Abdeslem demande à sa femme de faire des économies. | Vrai |
| Lalla Zoubida pressent un grand malheur. | Vrai |

**3a.** Il a perdu tout son maigre capital. (0,5 pt) **(1pt)**

**3b.** Il a fait tomber son argent par terre croyant le mettre dans sa sacoche. (0,5 pt)

**4.** - « Je n'ai pas même de quoi payer mon ouvrier qui n'a rien touché depuis une semaine. » -« Je dois aussi un mois de loyer au propriétaire de l'atelier.» (0,5 pt x 2) **(1pt)**

**5a.** Faire crédit auprès des marchands. (0,5 pt) **(1pt)**

**5b.** Non. / « Jamais je ne m'abaisserai jusqu'à mendier du coton à l'un de ces voleurs. » (0,25 pt x 2)

**6.** Aller travailler comme moissonneur aux environs de Fès. **(1pt)**

**7.** - « Préfèrerais-tu mourir de faim ? » - « Aimerais-tu devenir un objet de pitié pour tes amies et tes voisines ? » (0,5 pt x 2) **(1pt)**

**8.** **(1pt)**

| Lalla Zoubida — Trait de caractère | Mâlem Abdeslem — Indice qui le montre |
|---|---|
| superstitieuse | « Nous devons louer Dieu en toute circonstance. » ou « Le croyant est souvent éprouvé. » |

**9.** Accepter toute réponse pertinemment justifiée **(1pt)**

**10.** Accepter toute réponse pertinemment justifiée. **(1pt)**

### II. Production écrite

Tenir compte des critères ci-dessous en accordant la note finale sur la base des notes partielles attribuées et dûment reportées sur la copie du candidat ou de la candidate. **Discours :** conformité de la production à la consigne d'écriture, cohérence de l'argumentation, structure du texte (organisation et progression du texte) …… 5 pts. **Langue :** vocabulaire, syntaxe, ponctuation, orthographe, conjugaison …… 5 pts.$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "– (…) Le croyant est souvent éprouvé. J'ai perdu dans la cohue des enchères aux *haïks* tout notre maigre capital. J'avais mis l'argent dans un mouchoir. J'ai dû laisser le mouchoir tomber par terre, croyant le glisser dans ma sacoche.\n\nMa mère avait relevé la tête. Elle ne disait rien. Mon père, de sa voix calme, continuait :\n\n– Pourquoi se lamenter ? Nous devons louer Dieu en toutes circonstances.\n\nEnfin, ma mère sortit de son silence.\n\n– Qu'allons-nous faire ?\n\n– Je vais travailler.\n\n– Combien as-tu perdu ?\n\n– Tout mon fonds de roulement. Je n'ai pas même de quoi payer mon ouvrier qui n'a rien touché depuis une semaine. Je dois aussi un mois de loyer au propriétaire de l'atelier. Je pensais régler toutes ces dettes et acheter du coton.\n\n– Les marchands ne pourraient-ils pas te faire crédit ? Tu es connu honorablement.\n\n– Jamais je ne m'abaisserai jusqu'à mendier du coton à l'un de ces voleurs. Je ne veux pas non plus du misérable salaire d'un ouvrier. Je suis un montagnard et un paysan. La saison de la moisson commence à peine, on embauche des moissonneurs. J'irai travailler aux environs de Fès.\n\n– Tu oserais m'abandonner avec un enfant malade ?\n\n– Préfèrerais-tu mourir de faim ? Aimerais-tu devenir un objet de pitié pour tes amies et tes voisines ? Je serai à deux jours de marche de la ville. Sidi Mohammed ira mieux demain. Fais-lui une soupe à la menthe sauvage; couvre-le bien afin qu'il transpire abondamment. Aujourd'hui, il a moins de fièvre que la nuit dernière.\n\n– C'est un châtiment de Dieu qui nous accable. Ce sont ces maudits bracelets qui ont semé le malheur dans notre maison. Pourquoi ne les vendrais-tu pas ?\n\n– Je compte les vendre. Je vous laisserai cet argent pour vous nourrir pendant mon absence.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Contextualisation (2 pts) — Répondez aux questions suivantes :", "champs": [{"libelle": "a- De quelle œuvre est extrait ce texte ?", "reponse": "La Boîte à Merveilles."}, {"libelle": "b- Qui en est l'auteur ?", "reponse": "Ahmed Sefrioui."}, {"libelle": "c- Quel est le genre littéraire de cette œuvre ?", "reponse": "Roman autobiographique."}, {"libelle": "d- En quelle année cette œuvre est-elle publiée ?", "reponse": "1954."}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "D'après votre lecture de l'œuvre, dites si chacune des propositions suivantes est vraie ou fausse :", "affirmations": [{"texte": "Le père du narrateur revient content, le soir, à la maison.", "vrai": false}, {"texte": "Le père et la mère du narrateur ne mangent pas et ne parlent pas pendant le dîner.", "vrai": true}, {"texte": "Maâlem Abdeslem demande à sa femme de faire des économies.", "vrai": true}, {"texte": "Lalla Zoubida pressent un grand malheur.", "vrai": true}]}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Analyse (6 points) — Lisez le début du texte. Qu'est-ce qui est arrivé au père du narrateur ?", "correction": "Il a perdu tout son maigre capital. (0,5 pt)"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Comment cela lui est-il arrivé ?", "correction": "Il a fait tomber son argent par terre croyant le mettre dans sa sacoche. (0,5 pt)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Lisez les lignes 10 à 15 [de « Tout mon fonds de roulement » à « de Fès »]. La situation financière du père est difficile. Relevez deux indices qui le montrent.", "correction": "- « Je n'ai pas même de quoi payer mon ouvrier qui n'a rien touché depuis une semaine. » -« Je dois aussi un mois de loyer au propriétaire de l'atelier.» (0,5 pt x 2)"}, {"type": "libre", "numero": "5a", "points": 0.5, "enonce": "Quelle solution propose Lalla Zoubida à son mari ?", "correction": "Faire crédit auprès des marchands. (0,5 pt)"}, {"type": "libre", "numero": "5b", "points": 0.5, "enonce": "A-t-il accepté cette proposition ? Justifiez votre réponse par un indice relevé dans le texte", "correction": "Non. / « Jamais je ne m'abaisserai jusqu'à mendier du coton à l'un de ces voleurs. » (0,25 pt x 2)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Quelle décision le père a-t-il prise pour résoudre son problème ?", "correction": "Aller travailler comme moissonneur aux environs de Fès."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "La mère du narrateur n'est pas d'accord avec son mari sur ce qu'il projette de faire. Relevez du texte deux arguments employés par le père pour la convaincre.", "correction": "- « Préfèrerais-tu mourir de faim ? » - « Aimerais-tu devenir un objet de pitié pour tes amies et tes voisines ? » (0,5 pt x 2)"}, {"type": "tableau", "numero": "8", "points": 1, "enonce": "Complétez le tableau suivant : Lalla Zoubida — Indice qui le montre : « Ce sont ces maudits bracelets qui ont semé le malheur dans notre maison » ; Mâlem Abdeslem — Trait de caractère (caractéristique morale) : Croyant en Dieu", "champs": [{"libelle": "Lalla Zoubida — Trait de caractère", "reponse": "superstitieuse"}, {"libelle": "Mâlem Abdeslem — Indice qui le montre", "reponse": "« Nous devons louer Dieu en toute circonstance. » ou « Le croyant est souvent éprouvé. »"}]}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Réaction (2 pts) — La Mère du narrateur pense que ce sont les bracelets qui sont à l'origine des malheurs de la famille. Etes-vous d'accord avec elle ? Justifiez votre opinion par une ou deux phrases.", "correction": "Accepter toute réponse pertinemment justifiée"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Pensez-vous que le père du narrateur a raison de discuter ses problèmes d'argent avec sa femme ? Justifiez brièvement votre réponse.", "correction": "Accepter toute réponse pertinemment justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**SUJET :** Dans un reportage télévisé sur la solidarité, un citoyen dit : « Je n'aide jamais les pauvres.»\n\nVous rédigez un écrit argumenté dans lequel vous dites si vous êtes d'accord ou non avec ce citoyen. Vous appuyez votre point de vue par des arguments précis.\n\n**NB :** Les éléments suivants seront tenus en compte lors de la correction de votre copie.\n\n- **Discours :** respect de la consigne, cohérence de l'argumentation, structure du texte.\n- **Langue :** vocabulaire, syntaxe, ponctuation, orthographe, conjugaison, mise en forme.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
