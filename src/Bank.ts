import { Expression } from './Expression'
import { Money } from './Money'
import { Pair } from './Pair';

export class Bank {
    private rates = new Map();

    reduce(source: Expression, to: string): Money {
      return source.reduce(this, to);
    }

    addRate(from: string, to: string, rate: number) {
      const pair = new Pair(from, to);
      this.rates.set(pair.key, rate);
    }

    rate(from: string, to: string) {
      if (from === to) return 1;
      const pair = new Pair(from, to);
      return this.rates.get(pair.key);
    }
}