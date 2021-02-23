const form = document.querySelector("js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");
const USER_LS = "correntUser",
  SHOWING_CN = "showing";
function askForName() {
  form.classList.add(SHOWING_CN);
}
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN),
    greetings.classList.add(SHOWING_CN),
    (greetings.innerText = `Hello ${text}`);
}
function loadName() {
  const currentUser = localStorage.getItem(User_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();
