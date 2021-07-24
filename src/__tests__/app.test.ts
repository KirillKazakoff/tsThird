import Item from '../ts/classes/item';
import Cart from '../ts/classes/cart';

const cart = new Cart();
const movie = new Item(1, 10000, 'Pooka');
let phones = new Item(2, 20000, 'Iphones', 30);

cart.add(movie);
cart.add(phones);

test('amountDecrease success', () => {
    cart.amountDecrease(2, 2);
    const impacted = cart.getAll()[1];
    const result = impacted.amount;
    const expected = 28;

    expect(result).toBe(expected);
});

test('amountDecrease fail', () => {
    const result = cart.amountDecrease(1, 2);
    const expected = 'something went wrong';

    expect(result).toBe(expected);
});

test('priceMultiply', () => {
    phones = new Item(2, 20000, 'Iphones', 30);
    const result = phones.price;
    const expected = 600000;

    expect(result).toBe(expected);
});
