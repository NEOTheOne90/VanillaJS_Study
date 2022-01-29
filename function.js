// Function 기능

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters 매개변수
// premitive parameters: passed by value 기본매개변수: 값으로전달
// object parameters: passed by reference 객체매개변수: 참조로전달
function changeName(obj) {
    obj.name = 'coder';
}
const neo = { name: 'neo' };
changeName(neo);
console.log(neo);

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

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('forest', 'mountain', 'neo');