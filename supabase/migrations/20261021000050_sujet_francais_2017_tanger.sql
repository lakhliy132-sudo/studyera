-- Sujet de français, examen régional 2017 (session normale), académie
-- Tanger-Tétouan-Al Hoceïma, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2017 جهة طنجة تطوان الحسيمة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Tanger-Tétouan-Al Hoceïma (« جهة طنجة تطوان الحسيمة ») ;
-- « الدورة العادية – يونيو 2017 », durée « 2 ساعات », filière « جميع الشعب الأدبية
-- و العلمية و التقنية ». Coefficient « 4 / 3 » : selon la série, donc non saisi.
-- Le sujet est imprimé sur une feuille-réponse (pointillés pour répondre) ; la
-- page 5 du PDF n'est que la page lignée de la production écrite.
-- La question 8 cite « faire ce que je te dis » alors que le texte porte « faire
-- ce que je t'ai dit » : les deux sont laissés comme sur la feuille. Le mot
-- « foudroie » n'est souligné que dans la question 7, pas dans le texte.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2017,
  $sujet$normale$sujet$,
  $sujet$Tanger-Tétouan-Al Hoceïma$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Toutes les filières littéraires, scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

**CRÉON**

(…) Alors, écoute-moi bien. Tu es Antigone, tu es la fille d'Oedipe, soit, mais tu as vingt ans et il n'y a pas longtemps encore tout cela se serait réglé par du pain sec et une paire de gifles. *(Il la regarde, souriant.)* Te faire mourir ! Tu ne t'es pas regardée, moineau ! Tu es trop maigre. Grossis un peu, plutôt, pour faire un gros garçon à Hémon. Thèbes en a besoin plus que de ta mort, je te l'assure. Tu vas rentrer chez toi tout de suite, faire ce que je t'ai dit et te taire. Je me charge du silence des autres. Allez, va! Et ne me foudroie pas comme cela du regard. Tu me prends pour une brute, c'est entendu, et tu dois penser que je suis décidément bien prosaïque. Mais je t'aime bien tout de même, avec ton sale caractère. N'oublie pas que c'est moi qui t'ai fait cadeau de ta première poupée, il n'y a pas si longtemps.

*Antigone ne répond pas. Elle va sortir. Il l'arrête.*

**CRÉON**

Antigone ! C'est par cette porte qu'on regagne ta chambre. Où t'en vas-tu par là ?

**ANTIGONE**, *s'est arrêtée, elle lui répond doucement, sans forfanterie.*

Vous le savez bien…

*Un silence. Ils se regardent encore debout l'un en face de l'autre.*

**CRÉON**, *murmure, comme pour lui.*

Quel jeu joues-tu ?

**ANTIGONE**

Je ne joue pas.

**CRÉON**

Tu ne comprends donc pas que si quelqu'un d'autre que ces trois brutes sait tout à l'heure ce que tu as tenté de faire, je serai obligé de te faire mourir ? Si tu te tais maintenant, si tu renonces à cette folie, j'ai une chance de te sauver, mais je ne l'aurai plus dans cinq minutes. Le comprends-tu ?

***ANTIGONE***

## I. Étude de texte (10 points)

**1.** a) Qui est l'auteur du texte ? b) A quel siècle a-t-il vécu ? c) A quel genre appartient la pièce « ***Antigone*** » ? d) Citez une autre œuvre du même auteur ? **(0,25 pt x 4)**

**2a.** Pour situer le texte dans l'œuvre, répondez à ces deux questions : a) Combien de fois Antigone a-t-elle essayé d'enterrer son frère ? **(0,5 pt)**

**2b.** A quel châtiment Antigone a-t-elle été condamnée ? **(0,5 pt)**

**3.** Pour quelle raison Créon demande-t-il à Antigone de grossir ? **(1 pt)**

**4.** Créon traite Antigone avec tendresse. Justifiez cette affirmation par un énoncé du texte. **(1 pt)**

**5.** Quel souvenir d'enfance Créon rappelle-t-il à Antigone ? **(1 pt)**

**6.** Créon impose à Antigone deux conditions pour qu'il puisse la sauver. Dîtes lesquelles. **(0,5 pt x 2)**

**7.** « Et ne me **foudroie** pas comme cela du regard » [souligné sur la feuille, en gras ici] Le mot souligné dans cet énoncé exprime un sentiment de : Recopiez la bonne réponse. **(1 pt)**

a- tristesse  
b- joie  
c- colère

**8.** « **Tu vas rentrer chez toi tout de suite, faire ce que je te dis et te taire** ». La figure de style employée dans cet énoncé est : Recopiez la bonne réponse. **(1 pt)**

