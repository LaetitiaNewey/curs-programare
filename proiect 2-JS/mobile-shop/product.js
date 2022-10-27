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