export abstract class Money {
  protected amount!: number;
  protected _currency!: string;
  abstract times(multiplier: number): Money;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  equals(object: Money) {
    return (
      this.amount === object.amount &&
      this.constructor.name === object.constructor.name
    );
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }

  get currency(): string {
    return this._currency;
  }      
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
