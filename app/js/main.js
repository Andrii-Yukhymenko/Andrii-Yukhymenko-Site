/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
var input = document.querySelector(".console-bar-form__input");
var fakeCaret = document.querySelector(".console-bar-form__fake-caret");
input.addEventListener("focus", function () {
  return fakeCaret.style.display = "none";
});
input.addEventListener("focusout", function (e) {
  e.target.value.length === 0 ? fakeCaret.style.display = "block" : "";
});
/******/ })()
;
//# sourceMappingURL=main.js.map