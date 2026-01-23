import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("msg");

// عند الضغط على الزر → تحويل مباشر لغوغل
loginBtn.addEventListener("click", () => {
  signInWithRedirect(auth, provider);
});

// بعد الرجوع من Google
getRedirectResult(auth)
  .then((result) => {
    if (result && result.user) {
      msg.innerText = "✅ تم تسجيل الدخول بنجاح، جاري تحويلك...";

      setTimeout(() => {
        window.location.href = "home.html";
      }, 1500);
    }
  })
  .catch((error) => {
    console.error(error);
    alert("❌ فشل تسجيل الدخول");
  });
