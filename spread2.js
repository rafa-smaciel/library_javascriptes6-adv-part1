// strings c/ spread operator
/*
const str = 'Digital Innovation One';
function logArgs(...args) {
    console.log(args);
}
logArgs(...str);
*/


// ou
/*
const str = 'Digital Innovation One';
function logArgs() {
    console.log(arguments);
}
logArgs(...str);
*/


// array c/ spread operator
/*
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
function logArgs(a, b, c) {
    console.log(a, b, c);
}
logArgs(...arr);
*/


// construindo array c/ spread operator
// Antes do ES6
/*
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
function logArgs(a, b, c) {
    console.log(a, b, c);
}
const arr2 = arr.concat([5, 6, 7]);
console.log(arr2);
*/

// c/ spread operator
/*
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
function logArgs(a, b, c) {
    console.log(a, b, c);
}
const arr2 = [5, 6, 7, ...arr];
const arr3 = [...arr2, ...arr, 0, 0, 0];
console.log(arr3);
*/

// literal objects c/ spread operator

const arr = [1, 2, 3, 4];
function logArgs(a, b, c) {
    console.log(a, b, c);
}
const arrClone = [...arr];
const obj = {
    test: 123
};
const obj2 = {
    ...obj,
    test2: 'hello'
};
console.log(obj2);

