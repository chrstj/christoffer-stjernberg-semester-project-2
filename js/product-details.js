const resultsContainer = document.querySelector(".results");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "http://localhost:1337/products/" + id;

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
    resultsContainer.innerHTML = `<h1>${product.title}</h1>
                                <p>$${product.price}</p>
                                <img src="${product.image_url}" width="500" height="500" alt="${product.image.alternativeText}">                                                
                                <p>${product.description}</p>
                                <button class="addItem">Add To Cart</button>`;
                                
};

