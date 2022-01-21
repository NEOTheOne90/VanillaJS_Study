//1. use strict
//선언을 하면 strict모드로 자바스크립트 엔진이 빠르게분석, 성능개선가능 상식선에서 코딩가능
// added in ES 5
// use this for Valina Javascript.

'use strict';


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

// 3. Constants
// 프로그램이 실행되는 동안(선언과 값설정을 동시에 했다면) 값을 변경할수 없는 것을 말한다.
// 쉽게 말해 다시 재정의가 불가능 한 변환되지 않는 값을 말한다.
