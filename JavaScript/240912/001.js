console.log("=== 구조 분해 할당의 기본 구조 ===");
const { key1: 변수1, key2: 변수2 } = { key1: "값1", key2: "값2" };
console.log("변수1", 변수1);
console.log("변수2", 변수2);

const { food1, food2, food3 } = {
  food1: "과일",
  food2: "채소",
  food3: "육류",
  food4: "생선",
};
console.log("food1", food1);
console.log("food2", food2);
console.log("food3", food3);


console.log("=== 배열의 구조 분해 할당 ===");
const [a, , c] = [10, 20, 30, 40, 50];
console.log(a, c);

console.log("=== 함수의 구조 분해 할당 ===");
function func1 ({ name = "사용자", age = 0} = {}) {
    console.log(name, age);
}
func1({name: "licat", age: 30});
func1({name: "binky", age: 30, level: 100});
func1({name: "gary"});

function func2 ([a = 10, b = 20, c = 30] = []) {
    console.log(Math.max(a, b, c));
}
func2([10, 20, 30]);
func2([10, 50]); // undefined.

func1(); // undefined.
// 기본값 부여되서 값은 사용자, 0
// func1({name, age}); 오류발생. undefined는 구조 할당이 안 됨.

func2();
// [a, b, c] = undefined
// 기본값 부여해서 30
