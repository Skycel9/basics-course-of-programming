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
