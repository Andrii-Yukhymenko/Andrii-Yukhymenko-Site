const input = document.querySelector(".console-bar-form__input");
const fakeCaret = document.querySelector(".console-bar-form__fake-caret");
const consoleForm = document.querySelector(".console-bar-form");

const consoleCommands = [
  {
    command: "instagram",
    callback: () => {
      window.open("https://instagram.com");
    },
  },
  {
    command: "telegram",
    callback: () => {
      window.open("https://telegram.com");
    },
  },
  {
    command: "github",
    callback: () => {
      window.open("https://github.com");
    },
  },
  {
    command: "dog",
    callback: () => {
      document.querySelector(".avatar").innerText =
        "            __\n" +
        "(\\,--------'()'--o\n" +
        ' (_    ___    /~"\n' +
        "  (_)_)  (_)_)";
    },
  },
  {
    command: "dogs",
    callback: () => {
      document.querySelector(".avatar").innerText =
        '        __\n' +
        '     __/o \\_\n' +
        '     \\____  \\\n' +
        '         /   \\\n' +
        '   __   //\\   \\\n' +
        '__/o \\-//--\\   \\_/\n' +
        '\\____  ___  \\  |\n' +
        '     ||   \\ |\\ |\n' +
        '    _||   _||_||'
    },
  },
];

input.addEventListener("focus", () => (fakeCaret.style.display = "none"));
input.addEventListener("focusout", (e) => {
  e.target.value.length === 0 ? (fakeCaret.style.display = "block") : "";
});

consoleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  consoleCommands.forEach((i) => {
    if (e.target[0].value === i.command) {
      e.target[0].value = "";
      i.callback();
    }
  });
});
