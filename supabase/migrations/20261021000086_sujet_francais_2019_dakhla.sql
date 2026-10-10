-- Sujet de français, examen régional 2019 (session normale), académie
-- Dakhla-Oued Ed-Dahab, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2019 جهة الداخلة وادي الذهب »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Dakhla-Oued Ed-Dahab (« الأكاديمية الجهوية للتربية والتكوين
-- جهة الداخلة وادي الذهب »), « الدورة العادية - يونيو 2019 », « السنة
-- الأولى من سلك البكالوريا », matière « اللغة الأجنبية الأولى », « جميع
-- الشعب الأدبية والعلمية والتقنية », durée « ساعتان ». Coefficient « 4/3 »
-- (laissé vide).
-- Question 2 : le corrigé numérote ses quatre lignes « a, a, b, c » au lieu
-- de a, b, c, d ; les quatre réponses (FAUX, FAUX, VRAI, FAUX) sont
-- reportées dans l'ordre des quatre affirmations.
-- Question 8 : chaque croix lue sur le scan (le corrigé coche « Vrai » pour
-- l'antithèse et l'énumération).
-- Questions 9 et 10 : le corrigé dit seulement « On accepte les réponses
-- dûment argumentées (1pt). »
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2019,
  $sujet$normale$sujet$,
  $sujet$Dakhla-Oued Ed-Dahab$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Toutes les séries littéraires, scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

Tout le monde dans le quartier connaissait Sidi Mohammed ben Tahar, le coiffeur. Il s'habillait de blanc, portait une barbe rare et sur ses lèvres flottait un éternel sourire. Il faisait son marché lui-même et maintes fois je l'avais croisé dans notre impasse chargé d'un couffin d'alfa; on y pouvait voir les légumes de la saison, quelquefois un morceau de viande rose, des oignons ou de l'ail.

Les hurlements s'étaient calmés, le vacarme s'était transformé en lamentations continues sur un ton grave, une sorte de chant au rythme naïf.

Ma mère descendit dans la chambre, elle remonta, la tête enveloppée dans une légère couverture. Elle dit à Rahma :

– Je vais passer par-dessus le mur, cela me fera du bien d'aller pleurer un peu.

– Mé, lui dis-je, emmène-moi, je veux, moi aussi, pleurer un peu.

– Non, décida ma mère, tu es encore trop jeune et puis tu es un garçon. Tout à l'heure, les récitateurs du Coran viendront psalmodier et tu pourras te joindre à eux.

– Je veux pleurer ! Je veux pleurer ! insistai-je.

– Attrape et pleure pour de bon.

Cette phrase fut accompagnée d'un soufflet magistral.

Je me mis à sangloter. Rahma intervint en ma faveur. Elle finit par convaincre ma mère de m'emmener. Les deux femmes m'aidèrent à franchir le mur mitoyen. Je ne pleurais plus. Je sautais les marches quatre à quatre pour rejoindre les pleureuses au rez-de-chaussée.

Elles étaient une vingtaine qui manifestaient bruyamment leur douleur. Par terre, il y avait des matelas et des nattes. D'autres pleureuses arrivaient, s'annonçaient dès l'entrée par des cris stridents. Celles qui étaient déjà à la maison leur répondaient par d'autres vociférations. La femme du coiffeur, la voix enrouée, gémissait, se donnant de grands coups du plat de la main, sur les joues et sur les cuisses. Le spectacle me fascinait au point d'oublier le but de ma visite. J'étais venu pour pleurer et je ne pleurais pas. J'essayais de comprendre ce que disait une vieille femme échevelée. Elle baissait la tête jusqu'au sol, la relevait, chantait en allongeant les finales…

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1 pt)**

| Nom de l'auteur | Titre de l'œuvre | Genre de l'œuvre | Titre d'une autre œuvre du même auteur |
|---|---|---|---|
| | | | |

**2.** A partir de votre lecture de l'œuvre, complétez par vrai ou faux les affirmations suivantes : **(1pt)**

| | Vrai | Faux |
|---|---|---|
| Le narrateur attend, avec impatience, les jours de récitation du Coran au M'sid. | | |
| Sidi Mohammed ben Taher est un fabriquant de charrues. | | |
| Rahma est la voisine de la famille du narrateur à *Dar Chouafa*. | | |
| Sidi Mohammed apprécie la compagnie de Zineb. | | |

**3a.** Pourquoi entend-on des hurlements dans le quartier du narrateur ? **(0,5 pt)**

