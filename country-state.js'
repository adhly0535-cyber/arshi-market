const countrySelect = document.getElementById("countrySelect");
const stateSelect = document.getElementById("stateSelect");

/* ===== 1️⃣ جلب كل دول العالم ===== */
fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data => {
  countrySelect.innerHTML = '<option value="">اختر الدولة</option>';

  data
    .sort((a,b)=>a.name.common.localeCompare(b.name.common))
    .forEach(country => {
      const option = document.createElement("option");
      option.value = country.name.common;
      option.textContent = country.name.common;
      countrySelect.appendChild(option);
    });
});

/* ===== 2️⃣ جلب الولايات حسب الدولة ===== */
countrySelect.addEventListener("change", () => {
  const country = countrySelect.value;
  stateSelect.innerHTML = "<option>جاري تحميل الولايات...</option>";

  fetch("https://countriesnow.space/api/v0.1/countries/states", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ country })
  })
  .then(res => res.json())
  .then(data => {
    stateSelect.innerHTML = "";

    if(!data.data || data.data.states.length === 0){
      stateSelect.innerHTML = "<option>لا توجد ولايات</option>";
      return;
    }

    data.data.states.forEach(state => {
      const option = document.createElement("option");
      option.value = state.name;
      option.textContent = state.name;
      stateSelect.appendChild(option);
    });
  });
});
