-- Sujet de français, examen régional 2016 (session normale), académie
-- Laâyoune-Sakia El Hamra, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2016 جهة العيون الساقية الحمراء »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية و التكوين لجهة العيون الساقية
-- الحمراء », « الدورة العادية 2016 », « السنة الأولى رسميون », durée « ساعتان »,
-- coefficient « 3/4 » selon la série (non saisi), filière « الشعب الأدبية و
-- العلمية و التقنية و الاقتصادية », code 105.
-- Dans la didascalie « CREON, court à lui, l'embrasse », le mot « court » n'est
-- pas en italique sur la feuille ; toute la didascalie est mise en italique ici.
-- « tenant de s'arracher » et « Mais ; père » sont recopiés tels quels.
-- Question 5 : pas de barème sur la feuille ; le corrigé lui donne 1pt.
-- La question 7 cite « Nous allons tous porter cette plaie pendant des siècles »
-- alors que le texte porte « cette plaie au côté, pendant des siècles » :
-- recopié tel quel.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2016,
  $sujet$normale$sujet$,
  $sujet$Laâyoune-Sakia El Hamra$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Séries littéraires, scientifiques, techniques et économiques$sujet$,
  120,
  $sujet$## Texte

**LE CHŒUR** : Tu es fou, Créon. Qu'as-tu fait ?

**CREON**, *qui regarde au loin devant lui* : Il fallait qu'elle meure.

**LE CHŒUR** : Ne laisse pas mourir Antigone, Créon ! Nous allons tous porter cette plaie au côté, pendant des siècles.

**CREON** : C'est elle qui voulait mourir. Aucun de nous n'était assez fort pour la décider à vivre. Je le comprends maintenant, Antigone était faite pour être morte. Elle-même ne le savait peut-être pas, mais Polynice n'était qu'un prétexte. Quand elle a dû y renoncer, elle a trouvé autre chose tout de suite. Ce qui importait pour elle, c'était de refuser et de mourir.

**LE CHŒUR** : C'est une enfant, Créon.

**CREON** : Que veux-tu que je fasse pour elle ? La condamner à vivre ?

**HEMON**, *entre en criant* : Père !

**CREON**, *court à lui, l'embrasse* : Oublie-la, Hémon ; oublie-la, mon petit.

**HEMON** : Tu es fou père, lâche-moi

**CREON**, *le tient plus fort* : J'ai tout essayé pour la sauver, Hémon. J'ai tout essayé, je te le jure. Elle ne t'aime pas. Elle aurait pu vivre. Elle a préféré sa folie et la mort.

**HEMON**, *crie, tenant de s'arracher à son étreinte* : Mais ; père, tu vois bien qu'ils l'emmènent ! Père, ne laisse pas ces hommes l'emmener.

**CREON** : Elle a parlé maintenant. Tout Thèbes sait ce qu'elle a fait. Je suis obligé de la faire mourir.

**HEMON**, *s'arrache de ses bras* : Lâche-moi !

*Un silence. Ils sont l'un en face de l'autre. Ils se regardent.*

**LE CHŒUR**, *s'approche* : Est-ce qu'on ne peut pas imaginer quelque chose, dire qu'elle est folle, L'enfermer ?

**CREON** : Ils diront que ce n'est pas vrai. Que je la sauve parce qu'elle allait être la femme de mon fils. Je ne peux pas.

## I. Étude de texte (10 points)

**1.** A. Contextualisation — Recopiez et complétez le tableau suivant : **(0,25ptx4)**

| Titre de l'œuvre | Auteur de l'œuvre | Genre de l'œuvre | Siècle |
|---|---|---|---|
| | | | |

**2.** Situez le passage par rapport à ce qui précède. **(1pt)**

**3.** B. Analyse du texte — Dans ce passage, le Chœur cherche auprès de Créon à : (Recopiez la bonne réponse.) **(1pt)**

