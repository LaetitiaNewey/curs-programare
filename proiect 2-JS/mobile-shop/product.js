class Product {
    constructor(name, price, releaseYear, dateAdded, link) {
        this.name = name;
        this.price = price;
		this.releaseYear = releaseYear;
		this.dateAdded = dateAdded;
		this.link = link;
    }
    renderProduct() {
        const productList = document.querySelector('#product-list');
        /* productList.innerHTML += `
            <li class="product">
                <p>Nume: ${this.name}</p>
                <p>Pret: ${this.price}</p>
                <p>Release Year: ${this.releaseYear}</p>
                <p>Date Added: ${this.dateAdded}</p>
                <p>${this.link}</p>
            </li>

            <li class="product">
                <ul>
                    <p>${this.name}
                    ${this.price}
                    ${this.releaseYear}
                    ${this.dateAdded}
                    ${this.link}
                </ul>
            </li>
        `; */
		productList.innerHTML += `
        <table>
            <tbody>
                <tr>
                    <th scope="row">${this.name}</th>
                    <td>${this.price}</td>
                    <td>${this.releaseYear}</td>
                    <td>${this.dateAdded}</td>
                    <td>${this.link}</td>
                </tr>
            </tbody>
        </table>
        `;
    }
}