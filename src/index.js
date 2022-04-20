import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const signInButton = document.querySelector(".signin");

signInButton.addEventListener("click", () => {
  console.log("sign up en proceso");

  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      console.log("usuario registrado");
    // ...
    });
});
