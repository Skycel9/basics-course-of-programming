<center><h1>Chapitre 1.1 - Les types</h1></center>

---
### Définition

En [informatique](https://fr.wikipedia.org/wiki/informatique) nous utilisons le terme de type pour évoquer les [types de données](https://fr.wikipedia.org/wiki/Type_%28informatique%29). Un type de données est ce qui permet de définir la **nature d'une donnée**. Il existe plusieurs type de données plus ou moins communes dont nous relaterons le fonctionnement et les différences ci-dessous.

- Pour commencer voyons les **String**<a name="types-str"></a> (*chaîne de caractères*), peut être écrit _**`str`**_, ce type s'écrit en règle générale entre `"`, ce type permet de contenir la plupart des caractères.
Exemple &rarr; `"string"`
- Ensuite nous retrouvons un type semblable qui est **Character**<a name="types-char"></a> (*caractère*), à la différence des string, le character est un type ne pouvant contenir n'importe quel caractère mais au **nombre de 1 uniquement**, il s'écrit généralement entre `'`, et peut être abrégé en _**`char`**_.
Exemple &rarr; `'c'`
- Maintenant, nous verrons les types orientés numériques, premièrement nous avons le type **Integer**<a name="types-int"></a> (*nombre entier relatif*), il correspond à tout les [entiers naturels](https://fr.wikipedia.org/wiki/Entier_naturel), auquel on ajoute un signe positif ou négatif. L'abrévation commune que vous verrez est _**`int`**_.
Exemple &rarr; `12` ou `-3`
- Nous avons aussi le type **Float** (*nombre flottant ou réel*), ce type accepte tout le [nombres réels](https://fr.wikipedia.org/wiki/Nombre_r%C3%A9el), c'est à dire la totalité des nombres ayant un nombre fini ou infini de décimal(s). Il ne possède pas d'abrévation particulière et reste donc _**`float`**_
Exemple &rarr; `1.453` ou `1.33333...`
- Ensuite un type basé sur la logique, le type **Boolean** (*booléen*), ce type est un type que l'on peut appeler _logique_. Il peut prendre **uniquement 2 valeurs**, les valeurs possibles sont _True_ ou _False_, autrement dit _1_ ou _0_. Une abrévation lui appartient, _**`bool`**_
Exemple &rarr; `false`
- Pour finir nous avons les **Array** (_Tableaux_), qui est un type de *[données paramétrées](https://fr.wikipedia.org/wiki/Type_%28informatique%29#Types_param%C3%A9tr%C3%A9s)*. Contrairement au précédent, ce type **peut prendre plusieurs données différentes**, et s'écrit généralement entre `[ ]`. Il peut accepter divers types de données dans certains langages mais pas la totalité, il est donc préférable d'avoir un tableau le même type de données pour toutes ses valeurs. Son abréviation est _**`arr`**_. À noter : Les index des tableaux commence à la valeur **0**.
Exemple &rarr; `["Valeur1", "Valeur2, "Valeur3"]` ou `[1, 2, 3]`