const btn = document.querySelector(".button");
const element = document.querySelector(".element");

btn.addEventListener("click", () => {
  element.classList.toggle("animation");
});