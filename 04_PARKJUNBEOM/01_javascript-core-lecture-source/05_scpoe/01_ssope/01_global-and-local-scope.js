// 전역과 지역 스코프
// 전역 : 코드의 가장 바깥 영역, 전역에 변수를 선언하면 전역 변수가 되어 어디서드 참조가능
// 지역 : 함수 내부에 몸체, 지역에 변수를 선언하면 지역변수가 되어 자신의 지역 스코프와 하위 지역 스코드에서 참조 가능

var x = "global x";
var y = "global y";

function outer() {
  var z = "outer's local z"; // 지역/ inner 한정 전역역
  console.log(x);
  console.log(y);
  console.log(z);

  function inner() {
    var x = "inner's local z";
    console.log(x);
    console.log(y);
    console.log(z);
  }
  inner();
}

outer();
