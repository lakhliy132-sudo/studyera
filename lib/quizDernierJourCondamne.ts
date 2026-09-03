import type { QuestionQuiz } from "@/lib/quizBoiteAMerveilles";

/**
 * Questions du quiz du "Dernier Jour d'un Condamné", organisées
 * chapitre par chapitre — demandé explicitement par l'utilisateur
 * ("fais les lieux et les quiz"). 3 questions par chapitre (numero 1 à
 * 49), 147 au total : moins dense que La Boîte à Merveilles (15/chapitre,
 * 12 chapitres) ou Antigone (5/scène, 22 scènes), volontairement, car
 * chaque chapitre de ce roman est une réflexion brève d'une poignée de
 * paragraphes — 3 questions couvrent l'essentiel sans répétition ni
 * remplissage artificiel.
 *
 * ⚠️ Contenu entièrement rédigé par Claude, à partir des résumés,
 * points clés et thèmes déjà en base (table `fiches`, rédigés lors
 * d'une session précédente à partir d'une vraie connaissance du roman
 * de Victor Hugo) — chaque question est vérifiable dans le résumé du
 * chapitre correspondant, mais la formulation des questions/réponses
 * elle-même n'a pas été fournie par l'utilisateur : à faire relire par
 * un enseignant avant usage en classe, même réserve que les autres
 * quiz du site.
 */
