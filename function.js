// Function

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
const ellie = { name: 'neo' };
changeName(neo);
console.log(neo);