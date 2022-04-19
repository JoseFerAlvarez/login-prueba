const signInButton = document.querySelector(".signin");
const logInButton = document.querySelector(".login");
const logOutButton = document.querySelector(".logout");

signInButton.addEventListener("click", () => {
  console.log("sign up en proceso");

  const email = document.querySelector(".email").value;
  const pass = document.querySelector(".password").value;

  console.log(email + " " + pass);
});

logInButton.addEventListener("click", () => {
  console.log("log in en proceso");
});

logOutButton.addEventListener("click", () => {
  console.log("log out en proceso");
});
