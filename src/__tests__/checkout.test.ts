import { Checkout } from "../checkout";
import { BuyXGetYFreeRule, BulkDiscountRule } from "../pricingRule";

const pricingRules = [
  new BuyXGetYFreeRule("atv", 3, 1),
  new BulkDiscountRule("ipd", 4, 499.99),
];

test("Scenario 1: The '3-for-2' Deal on Apple TVs", () => {
  const co = new Checkout(pricingRules);
  co.scan("atv");
  co.scan("atv");
  co.scan("atv");
  co.scan("vga");
  expect(co.total()).toBe(249.0); // Expecting total to reflect the 3-for-2 deal on Apple TVs
});

test("Scenario 2: Bulk Discount on Super iPad (Price Drops to $499.99 for Purchases of 5 or More)", () => {
  const co = new Checkout(pricingRules);
  co.scan("atv");
  co.scan("ipd");
  co.scan("ipd");
  co.scan("atv");
  co.scan("ipd");
  co.scan("ipd");
  co.scan("ipd");
  expect(co.total()).toBe(2718.95); // Expecting total to reflect the bulk discount on Super iPads
});
