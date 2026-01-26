// Firebase config (نفسه الموجود عندك في باقي الصفحات)
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// عناصر الصفحة
const chatBox = document.getElementById("chatBox");
const msgInput = document.getElementById("msgInput");

// معرف الشات (بين شخصين)
const chatId = new URLSearchParams(window.location.search).get("chatId");

// إرسال رسالة
function sendMsg() {
  const text = msgInput.value.trim();
  if (!text) return;

  const user = auth.currentUser;
  if (!user) {
    alert("يجب تسجيل الدخول");
    return;
  }

  db.collection("chats")
    .doc(chatId)
    .collection("messages")
    .add({
      text: text,
      sender: user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

  msgInput.value = "";
}

// استقبال الرسائل (تلقائي – شات حقيقي)
db.collection("chats")
  .doc(chatId)
  .collection("messages")
  .orderBy("createdAt")
  .onSnapshot((snapshot) => {
    chatBox.innerHTML = "";
    snapshot.forEach((doc) => {
      const msg = doc.data();
      const div = document.createElement("div");

      div.className =
        msg.sender === auth.currentUser.uid
          ? "message me"
          : "message other";

      div.textContent = msg.text;
      chatBox.appendChild(div);
    });

    chatBox.scrollTop = chatBox.scrollHeight;
  });
