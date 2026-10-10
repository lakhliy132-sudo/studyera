-- Sujet de français, examen régional 2015 (session normale), académie
-- Laâyoune-Sakia El Hamra, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2015 جهة العيون الساقية الحمراء »).
-- Corrigé et barème officiels recopiés question par question.
--
-- PDF publié sans nom d'académie (« inconnu ») ; l'en-tête (en arabe) nomme
-- « الأكاديمية الجهوية للتربية و التكوين لجهة العيون بوجدور الساقية الحمراء »
-- (Laâyoune-Boujdour-Sakia El Hamra, avant le découpage régional de 2015,
-- aujourd'hui Laâyoune-Sakia El Hamra) ; « الدورة العادية 2015 », « السنة الأولى
-- رسميون », durée « ساعتان », coefficient « 4 أو 3 » selon la série (non saisi),
-- filière « الشعب الأدبية و العلمية و التقنية و الاقتصادية », code 105. Le corrigé
-- porte « عناصر الإجابة للموضوع الرئيسي ».
-- Les groupes de la question 4 sont en gras dans le texte (le corrigé parle
-- des « groupes en gras »), de même que le dernier « Oui. » d'Antigone.
-- Question 3 : la feuille demande de justifier le choix ; le corrigé ne donne
-- que « Vraie » ou « Fausse ».
-- Question 5 b : la feuille demande « Une didascalie concernant le portrait
-- d'Ismène », le corrigé répond à « Une phrase concernant le portrait
-- d'Ismène » ; sa réponse est reportée telle quelle.
-- Le corrigé ne donne rien pour la production écrite ; les critères sont ceux
-- de la feuille du sujet.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2015,
  $sujet$normale$sujet$,
  $sujet$Laâyoune-Sakia El Hamra$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Séries littéraires, scientifiques, techniques et économiques$sujet$,
  120,
  $sujet$## Texte

**ISMÈNE** : Tu es déjà levée ? Je viens de ta chambre.

**ANTIGONE** : Oui, je suis déjà levée.

**LA NOURRICE** : Toutes les deux alors ! ... Toutes les deux vous allez devenir folles et vous lever avant les servantes ? Vous croyez que c'est bon d'être debout le matin à jeun, que c'est convenable pour des princesses ? Vous n'êtes seulement pas couvertes. Vous allez voir que vous allez encore me prendre mal.

**ANTIGONE** : Laisse-nous, nourrice. Il ne fait pas froid, je t'assure; c'est déjà l'été. Va nous faire du café. *(Elle s'est assise, soudain fatiguée)* Je voudrais bien un peu de café, s'il te plaît, nounou. Cela me ferait du bien.

**LA NOURRICE** : **Ma colombe !** La tête lui tourne d'être sans rien et je suis là **comme une idiote** au lieu de lui donner quelque chose de chaud. *(Elle sort vite)*.

**ISMÈNE** : Tu es malade ?

**ANTIGONE** : Ce n'est rien. Un peu de fatigue. *(Elle sourit)* C'est parce que je me suis levée tôt.

**ISMÈNE** : Moi non plus, je n'ai pas dormi.

**ANTIGONE**, *(sourit encore)* : Il faut que tu dormes. Tu serais moins belle demain.

**ISMÈNE** : Ne te moque pas.

