import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged
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

// عند الضغط → تحويل إلى Google
loginBtn.addEventListener("click", () => {
  signInWithRedirect(auth, provider);
});

// مراقبة حالة تسجيل الدخول (الأهم)
onAuthStateChanged(auth, (user) => {
  if (user) {
    msg.innerText = "✅ تم تسجيل الدخول بنجاح، جاري تحويلك...";

    setTimeout(() => {
      window.location.href = "home.html";
    }, 200);
  }
});