a- condamner Antigone ;  
b- défendre Antigone ;  
c- emprisonner Antigone

**4.** Relevez, dans la 2ème réplique de Créon, un (1) argument avancé pour condamner Antigone. **(1pt)**

**5.** D'après Le Chœur, quelle serait la solution la plus convenable pour sauver Antigone. ?

**6.** Pourquoi Créon se trouve-t-il incapable d'accepter la demande de son fils afin de gracier (sauver) Antigone ? **(1pt)**

**7a.** Quelle figure de style reconnaissez-vous dans la phrase suivante : « ***Nous allons tous porter cette plaie pendant des siècles.*** » (Recopiez la bonne réponse.) **(0,5pt)**

a- La métaphore ;  
b- L'antithèse ;  
c- L'euphémisme

**7b.** Quel est l'effet recherché par l'emploi de cette figure ? **(0,5pt)**

**8a.** La tonalité dominante dans cet extrait est-elle plutôt: a- pathétique; b- tragique; ou c- ironique ? Recopiez la bonne réponse. **(0,5pt)**

a- pathétique  
b- tragique  
c- ironique

**8b.** Justifiez votre réponse par deux mots tirés du texte. **(0,5pt)**

**9.** C. Réaction personnelle face au texte — A votre avis l'attitude de Créon envers son fils est-elle acceptable ? Justifiez Votre point de vue. **(1pt)**

**10.** Pour sauver Antigone, avez-vous d'autres solutions à proposer à Créon, autres que celles données par le Chœur ? Justifiez votre opinion. **(1pt)**

## II. Production écrite (10 points)

**Sujet :** Pour régler son problème avec Antigone, Créon recourt à la violence .Pensez-vous que L'usage de la force soit la bonne solution aux problèmes de la vie quotidienne ?

Justifiez votre point de vue à l'aide d'arguments pertinents.

**Le correcteur de votre copie tiendra compte des critères suivants :**

