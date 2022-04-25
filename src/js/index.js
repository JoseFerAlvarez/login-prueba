import { signInFirebase, logInFirebase, logInGoogle, logInFacebook, logOut, userLogued } from "./fbauth.js";
import { readAnimals, addAnimals } from "./fbfirestore.js";

// Configuracion de la api de firebase

const signInButton = document.querySelector(".signin");

// Evento on click que coge el nombre de usuario y contraseña y lo registra en la base de datos de firebase
signInButton.addEventListener("click", () => {
  console.log("sign up en proceso");

  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;

  signInFirebase(email, password);
});

// Loguea a un usuario existente
const logInButton = document.querySelector(".login");

logInButton.addEventListener("click", () => {
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;

  logInFirebase(email, password);
});
// ___________________________________

// Login con google
const logGoogle = document.querySelector(".logGoogle");

logGoogle.addEventListener("click", () => {
  logInGoogle();
});
// _____________________________________________

// Login con facebook
const logFacebook = document.querySelector(".logFacebook");

logFacebook.addEventListener("click", () => {
  logInFacebook();
});

// Desloguea al usuario actual
const logOutButton = document.querySelector(".logout");

logOutButton.addEventListener("click", () => {
  logOut();
});
// ----------------------------

// Comprueba que un usuario este autenticado
userLogued();
// ____________________________________________

// Lee los animales de la database de firebase
const showAnimals = document.querySelector(".muestraanimales");
const animalContainer = document.querySelector(".animales");

showAnimals.addEventListener("click", async() => {
  const html = await readAnimals();

  animalContainer.innerHTML = html;
});
// ______________________________________________

const btnAddAnimal = document.querySelector(".addAnimal");

btnAddAnimal.addEventListener("click", () => {
  const nameAnimal = document.querySelector(".nameAnimal").value;
  const ageAnimal = document.querySelector(".ageAnimal").value;
  const raceAnimal = document.querySelector(".raceAnimal").value;
  const sexAnimal = document.querySelector(".sexAnimal").value;

  addAnimals(ageAnimal, nameAnimal, raceAnimal, sexAnimal);
});
