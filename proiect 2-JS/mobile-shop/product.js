class Product {
  constructor(name, price, releaseYear, dateAdded, link) {
    this.name = name;
    this.price = price;
    this.releaseYear = releaseYear;
    this.dateAdded = dateAdded;
    this.link = link;
  }
  renderProduct() {
    const productList = document.querySelector("#product-list");
    productList.innerHTML += `
                <tr>
                    <td scope="row">${this.name}</td>
                    <td>${this.price}</td>
                    <td>${this.releaseYear}</td>
                    <td>${this.dateAdded}</td>
                    <td>${this.link}</td>
                </tr>
        `;
  }
}
