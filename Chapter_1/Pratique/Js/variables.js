// Vous trouverez ici, des exemples sur les variables

let str = "my string";
let float = 1.64;
let int = 4;

var bool = true;
var arr = [1, 2, 3];

console.log(str); // Renvoi my string
console.log(float); // Renvoi 1.64
console.log(int); // Renvoi 4
console.log(bool); // Renvoi true
console.log(arr); // Renvoi [1, 2, 3]


// Essayons de réutiliser un nom de variables

let str = "new string";

console.log(str); // Renvoi new string

// Ceci est possible car nous utilisons une variables
// Vous pouvez aussi changer la valeur d'un variable de la sorte

str = "new string";

// Pour aller plus loin avec les variables

function add(a, b) {
    if (a && b) {
        let result = a + b;
    }

    console.log(result); // Ne renvoie rien car let a une porté de bloc
}

function sub(a, b) {
    if (a && b) {
        var result = a - b;
    }

    console.log(result); // Renvoi la valeur de a - b, car var a une porté de fonction
}
