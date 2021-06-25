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

// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
// end of test

// ITERATION 2

const getPriceTowell = product.getElementByClassName(".price ")[1];
console.dir(getPriceTowell);
getPriceTowell.innerText = "12.50";

const inputElement = document.getElementByClassName(".quantity input ")
const productElement = document.getElementByClassName(".product ")
const buttonElement = document.getElementByClassName(".calculate-total ")


function allSubtotal() {

    const allProducts = document.queryAll(".product")
    for (let product of allProducts) {
        updateSubtotal(product)
    }
}
const subTotalItems = allSubtotal()

buttonElement.addEventListener(click, () => {
    console.dir(subTotalItems)
})

// ITERATION 3
function calculateAll(totalPrice) {
    const totalPrice = 0
    for (i = 0; i < totalPrice.length; i++) {
        sum = +subtotalItems;
    }
}


// ITERATION 4

function removeProduct(event) {
    const tbodyElement = document.getElementByTagName("tbody")
    const RemoveButton = product.queryAll(".btn btn-remove")
    const allRemoveButtons = document.queryAll(".btn btn-remove")

    for (let RemoveButton of allRemoveButtons) {
        RemoveButton.addEventListener("click", () => {
            tbodyElement.removeChild(productElement)
        })
    }
    currentTarget = productElement
    const event = removeProduct()
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
}

// ITERATION 5

function createProduct() {
    const trElement = document.createElement("tr")
    const tdElement = document.createElement("td")
    const spanElementText = document.createElement("span")
    const spanPriceValue = document.createElement(". price span")
    const spanSubtotalValue = document.createElement(".subtotal span")
    const inputElement = document.createElement("input")
    const buttonElement = document.createElement("button")

    buttonElement.addEventListener("click", () => {
        console.log(subtotalElement)
    })
}

buttonElement.innerText = Remove
sapnElementPriceValue.innerText = 9.00
spanElementText.innerText = "beach ball"
spanSubtotalValue.value = 0

td.Element.appendChild(spanElementText)
td.Element.appendChild(spanPriceValue)
td.Element.appendChild(spanSubtotalValue)
td.Element.appendChild(inputElementText)
td.Element.appendChild(buttonElementText)
tr.Element.appendChild(tdElementText)

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
});