import { Money } from "../src/Money";
import { Bank } from '../src/Bank'
import { Sum } from '../src/Sum'
import { Expression } from "../src/Expression";

describe("moneyTest", () => {
  it("testMultiplication", () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  it("testEquality", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });

  it("testCurrency", () => {
    expect(Money.dollar(1).currency).toBe("USD");
    expect(Money.franc(1).currency).toBe("CHF");
  });

  it("testSimpleAddition", () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');
    expect(Money.dollar(10)).toEqual(reduced);
  });

  it("testPlusReturnSum", () => {
    const five = Money.dollar(5);
    const result = five.plus(five);
    const sum = result as Sum;
    expect(five).toEqual(sum.augend);
    expect(five).toEqual(sum.addend);
  });

  it("testReduceSum", () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, "USD");
    expect(Money.dollar(7)).toEqual(result);
  });

  it("testReduceMoney", () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), "USD");
    expect(Money.dollar(1)).toEqual(result);
  });

  it("testReduceMoneyDifferentCurrency", () => {
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(Money.franc(2), "USD");
    expect(Money.dollar(1)).toEqual(result);
  });

  it("testIdentityRate", () => {
    expect(1).toEqual(new Bank().rate("USD", "USD"));
  });

  it("testMixedAddition", () => {
    const fiveBucks = Money.dollar(5) as Expression;
    const tenFrancs = Money.franc(10) as Expression;
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
    expect(Money.dollar(10)).toEqual(result);
  })
});
