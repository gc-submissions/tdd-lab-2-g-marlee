function calculateChange(payment, total) {
    return payment - total;
}

function isSufficientPayment(payment, total) {
    return payment >= total;
}

// const isSufficientPayment = (payment, total) => payment >= total;

function calculateTotal(itemsArray) {
    let total = 0;
    itemsArray.forEach(item => {
        total += item.price;
    });

    return total;
};

function addItem(itemsArray, name, price) {
    const object = {name: name, price: price};
    itemsArray.push(object);
};

function removeItem(itemsArray, index) {
    itemsArray.splice(index, 1);
};

module.exports = {calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem};