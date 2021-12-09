<center><h2>Exemples pour Javascript</h2><img src="../../../assets/img/js.png" width="100px"></center>

<details open="open"><summary>Notions</summary>
<ul>
    <li><a href="#example-functions">Fonctions</a></li>
    <li><a href="#example-arrow-functions">Fonctions fléchées</a></li>
</ul>
</details>

> Vous trouverez ici-même les différents exemples en javascript pour les notions vu dans le chapitre 5.
---
### Exemple de fonctions<a name="example-functions"></a>
```js
/*
function nomFonction(paramètres) {
    code...
}
*/

function isEven(number) {
    if (Number.isInteger(number/2)) return true;
    else return false
}

isEven(4) // Renvoi True
isEven(9) // Renvoi False

//Syntaxe moins pratique mais notable
let isOdd = function() {
    if (Number.isInteger(number/2)) return false;
    else return true;
}
```

Ci-dessus la syntaxe pour **déclarer** une fonction en <img src="../../../assets/img/js.png" width="20px"> **javascript**.

> Les fonctions sont **initialisées** par le mot clé **`function`**. C'est lui qui va dire que l'on commence la déclaration d'une fonction.

> Ensuite, la fonction doit être **nommée**, les mêmes règles que les noms pour les variables s'appliquent pour les fonctions.

> Entre parenthèses, un ou plusieurs **paramètres** seront utilisés, un paramètres est, en quelques sortes, une variable qui sera donnée lors de l'usage de la fonction. À noter que les paramètres peuvent êtres limité à un certain nombre ou peuvent êtres illimités. Il se peut également qu'aucun paramètre soit utilisé.

```js
// Fonction sans paramètres
function noParameters() {
    return console.log("Cette fonction n'utilise aucun paramètres");
}

// Fonction acceptant un nombre de paramètres limités
function someParameters(first, second) {
    return console.log("Cette fonction accepte 2 paramètres");
}

// Fonction acceptant un nombre illimité de paramètres
function manyParameters(...args) {
    return console.log("Cette fonction accepte un nombre indéfini de paramètres");
}
```

> Pour finir, un bloc contenant le code exécuté est nécessaire.

---

### Exemple de fonctions fléchées<a name="example-arrow-functions"></a>
```js
/*
let nomFonction = paramètres => code...
*/

let isEven = number => Number.isInteger(number/2)?true:false
// Ici nous avons cumuler une fonction fléchée avec une opération ternaire pour optimiser le code
```

Les **fonctions fléchées** en <img src="../../../assets/img/js.png" width="20px"> **javascript** sont utilisé pour simplifier la syntaxe de déclaration de fonctions.