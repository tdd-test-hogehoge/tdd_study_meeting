import { Expression } from './Expression'
import { Sum } from './Sum'

export class Money implements Expression {
  private _amount: number;
  private _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
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
  
  get amount() {
    return this._amount;
  }
  
  get currency() {
    return this._currency;
  }
  
  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(to: string): Money {
    return this;
  }
}