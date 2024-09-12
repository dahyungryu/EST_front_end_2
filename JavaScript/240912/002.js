// f(x) = x^2 + x + 1;

function 라면끓이기() {
  let 라면그릇;

  console.log("물 550ml를 끓인다");
  console.log("면과 분말 스프, 후레이크를 같이 넣는다");
  console.log("4분 40초간 더 끓인다");

  라면그릇 = "맛있는라면 냠냠";
  return 라면그릇;
}
// console.log(라면끓이기());
// console.log(라면끓이기());
// console.log(라면끓이기());

console.log("=== 함수의 구조 ===");
function sum(num1, num2) {
  // parameter(선언)
  return num1 + num2;
}
console.log(sum(10, 20)); // arguement(실제 값)

function greeting(name) {
  console.log(`Hello, I'm ${name}`);
}

console.log(greeting("Licat")); // 인사 함수의 호출

console.log("=== 파라미터와 아규먼트의 특징 ===");
console.log(sum(10, 20, 30, 40)); // 초과된 것은 무시
console.log(sum(50)); //num1(50), num2(undefined)

console.log("=== 값에 의한 전달 ===");
function add(num) {
  num += 10;
  console.log(num);
}
let a = 10;
add(a);
console.log(a);

function getJob(obj) {
  obj.company = "weniv";
  console.log(obj);
}
const user = {
  name: "Licat",
  location: "Jeju",
};
getJob(user);
console.log(user);

console.log("=== 반환값 ===");
// input => 처리 => output
// return 뒤에 반환값을 작성

function mul(a, b) {
  return a * b;
}
mul(10, 2);
console.log(mul(10, 2));

function printFunc(num) {
  console.log(num);
  return 100;
}
console.log(printFunc(200) + printFunc(300)); //200

function returnIf(num) {
  if (isNaN(num)) return;
}
// 1. 사용자의 id와 비밀번호 정보를 가져와야 함
function getIdPw(id, pw) {
  console.log("사용자 정보 가져오기", id, pw);
}
// 2. 입력값 검증
function inputValiddation(id, pw) {
  console.log("입력값의 유효성 검증");
}
// 3. 유저 정보를 가진 서버에 데이터를 전송
function sendUser(id, pw) {
  console.log("유저 정보를 서버에 전송");
}

// 4. 리다이렉트
function redirectMainPage() {
  console.log("로그인을 완료시키고 메인 페이지로 이동합니다.");
}

let id = "licat";
let pw = "1234";

//로그인 프로세스
getIdPw(id, pw);
inputValiddation(id, pw);
sendUser(id, pw);
redirectMainPage(id, pw);
console.log();
console.log();
console.log();
console.log();
console.log();

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

function calculator(op, a, b) {
  let result;
  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
  }
  console.log(`${a} ${op} ${b} = ${result} `);
  return result;
}
calculator("*", 3, 5);
