function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log("تم تسجيل الدخول بنجاح");

      // 🔹 الإضافة الجديدة فقط
      window.location.href = "country.html";
    })
    .catch((error) => {
      console.error(error);
      alert("حدث خطأ في تسجيل الدخول");
    });
}
