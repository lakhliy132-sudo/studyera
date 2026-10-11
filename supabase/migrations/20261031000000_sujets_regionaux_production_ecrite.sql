-- Les productions écrites des annales de français deviennent des sujets du
-- correcteur (« pour la partie expression écrite, prend les sujets des
-- régionaux aussi et mets-les en premier », puis « quand tu veux corriger
-- ta feuille tu passes directement par le bouton »).
--
-- Un sujet par production écrite (trois pour les sujets 2020 à épreuves au
-- choix), de type « régional ». Sa consigne est l'énoncé de la feuille sans
-- la grille de notation, en texte simple. Le titre « Régional <année> ·
-- <académie>[ · rattrapage][ · <épreuve>] » rattache l'annale à son sujet :
-- l'application le recalcule pour le bouton « Envoyer ma copie ».
--
-- Rejouable : un sujet déjà présent (même type, même titre) voit sa consigne
-- et son œuvre mises à jour au lieu d'être recréé. Généré à partir des
-- annales en base ; à relancer après l'ajout de nouveaux sujets régionaux.

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2026 · Casablanca-Settat$s$, $s$Sujet : De nos jours, beaucoup de jeunes, tout comme Antigone, prennent des décisions difficiles (mariage, divorce, études, emploi, immigration, etc.) sans consulter les adultes. Les jeunes ont-ils raison de prendre seuls leurs décisions ou doivent-ils consulter des adultes ? Développez votre point de vue en vous basant sur des arguments précis et des exemples clairs.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2026 · Casablanca-Settat$s$);
update public.sujets set consigne = $s$Sujet : De nos jours, beaucoup de jeunes, tout comme Antigone, prennent des décisions difficiles (mariage, divorce, études, emploi, immigration, etc.) sans consulter les adultes. Les jeunes ont-ils raison de prendre seuls leurs décisions ou doivent-ils consulter des adultes ? Développez votre point de vue en vous basant sur des arguments précis et des exemples clairs.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2026 · Casablanca-Settat$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2025 · Casablanca-Settat$s$, $s$Sujet: Certaines personnes pensent qu'il faut durcir les jugements et les peines pour réduire la délinquance et la criminalité. Qu'en pensez-vous? Rédigez un texte argumentatif dans lequel vous développez votre point de vue à l'aide d'arguments et d'exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2025 · Casablanca-Settat$s$);
update public.sujets set consigne = $s$Sujet: Certaines personnes pensent qu'il faut durcir les jugements et les peines pour réduire la délinquance et la criminalité. Qu'en pensez-vous? Rédigez un texte argumentatif dans lequel vous développez votre point de vue à l'aide d'arguments et d'exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2025 · Casablanca-Settat$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2024 · Béni Mellal-Khénifra$s$, $s$Sujet : Aujourd'hui, de plus en plus de jeunes ont des exigences (des demandes) qui dépassent le pouvoir d'achat (les capacités financières) de leurs parents : smartphones, vêtements signés, argent de poche exagéré Que pensez-vous de l'attitude de ces jeunes ? Rédigez un texte dans lequel vous donnez votre point de vue en l'appuyant par des arguments et des exemples pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2024 · Béni Mellal-Khénifra$s$);
update public.sujets set consigne = $s$Sujet : Aujourd'hui, de plus en plus de jeunes ont des exigences (des demandes) qui dépassent le pouvoir d'achat (les capacités financières) de leurs parents : smartphones, vêtements signés, argent de poche exagéré Que pensez-vous de l'attitude de ces jeunes ? Rédigez un texte dans lequel vous donnez votre point de vue en l'appuyant par des arguments et des exemples pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2024 · Béni Mellal-Khénifra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2024 · Casablanca-Settat$s$, $s$Sujet : Dans Antigone de Jean Anouilh, personne n'a réussi à convaincre ou à persuader l'héroïne de renoncer à ses idées. Pensez-vous que nous devons nous accrocher aveuglément à nos idées et nos convictions, ou plutôt, faire des concessions? Rédigez un texte argumentatif dans lequel vous développez votre point de vue en vous basant sur des arguments et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2024 · Casablanca-Settat$s$);
update public.sujets set consigne = $s$Sujet : Dans Antigone de Jean Anouilh, personne n'a réussi à convaincre ou à persuader l'héroïne de renoncer à ses idées. Pensez-vous que nous devons nous accrocher aveuglément à nos idées et nos convictions, ou plutôt, faire des concessions? Rédigez un texte argumentatif dans lequel vous développez votre point de vue en vous basant sur des arguments et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2024 · Casablanca-Settat$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2024 · Dakhla-Oued Ed-Dahab$s$, $s$Sujet : Les rôles de la femme ne sont plus limités aux tâches ménagères et au foyer « La maison », ils sont influencés par les changements culturels, sociaux et économiques contemporains. Malgré ces avancées, la société civile continue de débattre sur la place de la femme, cherchant à renforcer son rôle et à promouvoir ses droits. Êtes-vous d'accord avec les défis que représentent ces changements pour notre pays ? Rédigez un texte argumentatif dans lequel vous défendez votre point de vue, tout en se basant sur des arguments et des exemples concrets.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2024 · Dakhla-Oued Ed-Dahab$s$);
update public.sujets set consigne = $s$Sujet : Les rôles de la femme ne sont plus limités aux tâches ménagères et au foyer « La maison », ils sont influencés par les changements culturels, sociaux et économiques contemporains. Malgré ces avancées, la société civile continue de débattre sur la place de la femme, cherchant à renforcer son rôle et à promouvoir ses droits. Êtes-vous d'accord avec les défis que représentent ces changements pour notre pays ? Rédigez un texte argumentatif dans lequel vous défendez votre point de vue, tout en se basant sur des arguments et des exemples concrets.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2024 · Dakhla-Oued Ed-Dahab$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2024 · Drâa-Tafilalet$s$, $s$Sujet : De nos jours, certaines personnes manquent d'indulgence envers les personnes âgées, c'est-à-dire qu'elles ne pardonnent pas facilement leurs erreurs. Qu'en pensez-vous ? Rédigez un texte argumentatif dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples pertinents. Important :$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2024 · Drâa-Tafilalet$s$);
update public.sujets set consigne = $s$Sujet : De nos jours, certaines personnes manquent d'indulgence envers les personnes âgées, c'est-à-dire qu'elles ne pardonnent pas facilement leurs erreurs. Qu'en pensez-vous ? Rédigez un texte argumentatif dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples pertinents. Important :$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2024 · Drâa-Tafilalet$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2024 · Fès-Meknès$s$, $s$Sujet : Aujourd'hui, certains lycéens et lycéennes se plaignent de plus en plus de l'École et s'y ennuient : programmes trop chargés, activités d'épanouissement et de créativité rares ou absentes, nombre souvent épuisant des contrôles, etc. Ils rêvent, au contraire, d'une école capable de répondre à leurs besoins, à leurs attentes et à leurs espoirs. Et vous, partagez-vous l'avis de ces élèves ? Rédigez un texte dans lequel vous justifiez votre point de vue en vous appuyant sur des arguments pertinents et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2024 · Fès-Meknès$s$);
update public.sujets set consigne = $s$Sujet : Aujourd'hui, certains lycéens et lycéennes se plaignent de plus en plus de l'École et s'y ennuient : programmes trop chargés, activités d'épanouissement et de créativité rares ou absentes, nombre souvent épuisant des contrôles, etc. Ils rêvent, au contraire, d'une école capable de répondre à leurs besoins, à leurs attentes et à leurs espoirs. Et vous, partagez-vous l'avis de ces élèves ? Rédigez un texte dans lequel vous justifiez votre point de vue en vous appuyant sur des arguments pertinents et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2024 · Fès-Meknès$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2024 · Guelmim-Oued Noun$s$, $s$Sujet : Certains pensent qu'il faut éviter toutes sortes de relations avec les voisins. Etes-vous d'accord ? Rédigez un texte argumentatif dans lequel vous exprimez votre point de vue en le justifiant par des arguments et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2024 · Guelmim-Oued Noun$s$);
update public.sujets set consigne = $s$Sujet : Certains pensent qu'il faut éviter toutes sortes de relations avec les voisins. Etes-vous d'accord ? Rédigez un texte argumentatif dans lequel vous exprimez votre point de vue en le justifiant par des arguments et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2024 · Guelmim-Oued Noun$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2024 · Laâyoune-Sakia El Hamra$s$, $s$Sujet : Pour réviser leurs leçons ou faire leurs devoirs scolaires à la maison, certains élèves préfèrent s'isoler et s'éloigner quelques heures de leurs proches. (parents, petits frères et sœurs…) Que pensez-vous de ce comportement ? Rédigez un texte argumentatif où vous exprimez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis. IMPORTANT$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2024 · Laâyoune-Sakia El Hamra$s$);
update public.sujets set consigne = $s$Sujet : Pour réviser leurs leçons ou faire leurs devoirs scolaires à la maison, certains élèves préfèrent s'isoler et s'éloigner quelques heures de leurs proches. (parents, petits frères et sœurs…) Que pensez-vous de ce comportement ? Rédigez un texte argumentatif où vous exprimez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis. IMPORTANT$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2024 · Laâyoune-Sakia El Hamra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2024 · Rabat-Salé-Kénitra$s$, $s$Sujet : Dans La Boîte A Merveilles [souligné sur la feuille, en gras ici], les parents de Zineb lui ont adopté un chat et Sidi Mohammed désire attraper un moineau pour en faire son compagnon. Ainsi, de nos jours, certaines familles ont tendance à autoriser un animal de compagnie à l'un de leurs membres. Approuvez-vous ce choix ? Développez votre réflexion en l'appuyant à l'aide d'arguments pertinents et d'exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2024 · Rabat-Salé-Kénitra$s$);
update public.sujets set consigne = $s$Sujet : Dans La Boîte A Merveilles [souligné sur la feuille, en gras ici], les parents de Zineb lui ont adopté un chat et Sidi Mohammed désire attraper un moineau pour en faire son compagnon. Ainsi, de nos jours, certaines familles ont tendance à autoriser un animal de compagnie à l'un de leurs membres. Approuvez-vous ce choix ? Développez votre réflexion en l'appuyant à l'aide d'arguments pertinents et d'exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2024 · Rabat-Salé-Kénitra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2024 · Souss-Massa$s$, $s$Sujet : Certains pensent que les vacances d'été sont une occasion pour que les élèves se reposent et s'amusent pleinement. Rédigez un texte argumentatif où vous développez ce point de vue en se demandant si les vacances estivales ne seraient pas aussi le seul moment convenable pour se préparer, avec plaisir, à l'année scolaire suivante (lectures, écritures, révisions…).$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2024 · Souss-Massa$s$);
update public.sujets set consigne = $s$Sujet : Certains pensent que les vacances d'été sont une occasion pour que les élèves se reposent et s'amusent pleinement. Rédigez un texte argumentatif où vous développez ce point de vue en se demandant si les vacances estivales ne seraient pas aussi le seul moment convenable pour se préparer, avec plaisir, à l'année scolaire suivante (lectures, écritures, révisions…).$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2024 · Souss-Massa$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2024 · Tanger-Tétouan-Al Hoceïma$s$, $s$Sujet : Pour plus de confiance, de productivité et de réussite, certains préfèrent le travail en groupe, tandis que d'autres optent pour le travail individuel. Et vous, que choisissez-vous ? Rédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2024 · Tanger-Tétouan-Al Hoceïma$s$);
update public.sujets set consigne = $s$Sujet : Pour plus de confiance, de productivité et de réussite, certains préfèrent le travail en groupe, tandis que d'autres optent pour le travail individuel. Et vous, que choisissez-vous ? Rédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2024 · Tanger-Tétouan-Al Hoceïma$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2023 · Béni Mellal-Khénifra$s$, $s$Sujet : Dans l'œuvre d'où est extrait ce texte, le narrateur affirme que la souffrance morale d'un condamné à mort (attente, angoisse, privations ..) est plus pénible, plus dure, que la souffrance physique. Partagez-vous cette idée ? Rédigez un texte dans lequel vous donnez votre point de vue en l'appuyant par des arguments et des exemples pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2023 · Béni Mellal-Khénifra$s$);
update public.sujets set consigne = $s$Sujet : Dans l'œuvre d'où est extrait ce texte, le narrateur affirme que la souffrance morale d'un condamné à mort (attente, angoisse, privations ..) est plus pénible, plus dure, que la souffrance physique. Partagez-vous cette idée ? Rédigez un texte dans lequel vous donnez votre point de vue en l'appuyant par des arguments et des exemples pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2023 · Béni Mellal-Khénifra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2023 · Casablanca-Settat$s$, $s$Sujet : Dans son œuvre Le Dernier Jour d'un Condamné, V. Hugo met en valeur l'écriture comme un moyen pour changer les mentalités sur la question de la peine de mort. Croyez-vous vraiment que l'écriture comme moyen d'expression (romans, journaux et revues, réseaux sociaux…) est capable de changer les personnes et les sociétés ? Dans une production écrite argumentée et avec des exemples à l'appui, développez votre réflexion en vous référant à votre expérience personnelle, à votre entourage et à vos lectures.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2023 · Casablanca-Settat$s$);
update public.sujets set consigne = $s$Sujet : Dans son œuvre Le Dernier Jour d'un Condamné, V. Hugo met en valeur l'écriture comme un moyen pour changer les mentalités sur la question de la peine de mort. Croyez-vous vraiment que l'écriture comme moyen d'expression (romans, journaux et revues, réseaux sociaux…) est capable de changer les personnes et les sociétés ? Dans une production écrite argumentée et avec des exemples à l'appui, développez votre réflexion en vous référant à votre expérience personnelle, à votre entourage et à vos lectures.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2023 · Casablanca-Settat$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2023 · Dakhla-Oued Ed-Dahab$s$, $s$Sujet : Certains élèves pensent que le travail collectif aide à avancer et à développer leurs connaissances. D'autres, au contraire, voient que ce genre de travail ne permet pas d'exceller dans leurs études et de mettre en valeur leur effort personnel. Rédigez un texte argumentatif dans lequel vous défendez votre point de vue , tout en vous basant sur des arguments et des exemples pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2023 · Dakhla-Oued Ed-Dahab$s$);
update public.sujets set consigne = $s$Sujet : Certains élèves pensent que le travail collectif aide à avancer et à développer leurs connaissances. D'autres, au contraire, voient que ce genre de travail ne permet pas d'exceller dans leurs études et de mettre en valeur leur effort personnel. Rédigez un texte argumentatif dans lequel vous défendez votre point de vue , tout en vous basant sur des arguments et des exemples pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2023 · Dakhla-Oued Ed-Dahab$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2023 · Drâa-Tafilalet$s$, $s$Sujet : Beaucoup de gens pensent que de nos jours, on ne peut échapper aux moments de stress et de tension psychologique, sans moyen (s) de les éviter, et considèrent cela comme une fatalité (ce qui doit nécessairement arriver) de notre temps. Partagez-vous ce point de vue ? Rédigez un texte argumentatif dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples pertinents. Important :$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2023 · Drâa-Tafilalet$s$);
update public.sujets set consigne = $s$Sujet : Beaucoup de gens pensent que de nos jours, on ne peut échapper aux moments de stress et de tension psychologique, sans moyen (s) de les éviter, et considèrent cela comme une fatalité (ce qui doit nécessairement arriver) de notre temps. Partagez-vous ce point de vue ? Rédigez un texte argumentatif dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples pertinents. Important :$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2023 · Drâa-Tafilalet$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2023 · Fès-Meknès$s$, $s$Sujet : Dans La Boîte à merveilles, Ahmed Sefrioui évoque plusieurs métiers artisanaux (tisserand, babouchier, fabricant de charrue, ..) ; aujourd'hui, d'autres métiers modernes ont vu le jour (médecin, informaticien, responsable de marketing, youtubeur, etc.) Et vous, quel métier préféreriez-vous exercer à l'avenir ? Rédigez un texte dans lequel vous développez votre point de vue à l'aide d'arguments pertinents et d'exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2023 · Fès-Meknès$s$);
update public.sujets set consigne = $s$Sujet : Dans La Boîte à merveilles, Ahmed Sefrioui évoque plusieurs métiers artisanaux (tisserand, babouchier, fabricant de charrue, ..) ; aujourd'hui, d'autres métiers modernes ont vu le jour (médecin, informaticien, responsable de marketing, youtubeur, etc.) Et vous, quel métier préféreriez-vous exercer à l'avenir ? Rédigez un texte dans lequel vous développez votre point de vue à l'aide d'arguments pertinents et d'exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2023 · Fès-Meknès$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2023 · Guelmim-Oued Noun$s$, $s$Sujet : Certains adolescents veulent quitter la maison familiale en pensant que c'est la bonne solution pour échapper aux problèmes. Rédigez un texte argumentatif où vous exprimez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2023 · Guelmim-Oued Noun$s$);
update public.sujets set consigne = $s$Sujet : Certains adolescents veulent quitter la maison familiale en pensant que c'est la bonne solution pour échapper aux problèmes. Rédigez un texte argumentatif où vous exprimez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2023 · Guelmim-Oued Noun$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2023 · Laâyoune-Sakia El Hamra$s$, $s$Sujet : Beaucoup de jeunes pensent que les adultes (parents, professeurs, proches…) ne les comprennent pas. Partagez-vous ce point de vue ? Développez votre réflexion en l'appuyant par des arguments pertinents et des exemples précis. IMPORTANT$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2023 · Laâyoune-Sakia El Hamra$s$);
update public.sujets set consigne = $s$Sujet : Beaucoup de jeunes pensent que les adultes (parents, professeurs, proches…) ne les comprennent pas. Partagez-vous ce point de vue ? Développez votre réflexion en l'appuyant par des arguments pertinents et des exemples précis. IMPORTANT$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2023 · Laâyoune-Sakia El Hamra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2023 · Souss-Massa$s$, $s$Choisissez et développez un seul sujet. Sujet1 : Beaucoup de personnes victimes d'agressions (ou de vol, viol, etc.) ne recourent pas à la police pour déposer leur plainte. - Que pensez-vous du comportement de ces victimes ? - Rédigez un texte argumentatif dans lequel vous défendez votre point de vue à l'aide d'arguments pertinents illustrés par des exemples précis. Sujet2 : Si vous êtes victime d'une injustice de la part de l'un de vos proches, à quelle personne allez-vous vous confier pour qu'elle vous soutienne ? - Dites à qui vous allez vous vous confier et précisez pourquoi en deux ou trois arguments développés et illustrés d'exemples pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2023 · Souss-Massa$s$);
update public.sujets set consigne = $s$Choisissez et développez un seul sujet. Sujet1 : Beaucoup de personnes victimes d'agressions (ou de vol, viol, etc.) ne recourent pas à la police pour déposer leur plainte. - Que pensez-vous du comportement de ces victimes ? - Rédigez un texte argumentatif dans lequel vous défendez votre point de vue à l'aide d'arguments pertinents illustrés par des exemples précis. Sujet2 : Si vous êtes victime d'une injustice de la part de l'un de vos proches, à quelle personne allez-vous vous confier pour qu'elle vous soutienne ? - Dites à qui vous allez vous vous confier et précisez pourquoi en deux ou trois arguments développés et illustrés d'exemples pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2023 · Souss-Massa$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2023 · Tanger-Tétouan-Al Hoceïma$s$, $s$Sujet Obsédées et aveuglées par la richesse, la célébrité et le pouvoir, certaines personnes renoncent facilement aux principes et aux valeurs auxquels ils ont toujours cru. Qu'en pensez-vous? Rédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2023 · Tanger-Tétouan-Al Hoceïma$s$);
update public.sujets set consigne = $s$Sujet Obsédées et aveuglées par la richesse, la célébrité et le pouvoir, certaines personnes renoncent facilement aux principes et aux valeurs auxquels ils ont toujours cru. Qu'en pensez-vous? Rédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2023 · Tanger-Tétouan-Al Hoceïma$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2022 · Béni Mellal-Khénifra$s$, $s$Sujet : De nos jours, de plus en plus de jeunes adoptent un chien de race. Ce phénomène semble faire des mécontents qui y voient une mode étrangère à notre société et qui ne manque pas d'inconvénients pour les jeunes eux-mêmes, pour la famille et pour la société. Partagez-vous le point de vue de ces jeunes? Exprimez votre point de vue dans une réflexion soutenue par des arguments et des exemples pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2022 · Béni Mellal-Khénifra$s$);
update public.sujets set consigne = $s$Sujet : De nos jours, de plus en plus de jeunes adoptent un chien de race. Ce phénomène semble faire des mécontents qui y voient une mode étrangère à notre société et qui ne manque pas d'inconvénients pour les jeunes eux-mêmes, pour la famille et pour la société. Partagez-vous le point de vue de ces jeunes? Exprimez votre point de vue dans une réflexion soutenue par des arguments et des exemples pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2022 · Béni Mellal-Khénifra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2022 · Casablanca-Settat$s$, $s$Sujet : Dans le texte, Hémon n'accepte pas la décision de son père Créon. Les relations parents/ enfants sont souvent difficiles : certains parents sont contre les convictions, les choix et les passions de leurs enfants (style de vie et d'habillement, décisions personnelles…). Qu'en pensez-vous ? Dans une production écrite argumentée et avec des exemples à l'appui, développez votre réflexion en vous référant à votre expérience personnelle, à votre entourage et à vos lectures.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2022 · Casablanca-Settat$s$);
update public.sujets set consigne = $s$Sujet : Dans le texte, Hémon n'accepte pas la décision de son père Créon. Les relations parents/ enfants sont souvent difficiles : certains parents sont contre les convictions, les choix et les passions de leurs enfants (style de vie et d'habillement, décisions personnelles…). Qu'en pensez-vous ? Dans une production écrite argumentée et avec des exemples à l'appui, développez votre réflexion en vous référant à votre expérience personnelle, à votre entourage et à vos lectures.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2022 · Casablanca-Settat$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2022 · Dakhla-Oued Ed-Dahab$s$, $s$Sujet : A l'encontre du garde qui accepte l'anneau en or de la part d'Antigone, certaines personnes pensent que le fait de rendre service à autrui est un devoir (loin de tout intérêt personnel). Approuvez-vous cette thèse ? Rédigez un texte argumentatif dans lequel vous exprimez votre opinion en la soutenant par des arguments convaincants, illustrés par des exemples tirés de vos lectures et de votre vécu personnel.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2022 · Dakhla-Oued Ed-Dahab$s$);
update public.sujets set consigne = $s$Sujet : A l'encontre du garde qui accepte l'anneau en or de la part d'Antigone, certaines personnes pensent que le fait de rendre service à autrui est un devoir (loin de tout intérêt personnel). Approuvez-vous cette thèse ? Rédigez un texte argumentatif dans lequel vous exprimez votre opinion en la soutenant par des arguments convaincants, illustrés par des exemples tirés de vos lectures et de votre vécu personnel.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2022 · Dakhla-Oued Ed-Dahab$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2022 · Drâa-Tafilalet$s$, $s$Sujet : Certaines personnes pensent qu'il est possible de vivre confortablement sans recourir aux nouvelles technologies. Qu'en pensez-vous ? Rédigez un texte dans lequel vous exprimez votre point de vue en le justifiant par des arguments pertinents et des exemples précis. Important :$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2022 · Drâa-Tafilalet$s$);
update public.sujets set consigne = $s$Sujet : Certaines personnes pensent qu'il est possible de vivre confortablement sans recourir aux nouvelles technologies. Qu'en pensez-vous ? Rédigez un texte dans lequel vous exprimez votre point de vue en le justifiant par des arguments pertinents et des exemples précis. Important :$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2022 · Drâa-Tafilalet$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2022 · Fès-Meknès$s$, $s$Sujet : Lors de leur célèbre face à face, Antigone défend une conception du bonheur tout à fait différente de celle que lui propose son oncle Créon. Et vous, à votre avis, qu'est-ce qui pourrait vous rendre heureux ou heureuse ? Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments pertinents et d'exemples appropriés.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2022 · Fès-Meknès$s$);
update public.sujets set consigne = $s$Sujet : Lors de leur célèbre face à face, Antigone défend une conception du bonheur tout à fait différente de celle que lui propose son oncle Créon. Et vous, à votre avis, qu'est-ce qui pourrait vous rendre heureux ou heureuse ? Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments pertinents et d'exemples appropriés.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2022 · Fès-Meknès$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2022 · Guelmim-Oued Noun$s$, $s$Sujet : Beaucoup de jeunes ne cessent de poster et de publier leurs photos, vidéos et données personnelles sur les réseaux sociaux. Cela peut créer d'énormes problèmes. Partagez-vous cette affirmation ? Développez votre réflexion en l'appuyant par des arguments pertinents et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2022 · Guelmim-Oued Noun$s$);
update public.sujets set consigne = $s$Sujet : Beaucoup de jeunes ne cessent de poster et de publier leurs photos, vidéos et données personnelles sur les réseaux sociaux. Cela peut créer d'énormes problèmes. Partagez-vous cette affirmation ? Développez votre réflexion en l'appuyant par des arguments pertinents et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2022 · Guelmim-Oued Noun$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2022 · Rabat-Salé-Kénitra$s$, $s$Certains jeunes, écrivent, dessinent, font des graffitis… sur les murs des lycées, les portes des toilettes, ou encore sur les tables des classes… Approuvez- vous cette forme d'expression ? Développez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2022 · Rabat-Salé-Kénitra$s$);
update public.sujets set consigne = $s$Certains jeunes, écrivent, dessinent, font des graffitis… sur les murs des lycées, les portes des toilettes, ou encore sur les tables des classes… Approuvez- vous cette forme d'expression ? Développez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2022 · Rabat-Salé-Kénitra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2022 · Tanger-Tétouan-Al Hoceïma$s$, $s$Sujet Pour se faire respecter et pour imposer leur autorité à leurs enfants, certains parents recourent à l'insulte et à l'humiliation. Qu'en pensez-vous ? Rédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2022 · Tanger-Tétouan-Al Hoceïma$s$);
update public.sujets set consigne = $s$Sujet Pour se faire respecter et pour imposer leur autorité à leurs enfants, certains parents recourent à l'insulte et à l'humiliation. Qu'en pensez-vous ? Rédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2022 · Tanger-Tétouan-Al Hoceïma$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2021 · Béni Mellal-Khénifra$s$, $s$Sujet : A l'occasion de l'Achoura, les avis sont partagés concernant quelques pratiques et rituels de certains jeunes qui n'hésitent pas à s'attaquer aux passants pour les asperger d'eau (les mouiller) ou à allumer de grands feux sur les espaces publics. Que pensez-vous de ces comportements? Rédigez un texte argumentatif dans lequel vous exprimez votre point de vue justifié à l'aide d'arguments et d'exemples pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2021 · Béni Mellal-Khénifra$s$);
update public.sujets set consigne = $s$Sujet : A l'occasion de l'Achoura, les avis sont partagés concernant quelques pratiques et rituels de certains jeunes qui n'hésitent pas à s'attaquer aux passants pour les asperger d'eau (les mouiller) ou à allumer de grands feux sur les espaces publics. Que pensez-vous de ces comportements? Rédigez un texte argumentatif dans lequel vous exprimez votre point de vue justifié à l'aide d'arguments et d'exemples pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2021 · Béni Mellal-Khénifra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2021 · Casablanca-Settat$s$, $s$Sujet : A l'époque de Ahmed Sefrioui, les barbiers comme d'autres artisans accomplissaient des activités relevant plutôt de la médecine comme celle de circoncire les enfants, arracher les dents, pratiquer des saignées sur la nuque des adultes et bien d'autres pratiques. Ces activités, pratiquées par des gens non spécialistes en médecine, pouvaient avoir des conséquences parfois regrettables. Pensez-vous que, même de nos jours, on doit encore accorder notre confiance à ces artisans ? Dans une production écrite argumentée et avec des exemples à l'appui, développez votre réflexion en vous référant à votre expérience personnelle, votre entourage et vos lectures.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2021 · Casablanca-Settat$s$);
update public.sujets set consigne = $s$Sujet : A l'époque de Ahmed Sefrioui, les barbiers comme d'autres artisans accomplissaient des activités relevant plutôt de la médecine comme celle de circoncire les enfants, arracher les dents, pratiquer des saignées sur la nuque des adultes et bien d'autres pratiques. Ces activités, pratiquées par des gens non spécialistes en médecine, pouvaient avoir des conséquences parfois regrettables. Pensez-vous que, même de nos jours, on doit encore accorder notre confiance à ces artisans ? Dans une production écrite argumentée et avec des exemples à l'appui, développez votre réflexion en vous référant à votre expérience personnelle, votre entourage et vos lectures.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2021 · Casablanca-Settat$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2021 · Dakhla-Oued Ed-Dahab$s$, $s$SUJET : Pour subvenir aux besoins de la famille, certains parents encouragent leurs enfants à travailler au lieu d'aller à l'école. Ainsi, un grand nombre d'enfants travaillent de par le monde, malgré l'interdiction du travail des mineurs par la loi. Etes-vous d'avis que le travail des enfants leur est profitable et rentable à leurs familles et à la société ? Rédigez un texte présentant dans lequel vous développerez votre point de vue à l'aide d'arguments cohérents appuyés d'exemples.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2021 · Dakhla-Oued Ed-Dahab$s$);
update public.sujets set consigne = $s$SUJET : Pour subvenir aux besoins de la famille, certains parents encouragent leurs enfants à travailler au lieu d'aller à l'école. Ainsi, un grand nombre d'enfants travaillent de par le monde, malgré l'interdiction du travail des mineurs par la loi. Etes-vous d'avis que le travail des enfants leur est profitable et rentable à leurs familles et à la société ? Rédigez un texte présentant dans lequel vous développerez votre point de vue à l'aide d'arguments cohérents appuyés d'exemples.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2021 · Dakhla-Oued Ed-Dahab$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2021 · Drâa-Tafilalet$s$, $s$Considérée par Zoubida comme étant de « basse extraction », Rahma est victime de discrimination et d'harcèlement en raison de sa condition sociale. La discrimination, raciale ou sociale, est-elle justifiable ? Organiser votre réflexion en vous appuyant sur des arguments et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2021 · Drâa-Tafilalet$s$);
update public.sujets set consigne = $s$Considérée par Zoubida comme étant de « basse extraction », Rahma est victime de discrimination et d'harcèlement en raison de sa condition sociale. La discrimination, raciale ou sociale, est-elle justifiable ? Organiser votre réflexion en vous appuyant sur des arguments et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2021 · Drâa-Tafilalet$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2021 · Fès-Meknès$s$, $s$Sujet : L'achat en ligne (sur Internet) est une activité qui se développe de plus en plus dans notre pays à travers des sites comme Avito, JUMIA, Amazon, etc. Pour acheter quelque chose, préfères-tu le faire en ligne ou plutôt aller le faire sur place ? Rédige un texte dans lequel tu justifies ton choix à l'aide d'arguments variés et d'exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2021 · Fès-Meknès$s$);
update public.sujets set consigne = $s$Sujet : L'achat en ligne (sur Internet) est une activité qui se développe de plus en plus dans notre pays à travers des sites comme Avito, JUMIA, Amazon, etc. Pour acheter quelque chose, préfères-tu le faire en ligne ou plutôt aller le faire sur place ? Rédige un texte dans lequel tu justifies ton choix à l'aide d'arguments variés et d'exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2021 · Fès-Meknès$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2021 · Guelmim-Oued Noun$s$, $s$Sujet : « Le confinement général de l'année dernière a contribué à renforcer les relations du bon voisinage dans notre pays. » Partagez- vous ce point de vue ? Consigne : Rédigez un texte argumentatif où vous exposez votre point de vue illustré par des arguments des exemples pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2021 · Guelmim-Oued Noun$s$);
update public.sujets set consigne = $s$Sujet : « Le confinement général de l'année dernière a contribué à renforcer les relations du bon voisinage dans notre pays. » Partagez- vous ce point de vue ? Consigne : Rédigez un texte argumentatif où vous exposez votre point de vue illustré par des arguments des exemples pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2021 · Guelmim-Oued Noun$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2021 · L'Oriental$s$, $s$Sujet : « Dans nos quartiers, certains voisins recourent parfois à la violence pour régler leurs problèmes. » — Comment jugez-vous ce comportement ? — Rédigez un texte dans lequel vous justifierez votre point de vue à l'aide d'arguments et d'exemples.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2021 · L'Oriental$s$);
update public.sujets set consigne = $s$Sujet : « Dans nos quartiers, certains voisins recourent parfois à la violence pour régler leurs problèmes. » — Comment jugez-vous ce comportement ? — Rédigez un texte dans lequel vous justifierez votre point de vue à l'aide d'arguments et d'exemples.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2021 · L'Oriental$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2021 · Laâyoune-Sakia El Hamra$s$, $s$Sujet : « Certaines personnes interviennent pour mettre fin à une dispute, d'autres préfèrent rester à l'écart comme des spectateurs.» Qu'en pensez-vous ? Rédigez un texte argumentatif dans lequel vous développerez votre point de vue étayé par des arguments et des exemples pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2021 · Laâyoune-Sakia El Hamra$s$);
update public.sujets set consigne = $s$Sujet : « Certaines personnes interviennent pour mettre fin à une dispute, d'autres préfèrent rester à l'écart comme des spectateurs.» Qu'en pensez-vous ? Rédigez un texte argumentatif dans lequel vous développerez votre point de vue étayé par des arguments et des exemples pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2021 · Laâyoune-Sakia El Hamra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2021 · Rabat-Salé-Kénitra$s$, $s$Dans la Boite à merveilles, les femmes sont, comme ce fut le cas autrefois, ignorantes, soumises et superstitieuses. Pensez-vous personnellement qu'il en est toujours de même (que c'est toujours le cas) dans la société marocaine d'aujourd'hui ? Développez votre point de vue en vous appuyant sur des arguments et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2021 · Rabat-Salé-Kénitra$s$);
update public.sujets set consigne = $s$Dans la Boite à merveilles, les femmes sont, comme ce fut le cas autrefois, ignorantes, soumises et superstitieuses. Pensez-vous personnellement qu'il en est toujours de même (que c'est toujours le cas) dans la société marocaine d'aujourd'hui ? Développez votre point de vue en vous appuyant sur des arguments et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2021 · Rabat-Salé-Kénitra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2021 · Souss-Massa$s$, $s$Sujet : Certains pensent que les enfants d'aujourd'hui sont tellement gâtés⁽¹⁾ qu'ils deviennent insupportables. Qu'en pensez-vous ? Rédigez un texte argumentatif dans lequel vous présenterez votre point de vue appuyé par des arguments et des exemples précis. ¹ enfant gâté : enfant habitué à voir satisfaire ses moindres désirs.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2021 · Souss-Massa$s$);
update public.sujets set consigne = $s$Sujet : Certains pensent que les enfants d'aujourd'hui sont tellement gâtés⁽¹⁾ qu'ils deviennent insupportables. Qu'en pensez-vous ? Rédigez un texte argumentatif dans lequel vous présenterez votre point de vue appuyé par des arguments et des exemples précis. ¹ enfant gâté : enfant habitué à voir satisfaire ses moindres désirs.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2021 · Souss-Massa$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Béni Mellal-Khénifra · Épreuve 1$s$, $s$Sujet : Sur un forum Internet dont le thème est : «Goûts vestimentaires », un jeune a posté le message suivant : « Je suis très passionné par les jeans avec des trous au niveau des cuisses et des genoux. » Partagez-vous ce choix ? Rédigez un texte argumentatif dans lequel vous dites votre point de vue justifié à l'aide d'arguments et d'exemples pertinents.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Béni Mellal-Khénifra · Épreuve 1$s$);
update public.sujets set consigne = $s$Sujet : Sur un forum Internet dont le thème est : «Goûts vestimentaires », un jeune a posté le message suivant : « Je suis très passionné par les jeans avec des trous au niveau des cuisses et des genoux. » Partagez-vous ce choix ? Rédigez un texte argumentatif dans lequel vous dites votre point de vue justifié à l'aide d'arguments et d'exemples pertinents.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Béni Mellal-Khénifra · Épreuve 1$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Béni Mellal-Khénifra · Épreuve 2$s$, $s$Sujet : Un avocat célèbre a déclaré à la presse : « Au lieu de la mise à mort d'un criminel, il vaut mieux le condamner à la prison à vie. » Qu'en pensez-vous ? Rédigez un écrit argumentatif dans lequel vous exprimez votre opinion appuyée par des arguments et des exemples appropriés.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Béni Mellal-Khénifra · Épreuve 2$s$);
update public.sujets set consigne = $s$Sujet : Un avocat célèbre a déclaré à la presse : « Au lieu de la mise à mort d'un criminel, il vaut mieux le condamner à la prison à vie. » Qu'en pensez-vous ? Rédigez un écrit argumentatif dans lequel vous exprimez votre opinion appuyée par des arguments et des exemples appropriés.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Béni Mellal-Khénifra · Épreuve 2$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Béni Mellal-Khénifra · Épreuve 3$s$, $s$Sujet : Sur un forum Internet, un membre d'une association a publié le message suivant : « Actuellement, venir en aide aux personnes se trouvant dans des situations délicates (difficiles) est devenu une qualité très rare. » Rédigez un texte argumentatif dans lequel vous donnez votre point de vue justifié par des arguments et des exemples précis.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Béni Mellal-Khénifra · Épreuve 3$s$);
update public.sujets set consigne = $s$Sujet : Sur un forum Internet, un membre d'une association a publié le message suivant : « Actuellement, venir en aide aux personnes se trouvant dans des situations délicates (difficiles) est devenu une qualité très rare. » Rédigez un texte argumentatif dans lequel vous donnez votre point de vue justifié par des arguments et des exemples précis.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Béni Mellal-Khénifra · Épreuve 3$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Casablanca-Settat · 1ère épreuve de français$s$, $s$Sujet : Maâlem Abdeslam dit :« Il est déjà si difficile de s'entendre avec une seule femme. » D'après ce que vous constatez dans la société marocaine, pourquoi est-il difficile, de nos jours, de se marier avec plusieurs femmes à la fois (polygamie) ? Rédigez un texte argumentatif où vous développez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Casablanca-Settat · 1ère épreuve de français$s$);
update public.sujets set consigne = $s$Sujet : Maâlem Abdeslam dit :« Il est déjà si difficile de s'entendre avec une seule femme. » D'après ce que vous constatez dans la société marocaine, pourquoi est-il difficile, de nos jours, de se marier avec plusieurs femmes à la fois (polygamie) ? Rédigez un texte argumentatif où vous développez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Casablanca-Settat · 1ère épreuve de français$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Casablanca-Settat · 2ème épreuve de français$s$, $s$Sujet : Pour une bonne éducation, certains parents pensent qu'il faut pardonner aux enfants leurs fautes et erreurs. D'autres, au contraire, estiment que ces enfants doivent être punis. A qui donneriez-vous raison ? Rédigez un texte argumentatif où vous développerez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Casablanca-Settat · 2ème épreuve de français$s$);
update public.sujets set consigne = $s$Sujet : Pour une bonne éducation, certains parents pensent qu'il faut pardonner aux enfants leurs fautes et erreurs. D'autres, au contraire, estiment que ces enfants doivent être punis. A qui donneriez-vous raison ? Rédigez un texte argumentatif où vous développerez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Casablanca-Settat · 2ème épreuve de français$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Casablanca-Settat · 3ème épreuve de français$s$, $s$Sujet : La société continue de rejeter et de marginaliser les délinquants et les criminels même après leurs sorties de la prison. Que pensez-vous de cette attitude ? Rédigez un texte argumentatif où vous développerez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Casablanca-Settat · 3ème épreuve de français$s$);
update public.sujets set consigne = $s$Sujet : La société continue de rejeter et de marginaliser les délinquants et les criminels même après leurs sorties de la prison. Que pensez-vous de cette attitude ? Rédigez un texte argumentatif où vous développerez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Casablanca-Settat · 3ème épreuve de français$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Dakhla-Oued Ed-Dahab · EPREUVE 1$s$, $s$SUJET : On croit que même si un homme est vieux, il suffit qu'il soit riche pour qu'une jeune femme l'accepte comme mari. Alors que certains pensent que ce mariage est normal et nécessaire, d'autres affirment que cela ressemble à de l'esclavage et peut avoir des conséquences négatives. Laquelle de ces deux positions partagez-vous ? Développez votre point de vue sous forme d'un texte argumentatif.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Dakhla-Oued Ed-Dahab · EPREUVE 1$s$);
update public.sujets set consigne = $s$SUJET : On croit que même si un homme est vieux, il suffit qu'il soit riche pour qu'une jeune femme l'accepte comme mari. Alors que certains pensent que ce mariage est normal et nécessaire, d'autres affirment que cela ressemble à de l'esclavage et peut avoir des conséquences négatives. Laquelle de ces deux positions partagez-vous ? Développez votre point de vue sous forme d'un texte argumentatif.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Dakhla-Oued Ed-Dahab · EPREUVE 1$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Dakhla-Oued Ed-Dahab · EPREUVE 2$s$, $s$SUJET : Les prisonniers sont privés de la liberté de circuler, enfermés loin de leurs familles et isolés du monde extérieur. A cause de la pandémie du Covid 19 et pendant le confinement, nous étions tous « emprisonnés », chez nous ; mais il y avait et il y a toujours des personnes qui sortent de chez elles sans raison, sans les autorisations prévues par la loi. Pensez-vous qu'il est préférable de supporter l'isolement pour se protéger de la maladie ou au contraire, sortir et prendre tous les risques qui s'en suivent ? Développez votre point de vue sous forme d'un texte cohérent.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Dakhla-Oued Ed-Dahab · EPREUVE 2$s$);
update public.sujets set consigne = $s$SUJET : Les prisonniers sont privés de la liberté de circuler, enfermés loin de leurs familles et isolés du monde extérieur. A cause de la pandémie du Covid 19 et pendant le confinement, nous étions tous « emprisonnés », chez nous ; mais il y avait et il y a toujours des personnes qui sortent de chez elles sans raison, sans les autorisations prévues par la loi. Pensez-vous qu'il est préférable de supporter l'isolement pour se protéger de la maladie ou au contraire, sortir et prendre tous les risques qui s'en suivent ? Développez votre point de vue sous forme d'un texte cohérent.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Dakhla-Oued Ed-Dahab · EPREUVE 2$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Dakhla-Oued Ed-Dahab · EPREUVE 3$s$, $s$SUJET : Certains pensent que les jeunes d'aujourd'hui sont mal éduqués et manquent de respect à l'égard de leurs parents et envers les adultes en général. D'autres soutiennent que ce sont, au contraire, ces derniers qui manquent d'ouverture d'esprit, se montrant sévères et autoritaires. Lequel de ces deux points de vue vous semble juste et plus proche de la réalité ? Rédigez un texte argumentatif dans lequel vous développerez clairement votre opinion.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Dakhla-Oued Ed-Dahab · EPREUVE 3$s$);
update public.sujets set consigne = $s$SUJET : Certains pensent que les jeunes d'aujourd'hui sont mal éduqués et manquent de respect à l'égard de leurs parents et envers les adultes en général. D'autres soutiennent que ce sont, au contraire, ces derniers qui manquent d'ouverture d'esprit, se montrant sévères et autoritaires. Lequel de ces deux points de vue vous semble juste et plus proche de la réalité ? Rédigez un texte argumentatif dans lequel vous développerez clairement votre opinion.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Dakhla-Oued Ed-Dahab · EPREUVE 3$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Drâa-Tafilalet · Sujet n° 01$s$, $s$__Sujet__ : Les parents ont-ils raison d'imposer à leurs enfants ce qu'ils n'aiment ou ne comprennent pas ? Pourquoi ? Exposez votre point de vue dans un développement argumenté.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Drâa-Tafilalet · Sujet n° 01$s$);
update public.sujets set consigne = $s$__Sujet__ : Les parents ont-ils raison d'imposer à leurs enfants ce qu'ils n'aiment ou ne comprennent pas ? Pourquoi ? Exposez votre point de vue dans un développement argumenté.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Drâa-Tafilalet · Sujet n° 01$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Drâa-Tafilalet · Sujet n° 02$s$, $s$__Sujet :__ Le friauche vendra la redingote, un beau vêtement, pour acheter du tabac. Que pensez-vous de certaines addictions, des dépendances à la consommation de certaines matières nocives (tabac, drogue, alcool, etc.), qui poussent certaines personnes à vendre des objets qui leur sont chers ? Rédigez un texte argumentatif dans lequel vous exprimerez votre point de vue en le justifiant par des arguments pertinents et des exemples précis. __Important__ :$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Drâa-Tafilalet · Sujet n° 02$s$);
update public.sujets set consigne = $s$__Sujet :__ Le friauche vendra la redingote, un beau vêtement, pour acheter du tabac. Que pensez-vous de certaines addictions, des dépendances à la consommation de certaines matières nocives (tabac, drogue, alcool, etc.), qui poussent certaines personnes à vendre des objets qui leur sont chers ? Rédigez un texte argumentatif dans lequel vous exprimerez votre point de vue en le justifiant par des arguments pertinents et des exemples précis. __Important__ :$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Drâa-Tafilalet · Sujet n° 02$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Drâa-Tafilalet · Sujet n° 03$s$, $s$__Sujet__ : « Les femmes sont dans leur droit de se faire belles. », dit-on. Dans quelle mesure partagez-vous cette affirmation ? Développez votre point de vue dans un texte argumentatif dûment construit.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Drâa-Tafilalet · Sujet n° 03$s$);
update public.sujets set consigne = $s$__Sujet__ : « Les femmes sont dans leur droit de se faire belles. », dit-on. Dans quelle mesure partagez-vous cette affirmation ? Développez votre point de vue dans un texte argumentatif dûment construit.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Drâa-Tafilalet · Sujet n° 03$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · L'Oriental · Epreuve -1-$s$, $s$Sujet : Maâlem Abdeslem a quitté la campagne et s'est installé en ville. De votre côté, aimeriez-vous vivre en ville ou plutôt à la campagne ? – Rédigez un texte dans lequel vous justifierez votre choix à l'aide d'arguments et d'exemples.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · L'Oriental · Epreuve -1-$s$);
update public.sujets set consigne = $s$Sujet : Maâlem Abdeslem a quitté la campagne et s'est installé en ville. De votre côté, aimeriez-vous vivre en ville ou plutôt à la campagne ? – Rédigez un texte dans lequel vous justifierez votre choix à l'aide d'arguments et d'exemples.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · L'Oriental · Epreuve -1-$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · L'Oriental · Epreuve -2-$s$, $s$Sujet : Certains pensent que la peine de mort est le moyen le plus efficace pour mettre fin au crime. – Partagez-vous cette idée ? – Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · L'Oriental · Epreuve -2-$s$);
update public.sujets set consigne = $s$Sujet : Certains pensent que la peine de mort est le moyen le plus efficace pour mettre fin au crime. – Partagez-vous cette idée ? – Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · L'Oriental · Epreuve -2-$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · L'Oriental · Epreuve -3-$s$, $s$Sujet : La reine Eurydice s'est coupé la gorge en apprenant la mort de son fils Hémon. – Croyez-vous que le suicide soit la bonne solution aux problèmes de la vie ? – Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · L'Oriental · Epreuve -3-$s$);
update public.sujets set consigne = $s$Sujet : La reine Eurydice s'est coupé la gorge en apprenant la mort de son fils Hémon. – Croyez-vous que le suicide soit la bonne solution aux problèmes de la vie ? – Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · L'Oriental · Epreuve -3-$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Laâyoune-Sakia El Hamra$s$, $s$Sujet : Malgré le progrès que connait le domaine de la médecine aujourd'hui, certaines personnes préfèrent utiliser les plantes médicinales pour se soigner ou se protéger contre les maladies. Pensez-vous qu'ils ont raison ? Exposez votre point de vue dans un texte argumentatif en l'appuyant par des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Laâyoune-Sakia El Hamra$s$);
update public.sujets set consigne = $s$Sujet : Malgré le progrès que connait le domaine de la médecine aujourd'hui, certaines personnes préfèrent utiliser les plantes médicinales pour se soigner ou se protéger contre les maladies. Pensez-vous qu'ils ont raison ? Exposez votre point de vue dans un texte argumentatif en l'appuyant par des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2020 · Laâyoune-Sakia El Hamra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Guelmim-Oued Noun · rattrapage · Épreuve n° 1$s$, $s$Sujet : Certain(e)s ami (e)s sont plus important (e)s dans notre vie et peuvent remplacer nos frères et nos sœurs. Êtes-vous d'accord avec cette affirmation ? Rédigez un texte où vous exprimez votre point de vue en justifiant par des arguments et des exemples pertinents.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Guelmim-Oued Noun · rattrapage · Épreuve n° 1$s$);
update public.sujets set consigne = $s$Sujet : Certain(e)s ami (e)s sont plus important (e)s dans notre vie et peuvent remplacer nos frères et nos sœurs. Êtes-vous d'accord avec cette affirmation ? Rédigez un texte où vous exprimez votre point de vue en justifiant par des arguments et des exemples pertinents.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Guelmim-Oued Noun · rattrapage · Épreuve n° 1$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Guelmim-Oued Noun · rattrapage · Épreuve n° 2$s$, $s$Sujet : La prison fait perdre à certains prisonniers la foi (ou la croyance) en Dieu. Partagez-vous cette affirmation ? Dans un texte argumentatif cohérent, exprimez votre point de vue en utilisant des arguments pertinents.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Guelmim-Oued Noun · rattrapage · Épreuve n° 2$s$);
update public.sujets set consigne = $s$Sujet : La prison fait perdre à certains prisonniers la foi (ou la croyance) en Dieu. Partagez-vous cette affirmation ? Dans un texte argumentatif cohérent, exprimez votre point de vue en utilisant des arguments pertinents.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Guelmim-Oued Noun · rattrapage · Épreuve n° 2$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2020 · Guelmim-Oued Noun · rattrapage · Épreuve n° 3$s$, $s$Sujet : Quand les parents utilisent la force contre leurs enfants, c'est juste parce qu'ils aiment ces derniers et leur veulent du bien. Partagez-vous cet avis ? Rédigez un texte où vous exprimez votre point de vue en justifiant par des arguments et des exemples pertinents.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2020 · Guelmim-Oued Noun · rattrapage · Épreuve n° 3$s$);
update public.sujets set consigne = $s$Sujet : Quand les parents utilisent la force contre leurs enfants, c'est juste parce qu'ils aiment ces derniers et leur veulent du bien. Partagez-vous cet avis ? Rédigez un texte où vous exprimez votre point de vue en justifiant par des arguments et des exemples pertinents.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2020 · Guelmim-Oued Noun · rattrapage · Épreuve n° 3$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2019 · Casablanca-Settat$s$, $s$Sujet : De nos jours, certains jeunes se montrent méchants, agressifs, voire insultants vis-à-vis de leurs parents et des personnes âgées. Trouvez-vous ce comportement normal ? Rédigez un texte argumentatif où vous développez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2019 · Casablanca-Settat$s$);
update public.sujets set consigne = $s$Sujet : De nos jours, certains jeunes se montrent méchants, agressifs, voire insultants vis-à-vis de leurs parents et des personnes âgées. Trouvez-vous ce comportement normal ? Rédigez un texte argumentatif où vous développez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2019 · Casablanca-Settat$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2019 · Dakhla-Oued Ed-Dahab$s$, $s$Sujet : A la mort d'un proche, certaines familles organisent des cérémonies funèbres dans une ambiance qui rappelle celle d'une fête. Ainsi, elles dépensent beaucoup d'argent juste pour les apparences. Or, cette manière de faire est rejetée par d'autres. A votre avis, devrait-on accorder de l'importance aux apparences dans une pareille occasion? Rédigez un texte argumentatif dans lequel vous développerez votre point de vue.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2019 · Dakhla-Oued Ed-Dahab$s$);
update public.sujets set consigne = $s$Sujet : A la mort d'un proche, certaines familles organisent des cérémonies funèbres dans une ambiance qui rappelle celle d'une fête. Ainsi, elles dépensent beaucoup d'argent juste pour les apparences. Or, cette manière de faire est rejetée par d'autres. A votre avis, devrait-on accorder de l'importance aux apparences dans une pareille occasion? Rédigez un texte argumentatif dans lequel vous développerez votre point de vue.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2019 · Dakhla-Oued Ed-Dahab$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2019 · Drâa-Tafilalet$s$, $s$Sujet : Dans notre société, on constate que plusieurs parents n'écoutent pas suffisamment leurs enfants et n'accordent pas d'importance à ce qu'ils disent ou expriment. Approuvez-vous ce comportement ? Répondez à cette question en appuyant votre réflexion par des arguments et des exemples pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2019 · Drâa-Tafilalet$s$);
update public.sujets set consigne = $s$Sujet : Dans notre société, on constate que plusieurs parents n'écoutent pas suffisamment leurs enfants et n'accordent pas d'importance à ce qu'ils disent ou expriment. Approuvez-vous ce comportement ? Répondez à cette question en appuyant votre réflexion par des arguments et des exemples pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2019 · Drâa-Tafilalet$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2019 · Fès-Meknès$s$, $s$Sujet : Dernièrement, un jeune tangérois a attaqué sans succès une banque dans le but d'acheter les médicaments et payer les frais d'opération chirurgicale à son père atteint d'un cancer. Selon vous, faudrait-il que la banque retire sa plainte ou que le jeune mis en cause soit sévèrement condamné? Rédigez un texte argumentatif dans lequel vous exprimez votre point de vue appuyé par des arguments variés et pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2019 · Fès-Meknès$s$);
update public.sujets set consigne = $s$Sujet : Dernièrement, un jeune tangérois a attaqué sans succès une banque dans le but d'acheter les médicaments et payer les frais d'opération chirurgicale à son père atteint d'un cancer. Selon vous, faudrait-il que la banque retire sa plainte ou que le jeune mis en cause soit sévèrement condamné? Rédigez un texte argumentatif dans lequel vous exprimez votre point de vue appuyé par des arguments variés et pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2019 · Fès-Meknès$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2019 · Guelmim-Oued Noun$s$, $s$Sujet : « Derrière chaque élève qui travaille bien, il y a toujours une famille qui le soutient, l'aide et l'encourage ». - Partagez-vous cette idée ? - Rédigez un texte argumentatif dans lequel vous défendez votre point de vue à l'aide d'arguments pertinents illustrés par des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2019 · Guelmim-Oued Noun$s$);
update public.sujets set consigne = $s$Sujet : « Derrière chaque élève qui travaille bien, il y a toujours une famille qui le soutient, l'aide et l'encourage ». - Partagez-vous cette idée ? - Rédigez un texte argumentatif dans lequel vous défendez votre point de vue à l'aide d'arguments pertinents illustrés par des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2019 · Guelmim-Oued Noun$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2019 · L'Oriental$s$, $s$Sujet : Beaucoup de personnes croient que la peine de mort est un moyen efficace pour lutter contre le crime. Partagez-vous cette opinion ? Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2019 · L'Oriental$s$);
update public.sujets set consigne = $s$Sujet : Beaucoup de personnes croient que la peine de mort est un moyen efficace pour lutter contre le crime. Partagez-vous cette opinion ? Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2019 · L'Oriental$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2019 · Laâyoune-Sakia El Hamra$s$, $s$SUJET : Pour guérir Sidi Mohammed, son père proposa à sa femme de lui préparer un traitement traditionnel (soupe à la menthe sauvage). Appréciez-vous ce genre de pratiques traditionnelles ? Justifiez votre point de vue à l'aide d'arguments pertinents.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2019 · Laâyoune-Sakia El Hamra$s$);
update public.sujets set consigne = $s$SUJET : Pour guérir Sidi Mohammed, son père proposa à sa femme de lui préparer un traitement traditionnel (soupe à la menthe sauvage). Appréciez-vous ce genre de pratiques traditionnelles ? Justifiez votre point de vue à l'aide d'arguments pertinents.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2019 · Laâyoune-Sakia El Hamra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2019 · Rabat-Salé-Kénitra$s$, $s$Sujet : Dans l'œuvre d'Ahmed Sefrioui, le père occupe une place centrale au sein de la famille. Actuellement, en l'absence du père, une mère est capable de gérer son foyer. Partagez-vous cet avis ? Développez votre réflexion en l'appuyant au moyen d'arguments pertinents et d'exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2019 · Rabat-Salé-Kénitra$s$);
update public.sujets set consigne = $s$Sujet : Dans l'œuvre d'Ahmed Sefrioui, le père occupe une place centrale au sein de la famille. Actuellement, en l'absence du père, une mère est capable de gérer son foyer. Partagez-vous cet avis ? Développez votre réflexion en l'appuyant au moyen d'arguments pertinents et d'exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2019 · Rabat-Salé-Kénitra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2019 · Dakhla-Oued Ed-Dahab · rattrapage$s$, $s$Sujet : Hémon sacrifie sa vie par amour pour Antigone. Pensez –vous qu'il est raisonnable de faire des sacrifices pour ce qu'on aime; que ce soit une chose, une personne ou une cause (un idéal) ? Développez votre point de vue dans un texte cohérent nourri d'arguments pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2019 · Dakhla-Oued Ed-Dahab · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Hémon sacrifie sa vie par amour pour Antigone. Pensez –vous qu'il est raisonnable de faire des sacrifices pour ce qu'on aime; que ce soit une chose, une personne ou une cause (un idéal) ? Développez votre point de vue dans un texte cohérent nourri d'arguments pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2019 · Dakhla-Oued Ed-Dahab · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2018 · Béni Mellal-Khénifra$s$, $s$Sujet : Sur un forum internet intitulé « Relations avec les parents », un jeune adolescent a écrit : « Je ne me sens pas vivre en famille : mon père joue toujours avec son portable et ma mère regarde ses vidéos préférées. » Réagissez à cette affirmation en rédigeant un texte argumentatif dans lequel vous exprimez votre opinion.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2018 · Béni Mellal-Khénifra$s$);
update public.sujets set consigne = $s$Sujet : Sur un forum internet intitulé « Relations avec les parents », un jeune adolescent a écrit : « Je ne me sens pas vivre en famille : mon père joue toujours avec son portable et ma mère regarde ses vidéos préférées. » Réagissez à cette affirmation en rédigeant un texte argumentatif dans lequel vous exprimez votre opinion.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2018 · Béni Mellal-Khénifra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2018 · Dakhla-Oued Ed-Dahab$s$, $s$Sujet : Certains jeunes suivent actuellement la mode et accorde beaucoup d'importance aux apparences contrairement à d'autres qui préfèrent la simplicité et s'attachent aux traditions. Que préférez-vous ? S'habiller à la mode ou porter les habits traditionnels ? Justifiez votre point de vue par des arguments pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2018 · Dakhla-Oued Ed-Dahab$s$);
update public.sujets set consigne = $s$Sujet : Certains jeunes suivent actuellement la mode et accorde beaucoup d'importance aux apparences contrairement à d'autres qui préfèrent la simplicité et s'attachent aux traditions. Que préférez-vous ? S'habiller à la mode ou porter les habits traditionnels ? Justifiez votre point de vue par des arguments pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2018 · Dakhla-Oued Ed-Dahab$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2018 · Drâa-Tafilalet$s$, $s$Certaines personnes pensent que l'univers carcéral (la prison) devrait être une institution de formation et de rééducation en vue d'une réinsertion sociale. Partagez-vous ce point de vue ? Rédigez un texte argumentatif dans lequel vous exprimez votre point de vue en le justifiant par des arguments et des exemples. Important :$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2018 · Drâa-Tafilalet$s$);
update public.sujets set consigne = $s$Certaines personnes pensent que l'univers carcéral (la prison) devrait être une institution de formation et de rééducation en vue d'une réinsertion sociale. Partagez-vous ce point de vue ? Rédigez un texte argumentatif dans lequel vous exprimez votre point de vue en le justifiant par des arguments et des exemples. Important :$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2018 · Drâa-Tafilalet$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2018 · Fès-Meknès$s$, $s$Sujet : Il est évident que les parents doivent aider leurs enfants à prendre la bonne décision concernant leur avenir. Cependant, certains de ces parents vont parfois jusqu'à obliger leur fille ou leur fils à choisir une branche, une filière ou une option qui ne convient ni à leurs goûts, ni à leurs préférences, ni à leurs capacités. Que pensez-vous de ce comportement ? Rédigez un texte dans lequel vous exprimez votre point de vue à l'aide d'arguments et d'exemples appropriés.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2018 · Fès-Meknès$s$);
update public.sujets set consigne = $s$Sujet : Il est évident que les parents doivent aider leurs enfants à prendre la bonne décision concernant leur avenir. Cependant, certains de ces parents vont parfois jusqu'à obliger leur fille ou leur fils à choisir une branche, une filière ou une option qui ne convient ni à leurs goûts, ni à leurs préférences, ni à leurs capacités. Que pensez-vous de ce comportement ? Rédigez un texte dans lequel vous exprimez votre point de vue à l'aide d'arguments et d'exemples appropriés.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2018 · Fès-Meknès$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2018 · Guelmim-Oued Noun$s$, $s$Le sujet : Certaines personnes s'attachent beaucoup plus à leur vie antérieure (passée), au détriment de leur vie postérieure (future). D'autres, au contraire, ne pensent qu'à leur avenir. Quelle position prenez-vous par rapport à votre vie passée et à votre vie future ? Exprimez votre point de vue en le justifiant par des arguments et des exemples pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2018 · Guelmim-Oued Noun$s$);
update public.sujets set consigne = $s$Le sujet : Certaines personnes s'attachent beaucoup plus à leur vie antérieure (passée), au détriment de leur vie postérieure (future). D'autres, au contraire, ne pensent qu'à leur avenir. Quelle position prenez-vous par rapport à votre vie passée et à votre vie future ? Exprimez votre point de vue en le justifiant par des arguments et des exemples pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2018 · Guelmim-Oued Noun$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2018 · L'Oriental$s$, $s$Sujet : Aujourd'hui, dans beaucoup de nos quartiers, les voisins évitent de se réunir et de communiquer entre eux. Ce comportement, vous paraît-il convenable ? Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2018 · L'Oriental$s$);
update public.sujets set consigne = $s$Sujet : Aujourd'hui, dans beaucoup de nos quartiers, les voisins évitent de se réunir et de communiquer entre eux. Ce comportement, vous paraît-il convenable ? Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2018 · L'Oriental$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2018 · Rabat-Salé-Kénitra$s$, $s$Sujet : Sujet : Dans Le Dernier Jour d'un Condamné, on sait que le condamné sera tué et exécuté ; mais on ignore les circonstances du crime qu'il a commis pour être condamné. Rédigez un plaidoyer dans lequel vous défendez le condamné à mort. Développez votre réflexion en vous appuyant sur des arguments variés et des exemples concrets.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2018 · Rabat-Salé-Kénitra$s$);
update public.sujets set consigne = $s$Sujet : Sujet : Dans Le Dernier Jour d'un Condamné, on sait que le condamné sera tué et exécuté ; mais on ignore les circonstances du crime qu'il a commis pour être condamné. Rédigez un plaidoyer dans lequel vous défendez le condamné à mort. Développez votre réflexion en vous appuyant sur des arguments variés et des exemples concrets.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2018 · Rabat-Salé-Kénitra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2018 · Tanger-Tétouan-Al Hoceïma$s$, $s$Sujet : Certains parents croient que pour bien éduquer les enfants, il faut tout leur pardonner. Partagez-vous ce point de vue ? Rédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2018 · Tanger-Tétouan-Al Hoceïma$s$);
update public.sujets set consigne = $s$Sujet : Certains parents croient que pour bien éduquer les enfants, il faut tout leur pardonner. Partagez-vous ce point de vue ? Rédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2018 · Tanger-Tétouan-Al Hoceïma$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2018 · Dakhla-Oued Ed-Dahab · rattrapage$s$, $s$Sujet : Certaines personnes de votre entourage pensent que la condamnation des criminels à la peine de mort diminue le taux de criminalité. Etes-vous de cet avis? Rédigez un texte dans lequel vous exposez votre point de vue en le justifiant par des arguments.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2018 · Dakhla-Oued Ed-Dahab · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Certaines personnes de votre entourage pensent que la condamnation des criminels à la peine de mort diminue le taux de criminalité. Etes-vous de cet avis? Rédigez un texte dans lequel vous exposez votre point de vue en le justifiant par des arguments.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2018 · Dakhla-Oued Ed-Dahab · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2018 · Guelmim-Oued Noun · rattrapage$s$, $s$Sujet : De nos jours, certains jeunes passent leur temps de loisirs dans des salles de sport ou dans des cafés pour regarder des matchs de football. D'autres, au contraire, préfèrent s'intéresser aux activités artistiques (musique, peinture, photographie, lecture…), tout en adhérant à des associations de la société civile. Quel est d'après vous, la meilleure façon pour bénéficier plus de son temps de loisirs ? Rédigez un texte argumentatif dans lequel vous défendez votre point de vue à l'aide d'arguments pertinents étayés d'exemples précis.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2018 · Guelmim-Oued Noun · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : De nos jours, certains jeunes passent leur temps de loisirs dans des salles de sport ou dans des cafés pour regarder des matchs de football. D'autres, au contraire, préfèrent s'intéresser aux activités artistiques (musique, peinture, photographie, lecture…), tout en adhérant à des associations de la société civile. Quel est d'après vous, la meilleure façon pour bénéficier plus de son temps de loisirs ? Rédigez un texte argumentatif dans lequel vous défendez votre point de vue à l'aide d'arguments pertinents étayés d'exemples précis.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2018 · Guelmim-Oued Noun · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2018 · L'Oriental · rattrapage$s$, $s$Sujet : Aimeriez-vous avoir des parents qui font tout à votre place ou, au contraire, des parents qui vous aident à compter sur vous-même ? Rédigez un texte dans lequel vous justifierez votre réponse à l'aide d'arguments et d'exemples.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2018 · L'Oriental · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Aimeriez-vous avoir des parents qui font tout à votre place ou, au contraire, des parents qui vous aident à compter sur vous-même ? Rédigez un texte dans lequel vous justifierez votre réponse à l'aide d'arguments et d'exemples.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2018 · L'Oriental · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2018 · Tanger-Tétouan-Al Hoceïma · rattrapage$s$, $s$Sujet : « Ouvrir une école, c'est fermer une prison ». Partagez-vous cette réflexion ? Rédigez un texte argumentatif dans lequel vous développez votre opinion en l'illustrant par des arguments pertinents et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2018 · Tanger-Tétouan-Al Hoceïma · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : « Ouvrir une école, c'est fermer une prison ». Partagez-vous cette réflexion ? Rédigez un texte argumentatif dans lequel vous développez votre opinion en l'illustrant par des arguments pertinents et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2018 · Tanger-Tétouan-Al Hoceïma · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2017 · Béni Mellal-Khénifra$s$, $s$SUJET : Dans un reportage télévisé sur la solidarité, un citoyen dit : « Je n'aide jamais les pauvres.» Vous rédigez un écrit argumenté dans lequel vous dites si vous êtes d'accord ou non avec ce citoyen. Vous appuyez votre point de vue par des arguments précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2017 · Béni Mellal-Khénifra$s$);
update public.sujets set consigne = $s$SUJET : Dans un reportage télévisé sur la solidarité, un citoyen dit : « Je n'aide jamais les pauvres.» Vous rédigez un écrit argumenté dans lequel vous dites si vous êtes d'accord ou non avec ce citoyen. Vous appuyez votre point de vue par des arguments précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2017 · Béni Mellal-Khénifra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2017 · L'Oriental$s$, $s$Sujet : Dans Le Dernier jour d'un condamné, Victor HUGO défend la nécessité d'abolir la peine de mort. L'auteur, vous paraît-il convaincant ? Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2017 · L'Oriental$s$);
update public.sujets set consigne = $s$Sujet : Dans Le Dernier jour d'un condamné, Victor HUGO défend la nécessité d'abolir la peine de mort. L'auteur, vous paraît-il convaincant ? Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2017 · L'Oriental$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2017 · Rabat-Salé-Kénitra$s$, $s$Sujet : Selon certains, comme dans le Dernier jour d'un condamné, la sévérité de la justice suffit pour lutter contre la violence et la criminalité. Qu'en pensez-vous ? Développez votre réflexion en l'appuyant avec des arguments pertinents et des exemples concrets de votre choix.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2017 · Rabat-Salé-Kénitra$s$);
update public.sujets set consigne = $s$Sujet : Selon certains, comme dans le Dernier jour d'un condamné, la sévérité de la justice suffit pour lutter contre la violence et la criminalité. Qu'en pensez-vous ? Développez votre réflexion en l'appuyant avec des arguments pertinents et des exemples concrets de votre choix.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2017 · Rabat-Salé-Kénitra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2017 · Souss-Massa$s$, $s$« Le jeune a besoin d'apprendre de ses erreurs ; il ne faut ni le punir ni le juger. » Partagez-vous ce point de vue ? Rédigez un texte dans lequel vous développerez votre réflexion à l'aide d'arguments et d'exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2017 · Souss-Massa$s$);
update public.sujets set consigne = $s$« Le jeune a besoin d'apprendre de ses erreurs ; il ne faut ni le punir ni le juger. » Partagez-vous ce point de vue ? Rédigez un texte dans lequel vous développerez votre réflexion à l'aide d'arguments et d'exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2017 · Souss-Massa$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2017 · Tanger-Tétouan-Al Hoceïma$s$, $s$Sujet : Certains pensent que les jeunes d'aujourd'hui sont plus ouverts et moins réservés que les jeunes d'autrefois car ils expriment plus facilement leurs opinions et leurs sentiments que ce soit en famille ou en société. Partagez-vous cet avis ? Développez votre point de vue (trente lignes maximum) en vous appuyant sur des arguments et sur des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2017 · Tanger-Tétouan-Al Hoceïma$s$);
update public.sujets set consigne = $s$Sujet : Certains pensent que les jeunes d'aujourd'hui sont plus ouverts et moins réservés que les jeunes d'autrefois car ils expriment plus facilement leurs opinions et leurs sentiments que ce soit en famille ou en société. Partagez-vous cet avis ? Développez votre point de vue (trente lignes maximum) en vous appuyant sur des arguments et sur des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2017 · Tanger-Tétouan-Al Hoceïma$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2017 · Béni Mellal-Khénifra · rattrapage$s$, $s$SUJET : Vous avez lu sur les pages d'un réseau social (internet) les propos suivants : « Pour moi, ma vie au sein de ma famille, entre mes frères et sœurs, est une source de joie et de bonheur. » - Êtes-vous d'accord avec ces propos? Rédigez un écrit argumenté dans lequel vous défendrez votre point de vue.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2017 · Béni Mellal-Khénifra · rattrapage$s$);
update public.sujets set consigne = $s$SUJET : Vous avez lu sur les pages d'un réseau social (internet) les propos suivants : « Pour moi, ma vie au sein de ma famille, entre mes frères et sœurs, est une source de joie et de bonheur. » - Êtes-vous d'accord avec ces propos? Rédigez un écrit argumenté dans lequel vous défendrez votre point de vue.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2017 · Béni Mellal-Khénifra · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2017 · Souss-Massa · rattrapage$s$, $s$« Seules les personnes âgées peuvent nous donner de bons conseils. » Partagez-vous ce point de vue ? Développez votre réflexion en vous appuyant sur des arguments précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2017 · Souss-Massa · rattrapage$s$);
update public.sujets set consigne = $s$« Seules les personnes âgées peuvent nous donner de bons conseils. » Partagez-vous ce point de vue ? Développez votre réflexion en vous appuyant sur des arguments précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2017 · Souss-Massa · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2017 · Tanger-Tétouan-Al Hoceïma · rattrapage$s$, $s$Sujet : Certaines personnes ne manifestent aucun intérêt, ni sentiments envers les difficultés et les malheurs des autres. D'autres au contraire se montrent solidaires et bienveillants envers les autres. Qu'en pensez-vous ? Développez votre point de vue (trente lignes maximum) en vous appuyant sur des arguments et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2017 · Tanger-Tétouan-Al Hoceïma · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Certaines personnes ne manifestent aucun intérêt, ni sentiments envers les difficultés et les malheurs des autres. D'autres au contraire se montrent solidaires et bienveillants envers les autres. Qu'en pensez-vous ? Développez votre point de vue (trente lignes maximum) en vous appuyant sur des arguments et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2017 · Tanger-Tétouan-Al Hoceïma · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2016 · Béni Mellal-Khénifra$s$, $s$Votre lycée célèbre la journée mondiale de la gentillesse. À cette occasion, on organise un concours du meilleur article sur la question suivante : « La gentillesse est-elle une qualité ou un défaut ? ». Pour participer à ce concours, rédigez un article dans lequel vous exprimez votre point de vue à ce sujet en vous appuyant sur des arguments et des exemples précis$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2016 · Béni Mellal-Khénifra$s$);
update public.sujets set consigne = $s$Votre lycée célèbre la journée mondiale de la gentillesse. À cette occasion, on organise un concours du meilleur article sur la question suivante : « La gentillesse est-elle une qualité ou un défaut ? ». Pour participer à ce concours, rédigez un article dans lequel vous exprimez votre point de vue à ce sujet en vous appuyant sur des arguments et des exemples précis$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2016 · Béni Mellal-Khénifra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2016 · Dakhla-Oued Ed-Dahab$s$, $s$Sujet : Certains professeurs affirment : « Aujourd'hui, nos élèves n'accordent (ne donnent) plus une grande importance à la lecture ». Pourquoi, à votre avis, les élèves lisent de moins en moins ? Quelles solutions proposez-vous pour les encourager à lire ?$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2016 · Dakhla-Oued Ed-Dahab$s$);
update public.sujets set consigne = $s$Sujet : Certains professeurs affirment : « Aujourd'hui, nos élèves n'accordent (ne donnent) plus une grande importance à la lecture ». Pourquoi, à votre avis, les élèves lisent de moins en moins ? Quelles solutions proposez-vous pour les encourager à lire ?$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2016 · Dakhla-Oued Ed-Dahab$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2016 · Guelmim-Oued Noun$s$, $s$Sujet : Pour certains, les amis virtuels (rencontrés sur les réseaux sociaux : facebook, twitter,…) sont plus fidèles et plus serviables que les amis réels (qu'on fréquente dans la réalité). Partagez-vous cette affirmation ? Exprimez votre point de vue dans un texte argumentatif cohérent.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2016 · Guelmim-Oued Noun$s$);
update public.sujets set consigne = $s$Sujet : Pour certains, les amis virtuels (rencontrés sur les réseaux sociaux : facebook, twitter,…) sont plus fidèles et plus serviables que les amis réels (qu'on fréquente dans la réalité). Partagez-vous cette affirmation ? Exprimez votre point de vue dans un texte argumentatif cohérent.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2016 · Guelmim-Oued Noun$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2016 · L'Oriental$s$, $s$Sujet : Sidi Mohamed a la chance d'avoir un bon père qui l'écoute et le console. D'autres parents au contraire ne savent que crier et punir. Rédigez un texte dans lequel vous défendez, à l'aide d'arguments, les droits des enfants maltraités par leurs parents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2016 · L'Oriental$s$);
update public.sujets set consigne = $s$Sujet : Sidi Mohamed a la chance d'avoir un bon père qui l'écoute et le console. D'autres parents au contraire ne savent que crier et punir. Rédigez un texte dans lequel vous défendez, à l'aide d'arguments, les droits des enfants maltraités par leurs parents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2016 · L'Oriental$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2016 · Laâyoune-Sakia El Hamra$s$, $s$Sujet : Pour régler son problème avec Antigone, Créon recourt à la violence .Pensez-vous que L'usage de la force soit la bonne solution aux problèmes de la vie quotidienne ? Justifiez votre point de vue à l'aide d'arguments pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2016 · Laâyoune-Sakia El Hamra$s$);
update public.sujets set consigne = $s$Sujet : Pour régler son problème avec Antigone, Créon recourt à la violence .Pensez-vous que L'usage de la force soit la bonne solution aux problèmes de la vie quotidienne ? Justifiez votre point de vue à l'aide d'arguments pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2016 · Laâyoune-Sakia El Hamra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2015 · Béni Mellal-Khénifra$s$, $s$SUJET : Certaines personnes critiquent les émissions télévisées qui présentent des scènes de violence (crimes de sang, agressions, vols, viols...). Etes-vous pour ou contre ce type d'émissions ? Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2015 · Béni Mellal-Khénifra$s$);
update public.sujets set consigne = $s$SUJET : Certaines personnes critiquent les émissions télévisées qui présentent des scènes de violence (crimes de sang, agressions, vols, viols...). Etes-vous pour ou contre ce type d'émissions ? Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2015 · Béni Mellal-Khénifra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2015 · Casablanca-Settat$s$, $s$Sujet : La bonté, la solidarité et la générosité sont des valeurs nobles dans la société. Pourtant, il arrive qu'elles soient mal récompensées comme c'est le cas de Abdelkader avec Moulay Larbi, son patron. Pensez-vous que ce comportement soit une raison suffisante pour refuser toute aide à autrui (aux autres) ? Justifiez votre point de vue par des arguments et des exemples pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2015 · Casablanca-Settat$s$);
update public.sujets set consigne = $s$Sujet : La bonté, la solidarité et la générosité sont des valeurs nobles dans la société. Pourtant, il arrive qu'elles soient mal récompensées comme c'est le cas de Abdelkader avec Moulay Larbi, son patron. Pensez-vous que ce comportement soit une raison suffisante pour refuser toute aide à autrui (aux autres) ? Justifiez votre point de vue par des arguments et des exemples pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2015 · Casablanca-Settat$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2015 · Dakhla-Oued Ed-Dahab$s$, $s$Sujet : « La prison corrige, rééduque et aide le prisonnier à commencer une nouvelle vie ». Partagez-vous cette opinion ? Justifiez votre point de vue en vous appuyant sur des arguments et des exemples pertinents.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2015 · Dakhla-Oued Ed-Dahab$s$);
update public.sujets set consigne = $s$Sujet : « La prison corrige, rééduque et aide le prisonnier à commencer une nouvelle vie ». Partagez-vous cette opinion ? Justifiez votre point de vue en vous appuyant sur des arguments et des exemples pertinents.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2015 · Dakhla-Oued Ed-Dahab$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2015 · Drâa-Tafilalet$s$, $s$SUJET : Certains parents choisissent tout à la place de leurs filles et de leurs fils (vêtements, amis, études...). Qu'en pensez-vous ? A partir de vos lectures et de votre expérience personnelle, rédigez un texte dans lequel vous exprimez votre point de vue en vous appuyant sur des arguments convaincants.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2015 · Drâa-Tafilalet$s$);
update public.sujets set consigne = $s$SUJET : Certains parents choisissent tout à la place de leurs filles et de leurs fils (vêtements, amis, études...). Qu'en pensez-vous ? A partir de vos lectures et de votre expérience personnelle, rédigez un texte dans lequel vous exprimez votre point de vue en vous appuyant sur des arguments convaincants.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2015 · Drâa-Tafilalet$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2015 · Guelmim-Oued Noun$s$, $s$Sujet : « La prison corrige, rééduque et aide le prisonnier à commencer une nouvelle vie ». Partagez-vous cette opinion ? Justifiez votre point de vue en vous appuyant sur des arguments et des exemples pertinents.$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2015 · Guelmim-Oued Noun$s$);
update public.sujets set consigne = $s$Sujet : « La prison corrige, rééduque et aide le prisonnier à commencer une nouvelle vie ». Partagez-vous cette opinion ? Justifiez votre point de vue en vous appuyant sur des arguments et des exemples pertinents.$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2015 · Guelmim-Oued Noun$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2015 · Laâyoune-Sakia El Hamra$s$, $s$Sujet : Dans cette scène Antigone préfère ne parler de son projet à personne. Etes-vous d'accord avec ce genre d'attitude ou faut-il partager sa décision avec les autres ? Elaborez un texte argumentatif dans lequel vous défendrez votre point de vue de manière cohérente.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2015 · Laâyoune-Sakia El Hamra$s$);
update public.sujets set consigne = $s$Sujet : Dans cette scène Antigone préfère ne parler de son projet à personne. Etes-vous d'accord avec ce genre d'attitude ou faut-il partager sa décision avec les autres ? Elaborez un texte argumentatif dans lequel vous défendrez votre point de vue de manière cohérente.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2015 · Laâyoune-Sakia El Hamra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2015 · Rabat-Salé-Kénitra$s$, $s$Sujet Si Antigone avait obéi aux ordres de Créon, elle n'aurait pas été condamnée à mort. A votre avis, les jeunes doivent-ils toujours obéir aux adultes ? En tant que jeune, donnez votre propre point de vue en vous appuyant sur des arguments convaincants et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2015 · Rabat-Salé-Kénitra$s$);
update public.sujets set consigne = $s$Sujet Si Antigone avait obéi aux ordres de Créon, elle n'aurait pas été condamnée à mort. A votre avis, les jeunes doivent-ils toujours obéir aux adultes ? En tant que jeune, donnez votre propre point de vue en vous appuyant sur des arguments convaincants et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2015 · Rabat-Salé-Kénitra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2015 · Casablanca-Settat · rattrapage$s$, $s$Sujet : Autrefois, nos parents faisaient de l'épargne en achetant de l'or, des bijoux pour se préparer aux jours difficiles. Partagez-vous cette manière de faire ? Justifiez votre point de vue à l'aide d'exemples et d'arguments pertinents et convaincants.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2015 · Casablanca-Settat · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Autrefois, nos parents faisaient de l'épargne en achetant de l'or, des bijoux pour se préparer aux jours difficiles. Partagez-vous cette manière de faire ? Justifiez votre point de vue à l'aide d'exemples et d'arguments pertinents et convaincants.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2015 · Casablanca-Settat · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2015 · Dakhla-Oued Ed-Dahab · rattrapage$s$, $s$Sujet : Ces derniers temps, la violence dans les établissements scolaires devient un phénomène de plus en plus inquiétant. Quelles sont les causes principales de cette violence ? Comment peut-on à votre avis y mettre fin ?$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2015 · Dakhla-Oued Ed-Dahab · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Ces derniers temps, la violence dans les établissements scolaires devient un phénomène de plus en plus inquiétant. Quelles sont les causes principales de cette violence ? Comment peut-on à votre avis y mettre fin ?$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2015 · Dakhla-Oued Ed-Dahab · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2015 · Guelmim-Oued Noun · rattrapage$s$, $s$Sujet : Ces derniers temps, la violence dans les établissements scolaires devient un phénomène de plus en plus inquiétant. Quelles sont les causes principales de cette violence ? Comment peut-on à votre avis y mettre fin ?$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2015 · Guelmim-Oued Noun · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Ces derniers temps, la violence dans les établissements scolaires devient un phénomène de plus en plus inquiétant. Quelles sont les causes principales de cette violence ? Comment peut-on à votre avis y mettre fin ?$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2015 · Guelmim-Oued Noun · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2015 · L'Oriental · rattrapage$s$, $s$Sujet : Certains malades désespérés se mettent d'accord avec leur(s) médecin (s) pour qu'ils arrêtent leur vie. Etes-vous d'accord avec ces patients qui adoptent un comportement pareil ? Rédigez un texte dans lequel vous justifiez votre point de vue à l'aide d'arguments. Pour réussir ma rédaction, je dois tenir compte des éléments suivants : - Je dois répondre fidèlement au sujet. - Je dois respecter la structure de l'argumentation : (thèse, arguments, exemples). - Mes idées doivent bien s'enchaîner. - Je dois diversifier mon vocabulaire. - Mes phrases doivent être correctes. - Je dois respecter la ponctuation (alinéa, point, virgule, point virgule …). - Mon orthographe et ma conjugaison doivent être correctes.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2015 · L'Oriental · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Certains malades désespérés se mettent d'accord avec leur(s) médecin (s) pour qu'ils arrêtent leur vie. Etes-vous d'accord avec ces patients qui adoptent un comportement pareil ? Rédigez un texte dans lequel vous justifiez votre point de vue à l'aide d'arguments. Pour réussir ma rédaction, je dois tenir compte des éléments suivants : - Je dois répondre fidèlement au sujet. - Je dois respecter la structure de l'argumentation : (thèse, arguments, exemples). - Mes idées doivent bien s'enchaîner. - Je dois diversifier mon vocabulaire. - Mes phrases doivent être correctes. - Je dois respecter la ponctuation (alinéa, point, virgule, point virgule …). - Mon orthographe et ma conjugaison doivent être correctes.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2015 · L'Oriental · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2015 · Rabat-Salé-Kénitra · rattrapage$s$, $s$Sujet Dans La Boîte à merveilles, toutes les femmes sont illettrées, incultes et soumises. A votre avis, une société peut-elle se développer sans l'émancipation de la femme ? Donnez votre point de vue, à ce sujet, en vous appuyant sur des arguments pertinents et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2015 · Rabat-Salé-Kénitra · rattrapage$s$);
update public.sujets set consigne = $s$Sujet Dans La Boîte à merveilles, toutes les femmes sont illettrées, incultes et soumises. A votre avis, une société peut-elle se développer sans l'émancipation de la femme ? Donnez votre point de vue, à ce sujet, en vous appuyant sur des arguments pertinents et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2015 · Rabat-Salé-Kénitra · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Béni Mellal-Khénifra$s$, $s$Dans le but d'une future réinsertion sociale des prisonniers, on a tendance, aujourd'hui, à intégrer la formation professionnelle dans les prisons (apprentissage des métiers comme la menuiserie, la maçonnerie, la mécanique, l'électricité...). Rédigez un texte dans lequel vous défendrez votre point de vue à ce sujet en vous appuyant sur des arguments pertinents.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Béni Mellal-Khénifra$s$);
update public.sujets set consigne = $s$Dans le but d'une future réinsertion sociale des prisonniers, on a tendance, aujourd'hui, à intégrer la formation professionnelle dans les prisons (apprentissage des métiers comme la menuiserie, la maçonnerie, la mécanique, l'électricité...). Rédigez un texte dans lequel vous défendrez votre point de vue à ce sujet en vous appuyant sur des arguments pertinents.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2014 · Béni Mellal-Khénifra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Drâa-Tafilalet$s$, $s$SUJET : Dans ce texte, Créon est en colère. Il recourt à la violence à l'encontre d'Antigone. Approuvez-vous ce comportement ? Rédigez un texte dans lequel vous exposerez votre point de vue sur le sujet.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Drâa-Tafilalet$s$);
update public.sujets set consigne = $s$SUJET : Dans ce texte, Créon est en colère. Il recourt à la violence à l'encontre d'Antigone. Approuvez-vous ce comportement ? Rédigez un texte dans lequel vous exposerez votre point de vue sur le sujet.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2014 · Drâa-Tafilalet$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Fès-Meknès$s$, $s$Sujet : Autrefois, on ouvrait sa porte à ses voisins, on partageait tout avec eux et on s'entraidait. Mais, de nos jours, les relations de voisinage ne sont plus ce qu'elles étaient. Pourquoi d'après vous ? Développez votre point de vue à l'aide d'arguments pertinents et d'exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Fès-Meknès$s$);
update public.sujets set consigne = $s$Sujet : Autrefois, on ouvrait sa porte à ses voisins, on partageait tout avec eux et on s'entraidait. Mais, de nos jours, les relations de voisinage ne sont plus ce qu'elles étaient. Pourquoi d'après vous ? Développez votre point de vue à l'aide d'arguments pertinents et d'exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2014 · Fès-Meknès$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Guelmim-Oued Noun$s$, $s$Le sujet : Ces derniers temps, au Maroc, les médias relatent chaque jour des cas de vol à main armée, d'agression, et même de meurtres perpétrés (commis) par des jeunes. Quelles sont à votre avis les causes de ces phénomènes ? Que proposez-vous comme solutions pour y remédier ?$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Guelmim-Oued Noun$s$);
update public.sujets set consigne = $s$Le sujet : Ces derniers temps, au Maroc, les médias relatent chaque jour des cas de vol à main armée, d'agression, et même de meurtres perpétrés (commis) par des jeunes. Quelles sont à votre avis les causes de ces phénomènes ? Que proposez-vous comme solutions pour y remédier ?$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2014 · Guelmim-Oued Noun$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Laâyoune-Sakia El Hamra$s$, $s$Sujet : Ces derniers temps, au Maroc, les médias relatent chaque jour des cas de vol à main armée, d'agression, et même de meurtres perpétrés (commis) par des jeunes. Quelles sont à votre avis les causes de ces phénomènes ? Que proposez-vous comme solutions pour y remédier ?$s$, 'régional', null
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Laâyoune-Sakia El Hamra$s$);
update public.sujets set consigne = $s$Sujet : Ces derniers temps, au Maroc, les médias relatent chaque jour des cas de vol à main armée, d'agression, et même de meurtres perpétrés (commis) par des jeunes. Quelles sont à votre avis les causes de ces phénomènes ? Que proposez-vous comme solutions pour y remédier ?$s$, oeuvre_id = null
where type = 'régional' and titre = $s$Régional 2014 · Laâyoune-Sakia El Hamra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Rabat-Salé-Kénitra$s$, $s$Sujet : Dans les œuvres au programme, Sidi Mohammed a des parents pauvres mais solidaires : Marie a une mère malade et un père emprisonné ; Antigone a une sœur et un oncle avec qui elle est en désaccord. Quel est pour vous le meilleur exemple de famille ? Présentez votre point de vue en vous appuyant sur des arguments variés et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Rabat-Salé-Kénitra$s$);
update public.sujets set consigne = $s$Sujet : Dans les œuvres au programme, Sidi Mohammed a des parents pauvres mais solidaires : Marie a une mère malade et un père emprisonné ; Antigone a une sœur et un oncle avec qui elle est en désaccord. Quel est pour vous le meilleur exemple de famille ? Présentez votre point de vue en vous appuyant sur des arguments variés et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2014 · Rabat-Salé-Kénitra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Souss-Massa$s$, $s$« Aujourd'hui, la plupart des familles marocaines n'aiment plus les vacances d'été. » Partagez-vous ce point de vue ? Dans un texte bien construit, vous exprimerez votre opinion à l'aide d'arguments précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Souss-Massa$s$);
update public.sujets set consigne = $s$« Aujourd'hui, la plupart des familles marocaines n'aiment plus les vacances d'été. » Partagez-vous ce point de vue ? Dans un texte bien construit, vous exprimerez votre opinion à l'aide d'arguments précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2014 · Souss-Massa$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Tanger-Tétouan-Al Hoceïma$s$, $s$Sujet : Certains pensent qu'il faut punir sévèrement les individus qui commettent des délits graves. D'autres au contraire considèrent qu'on doit être indulgent envers eux. Qu'en pensez-vous ? Développez votre réflexion sur le sujet en vous appuyant sur des arguments pertinents et sur des exemples tirés de votre environnement et de vos lectures.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Tanger-Tétouan-Al Hoceïma$s$);
update public.sujets set consigne = $s$Sujet : Certains pensent qu'il faut punir sévèrement les individus qui commettent des délits graves. D'autres au contraire considèrent qu'on doit être indulgent envers eux. Qu'en pensez-vous ? Développez votre réflexion sur le sujet en vous appuyant sur des arguments pertinents et sur des exemples tirés de votre environnement et de vos lectures.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2014 · Tanger-Tétouan-Al Hoceïma$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Béni Mellal-Khénifra · rattrapage$s$, $s$Certains adolescents quittent leur famille suite à des malentendus ou des disputes avec les parents, les frères, les sœurs, . Que pensez-vous de ce comportement ? Rédigez un texte dans lequel vous défendrez votre point de vue à l'aide d'arguments précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Béni Mellal-Khénifra · rattrapage$s$);
update public.sujets set consigne = $s$Certains adolescents quittent leur famille suite à des malentendus ou des disputes avec les parents, les frères, les sœurs, . Que pensez-vous de ce comportement ? Rédigez un texte dans lequel vous défendrez votre point de vue à l'aide d'arguments précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2014 · Béni Mellal-Khénifra · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Drâa-Tafilalet · rattrapage$s$, $s$SUJET : Pour Sidi Mohammed , Maâlem Abdeslem est un papa idéal : il représente la force, l'aventure, la sécurité et la paix . Pour vous, qu'est-ce qu'un bon père ? Rédigez un texte dans lequel vous exposerez votre point de vue sur le sujet.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Drâa-Tafilalet · rattrapage$s$);
update public.sujets set consigne = $s$SUJET : Pour Sidi Mohammed , Maâlem Abdeslem est un papa idéal : il représente la force, l'aventure, la sécurité et la paix . Pour vous, qu'est-ce qu'un bon père ? Rédigez un texte dans lequel vous exposerez votre point de vue sur le sujet.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2014 · Drâa-Tafilalet · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Fès-Meknès · rattrapage$s$, $s$Sujet : Certains adultes (parents, enseignants…) affirment que les jeunes d'aujourd'hui pensent plus à leurs droits qu'à leurs devoirs. Partagez-vous cette opinion ? Justifiez votre point de vue dans un texte argumenté et illustré d'exemples.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Fès-Meknès · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Certains adultes (parents, enseignants…) affirment que les jeunes d'aujourd'hui pensent plus à leurs droits qu'à leurs devoirs. Partagez-vous cette opinion ? Justifiez votre point de vue dans un texte argumenté et illustré d'exemples.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2014 · Fès-Meknès · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Guelmim-Oued Noun · rattrapage$s$, $s$Sujet : Certains parents ne laissent pas leurs enfants jouer sous prétexte que le jeu est une perte de temps. Partagez-vous l'attitude de ces parents ? Justifiez votre point de vue à l'aide d'arguments et d'exemples.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Guelmim-Oued Noun · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Certains parents ne laissent pas leurs enfants jouer sous prétexte que le jeu est une perte de temps. Partagez-vous l'attitude de ces parents ? Justifiez votre point de vue à l'aide d'arguments et d'exemples.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2014 · Guelmim-Oued Noun · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Laâyoune-Sakia El Hamra · rattrapage$s$, $s$Sujet : Certains parents ne laissent pas leurs enfants jouer sous prétexte que le jeu est une perte de temps. Partagez-vous l'attitude de ces parents ? Justifiez votre point de vue à l'aide d'arguments et d'exemples.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Laâyoune-Sakia El Hamra · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Certains parents ne laissent pas leurs enfants jouer sous prétexte que le jeu est une perte de temps. Partagez-vous l'attitude de ces parents ? Justifiez votre point de vue à l'aide d'arguments et d'exemples.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2014 · Laâyoune-Sakia El Hamra · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Souss-Massa · rattrapage$s$, $s$Vous avez certainement vu dans votre entourage des enfants trembler de peur devant leur parents. A-t-on vraiment besoin de faire peur aux enfants pour les éduquer ? Dans un texte bien construit, vous exprimerez votre opinion à l'aide d'arguments précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Souss-Massa · rattrapage$s$);
update public.sujets set consigne = $s$Vous avez certainement vu dans votre entourage des enfants trembler de peur devant leur parents. A-t-on vraiment besoin de faire peur aux enfants pour les éduquer ? Dans un texte bien construit, vous exprimerez votre opinion à l'aide d'arguments précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2014 · Souss-Massa · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2014 · Tanger-Tétouan-Al Hoceïma · rattrapage$s$, $s$Sujet : Certains considèrent que le travail en équipe est plus efficace (plus rentable) que le travail individuel. Que pensez-vous de cette affirmation ? Développez votre point de vue sur le sujet en vous appuyant sur des arguments pertinents et sur des exemples tirés de votre expérience et de vos lectures.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2014 · Tanger-Tétouan-Al Hoceïma · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Certains considèrent que le travail en équipe est plus efficace (plus rentable) que le travail individuel. Que pensez-vous de cette affirmation ? Développez votre point de vue sur le sujet en vous appuyant sur des arguments pertinents et sur des exemples tirés de votre expérience et de vos lectures.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2014 · Tanger-Tétouan-Al Hoceïma · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2013 · Béni Mellal-Khénifra$s$, $s$Certaines personnes ne gardent pas les secrets qu'on leur confie : ils en parlent à tout le monde. Rédigez un texte dans lequel vous exposerez votre point de vue concernant un tel comportement. Appuyez votre opinion par des arguments et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2013 · Béni Mellal-Khénifra$s$);
update public.sujets set consigne = $s$Certaines personnes ne gardent pas les secrets qu'on leur confie : ils en parlent à tout le monde. Rédigez un texte dans lequel vous exposerez votre point de vue concernant un tel comportement. Appuyez votre opinion par des arguments et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2013 · Béni Mellal-Khénifra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2013 · Casablanca-Settat$s$, $s$Sujet : Dans cette tragédie, tous les protagonistes (personnages) sont perdants. Montrez-le, en pensant à la valeur de ce que chacun d'eux a perdu et gagné.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2013 · Casablanca-Settat$s$);
update public.sujets set consigne = $s$Sujet : Dans cette tragédie, tous les protagonistes (personnages) sont perdants. Montrez-le, en pensant à la valeur de ce que chacun d'eux a perdu et gagné.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2013 · Casablanca-Settat$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2013 · Fès-Meknès$s$, $s$Sujet : De nos jours, la presse nous rapporte de plus en plus le cas d'enseignants maltraités ou agressés par leurs propres élèves à l'intérieur même de l'école : insultes, menaces, attaques à l'arme blanche, blessures… Pour la revue de votre lycée, rédigez un texte argumentatif en suivant ces indications : - montrez que ces comportements violents sont inacceptables (une violation de la loi) ; - exposez les raisons pour lesquelles les élèves doivent absolument manifester (montrer) un grand respect à l'égard de leurs professeurs ; - donnez un titre à votre texte.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2013 · Fès-Meknès$s$);
update public.sujets set consigne = $s$Sujet : De nos jours, la presse nous rapporte de plus en plus le cas d'enseignants maltraités ou agressés par leurs propres élèves à l'intérieur même de l'école : insultes, menaces, attaques à l'arme blanche, blessures… Pour la revue de votre lycée, rédigez un texte argumentatif en suivant ces indications : - montrez que ces comportements violents sont inacceptables (une violation de la loi) ; - exposez les raisons pour lesquelles les élèves doivent absolument manifester (montrer) un grand respect à l'égard de leurs professeurs ; - donnez un titre à votre texte.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2013 · Fès-Meknès$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2013 · L'Oriental$s$, $s$Sujet : Certains pensent qu'il serait plus efficace que notre société prenne des mesures pour éviter la criminalité au lieu de se contenter de punir les criminels. Qu'en pensez-vous ? Rédigez un texte argumentatif dans lequel vous défendez votre point de vue.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2013 · L'Oriental$s$);
update public.sujets set consigne = $s$Sujet : Certains pensent qu'il serait plus efficace que notre société prenne des mesures pour éviter la criminalité au lieu de se contenter de punir les criminels. Qu'en pensez-vous ? Rédigez un texte argumentatif dans lequel vous défendez votre point de vue.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2013 · L'Oriental$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2013 · Rabat-Salé-Kénitra$s$, $s$Sujet : Les œuvres au programme présentent trois exemples d'hommes : un père affectueux (le condamné), un père responsable (Si Abdeslem) et un oncle autoritaire (Créon). Partant de ces exemples, quel serait le bon père pour toi ? Donne ton point de vue en le justifiant par des arguments variés et des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2013 · Rabat-Salé-Kénitra$s$);
update public.sujets set consigne = $s$Sujet : Les œuvres au programme présentent trois exemples d'hommes : un père affectueux (le condamné), un père responsable (Si Abdeslem) et un oncle autoritaire (Créon). Partant de ces exemples, quel serait le bon père pour toi ? Donne ton point de vue en le justifiant par des arguments variés et des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2013 · Rabat-Salé-Kénitra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2013 · Souss-Massa$s$, $s$« Vivre loin de sa famille est positif pour un adolescent. » Partagez-vous ce point de vue ? Développez votre réflexion en vous appuyant sur des arguments précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2013 · Souss-Massa$s$);
update public.sujets set consigne = $s$« Vivre loin de sa famille est positif pour un adolescent. » Partagez-vous ce point de vue ? Développez votre réflexion en vous appuyant sur des arguments précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2013 · Souss-Massa$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2013 · Casablanca-Settat · rattrapage$s$, $s$Le narrateur a été condamné à mort mais il réclame et souhaite fortement sa grâce. Pensez-vous qu'il la mérite ? Pourquoi ? Développez votre point de vue dans un écrit argumenté et illustré d'exemples, en vous appuyant sur tout le roman.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2013 · Casablanca-Settat · rattrapage$s$);
update public.sujets set consigne = $s$Le narrateur a été condamné à mort mais il réclame et souhaite fortement sa grâce. Pensez-vous qu'il la mérite ? Pourquoi ? Développez votre point de vue dans un écrit argumenté et illustré d'exemples, en vous appuyant sur tout le roman.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2013 · Casablanca-Settat · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2013 · Fès-Meknès · rattrapage$s$, $s$Sujet : Malgré les efforts fournis pour que les citoyens vivent en sécurité, on constate que le nombre des crimes ne cesse d'augmenter. Certains sont convaincus que cela est dû à l'amélioration des conditions de vie des prisonniers et au respect de leurs droits humains. Partagez-vous cette opinion ? Développez votre point de vue à travers une réflexion argumentée.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2013 · Fès-Meknès · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Malgré les efforts fournis pour que les citoyens vivent en sécurité, on constate que le nombre des crimes ne cesse d'augmenter. Certains sont convaincus que cela est dû à l'amélioration des conditions de vie des prisonniers et au respect de leurs droits humains. Partagez-vous cette opinion ? Développez votre point de vue à travers une réflexion argumentée.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2013 · Fès-Meknès · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2013 · Guelmim-Oued Noun · rattrapage$s$, $s$Sujet : Vaut-il mieux à votre avis qu'un enfant joue tout seul, comme fait Sidi Mohammed avec les objets de sa boîte, ou avec des amis ? Justifiez votre point de vue en l'appuyant par des arguments.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2013 · Guelmim-Oued Noun · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Vaut-il mieux à votre avis qu'un enfant joue tout seul, comme fait Sidi Mohammed avec les objets de sa boîte, ou avec des amis ? Justifiez votre point de vue en l'appuyant par des arguments.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2013 · Guelmim-Oued Noun · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2013 · L'Oriental · rattrapage$s$, $s$Sujet : Dans notre société, les parents accordent généralement moins de liberté aux filles qu'aux garçons. Pensez-vous que ce comportement soit justifié ? Rédigez un texte argumentatif dans lequel vous développez votre point de vue.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2013 · L'Oriental · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Dans notre société, les parents accordent généralement moins de liberté aux filles qu'aux garçons. Pensez-vous que ce comportement soit justifié ? Rédigez un texte argumentatif dans lequel vous développez votre point de vue.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2013 · L'Oriental · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2013 · Rabat-Salé-Kénitra · rattrapage$s$, $s$Sujet : Dans Antigone de Jean Anouilh, Antigone a menti à sa nourrice en lui disant qu'elle était sortie se promener la nuit. Par contre, elle a dit la vérité à son oncle Créon en avouant qu'elle avait recouvert de terre le corps de son frère. En ce qui te concerne, quand tes parents te demandent ce que tu fais, où tu vas et qui tu fréquentes, est-ce que tu leur mens ou, au contraire, tu leur dis la vérité ? Justifie ta réflexion par des arguments variés et des exemples concrets.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2013 · Rabat-Salé-Kénitra · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Dans Antigone de Jean Anouilh, Antigone a menti à sa nourrice en lui disant qu'elle était sortie se promener la nuit. Par contre, elle a dit la vérité à son oncle Créon en avouant qu'elle avait recouvert de terre le corps de son frère. En ce qui te concerne, quand tes parents te demandent ce que tu fais, où tu vas et qui tu fréquentes, est-ce que tu leur mens ou, au contraire, tu leur dis la vérité ? Justifie ta réflexion par des arguments variés et des exemples concrets.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2013 · Rabat-Salé-Kénitra · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2013 · Souss-Massa · rattrapage$s$, $s$« Aujourd'hui, c'est chacun pour soi : quand un voisin a un problème, personne ne vient à son aide ». Qu'en pensez-vous ? Rédigez un texte dans lequel vous présenterez votre point de vue en l'appuyant par des arguments.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2013 · Souss-Massa · rattrapage$s$);
update public.sujets set consigne = $s$« Aujourd'hui, c'est chacun pour soi : quand un voisin a un problème, personne ne vient à son aide ». Qu'en pensez-vous ? Rédigez un texte dans lequel vous présenterez votre point de vue en l'appuyant par des arguments.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2013 · Souss-Massa · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2012 · Béni Mellal-Khénifra$s$, $s$Aujourd'hui, les jeunes préfèrent exercer des métiers modernes (informaticien, ingénieur.) et négligent les métiers d'artisanat traditionnels (tisserand, babouchier..). Quel type de métier aimez-vous exercer dans l'avenir ? Rédigez un texte dans lequel vous justifierez votre choix à l'aide d'arguments précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2012 · Béni Mellal-Khénifra$s$);
update public.sujets set consigne = $s$Aujourd'hui, les jeunes préfèrent exercer des métiers modernes (informaticien, ingénieur.) et négligent les métiers d'artisanat traditionnels (tisserand, babouchier..). Quel type de métier aimez-vous exercer dans l'avenir ? Rédigez un texte dans lequel vous justifierez votre choix à l'aide d'arguments précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2012 · Béni Mellal-Khénifra$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2012 · Casablanca-Settat$s$, $s$Sujet : Certaines personnes, pour trouver des solutions à leurs problèmes (amour, famille, mariage, chômage…) recourent à des saints. Pensez-vous que le maraboutisme (les saints, les marabouts) soit le meilleur remède aux problèmes de la vie ? Développez votre point de vue dans un texte argumenté et illustré d'exemples. Dans votre écrit, vous devez :$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2012 · Casablanca-Settat$s$);
update public.sujets set consigne = $s$Sujet : Certaines personnes, pour trouver des solutions à leurs problèmes (amour, famille, mariage, chômage…) recourent à des saints. Pensez-vous que le maraboutisme (les saints, les marabouts) soit le meilleur remède aux problèmes de la vie ? Développez votre point de vue dans un texte argumenté et illustré d'exemples. Dans votre écrit, vous devez :$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2012 · Casablanca-Settat$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2012 · Drâa-Tafilalet$s$, $s$Sujet : Sidi Mohamed , personnage principal de « La Boîte à merveilles » a grandi dans une famille traditionnelle. Que pensez-vous de la famille de sidi Mohamed ? Rédigez un texte dans lequel vous exposerez votre conception d'une bonne famille.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2012 · Drâa-Tafilalet$s$);
update public.sujets set consigne = $s$Sujet : Sidi Mohamed , personnage principal de « La Boîte à merveilles » a grandi dans une famille traditionnelle. Que pensez-vous de la famille de sidi Mohamed ? Rédigez un texte dans lequel vous exposerez votre conception d'une bonne famille.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2012 · Drâa-Tafilalet$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2012 · Fès-Meknès$s$, $s$Sujet : Chez nous, la femme est toujours considérée par certains comme un membre secondaire (peu important) de la société. A l'occasion du 8 mars, journée mondiale de la femme, rédigez un texte argumentatif dans lequel vous montrerez le rôle capital (très important) que joue la femme marocaine pour le développement de notre pays. Dans votre production, vous devez :$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2012 · Fès-Meknès$s$);
update public.sujets set consigne = $s$Sujet : Chez nous, la femme est toujours considérée par certains comme un membre secondaire (peu important) de la société. A l'occasion du 8 mars, journée mondiale de la femme, rédigez un texte argumentatif dans lequel vous montrerez le rôle capital (très important) que joue la femme marocaine pour le développement de notre pays. Dans votre production, vous devez :$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2012 · Fès-Meknès$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2012 · Souss-Massa$s$, $s$« Aujourd'hui, pour vivre en toute tranquillité, il faut éviter tout contact avec les voisins. » Partagez-vous ce point de vue ? Développez votre réflexion en vous appuyant sur des arguments précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2012 · Souss-Massa$s$);
update public.sujets set consigne = $s$« Aujourd'hui, pour vivre en toute tranquillité, il faut éviter tout contact avec les voisins. » Partagez-vous ce point de vue ? Développez votre réflexion en vous appuyant sur des arguments précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2012 · Souss-Massa$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2012 · Tanger-Tétouan-Al Hoceïma$s$, $s$Sujet : Actuellement, il existe encore des personnes qui pensent que la femme doit rester à la maison pour s'occuper de son foyer et que c'est l'homme qui doit subvenir aux besoins de sa famille. Partagez-vous ce point de vue ? Développez votre réflexion sur le sujet en vous appuyant sur des arguments pertinents et sur des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2012 · Tanger-Tétouan-Al Hoceïma$s$);
update public.sujets set consigne = $s$Sujet : Actuellement, il existe encore des personnes qui pensent que la femme doit rester à la maison pour s'occuper de son foyer et que c'est l'homme qui doit subvenir aux besoins de sa famille. Partagez-vous ce point de vue ? Développez votre réflexion sur le sujet en vous appuyant sur des arguments pertinents et sur des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2012 · Tanger-Tétouan-Al Hoceïma$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2012 · Béni Mellal-Khénifra · rattrapage$s$, $s$Pensez-vous que les exécutions publiques peuvent donner l'exemple pour réduire le nombre de crimes dans la société ? Rédigez un texte dans lequel vous présenterez votre point de vue justifié par des arguments.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2012 · Béni Mellal-Khénifra · rattrapage$s$);
update public.sujets set consigne = $s$Pensez-vous que les exécutions publiques peuvent donner l'exemple pour réduire le nombre de crimes dans la société ? Rédigez un texte dans lequel vous présenterez votre point de vue justifié par des arguments.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2012 · Béni Mellal-Khénifra · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2012 · Fès-Meknès · rattrapage$s$, $s$SUJET : Tout le monde est scandalisé, choqué par le nombre croissant de crimes dont sont victimes des enfants en bas âge : vols, viols, violences, tortures, meurtres, exploitation inhumaine… On réclame alors et avec force que les auteurs de tels crimes, considérés comme des monstres, soient condamnés sans pitié à la peine de mort. Etes-vous de cet avis ? Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments convaincants en donnant, si possible, un ou deux exemples tirés de la réalité. Dans votre production, vous devez :$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2012 · Fès-Meknès · rattrapage$s$);
update public.sujets set consigne = $s$SUJET : Tout le monde est scandalisé, choqué par le nombre croissant de crimes dont sont victimes des enfants en bas âge : vols, viols, violences, tortures, meurtres, exploitation inhumaine… On réclame alors et avec force que les auteurs de tels crimes, considérés comme des monstres, soient condamnés sans pitié à la peine de mort. Etes-vous de cet avis ? Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments convaincants en donnant, si possible, un ou deux exemples tirés de la réalité. Dans votre production, vous devez :$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$La Boîte à Merveilles$s$))
where type = 'régional' and titre = $s$Régional 2012 · Fès-Meknès · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2012 · Souss-Massa · rattrapage$s$, $s$Sujet : Au café, au bureau, à la maison et partout, les gens passent leur temps à dire du mal des autres. Que pensez-vous de ce phénomène ? Appuyez votre point de vue à l'aide d'arguments précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2012 · Souss-Massa · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Au café, au bureau, à la maison et partout, les gens passent leur temps à dire du mal des autres. Que pensez-vous de ce phénomène ? Appuyez votre point de vue à l'aide d'arguments précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Le Dernier Jour d'un Condamné$s$))
where type = 'régional' and titre = $s$Régional 2012 · Souss-Massa · rattrapage$s$;

insert into public.sujets (titre, consigne, type, oeuvre_id)
select $s$Régional 2012 · Tanger-Tétouan-Al Hoceïma · rattrapage$s$, $s$Sujet : Il y a des personnes qui ne veulent pas confier leurs secrets aux autres. Que pensez-vous de cette attitude ? Développez votre réflexion en vous appuyant sur des arguments pertinents et sur des exemples précis.$s$, 'régional', (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where not exists (select 1 from public.sujets where type = 'régional' and titre = $s$Régional 2012 · Tanger-Tétouan-Al Hoceïma · rattrapage$s$);
update public.sujets set consigne = $s$Sujet : Il y a des personnes qui ne veulent pas confier leurs secrets aux autres. Que pensez-vous de cette attitude ? Développez votre réflexion en vous appuyant sur des arguments pertinents et sur des exemples précis.$s$, oeuvre_id = (select id from public.oeuvres where lower(titre_fr) = lower($s$Antigone$s$))
where type = 'régional' and titre = $s$Régional 2012 · Tanger-Tétouan-Al Hoceïma · rattrapage$s$;
