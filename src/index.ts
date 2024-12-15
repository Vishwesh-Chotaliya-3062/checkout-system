import { Checkout } from "./checkout";
import { BuyXGetYFreeRule, BulkDiscountRule } from "./pricingRule";

const pricingRules = [
  new BuyXGetYFreeRule("atv", 3, 1), // Buy 3 Apple TVs, pay for 2
  new BulkDiscountRule("ipd", 4, 499.99), // Bulk discount for Super iPad if more than 4 items
];

// Create an instance of Checkout
const co = new Checkout(pricingRules);

// Scenario 1: atv, atv, atv, vga
co.scan("atv");
co.scan("atv");
co.scan("atv");
co.scan("vga");
console.log("Total for Scenario 1:", co.total()); // Expected: 249.00

// Scenario 2: atv, ipd, ipd, atv, ipd, ipd, ipd
const co2 = new Checkout(pricingRules);
co2.scan("atv");
co2.scan("ipd");
co2.scan("ipd");
co2.scan("atv");
co2.scan("ipd");
co2.scan("ipd");
co2.scan("ipd");
console.log("Total for Scenario 2:", co2.total()); // Expected: 2718.95
