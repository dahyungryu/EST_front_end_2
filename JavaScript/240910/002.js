// undefined
let a;
console.log(a); // undefined 변수의 값이 할당되지 않음
console.log(typeof(a)); // undefined
console.log(typeof(b)); // undefined

// null
// 비어있는 값, 명시적으로 사용하는 값
let isLoggedIn = true;
let currentUser = {
    name: "다형",
    level: 3,
};

// 로그인이 해제
isLoggedIn = false;
currentUser = null; // 명시적으로 빈 값
currentUser = undefined; // 빈 값, 의미론적으로 부적절. 사용하지 않음

console.log(`typeof(null) >> ${typeof(null)}`); //오류 object
console.log("" === null); // 일치 연산을 사용해서 비교
console.log(Object.prototype.toString.call(null));