export const QUIZ_DERNIER_JOUR_CONDAMNE: Record<number, QuestionQuiz[]> = {
  1: [
    {
      id: "djc-c1-q1",
      question: "Depuis combien de temps le narrateur est-il enfermé à Bicêtre au début du roman ?",
      choix: ["Une semaine", "Cinq semaines", "Un mois", "Un an"],
      reponseCorrecte: 1,
      explication: "Le récit s'ouvre alors qu'il est enfermé depuis cinq semaines.",
    },
    {
      id: "djc-c1-q2",
      question: "Quelle forme Victor Hugo choisit-il pour ce roman ?",
      choix: ["Un roman épistolaire", "Un journal intime à la première personne", "Une pièce de théâtre", "Un recueil de poèmes"],
      reponseCorrecte: 1,
      explication: "Le roman prend la forme du journal intime du condamné.",
    },
    {
      id: "djc-c1-q3",
      question: "Que sait-on du nom et du crime du condamné dans ce chapitre ?",
      choix: ["Son nom est donné mais pas son crime", "Son crime est donné mais pas son nom", "Ni l'un ni l'autre ne sont révélés", "Les deux sont révélés dès le début"],
      reponseCorrecte: 2,
      explication: "Victor Hugo ne révèle ni le nom ni le crime du condamné, pour en faire un cas universel.",
    },
  ], // La condamnation à mort
  2: [
    {
      id: "djc-c2-q1",
      question: "Pourquoi le narrateur refuse-t-il de raconter son crime ?",
      choix: ["Il l'a oublié", "Il veut rester un cas universel, pas un cas particulier", "Il en a honte", "Son avocat le lui interdit"],
      reponseCorrecte: 1,
      explication: "Victor Hugo refuse de faire de son personnage un cas particulier pour mieux en faire un cas universel.",
    },
    {
      id: "djc-c2-q2",
      question: "Sur quoi se concentre désormais l'esprit du condamné après ce chapitre ?",
      choix: ["Sur son enfance", "Sur la condamnation elle-même", "Sur son métier", "Sur ses amis"],
      reponseCorrecte: 1,
      explication: "La condamnation occupe désormais toute la place dans son esprit.",
    },
    {
      id: "djc-c2-q3",
      question: "Que comprend le condamné à propos de la société ?",
      choix: ["Qu'elle va le gracier", "Qu'elle a décidé froidement de lui retirer la vie", "Qu'elle regrette son jugement", "Qu'elle va rejuger son procès"],
      reponseCorrecte: 1,
      explication: "Il comprend que la société a décidé, froidement, de lui retirer la vie.",
    },
  ], // Le souvenir du procès
  3: [
    {
      id: "djc-c3-q1",
      question: "Que le narrateur imagine-t-il pour la première fois dans ce chapitre ?",
      choix: ["Sa libération", "La scène de son exécution", "Son procès", "Sa jeunesse"],
      reponseCorrecte: 1,
      explication: "Il imagine pour la première fois, avec précision, la scène de son exécution.",
    },
    {
      id: "djc-c3-q2",
      question: "Comment le narrateur perçoit-il la foule qui assistera à son exécution ?",
      choix: ["Comme des soutiens", "Comme des spectateurs d'un spectacle", "Comme des juges", "Comme des amis"],
      reponseCorrecte: 1,
      explication: "Il pense à tous ceux qui viendront assister à sa mort comme à un spectacle.",
    },
    {
      id: "djc-c3-q3",
      question: "Quel effet cette vision a-t-elle sur le condamné ?",
      choix: ["Elle le rassure", "Elle lui inspire une terreur qu'il ne peut chasser", "Elle le laisse indifférent", "Elle le fait rire"],
      reponseCorrecte: 1,
      explication: "Cette vision qu'il ne peut chasser de son esprit lui inspire une terreur presque incontrôlable.",
    },
  ], // L'image de l'échafaud
  4: [
    {
      id: "djc-c4-q1",
      question: "Où se trouve la cellule décrite dans ce chapitre ?",
      choix: ["À la Conciergerie", "À Bicêtre", "À l'Hôtel de Ville", "Chez lui"],
      reponseCorrecte: 1,
      explication: "Le condamné décrit sa cellule de la prison de Bicêtre.",
    },
    {
      id: "djc-c4-q2",
      question: "Que représente chaque heure passée en prison pour le condamné ?",
      choix: ["Un moment de répit", "Une étape de plus vers l'échafaud", "Un moment d'espoir", "Un moment neutre"],
      reponseCorrecte: 1,
      explication: "Chaque heure passée dans cette solitude est une étape de plus vers l'échafaud.",
    },
    {
      id: "djc-c4-q3",
      question: "Que mesure le condamné dans sa cellule ?",
      choix: ["La taille de la pièce", "La distance qui le sépare de sa vie d'avant", "Le nombre de barreaux", "La hauteur du plafond"],
      reponseCorrecte: 1,
      explication: "Il mesure, dans cet espace réduit, toute la distance qui le sépare désormais de sa vie d'avant.",
    },
  ], // La solitude de la cellule
  5: [
    {
      id: "djc-c5-q1",
      question: "Comment le narrateur observe-t-il les autres détenus ?",
      choix: ["Il leur parle directement", "À travers le judas de sa cellule", "Dans la cour de promenade", "Par une lettre"],
      reponseCorrecte: 1,
      explication: "Il observe les autres détenus de Bicêtre à travers le judas de sa cellule.",
    },
    {
      id: "djc-c5-q2",
      question: "Qu'est-ce qui différencie radicalement le condamné des autres prisonniers ?",
      choix: ["Il est plus jeune", "Il sait qu'il va mourir, eux espèrent sortir un jour", "Il est mieux traité", "Il ne parle pas français"],
      reponseCorrecte: 1,
      explication: "Eux espèrent encore sortir un jour, tandis que lui sait qu'il va mourir.",
    },
    {
      id: "djc-c5-q3",
      question: "Comment se comportent certains des autres détenus ?",
      choix: ["Ils pleurent sans cesse", "Ils rient ou chantent, habitués à la prison", "Ils refusent de manger", "Ils dorment tout le temps"],
      reponseCorrecte: 1,
      explication: "Certains rient, chantent ou se disputent, habitués depuis longtemps à la prison.",
    },
  ], // Les autres prisonniers
  6: [
    {
      id: "djc-c6-q1",
      question: "Sur quoi le condamné s'interroge-t-il dans ce chapitre ?",
      choix: ["Le prix de la nourriture en prison", "Le droit de la société de tuer un homme", "La météo", "Les horaires de visite"],
      reponseCorrecte: 1,
      explication: "Il s'interroge sur le droit que s'arroge la société de tuer un homme au nom de la justice.",
    },
    {
      id: "djc-c6-q2",
      question: "Que pense le condamné à propos de la souffrance de l'attente ?",
      choix: ["Qu'elle ne compte pas", "Qu'elle devrait être prise en compte dans le jugement", "Qu'elle est méritée", "Qu'elle n'existe pas"],
      reponseCorrecte: 1,
      explication: "Il pense que la souffrance du condamné devrait à elle seule compter dans le jugement porté sur la peine.",
    },
    {
      id: "djc-c6-q3",
      question: "Quelle thèse se dessine clairement dans ce chapitre ?",
      choix: ["Une thèse royaliste", "La thèse abolitionniste de Victor Hugo", "Une thèse religieuse", "Une thèse scientifique"],
      reponseCorrecte: 1,
      explication: "C'est ici que se dessine, pour la première fois clairement, la thèse abolitionniste de Victor Hugo.",
    },
  ], // La critique de la justice
  7: [
    {
      id: "djc-c7-q1",
      question: "Qu'est-ce qui occupe désormais tout l'esprit du narrateur ?",
      choix: ["Son enfance", "L'idée de la mort", "Son travail", "La politique"],
      reponseCorrecte: 1,
      explication: "Son esprit tout entier est désormais occupé par l'idée de la mort.",
    },
    {
      id: "djc-c7-q2",
      question: "Même où l'idée de la mort continue-t-elle de le hanter ?",
      choix: ["Seulement le jour", "Même dans son sommeil", "Jamais", "Seulement pendant les repas"],
      reponseCorrecte: 1,
      explication: "Même dans le sommeil, l'image de l'échafaud revient le hanter.",
    },
    {
      id: "djc-c7-q3",
      question: "Que révèle ce chapitre sur la nature de la condamnation à mort ?",
      choix: ["Qu'elle n'est qu'un moment bref", "Qu'elle est une longue torture psychologique avant l'exécution", "Qu'elle est indolore", "Qu'elle est vite oubliée"],
      reponseCorrecte: 1,
      explication: "La condamnation à mort n'est pas seulement la mort elle-même, mais une longue torture psychologique avant.",
    },
  ], // L'obsession de la mort
  8: [
    {
      id: "djc-c8-q1",
      question: "À quoi pense le condamné dans ce chapitre ?",
      choix: ["À son mariage", "À son pourvoi en cassation", "À un voyage", "À un livre"],
      reponseCorrecte: 1,
      explication: "Il pense à son pourvoi en cassation, dernier espoir légal de voir sa peine modifiée.",
    },
    {
      id: "djc-c8-q2",
      question: "Comment le condamné considère-t-il ses chances d'obtenir gain de cause ?",
      choix: ["Certaines", "Minces, mais il s'y accroche", "Nulles, il abandonne tout espoir", "Excellentes"],
      reponseCorrecte: 1,
      explication: "Il s'accroche à cette possibilité comme à une planche de salut, tout en sachant ses chances minces.",
    },
    {
      id: "djc-c8-q3",
      question: "Quels sentiments se mêlent dans l'esprit du condamné ?",
      choix: ["La joie et la colère", "L'espoir et le désespoir", "L'indifférence et l'ennui", "La fierté et la honte"],
      reponseCorrecte: 1,
      explication: "Espoir et désespoir se mêlent alors constamment dans son esprit.",
    },
  ], // L'espoir du recours
  9: [
    {
      id: "djc-c9-q1",
      question: "À quoi le narrateur devient-il extrêmement sensible ?",
      choix: ["Aux odeurs de la prison", "Au moindre bruit", "À la lumière", "Au froid"],
      reponseCorrecte: 1,
      explication: "Il devient extrêmement sensible au moindre bruit de la prison.",
    },
    {
      id: "djc-c9-q2",
      question: "Que croit-il à chaque bruit qu'il entend ?",
      choix: ["Qu'on lui apporte à manger", "Que les gardiens viennent le chercher", "Qu'un ami arrive", "Que c'est un rêve"],
      reponseCorrecte: 1,
      explication: "Tout lui fait croire que les gardiens viennent le chercher pour l'exécution.",
    },
    {
      id: "djc-c9-q3",
      question: "Comment le temps lui semble-t-il s'écouler ?",
      choix: ["Très vite", "Avec une lenteur insupportable", "Normalement", "Il ne le remarque pas"],
      reponseCorrecte: 1,
      explication: "Le temps lui semble s'écouler avec une lenteur insupportable.",
    },
  ], // L'attente des bruits
  10: [
    {
      id: "djc-c10-q1",
      question: "Que le condamné imagine-t-il par avance ?",
      choix: ["Sa libération", "Le trajet en charrette à travers Paris", "Un procès en appel", "Une lettre de sa fille"],
      reponseCorrecte: 1,
      explication: "Il imagine par avance le trajet en charrette à travers Paris.",
    },
    {
      id: "djc-c10-q2",
      question: "Comment le condamné juge-t-il l'attitude de la foule ?",
      choix: ["Compatissante", "Injuste et cruelle, comme un divertissement", "Absente", "Silencieuse et respectueuse"],
      reponseCorrecte: 1,
      explication: "Il juge profondément injuste que la mort d'un homme devienne un divertissement public.",
    },
    {
      id: "djc-c10-q3",
      question: "Que dénonce Victor Hugo à travers cette scène imaginée ?",
      choix: ["La lenteur de la justice", "La cruauté et l'inconscience de la société", "Le prix des exécutions", "Les conditions de la prison"],
      reponseCorrecte: 1,
      explication: "Victor Hugo dénonce la cruauté et l'inconscience d'une société qui a fait de l'exécution un spectacle.",
    },
  ], // Le jour de l'exécution
  11: [
    {
      id: "djc-c11-q1",
      question: "À quoi le narrateur repense-t-il dans ce chapitre ?",
      choix: ["À des projets d'avenir", "À des souvenirs simples de sa vie d'avant", "À son procès", "À la Conciergerie"],
      reponseCorrecte: 1,
      explication: "Il se replonge dans des souvenirs de sa vie d'avant l'arrestation.",
    },
    {
      id: "djc-c11-q2",
      question: "Pourquoi ces souvenirs lui font-ils si mal ?",
      choix: ["Parce qu'ils sont tristes en eux-mêmes", "Parce qu'il sait qu'il ne pourra plus jamais les revivre", "Parce qu'ils sont faux", "Parce qu'il les a oubliés"],
      reponseCorrecte: 1,
      explication: "Ces souvenirs lui font d'autant plus mal qu'il sait ne jamais pouvoir les revivre.",
    },
    {
      id: "djc-c11-q3",
      question: "Comment lui apparaît désormais la liberté qu'il avait ?",
      choix: ["Sans importance", "Comme un bien immense qu'il n'appréciait pas", "Comme un fardeau", "Comme une illusion"],
      reponseCorrecte: 1,
      explication: "La liberté qu'il possédait sans y penser lui apparaît rétrospectivement comme un bien immense.",
    },
  ], // Les souvenirs du passé
  12: [
    {
      id: "djc-c12-q1",
      question: "À qui pense le condamné dans ce chapitre ?",
      choix: ["À ses geôliers", "À ceux qu'il va laisser derrière lui", "À son avocat", "Au bourreau"],
      reponseCorrecte: 1,
      explication: "Il pense à ceux qu'il va laisser derrière lui en mourant.",
    },
    {
      id: "djc-c12-q2",
      question: "Comment évolue la nature de sa souffrance ?",
      choix: ["Elle diminue", "Elle n'est plus seulement individuelle", "Elle disparaît", "Elle devient physique uniquement"],
      reponseCorrecte: 1,
      explication: "Sa souffrance n'est plus seulement individuelle : il pense aussi à sa famille.",
    },
    {
      id: "djc-c12-q3",
      question: "Que mesure-t-il à propos de sa famille ?",
      choix: ["Qu'elle l'a oublié", "La douleur que sa mort va leur infliger", "Qu'elle ne l'aime plus", "Qu'elle est indifférente"],
      reponseCorrecte: 1,
      explication: "Il mesure aussi la douleur qu'il va infliger à sa famille par sa disparition.",
    },
  ], // Les proches laissés derrière
  13: [
    {
      id: "djc-c13-q1",
      question: "Que continue d'observer le narrateur dans ce chapitre ?",
      choix: ["La ville de Paris", "La vie et les habitudes des prisonniers", "Le ciel par la fenêtre", "Les gardiens seulement"],
      reponseCorrecte: 1,
      explication: "Il poursuit son observation de la vie carcérale : habitudes, conversations, solidarité.",
    },
    {
      id: "djc-c13-q2",
      question: "Pourquoi reste-t-il profondément seul malgré la présence des autres ?",
      choix: ["Il ne parle pas leur langue", "Nul ne partage sa certitude de mourir bientôt", "Il est isolé physiquement", "Il est malade"],
      reponseCorrecte: 1,
      explication: "Nul autour de lui ne partage sa certitude de connaître la date de sa propre mort.",
    },
    {
      id: "djc-c13-q3",
      question: "Qu'est-ce qui distingue sa situation de celle des autres détenus ?",
      choix: ["Il connaît la date de sa mort", "Il est plus riche", "Il a une meilleure cellule", "Il a un avocat"],
      reponseCorrecte: 0,
      explication: "Il est le seul à connaître, à quelques semaines près, la date exacte de sa propre mort.",
    },
  ], // La solitude parmi les hommes
  14: [
    {
      id: "djc-c14-q1",
      question: "Avec quel sentiment le condamné repense-t-il à sa vie passée ?",
      choix: ["L'indifférence", "Le regret", "La joie", "La colère seulement"],
      reponseCorrecte: 1,
      explication: "Il repense à sa vie passée avec un regard nouveau, empreint de regret.",
    },
    {
      id: "djc-c14-q2",
      question: "À quoi pense-t-il qu'il aurait pu consacrer sa vie ?",
      choix: ["À rien de particulier", "À des projets désormais impossibles", "À dormir davantage", "À voyager seul"],
      reponseCorrecte: 1,
      explication: "Il songe à tout ce qu'il aurait encore pu accomplir s'il était resté libre.",
    },
    {
      id: "djc-c14-q3",
      question: "Que prend-il conscience trop tard ?",
      choix: ["De la valeur de chaque instant de l'existence", "De son innocence", "De la beauté de la prison", "De l'importance de l'argent"],
      reponseCorrecte: 0,
      explication: "Sa mort prochaine lui fait mesurer, trop tard, la valeur de chaque instant de l'existence.",
    },
  ], // La valeur de la vie
  15: [
    {
      id: "djc-c15-q1",
      question: "À qui le narrateur pense-t-il pour la première fois longuement dans ce chapitre ?",
      choix: ["À sa mère", "À sa fille", "À son épouse seulement", "À un ami d'enfance"],
      reponseCorrecte: 1,
      explication: "Il pense pour la première fois longuement à sa fille, encore toute petite.",
    },
    {
      id: "djc-c15-q2",
      question: "Que redoute-t-il à propos d'elle ?",
      choix: ["Qu'elle soit malade", "Qu'elle grandisse sans lui et oublie son visage", "Qu'elle le déteste déjà", "Qu'elle parte à l'étranger"],
      reponseCorrecte: 1,
      explication: "L'idée qu'elle grandira sans lui, et pourrait oublier son visage, le bouleverse.",
    },
    {
      id: "djc-c15-q3",
      question: "Que rappelle cet amour paternel au lecteur ?",
      choix: ["Que le condamné est un criminel endurci", "Que le condamné reste un père et un homme sensible", "Que sa fille ne l'aime pas", "Que rien ne le distingue d'un autre détenu"],
      reponseCorrecte: 1,
      explication: "Victor Hugo rappelle que le condamné n'est pas réductible à son crime : c'est aussi un père.",
    },
  ], // La pensée de sa fille
  16: [
    {
      id: "djc-c16-q1",
      question: "Qu'est-ce qui laisse penser au condamné que l'exécution approche ?",
      choix: ["Une lettre officielle", "Des bruits inhabituels dans la prison", "La visite de sa fille", "Un journal"],
      reponseCorrecte: 1,
      explication: "Des bruits inhabituels dans la prison laissent penser que le jour approche.",
    },
    {
      id: "djc-c16-q2",
      question: "Que ressent-il à chaque signe qui semble confirmer cette approche ?",
      choix: ["Du soulagement", "Une angoisse redoublée", "De l'indifférence", "De la joie"],
      reponseCorrecte: 1,
      explication: "Son angoisse redouble à chaque signe qui semble confirmer cette hypothèse.",
    },
    {
      id: "djc-c16-q3",
      question: "Face à quoi le condamné se sent-il totalement impuissant ?",
      choix: ["Face à ses geôliers", "Face à la décision de justice déjà prise", "Face à sa famille", "Face au prêtre"],
      reponseCorrecte: 1,
      explication: "Il se heurte à son absolue impuissance face à une décision de justice déjà scellée.",
    },
  ], // L'approche de l'exécution
  17: [
    {
      id: "djc-c17-q1",
      question: "Que le narrateur imagine-t-il dans ce chapitre ?",
      choix: ["Des scénarios pour échapper à la mort", "Un voyage à l'étranger", "Sa réhabilitation publique", "Un nouveau métier"],
      reponseCorrecte: 0,
      explication: "Il imagine différents scénarios qui lui permettraient d'échapper à la mort.",
    },
    {
      id: "djc-c17-q2",
      question: "Que lui permettent ces fictions qu'il se raconte ?",
      choix: ["De se rendormir", "De garder un mince espoir", "D'oublier son procès", "De pardonner à la société"],
      reponseCorrecte: 1,
      explication: "Ces fictions lui permettent de garder un mince espoir.",
    },
    {
      id: "djc-c17-q3",
      question: "Que sait-il malgré tout, au fond de lui ?",
      choix: ["Que son évasion est certaine", "Que ces issues sont presque impossibles", "Qu'il sera libéré demain", "Que sa fille viendra le sauver"],
      reponseCorrecte: 1,
      explication: "Il sait, au fond, que ces issues sont presque impossibles.",
    },
  ], // L'espoir d'échapper
  18: [
    {
      id: "djc-c18-q1",
      question: "Que devient le temps pour le condamné dans ce chapitre ?",
      choix: ["Un allié", "Une véritable torture", "Un sujet indifférent", "Un jeu"],
      reponseCorrecte: 1,
      explication: "Le temps devient, pour le condamné, une véritable torture.",
    },
    {
      id: "djc-c18-q2",
      question: "Que compte-t-il avec une attention obsessionnelle ?",
      choix: ["Les prisonniers", "Les heures puis les minutes", "Les barreaux de sa cellule", "Les pas des gardiens"],
      reponseCorrecte: 1,
      explication: "Il compte les heures, puis les minutes, avec une attention obsessionnelle.",
    },
    {
      id: "djc-c18-q3",
      question: "Qu'est-ce qui a gagné une valeur immense à ses yeux ?",
      choix: ["L'argent", "La vie, désormais comptée", "La nourriture", "Le silence"],
      reponseCorrecte: 1,
      explication: "La vie, désormais comptée, a gagné une valeur immense à ses yeux.",
    },
  ], // La torture du temps
  19: [
    {
      id: "djc-c19-q1",
      question: "Pourquoi le narrateur imagine-t-il que la foule viendra à son exécution ?",
      choix: ["Par compassion", "Par simple curiosité", "Pour le soutenir", "Pour protester contre sa peine"],
      reponseCorrecte: 1,
      explication: "Il imagine la foule venue par simple curiosité, sans compassion réelle.",
    },
    {
      id: "djc-c19-q2",
      question: "Que condamne-t-il chez cette foule imaginée ?",
      choix: ["Son silence", "Son indifférence qui fait un divertissement de sa mort", "Sa tristesse", "Son absence"],
      reponseCorrecte: 1,
      explication: "Il condamne cette indifférence qui transforme la mort d'un homme en divertissement collectif.",
    },
    {
      id: "djc-c19-q3",
      question: "Que cherche à provoquer Victor Hugo chez son lecteur par cette dénonciation ?",
      choix: ["Le rire", "Le malaise et la réflexion", "L'ennui", "L'indifférence"],
      reponseCorrecte: 1,
      explication: "Victor Hugo cherche à provoquer chez son lecteur le malaise et la réflexion.",
    },
  ], // La foule curieuse
  20: [
    {
      id: "djc-c20-q1",
      question: "Que formule directement le condamné dans ce chapitre ?",
      choix: ["Ses regrets sur son crime", "Son opposition à la peine de mort", "Une demande de pardon au bourreau", "Sa dernière volonté"],
      reponseCorrecte: 1,
      explication: "Le condamné formule ici, plus directement que jamais, son opposition à la peine de mort.",
    },
    {
      id: "djc-c20-q2",
      question: "Que refuse-t-il exactement ?",
      choix: ["Que son crime soit oublié", "Que la société réponde à un crime par une mort", "D'être jugé", "D'avoir un avocat"],
      reponseCorrecte: 1,
      explication: "Il refuse l'idée que la société puisse répondre à une mort par une autre mort.",
    },
    {
      id: "djc-c20-q3",
      question: "En quoi son expérience individuelle se transforme-t-elle ici ?",
      choix: ["En simple témoignage personnel", "En plaidoyer général contre la peine capitale", "En confession religieuse", "En lettre à sa fille"],
      reponseCorrecte: 1,
      explication: "Son expérience individuelle se transforme en plaidoyer général contre la peine capitale.",
    },
  ], // L'opposition à la peine de mort
  21: [
    {
      id: "djc-c21-q1",
      question: "De quelle prison à quelle prison le condamné est-il transféré ?",
      choix: ["De la Conciergerie à Bicêtre", "De Bicêtre à la Conciergerie", "De Bicêtre à l'Hôtel de Ville", "De la Conciergerie à l'Hôtel de Ville"],
      reponseCorrecte: 1,
      explication: "Le condamné est transféré de la prison de Bicêtre vers celle de la Conciergerie.",
    },
    {
      id: "djc-c21-q2",
      question: "Que marque ce transfert dans le récit ?",
      choix: ["Un espoir de libération", "Une étape nouvelle et concrète vers l'exécution", "La fin du roman", "Une amélioration de ses conditions"],
      reponseCorrecte: 1,
      explication: "Ce transfert marque une nouvelle étape, très concrète, dans le rapprochement de son exécution.",
    },
    {
      id: "djc-c21-q3",
      question: "Sur quoi reste fixé l'esprit du condamné durant ce trajet ?",
      choix: ["Sur le paysage", "Sur l'échéance qui approche", "Sur son avocat", "Sur son passé lointain"],
      reponseCorrecte: 1,
      explication: "Son esprit reste tout entier fixé sur l'échéance qui approche.",
    },
  ], // Le transfert à la Conciergerie
  22: [
    {
      id: "djc-c22-q1",
      question: "Que découvre le narrateur à la Conciergerie ?",
      choix: ["Un lieu vide et silencieux", "Un nouvel environnement carcéral et de nouveaux visages", "Sa liberté", "Sa famille"],
      reponseCorrecte: 1,
      explication: "Il découvre un nouvel environnement carcéral et de nouveaux visages.",
    },
    {
      id: "djc-c22-q2",
      question: "Que ressent-il malgré l'agitation autour de lui ?",
      choix: ["Du soulagement", "Une solitude encore plus vive", "De la joie", "De l'indifférence"],
      reponseCorrecte: 1,
      explication: "Malgré cette agitation, il éprouve une solitude encore plus vive.",
    },
    {
      id: "djc-c22-q3",
      question: "De quoi ce lieu est-il chargé, selon le texte ?",
      choix: ["D'histoire judiciaire", "De souvenirs d'enfance", "De richesse", "De silence religieux"],
      reponseCorrecte: 0,
      explication: "Ce lieu, chargé d'histoire judiciaire, lui rappelle qu'il est désormais voué à la mort.",
    },
  ], // La découverte de la Conciergerie
  23: [
    {
      id: "djc-c23-q1",
      question: "Qui rend visite au condamné dans ce chapitre ?",
      choix: ["Un avocat", "Un aumônier", "Sa fille", "Le bourreau"],
      reponseCorrecte: 1,
      explication: "Un aumônier vient rendre visite au condamné pour l'accompagner spirituellement.",
    },
    {
      id: "djc-c23-q2",
      question: "Comment le condamné réagit-il à ses paroles de réconfort ?",
      choix: ["Il en est totalement rassuré", "Il ne parvient pas vraiment à s'y raccrocher", "Il les refuse avec colère", "Il ne l'écoute pas"],
      reponseCorrecte: 1,
      explication: "Il écoute ses paroles de réconfort sans parvenir vraiment à s'y raccrocher.",
    },
    {
      id: "djc-c23-q3",
      question: "Que reste-t-il plus fort que toute consolation religieuse ?",
      choix: ["L'espoir", "La peur de la mort", "La colère", "L'ennui"],
      reponseCorrecte: 1,
      explication: "La peur de la mort reste plus forte que toute consolation.",
    },
  ], // La visite du prêtre
  24: [
    {
      id: "djc-c24-q1",
      question: "De quoi est faite l'attente décrite dans ce chapitre ?",
      choix: ["De joie et de projets", "De souvenirs, de regrets et de peur", "D'ennui seulement", "De colère"],
      reponseCorrecte: 1,
      explication: "Il décrit une attente faite de souvenirs, de regrets et de peur mêlés.",
    },
    {
      id: "djc-c24-q2",
      question: "Que demande désormais le condamné ?",
      choix: ["Sa grâce immédiate", "Quelques heures de vie supplémentaires", "De revoir son avocat", "De changer de cellule"],
      reponseCorrecte: 1,
      explication: "Il ne demande plus grand-chose : quelques heures de vie supplémentaires.",
    },
    {
      id: "djc-c24-q3",
      question: "Que révèle ce désir de « durer encore un peu » ?",
      choix: ["Son indifférence à la mort", "La valeur immense qu'a pris chaque instant restant", "Son envie de fuir", "Sa colère contre sa fille"],
      reponseCorrecte: 1,
      explication: "Cette réduction de ses désirs à l'essentiel dit toute la valeur qu'a pris chaque fraction de temps.",
    },
  ], // L'attente interminable
  25: [
    {
      id: "djc-c25-q1",
      question: "Quelle pensée revient hanter le condamné, plus douloureuse que jamais ?",
      choix: ["Son procès", "Sa fille", "Son enfance", "Son métier"],
      reponseCorrecte: 1,
      explication: "La pensée de sa petite fille revient hanter le condamné, plus douloureuse que les fois précédentes.",
    },
    {
      id: "djc-c25-q2",
      question: "Que se demande-t-il à propos d'elle ?",
      choix: ["Si elle deviendra riche", "Si elle grandira heureuse et se souviendra de lui", "Si elle se mariera jeune", "Si elle ira à l'école"],
      reponseCorrecte: 1,
      explication: "Il se demande si elle grandira heureuse, si elle se souviendra seulement de son père.",
    },
    {
      id: "djc-c25-q3",
      question: "Que révèle cet amour paternel répété sur la condamnation ?",
      choix: ["Qu'elle est méritée", "Qu'elle est encore plus tragique, au-delà du seul condamné", "Qu'elle n'a pas d'importance", "Qu'elle est rapide et indolore"],
      reponseCorrecte: 1,
      explication: "Cet amour paternel rend la condamnation encore plus tragique en révélant son coût humain.",
    },
  ], // Le souvenir de sa fille
  26: [
    {
      id: "djc-c26-q1",
      question: "Que remarque le condamné dans ce chapitre ?",
      choix: ["Un silence inhabituel", "Des signes concrets que l'heure de l'exécution approche", "La visite de son avocat", "Une amélioration de son sort"],
      reponseCorrecte: 1,
      explication: "Des signes de plus en plus concrets indiquent que l'heure de l'exécution approche réellement.",
    },
    {
      id: "djc-c26-q2",
      question: "Comment se transforme sa terreur ?",
      choix: ["Elle disparaît", "Elle n'est plus seulement imaginaire mais liée à des faits observables", "Elle diminue", "Elle devient de la colère"],
      reponseCorrecte: 1,
      explication: "La terreur qu'il ressent n'est plus seulement imaginaire, mais liée à des faits observables.",
    },
    {
      id: "djc-c26-q3",
      question: "Que révèle son envie de vivre encore quelques instants ?",
      choix: ["Sa lâcheté", "L'instinct de survie présent chez tout être humain", "Son indifférence", "Sa foi religieuse"],
      reponseCorrecte: 1,
      explication: "Cela révèle l'instinct de survie qui subsiste jusqu'au bout chez tout être humain.",
    },
  ], // Les préparatifs
  27: [
    {
      id: "djc-c27-q1",
      question: "À quoi s'accroche le narrateur dans ce chapitre ?",
      choix: ["À un souvenir d'enfance", "À l'idée d'une grâce de dernière minute", "À la fuite", "À la prière seule"],
      reponseCorrecte: 1,
      explication: "Il s'accroche une nouvelle fois à l'idée d'une grâce de dernière minute.",
    },
    {
      id: "djc-c27-q2",
      question: "Comment qualifie-t-il lui-même cet espoir ?",
      choix: ["Certain", "Fragile", "Impossible à ressentir", "Absurde et sans effet sur lui"],
      reponseCorrecte: 1,
      explication: "Cet espoir, qu'il sait pourtant fragile, montre l'instinct de vie de l'homme.",
    },
    {
      id: "djc-c27-q3",
      question: "Que montre cette alternance entre espoir et désespoir ?",
      choix: ["Que le condamné est incohérent", "Que l'être humain garde un désir de vivre jusqu'au bout", "Que le roman est mal construit", "Que le condamné a perdu la raison"],
      reponseCorrecte: 1,
      explication: "Le désespoir et l'espoir alternent sans cesse jusque dans les tout derniers instants.",
    },
  ], // L'espoir de la grâce
  28: [
    {
      id: "djc-c28-q1",
      question: "Que découvre réellement le condamné dans ce chapitre, non plus seulement en imagination ?",
      choix: ["Sa grâce", "La foule massée pour assister à son exécution", "Sa fille", "Un nouvel avocat"],
      reponseCorrecte: 1,
      explication: "Il découvre réellement, et non plus seulement en imagination, la foule massée pour y assister.",
    },
    {
      id: "djc-c28-q2",
      question: "Que devient sa mort sous ses yeux ?",
      choix: ["Un moment privé", "Un spectacle public", "Un non-événement", "Une cérémonie religieuse"],
      reponseCorrecte: 1,
      explication: "Sa mort devient effectivement, sous ses yeux, un spectacle public.",
    },
    {
      id: "djc-c28-q3",
      question: "Quels sentiments ressent-il alors ?",
      choix: ["Le calme et la sérénité", "Une humiliation profonde et une peur intense", "La colère seule", "L'indifférence"],
      reponseCorrecte: 1,
      explication: "Il en ressent une humiliation profonde, mêlée à une peur intense et physique.",
    },
  ], // Conduit vers l'échafaud
  29: [
    {
      id: "djc-c29-q1",
      question: "Qu'est-ce qui rend les dernières minutes du condamné presque insupportables ?",
      choix: ["Le froid", "Les bruits, les cris et l'agitation de la foule", "La faim", "Le silence total"],
      reponseCorrecte: 1,
      explication: "Les bruits de la foule, les cris et l'agitation rendent ses dernières minutes presque insupportables.",
    },
    {
      id: "djc-c29-q2",
      question: "Que comprend-il à ce stade ?",
      choix: ["Qu'il va être gracié", "Qu'il n'a plus aucun espoir raisonnable", "Que sa fille est arrivée", "Que l'exécution est annulée"],
      reponseCorrecte: 1,
      explication: "Il sent qu'il n'a plus aucun espoir raisonnable de salut.",
    },
    {
      id: "djc-c29-q3",
      question: "Vers qui se tourne sa pensée une dernière fois ?",
      choix: ["Vers ses geôliers", "Vers sa famille et sa fille", "Vers le bourreau", "Vers la foule"],
      reponseCorrecte: 1,
      explication: "Sa pensée, dans cet instant de tension extrême, se tourne vers sa famille et sa fille.",
    },
  ], // Près de l'échafaud
  30: [
    {
      id: "djc-c30-q1",
      question: "À qui pense intensément le condamné dans ses derniers instants ?",
      choix: ["À sa mère", "À sa fille", "À son avocat", "À un ami"],
      reponseCorrecte: 1,
      explication: "Il pense intensément à sa fille dans ses derniers instants.",
    },
    {
      id: "djc-c30-q2",
      question: "Que regrette-t-il profondément ?",
      choix: ["De ne pas avoir mangé", "De ne pouvoir la revoir ni lui dire son amour", "D'avoir été jugé", "De ne pas avoir écrit de livre"],
      reponseCorrecte: 1,
      explication: "Il regrette amèrement de devoir la quitter sans avoir pu la revoir ni lui dire son amour.",
    },
    {
      id: "djc-c30-q3",
      question: "Que cherche cette scène à faire chez le lecteur ?",
      choix: ["Le faire rire", "Toucher profondément sa sensibilité", "L'ennuyer", "Le distraire"],
      reponseCorrecte: 1,
      explication: "Cette scène cherche ouvertement à toucher la sensibilité du lecteur.",
    },
  ], // L'adieu à sa fille
  31: [
    {
      id: "djc-c31-q1",
      question: "Comment le narrateur vit-il ses toutes dernières secondes ?",
      choix: ["Dans le calme", "Dans une terreur extrême", "Dans l'indifférence", "Dans le sommeil"],
      reponseCorrecte: 1,
      explication: "Il vit dans une terreur extrême les toutes dernières secondes qui le séparent de l'exécution.",
    },
    {
      id: "djc-c31-q2",
      question: "Que voudrait-il encore ?",
      choix: ["Qu'une intervention vienne le sauver", "Parler à la foule", "Voir le bourreau", "Rien du tout"],
      reponseCorrecte: 0,
      explication: "Il voudrait qu'une intervention, quelle qu'elle soit, vienne encore le sauver.",
    },
    {
      id: "djc-c31-q3",
      question: "À quoi ne pense-t-il plus du tout à ce moment ?",
      choix: ["À sa fille", "À son crime ou à son procès", "À la mort", "À sa peur"],
      reponseCorrecte: 1,
      explication: "Il ne pense plus ni à son crime ni à son procès.",
    },
  ], // Les dernières secondes
  32: [
    {
      id: "djc-c32-q1",
      question: "Que comprend le condamné une fois conduit tout près de l'échafaud ?",
      choix: ["Qu'il va être gracié", "Que sa mort est désormais totalement inévitable", "Que son avocat arrive", "Que l'exécution est reportée"],
      reponseCorrecte: 1,
      explication: "Il comprend que le moment de son exécution est désormais totalement inévitable.",
    },
    {
      id: "djc-c32-q2",
      question: "Comment observe-t-il ce qui l'entoure à cet instant ?",
      choix: ["Sans y prêter attention", "Avec une acuité particulière", "Avec indifférence", "Les yeux fermés"],
      reponseCorrecte: 1,
      explication: "Il observe une dernière fois ce qui l'entoure, avec une acuité particulière.",
    },
    {
      id: "djc-c32-q3",
      question: "Comment se comporte la foule autour de lui ?",
      choix: ["Elle est absente", "Elle reste présente, indifférente ou fascinée", "Elle proteste contre l'exécution", "Elle prie avec lui"],
      reponseCorrecte: 1,
      explication: "La foule reste présente autour de lui, entre indifférence et fascination.",
    },
  ], // Le moment inévitable
  33: [
    {
      id: "djc-c33-q1",
      question: "Où se poursuivent les réflexions du condamné dans ce chapitre ?",
      choix: ["À Bicêtre", "À la Conciergerie", "À l'Hôtel de Ville", "Chez lui"],
      reponseCorrecte: 1,
      explication: "Le condamné poursuit ses réflexions à la Conciergerie.",
    },
    {
      id: "djc-c33-q2",
      question: "Par quoi le condamné est-il tourmenté dans ce chapitre ?",
      choix: ["Par la faim", "Par l'écoulement du temps et la certitude de son exécution proche", "Par le bruit de la rue", "Par une dispute avec un geôlier"],
      reponseCorrecte: 1,
      explication: "Il est tourmenté par l'écoulement du temps et la certitude grandissante de son exécution.",
    },
    {
      id: "djc-c33-q3",
      question: "Que traduit l'angoisse continue de ce chapitre ?",
      choix: ["Un simple caprice du condamné", "La lente torture psychologique que subit un condamné à mort", "Un problème médical", "Une erreur judiciaire"],
      reponseCorrecte: 1,
      explication: "Cette angoisse illustre la lente torture psychologique que Victor Hugo entend dénoncer.",
    },
  ], // Le vertige de l'attente
  34: [
    {
      id: "djc-c34-q1",
      question: "À quoi repense le condamné dans ce chapitre ?",
      choix: ["À sa richesse passée", "À sa vie d'avant, remplie d'une liberté qu'il n'appréciait pas", "À son procès", "À la prison de Bicêtre"],
      reponseCorrecte: 1,
      explication: "Il repense à sa vie d'avant, remplie de liberté qu'il ne savait pas apprécier.",
    },
    {
      id: "djc-c34-q2",
      question: "Que comprend-il à l'approche de sa mort ?",
      choix: ["Que la liberté ne comptait pas", "La valeur de cette liberté ordinaire, autrefois tenue pour acquise", "Qu'il aurait dû fuir plus tôt", "Que rien n'a d'importance"],
      reponseCorrecte: 1,
      explication: "Il comprend que cette liberté ordinaire était en réalité un bien précieux entre tous.",
    },
    {
      id: "djc-c34-q3",
      question: "Que lui paraissent désormais quelques heures de liberté ?",
      choix: ["Sans intérêt", "Plus précieuses que n'importe quel bien matériel", "Impossibles à imaginer", "Effrayantes"],
      reponseCorrecte: 1,
      explication: "Quelques heures de liberté lui paraissent plus désirables que tout autre bien matériel.",
    },
  ], // La valeur de la liberté
  35: [
    {
      id: "djc-c35-q1",
      question: "Que le narrateur imagine-t-il dans ce chapitre ?",
      choix: ["Son passé d'enfance", "Ce qu'aurait pu être son avenir sans la condamnation", "Le procès de son crime", "La vie du bourreau"],
      reponseCorrecte: 1,
      explication: "Il imagine ce qu'aurait pu être son avenir s'il n'avait jamais été condamné.",
    },
    {
      id: "djc-c35-q2",
      question: "Quel genre d'avenir imagine-t-il ?",
      choix: ["Une vie de voyages", "Une vie simple, entourée des siens", "Une carrière politique", "Une vie de solitude"],
      reponseCorrecte: 1,
      explication: "Il imagine une vie simple, entourée de ses proches.",
    },
    {
      id: "djc-c35-q3",
      question: "Pourquoi ces pensées rendent-elles son attente plus douloureuse ?",
      choix: ["Parce qu'elles sont fausses", "Parce qu'il sait qu'aucun de ces avenirs ne se réalisera jamais", "Parce qu'elles le font rire", "Parce qu'elles sont trop courtes"],
      reponseCorrecte: 1,
      explication: "Il sait qu'aucun de ces avenirs possibles ne se réalisera jamais.",
    },
  ], // L'avenir perdu
  36: [
    {
      id: "djc-c36-q1",
      question: "Sur quoi s'interroge le condamné dans ce chapitre ?",
      choix: ["Sur le sort de sa fille uniquement", "Sur ce qui l'attend après la mort", "Sur le prix de son procès", "Sur la météo du jour"],
      reponseCorrecte: 1,
      explication: "Il s'interroge sur ce qui l'attend après la mort, au-delà de l'exécution elle-même.",
    },
    {
      id: "djc-c36-q2",
      question: "Quel type d'angoisse s'ajoute à sa peur physique de l'échafaud ?",
      choix: ["Une angoisse financière", "Une angoisse métaphysique face à l'inconnu de l'après-mort", "Une angoisse sociale", "Une angoisse amoureuse"],
      reponseCorrecte: 1,
      explication: "Cette incertitude métaphysique s'ajoute à la peur physique de l'échafaud.",
    },
    {
      id: "djc-c36-q3",
      question: "Que provoque cette incertitude sur ce qui suivra son dernier souffle ?",
      choix: ["Un apaisement", "Une dimension vertigineuse supplémentaire à sa terreur", "De l'indifférence", "De la curiosité joyeuse"],
      reponseCorrecte: 1,
      explication: "Ne rien savoir de ce qui suivra son dernier souffle ajoute une dimension vertigineuse à sa terreur.",
    },
  ], // L'inconnu de la mort
  37: [
    {
      id: "djc-c37-q1",
      question: "Sur quoi revient le narrateur dans ce chapitre ?",
      choix: ["Son enfance", "Son procès et ceux qui ont décidé de son sort", "Sa vie de couple", "Ses voyages"],
      reponseCorrecte: 1,
      explication: "Il revient sur les personnes qui ont eu son sort entre leurs mains lors du procès.",
    },
    {
      id: "djc-c37-q2",
      question: "Quels sentiments ressent-il envers la justice ?",
      choix: ["De la gratitude", "Un profond sentiment d'injustice et d'impuissance", "De l'indifférence totale", "De la fierté"],
      reponseCorrecte: 1,
      explication: "Il ressent un profond sentiment d'injustice et surtout d'impuissance.",
    },
    {
      id: "djc-c37-q3",
      question: "Que dit-il à propos de sa mort ?",
      choix: ["Qu'il l'a choisie lui-même", "Que d'autres hommes ont décidé à sa place du jour de sa mort", "Qu'elle est un accident", "Qu'elle est reportée"],
      reponseCorrecte: 1,
      explication: "D'autres hommes, dit-il, ont décidé, à sa place, du jour de sa mort.",
    },
  ], // L'injustice du procès
  38: [
    {
      id: "djc-c38-q1",
      question: "Comment évolue l'état du condamné à mesure que le temps passe ?",
      choix: ["Il devient plus calme", "Sa nervosité ne cesse de croître", "Il s'endort", "Il devient joyeux"],
      reponseCorrecte: 1,
      explication: "Le temps continue de s'écouler et la nervosité du condamné ne cesse de croître.",
    },
    {
      id: "djc-c38-q2",
      question: "Comment interprète-t-il chaque bruit de la prison ?",
      choix: ["Comme un signe imminent de son transfert vers l'exécution", "Comme un bruit sans importance", "Comme le signe d'une visite", "Comme de la musique"],
      reponseCorrecte: 0,
      explication: "Chaque bruit est aussitôt interprété comme le signe imminent de son transfert.",
    },
    {
      id: "djc-c38-q3",
      question: "Autour de quoi tourne désormais son esprit ?",
      choix: ["Autour de plusieurs sujets variés", "Autour de la seule échéance qui approche", "Autour de son enfance", "Autour de la nourriture"],
      reponseCorrecte: 1,
      explication: "Son esprit tourne en boucle autour de cette seule échéance qui approche.",
    },
  ], // L'attente nerveuse
  39: [
    {
      id: "djc-c39-q1",
      question: "À qui pense le narrateur dans ce chapitre ?",
      choix: ["À ses geôliers", "À sa famille et à ceux qui l'aimaient", "À son avocat", "Au prêtre"],
      reponseCorrecte: 1,
      explication: "Il pense à sa famille et à ceux qui l'aimaient avant son arrestation.",
    },
    {
      id: "djc-c39-q2",
      question: "Qu'imagine-t-il à leur sujet ?",
      choix: ["Leur joie", "Leur douleur lorsqu'ils apprendront sa mort", "Leur indifférence", "Leur colère contre lui"],
      reponseCorrecte: 1,
      explication: "Il imagine leur douleur lorsqu'ils apprendront sa mort.",
    },
    {
      id: "djc-c39-q3",
      question: "Que regrette-t-il ?",
      choix: ["De ne pas avoir d'argent à leur laisser", "De ne pas pouvoir leur faire ses adieux en personne", "De ne pas les avoir revus plus tôt", "De ne pas être marié"],
      reponseCorrecte: 1,
      explication: "Il regrette de ne pouvoir leur faire ses adieux en personne.",
    },
  ], // L'adieu à la famille
  40: [
    {
      id: "djc-c40-q1",
      question: "Que critique le condamné dans ce chapitre ?",
      choix: ["La cuisine de la prison", "La manière dont la société traite les condamnés à mort", "Le climat parisien", "Les gardiens uniquement"],
      reponseCorrecte: 1,
      explication: "Il élargit sa réflexion à la manière dont la société traite les condamnés à mort.",
    },
    {
      id: "djc-c40-q2",
      question: "Que rappelle-t-il derrière le mot « condamné » ?",
      choix: ["Qu'il n'y a rien à en dire", "Qu'il y a un homme complet, avec des sentiments et une famille", "Que c'est un simple numéro", "Que c'est une fonction administrative"],
      reponseCorrecte: 1,
      explication: "Derrière l'étiquette de « condamné », il y a un homme avec des sentiments, une famille, des souvenirs.",
    },
    {
      id: "djc-c40-q3",
      question: "Que prolonge cette réflexion ?",
      choix: ["Un simple regret personnel", "Le plaidoyer abolitionniste du roman", "Un débat sur la prison", "Un souvenir d'enfance"],
      reponseCorrecte: 1,
      explication: "Cette réflexion prolonge et généralise le plaidoyer abolitionniste du roman.",
    },
  ], // La critique de la société
  41: [
    {
      id: "djc-c41-q1",
      question: "Quelle pensée occupe de nouveau l'esprit du narrateur ?",
      choix: ["Son procès", "Sa fille", "Son avocat", "La Conciergerie"],
      reponseCorrecte: 1,
      explication: "La pensée de sa petite fille revient une fois de plus occuper son esprit.",
    },
    {
      id: "djc-c41-q2",
      question: "Que redoute-t-il à propos d'elle une fois orpheline ?",
      choix: ["Qu'elle devienne riche", "Qu'elle souffre sans comprendre pourquoi il n'est plus là", "Qu'elle l'oublie immédiatement", "Qu'elle quitte la France"],
      reponseCorrecte: 1,
      explication: "Il craint qu'elle souffre de son absence sans même en comprendre la raison.",
    },
    {
      id: "djc-c41-q3",
      question: "Comment cette douleur paternelle se compare-t-elle à sa peur de mourir ?",
      choix: ["Elle est moins forte", "Elle devient presque plus vive que la peur de sa propre mort", "Elle n'existe pas", "Elle disparaît totalement"],
      reponseCorrecte: 1,
      explication: "Cette douleur devient presque plus vive que la peur de sa propre mort.",
    },
  ], // La douleur paternelle
  42: [
    {
      id: "djc-c42-q1",
      question: "De quoi le condamné prend-il pleinement conscience dans ce chapitre ?",
      choix: ["Qu'il va être gracié", "Qu'il vit désormais sa toute dernière journée", "Qu'il rêve", "Qu'il est déjà mort"],
      reponseCorrecte: 1,
      explication: "Le condamné prend pleinement conscience qu'il vit désormais sa toute dernière journée.",
    },
    {
      id: "djc-c42-q2",
      question: "Comment observe-t-il son environnement ?",
      choix: ["Sans y prêter attention", "Avec une attention presque douloureuse, comme si tout était pour la dernière fois", "Avec ennui", "Avec colère"],
      reponseCorrecte: 1,
      explication: "Il observe chaque détail de son environnement avec une attention presque douloureuse.",
    },
    {
      id: "djc-c42-q3",
      question: "Qu'est-ce que cette conscience aiguë transforme ?",
      choix: ["Rien du tout", "Les objets les plus ordinaires en présences chargées de sens", "Sa cellule en salle de classe", "Le temps en illusion"],
      reponseCorrecte: 1,
      explication: "Cette conscience aiguë de la finitude transforme les objets les plus ordinaires en présences chargées de sens.",
    },
  ], // La dernière journée
  43: [
    {
      id: "djc-c43-q1",
      question: "Qui rend visite au condamné, accompagnée de sa mère, dans ce chapitre ?",
      choix: ["Une amie", "Sa fille", "Une religieuse", "Une inconnue"],
      reponseCorrecte: 1,
      explication: "Sa fille lui rend enfin visite, accompagnée de sa mère.",
    },
    {
      id: "djc-c43-q2",
      question: "Que voudrait pouvoir faire le condamné pendant cette visite ?",
      choix: ["Partir avec elle", "Arrêter le temps pour en profiter pleinement", "Écrire une lettre", "Dormir"],
      reponseCorrecte: 1,
      explication: "Il voudrait pouvoir arrêter le temps pour en profiter pleinement.",
    },
    {
      id: "djc-c43-q3",
      question: "Pourquoi cette scène est-elle particulièrement douloureuse ?",
      choix: ["Parce que la fille pleure sans cesse", "Parce qu'elle est trop jeune pour comprendre la gravité de la situation", "Parce qu'elle refuse de venir", "Parce qu'elle accuse son père"],
      reponseCorrecte: 1,
      explication: "L'enfant, encore trop jeune, ne comprend pas véritablement la gravité de la situation.",
    },
  ], // La visite de sa fille
  44: [
    {
      id: "djc-c44-q1",
      question: "Que voudrait faire comprendre le narrateur à sa fille dans ce chapitre ?",
      choix: ["Qu'il l'aime et qu'il va mourir", "Qu'il reviendra bientôt", "Qu'elle doit partir à l'étranger", "Qu'il est innocent"],
      reponseCorrecte: 0,
      explication: "Il voudrait lui faire comprendre qu'il va mourir et qu'il l'aime profondément.",
    },
    {
      id: "djc-c44-q2",
      question: "Pourquoi n'y parvient-il pas vraiment ?",
      choix: ["Elle ne l'écoute pas", "Il ne trouve pas les mots, ou elle ne peut les saisir", "Elle s'endort", "Un gardien les interrompt"],
      reponseCorrecte: 1,
      explication: "Il ne trouve pas les mots, ou l'enfant ne peut les saisir.",
    },
    {
      id: "djc-c44-q3",
      question: "Qu'illustre l'écart entre l'innocence de la fillette et la gravité du moment ?",
      choix: ["Le comique de la scène", "Le caractère déchirant de la scène", "L'indifférence du père", "La froideur de la mère"],
      reponseCorrecte: 1,
      explication: "L'écart entre l'innocence de l'enfant et la gravité de ce qui se joue rend la scène déchirante.",
    },
  ], // L'émotion des adieux
  45: [
    {
      id: "djc-c45-q1",
      question: "Que traduisent les paroles prononcées par la petite fille ?",
      choix: ["Une grande maturité", "Une innocence totale", "De la colère", "De la peur"],
      reponseCorrecte: 1,
      explication: "La petite fille prononce, sans le savoir, des paroles pleines d'innocence.",
    },
    {
      id: "djc-c45-q2",
      question: "Pour elle, qu'est-ce que son père ?",
      choix: ["Un étranger", "Simplement son père, sans plus", "Un héros", "Un inconnu dangereux"],
      reponseCorrecte: 1,
      explication: "Pour elle, son père est simplement son père.",
    },
    {
      id: "djc-c45-q3",
      question: "De quoi souffre le condamné en la regardant ?",
      choix: ["De son silence", "De savoir qu'elle ignore qu'il s'agit sans doute de leur dernière rencontre", "De sa désobéissance", "De son absence d'affection"],
      reponseCorrecte: 1,
      explication: "Il souffre terriblement de constater qu'elle ignore que c'est sans doute leur dernière rencontre.",
    },
  ], // L'innocence de l'enfant
  46: [
    {
      id: "djc-c46-q1",
      question: "Dans quel état sombre le narrateur après le départ de sa fille ?",
      choix: ["Le soulagement", "Un désespoir plus profond", "La joie", "L'indifférence"],
      reponseCorrecte: 1,
      explication: "Après le départ de sa fille, il sombre dans un désespoir plus profond encore.",
    },
    {
      id: "djc-c46-q2",
      question: "Qu'a ravivé cette visite chez lui ?",
      choix: ["Son envie de fuir", "Son amour pour les siens et sa peur de la séparation définitive", "Sa colère contre la justice uniquement", "Son indifférence à la mort"],
      reponseCorrecte: 1,
      explication: "Cette visite a ravivé tout son amour pour les siens, et sa peur de la séparation définitive.",
    },
    {
      id: "djc-c46-q3",
      question: "Que regrette-t-il particulièrement ?",
      choix: ["De ne pas avoir d'argent", "De ne pas pouvoir accompagner sa fille dans le reste de sa vie", "De ne pas être né ailleurs", "De ne pas connaître le bourreau"],
      reponseCorrecte: 1,
      explication: "Il regrette amèrement de ne pouvoir accompagner sa fille dans le reste de sa vie.",
    },
  ], // Le désespoir après la visite
  47: [
    {
      id: "djc-c47-q1",
      question: "Que commence à faire le narrateur dans ce chapitre ?",
      choix: ["Prier en silence", "Consigner par écrit ses toutes dernières pensées", "Dormir profondément", "Refuser de parler"],
      reponseCorrecte: 1,
      explication: "Il commence à consigner par écrit ses toutes dernières pensées.",
    },
    {
      id: "djc-c47-q2",
      question: "Que souhaite-t-il que son récit permette ?",
      choix: ["De divertir le lecteur", "De faire comprendre la souffrance réelle d'un condamné à mort", "De vendre des livres", "De se venger de la justice"],
      reponseCorrecte: 1,
      explication: "Il souhaite que le récit de ce qu'il a vécu permette de comprendre cette souffrance.",
    },
    {
      id: "djc-c47-q3",
      question: "Que devient son journal ?",
      choix: ["Un simple carnet privé", "Un message adressé, par-delà sa mort, à la société tout entière", "Une lettre d'amour uniquement", "Un texte religieux"],
      reponseCorrecte: 1,
      explication: "Son journal devient explicitement un message adressé à la société tout entière.",
    },
  ], // Le dernier témoignage
  48: [
    {
      id: "djc-c48-q1",
      question: "Comment le moment de l'exécution se rapproche-t-il dans ce chapitre ?",
      choix: ["Il s'éloigne au contraire", "De façon très concrète : il entend les derniers préparatifs", "Il est annulé", "Il reste incertain"],
      reponseCorrecte: 1,
      explication: "Le moment de l'exécution se rapproche désormais très concrètement : il entend les derniers préparatifs.",
    },
    {
      id: "djc-c48-q2",
      question: "Que comprend le condamné à ce stade ?",
      choix: ["Qu'il va être gracié", "Qu'il ne peut plus espérer longtemps", "Que sa fille viendra le sauver", "Que le procès reprend"],
      reponseCorrecte: 1,
      explication: "Il comprend qu'il ne peut plus espérer longtemps.",
    },
    {
      id: "djc-c48-q3",
      question: "Que voudrait-il encore ?",
      choix: ["De l'argent", "Quelques instants de plus, ou revoir sa fille une dernière fois", "Un dernier repas somptueux", "Rencontrer le roi"],
      reponseCorrecte: 1,
      explication: "Il voudrait encore quelques minutes, ou la possibilité de revoir sa fille une dernière fois.",
    },
  ], // L'approche de l'exécution
  49: [
    {
      id: "djc-c49-q1",
      question: "Vers quoi le condamné est-il conduit dans ce dernier chapitre ?",
      choix: ["Vers sa cellule", "Vers l'échafaud", "Vers le tribunal", "Vers la maison de sa fille"],
      reponseCorrecte: 1,
      explication: "Il est conduit vers l'échafaud, sa mort désormais inévitable.",
    },
    {
      id: "djc-c49-q2",
      question: "À qui pense-t-il une dernière fois ?",
      choix: ["À ses geôliers", "À sa fille, espérant qu'elle se souvienne de lui", "Au bourreau", "Au prêtre"],
      reponseCorrecte: 1,
      explication: "Il pense une dernière fois à sa fille, espérant qu'elle se souvienne de lui.",
    },
    {
      id: "djc-c49-q3",
      question: "Comment le récit se termine-t-il ?",
      choix: ["Par la description complète de l'exécution", "Il s'interrompt brutalement, sans jamais représenter l'exécution directement", "Par un épilogue heureux", "Par une lettre de grâce"],
      reponseCorrecte: 1,
      explication: "Le récit s'interrompt brutalement, sans jamais représenter directement l'exécution.",
    },
  ], // Les derniers instants
};
