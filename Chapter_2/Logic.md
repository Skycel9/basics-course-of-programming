<center><h1>Chapitre 2.1 - Opérateurs logiques</h1></center>

### Définition

Les **opérateurs logiques** sont des éléments informatiques qui permettent d'effectuer différentes opérations en ajoutant des _sortes de connecteurs logiques_.

La liste des opérateurs se trouve ci-dessous.

| Opérateur | Syntaxe | Exemple  | Résultat | Fonctionnement |
| --------- | :-----: | :------: | -------: | :------------: |
| AND (ET)  |   &&    |  a && b  | Renvoie _TRUE_ si a **ET** b valent _TRUE_ |      **`&&`** vérifie les opérations **dans l'ordre** (_gauche à droite_) et **s'arrête** lorqu'une opérations renvoie _FALSE_       |
| AND (ET)  |    &    |  a & b   | Renvoie _TRUE_ si a **ET** b valent _TRUE_ |                                      **`&`** vérifie les deux opérations **quoi qu'il arrive**                                       |
| OR (OU)   |  \|\|   | a \|\| b |  Renvoie _TRUE_ si a **OU** b vaut _TRUE_  |     **`\|\|`** vérifie les opérations **dans l'ordre** (_gauche à droite_) et **s'arrête** lorsqu'une opérations renvoie _FALSE_     |
| OR (OU)   |   \|    |  a \| b  |  Renvoie _TRUE_ si a **OU** b vaut _TRUE_  | **`\|`** vérifie les deux opérations **quoi qu'il arrive** (_gauche à droite_) et **s'arrête** lorsqu'une opérations renvoie _FALSE_ |     |
| NOT (NON) |    !    |    !a    |    Renvoie _TRUE_ si a **VAUT** _FALSE_    |                                         `!` vérifie le caractère contraire d'une opérations                                          |