import { calculateTax } from "../src";

describe("Tax calculator suite", () => {
  it("Must return 0", () => {
    const value = generateValue(1, 2499);
    const tax = calculateTax(value);
    expect(tax).toBe(0);
  });

  it("must return salary multiplied by 0.075", () => {
    const value = generateValue(2500, 3199);
    const tax = calculateTax(value);
    expect(tax).toBe(value * 0.075);
  });

  it("must return salary multiplied by 0.15", () => {
    const value = generateValue(3200, 4249);
    const tax = calculateTax(value);
    expect(tax).toBe(value * 0.15);
  });

  it("must return salary multiplied by 0.225", () => {
    const value = generateValue(4250, 5299);
    const tax = calculateTax(value);
    expect(tax).toBe(value * 0.225);
  });

  it("must return salary multiplied by 0.275", () => {
    const value = generateValue(5300, 50000);
    const tax = calculateTax(value);
    expect(tax).toBe(value * 0.275);
  });
});

function generateValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
