root.innerHTML += `
    <!-- <h2>Telefoane:</h2> -->
    <ul class="table-header">
        <table>
            <caption class="caption">
                Telefoane Disponibile
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
    </ul>
    <ul id="product-list"></ul>
`;

// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
// https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position

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
