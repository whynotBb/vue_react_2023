/*

  ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
  template literal 의 용도
  1. 여러줄 문자열 만들 때
  2. 변수 치환
*/

const str1 = '안녕하세요';
const str2 = '반갑습니다.';
const greeting = `${str1}

${str2}`;
console.log(greeting);
const greeting2 = str1 + '은' + str2;

console.log(greeting2);

const student = {
  name: 'John kagga',
  city: 'kampala',
};
const message1 = `Hello ${student.name} from ${student.city}`;
console.log(message1);
