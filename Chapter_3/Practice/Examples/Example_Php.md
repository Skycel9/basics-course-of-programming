<center><h2>Exemples pour PHP</h2><img src="../../../assets/img/PHP.png" width="150px"></center>

<details open="open"><summary>Notions</summary>
<ul>
    <li><a href="#example-conditions">Conditions</a></li>
    <li><a href="#example-switch">Switch</a></li>
</ul>
</details>

> Vous trouverez ici-même les différents exemples en PHP pour les notions vu dans le chapitre 3.

---

#### Exemple de conditions<a name="example-conditions"></a>
```php
if ($i > 0) {
    echo "i est positif";
} else if ($i < 0) {
    echo "i est négatif";
} else {
    echo "i est égal à 0";
}
```

La **condition** <img src="../../../assets/img/PHP.png" width="30px"> php est très simple, elle suit la structure habituelle des conditions, rien de compliqué.

> Tout d'abord un mot clé **if**, suivi par l'**opération booléenne** entre parenthèses. L'[opération _de comparaison_](../../../Chapter_2/Comparison.md) utilisé ici vérifie si la valeur de `i` est <u>supérieur</u> à 0. Ensuite, à l'intérieur du bloc de code (_entre `{ }`_), se trouve le code exécuter si la condition est vrai.

> Ce qui suit est facultatif, on retrouve le mot-clé **else**, à nouveau suivi de la structure précédement énnoncée. Ce morceau permet d'exécuter le code entre accolade, si la **première** condition n'est pas rempli et si la **seconde** l'est.

> Ici aussi le morceau est facultatif, il commence par le mot-clé **else** et suivi directement par le bloc de code. Il permet d'exécuter le code si aucune des conditions n'est validée.

---

#### Exemple de switch

```php
switch ($i) {
    case 1:
        console.log("i est égal à 1");
    break;
    case 2:
        console.log("i est égal à 2");
    break;
    case 3:
        console.log("i est égal à 3");
    break;
    default:
        console.log("i n'est pas 1, 2 ou 3");
    break;
}
```

Le **switch** en <img src="../../../assets/img/php.png" width="30px"> php possède une syntaxe globalement similaire à celle d'autres langages, ce qui facilite sont apprentissage et son utilisation.

> Pour commencer, on voit le mot-clé **switch** qui initialise l'utilisation du switch.

> Ensuite nous mettons se que nous voulons tester, dans le cas présent `i`.

> On ouvre un bloc de code, et on y place un **case**, qui est ce à quoi i doit être égal pour être validé. Si ce n'est pas le cas le code continue et va check les autres case. Si un des case renvoie _TRUE_, le code va être exécuté. Si aucun ne l'est et qu'un **default** est présent, c'est le code dans le default qui sera exécuté. Lorsque l'exécution arrive sur un **break**, le switch sera arrêté. <u>À noter</u> que le break n'est pas obligatoire.