// 1. String concatenation
console.log('my' + 'car'); //문자와 문자를
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