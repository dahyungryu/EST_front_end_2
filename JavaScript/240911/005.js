//반복문
console.log("=== for ===");

for (let i = 1; i < 11; i++) {
  console.log(i);
}

const weniv_friends = ["licat", "binky", "gary", "soulgom", "mura"];
let text = "<ul>";
text += "<li>" + weniv_friends[0] + "</li>";
text += "<li>" + weniv_friends[1] + "</li>";
text += "<li>" + weniv_friends[2] + "</li>";
text += "<li>" + weniv_friends[3] + "</li>";
text += "<li>" + weniv_friends[4] + "</li>";
text += "<li>" + weniv_friends[5] + "</li>";
text += "</ul>";

console.log(text);
//document.body.innerHTML = text;

let text2 = "<ul>";
for (let i = 0; i <= weniv_friends.length; i++) {
  text2 += "<li>" + weniv_friends[i] + "</li>";
}
text2 += "</ul>";
document.body.innerHTML = text2;

// 1. 1부터 10까지 숫자 중 짝수만 출력
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 2.반복문을 이용해서 1부터 100가지의 숫자 중 짝수의 합을 구함
let sum = 0;
for (let i = 2; i <= 100; i += 2) {
  sum += i;
}
console.log(sum);

console.log("=== 이중 for 문 ===");
for (let i = 1; i < 10; i++) {
  console.log(`---${i}단---`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

console.log("=== for 문의 선택적 사용 ===");
// let i = 0;
// for (;;) {
//   console.log(i);
//   i++;
//   if (i === 100) break;
// }

// 두 개의 주사윌,ㄹ 던졌을 때, 주사위 눈의 합이 8이 되는 모든 경우를 출력해 주세요
let arr = [];
for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 7; j++) {
    if (i + j === 8) {
      arr.push([i, j]);
    }
  }
}
for (let idx = 0; idx <= arr.length; idx++) {
    console.log(arr[idx]);
}
