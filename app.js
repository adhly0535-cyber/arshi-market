function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log("تم تسجيل الدخول بنجاح");

      // بيانات المستخدم
      const user = result.user;

      // حفظ بيانات المستخدم (نستخدمها لاحقًا)
      localStorage.setItem("user", JSON.stringify({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }));

      // الانتقال لاختيار الدولة
      window.location.href = "country.html";
    })
    .catch((error) => {
      console.error(error);
      alert("حدث خطأ في تسجيل الدخول");
    });
}
