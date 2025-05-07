// 메서드 오버라이딩
class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  move(lostWeight) {
    if (this.weight > lostWeight) this.weight -= lostWeight;
    console.log(
      `${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`
    );
  }
}

class Tiger extends Animal {
  attack(target) {
    console.log(`${this.name}(은)는 ${target}을 공격합니다.`);
  }
  // Animal의 move 메소드의 오버라이딩딩
  move(target) {
    // super.을 통해 부모 클래스에 메서드를 참조한다.
    super.move(0.1);
    this.attack(target);
  }
}
let tiger = new Tiger("백두산 호랭이", 90);
tiger.move("슬픈 눈망울의 사슴");
