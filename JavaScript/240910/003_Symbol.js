//Symbol
let symbol1 = Symbol();
let symbol2 = Symbol('name');
let symbol3 = Symbol('name');
console.log(symbol2 == symbol3); // 같은 설명을 넣어 만들었지만 다름

console.log(symbol1); //접근 불가
console.log(symbol2); 
console.log(symbol3); 

const licat = {
    name: 'licat',
    // name: 'weniv', //덮어쓰기로 weniv만 남게 됨
    [symbol1]: "symnbol1",
    [symbol2]: "symnbol2",
    [symbol3]: "symnbol3",
};
console.log(licat);