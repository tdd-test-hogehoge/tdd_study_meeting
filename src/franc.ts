import Money from './Money';

export default class Franc extends Money {

  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }
}
