root.innerHTML += `
<div class="main-table-header">
    <p class="caption">
      Telefoane Disponibile
    </p>
        <table class="content-table">
            <thead>
                <tr>
                    <th scope="col">Nume</th>
                    <th scope="col">Pret</th>
                    <th scope="col">Anul Lansarii</th>
                    <th scope="col">Data Adaugarii</th>
                    <th scope="col">Imagine</th>
                </tr>
            </thead>
            <tbody id="product-list"></tbody>
        </table>
        </div>
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
