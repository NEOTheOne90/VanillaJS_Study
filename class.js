'use strict';

const neo3 = neo1;  // neo1이 가지고있는 reference velue를 neo3에게 할당했기때문에 같아짐
console.log(neo1 == neo2); //각각 다른 레퍼런스  ----- false
console.log(neo1 === neo2);// 레퍼런스 값이 다르다. --- false
console.log(neo1 === neo3); // reference velue값 할당  --- true

console.log("ellie\'s \n \tbook");
// 중간에 특수문자 표시를 하고싶으면 앞에 \(백슬러시) 붙여줌.
// 줄바꿈을 원하면 \n , 탭키처럼 띄우고 싶으면 \t를 사용한다.
// 다양한 특수문자열이 있음.