| Critères d'évaluation du discours : | Barèmes de notation |
|---|---|
| Respect de la consigne. Cohérence de l'argumentation. Structure du texte (organisation et progression du texte). | 5points |
| **Critères d'évaluation de la langue :** | |
| Vocabulaire (Usage de termes précis et variés). Syntaxe (Construction de phrases correctes). Ponctuation (Usage d'une ponctuation adéquate). Orthographe d'usage et grammaticale (respect des règles). Conjugaison (emploi des temps). | 5points |$sujet$,
  $sujet$## Corrigé et barème

*Barème de notation & éléments de réponses (A titre indicatif).*

### I. Étude de texte

**1.** **(0,25ptx4)**

| Titre de l'œuvre | Auteur de l'œuvre | Genre de l'œuvre | Siècle |
|---|---|---|---|
| Antigone | Jean Anouilh | Tragédie moderne | XXème |

**2.** Situation du passage : -Echec de Créon de convaincre Antigone/- La décision de faire mourir Antigone/ Entêtement/Refus de toutes les propositions de Créon. *NB : Au moins deux éléments doivent figurer dans la réponse.* **(1pt)**

**3.** Dans ce passage, le Chœur cherche auprès de Créon à : b- défendre Antigone . **(1pt)**

**4.** Un argument avancé pour condamner Antigone : - C'est elle qui voulait mourir. **Ou** - Aucun de nous n'était assez fort pour la décider à vivre/ - Antigone était faite pour être morte/ - Ce qui importait pour elle, c'était de refuser et de mourir. **(1pt)**

**5.** D'après Le Chœur, la solution la plus convenable pour sauver Antigone : - dire qu'elle est folle l'enfermer. (1pt)

**6.** Créon se trouve incapable d'accepter la demande de son fils afin de gracier Antigone : parce qu'elle a parlé. **Ou** – Tout Thèbes sait ce qu'elle a fait. **(1pt)**

**7a.** « ***Nous allons tous porter cette plaie pendant des siècles.*** ». Il s'agit de : -La métaphore. **(0,5pt)**

**7b.** L'effet recherché par son emploi : Montrer la gravité et les séquelles du geste de Créon/ - Risque d'avoir des regrets et remords après la mort d'Antigone. **(0,5pt)**

**8a.** La tonalité dominante dans cet extrait est : b- tragique. **(0,5pt)**

**8b.** Deux mots qui le montrent : - mourir ; - meure. **Ou** - la mort. **(0,5pt)**

**9.** Acceptez toute réponse claire et justifiée. **(1pt)**

**10.** Acceptez toute réponse claire et justifiée. **(1pt)**

### II. Production écrite

Le correcteur tiendra compte des critères suivants :

| Critères d'évaluation du discours : | Barèmes de notation |
|---|---|
| Respect de la consigne. Cohérence de l'argumentation. Structure du texte (organisation et progression du texte). | 5points |
| **Critères d'évaluation de la langue :** | |
| Vocabulaire (Usage de termes précis et variés). Syntaxe (Construction de phrases correctes). Ponctuation (Usage d'une ponctuation adéquate). Orthographe d'usage et grammaticale (respect des règles). Conjugaison (emploi des temps). | 5points |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Répondez aux questions en formulant des phrases complètes chaque fois que cela est possible.", "texte": "**LE CHŒUR** : Tu es fou, Créon. Qu'as-tu fait ?\n\n**CREON**, *qui regarde au loin devant lui* : Il fallait qu'elle meure.\n\n**LE CHŒUR** : Ne laisse pas mourir Antigone, Créon ! Nous allons tous porter cette plaie au côté, pendant des siècles.\n\n**CREON** : C'est elle qui voulait mourir. Aucun de nous n'était assez fort pour la décider à vivre. Je le comprends maintenant, Antigone était faite pour être morte. Elle-même ne le savait peut-être pas, mais Polynice n'était qu'un prétexte. Quand elle a dû y renoncer, elle a trouvé autre chose tout de suite. Ce qui importait pour elle, c'était de refuser et de mourir.\n\n**LE CHŒUR** : C'est une enfant, Créon.\n\n**CREON** : Que veux-tu que je fasse pour elle ? La condamner à vivre ?\n\n**HEMON**, *entre en criant* : Père !\n\n**CREON**, *court à lui, l'embrasse* : Oublie-la, Hémon ; oublie-la, mon petit.\n\n**HEMON** : Tu es fou père, lâche-moi\n\n**CREON**, *le tient plus fort* : J'ai tout essayé pour la sauver, Hémon. J'ai tout essayé, je te le jure. Elle ne t'aime pas. Elle aurait pu vivre. Elle a préféré sa folie et la mort.\n\n**HEMON**, *crie, tenant de s'arracher à son étreinte* : Mais ; père, tu vois bien qu'ils l'emmènent ! Père, ne laisse pas ces hommes l'emmener.\n\n**CREON** : Elle a parlé maintenant. Tout Thèbes sait ce qu'elle a fait. Je suis obligé de la faire mourir.\n\n**HEMON**, *s'arrache de ses bras* : Lâche-moi !\n\n*Un silence. Ils sont l'un en face de l'autre. Ils se regardent.*\n\n**LE CHŒUR**, *s'approche* : Est-ce qu'on ne peut pas imaginer quelque chose, dire qu'elle est folle, L'enfermer ?\n\n**CREON** : Ils diront que ce n'est pas vrai. Que je la sauve parce qu'elle allait être la femme de mon fils. Je ne peux pas.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "A. Contextualisation — Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "Antigone"}, {"libelle": "Auteur de l'œuvre", "reponse": "Jean Anouilh"}, {"libelle": "Genre de l'œuvre", "reponse": "Tragédie moderne"}, {"libelle": "Siècle", "reponse": "XXème"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Situez le passage par rapport à ce qui précède.", "correction": "Situation du passage : -Echec de Créon de convaincre Antigone/- La décision de faire mourir Antigone/ Entêtement/Refus de toutes les propositions de Créon. *NB : Au moins deux éléments doivent figurer dans la réponse.*"}, {"type": "choix", "numero": "3", "points": 1, "enonce": "B. Analyse du texte — Dans ce passage, le Chœur cherche auprès de Créon à : (Recopiez la bonne réponse.)", "options": ["condamner Antigone ;", "défendre Antigone ;", "emprisonner Antigone"], "bonne": 1}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Relevez, dans la 2ème réplique de Créon, un (1) argument avancé pour condamner Antigone.", "correction": "Un argument avancé pour condamner Antigone : - C'est elle qui voulait mourir. **Ou** - Aucun de nous n'était assez fort pour la décider à vivre/ - Antigone était faite pour être morte/ - Ce qui importait pour elle, c'était de refuser et de mourir."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "D'après Le Chœur, quelle serait la solution la plus convenable pour sauver Antigone. ?", "correction": "D'après Le Chœur, la solution la plus convenable pour sauver Antigone : - dire qu'elle est folle l'enfermer. (1pt)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Pourquoi Créon se trouve-t-il incapable d'accepter la demande de son fils afin de gracier (sauver) Antigone ?", "correction": "Créon se trouve incapable d'accepter la demande de son fils afin de gracier Antigone : parce qu'elle a parlé. **Ou** – Tout Thèbes sait ce qu'elle a fait."}, {"type": "choix", "numero": "7a", "points": 0.5, "enonce": "Quelle figure de style reconnaissez-vous dans la phrase suivante : « ***Nous allons tous porter cette plaie pendant des siècles.*** » (Recopiez la bonne réponse.)", "options": ["La métaphore ;", "L'antithèse ;", "L'euphémisme"], "bonne": 0}, {"type": "libre", "numero": "7b", "points": 0.5, "enonce": "Quel est l'effet recherché par l'emploi de cette figure ?", "correction": "L'effet recherché par son emploi : Montrer la gravité et les séquelles du geste de Créon/ - Risque d'avoir des regrets et remords après la mort d'Antigone."}, {"type": "choix", "numero": "8a", "points": 0.5, "enonce": "La tonalité dominante dans cet extrait est-elle plutôt: a- pathétique; b- tragique; ou c- ironique ? Recopiez la bonne réponse.", "options": ["pathétique", "tragique", "ironique"], "bonne": 1}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "Justifiez votre réponse par deux mots tirés du texte.", "correction": "Deux mots qui le montrent : - mourir ; - meure. **Ou** - la mort."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "C. Réaction personnelle face au texte — A votre avis l'attitude de Créon envers son fils est-elle acceptable ? Justifiez Votre point de vue.", "correction": "Acceptez toute réponse claire et justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Pour sauver Antigone, avez-vous d'autres solutions à proposer à Créon, autres que celles données par le Chœur ? Justifiez votre opinion.", "correction": "Acceptez toute réponse claire et justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Pour régler son problème avec Antigone, Créon recourt à la violence .Pensez-vous que L'usage de la force soit la bonne solution aux problèmes de la vie quotidienne ?\n\nJustifiez votre point de vue à l'aide d'arguments pertinents.\n\n**Le correcteur de votre copie tiendra compte des critères suivants :**\n\n| Critères d'évaluation du discours : | Barèmes de notation |\n|---|---|\n| Respect de la consigne. Cohérence de l'argumentation. Structure du texte (organisation et progression du texte). | 5points |\n| **Critères d'évaluation de la langue :** | |\n| Vocabulaire (Usage de termes précis et variés). Syntaxe (Construction de phrases correctes). Ponctuation (Usage d'une ponctuation adéquate). Orthographe d'usage et grammaticale (respect des règles). Conjugaison (emploi des temps). | 5points |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
