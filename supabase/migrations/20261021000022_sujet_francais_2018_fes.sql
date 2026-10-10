-- Sujet de français, examen régional 2018 (session normale), académie
-- Fès-Meknès, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2018 جهة فاس مكناس »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Fès-Meknès, session normale 2018 (en-tête en arabe, durée et
-- coefficient non relevés). La question 1 demande de corriger un paragraphe
-- de présentation : elle est saisie comme question libre.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2018,
  $sujet$normale$sujet$,
  $sujet$Fès-Meknès$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$## Texte

Un vendredi, mon père, gonflé d'orgueil, raconta à ma mère la conversation qu'il avait eue la veille avec mon maître rencontré dans la rue. Le fqih lui avait assuré que, si je continuais à travailler avec autant de cœur et d'enthousiasme, je deviendrais un jour un savant dont il pourrait être très fier.

Certes ce n'était pas le but que je poursuivais. Le mot savant évoquait pour moi l'image d'un homme obèse à figure très large frangée de barbe, aux vêtements amples et blancs, au turban monumental. Je n'avais aucune envie de ressembler à un tel homme.

J'apprenais chaque jour ma leçon parce qu'il me semblait que mes parents m'en aimaient davantage et surtout j'évitais ainsi la rencontre avec la lancinante baguette de cognassier. Je m'étais tracé un vague programme : jusqu'au déjeuner, j'apprenais avec ferveur les versets, tracés sur ma planchette, l'après-midi, je m'accordais deux bonnes heures de rêve, tout en faisant semblant de scander les paroles sacrées.

À cette récréation, je devais tout mon entrain. Mon esprit s'échappait des étroites limites de l'école et s'en allait explorer un autre univers, là il ne subissait aucune contrainte. Dans cet univers, je n'étais pas toujours un petit prince, auquel obéissaient les êtres et les choses, il m'arrivait parfois de devenir homme, l'homme que je souhaitais devenir plus tard. Je me voyais simple et robuste, portant des vêtements en laine grège⁽¹⁾, les yeux pleins de flamme et le cœur débordant de tendresse.

*(1) Couleur de soie à l'état pur d'un beige clair tirant sur le gris.*

## I. Étude de texte (10 points)

**1.** Il y a quatre erreurs d'information dans ce texte de présentation ; corrigez-les, puis recopiez le texte. « La boîte à merveilles est un roman à thèse publié au XIXème siècle. Le narrateur y raconte la solitude d'un enfant âgé de sept ans vivant aux environs de Fès. » **(0,25x4)**

**2a.** Répondez aux questions suivantes pour situer cet extrait dans l'œuvre : L'enfant a repris goût à l'école grâce: (Choisissez la bonne réponse) **(0,5)**

a- au changement de décor du Msid ;  
b- à la venue d'un nouveau fqih ;  
c- à l'achat de nouveaux vêtements.

**2b.** Avant, pourquoi avait-il peur d'aller à l'école coranique ? **(0,5)**

**3a.** Le narrateur apprenait ses leçons pour faire plaisir à son maître. D'après votre lecture de l'extrait, cette affirmation est-elle vraie ou fausse ? **(0,5)**

**3b.** Relevez dans le texte une expression pour justifier votre réponse. **(0,5)**

**4a.** Quel sentiment le père éprouvait-il en racontant à son épouse sa rencontre avec le maître du Msid ? **(0,5)**

**4b.** La figure de style employée pour mettre en valeur le sentiment du père est-elle : une hyperbole, une antithèse ou une anaphore ? **(0,5)**

a- une hyperbole  
b- une antithèse  
c- une anaphore

**5.** Le fqih avait assuré au père que, si son fils continuait à travailler avec autant de cœur et d'enthousiasme, il deviendrait un jour un savant. - Refaites cette phrase au discours direct en commençant par : Le fqih avait assuré au père : « …….. » **(1)**

**6a.** Quelle image le mot « savant » évoquait-il pour le narrateur ? **(1)**

**6b.** Cette image est-elle présentée de manière valorisante ou dévalorisante ? **(0,5)**

**7a.** À quelle activité le petit enfant se plaisait-il l'après-midi ? **(0,5)**

**7b.** Relevez un trait physique et un trait moral de l'homme qu'il voulait devenir plus tard. **(0,5x2)**

**8.** À votre avis, le petit enfant avait-il raison de faire semblant d'apprendre ses leçons l'après-midi ? Justifiez votre réponse par un argument pertinent. **(0,5 + 0,5)**

**9.** Aimez-vous vous préparer aux examens seul (e) ou en groupe ? Justifiez votre réponse par un argument personnel. **(0,5 + 0,5)**

## II. Production écrite (10 points)

**Sujet :** Il est évident que les parents doivent aider leurs enfants à prendre la bonne décision concernant leur avenir. Cependant, certains de ces parents vont parfois jusqu'à obliger leur fille ou leur fils à choisir une branche, une filière ou une option qui ne convient ni à leurs goûts, ni à leurs préférences, ni à leurs capacités.

Que pensez-vous de ce comportement ?

