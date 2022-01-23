
// 7. equality 동등성
const stringFive = '5';
const numberFive = 5;

// == loose equality 
// with conversion    타입없이 안에 숫자 5가 있으니 true
console.log(stringFive == numberFive); // true 
console.log(stringFive != numberFive); // false

// === strict equality  
// no type conversion  타입을 신경써서 타입이 다르니까 false
// 코딩할때 웬만하면 ===으로 검사하는게 좋다. 
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
// 오브젝트는 저장될때 레퍼런스 형태로 저장된다. 
// 실제로 메모리에는 neo1과 neo2가 각각 다른 레퍼런스가 들어있고 
// 이 레퍼런스들은 서로 다른 오브젝트를 가르키고 있다.
const neo1 = { name: 'neo' };
const neo2 = { name: 'neo' };
const neo3 = neo1;  // neo1이 가지고있는 reference velue를 neo3에게 할당했기때문에 같아짐
console.log(neo1 == neo2); //각각 다른 레퍼런스  ----- false
console.log(neo1 === neo2);// 레퍼런스 값이 다르다. --- false
console.log(neo1 === neo3); // reference velue값 할당  --- true

// equality - puzzler 예제
// 0, null, empty string >> false로 간주됨.
console.log(0 == false);  // true
console.log(0 === false); // false 0은 boolean타입이 아니다
console.log('' == false); // true
console.log('' === false); // false ''는 boolean타입이 아니다.
console.log(null == undefined); // true
console.log(null === undefined); // false 같은 문자열이 아님

////////////////////////////////////////////////////////////////////////////////////////////


// 8. Conditional operators: if  조건연산자 , 만약 ~
// if, else if, else 
const name = 'neo'
if (name === 'neo') {
console.log('Welcome, NEO!');
} else if (name === 'coder') {
console.log('you are amazing coder');
} else {
console.log('unkwnon');
}

////////////////////////////////////////////////////////////////////////////////////////////

// 9. Ternary operator : ?  삼항연산자 (if를 간단하게 쓸수있다.)
// 이 코드는 연결해서 계속 사용하지말고 간단할때만 한번씩 써주는 것이 좋다. 가독성이 떨어짐.
// condition ? value1 : value2;
// 참이니 ? 참이면 yes를 실행하고 거짓이면 no를 실행해 
console.log(name === 'neo' ? 'yes' : 'no'); 

////////////////////////////////////////////////////////////////////////////////////////////

// 10. Switch statment 스위치 문
// use for multiple if checks 
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'Firefox'; // <= 뭐가 들어있는지 확인후에 출력
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Google':  // 함께 써도 됨
        console.log('love you');
        break;
    case 'Firefox':
        console.log('like you');
        break;
    default:
        console.log('same all!');
        break;
}

////////////////////////////////////////////////////////////////////////////////////////////

// 11. Loops 반복문
// While loop, while the ondition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {  
    console.log(`while: ${i}`);
    i--; // i가 0보다 크면 감소시켜서 출력
}

// do while loop, body code is executed first, 
// then check the condition. 
do {
    console.log(`do while: ${i}`);
    i--;           // 위에서 값이 0이지만 블럭 안에 내용을 실행시켜버림.
} while (i > 0);   // 블럭을 먼저 실행하고 싶다면 do while을 사용한다.
