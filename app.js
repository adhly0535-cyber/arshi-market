import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD3hAvhSDs-1X7ORCORODT31_s_pJAz8",
  authDomain: "arshi-market.firebaseapp.com",
  projectId: "arshi-market",
  storageBucket: "arshi-market.appspot.com",
  messagingSenderId: "930764899868",
  appId: "1:930764899868:web:06795817be840a8a01d9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      alert("تم تسجيل الدخول بنجاح: " + result.user.displayName);
    })
    .catch((error) => {
      alert("خطأ: " + error.message);
    });
});
