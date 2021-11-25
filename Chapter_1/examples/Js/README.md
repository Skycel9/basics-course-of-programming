<center><h2>Exemples pour Javascript</h2><img src="../../../assets/img/js.png" width="100px"></center>

<details open="open"><summary>Notions</summary>
<ul>
    <li><a href="#variables">Variables</a></li>
    <li><a href="#constantes">Constantes</a></li>
</ul>
</details>

> Vous trouverez ici-même les différents exemples pour les notions vu dans le chapitre 1.
---
#### Exemple de variables
```js
// {let/var} {nomVariable} = (valeur)

let str = "my String";
let float = 1.92;
let int = 2;
let bool = true;
let arr = [1, 2, 3];

let str1, str2, str3;
```

La déclaration de variable en <img src="../../../assets/img/js.png" width="20px"> **javascript** est très simple, comme vous pouvez le voir dans la **1ere** ligne, pour déclarer il vous faudra respecter un syntaxe précise.

> Premièrement, un **mot-clé** est présent en <u>_début de ligne_</u>, il est là pour préciser l'action que nous faisons, dans le cas présent déclarer une variable. Ici, nous avons **`let`** et **`var`** qui sont les mots-clés valide. Pour aller plus loin vous pouvez voir la [différence entre let et var](#diff-let-var) à la fin.

> En second temps, nous pouvons voir **`nomVariable`**, celui-ci est libre, tant qu'il *respect quelques règles*. Une variable <u>n'accepte pas les espaces</u>. Elle doivent <u>commencer uniquement par un `lettre`, `$` ou</u> `_`.

> Ensuite, vous avez le choix d'**attribuer une valeur** ou non. Si vous *souhaitez attribuer* une valeur, un simple `=` permet de dire que l'on assigne une valeur à la variable, suivi de la valeur, dépendante du [type de données](../../../../Types.md) souhaité. Si vous *ne souhaitez pas assigner* de valeur dans l'immédiat vous pouvez simplement passé à la ligne suivante de votre programme.
