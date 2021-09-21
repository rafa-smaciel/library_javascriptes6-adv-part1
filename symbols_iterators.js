// Symbol
/*
const uniqueId = Symbol('Hello');
console.log(uniqueId)
*/

// Well known symbols
/*
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
while (true) {
    let { value, done } = it.next();
    if (done) {
        break;
    }
    console.log(value);
}
*/

// c/ Es6

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;
const arr = [1, 2, 3, 4];
for (let value of arr) {
    console.log(value);
}
