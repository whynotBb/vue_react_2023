"use strict";

/*

  ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
  template literal 의 용도
  1. 여러줄 문자열 만들 때
  2. 변수 치환
*/

var str1 = '안녕하세요';
var str2 = '반갑습니다.';
var greeting = "".concat(str1, "\n\n").concat(str2);
console.log(greeting);
var greeting2 = str1 + '은' + str2;
console.log(greeting2);
var student = {
  name: 'John kagga',
  city: 'kampala'
};
var message1 = "Hello ".concat(student.name, " from ").concat(student.city);
console.log(message1);