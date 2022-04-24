import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";

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

// Login con google
const logGoogle = document.querySelector(".logGoogle");

logGoogle.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  auth.languageCode = "es";

  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;

      console.log("Autenticado con google");
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
    // ...
    });
});
// _____________________________________________

// Login con facebook
const logFacebook = document.querySelector(".logFacebook");

logFacebook.addEventListener("click", () => {
  const provider = new FacebookAuthProvider();
  auth.languageCode = "es";

  signInWithPopup(auth, provider)
    .then((result) => {
    // The signed-in user info.
    // const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const credential = FacebookAuthProvider.credentialFromResult(result);
      // const accessToken = credential.accessToken;

      console.log("Autenticado con Facebook");
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
    });
});

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

const btnAddAnimal = document.querySelector(".addAnimal");

btnAddAnimal.addEventListener("click", () => {
  const nameAnimal = document.querySelector(".nameAnimal").value;
  const ageAnimal = document.querySelector(".ageAnimal").value;
  const raceAnimal = document.querySelector(".raceAnimal").value;
  const sexAnimal = document.querySelector(".sexAnimal").value;

  addDoc(collection(fs, "animals"), { age: ageAnimal, name: nameAnimal, race: raceAnimal, sex: sexAnimal });
});
