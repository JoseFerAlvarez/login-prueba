import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs } from "firebase/firestore";

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
const fs = getFirestore();

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

// ________________________________________

// Loguea a un usuario existente
const logInButton = document.querySelector(".login");

logInButton.addEventListener("click", () => {
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      console.log("El usuario existe");
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
});
// ___________________________________

// Desloguea al usuario actual
const logOutButton = document.querySelector(".logout");

logOutButton.addEventListener("click", () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log("Usuario deslogueado");
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
});
// ----------------------------

// Comprueba que un usuario este autenticado
getAuth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("Usuario logueado.");
  } else {
    console.log("No hay usuario logueado");
  }
});
// ____________________________________________

// Lee los animales de la database de firebase
const showAnimals = document.querySelector(".muestraanimales");
const animalContainer = document.querySelector(".animales");

showAnimals.addEventListener("click", async() => {
  const animals = () => getDocs(collection(fs, "animals"));

  const animales = animals();
  let html = "";

  (await animales).forEach(doc => {
    html += `<div>
              <h3>${doc.data().name}</h3>
              <p>${doc.data().race}</p>
            </div>`;
  });

  animalContainer.innerHTML = html;

  console.log(typeof (animales));
});
// ______________________________________________
