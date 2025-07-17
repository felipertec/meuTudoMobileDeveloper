import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";
const myCart = [];
const myWishList = [];

console.log("Welcome to the shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

//adicionei 2 itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

//deletei 2 itens no carrinho
// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);

await cartService.calculete(myCart)

