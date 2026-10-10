-- Sujet de français, examen régional 2019 (session de rattrapage), académie
-- Dakhla-Oued Ed-Dahab, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2019 جهة الداخلة وادي الذهب »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Dakhla-Oued Ed-Dahab (« الأكاديمية الجهوية للتربية والتكوين
-- جهة الداخلة وادي الذهب »), « الدورة الاستدراكية - يوليوز 2019 » (session
-- de rattrapage), « السنة الأولى من سلك البكالوريا », matière « اللغة
-- الأجنبية الأولى », « جميع الشعب الأدبية والعلمية والتقنية », durée
-- « ساعتان ». Coefficient « 4/3 » (laissé vide).
-- Le texte (récit du Messager) est imprimé en un seul paragraphe ; « bocs »,
-- « lourd de mépris » et « da la pièce » (question 1) sont tels quels sur la
-- feuille. « Antigone » est souligné dans la question 1 (titre).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2019,
  $sujet$rattrapage$sujet$,
  $sujet$Dakhla-Oued Ed-Dahab$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Toutes les séries littéraires, scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

Une terrible nouvelle. On venait de jeter Antigone dans son trou. On n'avait pas encore fini de rouler les derniers blocs de pierre lorsque Créon et tous ceux qui l'entourent entendent des plaintes qui sortent soudain du tombeau. Chacun se tait et écoute, car ce n'est pas la voix d'Antigone. C'est une plainte nouvelle qui sort des profondeurs du trou…Tous regardent Créon, et lui, qui a deviné le premier, lui qui sait déjà avant tous les autres, hurle soudain comme un fou : « enlevez les pierres ! enlevez les pierres ! » Les esclaves se jettent sur les bocs entassés, et, parmi eux, le roi suant, dont les mains saignent. Les pierres bougent enfin et le plus mince se glisse dans l'ouverture. Antigone est au fond de la tombe pendue aux fils de sa ceinture, des fils bleus, des fils verts, des fils rouges qui lui font comme un collier d'enfant, et Hémon à genoux qui la tient dans ses bras et gémit, le visage enfoui dans sa robe. On bouge un bloc encore et Créon peut enfin descendre. On voit ses cheveux blancs dans l'ombre, au fond du trou. Il essaie de relever Hémon, il le supplie. Hémon ne l'entend pas. Puis soudain il se dresse, les yeux noirs, et il n'a jamais tant ressemblé au petit garçon d'autrefois, il regarde son père sans rien dire, une minute, et, tout à coup, il lui crache au visage, et tire son épée. Créon a bondi hors de portée. Alors Hémon le regarde avec ses yeux d'enfant, lourd de mépris, et Créon ne peut pas éviter ce regard comme la lame. Hémon regarde ce vieil homme tremblant à l'autre bout de la caverne, et, sans rien dire, il se plonge l'épée dans le ventre et il s'étend contre Antigone, l'embrassant dans une immense flaque rouge….

## I. Étude de texte (10 points)

