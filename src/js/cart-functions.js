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

module.exports = {calculateChange, isSufficientPayment, calculateTotal};