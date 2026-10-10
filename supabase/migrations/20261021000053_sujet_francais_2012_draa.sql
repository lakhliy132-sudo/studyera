-- Sujet de français, examen régional 2012 (session normale), académie
-- Drâa-Tafilalet, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2012 جهة درعة تافيلالت »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie « الأكاديمية الجهوية للتربية والتكوين
-- لجهة مكناس تافيلالت » (Meknès-Tafilalet, avant le découpage régional de
-- 2015) ; « الدورة العادية يونيو 2012 », « خاص بالمترشحين الممدرسين »,
-- durée « ساعتان ». Coefficient vide : 3 pour sciences économiques et
-- gestion, 4 pour les autres séries.
-- Le barème est donné par question (les sous-questions a, b, c ne sont pas
-- chiffrées séparément) : chaque question est saisie d'un seul bloc.
-- Le corrigé de la production écrite se termine par un total « 20 pts »
-- (sous les quatre critères qui font 10 points) : recopié tel quel.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2012,
  $sujet$normale$sujet$,
  $sujet$Drâa-Tafilalet$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences économiques et gestion, sciences et technologies électriques, sciences et technologies mécaniques, arts appliqués$sujet$,
  120,
  $sujet$## Texte

Je déjeunai tout seul et je partis à l'école. L'après-midi se passa pour moi comme les autres après-midi (…). Le soir, je repris le chemin de la maison. Je m'attendais à la trouver sens dessus dessous. Il n'en était rien. Silencieuses, les femmes soufflaient leur feu, remuaient leurs ragoûts, écrasaient dans des mortiers de cuivre leurs épices. Je n'osai pas interroger ma mère sur les aventures de Zineb.

Mon père arriva, comme de coutume, après la prière de *l'Aacha*. Le repas se déroula simplement, mais à l'heure du thé, maman parla des événements de la journée. Elle commença :

– Cette pauvre Rahma a passé une journée dans les affres de l'angoisse. Nous avons toutes été bouleversées.

– Que s'est-il passé? demanda mon père.

Ma mère reprit :

– Tu connais Allal le fournier (…) Il est marié à Khadija, la sœur de notre voisine Rahma. ( …) Mariés depuis trois ans ils désiraient vivement avoir un enfant. La pauvre Khadija a consulté les guérisseurs, les *fqihs*, les sorciers et les *chouafas* sans résultat. Il y a un an, ils sont allés en pèlerinage à Sidi Ali Bou Serghine. Khadija se baigna dans la source, promit au saint de sacrifier un agneau si Dieu exauçait son vœu. Elle a eu son bébé. Depuis six jours, la joie du ménage est à son comble. Demain on procédera au sacrifice du Nom.

Mon père osa faire remarquer qu'il ne voyait pas dans cet événement motif à angoisse. Mais ma mère l'interrompit et déclara qu'il était incapable d'écouter jusqu'au bout un récit.

– Attends! Attends! dit-elle, je commence à peine, tu m'interromps tout le temps.

Rahma était donc invitée au baptême et à la cérémonie du Nom. (…) Elle habilla de neuf sa fille Zineb et elles partirent de bonne heure ce matin. Elles passèrent par Mechchatine, Seffarine, El Ouadine...

– Tu ne vas pas citer toutes les rues de Fès, dit simplement mon père.

Je pouffai de rire. Des yeux sévères se fixèrent un moment sur moi et ma mère reprit:

– Elles arrivèrent à Rsif. La foule barrait le chemin. Un marchand vendait des poissons frais (...). Les gens se battaient pour se faire servir. Rahma et sa fille furent prises dans les remous de cette cohue. Une fois à l'air libre, Rahma rajusta son *haïk* et constata la disparition de Zineb! Elle appela, cria, ameuta la foule. Les gens vinrent au secours de la mère affligée, mais la fille restait introuvable.

Rahma revint tout en larmes, nous la consolâmes de notre mieux. Allal le jardinier se dépêcha de prévenir le mari de Rahma. Deux crieurs publics parcoururent la ville en tous sens, donnèrent le signalement de la fille, promettant une récompense à celui qui la ramènerait à ses parents.

Pendant ce temps, nous, faibles femmes, nous ne pouvions que pleurer, offrir notre compassion à.la malheureuse mère.

J'avais le cœur gros. Fatma Bziouya et moi nous partîmes à Moulay Idriss. Dans de pareilles circonstances, il faut frapper à la porte de Dieu et de ses Saints. Cette porte cède toujours devant les affligés. Une vieille femme surprit notre douleur, elle nous en demanda le motif. Nous la mîmes au courant du triste événement. Elle nous emmena à Dar Kitoun, lieu d'asile de toutes les abandonnées. Là, nous trouvâmes Zineb. La *moqqadama* l'avait recueillie et nourrie pour l'amour du Créateur. Elle eut un *rial* de récompense et nous la remerciâmes pour ses bons soins. Rahma retrouva toute sa gaîté lorsque sa fille lui fut rendue.

