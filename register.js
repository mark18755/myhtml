// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsCGP7zcdMmDsw2SGZ6yOt40heUKJ5E4I",
  authDomain: "chami-3b818.firebaseapp.com",
  projectId: "chami-3b818",
  storageBucket: "chami-3b818.firebasestorage.app",
  messagingSenderId: "150144400811",
  appId: "1:150144400811:web:7ac52657a833697004e6ee",
  measurementId: "G-W6JDD2K413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

 //submit
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
   event.preventDefault()

   // inputs
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   createUserWithEmailAndPassword(auth, email, password,)
       .then((userCredential) => {
           const user = userCredential.user;
           alert("Creating Account...")
           window.location.href = "grand.html";
       })
       .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           alert(errorMessage)
       })
});