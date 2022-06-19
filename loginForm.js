const loginForm = document.querySelector("#login_form");
const questionMent = document.querySelector("#login_form h1");
const loginInput = document.querySelector("#login_name");
const mainContent = document.querySelector("#main_content");

function userLogin(e) {
  e.preventDefault();
  const userName = loginInput.value;
  loginInput.value = "";
  localStorage.setItem("userName", userName);
  toggleHidden();
}

function toggleHidden() {
  loginForm.classList.add("hidden");
  mainContent.classList.remove("hidden");
}
window.addEventListener("load", () => {
  if (localStorage.getItem("userName")) {
    toggleHidden();
  }
});
loginForm.addEventListener("submit", userLogin);
