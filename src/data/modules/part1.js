export const modules = [
  {
    id: 'introduction',
    emoji: '🚀',
    title: 'Introduction & setup',
    description:
      'Comprendre ce qu\u2019est JavaScript, comment l\u2019exécuter et afficher vos premières sorties.',
    estimatedTime: '30 min',
    lessons: [
      {
        id: 'intro-js',
        title: 'Qu\u2019est-ce que JavaScript ?',
        objectifs: [
          'Comprendre le rôle de JavaScript dans une page web.',
          'Distinguer HTML, CSS et JavaScript.',
          'Afficher une première sortie avec `console.log`.',
        ],
        blocks: [
          {
            type: 'text',
            text: 'JavaScript (souvent abrégé **JS**) est le langage de programmation du web. Avec **HTML** (la structure) et **CSS** (le style), il apporte **l\u2019interactivité** : clics, animations, formulaires, jeux\u2026',
          },
          {
            type: 'list',
            title: 'Les 3 langages du navigateur',
            items: [
              '**HTML** : la structure de la page (titres, paragraphes, boutons).',
              '**CSS** : l\u2019apparence (couleurs, tailles, mise en page).',
              '**JavaScript** : le comportement (réagir, calculer, modifier la page).',
            ],
          },
          {
            type: 'code',
            title: "Où s'exécute JavaScript ?",
            code: `// 1. Dans le navigateur (pages web)
console.log('Dans le navigateur')

// 2. Côté serveur, avec Node.js
console.log('Avec Node.js')`,
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'Bon à savoir : c\u2019est le seul langage compris nativement par tous les navigateurs. Rien à installer pour commencer !',
          },
          {
            type: 'code',
            title: 'exemple.js — le fichier déjà présent dans ce projet',
            code: `let x = 78
let y = '45'
console.log(x + y)`,
          },
          {
            type: 'text',
            text: 'Ce petit programme sera notre fil rouge : que pensez-vous qu\u2019il affiche ? On le découvrira dans le module sur les opérateurs.',
          },
        ],
        pieges: [
          'Confondre **JavaScript** et **Java** : deux langages totalement différents.',
          'Croire qu\u2019il faut installer un logiciel : la console du navigateur suffit pour débuter.',
          'Oublier les parenthèses de `console.log` : `console.log("salut")` et non `console.log "salut"`.',
        ],
        playground: {
          title: 'Testez votre premier code',
          code: `console.log('Bonjour JavaScript !')
console.log(2 + 3)`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Afficher un message',
            instructions: 'Affichez le message **« Bonjour, monde ! »** avec `console.log`.',
            starter: `console.log('Je suis prêt')`,
            expected: ['Bonjour, monde !'],
            solution: `console.log('Bonjour, monde !')`,
          },
          {
            niveau: 'Moyen',
            title: 'Deux messages',
            instructions: 'Affichez **« JavaScript »** puis **« est génial »** sur deux lignes.',
            starter: `// Premier message`,
            expected: ['JavaScript', 'est génial'],
            solution: `console.log('JavaScript')
console.log('est génial')`,
          },
          {
            niveau: 'Avancé',
            title: 'Une phrase construite',
            instructions: 'Affichez **« 2 + 3 = 5 »** en laissant JavaScript calculer la somme dans le `console.log`.',
            starter: `// console.log('2 + 3 =', 2 + 3)`,
            expected: ['2 + 3 = 5'],
            solution: `console.log('2 + 3 =', 2 + 3)`,
          },
        ],
        recap: [
          'JavaScript apporte **l\u2019interactivité** aux pages web.',
          'HTML = structure, CSS = style, **JS = comportement**.',
          '`console.log(...)` affiche une valeur dans la console.',
        ],
        quiz: [
          {
            question: 'Quel langage apporte l\u2019interactivité dans une page web ?',
            options: ['HTML', 'CSS', 'JavaScript'],
            answer: 2,
            explanation: 'JavaScript est le langage qui rend la page interactive.',
          },
          {
            question: 'Que fait console.log(...) ?',
            options: [
              'Supprime du texte',
              'Affiche une valeur dans la console',
              'Déclare une variable',
            ],
            answer: 1,
            explanation:
              'console.log() affiche une valeur dans la console du navigateur, très utile pour déboguer.',
          },
          {
            question: 'Où s\u2019exécute JavaScript ?',
            options: [
              'Uniquement sur un serveur',
              'Dans le navigateur et avec Node.js',
              'Seulement dans les applications mobiles',
            ],
            answer: 1,
            explanation:
              'JavaScript tourne dans tous les navigateurs et côté serveur grâce à Node.js.',
          },
        ],
      },
      {
        id: 'intro-console',
        title: 'La console et les DevTools',
        objectifs: [
          'Ouvrir la console des DevTools (F12).',
          'Distinguer log, info, warn et error.',
          'Utiliser la console comme bac à sable.',
        ],
        blocks: [
          {
            type: 'text',
            text: 'La **console** est un outil intégré à tous les navigateurs. C\u2019est ici que les résultats de `console.log()` s\u2019affichent.',
          },
          {
            type: 'list',
            title: 'Comment l\u2019ouvrir (touche F12)',
            items: [
              '**Chrome / Edge** : touche F12 puis onglet « Console »,',
              '**Firefox** : F12 ou Clic droit → « Inspecter »,',
              'Vous pouvez aussi tester du code directement dans la console.',
            ],
          },
          {
            type: 'code',
            title: 'Les différents niveaux',
            code: `console.log('Message classique')
console.info('Information')
console.warn('Attention')
console.error('Erreur !')`,
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Les erreurs s\u2019affichent en **rouge** avec le numéro de la ligne fautive. Ne les ignorez pas : elles révèlent souvent directement le bug.',
          },
        ],
        pieges: [
          'Taper du code directement dans la console **ne le sauvegarde pas** : c\u2019est un test en direct.',
          'Ignorer les erreurs rouges : elles contiennent la **ligne** du problème.',
        ],
        playground: {
          title: 'Un terrain de jeu',
          code: `const prenom = 'Awa'
console.log('Salut', prenom)
console.log(3 * 7)`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Salut la console',
            instructions: 'Affichez **« Salut la console ! »** dans la console.',
            starter: `// Complétez`,
            expected: ['Salut la console !'],
            solution: `console.log('Salut la console !')`,
          },
          {
            niveau: 'Moyen',
            title: 'Une variable, une valeur',
            instructions: "Déclarez `x` = **7**, puis affichez **« Valeur : 7 »** avec `console.log('Valeur :', x)`.",
            starter: `const x = 7
console.log('Valeur :', x)`,
            expected: ['Valeur : 7'],
            solution: `const x = 7
console.log('Valeur :', x)`,
          },
          {
            niveau: 'Avancé',
            title: 'Un calcul dans le message',
            instructions: 'Affichez **« Résultat : 42 »** en calculant `6 * 7` directement dans le `console.log`.',
            starter: `console.log('Résultat :', 6 * 6)`,
            expected: ['Résultat : 42'],
            solution: `console.log('Résultat :', 6 * 7)`,
          },
        ],
        recap: [
          'F12 ouvre les DevTools ; l\u2019onglet **Console** affiche vos messages.',
          '`console.warn` et `console.error` colorent les sorties (jaune/rouge).',
          'Vous pouvez taper du code dans la console pour tester rapidement.',
        ],
        quiz: [
          {
            question: 'Comment ouvrir la console dans chrome/Edge ?',
            options: ['Touche F5', 'Touche F12', 'ALT + F4'],
            answer: 1,
            explanation: 'F12 ouvre les DevTools ; l\u2019onglet Console y affiche les messages.',
          },
          {
            question: 'Quelle sortie est affichée en rouge ?',
            options: ['console.log', 'console.warn', 'console.error'],
            answer: 2,
            explanation: 'console.error affiche le message en rouge.',
          },
          {
            question: 'Dans la console, taper du code\u2026',
            options: [
              'Le sauvegarde dans un fichier',
              'L\u2019exécute pour un test en direct',
              'Installe Node.js',
            ],
            answer: 1,
            explanation:
              'La console exécute du code vite fait : pratique pour tester, mais rien n\u2019est sauvegardé.',
          },
        ],
      },
    ],
  },
  {
    id: 'variables-types',
    emoji: '📦',
    title: 'Variables & Types',
    description:
      'Stocker des données avec let/const et découvrir les principaux types en JavaScript.',
    estimatedTime: '45 min',
    lessons: [
      {
        id: 'variables-let-const',
        title: 'Déclarer avec let et const',
        objectifs: [
          'Déclarer une variable avec `let` et `const`.',
          'Comprendre quand une valeur peut changer.',
          'Respecter les règles de nommage (camelCase).',
        ],
        blocks: [
          {
            type: 'text',
            text: 'Une **variable** est une « boîte » qui stocke une valeur. Depuis ES6, on la déclare avec **`let`** (valeur modifiable) ou **`const`** (constante).',
          },
          {
            type: 'code',
            title: 'let vs const',
            code: `let age = 25       // modifiable
age = 26           // OK

const prenom = 'Awa'
prenom = 'Moussa'  // ❌ Erreur : la constante ne change pas`,
          },
          {
            type: 'text',
            text: 'JavaScript suit la convention **camelCase** : la première lettre en minuscule, puis une majuscule à chaque mot (`nombreDeClics`).',
          },
          {
            type: 'code',
            title: 'Exemples de nommage',
            code: `const nomComplet = 'Awa Diop'
let nombreDeClics = 0
const anneeDeNaissance = 2000

// Invalides :
// let mon-nom    (tiret interdit)
// let 1jour      (chiffre en tête interdit)
// let class      (mot réservé)`,
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Règle d\u2019or : utilisez `const` par défaut, et `let` seulement si la valeur doit changer. Évitez `var` (ancien comportement).',
          },
        ],
        pieges: [
          'Utiliser **`var`** par habitude : en JS moderne on privilégie `let`/`const`.',
          'Nommer en `kebab-case` (`mon-nom`) : invalide !',
          'Réassigner une **`const`** : cela lève une `TypeError`.',
        ],
        playground: {
          title: 'Manipulez vos variables',
          code: `const prenom = 'Moussa'
let age = 24
console.log(prenom, age)
age = 25
console.log('Nouvel âge :', age)`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Une constante',
            instructions: 'Déclarez une constante `pays` valant **« Sénégal »**, puis affichez-la.',
            starter: `// const pays = ...
console.log(pays)`,
            expected: ['Sénégal'],
            solution: `const pays = 'Sénégal'
console.log(pays)`,
          },
          {
            niveau: 'Moyen',
            title: 'Déclarer et afficher',
            instructions: 'Déclarez `ville` = **« Dakar »** (const) et `habitants` = **1000000** (let), puis affichez-les avec un espace.',
            starter: `// Déclarez vos variables ici`,
            expected: ['Dakar 1000000'],
            solution: `const ville = 'Dakar'
let habitants = 1000000
console.log(ville, habitants)`,
          },
          {
            niveau: 'Avancé',
            title: 'Un compteur',
            instructions: 'Déclarez `compteur` = **0** avec `let`, augmentez-le de **1** deux fois (`compteur = compteur + 1`), puis affichez-le.',
            starter: `let compteur = 0
compteur = compteur + 1
compteur = compteur + 1
console.log(compteur)`,
            expected: ['2'],
            solution: `let compteur = 0
compteur = compteur + 1
compteur = compteur + 1
console.log(compteur)`,
          },
        ],
        recap: [
          '`let` = valeur **modifiable** ; `const` = valeur **immuable**.',
          'Privilégiez **`const`** par défaut.',
          'Noms en **camelCase**, sans tirets ni espaces.',
        ],
        quiz: [
          {
            question: 'Quelle syntaxe déclare une constante ?',
            options: ['let', 'const', 'var'],
            answer: 1,
            explanation: 'const déclare une constante dont la valeur ne peut pas être réassignée.',
          },
          {
            question: 'Pouvez-vous réassigner une variable const ?',
            options: ['Oui', 'Non, cela provoque une erreur', 'Seulement dans les fonctions'],
            answer: 1,
            explanation: 'Réassigner une variable const lève une erreur (TypeError).',
          },
          {
            question: 'Quel nom de variable est valide ?',
            options: ['ma-variable', 'maVariable', 'ma variable'],
            answer: 1,
            explanation: 'Le tiret, l\u2019espace et les chiffres en tête sont interdits.',
          },
        ],
      },
      {
        id: 'types-donnees',
        title: 'Les types de données',
        objectifs: [
          'Connaître les types primitifs (number, string, boolean\u2026).',
          'Utiliser `typeof` pour inspecter une valeur.',
          'Distinguer `null` et `undefined`.',
        ],
        blocks: [
          {
            type: 'text',
            text: 'Chaque valeur a un **type**. En JavaScript, les principaux sont les suivants :',
          },
          {
            type: 'code',
            title: 'Les types primitifs',
            code: `const note = 16.5          // number (nombre)
const nom = 'Awa'           // string (texte)
const actif = true          // boolean (booléen)
const rien = null           // null (vide volontairement)
const inconnu = undefined   // undefined (non défini)

console.log(typeof note)    // "number"
console.log(typeof nom)     // "string"
console.log(typeof actif)   // "boolean"`,
          },
          {
            type: 'code',
            title: 'Un nombre un peu spécial : NaN',
            code: `console.log('abc' * 2)     // NaN (Not a Number)
console.log(typeof NaN)     // "number" ?!
console.log(10 / 0)         // Infinity`,
          },
          {
            type: 'list',
            title: 'À retenir',
            items: [
              'Les textes s\u2019écrivent entre guillemets simples, doubles ou backticks (**`string`**).',
              '`null` : absence volontaire de valeur. `undefined` : variable non initialisée.',
              'L\u2019opérateur **`typeof`** indique le type d\u2019une valeur.',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            text: 'Piège classique : `typeof null` renvoie "object", un vieux bug historique du langage. À connaître, mais pas à retenir comme vérité logique.',
          },
        ],
        pieges: [
          'Croire que `typeof null` vaut "null" : c\u2019est "object" (bug historique).',
          'Confondre **`null`** (vide **voulu**) et **`undefined`** (pas encore défini).',
          'Oublier que **`NaN`** existe : c\u2019est le résultat des conversions impossibles.',
        ],
        playground: {
          title: 'Inspectez les types',
          code: `console.log(typeof 42)
console.log(typeof '42')
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Le type d\u2019un texte',
            instructions: 'Affichez le type de **« Awa »** avec `typeof` (attendu : "string").',
            starter: `console.log(typeof 'Awa')`,
            expected: ['string'],
            solution: `console.log(typeof 'Awa')`,
          },
          {
            niveau: 'Moyen',
            title: 'Durée du jour',
            instructions: 'Déclarez `duree` de type **string** valant **« vingt-quatre »** et `heures` de type **number** valant **24**. Affichez `heures` (attendu : 24).',
            starter: `// Vos variables`,
            expected: ['24'],
            solution: `const duree = 'vingt-quatre'
const heures = 24
console.log(heures)`,
          },
          {
            niveau: 'Avancé',
            title: 'Le type d\u2019une comparaison',
            instructions: 'Une comparaison comme `10 > 3` renvoie un booléen. Affichez son **type** avec `typeof`.',
            starter: `// console.log(typeof (10 > 3))`,
            expected: ['boolean'],
            solution: `console.log(typeof (10 > 3))`,
          },
        ],
        recap: [
          'Les types primitifs : `number`, `string`, `boolean`, `null`, `undefined`.',
          '`typeof valeur` renvoie le type sous forme de chaîne.',
          '`undefined` ≠ `null` : l\u2019un est « pas défini », l\u2019autre « vide volontairement ».',
        ],
        quiz: [
          {
            question: 'Quel est le type de la valeur `true` ?',
            options: ['string', 'boolean', 'number'],
            answer: 1,
            explanation: 'true et false constituent le type boolean.',
          },
          {
            question: 'Que renvoie `typeof "bonjour"` ?',
            options: ['"string"', '"text"', '"bonjour"'],
            answer: 0,
            explanation: 'Les chaînes de caractères sont de type string.',
          },
          {
            question: 'Que renvoie `typeof NaN` ?',
            options: ['"NaN"', '"error"', '"number"'],
            answer: 2,
            explanation: 'NaN est un nombre spécial : typeof renvoie bien "number".',
          },
        ],
      },
    ],
  },
  {
    id: 'operateurs',
    emoji: '➕',
    title: 'Opérateurs & coercition',
    description: 'Calculer, comparer et comprendre le fameux piège 78 + \u201845\u2019 = \u20187845\u2019.',
    estimatedTime: '45 min',
    lessons: [
      {
        id: 'operateurs-arithmetiques',
        title: 'Les opérateurs arithmétiques',
        objectifs: [
          'Utiliser les 6 opérateurs arithmétiques.',
          'Comprendre les priorités de calcul.',
          'Appliquer le modulo et la puissance.',
        ],
        blocks: [
          {
            type: 'text',
            text: 'On fait des calculs avec JavaScript grâce aux **opérateurs arithmétiques**.',
          },
          {
            type: 'code',
            title: 'Les opérateurs de base',
            code: `console.log(10 + 5)    // 15  addition
console.log(10 - 5)    // 5   soustraction
console.log(10 * 5)    // 50  multiplication
console.log(10 / 4)    // 2.5 division
console.log(10 % 3)    // 1   reste (modulo)
console.log(2 ** 3)    // 8   puissance`,
          },
          {
            type: 'code',
            title: 'Les priorités',
            code: `// La multiplication passe avant l'addition
console.log(2 + 3 * 4)      // 14
console.log(2 + (3 * 4))    // 14 (même chose)

// Les parenthèses changent tout
console.log((2 + 3) * 4)    // 20`,
          },
          {
            type: 'callout',
            variant: 'info',
            text: '**Priorités** : comme en mathématiques, `**` puis `*` `/` `%` puis `+` `-`. Utilisez des parenthèses dès que le calcul devient complexe.',
          },
        ],
        pieges: [
          'Oublier les parenthèses : `2 + 3 * 4` vaut **14**, pas 20.',
          'Diviser par zéro : `10 / 0` donne **Infinity** (pas une erreur !).',
          'Confondre le modulo `%` avec un pourcentage.',
        ],
        playground: {
          title: 'Faites vos calculs',
          code: `console.log(50 + 30)
console.log(50 - 30)
console.log(7 * 6)
console.log(10 % 4)
console.log(2 + (3 * 4))`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Une petite addition',
            instructions: 'Affichez le résultat de **3 + 4**.',
            starter: `console.log(3 + 4)`,
            expected: ['7'],
            solution: `console.log(3 + 4)`,
          },
          {
            niveau: 'Moyen',
            title: 'Le prix total',
            instructions: 'Un article coûte 12 € et un autre 8 €. Affichez le **prix total**.',
            starter: `console.log(12 + 8)`,
            expected: ['20'],
            solution: `console.log(12 + 8)`,
          },
          {
            niveau: 'Avancé',
            title: 'Modulo et puissance',
            instructions: 'Affichez `10 % 3` puis `2 ** 3`, séparés par un espace (attendu : **1 8**).',
            starter: `console.log(10 % 3, 2 ** 3)`,
            expected: ['1 8'],
            solution: `console.log(10 % 3, 2 ** 3)`,
          },
        ],
        recap: [
          'Opérateurs : `+` `-` `*` `/` `%` (reste) et `**` (puissance).',
          'La multiplication/division est prioritaire sur l\u2019addition/soustraction.',
          '`10 / 0` renvoie `Infinity` : ce n\u2019est pas une erreur.',
        ],
        quiz: [
          {
            question: 'Que vaut `10 % 3` ?',
            options: ['3.33', '1', '3'],
            answer: 1,
            explanation: 'Le modulo renvoie le reste de la division : 10 ÷ 3 = 3, reste 1.',
          },
          {
            question: 'Que vaut `2 + 3 * 4` ?',
            options: ['20', '14', '24'],
            answer: 1,
            explanation: 'La multiplication est prioritaire : 3 * 4 = 12, puis 2 + 12 = 14.',
          },
          {
            question: 'Que vaut `2 ** 3` ?',
            options: ['6', '8', '9'],
            answer: 1,
            explanation: '** élève à la puissance : 2³ = 8.',
          },
        ],
      },
      {
        id: 'concanetation-coercition',
        title: 'Concaténation & coercition',
        objectifs: [
          'Expliquer le piège `78 + "45"` → "7845".',
          'Convertir une chaîne en nombre avec `Number()`.',
          'Anticiper les conversions automatiques de type.',
        ],
        blocks: [
          {
            type: 'text',
            text: "Voici notre fil rouge ! Que fait **`78 + '45'`** ? Rappel : `'45'` est un **texte** (string), pas un nombre.",
          },
          {
            type: 'code',
            title: 'L\u2019exemple du fichier exemple.js',
            code: `let x = 78          // number
let y = '45'        // string

console.log(x + y)  // "7845" ?

// + avec un string = concaténation
// 78 devient "78", puis "78" + "45" = "7845"`,
          },
          {
            type: 'callout',
            variant: 'warning',
            text: 'Quand un opérande est une chaîne, le **`+`** concatène au lieu d\u2019additionner. C\u2019est la **coercition implicite** de type : JavaScript convertit automatiquement les valeurs.',
          },
          {
            type: 'text',
            text: 'Copie : avec les autres opérateurs (`-`, `*`, `/`), JavaScript **force** la conversion en nombre. C\u2019est le fameux comportement « magique » du langage.',
          },
          {
            type: 'code',
            title: 'Comportements de conversion',
            code: `console.log('10' - 2)     // 8  (- force le nombre)
console.log('6' * '3')     // 18 (* force le nombre)
console.log(78 + Number('45'))   // 123 (conversion explicite)
console.log(Number('abc'))       // NaN (conversion impossible)`,
          },
          {
            type: 'list',
            title: 'À retenir',
            items: [
              '`+` entre string et nombre → **concaténation**.',
              '`Number(chaîne)` convertit explicitement un texte en nombre.',
              '`Number("abc")` → `NaN`, pas une erreur.',
            ],
          },
        ],
        pieges: [
          'Tester `5 == "5"` : c\u2019est `true`, extension de la coercition ! Préférez `===`.',
          'Croire que `"10" - 2` donnera NaN : en réalité c\u2019est **8**.',
          'Oublier de convertir les valeurs lues dans un `prompt()` ou un formulaire (toujours des strings).',
        ],
        playground: {
          title: 'Expérimentez la coercition',
          code: `console.log(78 + '45')
console.log(78 + Number('45'))
console.log('10' - 2)
console.log('6' * '3')`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Le + fait des mots',
            instructions: 'Affichez le résultat de `3 + "3"` (attendu : la chaîne "33", pas 6 !).',
            starter: `console.log(3 + '3')`,
            expected: ['33'],
            solution: `console.log(3 + '3')`,
          },
          {
            niveau: 'Moyen',
            title: 'Corrigez la somme',
            instructions: 'Convertissez `y` avec `Number(y)` puis affichez la **vraie somme** (attendu : 123).',
            starter: `let x = 78
let y = '45'
// console.log(x + Number(y))`,
            expected: ['123'],
            solution: `let x = 78
let y = '45'
console.log(x + Number(y))`,
          },
          {
            niveau: 'Avancé',
            title: 'Conversion express',
            instructions: "Affichez `'10' - 2` puis `Number('3') + 4`, séparés par un espace (attendu : **8 7**).",
            starter: `console.log('10' - 2, Number('3') + 4)`,
            expected: ['8 7'],
            solution: `console.log('10' - 2, Number('3') + 4)`,
          },
        ],
        recap: [
          '`+` avec une chaîne → **concaténation** ; `-` `*` `/` → conversion en nombre.',
          'Convertir explicitement avec **`Number(chaîne)`**.',
          'Une conversion impossible donne **`NaN`**, pas une erreur.',
        ],
        quiz: [
          {
            question: 'Que renvoie `console.log(2 + "3")` ?',
            options: ['5', '"23"', 'Une erreur'],
            answer: 1,
            explanation: 'Avec un string, le + concatène : 2 devient "2", puis "2"+"3" = "23".',
          },
          {
            question: 'Comment convertir `"45"` en nombre ?',
            options: ['parseString("45")', 'Number("45")', 'toNumber("45")'],
            answer: 1,
            explanation: 'Number("45") renvoie le nombre 45.',
          },
          {
            question: 'Que renvoie `Number("12.5")` ?',
            options: ['12', '12.5', 'NaN'],
            answer: 1,
            explanation: 'Number gère les décimales : "12.5" devient 12.5.',
          },
        ],
      },
    ],
  },
  {
    id: 'conditions',
    emoji: '🔀',
    title: 'Les conditions',
    description: 'Piloter le flux du programme avec if/else, le ternaire et la notion de truthy/falsy.',
    estimatedTime: '1 h',
    lessons: [
      {
        id: 'conditions-if',
        title: 'Si / Sinon',
        objectifs: [
          'Écrire une structure `if / else`.',
          'Chaîner plusieurs cas avec `else if`.',
          'Comparer avec `===`, `>=`, `<=`\u2026',
        ],
        blocks: [
          {
            type: 'text',
            text: 'Un programme fait souvent des **choix**. La structure `if / else if / else` exécute un bloc selon qu\u2019une condition est vraie ou fausse.',
          },
          {
            type: 'code',
            title: 'if / else',
            code: `const note = 12

if (note >= 10) {
  console.log('Réussi ✅')
} else {
  console.log('Échoué ❌')
}`,
          },
          {
            type: 'code',
            title: 'if / else if / else',
            code: `const meteo = 'pluie'

if (meteo === 'soleil') {
  console.log('Mettez des lunettes')
} else if (meteo === 'pluie') {
  console.log('Prenez un parapluie')
} else {
  console.log('Profitez de la journée')
}`,
          },
          {
            type: 'list',
            title: 'À retenir',
            items: [
              'La condition se place entre parenthèses `( )`.',
              'Le bloc de code se place entre accolades `{ }`.',
              'On compare avec `===` (égalité stricte) et `!==` (inégalité).',
              '`>` `<` `>=` `<=` pour les comparaisons de grandeur.',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            text: 'Préférez toujours **`===`** à `==` : `==` compare en convertissant les types (coercition), ce qui crée des surprises comme `1 == "1"` → true.',
          },
        ],
        pieges: [
          'Écrire `if (note = 10)` avec un simple **`=`** : cela **affecte** la valeur au lieu de comparer (le test passera toujours).',
          'Oublier les `else` dans les chaînes : plusieurs branches peuvent sauter.',
          'Confondre `=` (affectation), `==` (égalité faible) et `===` (égalité stricte).',
        ],
        playground: {
          title: 'Testez des conditions',
          code: `const age = 17
if (age >= 18) {
  console.log('Majeur')
} else {
  console.log('Mineur')
}`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Réussi ou échoué',
            instructions: 'Avec `note` = **14**, affichez **« Réussi »** si `note >= 10`, sinon **« Échoué »**.',
            starter: `const note = 14
// Complétez`,
            expected: ['Réussi'],
            solution: `const note = 14
if (note >= 10) {
  console.log('Réussi')
} else {
  console.log('Échoué')
}`,
          },
          {
            niveau: 'Moyen',
            title: 'Matin ou soir',
            instructions: 'Avec `heure` = **20**, affichez **« Soirée »** si `heure >= 18`, sinon **« Journée »**.',
            starter: `const heure = 20
// if (heure >= 18) { ... } else { ... }`,
            expected: ['Soirée'],
            solution: `const heure = 20
if (heure >= 18) {
  console.log('Soirée')
} else {
  console.log('Journée')
}`,
          },
          {
            niveau: 'Avancé',
            title: 'Des mentions',
            instructions: 'avec `score` = **85** : affichez **« A »** si `>= 90`, **« B »** si `>= 80`, sinon **« C »**. Utilisez `else if`.',
            starter: `const score = 85
// if (score >= 90) { ... } else if (score >= 80) { ... } else { ... }`,
            expected: ['B'],
            solution: `const score = 85
if (score >= 90) {
  console.log('A')
} else if (score >= 80) {
  console.log('B')
} else {
  console.log('C')
}`,
          },
        ],
        recap: [
          '`if (condition) { ... } else { ... }` permet de choisir un chemin.',
          'On enchaîne les cas avec **`else if`**.',
          'Toujours comparer avec **`===`**, jamais avec un simple `=`.',
        ],
        quiz: [
          {
            question: 'Quel opérateur teste l\u2019égalité stricte ?',
            options: ['=', '==', '==='],
            answer: 2,
            explanation: '=== compare la valeur ET le type, sans conversion.',
          },
          {
            question: 'Que vaut `5 === "5"` ?',
            options: ['true', 'false', 'Une erreur'],
            answer: 1,
            explanation: '5 est un nombre, "5" est une chaîne : types différents, donc false.',
          },
          {
            question: 'Que fait `x = 10` ?',
            options: [
              'Compare x à 10',
              'Affecte 10 à x',
              'Incrmente x',
            ],
            answer: 1,
            explanation: 'Un seul = est une affectation, pas une comparaison.',
          },
        ],
      },
      {
        id: 'conditions-truthy',
        title: 'Truthy / falsy et le ternaire',
        objectifs: [
          'Lister les 6 valeurs falsy.',
          'Utiliser le ternaire `? :` pour des choix simples.',
          'Éviter les pièges des tableaux vides.',
        ],
        blocks: [
          {
            type: 'text',
            text: 'En JavaScript, toute valeur est **« truthy »** (considérée vraie) ou **« falsy »** (considérée fausse) dans une condition.',
          },
          {
            type: 'code',
            title: 'Les valeurs falsy (les 6 !)',
            code: `// false, 0, "" (chaîne vide), null, undefined, NaN
if (0)        console.log('jamais affiché')
if ('')       console.log('jamais affiché')
if (null)     console.log('jamais affiché')

// Tout le reste est truthy :
if ('0')     console.log('"0" est truthy !')
if ([])      console.log('[] est truthy !')
if ({})      console.log('{} est truthy !')`,
          },
          {
            type: 'text',
            text: 'Le **ternaire** est une version courte de if/else, parfait pour affecter une valeur : `condition ? valeurSiVrai : valeurSiFaux`.',
          },
          {
            type: 'code',
            title: 'Le ternaire',
            code: `const age = 21
const statut = age >= 18 ? 'Majeur' : 'Mineur'
console.log(statut)   // "Majeur"`,
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Utilisez le ternaire pour des choix simples sur **une seule valeur**. Pour plusieurs instructions, restez sur if/else : c\u2019est plus lisible.',
          },
        ],
        pieges: [
          'Croire que `[]` (tableau vide) est falsy : il est **truthy** !',
          'Enchaîner les ternaires imbriqués : illisible, préférez `if`.',
          'Oublier que `"0"` (chaîne zéro) est truthy alors que `0` est falsy.',
        ],
        playground: {
          title: 'Truthy et ternaire',
          code: `const nom = ''
if (nom) {
  console.log('Bonjour ' + nom)
} else {
  console.log('Nom inconnu')
}

const heures = 9
console.log(heures < 12 ? 'Matin' : 'Après-midi')`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Un ternaire malin',
            instructions: "Avec `age` = **18**, affichez `'Majeur'` si `age >= 18`, sinon `'Mineur'`, via un ternaire stocké dans `statut`.",
            starter: `const age = 18
const statut = age >= 18 ? 'Majeur' : 'Mineur'
console.log(statut)`,
            expected: ['Majeur'],
            solution: `const age = 18
const statut = age >= 18 ? 'Majeur' : 'Mineur'
console.log(statut)`,
          },
          {
            niveau: 'Moyen',
            title: 'Un nom ou l\u2019anonymat',
            instructions: "Avec `nom` = **''** (chaîne vide), utilisez le ternaire pour afficher **« Bonjour »** si `nom` est truthy, sinon **« Anonyme »**.",
            starter: `const nom = ''
console.log(nom ? 'Bonjour' : 'Anonyme')`,
            expected: ['Anonyme'],
            solution: `const nom = ''
console.log(nom ? 'Bonjour' : 'Anonyme')`,
          },
          {
            niveau: 'Avancé',
            title: 'Des mentions en ternaire',
            instructions: 'Avec `note` = **14**, affichez **« Excellent »** si `>= 16`, **« Bien »** si `>= 12`, sinon **« Assez bien »** (ternaires imbriqués).',
            starter: `const note = 14
console.log(note >= 16 ? 'Excellent' : note >= 12 ? 'Bien' : 'Assez bien')`,
            expected: ['Bien'],
            solution: `const note = 14
console.log(note >= 16 ? 'Excellent' : note >= 12 ? 'Bien' : 'Assez bien')`,
          },
        ],
        recap: [
          'Les 6 falsy : `false`, `0`, `""`, `null`, `undefined`, `NaN`.',
          'Tout le reste est **truthy** (y compris `[]` et `""` ouvert).',
          'Le ternaire `cond ? A : B` est idéal pour affecter une valeur.',
        ],
        quiz: [
          {
            question: 'Laquelle de ces valeurs est falsy ?',
            options: ['"false"', '0', '[]'],
            answer: 1,
            explanation: '0 est falsy. "false" est une chaîne non vide donc truthy, [] est truthy.',
          },
          {
            question: 'Que renvoie le ternaire `true ? "a" : "b"` ?',
            options: ['"a"', '"b"', 'Une erreur'],
            answer: 0,
            explanation: 'La condition est vraie : on prend la première valeur, "a".',
          },
          {
            question: 'Que vaut `Boolean("0")` ?',
            options: ['false', 'true', '0'],
            answer: 1,
            explanation: '"0" est une chaîne **non vide** : elle est truthy.',
          },
        ],
      },
    ],
  },
  {
    id: 'boucles',
    emoji: '🔁',
    title: 'Les boucles',
    description: 'Répéter du code avec for, while et for...of.',
    estimatedTime: '1 h',
    lessons: [
      {
        id: 'boucles-for',
        title: 'La boucle for',
        objectifs: [
          'Écrire une boucle `for` correcte.',
          'Compter à partir de 0.',
          'Éviter les boucles infinies.',
        ],
        blocks: [
          {
            type: 'text',
            text: 'La boucle **`for`** répète un bloc un nombre de fois connu. Elle a 3 parties : initialisation, condition, incrément.',
          },
          {
            type: 'code',
            title: 'Structure du for',
            code: `for (let i = 0; i < 5; i++) {
  console.log('Tour n°' + i)
}
// 0, 1, 2, 3, 4`,
          },
          {
            type: 'list',
            title: 'Anatomie',
            items: [
              '`let i = 0` : on initialise un compteur **i**.',
              '`i < 5` : tant que c\u2019est vrai, on continue.',
              '`i++` : on augmente i de 1 après chaque tour.',
            ],
          },
          {
            type: 'code',
            title: 'Compter de 2 en 2 ou à l\u2019envers',
            code: `// De 2 en 2
for (let i = 0; i <= 10; i += 2) {
  console.log(i)
}

// À l'envers
for (let i = 5; i >= 1; i--) {
  console.log(i)
}`,
          },
          {
            type: 'callout',
            variant: 'warning',
            text: 'Oublier l\u2019incrément `i++` crée une **boucle infinie** qui gèle le navigateur. Toujours vérifier que la condition finira par devenir fausse.',
          },
        ],
        pieges: [
          'Oublier `i++` → **boucle infinie**.',
          'Utiliser `i <=` au lieu de `i <` : un tour de plus que prévu.',
          'Oublier que l\u2019index démarre à **0** (le 1er élément d\u2019un tableau est à l\u2019index 0).',
        ],
        playground: {
          title: 'Comptez avec for',
          code: `for (let i = 1; i <= 5; i++) {
  console.log(i)
}`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Compter 0, 1, 2',
            instructions: 'Une boucle `for` qui affiche 0, 1 et 2 sur trois lignes.',
            starter: `// for (let i = 0; i < 3; i++) { ... }`,
            expected: ['0', '1', '2'],
            solution: `for (let i = 0; i < 3; i++) {
  console.log(i)
}`,
          },
          {
            niveau: 'Moyen',
            title: 'La somme de 1 à 5',
            instructions: 'Additionnez les nombres de **1 à 5** dans `somme`, puis affichez `somme` (attendu : 15).',
            starter: `let somme = 0
// for (let i = 1; i <= 5; i++) { somme = somme + i }
console.log(somme)`,
            expected: ['15'],
            solution: `let somme = 0
for (let i = 1; i <= 5; i++) {
  somme = somme + i
}
console.log(somme)`,
          },
          {
            niveau: 'Avancé',
            title: 'Les nombres pairs',
            instructions: 'Affichez les nombres pairs de **2 à 6** en comptant de 2 en 2 (`i += 2`).',
            starter: `// for (let i = 2; i <= 6; i += 2) { ... }`,
            expected: ['2', '4', '6'],
            solution: `for (let i = 2; i <= 6; i += 2) {
  console.log(i)
}`,
          },
        ],
        recap: [
          '`for (init; condition; incrément)` répète un bloc.',
          'On compte généralement à partir de **0**.',
          'Sans incrément → boucle infinie.',
        ],
        quiz: [
          {
            question: 'Combien de tours fait `for (let i = 0; i < 3; i++)` ?',
            options: ['2', '3', '4'],
            answer: 1,
            explanation: 'i prend les valeurs 0, 1, 2 : trois tours.',
          },
          {
            question: 'Que fait `i++` ?',
            options: ['Augmente i de 1', 'Diminue i de 1', 'Réinitialise i'],
            answer: 0,
            explanation: 'i++ est un raccourci pour i = i + 1.',
          },
          {
            question: 'Que affiche `for (let i = 0; i <= 2; i++) console.log(i)` ?',
            options: ['0, 1', '0, 1, 2', '1, 2, 3'],
            answer: 1,
            explanation: '`<= 2` inclut la valeur 2 : 0, 1, 2.',
          },
        ],
      },
      {
        id: 'boucles-while-forof',
        title: 'while et for...of',
        objectifs: [
          'Écrire une boucle `while` conditionnelle.',
          'Parcourir un tableau avec `for...of`.',
          'Choisir la bonne boucle selon le contexte.',
        ],
        blocks: [
          {
            type: 'text',
            text: '**`while`** répète tant qu\u2019une condition est vraie (utile quand on ne connaît pas le nombre de tours à l\u2019avance). **`for...of`** parcourt les éléments d\u2019une liste.',
          },
          {
            type: 'code',
            title: 'while — tant que',
            code: `let compteur = 0
while (compteur < 3) {
  console.log('Tic', compteur)
  compteur++
}`,
          },
          {
            type: 'code',
            title: 'for...of — parcourir une liste',
            code: `const fruits = ['mangue', 'orange', 'banane']
for (const fruit of fruits) {
  console.log(fruit)
}`,
          },
          {
            type: 'callout',
            variant: 'info',
            text: '**`for (const x of liste)`** est la façon moderne de parcourir un tableau. Notez la variable **`const`** : chaque tour crée une nouvelle valeur.',
          },
        ],
        pieges: [
          '`while` sans modification de la condition → **boucle infinie**.',
          'Modifier le tableau pendant un `for...of` → résultats imprévus.',
          'Chercher un index avec `for...of` : il n\u2019en fournit pas (utilisez une boucle classique).',
        ],
        playground: {
          title: 'Deux façons de boucler',
          code: `let min = 1
while (min <= 3) {
  console.log('Minute', min)
  min++
}

const langages = ['JS', 'Python', 'Java']
for (const langage of langages) {
  console.log("J'apprends", langage)
}`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Compte à rebours',
            instructions: 'Une boucle `while` qui affiche **3, 2, 1** en décrémentant `n` (`n = n - 1`).',
            starter: `let n = 3
// while (n > 0) { ... }
console.log(n)`,
            expected: ['3', '2', '1'],
            solution: `let n = 3
while (n > 0) {
  console.log(n)
  n = n - 1
}`,
          },
          {
            niveau: 'Moyen',
            title: 'Énumérer des couleurs',
            instructions: 'Affichez chaque couleur du tableau **[« rouge », « bleu »]** avec `for...of`.',
            starter: `const couleurs = ['rouge', 'bleu']
// for (const couleur of couleurs) { ... }`,
            expected: ['rouge', 'bleu'],
            solution: `const couleurs = ['rouge', 'bleu']
for (const couleur of couleurs) {
  console.log(couleur)
}`,
          },
          {
            niveau: 'Avancé',
            title: 'Des villes en template',
            instructions: "Affichez **« Ville : Dakar »** et **« Ville : Thiès »** en parcourant `['Dakar', 'Thiès']` avec `for...of` et un template literal.",
            starter: `const villes = ['Dakar', 'Thiès']
// for (const ville of villes) { console.log(\`Ville : \${ville}\`) }`,
            expected: ['Ville : Dakar', 'Ville : Thiès'],
            solution: `const villes = ['Dakar', 'Thiès']
for (const ville of villes) {
  console.log(\`Ville : \${ville}\`)
}`,
          },
        ],
        recap: [
          '`while` répète tant que la condition est vraie.',
          '`for...of` parcourt les éléments d\u2019un tableau.',
          'Toujours faire évoluer la variable testée dans `while`.',
        ],
        quiz: [
          {
            question: 'Quelle boucle parcourt les éléments d\u2019un tableau ?',
            options: ['for...of', 'do...while', 'for...on'],
            answer: 0,
            explanation: 'for...of parcourt directement chaque élément.',
          },
          {
            question: 'Quand utiliser `while` plutôt que `for` ?',
            options: [
              'Toujours, c\u2019est plus rapide',
              'Quand le nombre de tours n\u2019est pas connu à l\u2019avance',
              'On ne doit jamais utiliser while',
            ],
            answer: 1,
            explanation: 'while convient quand l\u2019arrêt dépend d\u2019une condition qui évolue.',
          },
          {
            question: 'Dans `while (x < 5)`, que faut-il modifier dans le bloc ?',
            options: ['x', 'console.log', 'La condition'],
            answer: 0,
            explanation: 'Il faut faire évoluer x (ex: x++) sinon la boucle est infinie.',
          },
        ],
      },
    ],
  },
]