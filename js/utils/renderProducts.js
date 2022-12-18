export function renderProducts(productsToRender) {

    const resultsContainer = document.querySelector(".results");

    resultsContainer.innerHTML = "";
    

    productsToRender.forEach(function(product) {
        resultsContainer.innerHTML += `<a href="product-details.html?id=${product.id}"
                                        <div class="articles"><h2>${product.title}</h2>           
                                        <p>$${product.price}</p>
                                        <img src="${product.image_url}" width="300" height="300" alt="${product.image.alternativeText}">                                                
                                        </div>`
    });

}

