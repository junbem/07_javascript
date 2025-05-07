// 콜백 함수(중요!!!)

// 값을 증가시킨다(+1)
function increase(value) {
  return value + 1;
}
// 값을 감소시킨다(-1)
function decrease(value) {
  return value - 1;
}
// 전달받은 함수에 전달받은 값을 적용시켜주는 고차함수
function apply(func, value) {
  // 고차함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다.
  return func(value);
}

console.log(apply(increase, 5));
console.log(apply(decrease, 5));

// 콜백함수가 고차함수 내부에서만 호출된다면 익명 함수 리터럴로 정의하면서 전달하는 것이 일반적이다.
console.log(
  apply(function (value) {
    return value + 1;
  }, 10)
);

console.log(apply(value => value - 1, 10));
// 함수의 변하지 안흔ㄴ 공통 조기을 미 졍의해두고 경우 따라 변경되는 로직은 추상화해서 함수의 외부에서 내부로 전달하는 방식아다.
// 비동기 처리(이벤트, 타이머 등) 에서 활용되는 중요한 패턴이며, 배열 고고차함수에서도 활용된다.
console.log([3, 1, 4, 2, 5].sort((a, b) => b - a)); // 배열의 고차함수수