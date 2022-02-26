// Function 기능
// 하나의 function은 하나의 thing일을 처리한다.
// function 은 object의 일종이다.

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

//////////////////////////////////////////////////////////////////////

// 2. Parameters 매개변수
// premitive parameters: passed by value 기본매개변수: 값으로전달
// object parameters: passed by reference 객체매개변수: 참조로전달
function changeName(obj) {
    obj.name = 'coder';
}
const neo = { name: 'neo' };
changeName(neo);
console.log(neo);

//////////////////////////////////////////////////////////////////////

// 3. Default parameters (added in ES6) 기본 매개변수(ES6에 추가됨)
//function showMessage(message, from) {
//    console.log(`${message} by ${from}`);
//}
// showMessage('Hi!'); 
// message는 출력이 잘되지만 from이 정이 되어있지않아서 undefined가뜸

function showMessage(message, from = 'unknow') { //파라미터 옆에 원하는 디폴트값을 설정하면 출력이가능
console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//////////////////////////////////////////////////////////////////////

// 4. Rest parameters (added in ES6) ... <을 사용 배열형태로 전달
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) { //이렇게 출력시킬수도 있다.
        console.log(arg); 
    }
    args.forEach((arg) => console.log(arg)); //forEach를 이용한 반복
}
printAll('forest', 'mountain', 'neo');

//////////////////////////////////////////////////////////////////////

// 5. Local scope 로컬범위
let globalMessage = 'global'; // global variable 전역 변수
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable 지역 변수
    console.log(globalMessage);
}
printMessage(); 
// {}안에서 밖을 볼 수 있지만 밖에서는 안을 출력할 수 없다. 

//////////////////////////////////////////////////////////////////////

// 6. Return a value 값의 반환
function sum(a,b) {
    return a + b;
}
const result = sum(1,2); // sum이라는 함수를 사용해서 3을 출력
console.log(`sum: ${sum(1,2)}`);

//////////////////////////////////////////////////////////////////////

// 7. Early return, early exit
// bad code 
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic... 긴 업그레이드글
    }
}

// good code
function upgradeUser(user) {
    if (user.point <= 10) { 
        return; // 조건에 맞지않으면 빨리 return시키고 맞을때만 진행되도록
    }
    // long upgrade logic... 
}

//////////////////////////////////////////////////////////////////////

// 2 Function expression 함수 표현

// 함수는 다른 변수처럼 취급됩니다.
// 변수에 값으로 할당할 수 있습니다.
// 다른 함수에 인수로 전달할 수 있습니다. 
// 다른 함수에서 반환될 수 있습니다.

// 2-1 Function expression 
// 함수가 선언되기 이전에 호출해도 호출이 가능하다.
const print = function () { // 함수선언과 동시에 print에 할당이된다.
    console.log('print');   // anonymous function 이름이 없는 함수
};
print();
const printAgain = print;
printAgain;
const sumAgain = sum; // 위에서 만든 sum을 변수에 할당하면 또 불러올 수 있다.
console.log(sumAgain(1, 3));



const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo); 
randomQuiz('love you', printYes, printNo);

// 2-3 Arrow function
// always anonymous
//const simplePrint = function () {
//    console.log('simplePrint!');
//};

const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b; // 간결하게 표현이 가능하다.
const simpleMultiply = (a, b) => {
    return a * b;
};
// IIFE: Immediately Invoked Function Expression 즉시 호출되는 함수 표현식
(function hello() {
    console.log('IIFE');
})(); //선언함과 동시에 함수를 바로 호출할 수 있다.  


// Quiz time
// function calculate (command, a, b) 
// 함수를 만들고 입력받은 커멘드의 a와 b의 수식을 만들어보자
// command: (add, substract, divide, multiply, remainder)
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkonwn command');
    }
}
console.log(calculate('add', 2, 3));