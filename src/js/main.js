const input = document.querySelector(".console-bar-form__input");
const fakeCaret = document.querySelector(".console-bar-form__fake-caret");

input.addEventListener("focus", () => (fakeCaret.style.display = "none"));
input.addEventListener("focusout", (e) => {
  e.target.value.length === 0 ? (fakeCaret.style.display = "block") : "";
});
