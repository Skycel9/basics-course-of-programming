<center><h1>Chapitre 3.1 - Conditions</h1></center>

### Définition

Les **conditons** ou **instruction conditionnel** ou **boucle alternative** est une fonction qui effectue différentes actions en fonction du résultat d'une condition [booleenne](../Chapter_1/Types.md#types-bool). En programmation, elles sont très souvent utilisé car elles permettent de vérifier des éléments avant d'exécuter du code.

En général, la structure des conditions ressemble à celle ci-dessous.

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
<br>

Premièrement nous pouvoir voir le mot-clé **`if`** désignant _si_, c'est lui qui va initialiser la condition. Après nous voyons la **`condition`** entourée de parenthèses, c'est ici que vous entrerez votre ou vos [opérations(s) logique(s)](../Chapter_2/Logic.md) ou [de comparaison(s)](../Chapter_2/Comparison.md). Entre les accolades, vous trouverez le code qui sera effectué si le résultat de la condition vaut _TRUE_.

```
{

}
```

Le mot-clé **`else`** est le mot-clé qui défini le code a exécuter si la condition n'est pas rempli, il est comparable à _sinon_, il peut être suivi d'une nouvelle condition **`if (condition)`**. À savoir que `else` n'est pas obligatoire lors de mise en place d'une condition.

Malgré beaucoup de similitudes sur les conditions dans les langages, **certains ne suivent pas exactement la même syntaxe**.

Pour être sûr de la syntaxe dans le langage que vous utilisez, vous pouvez jeter un oeil dans les [exemples](./Practice/Examples) ou sur la documentation du langage en question.