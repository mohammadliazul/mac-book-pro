// get each item price
function getItemPrice(itemId, price) {
    const eachItemPrice = document.getElementById(itemId);
    eachItemPrice.innerText = price;
}

// update total price
function updateTotal() {
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    let memoryPrice = parseFloat(document.getElementById('memory-price').innerText);
    let storagePrice = parseFloat(document.getElementById('storage-price').innerText);
    let deliveryPrice = parseFloat(document.getElementById('delivery-charge').innerText);
    // calculate total price
    let totalPrice = document.getElementById('total-price').innerText = bestPrice + memoryPrice + storagePrice + deliveryPrice;

    // update grand total price
    let total = document.getElementById('grand-total');
    total.innerText = totalPrice;
    return totalPrice;
}

// update grand total price when use promo code
function updateGrandTotal() {
    const promoCode = document.getElementById('promo-code-input');
    const promoCodetText = promoCode.value;
    if (promoCodetText == 'stevekaku') {
        let total = document.getElementById('grand-total');
        total.innerText = updateTotal() - updateTotal() * (20 / 100);
    }
    // clear promo code
    promoCode.value = '';
}


//--------------- event handler -----------------------

document.getElementById('8-gb-button').addEventListener('click', function () {
    getItemPrice('memory-price', 0);
    updateTotal();
});

document.getElementById('16-gb-button').addEventListener('click', function () {
    getItemPrice('memory-price', 180);
    updateTotal();
});

document.getElementById('256-gb-button').addEventListener('click', function () {
    getItemPrice('storage-price', 0);
    updateTotal();
});

document.getElementById('512-gb-button').addEventListener('click', function () {
    getItemPrice('storage-price', 100);
    updateTotal();
});

document.getElementById('1-tb-button').addEventListener('click', function () {
    getItemPrice('storage-price', 180);
    updateTotal();
});

document.getElementById('free-delivery-button').addEventListener('click', function () {
    getItemPrice('delivery-charge', 0);
    updateTotal();
});

document.getElementById('delivery-charge-button').addEventListener('click', function () {
    getItemPrice('delivery-charge', 20);
    updateTotal();
});


document.getElementById('apply-button').addEventListener('click', function () {
    updateGrandTotal()
});