a- une métaphore  
b- une énumération  
c- une antithèse

**9.** Créon est prêt à se charger du silence des autres pour sauver Antigone. A sa place, auriez-vous eu la même attitude ? Justifiez votre réponse (environ *trois lignes*). **(1 pt)**

**10.** Selon vous, lequel des deux personnages est le plus hostile (entêté), Antigone ou Créon ? Justifiez votre réponse (environ *quatre lignes*). **(1 pt)**

## II. Production écrite (10 points)

**Sujet :**

Certains pensent que les jeunes d'aujourd'hui sont plus ouverts et moins réservés que les jeunes d'autrefois car ils expriment plus facilement leurs opinions et leurs sentiments que ce soit en famille ou en société.

Partagez-vous cet avis ?

Développez votre point de vue (*trente lignes maximum*) en vous appuyant sur des arguments et sur des exemples précis.

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Critères d'évaluation | Barème de notation |
|---|---|
| ***Critères d'évaluation du discours*** – Conformité de la production à la consigne d'écriture – Cohérence de l'argumentation – Structure du texte (organisation et progression du texte) | 5 Points |
| ***Critères d'évaluation de la langue*** – Vocabulaire (usage de termes précis et variés) – Syntaxe (construction de phrases correctes) – Ponctuation (usage d'une ponctuation adéquate) – Orthographe d'usage et grammaticale (respect des règles) – Conjugaison (emploi des temps) | 5 Points |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponses (à titre indicatif) et barème de notation.*

### I. Étude de texte

**1.** a) Jean Anouilh ; b) Le vingtième siècle ; c) une tragédie moderne ; d) *l'Alouette ; le bal des voleurs ; la Grotte....* **(0,25 pt x 4)**

**2a.** deux fois ; **(0,5 pt)**

**2b.** à mourir ; à être enterrée vivante. **(0,5 pt)**

**3.** Faire un bébé à Hémon. **(1 pt)**

**4.** « tu ne t'es pas regardée moineau » ; « Mais je t'aime bien tout de même » ; *Accepter tout énoncé justifiant cette affirmation.* **(1 pt)**

**5.** C'est Créon qui lui a offert sa première poupée. **(1 pt)**

**6.** a) Se taire ; b) renoncer à sa folie (tenter d'enterrer son frère). **(0,5 pt x 2)**

**7.** Un sentiment de colère. **(1 pt)**

**8.** Une énumération. **(1 pt)**

**9.** Accepter toute réaction convenablement justifiée. **(1 pt)**

**10.** Accepter toute réaction convenablement justifiée. **(1 pt)**

### II. Production écrite

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Critères d'évaluation | Barème de notation |
|---|---|
| ***Critères d'évaluation du discours*** | **5 Points** |
| – Conformité de la production à la consigne d'écriture | (1 pt) |
| – Cohérence de l'argumentation | (2 pts) |
| – Structure du texte (organisation et progression du texte) | (2 pts) |
| ***Critères d'évaluation de la langue*** – Vocabulaire (usage de termes précis et variés) – Syntaxe (construction de phrases correctes) – Ponctuation (usage d'une ponctuation adéquate) – Orthographe d'usage et grammaticale (respect des règles) – Conjugaison (emploi des temps) | **5 Points** |

**IMPORTANT :**

