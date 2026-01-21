<script>
const PRODUCTS = [
  {
    id: 1,
    title: "هاتف سامسونج S21",
    price: "300$",
    category: "هواتف",
    country: "Sudan",
    image: "https://via.placeholder.com/400x250",
    description: "هاتف بحالة ممتازة"
  },
  {
    id: 2,
    title: "تويوتا كورولا 2015",
    price: "6500$",
    category: "سيارات",
    country: "Egypt",
    image: "https://via.placeholder.com/400x250",
    description: "سيارة نظيفة جدًا"
  },
  {
    id: 3,
    title: "آيفون 11",
    price: "450$",
    category: "هواتف",
    country: "Sudan",
    image: "https://via.placeholder.com/400x250",
    description: "بطارية ممتازة"
  }
];

// خزّنها مرة واحدة
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(PRODUCTS));
}
</script>
