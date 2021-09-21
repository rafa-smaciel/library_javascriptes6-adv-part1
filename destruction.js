// Destruction Assignment
// Antes do ES6
/*
var arr = ['Apple', 'Banana', 'Orange'];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

// c/ destruction assigment
var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];
console.log(apple, apple2);
*/

// outro exemplo, destruindo arrays
/*
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

var [apple2, banana2, orange2, [tomato2]] = [
    'Apple',
    'Banana',
    'Orange',
    ['tomato']
];
console.log(tomato2);
*/


// Destruciton em objects

var obj = {
    name: 'Rafael'
};
var { name } = obj;
console.log(name);

// também é possível destruir a propriedade recem criada e atribuir outro nome.
var obj = {
    name: 'Rafael'
};
var { name: name2 } = obj;
console.log(name);

