"use strict";

/*


  변수의 호이스팅




  함수의 호이스팅

*/

console.log(aaa);
// var aaa;

var aaa = '변수의 호이스팅';
console.log(aaa);
var bbb = '';
console.log(bbb);
var msg = 'global scope';
if (true) {
  var msg = 'block scope';
}
var msg2 = 'global';
if (true) {
  var _msg = 'block';
}
//함수의 호이스팅
debugger;
console.log(add(1, 2));
var add = function add(a, b) {
  return a + b;
};