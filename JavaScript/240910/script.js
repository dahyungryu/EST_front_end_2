let a = 10;
let b = a;

console.log(a, b);
a = 20;
console.log(a, b);

let obj1 = {
    name: "licat",
    age: 30,
};
let obj2 = obj1;

obj1.age = 20;
obj2 = {name: "binky"};
console.log("obj2", obj2); // obj2의 age가 변경됨
console.log("obj2", obj2); 
console.log("obj1", obj1); 

obj2 = {
    name: "licat",
    age: 30,
};

console.log(obj1 == obj2); //false


