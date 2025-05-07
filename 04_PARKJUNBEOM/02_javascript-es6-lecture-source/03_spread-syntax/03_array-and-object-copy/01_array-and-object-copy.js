// 스프레드 문법의 활용 -> 배열 또는 객체를 복사할 때 주로 사용한다.
// 홈태그를 수동으로 보낼 때 많이 이용

const arr = [10, 20, 30];
const arrCopy = [...arr];
console.log(arr);
console.log(arrCopy);
console.log(arr === arrCopy);

const obj = { name: "홍길동", age: 19 };
const objCopy = { ...obj, name: "유관순" }; // 기존 obj를 들고와서 뒤에 내용으로 수정정
console.log(obj);
console.log(objCopy);
console.log(obj === objCopy);