**3b.** Justifiez votre réponse par une expression tirée du texte. **(0,5 pt)**

**4a.** Dans quel état moral se trouve Lalla Zoubida lorsqu'elle se confie à Rahma ? **(0,5 pt)**

**4b.** Quel acte entrepris par la mère fait sangloter l'enfant ? **(0,5)**

**5a.** De quel type de texte s'agit-il dans le dernier paragraphe ? **(0,5 pt)**

**5b.** Justifiez votre réponse en relevant deux indices tirés de ce paragraphe. **(0,5 pt)**

**6a.** Quel champ lexical domine dans le dernier paragraphe ? **(0,5 pt)**

**6b.** Justifiez votre réponse en relevant dans ce paragraphe deux termes du champ trouvé. **(0,5 pt)**

**7.** Recopiez et complétez le tableau selon les constituants de la phrase suivante : « Elles étaient une vingtaine qui manifestaient bruyamment leur douleur. » **(1 pt)**

| Proposition principale | Proposition subordonnée | Subordonnant | Nature de la subordonnée |
|---|---|---|---|
| | | | |

**8.** Soit la phrase suivante : « Elle baissait la tête jusqu'au sol, la relevait, chantait en allongeant les finales » Identifiez les figures de styles dans cette phrase puis recopiez et complétez le tableau ci-dessous, en répondant par Vrai ou Faux (ou par mettre une croix (X) à la bonne case). **(1pt)**

| | Vrai | Faux |
|---|---|---|
| *Antithèse* | | |
| *Métonymie* | | |
| *Enumération* | | |
| *comparaison* | | |

**9.** La mère gifle son garçon. D'après vous, est-il convenable que les parents frappent leurs enfants ? Justifiez votre réponse. **(1pt)**

**10.** Le narrateur est témoin d'un spectacle désolant chargé d'émotions fortes. Pensez-vous qu'il est acceptable de laisser un enfant assister à des scènes qui risqueraient de le choquer ? justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

A la mort d'un proche, certaines familles organisent des cérémonies funèbres dans une ambiance qui rappelle celle d'une fête. Ainsi, elles dépensent beaucoup d'argent juste pour les apparences. Or, cette manière de faire est rejetée par d'autres.

A votre avis, devrait-on accorder de l'importance aux apparences dans une pareille occasion?

Rédigez un texte argumentatif dans lequel vous développerez votre point de vue.

*Lors de votre rédaction, vous devrez tenir compte des critères suivants :*

| 5 points | 5 points |
|---|---|
| **Critères d'évaluation du discours** | **Critère d'évaluation de la langue** |
| Conformité de la production à la consigne d'écriture. | Vocabulaire (usage de termes précis et variés). |
| Cohérence de l'argumentation. | Syntaxe (construction de phrases correctes). |
| Structure du texte (organisation et progression du texte). | Orthographe d'usage et orthographe grammaticale. |
| | Conjugaison et emploi des temps verbaux. |
| | Ponctuation et mise en page. |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse.*

### I. Étude de texte

**1.** **(1 pt)**

| Nom de l'auteur | Titre de l'œuvre | Genre de l'œuvre | Titre d'une autre œuvre du même auteur |
|---|---|---|---|
| Ahmed SEFRIOUI | La Boite à Merveilles | Roman autobiographique | -*Le Chapelet d'ambre* - *La Maison de servitude* - *Le jardin des sortilèges ou le parfum des légendes* |

**2.** **(1pt)**

| | |
|---|---|
| Le narrateur attend, avec impatience, les jours de récitation du Coran au M'sid. | Faux |
| Sidi Mohammed ben Taher est un fabriquant de charrues. | Faux |
| Rahma est la voisine de la famille du narrateur à *Dar Chouafa*. | Vrai |
| Sidi Mohammed apprécie la compagnie de Zineb. | Faux |

**3a.** Mohammed ben Tahar, le coiffeur, vient de mourir. On pleure sa mort chez lui. *(Réponse déductible de la lecture de l'œuvre par l'apprenant, et du présent passage, en partie)* **(0,5 pt)**

**3b.** Justification : UNE SEULE citation de celles ci-après mentionnées suffit. « Les hurlements s'étaient calmés, le vacarme s'était transformé en lamentations continues sur un ton grave, une sorte de chant au rythme naïf. » / « La femme du coiffeur, la voix enrouée, gémissait, se donnant de grands coups du plat de la main, sur les joues et sur les cuisses. » / « une vingtaine qui manifestaient bruyamment leur douleur. » / « D'autres pleureuses arrivaient, s'annonçaient dès l'entrée par des cris stridents. » / « Celles qui étaient déjà à la maison leur répondaient par d'autres vociférations. » / « Elle baissait la tête jusqu'au sol, la relevait, chantait en allongeant les finales… » **(0,5 pt)**