Rédigez un texte dans lequel vous exprimez votre point de vue à l'aide d'arguments et d'exemples appropriés.

**La correction de votre production tiendra compte des critères d'évaluation suivants :**

| | |
|---|---|
| A- Respect de la consigne (se conformer à ce qui est demandé dans le sujet) : | 1pt |
| B- Structure : (introduction - développement - conclusion) | 1pt |
| C- Pertinence des arguments et emploi des liens logiques : | 3pts |
| D- Correction de la langue (construction des phrases, orthographe, vocabulaire approprié...) : | 4pts |
| E- Présentation du texte (alinéas, paragraphes, ponctuation, majuscule.) : | 1pt |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute formulation - ou réponse - non prévue est laissée à l'appréciation de la correctrice ou du correcteur.*

### I. Étude de texte

**1.** - Un roman autobiographique (0,25) - XXème siècle (0,25) - six ans (0,25) -à Fès. (0,25) **(0,25x4)**

**2a.** a- au changement de décor du Msid ; **(0,5)**

**2b.** Avant, il avait peur du Msid car le fqih était un homme sévère. (Accepter toute réponse valable.) **(0,5)**

**3a.** Fausse. **(0,5)**

**3b.** Justification : «J'apprenais chaque jour ma leçon parce qu'il me semblait que mes parents m'en aimaient davantage » ou «et surtout j'évitais ainsi la rencontre avec la lancinante baguette de cognassier. » **(0,5)**

**4a.** Le père éprouve un sentiment d'orgueil / de fierté. (Accepter tout autre synonyme.) **(0,5)**

**4b.** a- une hyperbole **(0,5)**

**5.** Le fqih avait assuré au père : « Si (0,25) ton (0,25) fils continue (0,25) à travailler avec autant de cœur et d'enthousiasme, il deviendra (0,25) un jour un savant.» **(1)**

**6a.** « Un homme obèse(0,25) à figure très large, frangée de barbe, (0,25) aux vêtements amples et blancs, (0,25) au turban monumental. » (0,25) **(1)**

**6b.** Cette image est présentée de manière dévalorisante. **(0,5)**

**7a.** L'activité à laquelle l'enfant se plaisait l'après-midi est : le rêve ou rêver. **(0,5)**

**7b.** * Trait physique : « simple » ou « robuste » ou « portant des vêtements en laine grège.» (0,5) * Trait moral: «les yeux pleins de flamme » ou « le cœur débordant de tendresse. » (0,5) **(0,5x2)**

**8.** Accepter tout point de vue (0,5) justifié d'une manière pertinente. (0,5) **(0,5 + 0,5)**

**9.** Accepter tout point de vue personnel (0,5) justifié de façon adéquate. (0,5) **(0,5 + 0,5)**

### II. Production écrite

Tenir impérativement compte des critères spécifiés en accordant la note finale sur la base des notes partielles attribuées et dûment reportées sur la copie de la candidate du candidat.

