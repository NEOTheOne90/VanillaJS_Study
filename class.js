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