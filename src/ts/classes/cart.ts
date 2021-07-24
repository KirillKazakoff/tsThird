import IntCartItem from '../interfaces/IntCartItem';

export default class Cart {
    private items: IntCartItem[] = [];

    add(item: IntCartItem): void {
        this.items.push(item);
    }

    getAll(): IntCartItem[] {
        return [...this.items];
    }

    getCost(): number {
        return this.items.reduce((total, element) => (
            total + element.price), 0);
    }

    getDiscountCost(discount: number): number {
        const cost = this.getCost();

        return cost * (1 - discount);
    }

    productDelete(id: number): boolean|string {
        const productIndex = this.items.findIndex((element) => element.id === id);

        if (productIndex > -1) {
            this.items.splice(productIndex, 1);
            return true;
        }
        return 'there is no element with this id';
    }

    amountDecrease(id: number, amount: number): boolean|string {
        const product = this.items.find((element) => element.id === id);

        if (product?.amount) {
            product.amount -= amount;
            return true;
        }
        return 'something went wrong';
    }
}
