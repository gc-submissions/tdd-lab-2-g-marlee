const {calculateChange, isSufficientPayment, calculateTotal} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("When payment is 6 and total is 5 then our change is 1", () => {
    // Arrange
    const total = 5;
    const payment = 6;

    // Act
    const change = calculateChange(payment, total);

    // Assert
    expect(change).toBe(1);
  });

  test("When payment is 13.03 and total is 12.30 then our change is .73", () => {
    // Arrange
    const total = 12.30;
    const payment = 13.03;

    // Act
    const change = calculateChange(payment, total);

    // Assert
    expect(change).toBeCloseTo(0.73);
  });

  test("When payment is 25 and total is 20 then our change is 5", () => {
    // Arrange
    const total = 20;
    const payment = 25;

    // Act
    const change = calculateChange(payment, total);

    // Assert
    expect(change).toBe(5);
  });
});

describe("isSufficientPayment", () => {
  test("When payment is 6 and total is 5 then payment is sufficient", () => {
    // Arrange
    const total = 5;
    const payment = 6;

    // Act
    const isSufficient = isSufficientPayment(payment, total);

    // Assert
    expect(isSufficient).toBe(true);
  });
});

describe("calculateTotal", () => {
  test("When we have item of 4.99 the total is 4.99", () => {
    // Arrange
    const itemsArray = [{name: "Organic eggs", price: 4.99}];

    // Act 
    const total = calculateTotal(itemsArray);

    // Assert 
    expect(total).toBeCloseTo(4.99);
  });

  test("When we have three items of  3.50, 12.99, and 0.03, it returns 16.52", () => {
    // Arrange
    const itemsArray = [{name: "Poster board", price: 3.50},
                        {name: "Markers", price: 12.99},
                        {name: "Pen", price: 0.03}];

    // Act
    const total = calculateTotal(itemsArray);

    // Assert
    expect(total).toBeCloseTo(16.52);
  });

  test("When we have no items the total will be zero", () => {
    // Arrange
    const itemsArray = [];

    // Act
    const total = calculateTotal(itemsArray);

    // Assert
    expect(total).toBeCloseTo(0);
  });

  test("When we have two items each costing 6.50 we will have a total of 13.00", () => {
    // Arrange
    const itemsArray = [{name: "Big Mac", price: 6.50},
                        {name: "Quarter Pounder", price: 6.50}];

    // Act
    const total = calculateTotal(itemsArray);

    // Assert
    expect(total).toBeCloseTo(13.00);
  })
});

describe("addItem", () => {
  test.todo("add addItem tests here");
});

describe("removeItem", () => {
  test.todo("add removeItem tests here");
});