**4a.** tristesse- colère- nervosité, etc. (on accepte toute réponse allant dans ce sens). **(0,5 pt)**

**4b.** La gifle qu'elle fait subir à son enfant. **(0,5)**

**5a.** Types de texte (0.5 pt) : Texte descriptif / Texte narratif / Texte narratif-descriptif. **(0,5 pt)**

**5b.** Justification (0.25 pt x 2) : texte descriptif ou texte narratif : DEUX indices textuels pour ce type de texte ; texte narratif-descriptif : UN indice pour le type narratif, UN indice pour le type descriptif. Type DESCRIPTIF, exemples (indices) : Verbe d'état : *Etaient* ; Imparfait de l'indicatif : *Etaient etc.* ; Subordonnées Relatives : *qui manifestaient bruyamment leur douleur* - *qui étaient déjà à la maison* ; Adjectifs et participes passés adjectivés : *Stridents — grands - vieille - enrouée – échevelée.* ; Complément du nom : *du coiffeur - de la main - de ma visite -* ; Locution verbale : *il y avait* ; Adverbe /Locution adverbiale/ Connecteur spatial : *Bruyamment, Par terre.* Type NARRATIF, exemples (indices) : Verbes d'action : *Arrivaient - s'annonçaient – répondaient – gémissait– pleurais- essayais- Baissait- relevait - chantait* ; Plus-que-parfait : étais venu **(0,5 pt)**

**6a.** Champ lexical 1 : « La douleur (malheur – tristesse – souffrance- deueil- mort) » ou Champ lexical 2 : Le bruit (son- vacarme, tumulte, cri, hurlement etc.) **(0,5 pt)**

**6b.** Pour la douleur : douleur- pleureuses – cris – vociférations – enrouée- gémissait – pleurer – pleurais -coups. Pour le bruit : bruyamment- pleureuses - cris- stridents- répondaient – vociférations- voix – enrouée- gémissait- chantait **(0,5 pt)**

**7.** **(1 pt)**

| Proposition principale | Proposition subordonnée | Subordonnant | Nature de la subordonnée |
|---|---|---|---|
| Elles étaient une vingtaine (0,25 pt) | qui manifestaient bruyamment leur douleur (0,25 pt) | qui (0,25 pt) | Proposition subordonnée RELATIVE (0,25 pt) |

**8.** **(1pt)**

| | |
|---|---|
| *Antithèse* | Vrai |
| *Métonymie* | Faux |
| *Enumération* | Vrai |
| *comparaison* | Faux |

**9.** On accepte les réponses dûment argumentées. **(1pt)**

**10.** On accepte les réponses dûment argumentées. **(1pt)**

### II. Production écrite

*Le correcteur tiendra impérativement compte des critères et barèmes suivants :*

