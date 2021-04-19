import Money from './Money';
export default class Dollar extends Money {

  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }
}
