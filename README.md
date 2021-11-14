<div align="center"><img src="https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737__340.png"></div>

# Cours et exercices pour les débutants en programation
<br>

> Ce cours prendra pour exemple trois langage de programmation comme support, les langages seront [**PHP**](https://php.net/ "Documentation PHP"), [**Javascript**](https://developer.mozilla.org/fr/docs/Web/JavaScript "Documentation Javascript") ainsi que le [**Java**](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html "Documentation Java")

## Chapitres

* **[Variables, Constantes et Types](#variable-constante-type "Chapitre Premier")**<br>
  * **[Variables](#variable "Chapitre 1.1")**<br>
  * **[Constantes](#constante "Chapitre 1.2")**<br>
  * **[Types](#type "Chapitre 1.3")**<br>
* **[Opérateurs logiques et de comparaisons](#operators "Chapitre 2")**<br>
* **[Conditions](#conditions "Chapitre 3")**<br>
* **[Boucles](#boucles "Chapitre 4")**
<br>

## Variables, Constantes et Types<a name="variable-constante-type"></a><br>

Comme vous avez pu le lire dans le titre, nous allons voir dans ce premier chapitre des notions de base en programmation. Ces notions sont les [types](#type "Chapitre 1.3"), les [constantes](#constante "Chapitre 1.2") ainsi les [variables](#variable "Chapitre 1.1").<br>

----

  ### Variables<a name="variable"></a>
  Avant toutes choses, definissons ce qu'est une variable, afin de partir avec les mêmes bases.  
  Le terme de **variable** est un terme provenant des [mathématiques](https://fr.wikipedia.org/wiki/Math%C3%A9matiques), d'après le site [stephonsays](https://fr.strephonsays.com/variable-and-vs-constant-8185), les variables mathématiques sont des éléments qui peuvent contenir une valeur qui peut être modifié. Les principales utilisations des variables sont dans les équations ou les fonctions.  
  Dans l'exemple ci-contre, x est un variable représentant l'inconnu. `x²-2x+4=0`

En informatique, en programmation pour être plus précis, les variables ont le même principe, c'est un élément qui peut changer de valeur sans créer de bug dans un programme.

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
var b = 12;           // var a un "scope" ou porté GLOBAL, accessible dans tout le code

// Output
console.log(a); // Renvoie => ma variable
console.log(b); // Renvoie => 12
```

Exemple avec **Java**
```java
// Déclarations variables
char A;
A = "ma variable";
int B;
B = 12;

// Output
System.out.println(A); // Renvoie => ma variable
System.out.println(B); // Renvoie => 12
```
Java étant un langage fortement typé, il est nécessaire de comprendre les [type}(#type)

  ### Constantes<a name="constante"></a>
  ### Types<a name="type"></a>
  

## Opérateurs logiques et de comparaisons<a name="operators"></a>
<br>

> #### Les opérateurs logiques et les opérateurs de comparaisons sont des opérateurs qui vous seront utile pour le prochain chapitre sur les conditions, il est donc essentiel de comprendre ce chapitre avant de passé à la suite !

- Les opérateurs logiques
<br>

Liste d'opérateurs logiques existant

Opérateur | Syntaxe | Exemple | Résultat
| ----- | :-----: | :-----: | ----: | 
AND (ET) | && | a && b | Renvoie *TRUE* si a **ET** b valent *TRUE*
OR (OU) | \|\| | a \|\| b | Renvoie *TRUE* si a **OU** b vaut *TRUE*
NOT (NON) | ! | !a | Renvoie *TRUE* si a **ne vaut pas** *TRUE*
<br>


- Les opérateurs de comparaisons
<br>

Liste des opérateurs de comparaisons

Opérateur | Syntaxe | Exemple | Résultat
| ---- | :----: | :----: | ----: |
Egal | == | a == b | Renvoie *TRUE* si a et b sont **EGAUX**
Identique | === | a === b | Renvoie *TRUE* si a et b sont **EGAUX** et **DE MÊME TYPE**
Différent | != | a != b | Renvoie *TRUE* si a et b sont **DIFFERENT**
Différent | !== | a !== b| Renvoie *TRUE* si a et b sont **DIFFERENT**
Inférieur | < | a < b | Renvoie *TRUE* si a est **INFERIEUR** à b
Inférieur ou égal | <= | a <= b | Renvoie *TRUE* si a est **INFERIEUR OU EGAL** à b
Supérieur | > | a > b | Renvoie *TRUE* si a est **SUPERIEUR** à b
Supérieur ou égal | >= | a >= b | Renvoie *TRUE* si a est **SUPERIEUR OU EGAL** à b