| 5 points | | 5 points | |
|---|---|---|---|
| **Critères d'évaluation du discours** | | **Critère d'évaluation de la langue** | |
| Conformité de la production à la consigne d'écriture | 1pt | Vocabulaire (usage de termes précis et variés) | 1pt |
| Cohérence de l'argumentation | 2pt | Syntaxe (construction de phrases correctes) | 1pt |
| Structure du texte (organisation et progression du texte) | 2pt | Orthographe d'usage et orthographe grammaticale | 1pt |
| | | Conjugaison et emploi des temps verbaux | 1pt |
| | | Ponctuation et mise en page | 1pt |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Tout le monde dans le quartier connaissait Sidi Mohammed ben Tahar, le coiffeur. Il s'habillait de blanc, portait une barbe rare et sur ses lèvres flottait un éternel sourire. Il faisait son marché lui-même et maintes fois je l'avais croisé dans notre impasse chargé d'un couffin d'alfa; on y pouvait voir les légumes de la saison, quelquefois un morceau de viande rose, des oignons ou de l'ail.\n\nLes hurlements s'étaient calmés, le vacarme s'était transformé en lamentations continues sur un ton grave, une sorte de chant au rythme naïf.\n\nMa mère descendit dans la chambre, elle remonta, la tête enveloppée dans une légère couverture. Elle dit à Rahma :\n\n– Je vais passer par-dessus le mur, cela me fera du bien d'aller pleurer un peu.\n\n– Mé, lui dis-je, emmène-moi, je veux, moi aussi, pleurer un peu.\n\n– Non, décida ma mère, tu es encore trop jeune et puis tu es un garçon. Tout à l'heure, les récitateurs du Coran viendront psalmodier et tu pourras te joindre à eux.\n\n– Je veux pleurer ! Je veux pleurer ! insistai-je.\n\n– Attrape et pleure pour de bon.\n\nCette phrase fut accompagnée d'un soufflet magistral.\n\nJe me mis à sangloter. Rahma intervint en ma faveur. Elle finit par convaincre ma mère de m'emmener. Les deux femmes m'aidèrent à franchir le mur mitoyen. Je ne pleurais plus. Je sautais les marches quatre à quatre pour rejoindre les pleureuses au rez-de-chaussée.\n\nElles étaient une vingtaine qui manifestaient bruyamment leur douleur. Par terre, il y avait des matelas et des nattes. D'autres pleureuses arrivaient, s'annonçaient dès l'entrée par des cris stridents. Celles qui étaient déjà à la maison leur répondaient par d'autres vociférations. La femme du coiffeur, la voix enrouée, gémissait, se donnant de grands coups du plat de la main, sur les joues et sur les cuisses. Le spectacle me fascinait au point d'oublier le but de ma visite. J'étais venu pour pleurer et je ne pleurais pas. J'essayais de comprendre ce que disait une vieille femme échevelée. Elle baissait la tête jusqu'au sol, la relevait, chantait en allongeant les finales…", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Nom de l'auteur", "reponse": "Ahmed SEFRIOUI"}, {"libelle": "Titre de l'œuvre", "reponse": "La Boite à Merveilles"}, {"libelle": "Genre de l'œuvre", "reponse": "Roman autobiographique"}, {"libelle": "Titre d'une autre œuvre du même auteur", "reponse": "-*Le Chapelet d'ambre* - *La Maison de servitude* - *Le jardin des sortilèges ou le parfum des légendes*"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "A partir de votre lecture de l'œuvre, complétez par vrai ou faux les affirmations suivantes :", "affirmations": [{"texte": "Le narrateur attend, avec impatience, les jours de récitation du Coran au M'sid.", "vrai": false}, {"texte": "Sidi Mohammed ben Taher est un fabriquant de charrues.", "vrai": false}, {"texte": "Rahma est la voisine de la famille du narrateur à *Dar Chouafa*.", "vrai": true}, {"texte": "Sidi Mohammed apprécie la compagnie de Zineb.", "vrai": false}]}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Pourquoi entend-on des hurlements dans le quartier du narrateur ?", "correction": "Mohammed ben Tahar, le coiffeur, vient de mourir. On pleure sa mort chez lui. *(Réponse déductible de la lecture de l'œuvre par l'apprenant, et du présent passage, en partie)*"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Justifiez votre réponse par une expression tirée du texte.", "correction": "Justification : UNE SEULE citation de celles ci-après mentionnées suffit. « Les hurlements s'étaient calmés, le vacarme s'était transformé en lamentations continues sur un ton grave, une sorte de chant au rythme naïf. » / « La femme du coiffeur, la voix enrouée, gémissait, se donnant de grands coups du plat de la main, sur les joues et sur les cuisses. » / « une vingtaine qui manifestaient bruyamment leur douleur. » / « D'autres pleureuses arrivaient, s'annonçaient dès l'entrée par des cris stridents. » / « Celles qui étaient déjà à la maison leur répondaient par d'autres vociférations. » / « Elle baissait la tête jusqu'au sol, la relevait, chantait en allongeant les finales… »"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Dans quel état moral se trouve Lalla Zoubida lorsqu'elle se confie à Rahma ?", "correction": "tristesse- colère- nervosité, etc. (on accepte toute réponse allant dans ce sens)."}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Quel acte entrepris par la mère fait sangloter l'enfant ?", "correction": "La gifle qu'elle fait subir à son enfant."}, {"type": "libre", "numero": "5a", "points": 0.5, "enonce": "De quel type de texte s'agit-il dans le dernier paragraphe ?", "correction": "Types de texte (0.5 pt) : Texte descriptif / Texte narratif / Texte narratif-descriptif."}, {"type": "libre", "numero": "5b", "points": 0.5, "enonce": "Justifiez votre réponse en relevant deux indices tirés de ce paragraphe.", "correction": "Justification (0.25 pt x 2) : texte descriptif ou texte narratif : DEUX indices textuels pour ce type de texte ; texte narratif-descriptif : UN indice pour le type narratif, UN indice pour le type descriptif. Type DESCRIPTIF, exemples (indices) : Verbe d'état : *Etaient* ; Imparfait de l'indicatif : *Etaient etc.* ; Subordonnées Relatives : *qui manifestaient bruyamment leur douleur* - *qui étaient déjà à la maison* ; Adjectifs et participes passés adjectivés : *Stridents — grands - vieille - enrouée – échevelée.* ; Complément du nom : *du coiffeur - de la main - de ma visite -* ; Locution verbale : *il y avait* ; Adverbe /Locution adverbiale/ Connecteur spatial : *Bruyamment, Par terre.* Type NARRATIF, exemples (indices) : Verbes d'action : *Arrivaient - s'annonçaient – répondaient – gémissait– pleurais- essayais- Baissait- relevait - chantait* ; Plus-que-parfait : étais venu"}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "Quel champ lexical domine dans le dernier paragraphe ?", "correction": "Champ lexical 1 : « La douleur (malheur – tristesse – souffrance- deueil- mort) » ou Champ lexical 2 : Le bruit (son- vacarme, tumulte, cri, hurlement etc.)"}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "Justifiez votre réponse en relevant dans ce paragraphe deux termes du champ trouvé.", "correction": "Pour la douleur : douleur- pleureuses – cris – vociférations – enrouée- gémissait – pleurer – pleurais -coups. Pour le bruit : bruyamment- pleureuses - cris- stridents- répondaient – vociférations- voix – enrouée- gémissait- chantait"}, {"type": "tableau", "numero": "7", "points": 1, "enonce": "Recopiez et complétez le tableau selon les constituants de la phrase suivante : « Elles étaient une vingtaine qui manifestaient bruyamment leur douleur. »", "champs": [{"libelle": "Proposition principale", "reponse": "Elles étaient une vingtaine (0,25 pt)"}, {"libelle": "Proposition subordonnée", "reponse": "qui manifestaient bruyamment leur douleur (0,25 pt)"}, {"libelle": "Subordonnant", "reponse": "qui (0,25 pt)"}, {"libelle": "Nature de la subordonnée", "reponse": "Proposition subordonnée RELATIVE (0,25 pt)"}]}, {"type": "vrai-faux", "numero": "8", "points": 1, "enonce": "Soit la phrase suivante : « Elle baissait la tête jusqu'au sol, la relevait, chantait en allongeant les finales » Identifiez les figures de styles dans cette phrase puis recopiez et complétez le tableau ci-dessous, en répondant par Vrai ou Faux (ou par mettre une croix (X) à la bonne case).", "affirmations": [{"texte": "*Antithèse*", "vrai": true}, {"texte": "*Métonymie*", "vrai": false}, {"texte": "*Enumération*", "vrai": true}, {"texte": "*comparaison*", "vrai": false}]}, {"type": "libre", "numero": "9", "points": 1, "enonce": "La mère gifle son garçon. D'après vous, est-il convenable que les parents frappent leurs enfants ? Justifiez votre réponse.", "correction": "On accepte les réponses dûment argumentées."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Le narrateur est témoin d'un spectacle désolant chargé d'émotions fortes. Pensez-vous qu'il est acceptable de laisser un enfant assister à des scènes qui risqueraient de le choquer ? justifiez votre réponse.", "correction": "On accepte les réponses dûment argumentées."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nA la mort d'un proche, certaines familles organisent des cérémonies funèbres dans une ambiance qui rappelle celle d'une fête. Ainsi, elles dépensent beaucoup d'argent juste pour les apparences. Or, cette manière de faire est rejetée par d'autres.\n\nA votre avis, devrait-on accorder de l'importance aux apparences dans une pareille occasion?\n\nRédigez un texte argumentatif dans lequel vous développerez votre point de vue.\n\n*Lors de votre rédaction, vous devrez tenir compte des critères suivants :*\n\n| 5 points | 5 points |\n|---|---|\n| **Critères d'évaluation du discours** | **Critère d'évaluation de la langue** |\n| Conformité de la production à la consigne d'écriture. | Vocabulaire (usage de termes précis et variés). |\n| Cohérence de l'argumentation. | Syntaxe (construction de phrases correctes). |\n| Structure du texte (organisation et progression du texte). | Orthographe d'usage et orthographe grammaticale. |\n| | Conjugaison et emploi des temps verbaux. |\n| | Ponctuation et mise en page. |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
