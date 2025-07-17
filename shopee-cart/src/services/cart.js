//quais ações meu carrinho vai fazer

//Casos de Uso
// => adicionar um item 
async function addItem(userCart,item){
    userCart.push(item)
}

// => calcular o total
async function calculete(userCart){
    console.log("\n Shopee Cart TOTAL IS:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`🎁TOTAL: ${result}`)
}

// => deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1)
        return;
    }
}


// => remover o item
async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    
    if(indexFound == -1){
        console.log("item não encontrado");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
        return;
    }
}

async function displayCart(userCart){
    console.log("\n Shopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)
    })
}

export {
    addItem,
    calculete,
    deleteItem,
    removeItem,
    displayCart
}
