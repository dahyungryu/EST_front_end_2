const obj = {
  name: "licat",
  age: 30,
  "co-worker": ["binky", "mura"],
}; //프로퍼티
console.log(obj);

const company = "weniv";
let user = {
  name: "licat",
  company,
  location: {
    country: "Korea",
    city: "jeju",
  },
  greeting() {
    console.log("Hello, I am Licat!");
  }, //method
  "co-worker": ["binky", "mura", "soulgom"],
};
console.log(user);

// 객체의 속성에 접근
// 1. 대괄호 표기법 (key값을 문자열로 감싸주기)
console.log("===== 대괄호 표가법 =====");
console.log(user["company"]);
console.log(user["location"]);
console.log(user["greeting"]());
console.log(user["co-worker"]);

// 2. 점 표기법
console.log("===== 점 표기법 =====");
console.log(user.company);
console.log(user.location);
console.log(user.greeting());

//변수명 작성 규착울 먼족하지 못하는 경우는 사용 불가 -> 대괄호 표기법을 사용
//console.log(user.co-worker);

console.log("===== 속성 추가 및 삭제 =====");
user["job"] = "CEO"; // 추가
console.log(user);

user.location = "Jeju"; // 수정

delete user.job;
console.log(user);

console.log("===== 객체 속성 확인 =====");
console.log("job" in user); // false
console.log("name" in user); // true

// ------------------------------
console.log("===== 객체의 중첩 =====");
user = {
  name: "licat",
  company,
  location: {
    country: "Korea",
    city: "jeju",
  },
  greeting() {
    console.log("Hello, I am Licat!");
  }, //method
  "co-worker": ["binky", "mura", "soulgom"],
};
console.log(user["location"]["city"]);

console.log("===== 객체 순회 =====");
// for...of
for (const key in user) {
    console.log(key, user[key]);
}
//for...in 순서 보장 x

console.log("===== 객체의 메서드 =====");
const weniv = {
    ceo: "Licat",
    manager: "Mura",
    designer: "Soulgom",
};
console.log("Object.keys", Object.keys(weniv));
console.log("Object.values", Object.values(weniv));
console.log("Object.entries", Object.entries(weniv));
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
