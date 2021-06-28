export class Money implements Expression {
  protected amount!: number;
  protected _currency!: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  equals(object: Money) {
    return this.amount === object.amount && this.currency === object.currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  get currency(): string {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, this.currency);
  }
}

interface Expression {}

export class Bank {
  reduce(source: Expression, to: string): Money {
    return Money.dollar(10);
  }
}