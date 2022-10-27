root.innerHTML += `
    <form class="form-style-1" id="add-product">
        <label for="name">Nume:</label>
        <input type="text" name="name" id="name" style="width: 405px;"/>
        <label for="price">Pret:</label>
        <input type="number" name="price" id="price" style="width: 107px;"/>
		
		</br><label for="releaseYear">Anul Lansarii:</label>
        <input type="number" name="releaseYear" id="releaseYear" style="width: 256px;"/>
		
		<label for="dateAdded">Data Adaugarii:</label>
		<input type="date" id="dateAdded" name="dateAdded" 
			value="2022-10-25" min="2022-01-01" max="new Date()" style="width: 256px;">
		
        </br><label for="image">Imagine:</label>
        <input type="text" name="image" id="image" placeholder="Adauga aici un link cu poza telefonului" style="width: 670px;"/>

        </br></br><input class="button" id="submit" type="submit"/>
    </form>
`;

function addFormFunctionality() {
  const form = document.querySelector("#add-product");
  form.addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();
    const phoneName = event.target.name.value;
    const phonePrice = Number(event.target.price.value);
    const phoneReleaseYear = Number(event.target.releaseYear.value);
    const phoneDateAdded = new Date(event.target.dateAdded.value)
      .toISOString()
      .slice(0, 10);

    const phoneImage = `<a href=\"${event.target.image.value}\" target="_blank"><img alt=\"${phoneName}\" src=\"${event.target.image.value}\" width=42" height="42">`;
    console.log(
      phoneName +
        " " +
        phonePrice +
        " " +
        phoneReleaseYear +
        " " +
        phoneDateAdded +
        " " +
        phoneImage
    );
    const newPhone = {
      name: phoneName,
      price: phonePrice,
      releaseYear: phoneReleaseYear,
      dateAdded: phoneDateAdded,
      link: phoneImage,
    };
    console.log("newPhone " + JSON.stringify(newPhone));

    const localStorageProducts = getProducts();
    localStorageProducts.push(newPhone);
    setProducts(localStorageProducts);

    renderProductList(localStorageProducts);
  });
}
// window.localStorage.clear();

window.addEventListener("load", addFormFunctionality);
