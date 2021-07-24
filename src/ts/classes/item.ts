import IntCartItem from '../interfaces/IntCartItem';

export default class Item implements IntCartItem {
    constructor(
       readonly id: number,
       readonly price: number,
       readonly name: string,
       readonly amount?: number,
    ) {
        if (this.amount) {
            this.price *= this.amount;
        }
    }
}
