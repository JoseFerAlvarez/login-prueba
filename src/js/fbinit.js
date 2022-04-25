import { initializeApp } from "firebase/app";

// Inicializa la api de firebase
export function initFirebase() {
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
  initializeApp(firebaseConfig);
}
