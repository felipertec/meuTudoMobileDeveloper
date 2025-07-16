//quais ações meu carrinho vai fazer

//Casos de Uso
// => adicionar um item 
async function addItem(userCart,item){
    userCart.push(item)
}

// => calcular o total
async function calculete(userCart){
    return userCart.reduce((total, item) => total + item.subtotal(), 0)
}

// => deletar item do carrinho
async function deleteItem(userCart, name) {
    
}
// => remover o item
async function removeItem(userCart, index){

}

export {
    addItem,
    calculete,
    deleteItem,
    removeItem
}
