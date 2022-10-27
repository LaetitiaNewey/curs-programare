const root = document.querySelector("#root");
const products = [
  {
    name: "Iphone XS",
    price: 4500,
    releaseYear: 2022,
    dateAdded: "2019-09-22",
    /** link: '<a href="https://i00.eu/img/716/1024x1024/biag5uwz/103.webp" target="_blank">Huawei P30</a>' */
    link: '<a href="https://i00.eu/img/716/1024x1024/biag5uwz/103.webp" target="_blank"><img alt="Samsung S10" src="https://i00.eu/img/716/1024x1024/biag5uwz/103.webp" width=42" height="42">',
  },
  {
    name: "Huawei P30",
    price: 4000,
    releaseYear: 2021,
    dateAdded: "2017-09-22",
    /** link: '<img src="103.webp" alt="Iphone XS" width="42" height="42" style="vertical-align:bottom">' */
    link: '<a href="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n300-5g-1.jpg" target="_blank"><img alt="Samsung S10" src="https://i00.eu/img/716/1024x1024/biag5uwz/103.webp" width=42" height="42">',
  },
  {
    name: "Samsung S10",
    price: 4250,
    releaseYear: 2020,
    dateAdded: "2022-09-22",
    link: '<a href="https://i00.eu/img/716/1024x1024/biag5uwz/103.webp" target="_blank"><img alt="Samsung S10" src="https://i00.eu/img/716/1024x1024/biag5uwz/103.webp" width=42" height="42">',
  },
];

function getProducts() {
  const localStorageProducts = localStorage.getItem("products");
  // console.log(localStorageProducts);
  const parsedProducts = JSON.parse(localStorageProducts);
  return parsedProducts;
}

function setProducts(products) {
  const stringifiedProducts = JSON.stringify(products);
  localStorage.setItem("products", stringifiedProducts);
}

if (getProducts() === null) {
  setProducts(products);
}

function startRendering() {
  const localStorageProducts = getProducts();
  renderProductList(localStorageProducts);
}
window.addEventListener("load", startRendering);
