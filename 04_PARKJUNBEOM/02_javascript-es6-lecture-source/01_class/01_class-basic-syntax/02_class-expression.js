// 클래스 표현식

// 1. 익명 클래스 표현식
let Tutor = class {
  teach() {
    console.log("이해하셨나요~?");
  }
};
new Tutor().teach();

// 2. 기명 클래스 표현식
let Tutee = class MyTutee {
  learn() {
    console.log("우와~ 이해했어요!");
    console.log(MyTutee); // MyTutee라는 이름은 오직 클래스 안에서만 사용할 수 있다.
  }
};
new Tutee().learn();

// 3. 클래스 동적 생성
function makeTutee(message) {
  // 클래스를 선언하고 이를 반환한다.
  return class {
    feedback() {
      console.log(message);
    }
  };
}
let SecondTutee = makeTutee("10점 만점에 10점~!");
new SecondTutee().feedback();
