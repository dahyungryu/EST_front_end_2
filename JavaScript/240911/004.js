console.log("=== 삼항 연산자 ===");
let score = 50;
score > 30
  ? console.log("30점을 넘겼습니다!")
  : console.log("조금 더 노력하세요.");

score = 85;
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";

console.log(`당신의 학점은 ${grade}입니다.`);

console.log("=== switch ===");
let gender = "F";
switch (gender) {
  case "M":
    console.log("남성");
    break;
  case "F":
    console.log("여성");
    break;
  default:
    console.log("기타");
    break;
}

const today = new Date();
console.log(today.getDay()); // 요일
switch (today.getDay) {
  case 1:
    console.log("월요일입니다");
    break;
  case 2:
    console.log("화요일입니다");
    break;
  case 3:
    console.log("수요일입니다");
    break;
  case 4:
    console.log("목요일입니다");
    break;
  case 5:
    console.log("금요일입니다");
    break;
  case 6:
  case 0:
    console.log("주말입니다");
}

const month = new Date();
console.log(`이번 달은 ${month.getMonth() + 1}월 입니다.`);
switch (month.getMonth() + 1) {
  case 3:
  case 4:
  case 5:
    console.log(`${month.getMonth}는 봄입니다.`);
    break;
  case 6:
  case 7:
  case 8:
    console.log(`${month.getMonth}는 여름입니다.`);
    break;
  case 9:
  case 10:
  case 11:
    console.log(`${month.getMonth}는 가을입니다.`);
    break;
  case 12:
  case 1:
  case 2:
    console.log(`${month.getMonth}는 겨울입니다.`);
}
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
