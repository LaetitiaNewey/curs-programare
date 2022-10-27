root.innerHTML += `
<div class="sortClass">
    <button class="button" id="sort-by-price">Sorteaza dupa pret</button>
	<button class="button" id="sort-by-release-year">Sorteaza dupa release year</button>
	<button class="button" id="sort-by-date-added">Sorteaza dupa date added</button>
</div>
`;

function sortPhones(sortType) {
    switch(sortType) {
        case "SORT_BY_PRICE":
            const localStorageProducts = getProducts();
            const sortedArray = localStorageProducts.sort((elem1, elem2) => {
                if (elem1.price < elem2.price) {
                    return -1;
                } else if (elem1.price > elem2.price) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;
		case "SORT_BY_RELEASE_YEAR":
			const localStorageProducts2 = getProducts();
            const sortedArray2 = localStorageProducts2.sort((elem1, elem2) => {
                if (elem1.releaseYear < elem2.releaseYear) {
                    return -1;
                } else if (elem1.releaseYear > elem2.releaseYear) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray2);
            renderProductList(sortedArray2);
			break;
		case "SORT_BY_DATE_ADDED":
			const localStorageProducts3 = getProducts();
            const sortedArray3 = localStorageProducts3.sort((elem1, elem2) => {
				let dateAdded1 = new Date(elem1.dateAdded).getTime();
                let dateAdded2 = new Date(elem2.dateAdded).getTime();
                if (dateAdded1 < dateAdded2) {
                    return -1;
                } else if (dateAdded1 > dateAdded2) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray3);
            renderProductList(sortedArray3);
			break;
    }
}

function addSortingFunctionality() {
    const sortByPrice = document.querySelector('#sort-by-price');
    sortByPrice.addEventListener('click', function() {
        sortPhones('SORT_BY_PRICE');
    })
}

function addSortingFunctionality2() {
	const sortByReleaseYear = document.querySelector('#sort-by-release-year');
    sortByReleaseYear.addEventListener('click', function() {
        sortPhones('SORT_BY_RELEASE_YEAR');
    })
}

function addSortingFunctionality3() {
	const sortByDateAdded = document.querySelector('#sort-by-date-added');
    sortByDateAdded.addEventListener('click', function() {
        sortPhones('SORT_BY_DATE_ADDED');
    })
}

window.addEventListener('load', addSortingFunctionality);
window.addEventListener('load', addSortingFunctionality2);
window.addEventListener('load', addSortingFunctionality3);