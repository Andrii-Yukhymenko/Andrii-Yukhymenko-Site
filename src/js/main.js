const consoleFormInput = document.querySelector(".console-bar-form__input");
const consoleForm = document.querySelector(".console-bar-form");
const fakeCaret = document.querySelector(".console-bar-form__fake-caret");
const avatar = document.querySelector(".avatar");

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
      avatar.innerText =
        "            __\n" +
        "(\\,--------'()'--o\n" +
        ' (_    ___    /~"\n' +
        "  (_)_)  (_)_)";
    },
  },
  {
    command: "dogs",
    callback: () => {
      avatar.innerText =
        "        __\n" +
        "     __/o \\_\n" +
        "     \\____  \\\n" +
        "         /   \\\n" +
        "   __   //\\   \\\n" +
        "__/o \\-//--\\   \\_/\n" +
        "\\____  ___  \\  |\n" +
        "     ||   \\ |\\ |\n" +
        "    _||   _||_||";
    },
  },
  {
    command: "me",
    callback: () => {
      avatar.innerText =
        " _________         .    .\n" +
        "(..       \\_    ,  |\\  /|\n" +
        " \\       O  \\  /|  \\ \\/ /\n" +
        "  \\______    \\/ |   \\  /\n" +
        "     vvvv\\    \\ |   /  |\n" +
        "     \\^^^^  ==   \\_/   |\n" +
        "      `\\_   ===    \\.  |\n" +
        "      / /\\_   \\ /      |\n" +
        "      |/   \\_  \\|      /\n" +
        "            \\_________/\n" +
        "              ";
    },
  },
];

const cleanConsoleInput = () => {
  consoleFormInput.value = "";
  // consoleFormInput.classList.contains("console-bar-form__error")
  //   ? (fakeCaret.style.display = "block")
  //   : "";
  consoleFormInput.classList.remove("console-bar-form__error");
  // e.target.value.length === 0 ? (fakeCaret.style.display = "block") : "";
  // ! При удачном выполнении команды добавлять специальный класс
};

consoleFormInput.addEventListener(
  "focus",
  () => (fakeCaret.style.display = "none")
);
consoleFormInput.addEventListener("focusout", (e) => {
  cleanConsoleInput();
});

consoleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  consoleCommands.forEach((i) => {
    if (consoleFormInput.value === i.command) {
      consoleFormInput.value = "";
      i.callback();
    } else {
      consoleFormInput.classList.add("console-bar-form__error");
      consoleFormInput.value = `The term is not recognized.`;
      setTimeout(() => cleanConsoleInput(), 1500);
    }
  });
});
