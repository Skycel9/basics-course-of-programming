<center><h1>Chapitre 5.2 - Expressions régulières</h1></center>

### Definition

Une **expressions régulière** ou **expressions rationnelles** est une chaîne de caractères qui décrit les différentes syntaxe accepté dans une autre chaîne de caractères. Elles sont aussi appelé **regex**, qui est un mot valise provenant de l'anglais et formé de _regular expression_.

> La syntaxe des **Regex** est particulière et peut parfois en effrayer certains, mais cette frayeure n'est pas fondé. Une fois pencher sur la question elles sont très utiles et ne sont pas aussi compliqué qu'il n'y paraît

> _Ce cours est en grande partie du site suivant : https://www.lucaswillems.com/fr/articles/25/tutoriel-pour-maitriser-les-expressions-regulieres_

La syntaxe est la suivante
<a href="https://www.lucaswillems.com/fr/articles/25/tutoriel-pour-maitriser-les-expressions-regulieres">
```regex
^[a-zA-Z-]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$
```
</a>

Cette expression régulière permet de représenter toutes les adresses mails contenues dans une chaîne de caractère.


Les expressions régulières utilisent des éléments que nous verrons ci-dessous.

```regex
mots|mats|mits
```
> Avec cette expressions nous recherchons les mots _mots, mats et mits_.
Toutefois une solutions plus simple et courte est à notre disposition, la voici.

<br>
```regex
m[oai]ts
```
> Cette syntaxe permet de faire la même chose en incluant une **intervalle** de caractère(s) accepté(s). _Une intervalle, dans les expressions régulières, contiennent tous les caractères acceptés._

<br>
```regex
m[^oai]ts
```
> À contrario, cette expression recherche tout les mots contenant un **m** suivi d'une lettre qui n'est ni **o**, ni **a**, ni **i**, suivi de **ts**. Comme vous l'avez peut-être remarqué, l'accent circonflexe (**^**) permet d'exclure de la recherche les caractères qui sont situé après lui.

<br>
```regex
m[abcdefghijklmnopqrstuvwxyz]ts
```
> Ici, l'expression accepte toutes les lettres de l'[alphabet latin](https://fr.wikipedia.org/wiki/Alphabet_latin)

<br>
Vous confenez bien qu'il n'est pas pratique d'utiliser cette syntaxe. C'est pourquoi des équivalents existe pour les différentes possibilités.

Intervalle | Equivalent | Traduction
---------|------------|-----------
[a-z] | [abcdefghijklmnopqrstuvwxyz] | Lettres minuscules de a à z
[A-Z] | [ABCDEFGHIJKLMNOPQRSTUVWXYZ] | Lettres majuscules de A à Z
[0-9] | [0123456789] | Chiffres de 0 à 9
[a-z0-9] | [abcdefghijklmnopqrstuvwxyz0123456789] | Lettres minuscules de a à z et chiifre de 0 à 9

Comme dans la dernière ligne, il est possible de cumuler des ensembles pour en faire un seul et simplifier d'autant plus l'expression

Avec l'usage des intervalles notre intervalle donne donc
```regex
m[a-z]ts
```

##### Voici un petit avant goût des expressions régulières si vous souhaitez poursuivre afin de les utiliser pleinement. Rendez-vous sur le site de [Lucas Willems](https://www.lucaswillems.com/fr/articles/25/tutoriel-pour-maitriser-les-expressions-regulieres).