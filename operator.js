// 1. String concatenation 문자열의 연결
console.log('my' + 'car'); 
console.log('1' + 2); //문자열에 숫자를 더하면 숫자가 =>문자열로 변환됨.
console.log(`string literals:  1 + 2 = ${1 + 2}`); //백틱기호로 변수값을 계산해 스트링에 포함해서 출력됨

console.log(`string literals:  

''''' '속에 내용'
1 + 2 = ${1 + 2}`); //중간에 다른 내용이 들어가도 출력이됨

console.log("ellie\'s \n \tbook");
// 중간에 특수문자 표시를 하고싶으면 앞에 \(백슬러시) 붙여줌.
// 줄바꿈을 원하면 \n , 탭키처럼 띄우고 싶으면 \t를 사용한다.
// 다양한 특수문자열이 있음.

///////////////////////////////////////////////////////////////////////////////////////////////


// 2. Numeric operators 숫자연산자

console.log(1 + 1); // add 더하기
console.log(1 - 1); // Subtract 빼기
console.log(1 / 1); // divide 나누기
console.log(1 * 1); // multiply 곱하기
console.log(5 % 2); // remainder 나머지
console.log(2 ** 3); // exponentiation 거듭제곱 2의3승


///////////////////////////////////////////////////////////////////////////////////////////////


//3. Increment and decrement operators 증가 , 감소연산자

let counter = 2; 
const preIncrement = ++counter;  //변수앞에 ++붙이면
// counter = counter + 1;  카운터에 1을 더해서 다시 앞쪽 카운터에 숫자를 할당한다음
// preIncrement = counter; 숫자 3을 preIncrement변수에 할당 = 3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; //변수뒤쪽에 ++을붙이면
// postIncrement = counter; 변수의 값을 먼저 증가시켜 할당함.
// counter = counter + 1;   3을 할당한다음 counter값을 1증가 = 4
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); 

// 마이너스도 똑같다. 
const preDecrement = --counter;   // 3
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;  // 2
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); 

///////////////////////////////////////////////////////////////////////////////////////////////

// 4. Assignment operators 할당연산자
let x = 3;
let y = 6;
x += y;  // x = x + y; 반복되는 x를 생략한 수식을 많이 사용하게된다.
x -= y;
x *= y;
x /= y;
console.log();

///////////////////////////////////////////////////////////////////////////////////////////////

// 5. Comparison operators 비교연산자
console.log(10 < 6);  // less than 작음
console.log(10 <= 6); // less than or equal 작거나 같음
console.log(10 > 6);  // greater than  큼
console.log(10 >= 6); // greater than or equal 크거나 같음

///////////////////////////////////////////////////////////////////////////////////////////////

// 6. Logical operators: || (or), && (and), ! (not) 세가지 논리연산자
const value1 = false;
const value2 = 4 < 2;

//(6-1) || (or) => or 연산자는 첫번째 true값을 찾으면 멈춘다. 
// finds the first truthy value(첫번째 true값을 찾는다.)
// 아래 세가지중 하나라도 true이면 true로 계산되는 연산자이다.
console.log(`or: ${value1 || value2 || check()}`);  
//효율적인 코드작성을 위해 심플한 value를 앞에서 계산하고 마지막에 함수로 호출하는 아이를 배치

// value1 = false
// value2 = 4보다 2가 작나 ? false
// check라는 함수는 시간을 끌다가 결국 true로 리턴함
// 결론 true로 출력이 되버림.
function check() {
   for (let i = 0; i < 10; i++) {
       //westing time
       console.log('😱');
   }
   return true;
}

// (6-2) && (and) 
// finds the first falsy value (첫번째 false값을 찾는다.)
console.log(`and: ${value1 && value2 && check()}`);
// and 연산자는 간편하게 null체크할때도 많이 사용된다.
// nullableobject && nullableobject.something
// if (nullableobject != null) {
//    nullableobject.something;
// }

// (6-3) ! (not)
// 값을 반대로 바꾸어준다. 
// value1 값이 false 이지만 true로 바꿔서 출력이됨.
console.log(!value1);