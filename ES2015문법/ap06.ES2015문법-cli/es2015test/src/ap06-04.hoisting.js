/*


  변수의 호이스팅




  함수의 호이스팅

*/

console.log(aaa);
// var aaa;

var aaa = '변수의 호이스팅';
console.log(aaa);

const bbb = '';
console.log(bbb);

var msg = 'global scope';
if (true) {
  var msg = 'block scope';
}
let msg2 = 'global';
if (true) {
  let msg2 = 'block';
}
//함수의 호이스팅
debugger;

console.log(add(1, 2));
const add = (a, b) => {
  return a + b;
};
