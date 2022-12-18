import { searchProducts } from "./utils/searchFunction.js";
import { renderProducts } from "./utils/renderProducts.js";

const url = "http://localhost:1337/products/";

const resultsContainer = document.querySelector(".results");

async function fetchProducts() {

    const response = await fetch(url);

    const products = await response.json();

    resultsContainer.innerHTML = "";

        renderProducts(products);
        searchProducts(products);
    }

fetchProducts();