// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔴 ضع بيانات Firebase الحقيقية
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// تشغيل Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// عناصر الصفحة
const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("msg");

// عند الضغط على الزر
loginBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);

    msg.innerText = "✅ تم تسجيل الدخول بنجاح، جاري تحويلك...";

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);

  } catch (error) {
    alert("❌ فشل تسجيل الدخول");
    console.error(error);
  }
});
