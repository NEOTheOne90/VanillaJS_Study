'use strict';

console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

const neo1 = { name: 'neo' };
const neo2 = { name: 'neo' };

const neo3 = neo1;  // neo1이 가지고있는 reference velue를 neo3에게 할당했기때문에 같아짐
console.log(neo1 == neo2); //각각 다른 레퍼런스  ----- false
console.log(neo1 === neo2);// 레퍼런스 값이 다르다. --- false
console.log(neo1 === neo3); // reference velue값 할당  --- true