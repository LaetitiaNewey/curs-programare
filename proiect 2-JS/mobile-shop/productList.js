root.innerHTML += `
<div class="main-table-header">
        <table class="table-header">
            <caption class="caption">
            TELEFOANE DISPONIBILE
            </caption>
            <thead>
                <tr>
                    <th scope="col">Nume</th>
                    <th scope="col">Pret</th>
                    <th scope="col">Anul Lansarii</th>
                    <th scope="col">Data Adaugarii</th>
                    <th scope="col">Imagine</th>
                </tr>
            </thead>
        </table>
        </div>
    <ul id="product-list"></ul>
`;

function renderProductList(products) {
  const productList = document.querySelector("#product-list");
  productList.innerHTML = "";
  products.forEach(function (product) {
    const phone = new Product(
      product.name,
      product.price,
      product.releaseYear,
      product.dateAdded,
      product.link
    );
    phone.renderProduct();
  });
}
