// Generators - Funções com pausa
function* hello() {
    console.log('Hello');
    yield 1;
    console.log('From');
    yield 2;
    console.log('Function');
}
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next());

