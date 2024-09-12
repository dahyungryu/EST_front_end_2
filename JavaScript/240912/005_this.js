// 엄격모드 -> this undefined
console.log("=== 1. 전역 범위 ===");
console.log(this); // 전역 범위에서 this => 전역 객체 (window)

function func1() {
  console.log(this);
}

console.log("=== 2. 일반 함수 호출 ===");
func1();

const obj = {
  name: "obj",
  type: "object",
  func1: func1,
};
obj.func1(); //this 는 obj

console.log("-------------");
const obj2 = {
  name: "obj2",
  type: "object",
  func1: function () {
    console.log("func1: ", this);

    function func2() {
      console.log("func2: ", this);
    }
    func2();
  },
};
obj2.func1(); 

console.log("---func3---");
const func3 = obj2.func1 //전역 객체 window. 일반 함수


console.log("=== 3. 화살표 함수 ===");

const arrowFunction = () => {
    console.log("arrowFunction:",this);
}
arrowFunction(); //window
const obj3 = {
    name: 'obj3',
    func1: function() {
        const arrowFunc = () => {
            console.log("arrowFunc: ",this);
        }
        arrowFunc(); //obj3
        const innerFunc = function () {
            console.log("innerFunc: ", this);
        }
        innerFunc(); //window
    }
};

obj3.func1();

const button = document.getElementById('click-btn');
console.log(button);

button.addEventListener('click', () => {
    console.log("이벤트가 등록된 객체", this);
    this.style.background = 'pink';
})

console.log("=== 4. 생성자 함수 ===");
function Person(name) {
    this.name = name;
    console.log(this);
}
const person1 = new Person('weniv');
console.log(person1);
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





