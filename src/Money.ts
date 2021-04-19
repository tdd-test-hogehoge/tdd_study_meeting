export default class Money {
    protected amount!: number;

    equals(object: Money) {
        return this.amount === object.amount && this.constructor.name === object.constructor.name;
    }
}