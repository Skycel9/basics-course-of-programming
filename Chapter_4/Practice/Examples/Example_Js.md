<center><h2>Exemples pour Javascript</h2><img src="../../../assets/img/js.png" width="100px"></center>

<details open="open"><summary>Notions</summary>
<ul>
    <li><a href="#example-for">Boucle <b>for</b></a></li>
    <li><a href="#example-while">Boucle <b>while</b></a></li>
    <li><a href="#example-do_while">Boucle <b>do-while</b></a></li>
    <li><a href="#example-foreach">Boucle <b>ForEach</b></a></li>
</ul>
</details>

> Vous trouverez ici-même les différents exemples en javascript pour les notions vu dans le chapitre 4.
---
### Exemple de boucle For<a name="example-for"></a>
```js
/*
for (variable; condition; opération) {
    code...
}
*/

for (let i = 0; i <= 3; i++) {
    console.log(i); //Renvoie 4 fois la valeur de i
    // À la fin de l'occurence, l'opération ajoute 1 à i
}
```

La boucle **for** en <img src="../../../assets/img/js.png" width="20px"> **javascript** suit la syntaxe visible dans le commentaire de bloc.

> En premier temps, nous trouvons **`for`**, l'élément **d'initialisation** de la boucle, il est semblable dans tout les langages acceptant la boucle for.

> Par la suite, il faut **déclarer la variable et sa valeur**, elle sera utilisé dans la condition.

> Après le `;` nous devons **définir la condition**, qui tant que validé effectuera une nouvelle occurence de la boucle.

> Pour finir, plaçons **l'opération**, cette dernière et le changement qui affectera la variable à la fin de chaque occurence de la boucle.

---

### Exemple de boucle While<a name="example-while"></a>
```js
/*
while (condition) {
    code...
}
*/

let i = 0;

while (i < 3) {
    console.log(i);

    // Possibilité d'ajouter un changement de valeur de i dans la boucle, ou plus tard dans le code

    // Si ajout de l'opérateur
    i++
    // La boucle renverra 4 fois la veleur de i;

    // Sinon la boucle se fera infiniment tant que la valeur de i dans le code ne sera pas modifié et supérieur ou égal à 3
}
```

La boucle **while** en <img src="../../../assets/img/js.png" width="20px"> **javascript** suit une syntaxe disponible dans le commentaire de bloc.

> Pour commencer, il faut **initialiser** la boucle, cela se fait avec **`while`**.

> Enfin, nous mettons la **condition**, vérifiée à chaque occurence, afin d'entrer dans la boucle

---

### Exemple de boucle do-while<a name="example-do_while"></a>
```js
/*
do {
    code...
} while (condition)
*/

let i = 0;
do {
    console.log(i);

    // Possibilité d'ajouter un changement de valeur de i dans la boucle, ou plus tard dans le code

    // Si ajout de l'opérateur
    i++
    // La boucle renverra 4 fois la veleur de i;

    // Sinon la boucle se fera infiniment tant que la valeur de i dans le code ne sera pas modifié et supérieur ou égal à 3

} while (i < 3)
```
La boucle **do-while** en <img src="../../../assets/img/js.png" width="20px"> **javascript** suit une syntaxe disponible dans le commentaire de bloc.

> Tout d'abord, nous retrouvons **l'initialisateur** qui est l'instruction **`do`**

> Ensuite, nous entrons le **code** que nous souhaitons exécuter en boucle dans le bloc de code

> Par ailleurs, nous avons l'instruction **`while`** qui nous est là pour montrer que nous faisons une boucle **do-while**.

> Enfin, nous avons la **condition** qui est vérifiée <u>après</u> chaque occurence afin de savoir si la boucle aura une nouvelle occurence.

---
### Exemple de boucle ForEach<a name="example-foreach"></a>
```js
// Boucle forEach pour un tableau contenant tous les chiffres de 1 à 9
/*
arr.forEach(value=> {
    console.log(value);
}
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach(value=> {
    console.log(value); // Renvoie tout les éléments du tableau
})
```

La boucle **forEach** en <img src="../../../assets/img/js.png" width="20px"> **javascript** est une boucle qui s'effectue sur les tableaux, et suit la syntaxe présente dans le commentaire de bloc ci-dessus.

> Pour commencer, nous retrouvons le **tableau** sur lequel nous voulons utiliser la boucle.

> Ensuite nous avons la boucle qui **s'initialise** avec **`forEach`**.

> Par ailleurs nous avons entre parenthèse la **variable** qui contient la valeur correspondante à l'élément en cours d'occurence. Suivi d'une [fonction fléchée](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> Enfin, nous plaçons le **code** à exécuter pour chaque occurrence