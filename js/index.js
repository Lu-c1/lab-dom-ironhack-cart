// ITERATION 1

function updateSubtotal(product) {
    const priceElement = product.querySelector(".price span")
    const quantityElement = product.querySelector(".quantity input")
    const subtotalElement = product.querySelector(".subtotal span")
    console.dir(priceElement)
    console.dir(quantityElement)
    console.dir(subtotalElement)

    const price = priceElement.innerText
    const quantity = quantityElement.valueAsNumber

    const subtotal = price * quantity

    console.dir(subtotalElement)
    subtotalElement.innerText = subtotal

    console.log('Calculating subtotal, yey!');

}


// where can I access to it?
function calculateAll() {



    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
    // end of test

    // ITERATION 2
    const

    // ITERATION 3
    //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
}

// ITERATION 5

function createProduct() {
    //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
});