– Louange à Dieu! termina mon père. Prépare le lit de cet enfant, ajouta-t-il. Il tombe de sommeil.

Extrait de « *La Boîte à Merveilles* » d'Ahmed Sefrioui

## I. Étude de texte (10 points)

**1.** Ahmed SEFRIOUI est un écrivain marocain d'expression française. Quand et où est-il né ? (0,25x2 pt) Citez une de ses œuvres (autre que «*La Boîte à merveilles*».(0,25 pt) Quand est-il mort ? (0,25 pt) Pour répondre, **vous pouvez choisir** [souligné sur la feuille, en gras ici] parmi les informations suivantes : 1910, 1915, 2004 , 2010 à Tétouan, à Fès , « Les misérables ». « Rêver du Maroc ». **(1 pt)**

**2.** D'après votre lecture de l'œuvre, pourquoi Sidi Mohamed s'attend-il à trouver la maison sens dessus-dessous ? **(1 pt)**

**3.** a) Relevez deux comparaisons employées dans le passage allant du début du texte jusqu'à « … les événements de la journée. » b) Quelle idée chacune de ces comparaisons met-elle en relief ? **(1 pt)**

**4.** a) Selon Khadija, qu'est-ce qui l'a finalement aidée à avoir son bébé ? b) Partagez-vous la croyance de Khadija? c) Justifiez votre réponse. **(2 pts)**

**5.** a) Dégagez dans le texte deux sentiments éprouvés par Rahma ; b) Qu'est-ce qui est à l'origine de chacun de ces deux sentiments? **(1 pt)**

**6.** a) Qui a retrouvé Zineb ? b) D'après votre lecture de l'œuvre, que fait Rahma quelques jours après avoir retrouvé Zineb ? **(2 pts)**

**7.** Quelle est, selon vous, l'intention du père dans sa dernière réplique? **(1 pt)**

**8.** a) Les événements de cet extrait sont-ils relatés par un seul narrateur ? b) Justifiez votre réponse. **(1 pt)**

## II. Production écrite (10 points)

**Sujet :**

Sidi Mohamed , personnage principal de « La Boîte à merveilles » a grandi dans une famille traditionnelle.

Que pensez-vous de la famille de sidi Mohamed ?

Rédigez un texte dans lequel vous exposerez votre conception d'une bonne famille.

**NB:** Lors de la correction de la production écrite, il sera tenu compte des éléments suivants : présentation de la copie : 2 pts - respect de la consigne : 3 pts - cohérence textuelle : 2 pts - correction de la langue : 3 pts$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse (à titre indicatif) et barème. NB : Ce corrigé est donné à titre indicatif.*

### I. Étude de texte

**1.** Ahmed SEFRIOUI est un écrivain marocain d'expression française. Il est né en 1915 à Fès. (0,25x2 pt) Une de ses œuvres ( autre que « *La Boîte à Merveilles* » : «*Réver du Maroc* » (0,25pt). Il est mort en 2004 (0,25 pt) **(1 pt)**

**2.** Parce que Zineb a disparu. La disparition de Zineb. Ou équivalent. **(1 pt)**

**3.** Dans le passage: « Je déjeunai tout seul…Demain on procédera au sacrifice du Nom.» Une comparaison : « L'après-midi se passa pour moi comme les autres après-midi. » « Mon père arriva, comme de coutume, après la prière de *l'Aacha*. » Ces deux comparaisons mettent en relief la routine, la vie monotone. Ou équivalent. **(1 pt)**

**4.** a) Khadija croit que le saint , Sidi Ali Bou Serghine l'a aidée à avoir son bébé. Accepter toute autre formulation adéquate comme le fait de se baigner dans la source du saint. b) Accepter toute réponse cohérente. Ex. Non. c) Justification : c'est Dieu qui a fait que Khadija a eu son bébé. Accepter l'explication scientifique ( …) Oui. Justification : je crois à l'intervention des saints dans notre vie. A leur intercession bénéfique. Accepter toute autre réponse ou formulation adéquates. **(2 pts)**

**5.** Deux sentiments éprouvés par Rahma : L'angoisse. Origine : ex. la disparition de Zineb . La peur de perdre sa fille pour toujours. La tristesse. Origine : la disparition de Zineb. La joie. Origine : Zineb retrouvée. **(1 pt)**

**6.** a) Lalla Zoubida ( la mère du narrateur) et Fatma Bziouya ont retrouvé Zineb à Moulay Idriss. b) Rahma organise un repas. (pour les pauvres et (une fête) pour ses voisines). Ou équivalent. **(2 pts)**

