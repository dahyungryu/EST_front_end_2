// 객체에서는 키와 값의 쌍을 프로퍼티라고 함
// 맵에선 엔트리라고 부름
let m = new Map([
  ["key1, 1"], 
  ["key2", 2],
]);
// Object.entries [[key, value],[key, value]]
console.log(m);

m.set("하나", 1);
console.log(m);
m.set(true, "참");
m.set(100, "백");
m.set({ name: "licat", age: 20 }, "ceo");
const user = ({ name: "licat", age: 20 }, "ceo");
m.set(user, "ceo");
console.log(m);

console.log("=== 값 가져오기 ===");
console.log(m.get("하나")); // 1
console.log(m.get(true)); // 참


console.log("=== 값 가져오기 ===");
console.log(m.has(true));
console.log(m.has("Hello"));

console.log(m.get({ name: "licat", age: 20 })); // undefined
console.log(m.get(user));

console.log("=== 사이즈 ===");
const obj = { name: "licat", age: 20 };
console.log(obj.length); // undefined
console.log(Object.keys(obj).length);

console.log(m.size);

console.log("=== 요소 삭제하기 ===");
m.delete(true);
m.delete(user);

// m.clear(); // 모든 요소 삭제
console.log(m);

console.log("=== 맵 순회하기 ===");
// for in 순서 보장 x
console.log("1. for of 순회");
for (const data of m) {
  // console.log(data);
  console.log(data[0], data[1]);
}
console.log("2. 구조 분해 할당을 사용한 순회");
for (const [key, value] of m) {
  console.log(key, value);
}

console.log("=== key, value 값 기져오기 ===");
console.log(m.keys());
console.log(m.values());

for (const k of m.keys()) {
  console.log(k);
}
for (const v of v.keys()) {
  console.log(v);
}
const iter = m.values();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

console.log("=== map을 배열과 객체로 변환 ===");
let temp = new Map([
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
]);
console.log(temp);

console.log("1. map 을 객체로 변환");
const mapToObj = Object.fromEntries(temp);
console.log(mapToObj);

console.log("2. map을 배열로 변환");
const mapToArr = Array.from(temp);
console.log(mapToArr);

console.log("3. 객체를 map으로 변환");
const licat = {
  name: "licat",
  age: 20,
};
const objToMap = new Map(Object.entries(licat));