- *Les correcteurs sont priés de respecter le barème de notation de l'épreuve de production écrite avec la précision et la rigueur requises.*
- *Les correcteurs sont invités à accepter tout plan argumentatif mis en œuvre par le candidat (binaire, dialectique, analytique…)*
- *La note globale de la production devrait correspondre à la somme des notes partielles (les critères).*
- *Il est recommandé d'éviter tout recours injustifié à la mention « hors sujet ».*$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**CRÉON**\n\n(…) Alors, écoute-moi bien. Tu es Antigone, tu es la fille d'Oedipe, soit, mais tu as vingt ans et il n'y a pas longtemps encore tout cela se serait réglé par du pain sec et une paire de gifles. *(Il la regarde, souriant.)* Te faire mourir ! Tu ne t'es pas regardée, moineau ! Tu es trop maigre. Grossis un peu, plutôt, pour faire un gros garçon à Hémon. Thèbes en a besoin plus que de ta mort, je te l'assure. Tu vas rentrer chez toi tout de suite, faire ce que je t'ai dit et te taire. Je me charge du silence des autres. Allez, va! Et ne me foudroie pas comme cela du regard. Tu me prends pour une brute, c'est entendu, et tu dois penser que je suis décidément bien prosaïque. Mais je t'aime bien tout de même, avec ton sale caractère. N'oublie pas que c'est moi qui t'ai fait cadeau de ta première poupée, il n'y a pas si longtemps.\n\n*Antigone ne répond pas. Elle va sortir. Il l'arrête.*\n\n**CRÉON**\n\nAntigone ! C'est par cette porte qu'on regagne ta chambre. Où t'en vas-tu par là ?\n\n**ANTIGONE**, *s'est arrêtée, elle lui répond doucement, sans forfanterie.*\n\nVous le savez bien…\n\n*Un silence. Ils se regardent encore debout l'un en face de l'autre.*\n\n**CRÉON**, *murmure, comme pour lui.*\n\nQuel jeu joues-tu ?\n\n**ANTIGONE**\n\nJe ne joue pas.\n\n**CRÉON**\n\nTu ne comprends donc pas que si quelqu'un d'autre que ces trois brutes sait tout à l'heure ce que tu as tenté de faire, je serai obligé de te faire mourir ? Si tu te tais maintenant, si tu renonces à cette folie, j'ai une chance de te sauver, mais je ne l'aurai plus dans cinq minutes. Le comprends-tu ?\n\n***ANTIGONE***", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "a) Qui est l'auteur du texte ? b) A quel siècle a-t-il vécu ? c) A quel genre appartient la pièce « ***Antigone*** » ? d) Citez une autre œuvre du même auteur ?", "correction": "a) Jean Anouilh ; b) Le vingtième siècle ; c) une tragédie moderne ; d) *l'Alouette ; le bal des voleurs ; la Grotte....*"}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Pour situer le texte dans l'œuvre, répondez à ces deux questions : a) Combien de fois Antigone a-t-elle essayé d'enterrer son frère ?", "correction": "deux fois ;"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "A quel châtiment Antigone a-t-elle été condamnée ?", "correction": "à mourir ; à être enterrée vivante."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Pour quelle raison Créon demande-t-il à Antigone de grossir ?", "correction": "Faire un bébé à Hémon."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Créon traite Antigone avec tendresse. Justifiez cette affirmation par un énoncé du texte.", "correction": "« tu ne t'es pas regardée moineau » ; « Mais je t'aime bien tout de même » ; *Accepter tout énoncé justifiant cette affirmation.*"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Quel souvenir d'enfance Créon rappelle-t-il à Antigone ?", "correction": "C'est Créon qui lui a offert sa première poupée."}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Créon impose à Antigone deux conditions pour qu'il puisse la sauver. Dîtes lesquelles.", "correction": "a) Se taire ; b) renoncer à sa folie (tenter d'enterrer son frère)."}, {"type": "choix", "numero": "7", "points": 1, "enonce": "« Et ne me **foudroie** pas comme cela du regard » [souligné sur la feuille, en gras ici] Le mot souligné dans cet énoncé exprime un sentiment de : Recopiez la bonne réponse.", "options": ["tristesse", "joie", "colère"], "bonne": 2}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« **Tu vas rentrer chez toi tout de suite, faire ce que je te dis et te taire** ». La figure de style employée dans cet énoncé est : Recopiez la bonne réponse.", "options": ["une métaphore", "une énumération", "une antithèse"], "bonne": 1}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Créon est prêt à se charger du silence des autres pour sauver Antigone. A sa place, auriez-vous eu la même attitude ? Justifiez votre réponse (environ *trois lignes*).", "correction": "Accepter toute réaction convenablement justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Selon vous, lequel des deux personnages est le plus hostile (entêté), Antigone ou Créon ? Justifiez votre réponse (environ *quatre lignes*).", "correction": "Accepter toute réaction convenablement justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nCertains pensent que les jeunes d'aujourd'hui sont plus ouverts et moins réservés que les jeunes d'autrefois car ils expriment plus facilement leurs opinions et leurs sentiments que ce soit en famille ou en société.\n\nPartagez-vous cet avis ?\n\nDéveloppez votre point de vue (*trente lignes maximum*) en vous appuyant sur des arguments et sur des exemples précis.\n\n**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**\n\n| Critères d'évaluation | Barème de notation |\n|---|---|\n| ***Critères d'évaluation du discours*** – Conformité de la production à la consigne d'écriture – Cohérence de l'argumentation – Structure du texte (organisation et progression du texte) | 5 Points |\n| ***Critères d'évaluation de la langue*** – Vocabulaire (usage de termes précis et variés) – Syntaxe (construction de phrases correctes) – Ponctuation (usage d'une ponctuation adéquate) – Orthographe d'usage et grammaticale (respect des règles) – Conjugaison (emploi des temps) | 5 Points |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
