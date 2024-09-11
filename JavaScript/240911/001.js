console.log("===== 산술 할당 연산 =====");
// 산술 + 할당
let x = 10;

x += 10; // x = x + 10;
console.log(x);

x -= 5;
console.log(x);

x *= 2;
console.log(x);

x /= 3;
console.log(x);

x **= 2;
console.log(x);

x %= 8;
console.log(x);

console.log("===== 비교 연산 =====");
console.log("1. 동등과 부등");
let y = 10;
console.log(x == y);
console.log(x == 4);
console.log(y == "4");
// 동등 연산에서는 형 변환이 일어남

console.log(x != y);
console.log(x != "4");

const obj = {
  name: "weniv",
  age: 30,
};

const obj2 = {
  name: "weniv",
  age: 30,
};
console.log(obj == obj2); //false

const obj3 = obj2; // 같은 주소를 참조
console.log(obj2 == obj3);

console.log({} == {}); // false

console.log("2. 일치와 불일치");
console.log(x === y); // false
console.log(x === "4"); // false
console.log(x === 4); // true

console.log(x !== y); // true
console.log(x !== "4"); // true
console.log(x !== 4); //false

console.log("===== 논리 연산과 단축 평가 =====");
// 논리연산자 && || !
console.log("1. 논리곱 연산");
// 전부 참일 때
console.log("Licat" && false && 23 && "Wade"); // false
console.log("Licat" && 23 && "Wade"); // Wade Truthy, Falsy
// 모든 값이 Truthy -> 모든 피연산자를 평가/ 마지막 Truthy한 값을 반환

console.log("Licat" && null && "Wade"); // null
// 가장 첫 번째로 만나는 Falsy한 값을 반환

let isLoggedIn = false;
isLoggedIn && console.log("사용자님 안녕하세요!");

console.log("2. 논리합 연산");
// 논리합 -> 피연산자가 모두 false -> false, 하나라도 true -> true
console.log(null || false || 23 || "Wade"); // 23에서 평가를 출력
// 가장 첫 번째로 나오는 Truthy한 값을 반환

console.log(null || undefined || false || 0);
// 모든 값이 Falsy 하다면, 가장 마지막의 Falsy 한 값을 반환

let name = "Licat";
name = name || "사용자";
console.log(`${name}님 안녕하세요!`);

console.log("===== nullish 병합 연산자");
// ?? -> 논리합 연산의 단축평가와 유사
// null과 undefined 인지를 평가
console.log("Licat" ?? "Wade");
console.log(null ?? "Wade");
console.log(null ?? undefined);
console.log("" ?? "Wade");
console.log(false ?? "Wade");

name = "";
name = name ?? "사용자";
console.log(`${name}님 안녕하세요!`);

const user = {
  name: "wade",
};
// console.log(user.location && user.location.city);

console.log("===== 옵셔널 체이닝 =====");
// ?.
const user2 = {
  name: "Licat",
  company: "weniv",
  address: {
    city: "Jeju",
  },
};
console.log(user2.address); //address
// console.log(user2.address.city); 오류 발생
console.log("단축 평가 사용 ", user2 && user2.address && user2.address.city);
console.log("옵셔널 체이닝 사용", user2?.address?.city);
console.log("대괄호에서 옵셔널 체이닝", user2?.["address"]?.["city"]);

console.log(user2?.greeting?.());
// 유효한 함수에만 호출이 가능

console.log("===== 쉼표 연산 =====");
let a = 1,
  b = 2,
  c = 3;
console.log(a, b, c);

let result = (a + 1, b + 2, c + 3); // 할당하지 않았음
console.log(a, b, c); // 1 2 3 
console.log(result); // 6

console.log("===== 그룹 연산자 =====");
// 묶는 역할
a = 10;
b = 20;
c = 30;
console.log(a + b * c);
console.log((a + b) * c);

