// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔴 عدّل هذه القيم فقط من Firebase Console
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// زر تسجيل الدخول
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log("تم تسجيل الدخول:", user);
    alert("تم تسجيل الدخول بنجاح ✅");

    // تحويل لصفحة ثانية (اختياري)
    // window.location.href = "home.html";

  } catch (error) {
    console.error(error);
    alert("خطأ في تسجيل الدخول ❌\n" + error.message);
  }
});
