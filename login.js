// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
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

// Get the form and button elements
const submitButton = document.getElementById('submit');
const form = document.querySelector('form');

form.addEventListener("submit", function (event) {
 event.preventDefault();

 // Get the input values
 const email = document.getElementById('username').value;
 const password = document.getElementById('password').value;

 // Log in with Firebase
 signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
         // Successful login
         const user = userCredential.user;
         alert("Login successful!");
         window.location.href = "grand.html";  // Redirect to another page after successful login
     })
     .catch((error) => {
         // Handle error
         const errorMessage = error.message;
         alert("Error: " + errorMessage);
     });
});