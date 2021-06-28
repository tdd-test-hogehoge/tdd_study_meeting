import { Money, Bank } from "../src/Money";

describe("moneyTest", () => {
  it("testMultiplication", () => {
    // const five = new Dollar(5);
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
    // const sum = Money.dollar(5).plus(Money.dollar(5));
    // expect(Money.dollar(10)).toEqual(sum);
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');
    expect(Money.dollar(10)).toEqual(reduced);
  });
});
