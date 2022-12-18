export default function saveCart(cart) {
    localStorage.setItem(JSON.stringify(cart));
}