// import { getCart } from "./utils/getCart.js";
// import { saveCart } from "./utils/saveCart.js";

export default function addToCart() {
    this.classList.toggle("addItem");

    const buttons = document.querySelectorAll(".addItem");

    buttons.forEach((addButton) => {
        addButton.addEventListener("click", addToList);
        console.log(event);
    });

}
