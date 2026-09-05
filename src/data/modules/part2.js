export const modules = [
  {
    id: 'fonctions',
    emoji: '🧩',
    title: 'Les fonctions',
    description:
      'Isoler des blocs de code réutilisables avec les fonctions classiques et fléchées.',
    estimatedTime: '1 h 15 min',
    lessons: [
      {
        id: 'fonctions-declaration',
        title: 'Déclarer et appeler',
        objectifs: [
          'Déclarer une fonction avec `function`.',
          'Un paramètre, une valeur de retour.',
          'Appeler une fonction avec des parenthèses.',
        ],
        blocks: [
          {
            type: 'text',
            text: 'Une **fonction** est un bloc de code **réutilisable** : on le définit une fois, on l\u2019**appelle** autant de fois que besoin.',
          },
          {
            type: 'code',
            title: 'Déclaration et appel',
            code: `// Déclaration
function direBonjour() {
  console.log('Bonjour !')
}

// Appel : n'oubliez pas les ( )
direBonjour()
direBonjour()`,
          },
          {
            type: 'code',
            title: 'Paramètres et retour',
            code: `function doubler(n) {
  return n * 2
}

const resultat = doubler(5)
console.log(resultat)   // 10
console.log(doubler(7)) // 14`,
          },
          {
            type: 'list',
            title: 'À retenir',
            items: [
              '`return` renvoie une valeur vers l\u2019appelant.',
              'Sans `return`, la fonction renvoie **`undefined`**.',
              'Appeler = écrire `nomFonction()` avec les parenthèses.',
            ],
          },
          {
            type: 'code',
            title: 'Un même code, plusieurs résultats',
            code: `function prixTTC(prixHT) {
  const remise = prixHT * 0.1
  return prixHT - remise
}

console.log(prixTTC(100)) // 90
console.log(prixTTC(50))  // 45`,
          },
        ],
        pieges: [
          'Oublier les parenthèses d\u2019appel : on passe une référence à la fonction au lieu de l\u2019exécuter.',
          'Oublier le `return` : la fonction renvoie `undefined`.',
          'Déclarer une fonction avec le même nom qu\u2019une variable : collision.',
        ],
        playground: {
          title: 'Vos premières fonctions',
          code: `function addition(a, b) {
  return a + b
}

console.log(addition(2, 3))
console.log(addition(10, 5))`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Une salutation',
            instructions: 'Déclarez `saluer()` qui affiche **« Salut ! »**, puis appelez-la.',
            starter: `// function saluer() { ... }
saluer()`,
            expected: ['Salut !'],
            solution: `function saluer() {
  console.log('Salut !')
}
saluer()`,
          },
          {
            niveau: 'Moyen',
            title: 'Doubler, pour de vrai',
            instructions: 'Créez `doubler(n)` qui retourne `n * 2`, puis affichez `doubler(7)` (attendu : **14**).',
            starter: `// function doubler(n) { ... }
console.log(doubler(7))`,
            expected: ['14'],
            solution: `function doubler(n) {
  return n * 2
}
console.log(doubler(7))`,
          },
          {
            niveau: 'Avancé',
            title: 'Aire d\u2019un rectangle',
            instructions: 'Créez `aire(base, hauteur)` qui retourne `base * hauteur`, puis affichez `aire(4, 5)` (attendu : **20**).',
            starter: `// function aire(base, hauteur) { ... }
console.log(aire(4, 5))`,
            expected: ['20'],
            solution: `function aire(base, hauteur) {
  return base * hauteur
}
console.log(aire(4, 5))`,
          },
        ],
        recap: [
          '`function nom() { ... }` définit une fonction.',
          '`return` renvoie une valeur ; sans lui, résultat `undefined`.',
          'On exécute une fonction avec `nom()`.',
        ],
        quiz: [
          {
            question: 'Que renvoie une fonction sans `return` ?',
            options: ['null', 'undefined', '0'],
            answer: 1,
            explanation: 'Une fonction sans return renvoie implicitement undefined.',
          },
          {
            question: 'Comment exécuter la fonction `start()` ?',
            options: ['start', 'start;', 'start()'],
            answer: 2,
            explanation: 'Les parenthèses déclenchent l\u2019exécution.',
          },
          {
            question: 'Que fait `return a + b` ?',
            options: [
              'Affiche le résultat',
              'Renvoie le résultat à l\u2019appelant',
              'Détruit la fonction',
            ],
            answer: 1,
            explanation: 'return transmet la valeur à celui qui appelle la fonction.',
          },
        ],
      },
      {
        id: 'fonctions-parametres',
        title: 'Paramètres, valeurs par défaut et portée',
        objectifs: [
          'Définir des valeurs par défaut.',
          'Comprendre la portée locale des variables.',
          'Lire une variable globale depuis une fonction.',
        ],
        blocks: [
          {
            type: 'text',
            text: 'Une fonction peut recevoir des informations via ses **paramètres**, et les paramètres peuvent avoir des **valeurs par défaut** si l\u2019appel n\u2019en fournit pas.',
          },
          {
            type: 'code',
            title: 'Valeurs par défaut',
            code: `function direBonjour(nom = 'ami') {
  console.log('Bonjour ' + nom)
}

direBonjour('Awa')  // Bonjour Awa
direBonjour()       // Bonjour ami`,
          },
          {
            type: 'code',
            title: 'La portée (scope)',
            code: `const prenom = 'Awa'         // globale

function afficherPrenom() {
  const pays = 'Sénégal'       // locale : dél'extérieur ?
  console.log(prenom, pays)    // fonctionne (globale + locale)
}

afficherPrenom()
console.log(pays)              // ❌ ReferenceError`},
          {
            type: 'callout',
            variant: 'info',
            text: 'Une variable déclarée avec `let`/`const` **dans** une fonction reste **locale** : invisible dehors. Les variables **globales** (déclarées au niveau racine) sont lisibles partout.',
          },
        ],
        pieges: [
          'Croire qu\u2019une variable locale est accessible dehors : **ReferenceError**.',
          'Oublier qu\u2019un paramètre peut écraser une donnée globale du même nom.',
          'Passer trop peu d\u2019arguments : les absents valent `undefined` (sauf valeur par défaut).',
        ],
        playground: {
          title: 'Paramètres et portée',
          code: `function remise(prix, taux = 0.1) {
  return prix - prix * taux
}
console.log(remise(100))   // 90
console.log(remise(100, 0.5)) // 50`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Nom par défaut',
            instructions: "Créez `direBonjour(nom = \"ami\")` qui affiche `'Bonjour ' + nom`, puis appelez-la **sans argument** (attendu : « Bonjour ami »).",
            starter: `// function direBonjour(nom = 'ami') { ... }
direBonjour()`,
            expected: ['Bonjour ami'],
            solution: `function direBonjour(nom = 'ami') {
  console.log('Bonjour ' + nom)
}
direBonjour()`,
          },
          {
            niveau: 'Moyen',
            title: 'Une remise de 10 %',
            instructions: 'Créez `remise(prix)` qui retourne `prix * 0.9` (soit moins 10 %), puis affichez `remise(50)` (attendu : **45**).',
            starter: `// function remise(prix) { ... }
console.log(remise(50))`,
            expected: ['45'],
            solution: `function remise(prix) {
  return prix * 0.9
}
console.log(remise(50))`,
          },
          {
            niveau: 'Avancé',
            title: 'Une variable locale',
            instructions: 'Dans `changement()`, déclarez `compteur` local = **5**, doublez-le, puis `return` le. Affichez le résultat avec `changement()` (attendu : **10**).',
            starter: `// function changement() {
//   let compteur = 5
//   compteur = compteur * 2
//   return compteur
// }
console.log(changement())`,
            expected: ['10'],
            solution: `function changement() {
  let compteur = 5
  compteur = compteur * 2
  return compteur
}
console.log(changement())`,
          },
        ],
        recap: [
          'Un paramètre peut avoir une **valeur par défaut** : `nom = "ami"`.',
          'Seule la valeur de retour sort de la fonction.',
          'Une variable locale n\u2019est **pas** accessible à l\u2019extérieur.',
        ],
        quiz: [
          {
            question: 'Que vaut le paramètre non fourni sans valeur par défaut ?',
            options: ['null', 'undefined', '0'],
            answer: 1,
            explanation: 'Un argument manquant vaut undefined.',
          },
          {
            question: 'Une variable déclarée dans une fonction est\u2026',
            options: ['globale', 'locale', 'immuable'],
            answer: 1,
            explanation: 'Elle est locale : inaccessible depuis l\u2019extérieur.',
          },
          {
            question: 'Que fait `taux = 0.1` dans les paramètres ?',
            options: [
              'Déclare une constante',
              'Donne une valeur par défaut si l\u2019argument manque',
              'Force le taux à 10 %',
            ],
            answer: 1,
            explanation: 'Si aucun argument n\u2019est passé, taux vaut 0.1.',
          },
        ],
      },
      {
        id: 'fonctions-flechees',
        title: 'Les fonctions fléchées',
        objectifs: [
          'Écrire des fonctions fléchées `=>`.',
          'Comprendre le retour implicite.',
          'Savoir quand les utiliser.',
        ],
        blocks: [
          {
            type: 'text',
            text: 'Les **fonctions fléchées** (arrow functions) sont une syntaxe plus courte, très utilisée en JS moderne.',
          },
          {
            type: 'code',
            title: 'De la fonction à la flèche',
            code: `// Fonction classique
function carre(x) {
  return x * x
}

// Fonction fléchée
const carreFleche = (x) => {
  return x * x
}

// Retour implicite (une seule expression)
const carreCourt = x => x * x

console.log(carre(4), carreCourt(4)) // 16 16`,
          },
          {
            type: 'code',
            title: 'Quand les utiliser ?',
            code: `const nombres = [1, 2, 3]
const doubles = nombres.map(n => n * 2)
console.log(doubles) // [2, 4, 6]`,
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'Si le corps tient en **une expression**, on peut supprimer les accolades **et** le `return` : la valeur est renvoyée implicitement.',
          },
        ],
        pieges: [
          'Confondre `=>` (flèche) avec `>=` (supérieur ou égal).',
          'Mettre `return` dans une flèche à retour implicite `n => n * 2` : erreur de syntaxe si ajouté avec accolades, inutile sinon.',
          'Utiliser les flèches partout, même pour de longues fonctions où une `function` nommée serait plus lisible.',
        ],
        playground: {
          title: 'Flèches à volonté',
          code: `const bienvenue = nom => 'Salut ' + nom
const triple = x => x * 3

console.log(bienvenue('Awa'))
console.log(triple(4))`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Au carré',
            instructions: 'Déclarez `carre = x => x * x` puis affichez `carre(4)` (attendu : **16**).',
            starter: `// const carre = x => x * x
console.log(carre(4))`,
            expected: ['16'],
            solution: `const carre = x => x * x
console.log(carre(4))`,
          },
          {
            niveau: 'Moyen',
            title: 'Au carré en une ligne',
            instructions: 'Déclarez `auCarre = x => x * x`, stockez `auCarre(5)` dans `result` puis affichez `result` (attendu : **25**).',
            starter: `// const auCarre = x => x * x`,
            expected: ['25'],
            solution: `const auCarre = x => x * x
const result = auCarre(5)
console.log(result)`,
          },
          {
            niveau: 'Avancé',
            title: 'Une salutation fléchée',
            instructions: 'Déclarez `bienvenue = nom => "Salut " + nom` puis affichez `bienvenue("Awa")` (attendu : **Salut Awa**).',
            starter: `// const bienvenue = nom => 'Salut ' + nom`,
            expected: ['Salut Awa'],
            solution: `const bienvenue = nom => 'Salut ' + nom
console.log(bienvenue('Awa'))`,
          },
        ],
        recap: [
          '`const f = (x) => x * 2` est une fonction fléchée.',
          'Une seule expression → **retour implicite** (pas de return).',
          'Idéale dans `.map`, `.filter`, ou en paramètre.',
        ],
        quiz: [
          {
            question: 'Que signifie le retour implicite ?',
            options: [
              'La valeur est renvoyée sans écrire return',
              'La fonction ne renvoie rien',
              'Le navigateur devine la valeur',
            ],
            answer: 0,
            explanation: 'Avec une seule expression, la valeur est renvoyée automatiquement.',
          },
          {
            question: '`const f = (a, b) => a + b; f(2, 3)` vaut\u2026',
            options: ['5', '"ab"', 'undefined'],
            answer: 0,
            explanation: 'a + b = 2 + 3 = 5, renvoyé implicitement.',
          },
          {
            question: 'Quel symbole introduit une fonction fléchée ?',
            options: ['==>', '=>', '::'],
            answer: 1,
            explanation: 'La flèche "=>" s\u2019écrit avec un égal et un supérieur.',
          },
        ],
      },
    ],
  },
  {
    id: 'tableaux',
    emoji: '📚',
    title: 'Les tableaux',
    description:
      'Stocker et manipuler des listes : lecture, méthodes de haut niveau et destructuration.',
    estimatedTime: '1 h 15 min',
    lessons: [
      {
        id: 'tableaux-base',
        title: 'Créer, lire, modifier',
        objectifs: [
          'Créer un tableau avec `[]`.',
          'Lire un élément par son **index** (0).',
          'Ajouter/retirer avec push, pop, shift.',
        ],
        blocks: [
          {
            type: 'text',
            text: 'Un **tableau** est une liste ordonnée de valeurs, écrite entre crochets `[ ... ]`. Le premier élément est à l\u2019index **0**.',
          },
          {
            type: 'code',
            title: 'Création et lecture',
            code: `const fruits = ['mangue', 'orange', 'banane']

console.log(fruits[0])    // mangue
console.log(fruits[1])    // orange
console.log(fruits.length) // 3 (nombre d'éléments)`,
          },
          {
            type: 'code',
            title: 'Ajouter et retirer',
            code: `const nombres = [1, 2]

nombres.push(3)      // ajoute à la fin → [1, 2, 3]
nombres.unshift(0)   // ajoute au début → [0, 1, 2, 3]

console.log(nombres.pop())     // 3 (retire la fin)
console.log(nombres.shift())   // 0 (retire le début)
console.log(nombres)           // [1, 2]`,
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'Bien que déclaré `const`, un tableau **peut** être modifié (on change son contenu, pas la variable). `const` interdit seulement de réassigner `nombres = ...`.',
          },
        ],
        pieges: [
          'Oublier que l\u2019index commence à **0** : `fruits[1]` est le 2e élément.',
          'Lire un index inexistant : on obtient `undefined`, pas une erreur.',
          'Mettre des virgules parasites : `[1, 2, , 4]` crée un « trou ».',
        ],
        playground: {
          title: 'Manipulez vos listes',
          code: `const notes = [12, 15, 8]
console.log(notes[0], notes[2], notes.length)

notes.push(17)
console.log(notes)
console.log(notes.pop())`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Fruit n°2',
            instructions: 'Déclarez `fruits` = **[« mangue », « orange », « banane »]** puis affichez l\u2019élément à l\u2019index **1** (attendu : orange).',
            starter: `// const fruits = [...]
console.log(fruits[1])`,
            expected: ['orange'],
            solution: `const fruits = ['mangue', 'orange', 'banane']
console.log(fruits[1])`,
          },
          {
            niveau: 'Moyen',
            title: 'Combien d\u2019éléments ?',
            instructions: 'Avec `vue` = **[1, 2, 3]**, affichez le **nombre d\u2019éléments** avec `.length` (attendu : **3**).',
            starter: `// const vue = [1, 2, 3]
console.log(vue.length)`,
            expected: ['3'],
            solution: `const vue = [1, 2, 3]
console.log(vue.length)`,
          },
          {
            niveau: 'Avancé',
            title: 'Ajouter à la fin',
            instructions: 'Ajoutez **3** avec `.push(3)` à `liste` = **[1, 2]**, puis affichez `liste` en entier (attendu : [1, 2, 3]).',
            starter: `const liste = [1, 2]
// liste.push(3)
console.log(liste)`,
            expected: ['[1,2,3]'],
            solution: `const liste = [1, 2]
liste.push(3)
console.log(liste)`,
          },
        ],
        recap: [
          '`[a, b, c]` crée une liste ; le 1er élément est à l\u2019index **0**.',
          '`.length` donne la taille de la liste.',
          '`push`, `pop`, `unshift`, `shift` modifient les extrémités.',
        ],
        quiz: [
          {
            question: 'Quel est l\u2019index du premier élément ?',
            options: ['1', '0', '-1'],
            answer: 1,
            explanation: 'Les index commencent à 0.',
          },
          {
            question: 'Que renvoie `[7, 8, 9][3]` ?',
            options: ['undefined', '9', 'Erreur'],
            answer: 0,
            explanation: 'Il n\u2019y a que les index 0, 1, 2 : index 3 inexistant → undefined.',
          },
          {
            question: 'Que fait `.push(4)` ?',
            options: [
              'Retire le premier élément',
              'Ajoute 4 à la fin du tableau',
              'Supprime le tableau',
            ],
            answer: 1,
            explanation: 'push ajoute un élément à la fin.',
          },
        ],
      },
      {
        id: 'tableaux-methodes',
        title: 'forEach, map, filter, find et reduce',
        objectifs: [
          'Parcourir avec `forEach`.',
          'Transformer avec `map`.',
          'Filtrer avec `filter`, agréger avec `reduce`.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'forEach et map',
            code: `const notes = [10, 15, 12]

// Parcourir (effet de bord)
notes.forEach(n => console.log(n))

// Transformer (nouveau tableau)
const doubles = notes.map(n => n * 2)
console.log(doubles)   // [20, 30, 24]`,
          },
          {
            type: 'code',
            title: 'filter, find et reduce',
            code: `const scores = [8, 15, 12, 4, 18]

// Ne garder que certaines valeurs
const reussis = scores.filter(s => s >= 10)
console.log(reussis)   // [15, 12, 18]

// Trouver le premier élément qui correspond
const premierReussi = scores.find(s => s >= 10)
console.log(premierReussi)  // 15

// Réduire à une seule valeur
const total = scores.reduce((acc, s) => acc + s, 0)
console.log(total)   // 57`,
          },
          {
            type: 'callout',
            variant: 'info',
            text: '`map`, `filter` et `reduce` ne modifient **pas** le tableau d\u2019origine : elles renvoient une nouvelle valeur. C\u2019est l\u2019esprit « immutable » du JS moderne.',
          },
        ],
        pieges: [
          'Oublier que `filter` renvoie un **tableau**, même vide s\u2019il n\u2019y a pas de résultat.',
          'Utiliser `find` pour tout trouver : il s\u2019arrête au **premier** élément.',
          'Oublier la valeur initiale `0` dans `reduce((acc, n) => acc + n, 0)`.',
        ],
        playground: {
          title: 'La boîte à outils',
          code: `const prix = [10, 25, 5, 40]
const chers = prix.filter(p => p > 20)
console.log(chers)

const libelles = prix.map(p => p + ' €')
console.log(libelles)`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Filtrer les notes',
            instructions: 'Filtrez `notes` = **[10, 15, 8]** pour ne garder que `n >= 10` avec `.filter`, puis affichez le résultat (attendu : [10, 15]).',
            starter: `const notes = [10, 15, 8]
// const reussies = notes.filter(n => n >= 10)
console.log(notes.filter(n => n >= 10))`,
            expected: ['[10,15]'],
            solution: `const notes = [10, 15, 8]
const reussies = notes.filter(n => n >= 10)
console.log(reussies)`,
          },
          {
            niveau: 'Moyen',
            title: 'Doubler chaque élément',
            instructions: 'Transformez `nombres` = **[1, 2, 3]** en doublant chaque élément avec `.map`, puis affichez le résultat (attendu : **[2, 4, 6]**).',
            starter: `const nombres = [1, 2, 3]
// const doubles = nombres.map(n => n * 2)
console.log(doubles)`,
            expected: ['[2,4,6]'],
            solution: `const nombres = [1, 2, 3]
const doubles = nombres.map(n => n * 2)
console.log(doubles)`,
          },
          {
            niveau: 'Avancé',
            title: 'Somme avec reduce',
            instructions: 'Calculez la somme de `notes` = **[10, 15, 12]** avec `.reduce((acc, n) => acc + n, 0)` puis affichez-la (attendu : **37**).',
            starter: `const notes = [10, 15, 12]
// const total = notes.reduce((acc, n) => acc + n, 0)
console.log(total)`,
            expected: ['37'],
            solution: `const notes = [10, 15, 12]
const total = notes.reduce((acc, n) => acc + n, 0)
console.log(total)`,
          },
        ],
        recap: [
          '`forEach` = boucle classique sur un tableau.',
          '`map` = transformer → nouveau tableau.',
          '`filter` = trier/garder, `reduce` = agréger en une valeur.',
        ],
        quiz: [
          {
            question: '`[1, 2, 3].map(n => n + 1)` renvoie\u2026',
            options: ['[1, 2, 3]', '[2, 3, 4]', '6'],
            answer: 1,
            explanation: 'map ajoute 1 à chaque élément : [2, 3, 4].',
          },
          {
            question: '`filter` renvoie\u2026',
            options: [
              'La première correspondance',
              'Un booléen',
              'Un nouveau tableau',
            ],
            answer: 2,
            explanation: 'filter renvoie un tableau, éventuellement vide.',
          },
          {
            question: 'Dans `reduce((acc, n) => acc + n, 0)`, que représente `acc` ?',
            options: [
              'Le total accumulé',
              'Le premier élément',
              'L\u2019index courant',
            ],
            answer: 0,
            explanation: 'acc est le accumulateur qui porte la somme.',
          },
        ],
      },
      {
        id: 'tableaux-destructuring',
        title: 'La destructuration',
        objectifs: [
          'Extraire des éléments d\u2019un tableau.',
          'Ignorer des valeurs avec des virgules.',
          'Utiliser la même syntaxe avec les objets.',
        ],
        blocks: [
          {
            type: 'text',
            text: 'La **destructuration** extrait des valeurs d\u2019un tableau (ou objet) en une seule ligne.',
          },
          {
            type: 'code',
            title: 'Destructurer un tableau',
            code: `const nombres = [10, 20, 30]

const [a, b, c] = nombres
console.log(a, b, c)    // 10 20 30

// On peut en prendre moins
const [premier, deuxieme] = nombres
console.log(premier)    // 10`,
          },
          {
            type: 'code',
            title: 'Ignorer des valeurs avec des virgules',
            code: `const [x, , z] = [1, 2, 3]
console.log(x, z)   // 1 3  (on saute l'index 1)`,
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'La destructuration fonctionne aussi sur les **retours de fonctions** : `const [h, m] = diviserAvecReste(10, 3)` décompose le résultat en une ligne.',
          },
        ],
        pieges: [
          'Oublier que `[a, b] = [1, 2, 3]` n\u2019extrait que les deux premières valeurs.',
          'Les parenthèses obligatoires pour réassigner : `([a, b] = [1, 2])` si les variables existent déjà.',
          'Confondre destructuring de tableau `[ ]` et d\u2019objet `{ }`.',
        ],
        playground: {
          title: 'Extrayez des valeurs',
          code: `const [dix, vingt, trente] = [10, 20, 30]
console.log(dix, trente)

const [un, , trois] = [1, 2, 3]
console.log(un, trois)`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Décomposer',
            instructions: 'Déstructurez `[10, 20]` en `a` et `b`, puis affichez `a` (attendu : **10**).',
            starter: `const [a, b] = [10, 20]
console.log(a)`,
            expected: ['10'],
            solution: `const [a, b] = [10, 20]
console.log(a)`,
          },
          {
            niveau: 'Moyen',
            title: 'La somme des deux premiers',
            instructions: 'Déstructurez `[10, 20]` en `dix` et `vingt`, calculez `somme = dix + vingt`, affichez `somme` (attendu : **30**).',
            starter: `// const [dix, vingt] = [10, 20]
console.log(somme)`,
            expected: ['30'],
            solution: `const [dix, vingt] = [10, 20]
const somme = dix + vingt
console.log(somme)`,
          },
          {
            niveau: 'Avancé',
            title: 'Sauter une valeur',
            instructions: "Déstructurez `['x', 'y', 'z']` en `premier` et `troisieme` en sautant le milieu, affichez les deux séparés par un espace (attendu : **x z**).",
            starter: `// const [premier, , troisieme] = ['x', 'y', 'z']
console.log(premier, troisieme)`,
            expected: ['x z'],
            solution: `const [premier, , troisieme] = ['x', 'y', 'z']
console.log(premier, troisieme)`,
          },
        ],
        recap: [
          '`const [a, b] = [1, 2]` extrait en une ligne.',
          'Une virgule vide **saute** une position.',
          'Puissant avec les retours de fonctions.',
        ],
        quiz: [
          {
            question: '`const [a, b] = [5, 6]` : que vaut `b` ?',
            options: ['5', '6', 'undefined'],
            answer: 1,
            explanation: 'b reçoit la 2e valeur, 6.',
          },
          {
            question: '**`[x, , z] = [1, 2, 3]` : que vaut z ?**',
            options: ['2', '3', 'undefined'],
            answer: 1,
            explanation: 'La virgule saute 2, z reçoit la 3e valeur.',
          },
          {
            question: 'Quels symboles utilise-t-on pour déstructurer un tableau ?',
            options: ['{ }', '( )', '[ ]'],
            answer: 2,
            explanation: 'Les crochets [ ] pour les tableaux.',
          },
        ],
      },
    ],
  },
  {
    id: 'objets',
    emoji: '🗂️',
    title: 'Les objets',
    description:
      'Regrouper des données nommées en objets, avec leurs propriétés, méthodes et extensions.',
    estimatedTime: '1 h',
    lessons: [
      {
        id: 'objets-base',
        title: 'Propriétés et méthodes',
        objectifs: [
          'Créer un objet avec `{}`.',
          'Lire/écrire une propriété (notion de point).',
          'Attacher des fonctions (méthodes).',
        ],
        blocks: [
          {
            type: 'code',
            title: 'Créer et lire un objet',
            code: `const voiture = {
  marque: 'Toyota',
  annee: 2020,
  electrique: false
}

// Lecture avec le point
console.log(voiture.marque)    // Toyota
console.log(voiture['marque']) // Toyota

// Écriture
voiture.annee = 2023
console.log(voiture.annee)     // 2023`,
          },
          {
            type: 'code',
            title: 'Les méthodes',
            code: `const chien = {
  nom: 'Rex',
  aboie: function () {
    return 'Wouf !'
  }
}

console.log(chien.nom)     // Rex
console.log(chien.aboie())  // Wouf !`,
          },
          {
            type: 'list',
            title: 'À retenir',
            items: [
              'Un objet regroupe des paires **clé : valeur**.',
              "On accède aux propriétés avec **`.`** ou `[' ']`.",
              'Une **méthode** est une fonction stockée dans un objet.',
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'Pensez à un objet comme à une **fiche** : chaque champ porte un nom (clé) et une valeur. C\u2019est la base de toute donnée structurée en JS.',
          },
        ],
        pieges: [
          'Oublier les parenthèses pour appeler une **méthode** : `chien.aboie` est la fonction elle-même.',
          'Une clé inexistante donne `undefined`, pas une erreur.',
          'Confondre objet `{ }` et bloc de code : un objet isolé a besoin d\u2019être affecté ou parenthésé.',
        ],
        playground: {
          title: 'Votre premier objet',
          code: `const etudiant = {
  prenom: 'Awa',
  note: 15,
  presente: function () {
    return 'Je suis ' + this.prenom
  }
}
console.log(etudiant.note)
console.log(etudiant.presente())`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'La marque',
            instructions: 'Créez `voiture` = **{ marque: "Toyota" }** puis affichez `voiture.marque` (attendu : Toyota).',
            starter: `// const voiture = { marque: 'Toyota' }
console.log(voiture.marque)`,
            expected: ['Toyota'],
            solution: `const voiture = { marque: 'Toyota' }
console.log(voiture.marque)`,
          },
          {
            niveau: 'Moyen',
            title: 'La voiture',
            instructions: 'Créez `voiture` = **{ marque: "Toyota", annee: 2020 }** puis affichez `voiture.annee` (attendu : **2020**).',
            starter: `// const voiture = { marque: 'Toyota', annee: 2020 }
console.log(voiture.annee)`,
            expected: ['2020'],
            solution: `const voiture = { marque: 'Toyota', annee: 2020 }
console.log(voiture.annee)`,
          },
          {
            niveau: 'Avancé',
            title: 'La méthode aboie',
            instructions: 'Ajoutez une méthode `aboie` qui **retourne « Wouf ! »** à `chien` (nom : « Rex »), puis affichez `chien.aboie()` (attendu : Wouf !).',
            starter: `const chien = {
  nom: 'Rex'
  // aboie: function () { return 'Wouf !' }
}
console.log(chien.aboie())`,
            expected: ['Wouf !'],
            solution: `const chien = {
  nom: 'Rex',
  aboie: function () {
    return 'Wouf !'
  }
}
console.log(chien.aboie())`,
          },
        ],
        recap: [
          'Un objet = une **fiche** de paires clé/valeur.',
          'Accès avec `objet.propriete`, appel de méthode `objet.methode()`.',
          'Une valeur manquante renvoie `undefined`.',
        ],
        quiz: [
          {
            question: 'Comment accéder à la propriété `annee` ?',
            options: ['voiture.annee', 'voiture[annee]', 'annee.voiture'],
            answer: 0,
            explanation: 'Le point donne accès : voiture.annee.',
          },
          {
            question: 'Une méthode est une\u2026',
            options: ['valeur numérique', 'fonction dans un objet', 'clé numérique'],
            answer: 1,
            explanation: 'Une méthode est une fonction attachée à l\u2019objet.',
          },
          {
            question: 'Que renvoie `obj.cléInexistante` ?',
            options: ['null', 'undefined', 'Une erreur'],
            answer: 1,
            explanation: 'Une clé absente renvoie undefined.',
          },
        ],
      },
      {
        id: 'objets-avance',
        title: 'Destructuration et spread',
        objectifs: [
          'Extraire des propriétés en `const { clé } = objet`.',
          'Copier/fusionner avec `...`.',
          'Renommer une propriété lors de la déstructuration.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'Destructurer un objet',
            code: `const profil = {
  nom: 'Diop',
  prenom: 'Awa',
  age: 25
}

const { nom, age } = profil
console.log(nom, age)   // Diop 25`,
          },
          {
            type: 'code',
            title: 'Le spread ...',
            code: `const base = { marque: 'Toyota', annee: 2020 }

// Copie + ajout d'une propriété
const voiture = { ...base, electrique: true }
console.log(voiture.electrique)  // true

// Le tableau d'origine n'est pas touché
console.log(base.electrique)     // undefined`,
          },
          {
            type: 'callout',
            variant: 'tip',
            text: '`...objet` « étale » toutes les paires. C\u2019est la façon facile de copier un objet sans le référencer.',
          },
        ],
        pieges: [
          'Modifier une copie par `=` : `const b = a` référence le **même** objet. Utilisez `{ ...a }` pour une vraie copie.',
          'Déstructurer une clé absente : vaut `undefined` (une valeur par défaut est possible avec `=`) .',
          'Oublier que `...` duplique **au premier niveau** seulement.',
        ],
        playground: {
          title: 'Extraction et fusion',
          code: `const { nom, age } = { nom: 'Ndiaye', age: 30 }
console.log(nom, age)

const a = { x: 1 }
const b = { ...a, y: 2 }
console.log(b)`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Extraire un champ',
            instructions: 'Déstructurez l\u2019objet **{ nom: "Awa", age: 25 }** pour extraire `nom`, puis affichez-le (attendu : Awa).',
            starter: `// const { nom } = { nom: 'Awa', age: 25 }
console.log(nom)`,
            expected: ['Awa'],
            solution: `const { nom } = { nom: 'Awa', age: 25 }
console.log(nom)`,
          },
          {
            niveau: 'Moyen',
            title: 'Profil extrait',
            instructions: 'Déstructurez `{ nom: "Awa", age: 25 }` en `nom` et `age`, puis affichez `age` (attendu : **25**).',
            starter: `const profil = { nom: 'Awa', age: 25 }
// const { nom, age } = profil
console.log(age)`,
            expected: ['25'],
            solution: `const profil = { nom: 'Awa', age: 25 }
const { nom, age } = profil
console.log(age)`,
          },
          {
            niveau: 'Avancé',
            title: 'Fusionner avec spread',
            instructions: 'Créez `a` = **{ x: 1 }** puis `b` = **{ ...a, y: 2 }**, affichez `b` en entier (attendu : {"x":1,"y":2}).',
            starter: `// const a = { x: 1 }
// const b = { ...a, y: 2 }
console.log(b)`,
            expected: ['{"x":1,"y":2}'],
            solution: `const a = { x: 1 }
const b = { ...a, y: 2 }
console.log(b)`,
          },
        ],
        recap: [
          '`const { clé } = objet` extrait une propriété.',
          '`{ ...objet, nov: v }` copie puis enrichit.',
          'Une vraie copie exige `...`, jamais `=` seul.',
        ],
        quiz: [
          {
            question: '`const { p } = { p: 7 }` : que vaut p ?',
            options: ['7', 'undefined', '{ p: 7 }'],
            answer: 0,
            explanation: 'La clé p vaut 7.',
          },
          {
            question: 'Pourquoi `const b = a` n\u2019est pas une copie ?',
            options: [
              'C\u2019est interdit',
              'b référence le même objet que a',
              'b reçoit une chaîne',
            ],
            answer: 1,
            explanation: 'b pointe vers le même objet : modifier l\u2019un modifie l\u2019autre.',
          },
          {
            question: 'Que fait `{ ...a, y: 2 }` si a = { x: 1 } ?',
            options: [
              '{ x: 1, y: 2 }',
              '{ y: 2 }',
              'Une erreur',
            ],
            answer: 0,
            explanation: 'Le spread recopie x puis on ajoute y.',
          },
        ],
      },
    ],
  },
  {
    id: 'chaines',
    emoji: '🔤',
    title: 'Chaînes & template literals',
    description:
      'Manipuler le texte : méthodes de chaînes et interpolation élégante avec les backticks.',
    estimatedTime: '45 min',
    lessons: [
      {
        id: 'chaines-methodes',
        title: 'Les méthodes de chaînes',
        objectifs: [
          'Utiliser split, includes, replace.',
          'Connaître toUpperCase / toLowerCase / trim.',
          'Compter des mots avec `.split().length`.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'split, includes, replace, répéter',
            code: `const phrase = 'Bonjour tout le monde'

console.log(phrase.split(' '))    // ["Bonjour", "tout", "le", "monde"]
console.log(phrase.includes('monde'))  // true
console.log(phrase.replace('Bonjour', 'Salut')) // "Salut tout le monde"
console.log('ha'.repeat(3))       // "hahaha"`,
          },
          {
            type: 'code',
            title: 'Cas et espaces',
            code: `const ville = '  dakar  '
console.log(ville.toUpperCase())    // "  DAKAR  "
console.log(ville.trim())           // "dakar"
console.log('LE SENEGAL'.toLowerCase()) // "le senegal"`,
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'Les chaînes sont **immuables** : `replace`, `trim`, `toUpperCase` renvoient une **nouvelle** chaîne sans modifier l\u2019originale.',
          },
          {
            type: 'list',
            title: 'À emporter',
            items: [
              '`split(séparateur)` → tableau de morceaux.',
              '`includes(morceau)` → true/false.',
              '`replace(a, b)` → remplace la 1re occurrence.',
            ],
          },
        ],
        pieges: [
          'Oublier que les méthodes renvoient un **nouveau** texte (les chaînes sont immuables).',
          '`split("")` découpe en **caractères**, `split(" ")` en mots (espace).',
          '`replace` ne remplace que la **première** occurrence (utilisez une regex pour toutes).',
        ],
        playground: {
          title: 'Jouez avec le texte',
          code: `const t = ' JavaScript genial '
console.log(t.trim())
console.log(t.trim().toUpperCase())
console.log(t.trim().split(' '))`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Contient \u00ab monde \u00bb ?',
            instructions: 'Avec `phrase` = **« Bonjour tout le monde »**, affichez si elle contient **« monde »** avec `.includes` (attendu : true).',
            starter: `const phrase = 'Bonjour tout le monde'
// console.log(phrase.includes('monde'))`,
            expected: ['true'],
            solution: `const phrase = 'Bonjour tout le monde'
console.log(phrase.includes('monde'))`,
          },
          {
            niveau: 'Moyen',
            title: 'Compter les mots',
            instructions: 'Avec `texte` = **« Bonjour tout le monde »** (4 mots), découpez avec `.split(\u0027 \u0027)` puis affichez `.length` (attendu : **4**).',
            starter: `// let mots = texte.split(" ")
let texte = 'Bonjour tout le monde'
console.log(texte.split(' ').length)`,
            expected: ['4'],
            solution: `let texte = 'Bonjour tout le monde'
let mots = texte.split(' ')
console.log(mots.length)`,
          },
          {
            niveau: 'Avancé',
            title: 'Un texte en majuscules',
            instructions: 'Avec `ville` = **« dakar »**, affichez le résultat de `.toUpperCase()` (attendu : DAKAR).',
            starter: `const ville = 'dakar'
// console.log(ville.toUpperCase())`,
            expected: ['DAKAR'],
            solution: `const ville = 'dakar'
console.log(ville.toUpperCase())`,
          },
        ],
        recap: [
          '`split`, `includes`, `replace`, `toUpperCase` sont des méthodes de chaînes.',
          'Les chaînes sont **immuables** : les méthodes créent une nouvelle chaîne.',
          '`texte.split(\u0027 \u0027).length` compte les mots.',
        ],
        quiz: [
          {
            question: 'Que renvoie `"abc".toUpperCase()` ?',
            options: ['"ABC"', '"abc"', '3'],
            answer: 0,
            explanation: 'toUpperCase met en majuscules.',
          },
          {
            question: '`"Bonjour .monde".includes("monde")` renvoie\u2026',
            options: ['true', 'false', 'Une erreur'],
            answer: 0,
            explanation: 'includes cherche une sous-chaîne : présente → true.',
          },
          {
            question: 'Combien d\u2019éléments pour `"a b c".split(" ")` ?',
            options: ['1', '3', '5'],
            answer: 1,
            explanation: '« a b c » découpé à l\u2019espace donne 3 morceaux.',
          },
        ],
      },
      {
        id: 'chaines-template',
        title: 'Les template literals',
        objectifs: [
          'Écrire des chaînes avec les backticks `` ` ``.',
          'Interpoler avec `${...}`.',
          'Créer des textes multi-lignes.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'Interpolation de variables',
            code: `const prenom = 'Awa'
const age = 25

// Concaténation classique
console.log('Je m'appelle ' + prenom + ' et j'ai ' + age + ' ans.')

// Template literal (backticks)
console.log(\`Je m'appelle \${prenom} et j'ai \${age} ans.\`)`,
          },
          {
            type: 'code',
            title: 'Multi-lignes et expressions',
            code: `const message = \`Ligne 1
Ligne 2\`
console.log(message)

const a = 5
const b = 7
console.log(\`\${a} + \${b} = \${a + b}\`)   // 5 + 7 = 12`,
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Dans un template literal, `${expression}` accepte **n\u2019importe quelle expression** JS : variables, calculs, appels de fonctions\u2026',
          },
        ],
        pieges: [
          'Oublier que le template commence/finit par **un backtick**, pas une apostrophe.',
          'Utiliser `${...}` en dehors d\u2019un template literal : ça reste du texte.',
          'Mélanger des apostrophes dans une chaîne simple créée une erreur (préférez backticks ou guillemets).',
        ],
        playground: {
          title: 'Interpolez tout',
          code: `const fruit = 'mangue'
const prix = 800
console.log(\`Une \${fruit} coûte \${prix} FCFA.\`)
console.log(\`\${2} + \${3} = \${2 + 3}\`)`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Première interpolation',
            instructions: 'Interpolez `nom` = **« Awa »** dans « Salut Awa » avec un template literal. Code attendu : `` `Salut ${nom}` ``.',
            starter: `const nom = 'Awa'
// console.log(\`Salut \${nom}\`)`,
            expected: ['Salut Awa'],
            solution: `const nom = 'Awa'
console.log(\`Salut \${nom}\`)`,
          },
          {
            niveau: 'Moyen',
            title: 'Présentation',
            instructions: 'Avec `prenom` = **« Awa »** et `age` = **25**, affichez « Je m\u2019appelle Awa et j\u2019ai 25 ans. » grâce à un template literal.',
            starter: `const prenom = 'Awa'
const age = 25
// console.log(\`Je m'appelle \${prenom} et j'ai \${age} ans.\`)`,
            expected: ["Je m'appelle Awa et j'ai 25 ans."],
            solution: `const prenom = 'Awa'
const age = 25
console.log(\`Je m'appelle \${prenom} et j'ai \${age} ans.\`)`,
          },
          {
            niveau: 'Avancé',
            title: 'Un calcul interpolé',
            instructions: 'Avec `a` = **5** et `b` = **7**, affichez « 5 + 7 = 12 » en interpolant **a + b** directement dans le template.',
            starter: `const a = 5
const b = 7
// console.log(\`\${a} + \${b} = \${a + b}\`)`,
            expected: ['5 + 7 = 12'],
            solution: `const a = 5
const b = 7
console.log(\`\${a} + \${b} = \${a + b}\`)`,
          },
        ],
        recap: [
          'Template = chaîne entre **backticks** `` ` ``.',
          '`${variable}` ou `${calcul}` **interpole** en direct.',
          'Les templates gèrent naturellement les **multi-lignes**.',
        ],
        quiz: [
          {
            question: 'Quel délimiteur introduit un template literal ?',
            options: ['Les guillemets "', 'Les apostrophes \'', 'Le backtick `'],
            answer: 2,
            explanation: 'Le backtick ` entoure les template literals.',
          },
          {
            question: 'Comment interpeler `prenom` ?',
            options: ['&{prenom}', '#{prenom}', '${prenom}'],
            answer: 2,
            explanation: 'La syntaxe est ${variable}.',
          },
          {
            question: '``2 + 2 = ${2 + 2}`` affiche\u2026',
            options: ['2 + 2 = 4', '2 + 2 = ${2 + 2}', '4'],
            answer: 0,
            explanation: 'Le calcul est évalué : on obtient "2 + 2 = 4".',
          },
        ],
      },
    ],
  },
  {
    id: 'dom',
    emoji: '🖱️',
    title: 'DOM & Événements',
    description:
      'Interagir avec la page : bases HTML/CSS, sélection d\u2019éléments et événements de clic.',
    estimatedTime: '1 h 15 min',
    lessons: [
      {
        id: 'dom-html',
        title: 'Base de HTML & CSS',
        objectifs: [
          'Connaître les balises HTML de base.',
          'Comprendre les attributs id et class.',
          'Relier HTML/CSS/JS.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'Un mini-document HTML',
            code: `<h1>Titre de la page</h1>
<p>Un paragraphe de texte.</p>
<button>Cliquez</button>
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>`,
          },
          {
            type: 'code',
            title: 'Les attributs utiles : id et class',
            code: `<p id="message">Identifiant unique</p>
<p class="carte">Style réutilisable 1</p>
<p class="carte">Style réutilisable 2</p>`,
          },
          {
            type: 'list',
            title: 'À retenir',
            items: [
              '**HTML** structure la page avec des balises `<...>`.',
              '**`id`** désigne un élément unique ; **`class`** regroupe plusieurs éléments.',
              '**CSS** stylise via les sélecteurs, souvent `.class` ou `#id`.',
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'JavaScript agira sur ces éléments via `document.getElementById`, `querySelector`\u2026 C\u2019est justement l\u2019objet du prochain chapitre.',
          },
        ],
        pieges: [
          'Oublier la balise fermante `</p>`, `</ul>`\u2026',
          'Doubler un **id** dans une page : ils doivent être uniques.',
          'Confondre les rôles : la mise en page, c\u2019est du CSS, pas la structure.',
        ],
        playground: {
          title: 'Construisez une mini-page',
          code: `const h1 = document.createElement('h1')
h1.textContent = 'Mon titre'
document.body.appendChild(h1)
console.log(document.querySelector('h1').textContent)`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Quel titre ?',
            instructions: 'Créez un `<h1>` contenant **« Mon titre »**, ajoutez-le à `document.body`, puis affichez son `textContent` (attendu : Mon titre).',
            starter: `const h1 = document.createElement('h1')
h1.textContent = 'Mon titre'
document.body.appendChild(h1)
// console.log(document.querySelector('h1').textContent)`,
            expected: ['Mon titre'],
            solution: `const h1 = document.createElement('h1')
h1.textContent = 'Mon titre'
document.body.appendChild(h1)
console.log(document.querySelector('h1').textContent)`,
          },
          {
            niveau: 'Moyen',
            title: 'Un paragraphe dans la page',
            instructions: 'Mettez donc `<p>salut</p>` dans la page (via innerHTML) puis affichez le **nombre d\u2019éléments enfants** de `document.body` (attendu : **1**).',
            starter: `// document.body.innerHTML = '<p>salut</p>'
console.log(document.body.children.length)`,
            expected: ['1'],
            solution: `document.body.innerHTML = '<p>salut</p>'
console.log(document.body.children.length)`,
          },
          {
            niveau: 'Avancé',
            title: 'Une liste d\u2019un élément',
            instructions: 'Créez une `<ul>` contenant un `<li>un</li>`, ajoutez la liste au body, puis affichez `document.querySelectorAll(\u0027li\u0027).length` (attendu : **1**).',
            starter: `// const ul = document.createElement('ul')
// const li = document.createElement('li')
document.body.appendChild(ul)
console.log(document.querySelectorAll('li').length)`,
            expected: ['1'],
            solution: `const ul = document.createElement('ul')
const li = document.createElement('li')
li.textContent = 'un'
ul.appendChild(li)
document.body.appendChild(ul)
console.log(document.querySelectorAll('li').length)`,
          },
        ],
        recap: [
          'HTML = structure, `id` unique, `class` réutilisable.',
          '`document.createElement(\u0027tag\u0027)` fabrique un élément.',
          '`appendChild` insère un élément dans la page.',
        ],
        quiz: [
          {
            question: 'Quel attribut identifie un élément de façon unique ?',
            options: ['class', 'id', 'name'],
            answer: 1,
            explanation: 'id doit être unique dans la page.',
          },
          {
            question: 'Que crée `document.createElement(\u0027p\u0027)` ?',
            options: [
              'Un paragraphe dans la page',
              'Un paragraphe en mémoire (non inséré)',
              'Une classe CSS',
            ],
            answer: 1,
            explanation: 'L\u2019élément existe en mémoire ; il faut l\u2019ajouter avec appendChild.',
          },
          {
            question: 'Une balise `class="carte"` sert à\u2026',
            options: [
              'Styliser plusieurs éléments ensemble',
              'Identifier un élément unique',
              'Exécuter du JS',
            ],
            answer: 0,
            explanation: 'Une class regroupe des éléments partageant le même style.',
          },
        ],
      },
      {
        id: 'dom-selection',
        title: 'Sélectionner et modifier',
        objectifs: [
          'Sélectionner avec getElementById et querySelector.',
          'Modifier textContent et innerHTML.',
          'Changer un style via element.style.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'Sélectionner des éléments',
            code: `// Par id (unique)
const titre = document.getElementById('titre')

// Par sélecteur CSS
const premierP = document.querySelector('p')        // 1er <p>
const tous = document.querySelectorAll('.carte')     // tous → NodeList`,
          },
          {
            type: 'code',
            title: 'Modifier le contenu et le style',
            code: `document.body.innerHTML = '<p id="message">Salut</p>'
const message = document.getElementById('message')

message.textContent = 'Bonjour !'   // change le texte
message.style.color = 'green'       // change la couleur`,
          },
          {
            type: 'list',
            title: 'À retenir',
            items: [
              '`textContent` remplace le texte (sans balise).',
              '`innerHTML` accepte du HTML brut.',
              '`element.style.propriété` modifie le style en JS.',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            text: 'Préférez `textContent` à `innerHTML` dès que vous affichez des données : éviter d\u2019injecter du HTML non contrôlé (risque XSS).',
          },
        ],
        pieges: [
          'Sélectionner un élément **avant** qu\u2019il n\u2019existe dans la page → `null`, puis erreur au `.textContent`.',
          '`querySelectorAll` renvoie une **NodeList** (similaire à un tableau, mais pas toutes les méthodes).',
          'Confondre `textContent` (texte) et `innerHTML` (balises incluses).',
        ],
        playground: {
          title: 'Modifiez la page en direct',
          code: `document.body.innerHTML = '<p class="carte">Carte 1</p><p class="carte">Carte 2</p>'
const cartes = document.querySelectorAll('.carte')
console.log(cartes.length)
cartes[0].textContent = 'Modifié'
console.log(document.querySelector('.carte').textContent)`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Changer un texte',
            instructions: 'Injectez `<p id="message">Avant</p>`, remplacez son texte par **« Après »** via `textContent`, puis affichez-le (attendu : Après).',
            starter: `document.body.innerHTML = '<p id="message">Avant</p>'
const message = document.getElementById('message')
// message.textContent = 'Après'
console.log(message.textContent)`,
            expected: ['Après'],
            solution: `document.body.innerHTML = '<p id="message">Avant</p>'
const message = document.getElementById('message')
message.textContent = 'Après'
console.log(message.textContent)`,
          },
          {
            niveau: 'Moyen',
            title: 'Une liste de 2 éléments',
            instructions: 'Injectez `<ul><li>Pomme</li><li>Poire</li></ul>`, puis affichez le `textContent` de chaque `li` avec querySelectorAll + forEach (Pomme puis Poire).',
            starter: `document.body.innerHTML = '<ul><li>Pomme</li><li>Poire</li></ul>'
const items = document.querySelectorAll('li')
items.forEach(li => li.textContent && console.log(li.textContent))`,
            expected: ['Pomme', 'Poire'],
            solution: `document.body.innerHTML = '<ul><li>Pomme</li><li>Poire</li></ul>'
const items = document.querySelectorAll('li')
items.forEach(li => console.log(li.textContent))`,
          },
          {
            niveau: 'Avancé',
            title: 'Colorer en JS',
            instructions: 'Injectez `<p class="txt">Bonjour</p>`, sélectionnez `.txt`, passez sa `style.color` à **« red »**, puis affichez `style.color` (attendu : red).',
            starter: `document.body.innerHTML = '<p class="txt">Bonjour</p>'
const p = document.querySelector('.txt')
// p.style.color = 'red'
console.log(p.style.color)`,
            expected: ['red'],
            solution: `document.body.innerHTML = '<p class="txt">Bonjour</p>'
const p = document.querySelector('.txt')
p.style.color = 'red'
console.log(p.style.color)`,
          },
        ],
        recap: [
          '`getElementById`, `querySelector`, `querySelectorAll` sélectionnent.',
          '`textContent` / `innerHTML` modifient le contenu.',
          '`element.style.x` modifie le style.',
        ],
        quiz: [
          {
            question: 'Sélectionner tous les `.carte` utilise\u2026',
            options: ['getElementById', 'querySelectorAll', 'getElements'],
            answer: 1,
            explanation: 'querySelectorAll(\u0027.carte\u0027) retourne toutes les correspondances.',
          },
          {
            question: 'Que fait `.textContent` ?',
            options: [
              'Remplace le texte sans balises',
              'Ajoute une balise',
              'Supprime l\u2019élément',
            ],
            answer: 0,
            explanation: 'textContent remplace le contenu texte.',
          },
          {
            question: 'Si l\u2019élément n\u2019existe pas, getElementById renvoie\u2026',
            options: ['undefined', 'null', '[]'],
            answer: 1,
            explanation: 'Rien trouvé → null.',
          },
        ],
      },
      {
        id: 'dom-evenements',
        title: 'Les événements',
        objectifs: [
          'Attacher un gestionnaire avec addEventListener.',
          'Écouter un clic.',
          'Simuler un clic programmatique.',
        ],
        blocks: [
          {
            type: 'text',
            text: "Un **événement** déclenche du code. Le plus courant : le **clic**. On y réagit avec `addEventListener`.",
          },
          {
            type: 'code',
            title: 'Réagir à un clic',
            code: `const bouton = document.createElement('button')
bouton.textContent = 'Cliquez !'

bouton.addEventListener('click', () => {
  console.log('Clic détecté')
})

document.body.appendChild(bouton)
bouton.click()   // déclenche le clic (programmatique)`,
          },
          {
            type: 'code',
            title: 'Événements courants',
            code: `// Sur le clavier et la souris :
bouton.addEventListener('click', handler)
input.addEventListener('keydown', handler)
form.addEventListener('submit', handler)`,
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'La fonction passée à `addEventListener` s\u2019appelle un **callback** : elle ne s\u2019exécute pas immédiatement, mais quand l\u2019événement survient.',
          },
        ],
        pieges: [
          'Appeler directement le handler : `addEventListener(click, f())` exécute f tout de suite.',
          'Oublier l\u2019événement à écouter : le 1er argument (`\u0027click\u0027`) est obligatoire.',
          'Ajouter plusieurs écouteurs du même type sans le savoir (ils s\u2019empilent).',
        ],
        playground: {
          title: 'Simulez des clics',
          code: `let compteur = 0
const bouton = document.createElement('button')
bouton.textContent = 'Compteur'

bouton.addEventListener('click', () => {
  compteur++
  console.log('Compteur : ' + compteur)
})

document.body.appendChild(bouton)
bouton.click()
bouton.click()`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Un clic, un message',
            instructions: 'Sur `bouton`, ajoutez un écouteur de **clic** qui log **« Clic ! »**, puis déclenchez `bouton.click()` (attendu : Clic !).',
            starter: `const bouton = document.createElement('button')
// bouton.addEventListener('click', () => console.log('Clic !'))
bouton.click()`,
            expected: ['Clic !'],
            solution: `const bouton = document.createElement('button')
bouton.addEventListener('click', () => {
  console.log('Clic !')
})
bouton.click()`,
          },
          {
            niveau: 'Moyen',
            title: 'Compteur de clics',
            instructions: 'Incrémentez `compteur` à chaque clic et loguez **« Compteur : n »** ; déclenchez deux clics (attendu : Compteur : 1 puis Compteur : 2).',
            starter: `let compteur = 0
const bouton = document.createElement('button')
// bouton.addEventListener('click', () => {
//   compteur++
//   console.log('Compteur : ' + compteur)
// })
bouton.click()
bouton.click()`,
            expected: ['Compteur : 1', 'Compteur : 2'],
            solution: `let compteur = 0
const bouton = document.createElement('button')
bouton.addEventListener('click', () => {
  compteur++
  console.log('Compteur : ' + compteur)
})
bouton.click()
bouton.click()`,
          },
          {
            niveau: 'Avancé',
            title: 'Un bouton qui réagit',
            instructions: 'Au clic, remplacez `textContent` de `bouton` par **« Poked »** puis loguez ce texte (attendu : Poked).',
            starter: `const bouton = document.createElement('button')
bouton.textContent = 'Go'
// bouton.addEventListener('click', () => {
//   bouton.textContent = 'Poked'
//   console.log(bouton.textContent)
// })
bouton.click()`,
            expected: ['Poked'],
            solution: `const bouton = document.createElement('button')
bouton.textContent = 'Go'
bouton.addEventListener('click', () => {
  bouton.textContent = 'Poked'
  console.log(bouton.textContent)
})
bouton.click()`,
          },
        ],
        recap: [
          '`element.addEventListener(\u0027click\u0027, callback)` réagit au clic.',
          'Le callback s\u2019exécute **à l\u2019événement**, pas immédiatement.',
          '`element.click()` simule un clic en programmatique.',
        ],
        quiz: [
          {
            question: 'Quelle méthode écoute un événement ?',
            options: ['addEventListener', 'onClick()', 'listen()'],
            answer: 0,
            explanation: 'addEventListener est la méthode standard.',
          },
          {
            question: 'Quand s\u2019exécute le callback de `addEventListener` ?',
            options: [
              'Immédiatement',
              'Quand l\u2019événement se produit',
              'À la fin du fichier',
            ],
            answer: 1,
            explanation: 'Le callback attend que l\u2019événement survienne.',
          },
          {
            question: '`bouton.click()`\u2026',
            options: [
              'Simule un clic',
              'Supprime le bouton',
              'Cache le bouton',
            ],
            answer: 0,
            explanation: 'click() déclenche l\u2019événement clic comme un vrai clic.',
          },
        ],
      },
    ],
  },
]