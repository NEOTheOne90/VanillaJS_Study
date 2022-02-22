'use strict';


console.log("ellie\'s \n \tbook");
// 중간에 특수문자 표시를 하고싶으면 앞에 \(백슬러시) 붙여줌.
// 줄바꿈을 원하면 \n , 탭키처럼 띄우고 싶으면 \t를 사용한다.
// 다양한 특수문자열이 있음.

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

// Q2. iterate from 0 to 10 and print numbers nutil reching 8 (use break)
// 0부터 10까지 루프 8을 만나면 스톱
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}