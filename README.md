<div align="center"><img src="https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737__340.png"></div>

# Cours et exercices pour les débutants en programation

<br>

> Ce cours prendra pour exemple trois langages de programmation comme support, les langages seront [**PHP**](https://php.net/ "Documentation PHP"), [**Javascript**](https://developer.mozilla.org/fr/docs/Web/JavaScript "Documentation Javascript") ainsi que le [**Java**](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html "Documentation Java").

## Chapitres

-   **[Variables, Constantes et Types](#variable-constante-type "Chapitre Premier")**<br>
    -   **[Types](#type "Chapitre 1.1")**<br>
    -   **[Constantes](#constante "Chapitre 1.2")**<br>
    -   **[Variables](#variable "Chapitre 1.3")**<br>
-   **[Opérateurs logiques et de comparaisons](#operators "Chapitre 2")**<br>
-   **[Conditions](#conditions "Chapitre 3")**<br>
-   **[Boucles](#boucles "Chapitre 4")**<br>
-   **[Erreurs](#error "Chapitre 5")**<br>
    <br>

## Variables, Constantes et Types<a name="variable-constante-type"></a><br>

Comme vous avez pu le lire dans le titre, nous allons voir dans ce premier chapitre des notions de base en programmation. Ces notions sont les [types](#type "Chapitre 1.3"), les [constantes](#constante "Chapitre 1.2") ainsi les [variables](#variable "Chapitre 1.1").<br>

---

### Types<a name="type"></a>

En informatique, lorsque nous parlons de types, il est question de **types de données**. Un type est ce qui défini la nature des valeurs que peut prendre une donnée.
Il existe différents type de données que vous retrouverez ci-dessous :

-   **String** (chaîne de caractères), est un type qui s'écrit entre **`"`**, il peut contenir toutes les sortes de caractères. Exemple &rarr; `"string"`
-   **Integer** (Nombre entier relatif), est un type qui contient tous les entiers naturels auquel on ajoute un signe positif ou négatif. Exemple &rarr; `12` ou `-3`
-   **Float** (Nombre réel ou flottant), est un type contenant tous les nombres de l'ensemble réel, c'est à dire tous les nombres, ayant un nombre fini ou infini de décimal(s). Exemple &rarr; `1.465`
-   **Boolean** (Booléen), est un type possédant uniquement 2 états, qui sont généralement _TRUE_ ou _FALSE_. Exemple &rarr; `TRUE`
-   **Array** (Tableau), est un type de données paramétrées, contrairement aux précédent, il peut contenir plusieurs données . Sa syntaxe est généralement [ ] et chaque élément est séparé des autres par une `,`. Exemple &rarr; `["ma variable", "12", "TRUE"]`

---

### Variables<a name="variable"></a>

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

### Constantes<a name="constante"></a>

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

| Opérateur | Syntaxe | Exemple  |                  Résultat                  |                                                      Fonctionnement                                                       |
| --------- | :-----: | :------: | :----------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| AND (ET)  |   &&    |  a && b  | Renvoie _TRUE_ si a **ET** b valent _TRUE_ | **`&&`** vérifie les opérations **dans l'ordre** (_gauche à droite_) et **s'arrête** lorqu'une opérations renvoie _FALSE_ |
| AND (ET)  |    &    |  a & b   | Renvoie _TRUE_ si a **ET** b valent _TRUE_ |                                   **`&`** vérifie les deux opérations quoi qu'il arrive                                   |
| OR (OU)   |  \|\|   | a \|\| b |  Renvoie _TRUE_ si a **OU** b vaut _TRUE_  |                                                             `                                                             |                                                 | ` vérifie les opérations **dans l'ordre** (_gauche à droite_) et **s'arrête** lorsqu'une opérations renvoie _FALSE_ |
| OR (OU)   |   \|    |  a \| b  |  Renvoie _TRUE_ si a **OU** b vaut _TRUE_  |                                                             `                                                             | ` vérifie les deux opérations quoi qu'il arrive |
| NOT (NON) |    !    |    !a    |    Renvoie _TRUE_ si a **VAUT** _FALSE_    |                                    `!` vérifie le caractère contraire d'une opérations                                    |

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

## Conditions

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
