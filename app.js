console.log("시작");

function func1(함수) {
  setTimeout(() => {
    const sum = 10 + 20;
    console.log(sum);
    함수(); // 콜백함수 호출
  }, 1000);
}

function func2() {
  const sum = 20 + 30;
  console.log(sum);
}

func1(func2); // 호출을 뒤로 미루는 것 : 너가 필요할 때 얘 불러

console.log("끝");
