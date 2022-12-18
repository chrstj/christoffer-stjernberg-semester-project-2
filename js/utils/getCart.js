export function getCart() {

    const items = localStorage.getItem("products");
 
    if(items === null) {
        return [];
    }
    
    else {
        return JSON.parse(items);
    }
 }