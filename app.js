function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log("تم تسجيل الدخول بنجاح");

      // بيانات المستخدم
      const user = result.user;

      // حفظ بيانات المستخدم
      localStorage.setItem("user", JSON.stringify({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }));

      // 🔹 التأكد من وجود دولة
      const savedCountry = localStorage.getItem("country");

      // لو ما اختار دولة قبل → نوديه صفحة اختيار الدولة
      if (!savedCountry) {
        window.location.href = "country.html";
      } 
      // لو الدولة موجودة → مباشرة المنتجات
      else {
        window.location.href = "products.html";
      }
    })
    .catch((error) => {
      console.error(error);
      alert("حدث خطأ في تسجيل الدخول");
    });
}

/* 🔹 مهم جدًا: عند إعادة فتح الموقع */
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const savedCountry = localStorage.getItem("country");

    if (!savedCountry) {
      window.location.href = "country.html";
    }
  }
});
