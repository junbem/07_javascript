// 객체 구조 분해 할당
const pants = {
  productName: "배기팬츠",
  color: "검정색",
  price: 30000,
};

console.log(pants);

const { productName, price, color } = pants; 
console.log(productName);
console.log(price);
console.log(color);
// 각 변수의 서술 순서는 무관
// 프로퍼티 키값과 다른 변수명을 설정할 수 있다.
const { productName: pn, price: pr, color: co } = pants;
console.log(pn, pr, co);
