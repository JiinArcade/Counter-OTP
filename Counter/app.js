let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function () {
    if (button.classList.contains("decrease")) {
      count--;
    } else if (button.classList.contains("increase")) {
      count++;
    } else if (button.classList.contains("reset")) {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "#333333";
    }
    value.innerHTML = count;
    console.log(count);
  });
});

// 우리 오리 꺼
// let count = 0;
// const value = document.querySelector("#value");
// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");
// const increase = document.querySelector(".increase");

// // parseInt : 문자열을 숫자로 변화해주는 함수
// // 10을 넣어준것은, 10진수로 받아오겠다는 의미
// increase.onclick = () => {
//   const current = parseInt(value.innerText, 10);
//   value.innerText = current + 1;
//   // value.style.color = 'green'
//   colorChange();
// };

// decrease.onclick = () => {
//   const current = parseInt(value.innerText, 10);
//   value.innerText = current - 1;
//   // value.style.color = 'red'
//   colorChange();
// };

// reset.onclick = () => {
//   value.textContent = 0;
//   colorChange();
// };

// function colorChange() {
//   if (Number(value.textContent > 0)) {
//     value.style.color = "green";
//   } else if (Number(value.textContent < 0)) {
//     value.style.color = "red";
//   } else {
//     value.style.color = "black";
//   }
// }

// 나 이쁘냐? 꺼
// let count = 0;
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");
// btns.forEach((btn, index) => {
//   btn.addEventListener("click", function () {
//버튼 인덱스에 따른 카운트 value 변화
// if (index == 0) {
//   count--;
// }
// if (index == 1) {
//   count = 0;
// }
// if (index == 2) {
//   count++;
// }

// index == 0 ? count-- : index == 1 ? (count = 0) : count++;

//count가 0보다 작을때, 같을때 , 클때 색상변화
// if (count > 0) {
//   value.style.color = "green";
// }
// if (count == 0) {
//   value.style.color = "";
// }
// if (count < 0) {
//   value.style.color = "red";
// }

// value.style.color = count > 0 ? "green" : count == 0 ? "" : "red";
// count > 0
//   ? (value.style.color = "green")
//   : count == 0
//   ? (value.style.color = "")
//   : (value.style.color = "red");

//     value.innerHTML = count;
//   });
// });
