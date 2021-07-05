import { Expression } from './Expression'
import { Money } from './Money'
import { Sum } from './Sum'

export class Bank {
    reduce(source: Expression, to: string): Money {
      // const sum = source;
      // if (source instanceof Money) return source as Money;
      // const amount = sum.augend.amount + sum.addend.amount;
      // return new Money(amount, to);
      return source.reduce(to);
    }
}