import { getCart } from "./utils/getCart.js";
import { renderProducts } from "./utils/renderProducts.js";

const clearAll = document.querySelector(".clearBtn");

const products = getCart();

const resultsContainer = document.querySelector(".results");

products.forEach(product => 
    resultsContainer.innerHTML += `<div>
                                    <h2>${product.title}</h2>
                                    <p>${product.price}</p>
                                      
                                    </div>`);

                                    if (products.length === 0) {
                                        resultsContainer.innerHTML += `Your cart is empty.`;

                                    }


clearAll.addEventListener("click", removeItems);

function removeItems() {

localStorage.clear();

renderProducts([]);

resultsContainer.innerHTML += `Your cart is empty.`;
}

