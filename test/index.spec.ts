import { Money } from "../src/Money";

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
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });
  it("testFracMultiplication", () => {
    const five: Money = Money.franc(5);
    expect(five.times(2)).toEqual(Money.franc(10));
    expect(five.times(3)).toEqual(Money.franc(15));
  });
  it("testCurrency", () => {
    expect(Money.dollar(1).currency).toBe("USD");
    expect(Money.franc(1).currency).toBe("CHF");
  });
});
