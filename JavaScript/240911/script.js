// 조건문

let isGreen = true;

if (isGreen) {
  console.log("횡단보도를 건너세요!");
} else {
  console.log("멈추세요!");
}

console.log("=== if 조건문 ===");
if (true) {
  console.log("이 코드는 항상 실행됩니다!~");
}
if (false) {
  console.log("이 코드는 실행되지 않습니다.");
}

let age = 24;
if (age > 20) {
  console.log("입장이 가능합니다.");
}

let name = "hello";
if (name) {
  console.log(`${name}님 안녕하세요`);
}

let name = ""; // falsy
if (name) {
  console.log(`${name}님 안녕하세요`);
}

console.log("=== if ~ else ===");
name = "";
if (name) {
  console.log(`${name}님 안녕하세요`);
} else {
  console.log("이름을 입력하세요.");
}

let x = 5;
let y = 10;

if (x === y) {
  console.log("x와 y가 같습니다");
} else {
  console.log("x와 y가 다릅니다");
}

if (x === y) {
  console.log("x와 y가 같습니다");
} else {
  if (x > y) {
    console.log("x가 y보다 큽니다");
  } else {
    console.log("x가 y보다 작습니다");
  }
}

console.log("=== else if ===");
if (x === y) {
  console.log("x와 y가 같습니다");
} else if (x > y) {
  console.log("x가 y보다 큽니다");
} else {
  console.log("x가 y보다 작습니다");
}

let score = 80;
let grade;
if (score > 90) {
    grade = 'A';
} else if (score > 80) {
    grade = 'B';
} else if (score > 70) {
    grade = 'C';
} else if (score > 60) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log(`점수는 ${grade}`);