**1.** Recopiez et complétez ce texte en tenant compte des indications suivantes : (dans l'ordre) : « *genre théâtral, nom du dramaturge, siècle de l'auteur, nom de lieu* » : **Antigone** est une ……….. écrite par le dramaturge français …………………au ………… Les événements da la pièce se passent au royaume de …………. [souligné sur la feuille, en gras ici] **(1pt)**

**2a.** Pour situer ce texte, répondez aux questions suivantes : Pour quelle raison Antigone est –elle condamnée à mort ? **(1pt)**

**2b.** Quel est le lien familial entre Antigone et Hémon ?

**3a.** Le Messager rapporte qu'Antigone a été : (**Recopiez la bonne réponse**) **(0,5 pt)**

a- Guillotinée  
b- Emmurée  
c- Brûlée  
d- Empoisonnée

**3b.** Quelle expression dans le texte montre que Créon a pris part, lui aussi, à l'ouverture du tombeau ? **(0,5 pt)**

**4a.** Quel sentiment Hémon éprouve t-il à l'égard de Créon ? **(0,5pt)**

**4b.** Justifiez par une expression tirée du texte ? **(0,5pt)**

**5.** Comment Antigone et Hémon sont –ils morts ? **(1pt)**

**6a.** Relevez dans le passage : Deux mots équivalents du nom « trou » **(0,5pt)**

**6b.** Un verbe exprimant la plainte ? **(0,5 pt)**

**7a.** « l'embrassant dans une immense flaque rouge ». Identifiez la figure de style employée dans cet énoncé ? **(0,5pt)**

**7b.** Quel est l'effet produit par l'emploi de cette figure ? **(0,5pt)**

**8a.** Quel est le registre dominant dans le texte ? **(0,5 pt)**

**8b.** Relevez du texte deux expressions (indices) qui renvoient à ce registre ? **(0,5pt)**

**9.** Hémon a beaucoup de mépris pour son père. Trouvez –vous son attitude juste et acceptable ? Justifiez votre point de vue. **(1pt)**

**10.** Selon vous, en se donnant la mort, Hémon fait –il preuve de courage ? Justifiez votre réponse par deux arguments. **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

Hémon sacrifie sa vie par amour pour Antigone.

Pensez –vous qu'il est raisonnable de faire des sacrifices pour ce qu'on aime; que ce soit une chose, une personne ou une cause (un idéal) ?

Développez votre point de vue dans un texte cohérent nourri d'arguments pertinents.

*Lors de votre rédaction, vous devrez tenir compte des critères suivants :*

| 5 points | 5 points |
|---|---|
| **Critères d'évaluation du discours** | **Critère d'évaluation de la langue** |
| Conformité de la production à la consigne d'écriture. | Vocabulaire (usage de termes précis et variés). |
| Cohérence de l'argumentation. | Syntaxe (construction de phrases correctes) ; |
| Structure du texte (organisation et progression du texte). | Orthographe d'usage et orthographe grammaticale (respect des règles). |
| | Conjugaison et emploi des temps verbaux ; |
| | Ponctuation et mise en page. |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse.*

### I. Étude de texte

**1.** tragédie (tragédie moderne) - Jean Anouilh - vingtième siècle - Thèbes. (0,25 x 4) **(1pt)**

**2a.** elle a osé braver la loi de Créon. Elle défie le roi. Elle a essayé d'enterrer le cadavre de Polynice (0,5) **(1pt)**

**2b.** cousin(e) (lien de cousinage) et fiancé(e) (0,5)

**3a.** emmurée. **(0,5 pt)**

**3b.** « et, parmi eux, le roi suant, dont les mains saignent. » **(0,5 pt)**

**4a.** Le sentiment qu'Hémon éprouve à l'égard de Créon : La haine-le mépris-le dédain-la colère… **(0,5pt)**

**4b.** une expression tirée du texte : – « il lui crache au visage, et tire son épée… » – « il…tire son épée. Créon a bondi hors de portée… » – « Alors Hémon le regarde avec ses yeux d'enfant, lourds de mépris, » – « et Créon ne peut pas éviter ce regard comme la lame. » **(0,5pt)**

**5.** Antigone est enterrée vivante (emmurée) : « Antigone est au fond de la tombe pendue aux fils de sa ceinture ». Hémon s'est suicidé : « il se plonge l'épée dans le ventre et il s'étend contre Antigone » (0,5ptx2) **(1pt)**

**6a.** Deux mots employés comme équivalents du nom « trou » : tombeau- tombe-caverne. **(0,5pt)**

**6b.** « gémit ». **(0,5 pt)**

**7a.** L'hyperbole **(0,5pt)**

**7b.** l'effet : * montrer la violence de la mort * exagérer pour montrer le côté tragique de la scène. (On accepte toute réponse qui va dans le même sens). **(0,5pt)**

**8a.** Tragique (on accepte également pathétique) **(0,5 pt)**

**8b.** Pour le tragique : « une terrible nouvelle ; Antigone dans son trou ; sa tombe ; plaintes ; tombeau » *Pour le Pathétique : « plaintes ; ce vieil homme ; tremblant ; l'embrassant ». **(0,5pt)**

**9.** Point de vue justifié (1). **(1pt)**

**10.** Point de vue justifié (1). **(1pt)**

### II. Production écrite

*Le correcteur tiendra compte des critères et barèmes suivants :*

| Critères d'évaluation du discours | | Critère d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 1pt | Vocabulaire (usage de termes précis et evariés) | 1pt |
| Cohérence de l'argumentation | 2pts | Syntaxe (construction de phrases correctes) | 1pt |
| Structure du texte (organisation et progression du texte) | 2pts | Orthographe d'usage et orthographe grammaticale | 1pt |
| | | Conjugaison et emploi des temps verbaux | 1pt |
| | | Mise en page et ponctuation | 1pt |
| **5 points** | | **5 points** | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Une terrible nouvelle. On venait de jeter Antigone dans son trou. On n'avait pas encore fini de rouler les derniers blocs de pierre lorsque Créon et tous ceux qui l'entourent entendent des plaintes qui sortent soudain du tombeau. Chacun se tait et écoute, car ce n'est pas la voix d'Antigone. C'est une plainte nouvelle qui sort des profondeurs du trou…Tous regardent Créon, et lui, qui a deviné le premier, lui qui sait déjà avant tous les autres, hurle soudain comme un fou : « enlevez les pierres ! enlevez les pierres ! » Les esclaves se jettent sur les bocs entassés, et, parmi eux, le roi suant, dont les mains saignent. Les pierres bougent enfin et le plus mince se glisse dans l'ouverture. Antigone est au fond de la tombe pendue aux fils de sa ceinture, des fils bleus, des fils verts, des fils rouges qui lui font comme un collier d'enfant, et Hémon à genoux qui la tient dans ses bras et gémit, le visage enfoui dans sa robe. On bouge un bloc encore et Créon peut enfin descendre. On voit ses cheveux blancs dans l'ombre, au fond du trou. Il essaie de relever Hémon, il le supplie. Hémon ne l'entend pas. Puis soudain il se dresse, les yeux noirs, et il n'a jamais tant ressemblé au petit garçon d'autrefois, il regarde son père sans rien dire, une minute, et, tout à coup, il lui crache au visage, et tire son épée. Créon a bondi hors de portée. Alors Hémon le regarde avec ses yeux d'enfant, lourd de mépris, et Créon ne peut pas éviter ce regard comme la lame. Hémon regarde ce vieil homme tremblant à l'autre bout de la caverne, et, sans rien dire, il se plonge l'épée dans le ventre et il s'étend contre Antigone, l'embrassant dans une immense flaque rouge….", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "Recopiez et complétez ce texte en tenant compte des indications suivantes : (dans l'ordre) : « *genre théâtral, nom du dramaturge, siècle de l'auteur, nom de lieu* » : **Antigone** est une ……….. écrite par le dramaturge français …………………au ………… Les événements da la pièce se passent au royaume de …………. [souligné sur la feuille, en gras ici]", "correction": "tragédie (tragédie moderne) - Jean Anouilh - vingtième siècle - Thèbes. (0,25 x 4)"}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Pour situer ce texte, répondez aux questions suivantes : Pour quelle raison Antigone est –elle condamnée à mort ?", "correction": "elle a osé braver la loi de Créon. Elle défie le roi. Elle a essayé d'enterrer le cadavre de Polynice (0,5)"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "Quel est le lien familial entre Antigone et Hémon ?", "correction": "cousin(e) (lien de cousinage) et fiancé(e) (0,5)"}, {"type": "choix", "numero": "3a", "points": 0.5, "enonce": "Le Messager rapporte qu'Antigone a été : (**Recopiez la bonne réponse**)", "options": ["Guillotinée", "Emmurée", "Brûlée", "Empoisonnée"], "bonne": 1}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Quelle expression dans le texte montre que Créon a pris part, lui aussi, à l'ouverture du tombeau ?", "correction": "« et, parmi eux, le roi suant, dont les mains saignent. »"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Quel sentiment Hémon éprouve t-il à l'égard de Créon ?", "correction": "Le sentiment qu'Hémon éprouve à l'égard de Créon : La haine-le mépris-le dédain-la colère…"}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Justifiez par une expression tirée du texte ?", "correction": "une expression tirée du texte : – « il lui crache au visage, et tire son épée… » – « il…tire son épée. Créon a bondi hors de portée… » – « Alors Hémon le regarde avec ses yeux d'enfant, lourds de mépris, » – « et Créon ne peut pas éviter ce regard comme la lame. »"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Comment Antigone et Hémon sont –ils morts ?", "correction": "Antigone est enterrée vivante (emmurée) : « Antigone est au fond de la tombe pendue aux fils de sa ceinture ». Hémon s'est suicidé : « il se plonge l'épée dans le ventre et il s'étend contre Antigone » (0,5ptx2)"}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "Relevez dans le passage : Deux mots équivalents du nom « trou »", "correction": "Deux mots employés comme équivalents du nom « trou » : tombeau- tombe-caverne."}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "Un verbe exprimant la plainte ?", "correction": "« gémit »."}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "« l'embrassant dans une immense flaque rouge ». Identifiez la figure de style employée dans cet énoncé ?", "correction": "L'hyperbole"}, {"type": "libre", "numero": "7b", "points": 0.5, "enonce": "Quel est l'effet produit par l'emploi de cette figure ?", "correction": "l'effet : * montrer la violence de la mort * exagérer pour montrer le côté tragique de la scène. (On accepte toute réponse qui va dans le même sens)."}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "Quel est le registre dominant dans le texte ?", "correction": "Tragique (on accepte également pathétique)"}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "Relevez du texte deux expressions (indices) qui renvoient à ce registre ?", "correction": "Pour le tragique : « une terrible nouvelle ; Antigone dans son trou ; sa tombe ; plaintes ; tombeau » *Pour le Pathétique : « plaintes ; ce vieil homme ; tremblant ; l'embrassant »."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Hémon a beaucoup de mépris pour son père. Trouvez –vous son attitude juste et acceptable ? Justifiez votre point de vue.", "correction": "Point de vue justifié (1)."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Selon vous, en se donnant la mort, Hémon fait –il preuve de courage ? Justifiez votre réponse par deux arguments.", "correction": "Point de vue justifié (1)."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nHémon sacrifie sa vie par amour pour Antigone.\n\nPensez –vous qu'il est raisonnable de faire des sacrifices pour ce qu'on aime; que ce soit une chose, une personne ou une cause (un idéal) ?\n\nDéveloppez votre point de vue dans un texte cohérent nourri d'arguments pertinents.\n\n*Lors de votre rédaction, vous devrez tenir compte des critères suivants :*\n\n| 5 points | 5 points |\n|---|---|\n| **Critères d'évaluation du discours** | **Critère d'évaluation de la langue** |\n| Conformité de la production à la consigne d'écriture. | Vocabulaire (usage de termes précis et variés). |\n| Cohérence de l'argumentation. | Syntaxe (construction de phrases correctes) ; |\n| Structure du texte (organisation et progression du texte). | Orthographe d'usage et orthographe grammaticale (respect des règles). |\n| | Conjugaison et emploi des temps verbaux ; |\n| | Ponctuation et mise en page. |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
