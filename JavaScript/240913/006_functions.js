console.log("=== 콜백함수 ===");
function func1() {
    return 100;
}
console.log(func1());

let x = func1();

console.log("=== 재귀함수 ===");
//팩토리얼
function factorial(n) {
    if (n <= 1){
        return 1;
    } 
    return n * factorial(n-1);
}
console.log(factorial(4));

//sigma(n) = n + sigma(n-1)

function sigma(n) {
    if (n <= 1) {
        return 1;
    }
    return n + sigma(n-1);
}
console.log(sigma(5));

console.log("=== 즉시 실행 함수 ===");
//let, const 도입으로 이제 잘 안씀
const result = (function funcIIFE() {
    let a = 1;
    let b = 2;
    return a + b;
})();
// funcIIFE();
console.log(result);

console.log("=== 4. 생성자 함수 ===");
const book = {
    title: "JavaScript Essentials",
    price: 15000,
    author: ["wade", "hati"],
};

function Book(title, price, author) {
    this.title = title;
    this.price = price;
    this.author = author;
    this.publish = "위니북스";
}
const book1 = new Book("JS", 15000, ["wade", "hati"]);
const book2 = new Book("HTML/CSS", 20000, ["rosy", "zeezee"]);

console.log(book1);
console.log(book2);

const book3 = Book("React", 18000, ["wade"]);
console.log(book3);
console.log(title, price, author, publish)