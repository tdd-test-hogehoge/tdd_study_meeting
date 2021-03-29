export default class Doller {
  amount = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Doller(this.amount * multiplier);
  }
}
