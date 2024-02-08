let numberBox = document.querySelector("#numberBox");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const reset = document.querySelector("#reset");

let number = 0;
numberBox.value = number;

plus.addEventListener("click", function () {
  number = numberBox.value;
  number++;
  numberBox.value = number;
});

minus.addEventListener("click", () => {
  number = numberBox.value;
  number--;
  numberBox.value = number;
});

reset.addEventListener("click", () => {
  number = 0;
  numberBox.value = number;
});
