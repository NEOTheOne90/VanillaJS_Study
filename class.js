'use strict';

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