const root = document.querySelector("#root");
const products = [
  {
    name: "Iphone XS",
    price: 4500,
    releaseYear: 2022,
    dateAdded: "2019-09-22",
    link: '<a href="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xs-max-5.jpg" target="_blank"><img alt="Iphone XS" src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xs-max-5.jpg" width=42" height="42">',
  },
  {
    name: "Huawei P30",
    price: 4000,
    releaseYear: 2021,
    dateAdded: "2017-09-22",
    link: '<a href="https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-1.jpg" target="_blank"><img alt="Huawei P30" src="https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-1.jpg" width=42" height="42">',
  },
  {
    name: "Samsung S10",
    price: 4250,
    releaseYear: 2020,
    dateAdded: "2022-09-22",
    link: '<a href="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg" target="_blank"><img alt="Samsung S10" src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg" width=42" height="42">',
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