**ANTIGONE** : Je ne me moque pas. Cela me rassure ce matin, que tu sois belle. Quand j'étais petite, j'étais si malheureuse, tu te souviens ? Je te barbouillais de terre, je te mettais des vers dans le cou. Une fois, je t'ai attachée à un arbre et je t'ai coupé tes cheveux, tes beaux cheveux... *(Elle caresse les cheveux d'Ismène)* Comme cela doit être facile de ne pas penser de bêtises avec toutes ces belles mèches lisses et bien ordonnées autour de la tête !

**ISMÈNE**, *(soudain)* : Pourquoi parles-tu d'autre chose ?

**ANTIGONE**, *(doucement, sans cesser de lui caresser les cheveux)* : Je ne parle pas d'autre chose...

**ISMÈNE** : Tu sais, j'ai bien pensé, Antigone.

**ANTIGONE** : Oui.

**ISMÈNE** : J'ai bien pensé toute la nuit. Tu es folle.

**ANTIGONE** : **Oui.**

**ISMÈNE** : Nous ne pouvons pas.

## I. Étude de texte (10 points)

**1A.** En vous basant sur votre lecture, recopiez et complétez le tableau ci-dessous : **(1point)**

| Titre de l'œuvre | Auteur | Genre | Date de parution |
|---|---|---|---|
| | | | |

**1B.** Situez la scène par rapport à toute l'œuvre. **(0,5 point)**

**2a.** Relisez la scène : a- Quels sont les personnages de la scène ? **(0.5point)**

**2b.** b- Précisez leurs relations. **(0.5point)**

**3.** **Mettez devant chaque proposition : Vraie ou Fausse en justifiant votre choix** **(1point)**

| | Vrai | Faux |
|---|---|---|
| a- La Nourrice s'est réveillée avant les princesses. | | |
| b- Antigone est plus belle que sa sœur Ismène. | | |
| c- Antigone se moque de sa sœur. | | |
| d- Ismène s'oppose au projet d'Antigone. | | |

**4.** Quelles figures de style se réalisent dans les groupes suivants : a- **Ma colombe ! :** b- **Comme une idiote :** c- **Oui :** **(1,5point)**

**5.** **Relevez du texte :** a- Deux didascalies relatives au personnage principal. b- Une didascalie concernant le portrait d'Ismène. **(1,5 point)**

**6.** « ***Nous ne pouvons pas.*** » dit Ismène. De quoi parle-t-elle ? **(0.5pt)**

**7.** **Relevez du texte :** a- Une réplique qui montre qu'Antigone refuse de dire la vérité. b- Une phrase précisant la beauté d'Ismène. **(0,25x2 point)**

**8.** **Recopiez et complétez le tableau suivant :** (Les phrases du texte / Dites ce qu'elles expriment) **(1.5pt)**

| Il faut que tu dormes. | Je voudrais bien un peu de café, s'il te plaît, nounou. | C'est parce que je me suis levée tôt. |
|---|---|---|
| | | |

**9.** Pourquoi Antigone refuse-elle de dire la vérité ? Feriez-vous de même si vous étiez à sa place ? **(1point)**

## II. Production écrite (10 points)

**Sujet :** Dans cette scène Antigone préfère ne parler de son projet à personne. Etes-vous d'accord avec ce genre d'attitude ou faut-il partager sa décision avec les autres ?

Elaborez un texte argumentatif dans lequel vous défendrez votre point de vue de manière cohérente.

**NB :** Lors de la correction, il sera tenu compte des éléments suivants :

- Respect de la consigne……2pts
- Pertinence des arguments……2pts
- Cohérence et progression des idées……3pts
- Correction de la langue……3pt$sujet$,
  $sujet$## Corrigé et barème

*Eléments de réponse à titre indicatif.*

### I. Étude de texte

**1A.** **(1point)**

| Titre de l'œuvre | Auteur | Genre | Date de parution |
|---|---|---|---|
| **Antigone** | **Jean Anouilh** | **Une tragédie** | **1944** |

**1B.** La scène se situe au début de l'œuvre. **(0,5 point)**

**2a.** Les personnages de la scène sont : Ismène – La nourrice – Antigone. **(0.5point)**

**2b.** Leurs relations : Antigone et Ismène sont deux sœurs et La Nourrice est la servante des princesses. **(0.5point)**

**3.** **(1point)**

| | |
|---|---|
| a- La Nourrice s'est réveillée avant les princesses. | Faux |
| b- Antigone est plus belle que sa sœur Ismène. | Faux |
| c- Antigone se moque de sa sœur. | Vrai |
| d- Ismène s'oppose au projet d'Antigone. | Vrai |

**4.** a- **Ma colombe ! :** une périphrase ou une métaphore b- **Comme une idiote :** une comparaison c- **Oui :** une ironie. **(1,5point)**

**5.** a- Deux didascalies relatives au personnage principal : *(Elle sourit) - (Elle caresse les cheveux d'Ismène)* b- Une phrase concernant le portrait d'Ismène : *avec toutes ces belles mèches lisses et bien ordonnées autour de la tête !* **(1,5 point)**

**6.** elle parle de l'enterrement de leur frère Polynice. **(0.5pt)**

**7.** a- Une réplique qui montre qu'Antigone refuse de dire la vérité : « Je ne parle pas d'autre chose. » b- Une phrase précisant la beauté d'Ismène : « je t'ai coupé tes cheveux, tes beaux cheveux... » **(0,25x2 point)**

**8.** **(1.5pt)**

| Il faut que tu dormes. | Je voudrais bien un peu de café, s'il te plaît, nounou. | C'est parce que je me suis levée tôt. |
|---|---|---|
| L'obligation | Une demande polie | La cause |

**9.** Acceptez la réponse bien formulée. **(1point)**$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**ISMÈNE** : Tu es déjà levée ? Je viens de ta chambre.\n\n**ANTIGONE** : Oui, je suis déjà levée.\n\n**LA NOURRICE** : Toutes les deux alors ! ... Toutes les deux vous allez devenir folles et vous lever avant les servantes ? Vous croyez que c'est bon d'être debout le matin à jeun, que c'est convenable pour des princesses ? Vous n'êtes seulement pas couvertes. Vous allez voir que vous allez encore me prendre mal.\n\n**ANTIGONE** : Laisse-nous, nourrice. Il ne fait pas froid, je t'assure; c'est déjà l'été. Va nous faire du café. *(Elle s'est assise, soudain fatiguée)* Je voudrais bien un peu de café, s'il te plaît, nounou. Cela me ferait du bien.\n\n**LA NOURRICE** : **Ma colombe !** La tête lui tourne d'être sans rien et je suis là **comme une idiote** au lieu de lui donner quelque chose de chaud. *(Elle sort vite)*.\n\n**ISMÈNE** : Tu es malade ?\n\n**ANTIGONE** : Ce n'est rien. Un peu de fatigue. *(Elle sourit)* C'est parce que je me suis levée tôt.\n\n**ISMÈNE** : Moi non plus, je n'ai pas dormi.\n\n**ANTIGONE**, *(sourit encore)* : Il faut que tu dormes. Tu serais moins belle demain.\n\n**ISMÈNE** : Ne te moque pas.\n\n**ANTIGONE** : Je ne me moque pas. Cela me rassure ce matin, que tu sois belle. Quand j'étais petite, j'étais si malheureuse, tu te souviens ? Je te barbouillais de terre, je te mettais des vers dans le cou. Une fois, je t'ai attachée à un arbre et je t'ai coupé tes cheveux, tes beaux cheveux... *(Elle caresse les cheveux d'Ismène)* Comme cela doit être facile de ne pas penser de bêtises avec toutes ces belles mèches lisses et bien ordonnées autour de la tête !\n\n**ISMÈNE**, *(soudain)* : Pourquoi parles-tu d'autre chose ?\n\n**ANTIGONE**, *(doucement, sans cesser de lui caresser les cheveux)* : Je ne parle pas d'autre chose...\n\n**ISMÈNE** : Tu sais, j'ai bien pensé, Antigone.\n\n**ANTIGONE** : Oui.\n\n**ISMÈNE** : J'ai bien pensé toute la nuit. Tu es folle.\n\n**ANTIGONE** : **Oui.**\n\n**ISMÈNE** : Nous ne pouvons pas.", "questions": [{"type": "tableau", "numero": "1A", "points": 1, "enonce": "En vous basant sur votre lecture, recopiez et complétez le tableau ci-dessous :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "**Antigone**"}, {"libelle": "Auteur", "reponse": "**Jean Anouilh**"}, {"libelle": "Genre", "reponse": "**Une tragédie**"}, {"libelle": "Date de parution", "reponse": "**1944**"}]}, {"type": "libre", "numero": "1B", "points": 0.5, "enonce": "Situez la scène par rapport à toute l'œuvre.", "correction": "La scène se situe au début de l'œuvre."}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Relisez la scène : a- Quels sont les personnages de la scène ?", "correction": "Les personnages de la scène sont : Ismène – La nourrice – Antigone."}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "b- Précisez leurs relations.", "correction": "Leurs relations : Antigone et Ismène sont deux sœurs et La Nourrice est la servante des princesses."}, {"type": "vrai-faux", "numero": "3", "points": 1, "enonce": "**Mettez devant chaque proposition : Vraie ou Fausse en justifiant votre choix**", "affirmations": [{"texte": "a- La Nourrice s'est réveillée avant les princesses.", "vrai": false}, {"texte": "b- Antigone est plus belle que sa sœur Ismène.", "vrai": false}, {"texte": "c- Antigone se moque de sa sœur.", "vrai": true}, {"texte": "d- Ismène s'oppose au projet d'Antigone.", "vrai": true}]}, {"type": "libre", "numero": "4", "points": 1.5, "enonce": "Quelles figures de style se réalisent dans les groupes suivants : a- **Ma colombe ! :** b- **Comme une idiote :** c- **Oui :**", "correction": "a- **Ma colombe ! :** une périphrase ou une métaphore b- **Comme une idiote :** une comparaison c- **Oui :** une ironie."}, {"type": "libre", "numero": "5", "points": 1.5, "enonce": "**Relevez du texte :** a- Deux didascalies relatives au personnage principal. b- Une didascalie concernant le portrait d'Ismène.", "correction": "a- Deux didascalies relatives au personnage principal : *(Elle sourit) - (Elle caresse les cheveux d'Ismène)* b- Une phrase concernant le portrait d'Ismène : *avec toutes ces belles mèches lisses et bien ordonnées autour de la tête !*"}, {"type": "libre", "numero": "6", "points": 0.5, "enonce": "« ***Nous ne pouvons pas.*** » dit Ismène. De quoi parle-t-elle ?", "correction": "elle parle de l'enterrement de leur frère Polynice."}, {"type": "libre", "numero": "7", "points": 0.5, "enonce": "**Relevez du texte :** a- Une réplique qui montre qu'Antigone refuse de dire la vérité. b- Une phrase précisant la beauté d'Ismène.", "correction": "a- Une réplique qui montre qu'Antigone refuse de dire la vérité : « Je ne parle pas d'autre chose. » b- Une phrase précisant la beauté d'Ismène : « je t'ai coupé tes cheveux, tes beaux cheveux... »"}, {"type": "tableau", "numero": "8", "points": 1.5, "enonce": "**Recopiez et complétez le tableau suivant :** (Les phrases du texte / Dites ce qu'elles expriment)", "champs": [{"libelle": "Il faut que tu dormes.", "reponse": "L'obligation"}, {"libelle": "Je voudrais bien un peu de café, s'il te plaît, nounou.", "reponse": "Une demande polie"}, {"libelle": "C'est parce que je me suis levée tôt.", "reponse": "La cause"}]}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Pourquoi Antigone refuse-elle de dire la vérité ? Feriez-vous de même si vous étiez à sa place ?", "correction": "Acceptez la réponse bien formulée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Dans cette scène Antigone préfère ne parler de son projet à personne. Etes-vous d'accord avec ce genre d'attitude ou faut-il partager sa décision avec les autres ?\n\nElaborez un texte argumentatif dans lequel vous défendrez votre point de vue de manière cohérente.\n\n**NB :** Lors de la correction, il sera tenu compte des éléments suivants :\n\n- Respect de la consigne……2pts\n- Pertinence des arguments……2pts\n- Cohérence et progression des idées……3pts\n- Correction de la langue……3pt", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
