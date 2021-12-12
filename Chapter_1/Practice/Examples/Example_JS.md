<center><h2>Exemples pour Javascript</h2><img src="../../../assets/img/js.png" width="100px"></center>

<details open="open"><summary>Notions</summary>
<ul>
    <li><a href="#example-variables">Variables</a></li>
    <li><a href="#example-constantes">Constantes</a></li>
</ul>
</details>

> Vous trouverez ici-même les différents exemples en javascript pour les notions vu dans le chapitre 1.
---
#### Exemple de variables<a name="example-variable"></a>
```js
// let/var nomVariable
// let/var nomVariable = valeur

let str = "my String";
let float = 1.92;
let int = 2;
let bool = true;
let arr = [1, 2, 3];

let str1, str2, str3;
```

La déclaration de variable en <img src="../../../assets/img/js.png" width="20px"> **javascript** est très simple, comme vous pouvez le voir dans la **1ere** ligne, pour déclarer il vous faudra respecter une syntaxe précise.

> Premièrement, un **mot-clé** est présent en <u>_début de ligne_</u>, il est là pour préciser l'action que nous faisons, dans le cas présent déclarer une variable. Ici, nous avons **`let`** et **`var`** qui sont les mots-clés valides. Pour aller plus loin vous pouvez voir la [différence entre let et var](#diff-let-var) à la fin.

> En second temps, nous pouvons voir **`nomVariable`**, celui-ci est libre, tant qu'il *respect quelques règles*. Une variable <u>n'accepte pas les espaces</u>. Elle doivent <u>commencer uniquement par un `lettre`, `$` ou</u> `_`. Sans oublier qu'elle doit être <u>unique</u>

> Ensuite, vous avez le choix **d'attribuer une valeur** ou non. Si vous *souhaitez attribuer* une valeur, un simple `=` permet de dire que l'on assigne une valeur à la variable, suivi de la valeur, dépendante du [type de données](../../Types.md) souhaité. Si vous *ne souhaitez pas assigner* de valeur dans l'immédiat vous pouvez simplement passé à la ligne suivante de votre programme.

---

#### Exemple de constantes<a name="example-constantes"></a>

```js
// const nomConstante = valeur

const Str = "my constante";
const Float = 1.28;
const Int = 4;
const Bool = false;
const Arr = ["valeur1", "valeur2", "valeur3"];
```

En <img src="../../../assets/img/js.png" width="20px"> **javascript**, nous avons la possibilité d'utiliser des constantes, qui possède aussi une syntaxe à connaitre. Cette syntaxe est structuré comme sur le **1ere** ligne.

> Tout comme pour les variables, vous devez utiliser un **mot-clé**, celui-ci est unique pour les constantes *javascript*, il s'agit de **`const`**.

> Ensuite, vous devez entrer **`nomConstante`**, qui correspond simplement au nom que vous donnerez à votre constante. Ce nom respect les mêmes normes que les [variables](#example-variables).

> Pour finir, vous devez **atribuer une valeur** cela se fait après le symbole **`=`** et devez vous baser sur les [types de données](../../../../Types.md) pour choisir la valeur que vous souhaitez utiliser.

---

#### Différence `var` vs `let`<a name="diff-var-let"></a>

Comme vous avez pu le constater, il existe deux **mots-clés** pour déclarer une variable, il existe **`let`** et **`var`**. Il existe une subtilité entre les deux qui se trouvent dans la <u>porté d'accessibilité</u> de la variable.

La **porté** ou **scope** de **`let`** est une porté de bloc, c'est à dire que la variable est accessible uniquement dans le bloc de code dans lequel elle est déclarée.
À la différence du **`var`**, qui lui a un **scope** de fonction, autrement dit, la variable peut être appelé dans toute la fonction dans laquelle elle est déclarée.
