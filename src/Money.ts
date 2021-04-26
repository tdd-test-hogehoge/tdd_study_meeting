export abstract class Money {
    protected amount!: number;
    abstract times(multiplier: number): Money;

    equals(object: Money) {
        return this.amount === object.amount && this.constructor.name === object.constructor.name;
    }

    static dollar(amount: number): Money {
        return new Dollar(amount);
    }

    static franc(amount: number): Money {
        return new Franc(amount);
    }
}

export class Dollar extends Money {

    constructor(amount: number) {
      super();
      this.amount = amount;
    }
  
    times(multiplier: number): Money {
      return new Dollar(this.amount * multiplier);
    }
  }
  
  export class Franc extends Money {

    constructor(amount: number) {
      super();
      this.amount = amount;
    }
  
    times(multiplier: number): Money {
      return new Franc(this.amount * multiplier);
    }
  }
  