| | |
|---|---|
| A- Respect de la consigne (se conformer à ce qui est demandé dans le sujet) : | 1pt |
| B- Structure : (introduction - développement - conclusion) | 1pt |
| C- Pertinence des arguments et emploi des liens logiques : | 3pts |
| D- Correction de la langue (construction des phrases, orthographe, vocabulaire approprié...) : | 4pts |
| E- Présentation du texte (alinéas, paragraphes, ponctuation, majuscule.) : | 1pt |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Un vendredi, mon père, gonflé d'orgueil, raconta à ma mère la conversation qu'il avait eue la veille avec mon maître rencontré dans la rue. Le fqih lui avait assuré que, si je continuais à travailler avec autant de cœur et d'enthousiasme, je deviendrais un jour un savant dont il pourrait être très fier.\n\nCertes ce n'était pas le but que je poursuivais. Le mot savant évoquait pour moi l'image d'un homme obèse à figure très large frangée de barbe, aux vêtements amples et blancs, au turban monumental. Je n'avais aucune envie de ressembler à un tel homme.\n\nJ'apprenais chaque jour ma leçon parce qu'il me semblait que mes parents m'en aimaient davantage et surtout j'évitais ainsi la rencontre avec la lancinante baguette de cognassier. Je m'étais tracé un vague programme : jusqu'au déjeuner, j'apprenais avec ferveur les versets, tracés sur ma planchette, l'après-midi, je m'accordais deux bonnes heures de rêve, tout en faisant semblant de scander les paroles sacrées.\n\nÀ cette récréation, je devais tout mon entrain. Mon esprit s'échappait des étroites limites de l'école et s'en allait explorer un autre univers, là il ne subissait aucune contrainte. Dans cet univers, je n'étais pas toujours un petit prince, auquel obéissaient les êtres et les choses, il m'arrivait parfois de devenir homme, l'homme que je souhaitais devenir plus tard. Je me voyais simple et robuste, portant des vêtements en laine grège⁽¹⁾, les yeux pleins de flamme et le cœur débordant de tendresse.\n\n*(1) Couleur de soie à l'état pur d'un beige clair tirant sur le gris.*", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "Il y a quatre erreurs d'information dans ce texte de présentation ; corrigez-les, puis recopiez le texte. « La boîte à merveilles est un roman à thèse publié au XIXème siècle. Le narrateur y raconte la solitude d'un enfant âgé de sept ans vivant aux environs de Fès. »", "correction": "- Un roman autobiographique (0,25) - XXème siècle (0,25) - six ans (0,25) -à Fès. (0,25)"}, {"type": "choix", "numero": "2a", "points": 0.5, "enonce": "Répondez aux questions suivantes pour situer cet extrait dans l'œuvre : L'enfant a repris goût à l'école grâce: (Choisissez la bonne réponse)", "options": ["au changement de décor du Msid ;", "à la venue d'un nouveau fqih ;", "à l'achat de nouveaux vêtements."], "bonne": 0}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "Avant, pourquoi avait-il peur d'aller à l'école coranique ?", "correction": "Avant, il avait peur du Msid car le fqih était un homme sévère. (Accepter toute réponse valable.)"}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Le narrateur apprenait ses leçons pour faire plaisir à son maître. D'après votre lecture de l'extrait, cette affirmation est-elle vraie ou fausse ?", "correction": "Fausse."}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Relevez dans le texte une expression pour justifier votre réponse.", "correction": "Justification : «J'apprenais chaque jour ma leçon parce qu'il me semblait que mes parents m'en aimaient davantage » ou «et surtout j'évitais ainsi la rencontre avec la lancinante baguette de cognassier. »"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Quel sentiment le père éprouvait-il en racontant à son épouse sa rencontre avec le maître du Msid ?", "correction": "Le père éprouve un sentiment d'orgueil / de fierté. (Accepter tout autre synonyme.)"}, {"type": "choix", "numero": "4b", "points": 0.5, "enonce": "La figure de style employée pour mettre en valeur le sentiment du père est-elle : une hyperbole, une antithèse ou une anaphore ?", "options": ["une hyperbole", "une antithèse", "une anaphore"], "bonne": 0}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Le fqih avait assuré au père que, si son fils continuait à travailler avec autant de cœur et d'enthousiasme, il deviendrait un jour un savant. - Refaites cette phrase au discours direct en commençant par : Le fqih avait assuré au père : « …….. »", "correction": "Le fqih avait assuré au père : « Si (0,25) ton (0,25) fils continue (0,25) à travailler avec autant de cœur et d'enthousiasme, il deviendra (0,25) un jour un savant.»"}, {"type": "libre", "numero": "6a", "points": 1, "enonce": "Quelle image le mot « savant » évoquait-il pour le narrateur ?", "correction": "« Un homme obèse(0,25) à figure très large, frangée de barbe, (0,25) aux vêtements amples et blancs, (0,25) au turban monumental. » (0,25)"}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "Cette image est-elle présentée de manière valorisante ou dévalorisante ?", "correction": "Cette image est présentée de manière dévalorisante."}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "À quelle activité le petit enfant se plaisait-il l'après-midi ?", "correction": "L'activité à laquelle l'enfant se plaisait l'après-midi est : le rêve ou rêver."}, {"type": "libre", "numero": "7b", "points": 1, "enonce": "Relevez un trait physique et un trait moral de l'homme qu'il voulait devenir plus tard.", "correction": "* Trait physique : « simple » ou « robuste » ou « portant des vêtements en laine grège.» (0,5) * Trait moral: «les yeux pleins de flamme » ou « le cœur débordant de tendresse. » (0,5)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "À votre avis, le petit enfant avait-il raison de faire semblant d'apprendre ses leçons l'après-midi ? Justifiez votre réponse par un argument pertinent.", "correction": "Accepter tout point de vue (0,5) justifié d'une manière pertinente. (0,5)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Aimez-vous vous préparer aux examens seul (e) ou en groupe ? Justifiez votre réponse par un argument personnel.", "correction": "Accepter tout point de vue personnel (0,5) justifié de façon adéquate. (0,5)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Il est évident que les parents doivent aider leurs enfants à prendre la bonne décision concernant leur avenir. Cependant, certains de ces parents vont parfois jusqu'à obliger leur fille ou leur fils à choisir une branche, une filière ou une option qui ne convient ni à leurs goûts, ni à leurs préférences, ni à leurs capacités.\n\nQue pensez-vous de ce comportement ?\n\nRédigez un texte dans lequel vous exprimez votre point de vue à l'aide d'arguments et d'exemples appropriés.\n\n**La correction de votre production tiendra compte des critères d'évaluation suivants :**\n\n| | |\n|---|---|\n| A- Respect de la consigne (se conformer à ce qui est demandé dans le sujet) : | 1pt |\n| B- Structure : (introduction - développement - conclusion) | 1pt |\n| C- Pertinence des arguments et emploi des liens logiques : | 3pts |\n| D- Correction de la langue (construction des phrases, orthographe, vocabulaire approprié...) : | 4pts |\n| E- Présentation du texte (alinéas, paragraphes, ponctuation, majuscule.) : | 1pt |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
