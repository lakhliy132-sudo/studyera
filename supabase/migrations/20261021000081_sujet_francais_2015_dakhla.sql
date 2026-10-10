-- Sujet de français, examen régional 2015 (session normale), académie
-- Dakhla-Oued Ed-Dahab.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2015 جهة الداخلة وادي الذهب »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Sujet à deux textes : Le Dernier Jour d'un condamné (texte 1, chapitre
-- XLIV) et Antigone (texte 2) ; d'où oeuvre vide.
-- L'en-tête (en arabe) nomme l'académie « جهة وادي الذهب - لكويرة »
-- (Oued Ed-Dahab-Lagouira, aujourd'hui Dakhla-Oued Ed-Dahab) ; « دورة
-- يونيو 2015 العادية », « المترشحون الرسميون », « الشعب : الأدبية والعلمية
-- والتقنية - علوم الاقتصاد والتدبير », durée « ساعتان ». Aucun coefficient
-- imprimé.
-- L'en-tête du corrigé porte « للسنة الثانية باكالوريا » et « الشعب : الأدبية
-- والعلمية والتقنية », mais ses réponses suivent ce sujet question par question.
-- Question 1 : seules les quatre cases vides du tableau sont des champs ; les
-- cases déjà remplies sur la feuille sont citées dans l'énoncé. Le corrigé
-- note la question « 0, 25 pt x4 ».
-- Les mots « la foule » / « foule » soulignés à la question 6 b sont en gras.
-- Le sujet ne donne pas de critères pour la production écrite ; la grille du
-- corrigé (5 + 5 pts, sans détail par ligne) est recopiée.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2015,
  $sujet$normale$sujet$,
  $sujet$Dakhla-Oued Ed-Dahab$sujet$,
  $sujet$Séries littéraires, scientifiques et techniques ; sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

**Texte 1 :**

**Chapitre XLIV (44)**

Le prêtre est bon, le gendarme aussi. Je crois qu'ils ont versé une larme quand j'ai dit qu'on m'emportât mon enfant.

C'est fait. Maintenant il faut que je me roidisse en moi-même, et que je pense fermement au bourreau, à la charrette, aux gendarmes, à la foule sur le pont, à la foule sur le quai, à la foule aux fenêtres, et à ce qu'il y aura exprès pour moi sur cette lugubre place de Grève, qui pourrait être pavée des têtes qu'elle a vues tomber.

Je crois que j'ai encore une heure pour m'habituer à tout cela.

**Texte 2 :**

**Créon**

Elle a parlé maintenant. Tout Thèbes sait ce qu'elle a fait. Je suis obligé de la faire mourir.

**Hémon**, *s'arrache de ses bras.*

Lâche-moi ! *Un silence. Ils sont l'un en face de l'autre. Ils se regardent.* […]

**Le chœur**

Est-ce qu'on ne peut pas gagner du temps, la faire fuir demain ?

**Créon**

La foule sait déjà, elle hurle autour du palais. Je ne peux pas.

**Hémon**

Père, la foule n'est rien. Tu es le maître.

**Créon**

Je suis le maître avant la loi. Plus après.

**Hémon**

Père, je suis ton fils, tu ne peux pas me la laisser prendre.

**Créon**

Si, Hémon. Si, mon petit. Du courage. Antigone ne peut plus vivre. Antigone nous a déjà quittés tous.

## I. Étude de texte (10 points)

**1.** Contextualisation : Complétez le tableau suivant après l'avoir recopié (déjà remplis sur la feuille : texte 1, genre littéraire « Roman à thèse », autre œuvre du même auteur « Les misérables » ; texte 2, auteur « Jean Anouilh », siècle « 20ème ») : **(1 pt)**

| Texte 1 — Auteur | Texte 1 — Siècle | Texte 2 — Genre littéraire | Texte 2 — Autre œuvre du même auteur |
|---|---|---|---|
| | | | |

**2a.** D'après votre lecture de l'œuvre, le narrateur du TEXTE 1 se trouve-t-il à Bicêtre, à la place de Grève ou à La Conciergerie ? **(0,5 pt)**

a- à Bicêtre  
b- à la place de Grève  
c- à La Conciergerie

**2b.** Quels rapports familiaux unissent-ils les personnages suivants les uns aux autres ? - Créon et Hémon, - Antigone et Hémon. **(0,5 pt)**

**3a.** Analyse du texte 1 : D'après le texte, combien de temps reste-t-il au narrateur avant son exécution ? **(0,5 pt)**

**3b.** Pour pouvoir supporter le moment de son exécution, le narrateur croit qu'il lui faut de la fermeté et du courage. Relevez du texte une expression qui le montre. **(0,5 pt)**

**4.** Le narrateur porte-t-il sur le lieu de son exécution un jugement favorable ou défavorable ? Justifiez votre réponse par un adjectif relevé du texte. **(1 pt)**

**5.** Le narrateur dit : « *qu'on m'emportât mon enfant* ». De quel (le) enfant parle-t-il ? **(0,5pt)**

**6a.** Quelle réaction le gendarme et le prêtre ont-ils manifestée quand le condamné a demandé qu'on lui emportât son enfant ? **(0,5 pt)**

**6b.** « *à **la foule** sur le pont, à **la foule** sur le quai, à **la foule** aux fenêtres* ». Pourquoi le narrateur répète-t-il le mot « **foule** » dans cette phrase ? [souligné sur la feuille, en gras ici] **(0,5 pt)**

**7a.** Analyse du texte 2 : D'après ce dialogue, quel est le but poursuivi par Hémon ? **(0,5 pt)**

**7b.** Quel argument Créon présente-t-il pour justifier son incapacité de satisfaire la demande de son fils ? **(0,5 pt)**

**7c.** Relevez du texte une didascalie qui traduit la relation tendue entre Hémon et son père. **(0,5 pt)**

**8a.** « *Tout Thèbes sait ce qu'elle a fait.* » Quelle est la figure de style employée dans cet énoncé ? **(1 pt)**

**8b.** Créon emploie cette figure de style pour montrer :

a- qu'il est trop tard pour sauver Antigone,  
b- qu'il y a encore suffisamment de temps pour sauver Antigone,  
c- qu'il y aura d'autres chances pour sauver Antigone.

**9.** Réaction individuelle : En vous fondant sur votre lecture de l'œuvre, croyez-vous que le narrateur du premier texte mérite la peine de mort ? Justifiez votre réponse par un ou deux arguments. **(1 pt)**

**10.** Si vous étiez à la place de Créon, accepteriez-vous de sauver Antigone bien qu'elle n'ait pas respecté la loi ? Justifiez votre réponse. **(1 pt)**

## II. Production écrite (10 points)

**Sujet :**

« La prison corrige, rééduque et aide le prisonnier à commencer une nouvelle vie ».

Partagez-vous cette opinion ? Justifiez votre point de vue en vous appuyant sur des arguments et des exemples pertinents.$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de correction (à titre indicatif). Toute réponse non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** **(1 pt)**

| Texte 1 — Auteur | Texte 1 — Siècle | Texte 2 — Genre littéraire | Texte 2 — Autre œuvre du même auteur |
|---|---|---|---|
| Victor Hugo | 19ème | Tragédie moderne | Le voyageur sans bagage - Le bal des voleurs - La répétition ou l'amour puni- Becket ou l'Honneur de Dieu… |

**2a.** La Conciergerie. **(0,5 pt)**

**2b.** Créon est père d'Hémon (et éventuellement Hémon est fils de Créon). (0,25 pt) Antigone est la fiancée d'Hémon. (0,25 pt) **(0,5 pt)**

**3a.** Une heure **(0,5 pt)**

**3b.** Maintenant il faut que je me roidisse en moi-même, et que je pense fermement…. **(0,5 pt)**

**4.** Il porte un jugement défavorable : (0,5pt) / Justification : lugubre : (0,5pt) **(1 pt)**

**5.** Sa fille Marie. **(0,5pt)**

**6a.** Réaction du prêtre et du gendarme : ils ont versé une larme (accepter également : ils ont pleuré). **(0,5 pt)**

**6b.** La répétition du mot « foule » vise essentiellement à insister sur la présence de la foule et notamment sur le grand nombre de personnes qui assisteraient à son exécution. Accepter toute autre réponse jugée valable. **(0,5 pt)**

**7a.** Hémon demande à son père de sauver Antigone ; le supplie, le demande avec insistance,…. **(0,5 pt)**

**7b.** L'argument présenté par Créon : Elle a parlé maintenant / Tout Thèbes sait ce qu'elle a fait / la foule sait déjà… **(0,5 pt)**

**7c.** la didascalie : *s'arrache de ses bras*. **(0,5 pt)**

**8a.** La métonymie ; (0,5pt) **(1 pt)**

**8b.** Pour montrer qu'il est trop tard pour sauver Antigone. (0,5pt)

**9.** Réponse justifiée. **(1 pt)**

**10.** Point de vue justifié. **(1 pt)**

### II. Production écrite

**Critères d'évaluation du discours : 5 pts**

- Conformité de la production à la consigne d'écriture
- Cohérence de l'argumentation
- Organisation et progression du texte

**Critères d'évaluation de la langue : 5 pts**

- Correction de la langue (ponctuation, orthographe, syntaxe, vocabulaire, conjugaison)$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**Texte 1 :**\n\n**Chapitre XLIV (44)**\n\nLe prêtre est bon, le gendarme aussi. Je crois qu'ils ont versé une larme quand j'ai dit qu'on m'emportât mon enfant.\n\nC'est fait. Maintenant il faut que je me roidisse en moi-même, et que je pense fermement au bourreau, à la charrette, aux gendarmes, à la foule sur le pont, à la foule sur le quai, à la foule aux fenêtres, et à ce qu'il y aura exprès pour moi sur cette lugubre place de Grève, qui pourrait être pavée des têtes qu'elle a vues tomber.\n\nJe crois que j'ai encore une heure pour m'habituer à tout cela.\n\n**Texte 2 :**\n\n**Créon**\n\nElle a parlé maintenant. Tout Thèbes sait ce qu'elle a fait. Je suis obligé de la faire mourir.\n\n**Hémon**, *s'arrache de ses bras.*\n\nLâche-moi ! *Un silence. Ils sont l'un en face de l'autre. Ils se regardent.* […]\n\n**Le chœur**\n\nEst-ce qu'on ne peut pas gagner du temps, la faire fuir demain ?\n\n**Créon**\n\nLa foule sait déjà, elle hurle autour du palais. Je ne peux pas.\n\n**Hémon**\n\nPère, la foule n'est rien. Tu es le maître.\n\n**Créon**\n\nJe suis le maître avant la loi. Plus après.\n\n**Hémon**\n\nPère, je suis ton fils, tu ne peux pas me la laisser prendre.\n\n**Créon**\n\nSi, Hémon. Si, mon petit. Du courage. Antigone ne peut plus vivre. Antigone nous a déjà quittés tous.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Contextualisation : Complétez le tableau suivant après l'avoir recopié (déjà remplis sur la feuille : texte 1, genre littéraire « Roman à thèse », autre œuvre du même auteur « Les misérables » ; texte 2, auteur « Jean Anouilh », siècle « 20ème ») :", "champs": [{"libelle": "Texte 1 — Auteur", "reponse": "Victor Hugo"}, {"libelle": "Texte 1 — Siècle", "reponse": "19ème"}, {"libelle": "Texte 2 — Genre littéraire", "reponse": "Tragédie moderne"}, {"libelle": "Texte 2 — Autre œuvre du même auteur", "reponse": "Le voyageur sans bagage - Le bal des voleurs - La répétition ou l'amour puni- Becket ou l'Honneur de Dieu…"}]}, {"type": "choix", "numero": "2a", "points": 0.5, "enonce": "D'après votre lecture de l'œuvre, le narrateur du TEXTE 1 se trouve-t-il à Bicêtre, à la place de Grève ou à La Conciergerie ?", "options": ["à Bicêtre", "à la place de Grève", "à La Conciergerie"], "bonne": 2}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "Quels rapports familiaux unissent-ils les personnages suivants les uns aux autres ? - Créon et Hémon, - Antigone et Hémon.", "correction": "Créon est père d'Hémon (et éventuellement Hémon est fils de Créon). (0,25 pt) Antigone est la fiancée d'Hémon. (0,25 pt)"}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Analyse du texte 1 : D'après le texte, combien de temps reste-t-il au narrateur avant son exécution ?", "correction": "Une heure"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Pour pouvoir supporter le moment de son exécution, le narrateur croit qu'il lui faut de la fermeté et du courage. Relevez du texte une expression qui le montre.", "correction": "Maintenant il faut que je me roidisse en moi-même, et que je pense fermement…."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Le narrateur porte-t-il sur le lieu de son exécution un jugement favorable ou défavorable ? Justifiez votre réponse par un adjectif relevé du texte.", "correction": "Il porte un jugement défavorable : (0,5pt) / Justification : lugubre : (0,5pt)"}, {"type": "libre", "numero": "5", "points": 0.5, "enonce": "Le narrateur dit : « *qu'on m'emportât mon enfant* ». De quel (le) enfant parle-t-il ?", "correction": "Sa fille Marie."}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "Quelle réaction le gendarme et le prêtre ont-ils manifestée quand le condamné a demandé qu'on lui emportât son enfant ?", "correction": "Réaction du prêtre et du gendarme : ils ont versé une larme (accepter également : ils ont pleuré)."}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "« *à **la foule** sur le pont, à **la foule** sur le quai, à **la foule** aux fenêtres* ». Pourquoi le narrateur répète-t-il le mot « **foule** » dans cette phrase ? [souligné sur la feuille, en gras ici]", "correction": "La répétition du mot « foule » vise essentiellement à insister sur la présence de la foule et notamment sur le grand nombre de personnes qui assisteraient à son exécution. Accepter toute autre réponse jugée valable."}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "Analyse du texte 2 : D'après ce dialogue, quel est le but poursuivi par Hémon ?", "correction": "Hémon demande à son père de sauver Antigone ; le supplie, le demande avec insistance,…."}, {"type": "libre", "numero": "7b", "points": 0.5, "enonce": "Quel argument Créon présente-t-il pour justifier son incapacité de satisfaire la demande de son fils ?", "correction": "L'argument présenté par Créon : Elle a parlé maintenant / Tout Thèbes sait ce qu'elle a fait / la foule sait déjà…"}, {"type": "libre", "numero": "7c", "points": 0.5, "enonce": "Relevez du texte une didascalie qui traduit la relation tendue entre Hémon et son père.", "correction": "la didascalie : *s'arrache de ses bras*."}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "« *Tout Thèbes sait ce qu'elle a fait.* » Quelle est la figure de style employée dans cet énoncé ?", "correction": "La métonymie ; (0,5pt)"}, {"type": "choix", "numero": "8b", "points": 0.5, "enonce": "Créon emploie cette figure de style pour montrer :", "options": ["qu'il est trop tard pour sauver Antigone,", "qu'il y a encore suffisamment de temps pour sauver Antigone,", "qu'il y aura d'autres chances pour sauver Antigone."], "bonne": 0}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Réaction individuelle : En vous fondant sur votre lecture de l'œuvre, croyez-vous que le narrateur du premier texte mérite la peine de mort ? Justifiez votre réponse par un ou deux arguments.", "correction": "Réponse justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Si vous étiez à la place de Créon, accepteriez-vous de sauver Antigone bien qu'elle n'ait pas respecté la loi ? Justifiez votre réponse.", "correction": "Point de vue justifié."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\n« La prison corrige, rééduque et aide le prisonnier à commencer une nouvelle vie ».\n\nPartagez-vous cette opinion ? Justifiez votre point de vue en vous appuyant sur des arguments et des exemples pertinents.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
