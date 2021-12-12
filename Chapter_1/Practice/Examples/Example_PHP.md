<center><h2>Exemples pour PHP</h2><img src="../../../assets/img/PHP.png" width="150px"></center>

<details open="open"><summary>Notions</summary>
<ul>
    <li><a href="#example-variables">Variables</a></li>
    <li><a href="#example-constantes">Constantes</a></li>
</ul>
</details>

> Vous trouverez ici-même les différents exemples en PHP pour les notions vu dans le chapitre 1.
---
#### Exemple de variables<a name="example-variables"></a>
```php
// $nomVariable = valeur

$str = "my string";
$float = 1.45;
$int = 4;
$bool = true;
$arr = [1, 2, 3];
```

La déclaration de variable en <img src="../../../assets/img/PHP.png" width="30px"> **Php** est très simple, comme le montre la **1ere** ligne, pour déclarer une variable il vous faudra suivre des règles spécifiques.

> Premièrement, nous avons le symbole **`$`** qui est la pour initialiser la déclaration.

> Ensuite il faut directement indiquer le **nom de variable**, ce dernier doit respecter les éléments suivant, <u>ne commence pas par un chiffre</u>, <u>doit commencer par `$`</u>, <u>peut contenir uniquement des valeurs [alphanumérique](https://www.larousse.fr/dictionnaires/francais/alphanum%C3%A9rique/2523 "Larousse.fr")</u>. Les noms de variables sont sensibles à la casse, c'est à dire que les noms de variables peuvent prendre de majuscule ou non. Vu qu'un exemple vaut mieux que mille mots : `$age` et `$Age` sont des **variables différentes**, car leur syntaxe et sensiblement différente (*pas de majuscule et majuscule au début*). N'omettons pas le fait que le nom de variable doit être <u>unique</u>.

> Pour finir, il faut **attribuer une valeur** à la variable. Pour cela, rien de plus simple, mettez le symbole **`=`** et ensuite indiquez la valeur que vous souhaitez donnée à la variable. Pour faire cela, basez-vous sur les [types de données](./../../../Types.md).


---

#### Exemple de constantes<a name="example-constantes"></a>

```php
// Define(nomVariable) = valeur

define(Str, "my string");
define(Float, 1.84);
define(Int, 4);
define(Bool, true);
define(Arr, ["valeur1", "valeur2", "valeur3"]);
```

Le <img src="../../../assets/img/PHP.png" width="30px"> **php** permet l'utilisation de constantes et leur syntaxe est différente de celle des variables. Vous pouvez apercevoir la structure de la déclaration en **1ere** ligne de l'exemple.

> La déclaration se passe dans le fonction **`define()`**, la fonction prend en *premier paramètre* le **nom de constante** qui doit respecter les mêmes règles les [variables](#example-variables). En *second paramètre*, vous mettrais la valeur que vous souhaitez **attribuer** à la constante.