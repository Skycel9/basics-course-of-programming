<div align="center"><img src="https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737__340.png"></div>

# Cours et exercices pour les débutants en programation

<br>

> Ce cours prendra pour exemple trois langages de programmation comme support, les langages seront [**PHP**](https://php.net/ "Documentation PHP"), [**Javascript**](https://developer.mozilla.org/fr/docs/Web/JavaScript "Documentation Javascript") ainsi que le [**Java**](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html "Documentation Java").

## Chapitres

-   **[Variables, Constantes et Types](#variable-constante-type "Chapitre Premier")**<br>

    -   **[Types](#types "Chapitre 1.1")**<br>
    -   **[Variables](#variables "Chapitre 1.2")**<br>
    -   **[Constantes](#constantes "Chapitre 1.3")**<br>

-   **[Opérateurs logiques et de comparaisons](#operators "Chapitre 2")**<br>
-   **[Conditions](#conditions "Chapitre 3")**<br>
-   **[Opérations ternaires](#ternary "Chapitre 4")**<br>
-   **[Boucles](#boucles "Chapitre 5")**<br>
-   **[Expressions Régulières](#regex "Chapitre 6")**<br>
-   **[Promise](#promises "Chapitre 7")**<br>
-   **[Erreurs](#errors "Chapitre 8")**<br>
-   **[Exercices](#exercice "Exercice")**
    <br>

## Variables, Constantes et Types<a name="variable-constante-type"></a><br>

Comme vous avez pu le lire dans le titre, nous allons voir dans ce premier chapitre des notions de base en programmation. Ces notions sont les [types](#types "Chapitre 1.1"), [variables](#variable "Chapitre 1.2") ainsi les les [constantes](#constante "Chapitre 1.3") .<br>

---

### Types<a name="types"></a>

En informatique, lorsque nous parlons de types, il est question de **types de données**. Un type est ce qui défini la nature des valeurs que peut prendre une donnée.
Il existe différents type de données que vous retrouverez ci-dessous :

-   **String**<a name="type-str"></a> (chaîne de caractères), est un type qui s'écrit entre **`"`**, il peut contenir toutes les sortes de caractères. Exemple &rarr; `"string"`
-   **Integer**<a name="type-int"></a> (Nombre entier relatif), est un type qui contient tous les entiers naturels auquel on ajoute un signe positif ou négatif. Exemple &rarr; `12` ou `-3`
-   **Float**<a name="type-float"></a> (Nombre réel ou flottant), est un type contenant tous les nombres de l'ensemble réel, c'est à dire tous les nombres, ayant un nombre fini ou infini de décimal(s). Exemple &rarr; `1.465`
-   **Boolean**<a name="type-bool"></a> (Booléen), est un type possédant uniquement 2 états, qui sont généralement _TRUE_ ou _FALSE_. Exemple &rarr; `TRUE`
-   **Array**<a name="type-arr"></a> (Tableau), est un type de données paramétrées, contrairement aux précédent, il peut contenir plusieurs données . Sa syntaxe est généralement [ ] et chaque élément est séparé des autres par une `,`. Exemple &rarr; `["ma variable", "12", "TRUE"]`

---

### Variables<a name="variables"></a>

Avant toutes choses, definissons ce qu'est une variable, afin de partir avec les mêmes bases.
Le terme de **variable** est un terme provenant des [mathématiques](https://fr.wikipedia.org/wiki/Math%C3%A9matiques), d'après le site [stephonsays](https://fr.strephonsays.com/variable-and-vs-constant-8185), les variables mathématiques sont des éléments qui peuvent contenir une valeur qui peut être modifiée. Les principales utilisations des variables sont dans les équations ou les fonctions.
Dans l'exemple ci-contre, **`x`** est un variable représentant l'inconnu. `x²-2x+4=0`

En programmation, les variables fonctionne sur le même principe, c'est un élément qui peut changer de valeur durant l'éxécution d'un programme.

#### Comment déclare-t-on une variable ?

Les façons de déclarer une variable sont diverses et variées, chaque langage possède une syntaxe propre pour déclarer une variable. Le mieux est de se renseigner sur la documention du langage informatique que vous utilisez.

Començons les exemples avec le **PHP**

```php
// Déclarations variables
$a = "ma variable";
$b = 12;

// Output
echo $a; // Renvoie => ma variable
echo $b; // Renvoie => 12
```

Exemple avec **Javascript**

```js
// Déclarations variables
let a = "ma variable"; // let a un "scope" ou porté LIMITE au bloc dans lequel il est utilisé
var b = 12; // var a un "scope" ou porté GLOBAL, accessible dans tout le code

// Output
console.log(a); // Renvoie => ma variable
console.log(b); // Renvoie => 12
```

Exemple avec **Java**

```java
// Déclarations variables
char A = "ma variable";
int B = 12;

// Output
System.out.println(A); // Renvoie => ma variable
System.out.println(B); // Renvoie => 12
```

_Java étant un langage fortement typé, il est nécessaire de comprendre les [types](#type)._

---

### Constantes<a name="constantes"></a>

Il est temps de passé aux constantes, les constantes sont des éléments, comme les variable, provenant des [mathématiques](https://fr.wikipedia.org/wiki/Math%C3%A9matiques), qui peuvent contenir des données. Les constantes sont généralement visible dans les sciences de la nature ou la physique et la chimie, par exemple il existe la [constante d'Avogadro](https://fr.wikipedia.org/wiki/Nombre_d%27Avogadro). Cependant à la différence des variables, une constante ne peut pas changer de valeur.
<br>

En programmation, les constantes possèdent le même fonctionnement, elles **ne peuvent pas changer de valeur** durant l'exécution. Si un programme essaie de modifier la valeur d'une constante, le programme sera stopper et affichera une [erreur](#error "Erreurs").

#### Comment déclare-t-on une constante ?

Tout comme pour les variables, il existe plusieurs façon de déclarer une constante, cela dépend également du langage utilisé. Si vous essayez de redéfinir ou modifier la valeur d'une constante, le programme **s'arretera et affichera une erreur**.

Voici les exemples pour les différents langages support.

Exemple pour **PHP**

```php
// Déclarations constantes
define("a", "ma variable");
define("b", 12);

// Output
echo a; // Renvoie => ma variable
echo b; // Renvoie => 12
```

Exemple pour **Javascript**

```js
// Déclarations constantes
const a = "ma variable";
const b = 12;

// Output
console.log(a); // Renvoie => ma variable
console.log(b); // Renvoie => 12
```

Exemple pour **Java**

```java
// Déclarations constantes
final char A = "ma variable";
final int B = 12;

// Output
System.out.println(A); // Renvoie => ma variable
System.out.println(B); // Renvoie => 12
```

<br>

---

## Opérateurs logiques et de comparaisons<a name="operators"></a>

<br>

> ##### :warning: Les opérateurs logiques et les opérateurs de comparaisons sont des opérateurs qui vous seront utile pour le prochain chapitre sur les [conditions](#conditions), il est donc essentiel de comprendre ce chapitre avant de passé à la suite !

-   Les opérateurs logiques
    <br>

Liste d'opérateurs logiques existant

| Opérateur | Syntaxe | Exemple  | Résultat | Fonctionnement |
| --------- | :-----: | :------: | -------: | :------------: |
| AND (ET)  |   &&    |  a && b  | Renvoie _TRUE_ si a **ET** b valent _TRUE_ |      **`&&`** vérifie les opérations **dans l'ordre** (_gauche à droite_) et **s'arrête** lorqu'une opérations renvoie _FALSE_       |
| AND (ET)  |    &    |  a & b   | Renvoie _TRUE_ si a **ET** b valent _TRUE_ |                                      **`&`** vérifie les deux opérations **quoi qu'il arrive**                                       |
| OR (OU)   |  \|\|   | a \|\| b |  Renvoie _TRUE_ si a **OU** b vaut _TRUE_  |     **`\|\|`** vérifie les opérations **dans l'ordre** (_gauche à droite_) et **s'arrête** lorsqu'une opérations renvoie _FALSE_     |
| OR (OU)   |   \|    |  a \| b  |  Renvoie _TRUE_ si a **OU** b vaut _TRUE_  | **`\|`** vérifie les deux opérations **quoi qu'il arrive** (_gauche à droite_) et **s'arrête** lorsqu'une opérations renvoie _FALSE_ |     |
| NOT (NON) |    !    |    !a    |    Renvoie _TRUE_ si a **VAUT** _FALSE_    |                                         `!` vérifie le caractère contraire d'une opérations                                          |

<br>

-   Les opérateurs de comparaisons
    <br>

Liste des opérateurs de comparaisons

| Opérateur         | Syntaxe | Exemple | Résultat                                                             |                                   Fonctionnement                                    |
| ----------------- | :-----: | :-----: | -------------------------------------------------------------------- | :---------------------------------------------------------------------------------: |
| Egal              |   ==    | a == b  | Renvoie _TRUE_ si a et b sont **EGAUX**                              |                `==` vérifie que les deux éléments ont le même valeur                |
| Identique         |   ===   | a === b | Renvoie _TRUE_ si a et b sont **EGAUX** et **DE MÊME TYPE**          | `===` vérifie que les deux éléments **ont la même valeur** et sont **de même type** |
| Différent         |   !=    | a != b  | Renvoie _TRUE_ si a et b sont **DIFFERENT**                          |        `!=` vérifie que les deux éléments ne possède **pas la même valeur**         |
| Différent         |   !==   | a !== b | Renvoie _TRUE_ si a et b sont **DIFFERENT** et de **TYPE DIFFERENT** |   `!==` vérifie que les éléments ne possède **ni la même valeur ni le même type**   |
| Inférieur         |    <    |  a < b  | Renvoie _TRUE_ si a est **INFERIEUR** à b                            |     `<` vérifie que le premier élément est **strictement inférieur** au second      |
| Inférieur ou égal |   <=    | a <= b  | Renvoie _TRUE_ si a est **INFERIEUR OU EGAL** à b                    |       `<=` vérifie que le premier élément est **inférieur ou égal** au second       |
| Supérieur         |    >    |  a > b  | Renvoie _TRUE_ si a est **SUPERIEUR** à b                            |      `>` vérfie que le premier élément est **strictement suprieur** au second       |
| Supérieur ou égal |   >=    | a >= b  | Renvoie _TRUE_ si a est **SUPERIEUR OU EGAL** à b                    |           `>=` vérifie que le premier est **supérieur ou égal** au second           |

<br>

---

## Les conditions<a name="conditions"></a>

Une condition est un des éléments les plus **important** en programmation. C'est cet élément qui permettra de vérifier que l'utilisateur entre le bon type de données pour les calculs, ou pour un mots de passe par exemple.
Mais avant de se lancer dans le développement de conditions, regardons de quoi elles se composent.

Nous retrouvons dans la majorité des langages la **structure** ci-dessous

```
if (condition)
{
    code...
} else if (condition)
{
    code...
} else
{
    code...
}
```

Premièrement nous pouvoir voir le mot-clé **`if`** désignant _si_, c'est lui qui va initialiser la condition. Après nous voyons la **`condition`** entouré de parenthèses, c'est ici que vous entrerez votre ou vos opérations(s) logique(s) ou de comparaison(s). Entre les accolades, vous trouverez le code qui sera effectué si la condition vaut _TRUE_.

```
{

}
```

Le mot-clé **`else`** est le mot-clé qui défini le code a exécuter si la condition n'est pas rempli, il est comparable à _sinon_, il peut être suivi d'une nouvelle condition **`if (condition)`**. À savoir que `else` n'est pas obligatoire lors de mise en place d'une condition.

Malgré beaucoup de similitude sur les conditions dans les langages, **certains ne suivent pas exactement la même syntaxe**.

Le **PHP** ne déroge pas à la règle

```php
// Déclarations variables
$a = "mot de passe";
$b = 12;

// Conditions simple
if ($a == "mot de passe")
    echo "Le mot de passe est correct"; // Renvoie => Le mot de passe est correct

// Multi conditions
if ($b > 20) {
    echo "b est supérieur à 20"; // Ne renvoie rien, le code n'est pas exécuter car la condition n'est pas remplie
}
elseif ($b < 10 ) {
    echo "b est inférieur à 10"; // Ne renvoie rien, le code n'est pas exécuter car la conditions n'est pas remplie
}
else {
    echo "b est un nombre compris entre 10 et 20"; // Renvoie => b est un nombre compris entre 10 et 20
}
```

Le **javascript** lui, suit bien la structure

```js
// Déclarations variables
let a = "mot de passe";
let b = 12;

// Conditions simple
if (a == "mot de passe") {
	console.log("le mot de passe est correct"); // Renvoie => Le mot de passe est correct
}

// Multi conditions
if (b > 20) {
	console.log("b est supérieur à 20"); // Ne renvoie rien, le code n'est pas exécuter car la condition n'est pas remplie
} else if (b < 10) {
	console.log("b est inférieur à 10"); // Ne renvoie rien , le code n'est pas exécuter car la conditions n'est pas remplie
} else {
	console.log("b est un nombre compris entre 10 et 20"); // Renvoie => b est un nombre compris entre 10 et 20
}
```

De même pour le **Java**

```java
// Déclarations variables
char A = "mot de passe";
int B = 12;

// Conditions simple
if (A == "mot de passe") {
    System.out.println("le mot de passe est correct"); // Renvoie => le mot de passe est correct
}

// Multi conditions
if (B > 20) {
    System.out.println("B est supérieur à 20"); // Ne renvoie rien, le code n'est pas exécuter car la condition n'est pas remplie
} else if (B < 10) {
    System.out.println("B est inférieur à 10"); // Ne renvoie rien, le code n'est pas exécuter car la condition n'est pas remplie
} else {
    System.out.println("B est un nombre compris entre 10 et 20"); // Renvoie => B est un nombre compris entre 10 et 20
}
```

<br>

#### Ce n'est pas tout !

Mais ce n'est pas la seule manière pour créer une condition, il existe une façon plus simple qui vous sera utile si vous enchainer les conditions.

Vous trouverez dans la plupart des langages les instructions **swicth / case**. Avec ces instructions il sera plus simple de créer uns suite de conditions.

```
switch (expression) {
    case "vérification":
        code...
    break;
    case "vérification":
        code...
    break;
    case "vérification":
        code...
    break;
    default:
        code...
    break;
}
```

Analysons l'exemple présent ci-dessus, en premier temps on trouve l'instruction **`switch`**, elle permet d'initier. Entre parenthèses, ce trouve l'expression a utilisé. Chaque **`case`** contient la vérification à faire sur l'élément de l'expression. Pour finir, **`break`** permet de mettre fin à l'instruction switch (ou non) dans le case précédent. **`default`** est une instruction qui sera exécuter si aucun des case n'est vérifié.

La **vérification des case** se fait l'une après l'autre dans le sens d'écriture (haut vers le bas).

Exemple **PHP**

```php
$i = 2;

switch ($i) {
    case "1":
        echo "i est égal à 1"; // Ne renvoie rien, le code n'est pas exéuter car la vérification n'est pas passé
    break;
    case "2":
        echo "i est égal à 2"; // Renvoie => i est égal à 2
    break;
    case "3":
        echo "i est égal à 3"; // Ne renvoie rien, le code n'est pas exécuter car la vérification n'est pas passé
    break;
    default:
        echo "i est inconnu"; // Ne renvoie rien, le code n'est pas exécuter car la vérification de case "2" est passé
    break;
}
```

Exemple **Javascript**

```js
let i = 2;

switch (i) {
	case "1":
		console.log("i est égal à 1"); // Ne renvoie rien, le code n'est pas exéuter car la vérification n'est pas passé
		break;
	case "2":
		console.log("i est égal à 2"); // Renvoie => i est égal à 2
		break;
	case "3":
		console.log("i est égal à 3"); // Ne renvoie rien, le code n'est pas exécuter car la vérification n'est pas passé
		break;
	default:
		console.log("i est inconnu"); // Ne renvoie rien, le code n'est pas exécuter car la vérification de case "2" est passé
}
```

Exemple **Java**

```java
int i = 2;

switch (i) {
    case "1":
        System.out.println("i est égal à 1"); // Ne renvoie rien, le code n'est pas exéuter car la vérification n'est pas passé
    break;
    case "2":
        System.out.println("i est égal à 2"); // Renvoie => i est égal à 2
    break;
    case "3":
        System.out.println("i est égal à 3"); // Ne renvoie rien, le code n'est pas exécuter car la vérification n'est pas passé
    break;
    default:
        System.out.println("i est inconnu"); // Ne renvoie rien, le code n'est pas exécuter car la vérification de case "2" est passé
}
```

<br>

---

## Les opérations ternaires<a name="ternary"></a>

Les opérations ternaires sont des expressions qui vous permettrons, dans certains cas, de remplacer les conditions, elles ont l'avantages d'avoir une syntaxe très simple et courte. Ce qui permet de gagner en efficacité et avoir un code plus simple.

La syntaxe de ces opérations est la même dans tout les langages qui les acceptent. Elle se construit de la sorte `condition ? expression1 : expression2`.

La condition est **l'opération** qui sera vérifié, si la condition est rempli, le code **renvoie la l'expression1**, sinon c'est **l'expression2 qui sera utilisé**.


```js
// Exemple d'opération ternaire

i < 5 ? "i est inférieur à 5" : "i est supérieur à 5"

// Il est possible d'emboîter les opérations ternaires

i < 5 ? "i est inférieur à 5" : i < 10 ? "i est inférieur a 10" : "i est supérieur à 10"
```

---

## Les boucles<a name="boucles"></a>

Les boucles sont des **fonctionnalités** disponible dans une grande majorité de langages informatiques, elles permettent de **répeter** une séquence de code. Il existe plusieurs sorte de boucle.

#### Les différentes boucles

Une boucle est un élément de prorramation qui permet d'exécuter un code plusieurs fois de suite, sans pour autant à ajouter le code plusieurs fois.

##### Boucles "for"<a name="for"></a>

Cette boucle est une boucle qui s'exécute le nombre de fois prédéfini. On retrouve trois éléments qui constituent la structure de cette boucle.

-   Un élément **d'itinitialisation**, exéuter **avant toutes** les boucles
-   Une **condition**, qui est vérifié **avant chaque** boucle
-   Une **instruction**, _Incrémentation_ ou _Décrémentation_ exécuter **après chaque** boucle

```
for (defVariable; condition; instruction) {
    code...
}
```

Ci-dessus, nous initialisons la **variable**, ensuite nous entrons une **conditions** qui sera vérifiée à chaque nouvelle séquence de la boucle. Et pour finir, nous précisons **l'instruction** à effectuer à la fin de chaque occurence de la boucle.

Exemple en **PHP**

```php
for ($i = 1; $i <= 10; $i++) {
    echo $i; // Renvoie verra 1, puis 2, puis 3, ..., puis 10
}
```

Exemple pour **Javascript**

```js
for (let i = 0; i <= 10; i++) {
	console.log(i); // Renvoie verra 1, puis 2, puis 3, ..., puis 10
}
```

Exemple avec **Java**

```java
for (int i = 0; i <= 10; i++) {
    System.out.printIn(i); // Renvoie verra 1, puis 2, puis 3, ..., puis 10
}
```

<br>

---

##### Boucles "while"<a name="while"></a>

À la différence des boucles "for", la boucle **while** n'exécute pas le code un nombre de fois défini. Elle exécute tant que la condition renvoie _TRUE_

Sa structure se construit de la sorte

```
while (condition) {
    code...
}
```

Le mot clé **while** permet de commener l'usage de la boucle while, ensuite on retrouve la **condition** qui, tant que renvoie _TRUE_ comme résultat, fera exécuter le code à l'intérieur de la boucle.

Passons à aux exemple concrets
**PHP**

```php
$i = 0;
while ($i <= 10) {
    echo $i; /// Renvoie verra 1, puis 2, puis 3, ..., puis 11
    i++; // Incrémente (ajoute) 1 à la valeur i, i = i+1 ou i++
}
```

**Javascript**

```js
let i = 0;
while (i <= 10) {
	console.log(i); // Renvoie verra 1, puis 2, puis 3, ..., puis 11
	i++; // Incrémente (ajoute) 1 à la valeur i, i = i+1 ou i++
}
```

**Java**

```java
int i = 0;
while (i <= 10) {
    System.out.printIn(i); // Renvoie verra 0, puis 1, puis 2, ..., puis 11
    i++; // Incrémente (ajoute) 1 à la valeur i, i = i+1 ou i++
}
```

<br>

---

##### Boucles do-while<a name="do-while"></a>

Le fonctionnement de la boucle **do-while** est le même que que celui de la boucle [while](#while), à la différence que la condition est vérifé après le bloque d'instruction de la boucle ce qui assure _une_ exécution.

La syntaxe de cette boucle est la suivante

```
do {
    code...
} while (condition);
```

Le début de l'instruction est **do** c'est lui qui initialise la boucle, à la suite on retrouve le code à exécuter à l'intérieur du bloc

```
{

}
```

Ensuite nous mettons le mot clé **while** le même que pour la boucle [_while_](#while), enfin la **condition** est présente pour vérifier lorsque la boucle doit être arrêté.

Exemple avec **PHP**

```php
$i = 0
do {
    echo $i; // Renvoie 0, puis 1, puis 2, ..., puis 11
    $i++; // Incrémente (ajoute) 1 à la valeur de $i
} while ($i <= 10);
```

Pour **Javascript**

```js
let i = 0;
do {
	console.log(i); // Renvoie 0, puis 1, puis 2, ..., puis 11
	i++; // Incrémente (ajoute) 1 à la valeur de i
} while (i <= 10);
```

Et **Java**

```java
int i = 0;
do {
    System.out.printIn(i); // Renvoie 0, puis 1, puis 2, ..., puis 11
    i++; // Incrémente (ajoute) 1 à la valeur de i
}
```

<br>

---

##### Boucle "forEach"<a name="forEach"></a>

La dernière des boucles est la boucle forEach. Comme le dit son nom, elle permet de parcourir tout les éléments d'un [tableau](#type-arr).

Sa structure diffère un peu d'un langage à l'autre, nous vous conseillons donc de vous renseigner pour le langage que vous souhaitez utiliser si ce dernier ne fait pas parti des langages supports de ce cours.

Exemple **PHP**

```php
$arr = array(1, 2, 3, 4, 5); // Déclaration de la variable $arr qui est un tableau

forEach($arr as $value) {
    echo $value;// Renvoie 1, puis, 2, puis 3, puis 4, puis 5
}
```

Exemple **Javascript**

```js
let arr = [1, 2, 3, 4, 5]; // Déclaration de la variable arr qui est un tableau

arr.forEach((value) => {
	console.log(value); // Renvoir 1, puis 2, puis 3, puis 4, puis 5
});
```

Exemple **Java**

```java
List arr = new ArrayList(); // Déclaration de la variabke arr qui est un tableau

for (String value : arr) {
    System.out.printIn(value); // Renvoie 1, puis 2, puis 3, puis 4, puis 5
}
```

## Les expressions régulières

Une expression régulière, aussi appelée regex _(regular expression)_, est une chaine de caractères qui décrit l'ensemble des règles de syntaxes possibles d'une autre chaine de caractères.
Elles ne sont pas essentielle pour vos débuts dans la programmation, mais deviennent très rapidement indispensables.

La syntaxe, _quelques peu particulière_, peu en effrayer quelques uns, mais pas d'inquiètude, une fois la subtilité comprise, il devient aisé de les utiliser de la meilleure façon.

Exemple de **regex**
```regex
https?://[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,4}(/\S*)?
```

L'expression régulière ci-dessus est une expression qui pourrait être utilisé pour rechercher des URLs.

Si vous souhaitez en apprendre plus sur les expressions régulières, voici un [site](https://www.lucaswillems.com/fr/articles/25/tutoriel-pour-maitriser-les-expressions-regulieres) qui explique bien le fonctionnement de ces-dernières.
Pour tester vos regex, vous pouvez vous rendre sur le site [regex101](https://regex101.com/).

---

## Les promises

La _"promesse"_ ou promise est une notion qui fait référence à un résultat non-connu lors de sa première référence car il sera calculé ultérieurement. Cette notion est utile dans son utilisation car elle rends le calcul plus _souple_, en exécutant cette promise en parallèle du code. Ce qui permet également de réduire la latence du programme.

## Lire une erreur<a name="errors"></a>

Savoir lire une erreur est un pilier du [débogage informatique](https://fr.wiktionary.org/wiki/d%C3%A9bogage). Cela vous permettra de supprimer toutes les erreurs de votre programme, afin de pouvoir l'utiliser sans soucis. Mais pour cela il faut comprendre la structure d'une erreur et où les trouver.
Les erreurs que vous rencontrerez durant votre debogage peuvent apparaîtres à plusieurs endroits, en PHP par exemple vous les trouverez sur la page qui sera générée avec le code. En Javascript, cela se passe dans la console de votre IDE et/ou la console de votre navigateur, par exemple.

###### Avant de deboger, vous devez prendre connaissance des principaux types d'erreurs que vous pouvez rencontrer.<a name="error-types"></a>

Le premier type est le plus récurrent, l'**erreur de syntaxe**. Cette erreur apparaît lorsque la [syntaxe](https://www.larousse.fr/dictionnaires/francais/syntaxe/76217 "Syntaxe - Sens 4") du langage n'est pas respecté. Contrairement au langue que nous utilisons quotidiennement tel que le français ou l'anglais, dans lesquelles nous pouvons faires des erreurs de syntaxe qui n'altère pas le sens. En informatique, une erreur de syntaxe engendre un arrêt du programme, aussi appelé [plantage](https://fr.wikipedia.org/wiki/Plantage). À défaut d'être les plus communes, elle sont les plus simple à corriger.

En second, nous avons les erreurs de type **logique** aussi nommé **erreurs sémantiques**. Ce type ne créer pas d'arrêt du programme, et pour cause, ces erreurs sont des erreurs qui arrive lorsque vous attendez un certains résultat, mais que le résultat que renvoie votre code n'est pas le bon. Pour corriger ces erreurs, il faut repenser et relire le code écrit afin de comprendre ce qui ne va pas. Elle peuvent parfois être longue à deboger mais reste tout de même abordable.

En enfin, en troisième type d'erreur on retrouve les erreurs dites **d'exécution**. Elles apparaîssent durant l'exécution de votre programme et avec des circonstances particulières. On les appel aussi des **exception** car elle renvoie vers un événement exceptionnel. Par exemple, un programme essaie de lire un fichier qui n'existe pas.

---

## Exercices<a name="exercice"></a>

Désormais, vous allez vous entrainer avec les [conditions](#conditions) !

#### Exercice n°1

Vous créerez un programme permettant de dire si l'âge rentré dans l'input est

1. **Inférieur** à 18, la personne est mineure
2. **Supérieur** à 18 et **inférieur** à 65, la personne est majeur et dans la vie active
3. **Supérieur** à 65, la personne est à la retraite

Voici le code de base à utiliser

```php
<form class="flex" method="POST">
    <input type="number" name="age" placeholder="Entrez âge">
    <input type="submit" value="Statut de la personne">
</form>

<?php
    if (!$_POST) return;
    $age = $_POST["age"]; // Variable d'âge

    // Entrer votre code ci-dessous

?>
```

#### Exercice n°2

Vous créerez un programme permettant de dire si

1. L'identifiant est **correct**, si _admin_
2. Le mot de passe est **correct**, si _password_

Voici le code de base à utiliser

```php
<form class="flex" method="POST">
    <input type="text" name="identifiant" placeholder="Entrer votre identifiant">
    <input type="text" name="password" placeholder="Entrer votre mot de passe">
    <input type="submit" value="Connexion">
</form>

<?php
    if (!$_POST) return;
    $identifiant = $_POST["identifiant"]; // Variable d'identifiant
    $motDePasse = $_POST["password"]; // Variable de mot de passe

    // Entrer votre code ci-dessous

?>
```
