import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Configuracion de la api de firebase
const firebaseConfig = {
  apiKey: "AIzaSyArNEH1mv7P9TMzqTtaGrmYi6dOQkizBU0",
  authDomain: "prueba-login-fe698.firebaseapp.com",
  projectId: "prueba-login-fe698",
  storageBucket: "prueba-login-fe698.appspot.com",
  messagingSenderId: "947632118066",
  appId: "1:947632118066:web:05783c09d6367e7ffd1f2b",
  measurementId: "G-E42PC6YD5K"
};

// Inicializa firebase
const app = initializeApp(firebaseConfig);

// Coge el metodo de autenticacion
const auth = getAuth();

const signInButton = document.querySelector(".signin");

// Evento on click que coge el nombre de usuario y contraseña y lo registra en la base de datos de firebase
signInButton.addEventListener("click", () => {
  console.log("sign up en proceso");

  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      console.log("usuario registrado");
    // ...
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
});