**7.** Le père veut que son épouse termine son récit car il est fatigué , car il est temps de dormir. Accepter toute autre réponse convenable. **(1 pt)**

**8.** a) Non . b) Justification : les événements de cet extrait sont relatés par Sidi Mohamed et sa mère. En effet Sidi Mohamed qui est le narrateur principal continue à raconter ses souvenirs d'enfance et prête ici à sa mère , en tant que narrateur relais, la responsabilité de raconter le récit de la disparition de Zineb. Accepter toute autre formulation ou réponse adéquates. **(1 pt)**

### II. Production écrite

| | |
|---|---|
| Présentation | 2 pts |
| Respect de la consigne | 3 pts |
| Cohérence textuelle | 2 pts |
| Correction de la langue | 3 pts |
| | 20 pts |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Relisez le texte et répondez aux questions suivantes :", "texte": "Je déjeunai tout seul et je partis à l'école. L'après-midi se passa pour moi comme les autres après-midi (…). Le soir, je repris le chemin de la maison. Je m'attendais à la trouver sens dessus dessous. Il n'en était rien. Silencieuses, les femmes soufflaient leur feu, remuaient leurs ragoûts, écrasaient dans des mortiers de cuivre leurs épices. Je n'osai pas interroger ma mère sur les aventures de Zineb.\n\nMon père arriva, comme de coutume, après la prière de *l'Aacha*. Le repas se déroula simplement, mais à l'heure du thé, maman parla des événements de la journée. Elle commença :\n\n– Cette pauvre Rahma a passé une journée dans les affres de l'angoisse. Nous avons toutes été bouleversées.\n\n– Que s'est-il passé? demanda mon père.\n\nMa mère reprit :\n\n– Tu connais Allal le fournier (…) Il est marié à Khadija, la sœur de notre voisine Rahma. ( …) Mariés depuis trois ans ils désiraient vivement avoir un enfant. La pauvre Khadija a consulté les guérisseurs, les *fqihs*, les sorciers et les *chouafas* sans résultat. Il y a un an, ils sont allés en pèlerinage à Sidi Ali Bou Serghine. Khadija se baigna dans la source, promit au saint de sacrifier un agneau si Dieu exauçait son vœu. Elle a eu son bébé. Depuis six jours, la joie du ménage est à son comble. Demain on procédera au sacrifice du Nom.\n\nMon père osa faire remarquer qu'il ne voyait pas dans cet événement motif à angoisse. Mais ma mère l'interrompit et déclara qu'il était incapable d'écouter jusqu'au bout un récit.\n\n– Attends! Attends! dit-elle, je commence à peine, tu m'interromps tout le temps.\n\nRahma était donc invitée au baptême et à la cérémonie du Nom. (…) Elle habilla de neuf sa fille Zineb et elles partirent de bonne heure ce matin. Elles passèrent par Mechchatine, Seffarine, El Ouadine...\n\n– Tu ne vas pas citer toutes les rues de Fès, dit simplement mon père.\n\nJe pouffai de rire. Des yeux sévères se fixèrent un moment sur moi et ma mère reprit:\n\n– Elles arrivèrent à Rsif. La foule barrait le chemin. Un marchand vendait des poissons frais (...). Les gens se battaient pour se faire servir. Rahma et sa fille furent prises dans les remous de cette cohue. Une fois à l'air libre, Rahma rajusta son *haïk* et constata la disparition de Zineb! Elle appela, cria, ameuta la foule. Les gens vinrent au secours de la mère affligée, mais la fille restait introuvable.\n\nRahma revint tout en larmes, nous la consolâmes de notre mieux. Allal le jardinier se dépêcha de prévenir le mari de Rahma. Deux crieurs publics parcoururent la ville en tous sens, donnèrent le signalement de la fille, promettant une récompense à celui qui la ramènerait à ses parents.\n\nPendant ce temps, nous, faibles femmes, nous ne pouvions que pleurer, offrir notre compassion à.la malheureuse mère.\n\nJ'avais le cœur gros. Fatma Bziouya et moi nous partîmes à Moulay Idriss. Dans de pareilles circonstances, il faut frapper à la porte de Dieu et de ses Saints. Cette porte cède toujours devant les affligés. Une vieille femme surprit notre douleur, elle nous en demanda le motif. Nous la mîmes au courant du triste événement. Elle nous emmena à Dar Kitoun, lieu d'asile de toutes les abandonnées. Là, nous trouvâmes Zineb. La *moqqadama* l'avait recueillie et nourrie pour l'amour du Créateur. Elle eut un *rial* de récompense et nous la remerciâmes pour ses bons soins. Rahma retrouva toute sa gaîté lorsque sa fille lui fut rendue.\n\n– Louange à Dieu! termina mon père. Prépare le lit de cet enfant, ajouta-t-il. Il tombe de sommeil.\n\nExtrait de « *La Boîte à Merveilles* » d'Ahmed Sefrioui", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "Ahmed SEFRIOUI est un écrivain marocain d'expression française. Quand et où est-il né ? (0,25x2 pt) Citez une de ses œuvres (autre que «*La Boîte à merveilles*».(0,25 pt) Quand est-il mort ? (0,25 pt) Pour répondre, **vous pouvez choisir** [souligné sur la feuille, en gras ici] parmi les informations suivantes : 1910, 1915, 2004 , 2010 à Tétouan, à Fès , « Les misérables ». « Rêver du Maroc ».", "correction": "Ahmed SEFRIOUI est un écrivain marocain d'expression française. Il est né en 1915 à Fès. (0,25x2 pt) Une de ses œuvres ( autre que « *La Boîte à Merveilles* » : «*Réver du Maroc* » (0,25pt). Il est mort en 2004 (0,25 pt)"}, {"type": "libre", "numero": "2", "points": 1, "enonce": "D'après votre lecture de l'œuvre, pourquoi Sidi Mohamed s'attend-il à trouver la maison sens dessus-dessous ?", "correction": "Parce que Zineb a disparu. La disparition de Zineb. Ou équivalent."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "a) Relevez deux comparaisons employées dans le passage allant du début du texte jusqu'à « … les événements de la journée. » b) Quelle idée chacune de ces comparaisons met-elle en relief ?", "correction": "Dans le passage: « Je déjeunai tout seul…Demain on procédera au sacrifice du Nom.» Une comparaison : « L'après-midi se passa pour moi comme les autres après-midi. » « Mon père arriva, comme de coutume, après la prière de *l'Aacha*. » Ces deux comparaisons mettent en relief la routine, la vie monotone. Ou équivalent."}, {"type": "libre", "numero": "4", "points": 2, "enonce": "a) Selon Khadija, qu'est-ce qui l'a finalement aidée à avoir son bébé ? b) Partagez-vous la croyance de Khadija? c) Justifiez votre réponse.", "correction": "a) Khadija croit que le saint , Sidi Ali Bou Serghine l'a aidée à avoir son bébé. Accepter toute autre formulation adéquate comme le fait de se baigner dans la source du saint. b) Accepter toute réponse cohérente. Ex. Non. c) Justification : c'est Dieu qui a fait que Khadija a eu son bébé. Accepter l'explication scientifique ( …) Oui. Justification : je crois à l'intervention des saints dans notre vie. A leur intercession bénéfique. Accepter toute autre réponse ou formulation adéquates."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "a) Dégagez dans le texte deux sentiments éprouvés par Rahma ; b) Qu'est-ce qui est à l'origine de chacun de ces deux sentiments?", "correction": "Deux sentiments éprouvés par Rahma : L'angoisse. Origine : ex. la disparition de Zineb . La peur de perdre sa fille pour toujours. La tristesse. Origine : la disparition de Zineb. La joie. Origine : Zineb retrouvée."}, {"type": "libre", "numero": "6", "points": 2, "enonce": "a) Qui a retrouvé Zineb ? b) D'après votre lecture de l'œuvre, que fait Rahma quelques jours après avoir retrouvé Zineb ?", "correction": "a) Lalla Zoubida ( la mère du narrateur) et Fatma Bziouya ont retrouvé Zineb à Moulay Idriss. b) Rahma organise un repas. (pour les pauvres et (une fête) pour ses voisines). Ou équivalent."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Quelle est, selon vous, l'intention du père dans sa dernière réplique?", "correction": "Le père veut que son épouse termine son récit car il est fatigué , car il est temps de dormir. Accepter toute autre réponse convenable."}, {"type": "libre", "numero": "8", "points": 1, "enonce": "a) Les événements de cet extrait sont-ils relatés par un seul narrateur ? b) Justifiez votre réponse.", "correction": "a) Non . b) Justification : les événements de cet extrait sont relatés par Sidi Mohamed et sa mère. En effet Sidi Mohamed qui est le narrateur principal continue à raconter ses souvenirs d'enfance et prête ici à sa mère , en tant que narrateur relais, la responsabilité de raconter le récit de la disparition de Zineb. Accepter toute autre formulation ou réponse adéquates."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nSidi Mohamed , personnage principal de « La Boîte à merveilles » a grandi dans une famille traditionnelle.\n\nQue pensez-vous de la famille de sidi Mohamed ?\n\nRédigez un texte dans lequel vous exposerez votre conception d'une bonne famille.\n\n**NB:** Lors de la correction de la production écrite, il sera tenu compte des éléments suivants : présentation de la copie : 2 pts - respect de la consigne : 3 pts - cohérence textuelle : 2 pts - correction de la langue : 3 pts", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
