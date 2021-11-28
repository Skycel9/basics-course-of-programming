<center><h1>Chapitre 3.2 - Switch</a></center>

### Définition

Le **Switch** est également une fonction semblable aux [conditions](./Conditions.md). Il permet d'exécuter des actions en fonction du résultat, mais permet un syntaxe moins répétitive qu'une simple conditions.

La plupart des langages permettent l'utilisation du **switch** / **case**, qui respect en règles générales cette structure.

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

Analysons l'exemple présent ci-dessus, en premier temps, on trouve l'instruction **`switch`**, elle permet d'initialiser. Entre parenthèses, se trouve l'expression a utiliser. Chaque **`case`** contient la vérification à faire sur l'élément de l'expression. Pour finir, **`break`** permet de mettre fin à l'instruction switch (_ou non_) dans le case précédent. **`default`** est une instruction qui sera exécuter si aucun des _case_ n'est vérifié.

La **vérification des cases** se fait les unes après les autres dans le sens d'écriture (_haut vers le bas_).

Des différences existent entre langages, il vous est donc conseillé de regarder les [exemples](./Practice/Examples) ou de regarder la documentation du langage utilisé.