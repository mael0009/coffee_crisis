const css = document.querySelector("#Lightmode");
console.log(css.href);

const btn3 = document.querySelector("#switchBtn3");
btn3.addEventListener("click", changeMode3);
const switchtext3 = document.querySelector("#switchtext3");

function changeMode3() {
  if (css.href.includes("css/custom_dark.css")) {
    css.href = "css/custom.css";
    switchtext3.textContent = "Dark Mode";
  } else {
    css.href = "css/custom_dark.css";
    switchtext3.textContent = "Light Mode";
  }
}