
const url = "http://localhost:1337/home/";

const resultsContainer = document.querySelector(".results");

async function fetchProduct() {

    try {
        const response = await fetch(url);
        const product = await response.json();

        createHtml(product);
      
    }
    catch(error) {
    }
    
}

fetchProduct();

function createHtml(product) {
    resultsContainer.innerHTML = `<div class="hero">
                                <img src="https://images.unsplash.com/photo-1465877783223-4eba513e27c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740" width="600" height="500" alt="${product.hero_banner_alt_text}">                                                
                                </div>`;
};
