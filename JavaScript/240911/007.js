console.log("=== while ===");
let i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

console.log("=== do ~ while ===");
// 일단 한 번 실행
i = 0;
do {
    console.log(i);
    i++;
}while (i < 10);


let input;
// do {
//     input = window.prompt('숫자를 입력하세요');
// } while (isNaN(input));

// 사용자의 입력한 값이 '종료' 일 때 까지 입력을 받고, '종료'
const inputs = [];
let input2;
do {
    input2 = window.prompt('종료하려면 \'종료\'를 작성해주세요.');
    inputs.push(input2);

} while (input2 != '종료');
console.log(inputs); 