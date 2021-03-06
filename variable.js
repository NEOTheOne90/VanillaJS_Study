//1. use strict
//선언을 하면 strict모드로 자바스크립트 엔진이 빠르게분석, 성능개선가능 상식선에서 코딩가능
// added in ES 5
// use this for Valina Javascript.

'use strict';


/////////////////////////////////////////////////////////////////////////////////////

// 2. Variable 변수에 대해서 배운다 . 변경되어질 수 있는 값

// let (added in ES6) ES6에 추가 되었다. ES 이크마 스크립트 =전세계 통용 문법 
//Block scope 블럭을 이용해서 안에 넣으면 밖에서 불러올 수 없다. 
//global scope을 사용하면 안이든 밖이든 자유롭게 불러올 수 있으나
//글로벌한 변수들은 어플리케이션의 시작부터 끝날때까지 메모리에 탑제된 상태기 떄문에
//class나 함수 if나 for에 필요할때만 사용하는 것이 좋다.    
let globalName = 'global name';
{
    let name = 'byeol'; 
    console.log(name);
    name = 'hello';    
    console.log(name);
    console.log(globalName);
}
console.log(name); //코드안에 내용을 불러올 수 없다. 
console.log(globalName); 

// var에 대해서 알아보자. don't ever use this!
// var hoisting = hoisting '끌어올리다' 어디에 선언했느냐에 상관없이 제일위로 선언을 끌어올린다.
// block scope이 없다. 
{
    age = 4;
    var age;
}
console.log(age);

/////////////////////////////////////////////////////////////////////////////////////

// 3. Constants 상수
// 프로그램이 실행되는 동안(선언과 값설정을 동시에 했다면) 값을 변경할수 없는 것을 말한다.
// 쉽게 말해 다시 재정의가 불가능 한 변환되지 않는 값을 말한다.
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;


///////////////////////////////////////////////////////////////////////////////////

//4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// funtion, first-class function

const count = 17; // integer 정수
const size = 17.1; // decimal number 소수점의 숫자
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


// number - speicla numeric values: infinity, -infinity, NaN
// 계산할때 나누고자하는 값을 정확하게 확인하지 않고 연산을 하면 에러가 발생  
// 현업에서 이런 문제로 에러가 발생
const infinity = 1 / 0; //숫자를 0으로 나누면 무한대의 숫자가 발생
const negativeInfinity = -1 / 0; // 네거티브 
const nAn = 'not a number' / 2; //숫자가 아닌 문자를 나누면 NaN값이 출력
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


//bigInt (fairly new, don't use it  yet) 숫자 마지막에 n을 붙이면 큰 숫자로 확인하는 최신 버젼
const bigInt = 123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;


// string 스트링끼리 +기호로 연결가능
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

 //template literals (string) 변수값을 붙일 수 있다.
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
//이렇게 간편하게 출력가능
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); 

// boolean 참과 거짓
// false: 0, null, undefined, NaN, ''비어있는스트링
// true: any other value
const canRead = true; 
const test = 3 < 1; //false 3이 1보다 작으면 거짓
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 선언은 되었지만 값이 지정되어있지않은상태
let x;  
console.log(`value: ${x}, type; ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자를 만들때 둘은 같지 않다.
const symbol1 = Symbol('id'); 
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

// 스트링이 똑같다면 for을 사용해서 같게 만들어달라고 요청가능
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true 

// 출력시 .description사용하여 스트링으로 변환해서 출력해야함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
//neo는 편경불가 name과 , age는 변경이 가능한 변수이기때문에 변경가능
const neo = {name: 'neo', age: 100};
neo.age = 20; //변경이 가능

///////////////////////////////////////////////////////////////////////////////////

// 5. Dynamic typing: dynamically typed language


let text = 'hello'; //type이 string이됨.
console.log(text.charAt(0)); //첫번째 문자 보여줘

console.log(`value: ${text}, type: ${typeof text}`);

text = 1;  //type이 number가 됨
console.log(`value: ${text}, type: ${typeof text}`);

//string '7'과 number 5를 더해버리면, 자바스크림트 엔진이 5를 string으로 변환해줌
text = '7' + 5; 
console.log(`value: ${text}, type: ${typeof text}`);

//string과 string을 나누면 안에 숫자를 인식하고 number로 변환 나누어줌.
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // 첫번째 문자 보여줘 안보여짐, number로 변경된상태;

// 다이나믹 타이핑때문에 타입스크립트가 나옴.
// TS의 출몰 자바스크립트에 타입이 얹어진 언어이다.
// JS를 충분히 배우고 TS를 배우면됨.