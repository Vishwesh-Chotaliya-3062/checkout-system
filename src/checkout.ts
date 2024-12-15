import { Product, products } from "./product";
import { PricingRule } from "./pricingRule";

export class Checkout {
  private items: Product[] = [];

  constructor(private pricingRules: PricingRule[]) {}

  scan(sku: string): void {
    const matchedProduct = products.find((product) => product.sku === sku);
    if (matchedProduct) {
      this.items.push(matchedProduct);
    }
  }

  total(): number {
    let total = 0;
    let remainingItems = [...this.items];

    for (const rule of this.pricingRules) {
      total += rule.apply(remainingItems);
      remainingItems = rule.removeAppliedItems(remainingItems);
    }

    // Add remaining items that did not match any rule
    for (const item of remainingItems) {
      total += item.price;
    }

    return total;
  }
}
