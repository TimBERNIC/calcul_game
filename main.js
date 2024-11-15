const number1 = Math.ceil(Math.random() * 100);
const number2 = Math.ceil(Math.random() * 100);
const total = number1 + number2;
document.getElementById("question").innerHTML = number1 + " + " + number2;

const submission = () => {
  let input = document.getElementById("input").value;
  const additionResult = number1 + number2;

  if (input == additionResult) {
    window.location.href = "./win.html";
  } else {
    localStorage.setItem("total", total);
    window.location.href = "./loose.html";
  }
};
function back() {
  window.location.href = "./index.html";
}
