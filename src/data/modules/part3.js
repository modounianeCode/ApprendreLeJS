export const modules = [
  {
    id: 'asynchrone',
    emoji: '⏳',
    title: 'L\u2019asynchrone',
    description:
      'Gérer les opérations qui prennent du temps : callbacks, promesses, async/await et erreurs.',
    estimatedTime: '1 h 15 min',
    lessons: [
      {
        id: 'async-callbacks',
        title: 'Les callbacks',
        objectifs: [
          'Passer une fonction en argument.',
          'Comprendre le concept de callback.',
          'Voir la différence synchrone / asynchrone.',
        ],
        blocks: [
          {
            type: 'text',
            text: 'Un **callback** est une fonction passée **en argument** à une autre fonction, appelée plus tard. C\u2019est le fondement de tout le JS asynchrone.',
          },
          {
            type: 'code',
            title: 'setTimeout : un timer asynchrone',
            code: `console.log('Début')

setTimeout(function () {
  console.log('Après 1 seconde')
}, 1000)

console.log('Fin')
// Début, Fin, puis "Après 1 seconde"`,
          },
          {
            type: 'code',
            title: 'Un callback "maison"',
            code: `function traiter(donnee, callback) {
  const maj = donnee + ' traité'
  callback(maj)          // on appelle la fonction reçue
}

const afficher = function (message) {
  console.log(message)
}

traiter('taxe', afficher)   // "taxe traité"`,
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'On lit souvent des callbacks **en flèche** : `traiter(\u0027taxe\u0027, msg => console.log(msg))`. Même idée, syntaxe courte.',
          },
          {
            type: 'list',
            title: 'À retenir',
            items: [
              'Passer une fonction en paramètre = callback.',
              'Le callback est exécuté plus tard, souvent après une tâche longue.',
              'Trop de callbacks imbriqués créent le « callback hell » (d\u2019où les promesses).',
            ],
          },
        ],
        pieges: [
          'Confondre passer la fonction (`callback`) et l\u2019exécuter (`callback()`).',
          'Oublier que le `setTimeout` est **asynchrone** : le code après s\u2019exécute en premier.',
          'Supposer qu\u2019un callback est toujours appelé une seule fois : dépend de l\u2019implémentation.',
        ],
        playground: {
          title: 'Observez l\u2019ordre',
          code: `function prepare(n, callback) {
  callback(n * 2)
}
prepare(10, function (r) {
  console.log('Résultat : ' + r)
})
console.log('Fin du script')`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Saluer au passage',
            instructions: 'Créez `saluer(callback)` qui appelle `callback(\u0027Salut !\u0027)`, puis passez-lui un callback qui log le message (attendu : Salut !).',
            starter: `// function saluer(callback) {
//   callback('Salut !')
// }
saluer(msg => console.log(msg))`,
            expected: ['Salut !'],
            solution: `function saluer(callback) {
  callback('Salut !')
}
saluer(msg => console.log(msg))`,
          },
          {
            niveau: 'Moyen',
            title: 'Livraison de données',
            instructions: 'Créez `livrer(callback)` qui appelle `callback(\u0027Données chargées\u0027)`, puis affichez le résultat (attendu : Données chargées).',
            starter: `// function livrer(callback) {
//   callback('Données chargées')
// }
livrer(function (donnees) {
  console.log(donnees)
})`,
            expected: ['Données chargées'],
            solution: `function livrer(callback) {
  callback('Données chargées')
}
livrer(function (donnees) {
  console.log(donnees)
})`,
          },
          {
            niveau: 'Avancé',
            title: 'Préparer puis afficher',
            instructions: 'Créez `prepare(n, callback)` qui appelle `callback(n * 2)`, puis affichez le résultat pour `n` = **21** (attendu : **42**).',
            starter: `// function prepare(n, callback) {
//   callback(n * 2)
// }
prepare(21, function (r) {
  console.log(r)
})`,
            expected: ['42'],
            solution: `function prepare(n, callback) {
  callback(n * 2)
}
prepare(21, function (r) {
  console.log(r)
})`,
          },
        ],
        recap: [
          'Un callback est une **fonction passée en argument**.',
          'Il s\u2019exécute quand la tâche est terminée (ou via un timer).',
          'Les callbacks imbriqués deviennent vite illisibles.',
        ],
        quiz: [
          {
            question: 'Un callback est\u2026',
            options: [
              'Une variable spéciale',
              'Une fonction passée en argument',
              'Un type de nombre',
            ],
            answer: 1,
            explanation: 'C\u2019est une fonction qu\u2019on passe à une autre pour l\u2019appeler plus tard.',
          },
          {
            question: 'Que se passe-t-il dans `setTimeout(f, 1000)` ?',
            options: [
              'f s\u2019exécute immédiatement',
              'f s\u2019exécute après environ 1 seconde',
              'f est ignoré',
            ],
            answer: 1,
            explanation: 'f est appelé via le callback du timer (asynchrone).',
          },
          {
            question: 'Où placer le callback dans la signature `traiter(donnee, callback)` ?',
            options: [
              'En premier argument',
              'En second argument',
              'Dans une variable globale',
            ],
            answer: 1,
            explanation: 'callback est le second paramètre.',
          },
        ],
      },
      {
        id: 'async-promises',
        title: 'Les promesses (Promises)',
        objectifs: [
          'Comprendre les 3 états d\u2019une promesse.',
          'Enchaîner avec `.then()`.',
          'Gérer l\u2019échec avec `.catch()`.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'Créer et consommer une promesse',
            code: `const promesse = new Promise((resoudre, rejeter) => {
  // travail asynchrone...
  resoudre('Succès')      // réussite
  // rejeter('Échec')     // échec
})

promesse
  .then((valeur) => console.log(valeur))
  .catch((erreur) => console.log(erreur))`,
          },
          {
            type: 'code',
            title: 'Promise.resolve : version express',
            code: `Promise.resolve(10)
  .then((v) => v * 2)          // on peut enchaîner
  .then((v) => console.log(v)) // 20

Promise.reject('boom')
  .catch((e) => console.log('Géré :', e))`,
          },
          {
            type: 'list',
            title: 'À retenir',
            items: [
              'Une promesse est soit **résolue (fulfilled)**, soit **rejetée (rejected)**, tant qu\u2019elle est en attente (**pending**).',
              '`then(callback)` traite la réussite, `catch(callback)` l\u2019échec.',
              'On peut enchaîner plusieurs `.then()` : la valeur circule.',
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'Les promesses rendent l\u2019ordre **prévisible** : chaque `.then` reçoit le résultat du précédent, sans imbrication.',
          },
        ],
        pieges: [
          'Oublier le `return` dans un `.then` : la prochaine étape reçoit `undefined`.',
          'Ne pas attaché de `.catch` : une promesse rejetée devient une erreur silencieuse (unhandled rejection).',
          'Croire que la promesse s\u2019exécute tout de suite : le callback de `then` est toujours **asynchrone**.',
        ],
        playground: {
          title: 'Promettez-vous !',
          code: `Promise.resolve(4)
  .then((v) => v * v)
  .then((v) => console.log('Carré :', v))
  .catch((e) => console.log('Erreur :', e))`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Une valeur résolue',
            instructions: 'Utilisez `Promise.resolve(\u0027Résolu\u0027)` et affichez sa valeur avec `.then(v => console.log(v))` (attendu : Résolu).',
            starter: `// Promise.resolve('Résolu').then(v => console.log(v))`,
            expected: ['Résolu'],
            solution: `Promise.resolve('Résolu').then((v) => console.log(v))`,
          },
          {
            niveau: 'Moyen',
            title: 'Chaîne de promesses',
            instructions: 'Enchaînez deux `.then` : `Promise.resolve(10)` → multipliez par 2 → affichez (attendu : **20**).',
            starter: `// Promise.resolve(10)
//   .then(v => v * 2)
//   .then(v => console.log(v))`,
            expected: ['20'],
            solution: `Promise.resolve(10)
  .then((v) => v * 2)
  .then((v) => console.log(v))`,
          },
          {
            niveau: 'Avancé',
            title: 'Gérer un rejet',
            instructions: 'Créez `Promise.reject(new Error(\u0027Échec\u0027))`, attrapez-la avec `.catch` et affichez `e.message` (attendu : Échec).',
            starter: `// Promise.reject(new Error('Échec'))
//   .catch(e => console.log(e.message))`,
            expected: ['Échec'],
            solution: `Promise.reject(new Error('Échec'))
  .catch((e) => console.log(e.message))`,
          },
        ],
        recap: [
          'Promesse : pending → fulfilled ou rejected.',
          '`then` = succès, `catch` = échec.',
          'Les `.then` enchaînés se transmettent la valeur.',
        ],
        quiz: [
          {
            question: 'Que traite `.catch()` ?',
            options: [
              'La réussite',
              'L\u2019échec',
              'Les deux',
            ],
            answer: 1,
            explanation: 'catch gère les promesses rejetées (rejected).',
          },
          {
            question: 'États possibles d\u2019une promesse \u2026',
            options: [
              'début, milieu, fin',
              'pending, fulfilled, rejected',
              'start, stop, restart',
            ],
            answer: 1,
            explanation: 'Les trois états sont pending, fulfilled et rejected.',
          },
          {
            question: 'Dans `.then(v => v * 2).then(v => console.log(v))`, le 2e then reçoit\u2026',
            options: [
              'La valeur d\u2019entrée initiale',
              'Le résultat du 1er then',
              'undefined',
            ],
            answer: 1,
            explanation: 'Le résultat de v * 2 circule vers le then suivant.',
          },
        ],
      },
      {
        id: 'async-await',
        title: 'async / await',
        objectifs: [
          'Marquer une fonction `async`.',
          'Utiliser `await` sur une promesse.',
          'Lire du code asynchrone comme du synchrone.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'De .then() à async/await',
            code: `// Style .then()
Promise.resolve(5)
  .then((v) => console.log(v * 2))  // 10

// Style async / await
async function double() {
  const v = await Promise.resolve(5)
  console.log(v * 2)   // 10
}
double()`,
          },
          {
            type: 'code',
            title: 'Règles',
            code: `// await ne peut s'utiliser que dans une fonction async
async function demarrer() {
  const utilisateur = await Promise.resolve('Awa')
  console.log('Bienvenue', utilisateur)
}
demarrer()`,
          },
          {
            type: 'callout',
            variant: 'info',
            text: '`await` **suspend** la fonction async jusqu\u2019à la résolution de la promesse, puis reprend. Le reste du programme continue, lui, sans être bloqué.',
          },
        ],
        pieges: [
          'Utiliser `await` hors d\u2019une fonction `async` → **syntaxe invalide**.',
          'Oublier que `async` est asynchrone : la fonction renvoie une promesse.',
          'Attendre `await fetch(...)` sans catch : les erreurs réseau passent inaperçues.',
        ],
        playground: {
          title: 'Le code asynchrone qui se lit bien',
          code: `async function charger() {
  const note = await Promise.resolve(18)
  console.log('Note chargée :', note)
  return note
}
charger().then((n) => console.log('Doublée :', n * 2))`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Await sur une valeur',
            instructions: 'Dans `lecture()`, `await Promise.resolve(\u0027Donnée\u0027)` puis loguez la valeur (attendu : Donnée).',
            starter: `// async function lecture() {
//   const v = await Promise.resolve('Donnée')
//   console.log(v)
// }
// lecture()`,
            expected: ['Donnée'],
            solution: `async function lecture() {
  const v = await Promise.resolve('Donnée')
  console.log(v)
}
lecture()`,
          },
          {
            niveau: 'Moyen',
            title: 'Await sur une promesse',
            instructions: 'Dans `obtenir()`, `await Promise.resolve(42)` puis logguez (attendu : **42**).',
            starter: `// async function obtenir() {
//   const v = await Promise.resolve(42)
//   console.log(v)
// }
// obtenir()`,
            expected: ['42'],
            solution: `async function obtenir() {
  const v = await Promise.resolve(42)
  console.log(v)
}
obtenir()`,
          },
          {
            niveau: 'Avancé',
            title: 'Deux attentes',
            instructions: 'Dans `somme()`, attendez **3** puis **4** avec `await`, loguez `a + b` (attendu : **7**).',
            starter: `// async function somme() {
//   const a = await Promise.resolve(3)
//   const b = await Promise.resolve(4)
//   console.log(a + b)
// }
// somme()`,
            expected: ['7'],
            solution: `async function somme() {
  const a = await Promise.resolve(3)
  const b = await Promise.resolve(4)
  console.log(a + b)
}
somme()`,
          },
        ],
        recap: [
          '`async function` rend une fonction asynchrone.',
          '`await` attend la résolution d\u2019une promesse.',
          'Résultat : du code séquentiel et lisible.',
        ],
        quiz: [
          {
            question: 'Où peut-on utiliser `await` ?',
            options: [
              'Partout',
              'Dans une fonction async',
              'Dans une boucle for',
            ],
            answer: 1,
            explanation: 'await exige un contexte async.',
          },
          {
            question: 'Que renvoie une fonction `async` ?',
            options: [
              'La valeur de return directement',
              'Toujours une promesse',
              'undefined',
            ],
            answer: 1,
            explanation: 'Une fonction async renvoie toujours une promesse.',
          },
          {
            question: '`await` bloque-t-il toute la page ?',
            options: [
              'Oui',
              'Non, il suspend uniquement la fonction async',
              'Seulement au premier chargement',
            ],
            answer: 1,
            explanation: 'Le reste du programme continue pendant l\u2019attente.',
          },
        ],
      },
      {
        id: 'async-erreurs',
        title: 'Erreurs, try/catch et localStorage',
        objectifs: [
          'Intercepter une erreur avec try/catch.',
          'Comprendre le rôle de `finally`.',
          'Persister du texte avec localStorage.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'try / catch',
            code: `try {
  JSON.parse('pas du json')   // erreur au runtime
  console.log('jamais atteint')
} catch (err) {
  console.log('Erreur attrapée :', err.message)
} finally {
  console.log('Toujours exécuté')
}`,
          },
          {
            type: 'code',
            title: 'Sauvegarder et relire',
            code: `// Sauvegarder (une valeur par clé)
localStorage.setItem('score', '42')
localStorage.setItem('taches', JSON.stringify(['a', 'b']))

// Relire
console.log(localStorage.getItem('score'))          // "42"
console.log(JSON.parse(localStorage.getItem('taches')))

// Supprimer
localStorage.removeItem('score')`,
          },
          {
            type: 'list',
            title: 'À retenir',
            items: [
              'Le bloc `try` tente du code risqué.',
              'Si une erreur survient, le bloc `catch` s\u2019exécute avec `err`.',
              '`finally` s\u2019exécute dans tous les cas (succès ou échec).',
              '`localStorage` ne stocke que des **chaînes** : utilisez `JSON.stringify`.',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            text: 'Ici dans le bac à sable, `localStorage` est indisponible (page isolée). En revanche `try/catch` fonctionne et c\u2019est lui qu\u2019on teste !',
          },
        ],
        pieges: [
          'Croire que `catch` gère aussi les erreurs **de syntaxe** : non, uniquement les erreurs d\u2019exécution.',
          'Oublier que `localStorage` stocke du texte : les objets doivent passer par `JSON.stringify`.',
          'Avaler toutes les erreurs sans les journaliser : gardez un `console.log` pour déboguer.',
        ],
        playground: {
          title: 'Attrapez les erreurs',
          code: `function risque() {
  return JSON.parse('pas json')
}
try {
  risque()
} catch {
  console.log('Trop risqué...')
} finally {
  console.log('Terminé !')
}`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'L\u2019erreur est gérée',
            instructions: 'Appelez `diviser()` qui lève une erreur, dans un `try`, et loguez **« Erreur gérée »** dans le `catch` (attendu : Erreur gérée).',
            starter: `function diviser() {
  throw new Error('Division refusée')
}
// try {
//   diviser()
// } catch {
//   console.log('Erreur gérée')
// }`,
            expected: ['Erreur gérée'],
            solution: `function diviser() {
  throw new Error('Division refusée')
}
try {
  diviser()
} catch {
  console.log('Erreur gérée')
}`,
          },
          {
            niveau: 'Moyen',
            title: 'Maîtriser une erreur',
            instructions: 'Tentez `JSON.parse(\u0027pas json\u0027)` dans un `try`, et logguez **« JSON invalide »** dans le `catch` (attendu : JSON invalide).',
            starter: `// try {
//   JSON.parse('pas json')
// } catch {
//   console.log('JSON invalide')
// }`,
            expected: ['JSON invalide'],
            solution: `try {
  JSON.parse('pas json')
} catch {
  console.log('JSON invalide')
}`,
          },
          {
            niveau: 'Avancé',
            title: 'catch puis finally',
            instructions: 'Dans le `try`, levez une erreur. Logguez **« Attrapé »** dans `catch`, puis **« Fini »** dans `finally` (attendu : Attrapé puis Fini).',
            starter: `// try {
//   throw new Error('boom')
// } catch {
//   console.log('Attrapé')
// } finally {
//   console.log('Fini')
// }`,
            expected: ['Attrapé', 'Fini'],
            solution: `try {
  throw new Error('boom')
} catch {
  console.log('Attrapé')
} finally {
  console.log('Fini')
}`,
          },
        ],
        recap: [
          '`try/catch/finally` intercepte les erreurs d\u2019exécution.',
          '`catch` réagit à l\u2019erreur, `finally` s\u2019exécute toujours.',
          '`localStorage` ne garde que des chaînes (pensez à `JSON.stringify`).',
        ],
        quiz: [
          {
            question: 'Le bloc enfin (`finally`) s\u2019exécute\u2026',
            options: [
              'Seulement si erreur',
              'Dans tous les cas',
              'Avant le try',
            ],
            answer: 1,
            explanation: 'finally se déclenche toujours, succès ou échec.',
          },
          {
            question: '`localStorage` stocke\u2026',
            options: [
              'Des objets complets',
              'Uniquement des chaînes',
              'Des fonctions',
            ],
            answer: 1,
            explanation: 'Tout est converti en texte ; on sérialise avec JSON.stringify.',
          },
          {
            question: 'Que fait `JSON.stringify(taches)` ?',
            options: [
              'Transforme un objet en texte JSON',
              'Transforme du JSON en objet',
              'Supprime les taches',
            ],
            answer: 0,
            explanation: 'stringify sérialise : objet → texte JSON.',
          },
        ],
      },
    ],
  },
  {
    id: 'classes',
    emoji: '🏗️',
    title: 'Classes, OOP & modules',
    description:
      'Créer des maquettes d\u2019objets avec les classes, hériter et organiser le code en modules.',
    estimatedTime: '1 h',
    lessons: [
      {
        id: 'classes-base',
        title: 'Les classes',
        objectifs: [
          'Définir une classe avec un constructeur.',
          'Créer des instances avec `new`.',
          'Ajouter des méthodes.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'Définir une classe',
            code: `class Animal {
  constructor(nom) {
    this.nom = nom          // propriété de l'instance
  }

  parler() {
    return this.nom + ' fait du bruit'
  }
}

const rex = new Animal('Rex')
console.log(rex.nom)          // Rex
console.log(rex.parler())     // Rex fait du bruit`,
          },
          {
            type: 'list',
            title: 'À retenir',
            items: [
              '`class` définit un modèle, `new` fabrique des **instances**.',
              '`constructor(...)` initialise l\u2019instance (`this`).',
              '`this` désigne l\u2019instance courante.',
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'Une classe est un **sucre syntaxique** : sous le capot, ce sont des fonctions. Elle rend simplement la programmation orientée objet plus claire.',
          },
        ],
        pieges: [
          'Oublier `new` : `Animal(\u0027Rex\u0027)` sans new cause une erreur/défaut.',
          'Oublier `this.` quand on assigne (`nom = nom` n\u2019accroche rien).',
          'Mettre une virgule entre `constructor` et son corps : non, c\u2019est entre méthodes.',
        ],
        playground: {
          title: 'Créez des instances',
          code: `class Voiture {
  constructor(marque) {
    this.marque = marque
  }
  klaxon() {
    return this.marque + ' fait Beep Beep'
  }
}
const toyota = new Voiture('Toyota')
console.log(toyota.marque)
console.log(toyota.klaxon())`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Une classe et son nom',
            instructions: 'Définissez `class Animal` avec un constructeur qui enregistre `this.nom`, créez `new Animal(\u0027Rex\u0027)` puis affichez `.nom` (attendu : Rex).',
            starter: `// class Animal {
//   constructor(nom) { this.nom = nom }
// }
// const rex = new Animal('Rex')
console.log(rex.nom)`,
            expected: ['Rex'],
            solution: `class Animal {
  constructor(nom) {
    this.nom = nom
  }
}
const rex = new Animal('Rex')
console.log(rex.nom)`,
          },
          {
            niveau: 'Moyen',
            title: 'Faites parler votre animal',
            instructions: 'Ajoutez `parler()` qui retourne `this.nom + \u0027 fait du bruit\u0027` puis affichez `rex.parler()` avec `nom` = « Rex » (attendu : Rex fait du bruit).',
            starter: `class Animal {
  constructor(nom) { this.nom = nom }
  // parler() { return this.nom + ' fait du bruit' }
}
const rex = new Animal('Rex')
console.log(rex.parler())`,
            expected: ['Rex fait du bruit'],
            solution: `class Animal {
  constructor(nom) {
    this.nom = nom
  }
  parler() {
    return this.nom + ' fait du bruit'
  }
}
const rex = new Animal('Rex')
console.log(rex.parler())`,
          },
          {
            niveau: 'Avancé',
            title: 'Une seule ligne',
            instructions: 'Définissez `class Chien` avec la méthode `aboie()` qui retourne **« Ouaf ! »**, puis affichez `new Chien(\u0027Rex\u0027).aboie()` (attendu : Ouaf !).',
            starter: `// class Chien {
//   aboie() { return 'Ouaf !' }
// }
console.log(new Chien('Rex').aboie())`,
            expected: ['Ouaf !'],
            solution: `class Chien {
  aboie() {
    return 'Ouaf !'
  }
}
console.log(new Chien('Rex').aboie())`,
          },
        ],
        recap: [
          '`class` + `constructor` modélisent un objet.',
          '`new` crée une instance ; `this` = l\u2019instance.',
          'Les méthodes vivent dans la classe et utilisent `this`.',
        ],
        quiz: [
          {
            question: 'Comment créer une instance ?',
            options: ['Animal()', 'new Animal()', 'make Animal'],
            answer: 1,
            explanation: 'Le mot-clé new instancie la classe.',
          },
          {
            question: 'Que représente `this` dans une méthode ?',
            options: [
              'La classe entière',
              'L\u2019instance courante',
              'Le fichier',
            ],
            answer: 1,
            explanation: 'this pointe sur l\u2019objet construit.',
          },
          {
            question: 'Le `constructor` sert à\u2026',
            options: [
              'Initialiser l\u2019instance',
              'Détruire la classe',
              'Afficher un log',
            ],
            answer: 0,
            explanation: 'Le constructeur pose l\u2019état initial de l\u2019instance.',
          },
        ],
      },
      {
        id: 'classes-heritage',
        title: 'L\u2019héritage avec extends',
        objectifs: [
          'Hériter avec `extends`.',
          'Surcharger une méthode.',
          'Appeler le parent avec `super()`.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'Hériter et surcharger',
            code: `class Animal {
  parler() {
    return '...'
  }
}

class Chien extends Animal {
  parler() {                    // surcharge
    return 'Ouaf !'
  }
}

const chien = new Chien()
console.log(chien.parler())     // Ouaf !`,
          },
          {
            type: 'code',
            title: "super() dans le constructeur",
            code: `class Animal {
  constructor(nom) {
    this.nom = nom
  }
}

class Chien extends Animal {
  constructor(nom, race) {
    super(nom)          // appelle le constructeur parent
    this.race = race
  }
}

const rex = new Chien('Rex', 'labrador')
console.log(rex.nom, rex.race)   // Rex labrador`,
          },
          {
            type: 'callout',
            variant: 'info',
            text: '`super(...)` dans le constructeur appelle le constructeur du parent **avant** d\u2019utiliser `this`. Sinon, erreur.',
          },
        ],
        pieges: [
          'Oublier d\u2019appeler `super()` avant `this` dans un constructeur hérité.',
          'Croire que la classe enfant a automatiquement le constructeur du parent : oui, par défaut, mais `super(...)` matériellement pour surcharger.',
          'Confondre surcharge (redéfinir) et « extends » (hériter).',
        ],
        playground: {
          title: 'La famille des animaux',
          code: `class Animal {
  constructor(nom) { this.nom = nom }
  parler() { return this.nom + ' parle' }
}
class Chat extends Animal {
  parler() { return this.nom + ' miaule' }
}
const chat = new Chat('Minou')
console.log(chat.parler())
console.log(chat.nom)`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Hériter sans effort',
            instructions: 'Définissez `class Animal` avec `marcher()` retournant **« Marche... »**, et `class Chien extends Animal`. Affichez `new Chien().marcher()` (attendu : Marche...).',
            starter: `class Animal {
  // marcher() { return 'Marche...' }
}
class Chien extends Animal {}
console.log(new Chien().marcher())`,
            expected: ['Marche...'],
            solution: `class Animal {
  marcher() {
    return 'Marche...'
  }
}
class Chien extends Animal {}
console.log(new Chien().marcher())`,
          },
          {
            niveau: 'Moyen',
            title: 'Le chien aboie',
            instructions: 'Surchargez `parler()` dans `class Chien extends Animal` pour retourner **« Ouaf ! »** et affichez-le (attendu : Ouaf !).',
            starter: `class Animal {
  parler() { return '...' }
}
// class Chien extends Animal {
//   parler() { return 'Ouaf !' }
// }
console.log(new Chien().parler())`,
            expected: ['Ouaf !'],
            solution: `class Animal {
  parler() {
    return '...'
  }
}
class Chien extends Animal {
  parler() {
    return 'Ouaf !'
  }
}
console.log(new Chien().parler())`,
          },
          {
            niveau: 'Avancé',
            title: 'Nom + aboiement',
            instructions: 'Avec `class Animal` (constructeur nom) et `class Chien extends Animal` (super(nom)), affichez `new Chien(\u0027Rex\u0027).aboie()` où `aboie()` retourne `this.nom + \u0027 fait Ouaf !\u0027`.',
            starter: `// class Animal {
//   constructor(nom) { this.nom = nom }
// }
class Chien extends Animal {
  // constructor(nom) { super(nom) }
  aboie() { return this.nom + ' fait Ouaf !' }
}
console.log(new Chien('Rex').aboie())`,
            expected: ['Rex fait Ouaf !'],
            solution: `class Animal {
  constructor(nom) {
    this.nom = nom
  }
}
class Chien extends Animal {
  constructor(nom) {
    super(nom)
  }
  aboie() {
    return this.nom + ' fait Ouaf !'
  }
}
console.log(new Chien('Rex').aboie())`,
          },
        ],
        recap: [
          '`extends` hérite d\u2019une classe parente.',
          'Une méthode du parent peut être **surchargée**.',
          '`super(...)` appelle le constructeur parent (avant `this`).',
        ],
        quiz: [
          {
            question: 'Quel mot-clé active l\u2019héritage ?',
            options: ['extends', 'inherit', 'parent'],
            answer: 0,
            explanation: 'class Chien extends Animal hérite d\u2019Animal.',
          },
          {
            question: '`super(nom)` dans un constructeur appelle\u2026',
            options: [
              'La méthode courante',
              'Le constructeur du parent',
              'Une fonction globale',
            ],
            answer: 1,
            explanation: 'super() invoque le constructeur de la classe parente.',
          },
          {
            question: 'Surcharger une méthode, c\u2019est\u2026',
            options: [
              'La supprimer',
              'La redéfinir dans l\u2019enfant',
              'La rendre privée',
            ],
            answer: 1,
            explanation: 'L\u2019enfant redéfinit une méthode du parent avec son propre code.',
          },
        ],
      },
      {
        id: 'classes-modules',
        title: 'Modules : import / export',
        objectifs: [
          'Exporter une valeur avec `export`.',
          'Importer avec `import`.',
          'Connaître les bonnes pratiques (méthodes statiques).',
        ],
        blocks: [
          {
            type: 'code',
            title: 'exporter — ex : math.js',
            code: `// math.js
export const PI = 3.14159

export function double(n) {
  return n * 2
}

export class Outil {
  static version() {
    return 'v1.0'
  }
}`,
          },
          {
            type: 'code',
            title: 'importer — ex : app.js',
            code: `// app.js
import { PI, double, Outil } from './math.js'

console.log(PI)
console.log(double(5))
console.log(Outil.version())`,
          },
          {
            type: 'list',
            title: 'Bonnes pratiques',
            items: [
              'Une valeur remarquable par fichier → **export default**.',
              'Plusieurs fonctions liées → **exports nommés**.',
              '**Méthodes statiques** (`static`) : appelées sur la classe, pas sur l\u2019instance.',
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'Dans le bac à sable, impossible de créer de vrais modules. On s\u2019entraîne donc sur les **méthodes statiques** et les fonctions pures, qui marchent partout !',
          },
        ],
        pieges: [
          'Oublier `export` devant la déclaration → import impossible.',
          'Les modules ne s\u2019exécutent qu\u2019une fois et sont en **strict**.',
          'Le chemin de l\u2019import doit être correct (`./math.js`, extension comprise).',
        ],
        playground: {
          title: 'Un mini-module en une classe',
          code: `class BoiteAOutils {
  static carre(n) {
    return n * n
  }
  static racine(n) {
    return Math.sqrt(n)
  }
}
console.log(BoiteAOutils.carre(8))
console.log(BoiteAOutils.racine(81))`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Une méthode statique',
            instructions: 'Dans `class MathUtile`, créez `static double(n)` retournant `n * 2`, puis affichez `MathUtile.double(5)` (attendu : **10**).',
            starter: `class MathUtile {
  // static double(n) { return n * 2 }
}
console.log(MathUtile.double(5))`,
            expected: ['10'],
            solution: `class MathUtile {
  static double(n) {
    return n * 2
  }
}
console.log(MathUtile.double(5))`,
          },
          {
            niveau: 'Moyen',
            title: 'Des méthodes statiques',
            instructions: 'Ajoutez `static additionner(a, b)` à `class Calculateur`, puis affichez `Calculateur.additionner(2, 3)` (attendu : **5**).',
            starter: `class Calculateur {
  // static additionner(a, b) { return a + b }
}
console.log(Calculateur.additionner(2, 3))`,
            expected: ['5'],
            solution: `class Calculateur {
  static additionner(a, b) {
    return a + b
  }
}
console.log(Calculateur.additionner(2, 3))`,
          },
          {
            niveau: 'Avancé',
            title: 'Le carré statique',
            instructions: 'Dans `class Utile`, créez `static carre(n)` retournant `n * n`, puis affichez `Utile.carre(9)` (attendu : **81**).',
            starter: `class Utile {
  // static carre(n) { return n * n }
}
console.log(Utile.carre(9))`,
            expected: ['81'],
            solution: `class Utile {
  static carre(n) {
    return n * n
  }
}
console.log(Utile.carre(9))`,
          },
        ],
        recap: [
          '`export` expose, `import` consomme.',
          '`static` déclare une méthode accessible sans instance.',
          'Bonne organisation : un fichier par responsabilité.',
        ],
        quiz: [
          {
            question: 'Une méthode `static` s\u2019appelle sur\u2026',
            options: [
              'L\u2019instance',
              'La classe elle-même',
              'Une variable globale',
            ],
            answer: 1,
            explanation: 'On appelle Classe.methode(), sans new.',
          },
          {
            question: 'Le mot-clé pour exposer une valeur\u2026',
            options: ['import', 'export', 'public'],
            answer: 1,
            explanation: 'export rend la valeur disponible pour d\u2019autres fichiers.',
          },
          {
            question: '`import { x } from \u0027./f.js\u0027`\u2026',
            options: [
              'Importe une valeur nommée x',
              'Crée un fichier f',
              'Déclare une classe',
            ],
            answer: 0,
            explanation: 'Les accolades importent des exports nommés.',
          },
        ],
      },
    ],
  },
  {
    id: 'miniprojets',
    emoji: '🎯',
    title: 'Mini-projets de synthèse',
    description:
      'Mettre en pratique tout le cours : calculatrice, gestionnaire de tâches et quiz.',
    estimatedTime: '50 min',
    lessons: [
      {
        id: 'projets-calculatrice',
        title: 'Mini-projet 1 : la calculatrice',
        objectifs: [
          'Créer une fonction de calcul.',
          'Gérer plusieurs opérateurs.',
          'Structurer un petit programme.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'La base de votre calculatrice',
            code: `function calculer(a, operateur, b) {
  if (operateur === '+') return a + b
  if (operateur === '-') return a - b
  if (operateur === '*') return a * b
  if (operateur === '/') return a / b
  return 'Opérateur inconnu'
}

console.log(calculer(10, '+', 5))   // 15
console.log(calculer(10, '*', 3))   // 30`,
          },
          {
            type: 'text',
            text: 'Une calculatrice, c\u2019est surtout une fonction qui **décide** selon l\u2019opérateur. On réutilise ici conditions, fonctions et retours.',
          },
          {
            type: 'list',
            title: 'Pistes pour aller plus loin',
            items: [
              'Ajoutez `%` (modulo) et `**` (puissance).',
              'Gérez la division par zéro (`b === 0`).',
              'Enchaînez plusieurs calculs dans une boucle.',
            ],
          },
        ],
        pieges: [
          'Oublier le `return` après un `if` : la fonction continue et renvoie le mauvais résultat.',
          "Confondre la chaîne `'+'` et l\u2019opérateur `+`.",
          'Ne pas prévoir un cas par défaut pour un opérateur inconnu.',
        ],
        playground: {
          title: 'Testez votre calculatrice',
          code: `function calculer(a, operateur, b) {
  if (operateur === '+') return a + b
  if (operateur === '-') return a - b
  if (operateur === '*') return a * b
  if (operateur === '/') return a / b
  return 'Opérateur inconnu'
}
console.log(calculer(9, '*', 4))
console.log(calculer(20, '/', 5))`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Addition et soustraction',
            instructions: 'Créez `calculer(a, operateur, b)` qui gère **`+`** et **`-`**, puis affichez `calculer(10, "+", 5)` (attendu : **15**).',
            starter: `// if (operateur === '+') return a + b
// if (operateur === '-') return a - b
console.log(calculer(10, '+', 5))`,
            expected: ['15'],
            solution: `function calculer(a, operateur, b) {
  if (operateur === '+') return a + b
  if (operateur === '-') return a - b
}
console.log(calculer(10, '+', 5))`,
          },
          {
            niveau: 'Moyen',
            title: 'La multiplication',
            instructions: 'Complétez `multiplier(a, b)` pour retourner `a * b`, puis affichez `multiplier(7, 6)` (attendu : **42**).',
            starter: `// function multiplier(a, b) { return a * b }
console.log(multiplier(7, 6))`,
            expected: ['42'],
            solution: `function multiplier(a, b) {
  return a * b
}
console.log(multiplier(7, 6))`,
          },
          {
            niveau: 'Avancé',
            title: 'La division',
            instructions: 'Créez `calcul = (a, b) => a / b` puis affichez `calcul(20, 4)` (attendu : **5**).',
            starter: `// const calcul = (a, b) => a / b
console.log(calcul(20, 4))`,
            expected: ['5'],
            solution: `const calcul = (a, b) => a / b
console.log(calcul(20, 4))`,
          },
        ],
        recap: [
          'Une calculatrice = une fonction qui **branche** selon l\u2019opérateur.',
          'Des conditions bien placées + des `return` l\u2019évitent les erreurs.',
          'La flèche `(a, b) => a / b` compacte une division.',
        ],
        quiz: [
          {
            question: 'Pour enchaîner les opérateurs dans `calculer`, on utilise\u2026',
            options: ['switch', 'des if séparés', 'des boucles'],
            answer: 1,
            explanation: 'Chaque opérateur correspond à un if (ou un switch/ternaire).',
          },
          {
            question: 'Que renvoie `calculer(10, \u0027/\u0027, 2)` si `/` est géré ?',
            options: ['5', '10', 'NaN'],
            answer: 0,
            explanation: '10 / 2 = 5.',
          },
          {
            question: 'Pour l\u2019opérateur inconnu, on renvoie\u2026',
            options: [
              'Une erreur',
              'Un message ou une valeur par défaut',
              'Rien',
            ],
            answer: 1,
            explanation: 'Un retour par défaut clarifie le comportement.',
          },
        ],
      },
      {
        id: 'projets-todo',
        title: 'Mini-projet 2 : la todo list',
        objectifs: [
          'Gérer une liste de tâches.',
          'Filtrer selon un état (fait / à faire).',
          'Calculer des statistiques.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'Un petit gestionnaire de tâches',
            code: `const taches = [
  { id: 1, libelle: 'Apprendre JS', fait: true },
  { id: 2, libelle: 'Faire les exercices', fait: false },
  { id: 3, libelle: 'Faire une pause', fait: true }
]

const faites = taches.filter(t => t.fait)
console.log(faites.length)   // 2

const libelles = taches.map(t => t.libelle)
console.log(libelles)`,
          },
          {
            type: 'list',
            title: 'Pistes',
            items: [
              '`filter` extrait les tâches selon leur état.',
              '`map` transforme la liste en libellés.',
              '`reduce` calcule des totaux (exemple : heures passées).',
            ],
          },
          {
            type: 'list',
            title: 'À retenir',
            items: [
              'On modélise une tâche avec un **objet** { id, libelle, fait }.',
              'Les méthodes de tableau rendent la manipulation élégante.',
              'Pensez « données immuables » : on crée, on ne détruit pas.',
            ],
          },
        ],
        pieges: [
          '`filter` renvoie un tableau : compter avec `.length`, pas avec le tableau brut.',
          'Oublier de déclarer les tâches fatiguées (`fait`) avec le bon type booléen.',
        ],
        playground: {
          title: 'Triez vos tâches',
          code: `const taches = [
  { libelle: 'Dormir', fait: true },
  { libelle: 'Coder', fait: false }
]
const restantes = taches.filter(t => !t.fait)
console.log(restantes)
console.log(taches.map(t => t.libelle).join(', '))`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Une liste qui grandit',
            instructions: 'Ajoutez **« Planifier »** à `taches` = **[« Acheter », « Ranger »]** avec `.push`, puis affichez le tableau (attendu : [\u0027Acheter\u0027,\u0027Ranger\u0027,\u0027Planifier\u0027]).',
            starter: `const taches = ['Acheter', 'Ranger']
// taches.push('Planifier')
console.log(taches)`,
            expected: ['["Acheter","Ranger","Planifier"]'],
            solution: `const taches = ['Acheter', 'Ranger']
taches.push('Planifier')
console.log(taches)`,
          },
          {
            niveau: 'Moyen',
            title: 'Combien de tâches faites ?',
            instructions: 'Filtrez les tâches ayant `fait` = **true** puis affichez `.length` (attendu : **2**).',
            starter: `const taches = [
  { id: 1, fait: true },
  { id: 2, fait: false },
  { id: 3, fait: true }
]
// const faites = taches.filter(t => t.fait)
console.log(faites.length)`,
            expected: ['2'],
            solution: `const taches = [
  { id: 1, fait: true },
  { id: 2, fait: false },
  { id: 3, fait: true }
]
const faites = taches.filter(t => t.fait)
console.log(faites.length)`,
          },
          {
            niveau: 'Avancé',
            title: 'La moyenne des durées',
            instructions: 'Avec `durees` = **[1, 2, 3]**, calculez `total` avec `.reduce((a, b) => a + b, 0)` puis affichez `total / durees.length` (attendu : **2**).',
            starter: `const durees = [1, 2, 3]
// const total = durees.reduce((a, b) => a + b, 0)
console.log(total / durees.length)`,
            expected: ['2'],
            solution: `const durees = [1, 2, 3]
const total = durees.reduce((a, b) => a + b, 0)
console.log(total / durees.length)`,
          },
        ],
        recap: [
          'On stocke les tâches en **liste d\u2019objets**.',
          '`filter` isole les tâches faites, `map` transforme, `reduce` agrège.',
          'Le booléen `fait` pilote les filtres.',
        ],
        quiz: [
          {
            question: 'Pour ne garder que les tâches non faites, on filtre avec\u2026',
            options: ['t.fait', '!t.fait', 't === "fait"'],
            answer: 1,
            explanation: '!t.fait garde les tâches dont le booléen fait est false.',
          },
          {
            question: 'Combien d\u2019éléments pour `[{fait:true},{fait:false},{fait:true}].filter(t=>t.fait)` ?',
            options: ['1', '2', '3'],
            answer: 1,
            explanation: 'Deux objets ont fait : true.',
          },
          {
            question: 'Une tâche est bien modélisée par\u2026',
            options: [
              'Une chaîne',
              'Un objet { id, libelle, fait }',
              'Un nombre',
            ],
            answer: 1,
            explanation: 'L\u2019objet regroupe les informations de la tâche.',
          },
        ],
      },
      {
        id: 'projets-quiz',
        title: 'Mini-projet 3 : le quiz interactif',
        objectifs: [
          'Modéliser des questions.',
          'Calculer un pourcentage.',
          'Valider une réponse.',
        ],
        blocks: [
          {
            type: 'code',
            title: 'Scoring d\u2019un quiz',
            code: `const score = {
  bonnes: 3,
  total: 5
}

const pourcentage = Math.round((score.bonnes / score.total) * 100)
console.log(pourcentage + ' %')   // 60 %`,
          },
          {
            type: 'code',
            title: 'Valider une réponse',
            code: `function verifier(reponse, bonne) {
  return reponse === bonne ? 'Bonne réponse' : 'Mauvaise réponse'
}
console.log(verifier('B', 'B'))   // Bonne réponse`,
          },
          {
            type: 'list',
            title: 'Pistes',
            items: [
              'Un quiz = une liste d\u2019objets `{ question, bonne, options }`.',
              'On compare avec **`===`** (jamais `==`).',
              'On arrondit le pourcentage avec `Math.round`.',
            ],
          },
        ],
        pieges: [
          'Comparer réponse et correction avec `=` (affectation !).',
          'Oublier `Math.round` : le pourcentage devient un long décimal.',
          'Diviser dans le mauvais sens (`total / bonnes`).',
        ],
        playground: {
          title: 'Calculez un score',
          code: `const score = { bonnes: 4, total: 5 }
const pourcentage = Math.round((score.bonnes / score.total) * 100)
console.log(pourcentage + ' %')
console.log(verifier('A', 'A'))
function verifier(reponse, bonne) {
  return reponse === bonne ? 'Bonne réponse' : 'Mauvaise réponse'
}`,
        },
        exercises: [
          {
            niveau: 'Facile',
            title: 'Affichez le score',
            instructions: 'Affichez **« Score : 3/5 »** avec `bonne` = **3**, `total` = **5** et la concaténation `\u0027Score : \u0027 + bonne + \u0027/\u0027 + total`.',
            starter: `const bonne = 3
const total = 5
// console.log('Score : ' + bonne + '/' + total)`,
            expected: ['Score : 3/5'],
            solution: `const bonne = 3
const total = 5
console.log('Score : ' + bonne + '/' + total)`,
          },
          {
            niveau: 'Moyen',
            title: 'Le pourcentage',
            instructions: 'Avec `score` = **{ bonnes: 3, total: 5 }**, affichez le pourcentage arrondi suivi de **« % »** (attendu : **60 %**).',
            starter: `const score = { bonnes: 3, total: 5 }
const pourcentage = Math.round((score.bonnes / score.total) * 100)
console.log(pourcentage + ' %')`,
            expected: ['60 %'],
            solution: `const score = { bonnes: 3, total: 5 }
const pourcentage = Math.round((score.bonnes / score.total) * 100)
console.log(pourcentage + ' %')`,
          },
          {
            niveau: 'Avancé',
            title: 'Valider une réponse',
            instructions: 'Créez `verifier(reponse, bonne)` qui retourne **« Bonne réponse »** si identiques sinon **« Mauvaise réponse »**, puis testez avec `\u0027B\u0027` et `\u0027B\u0027` (attendu : Bonne réponse).',
            starter: `// function verifier(reponse, bonne) {
//   return reponse === bonne ? 'Bonne réponse' : 'Mauvaise réponse'
// }
console.log(verifier('B', 'B'))`,
            expected: ['Bonne réponse'],
            solution: `function verifier(reponse, bonne) {
  return reponse === bonne ? 'Bonne réponse' : 'Mauvaise réponse'
}
console.log(verifier('B', 'B'))`,
          },
        ],
        recap: [
          'Un score se calcule en **fraction** (`bonnes / total`).',
          '`Math.round` arrondit le pourcentage.',
          'Comparer les réponses avec **`===`**.',
        ],
        quiz: [
          {
            question: 'Le pourcentage de 3 bonnes sur 5 est\u2026',
            options: ['30 %', '60 %', '50 %'],
            answer: 1,
            explanation: '3/5 × 100 = 60 %.',
          },
          {
            question: 'Pour arrondir le pourcentage, on utilise\u2026',
            options: ['Math.floor', 'Math.round', 'Math.random'],
            answer: 1,
            explanation: 'Math.round arrondit à l\u2019entier le plus proche.',
          },
          {
            question: 'Pour comparer deux réponses, on utilise\u2026',
            options: ['=', '==', '==='],
            answer: 2,
            explanation: '=== compare valeur et type, sans coercition.',
          },
        ],
      },
    ],
  },
]