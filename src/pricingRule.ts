import { Product } from "./product";

export interface PricingRule {
  apply(items: Product[]): number;
  removeAppliedItems(items: Product[]): Product[];
}

export class BuyXGetYFreeRule implements PricingRule {
  constructor(
    private sku: string,
    private itemsToBuy: number,
    private itemsToGetFree: number
  ) {}

  apply(items: Product[]): number {
    const applicableItems = items.filter((item) => item.sku === this.sku);

    const numFreeItems =
      Math.floor(applicableItems.length / this.itemsToBuy) *
      this.itemsToGetFree;

    const chargeableItems = applicableItems.length - numFreeItems;

    return chargeableItems * (applicableItems[0]?.price || 0);
  }

  removeAppliedItems(items: Product[]): Product[] {
    const remainingItems = [...items];
    let count = 0;

    for (let i = remainingItems.length - 1; i >= 0; i--) {
      if (remainingItems[i].sku === this.sku) {
        remainingItems.splice(i, 1);
        count++;
        if (count >= this.itemsToBuy) break;
      }
    }

    return remainingItems;
  }
}

export class BulkDiscountRule implements PricingRule {
  constructor(
    private sku: string,
    private minQuantity: number,
    private discountedPrice: number
  ) {}

  apply(items: Product[]): number {
    const applicableItems = items.filter((item) => item.sku === this.sku);

    const price =
      applicableItems.length > this.minQuantity
        ? this.discountedPrice
        : applicableItems[0]?.price || 0;

    return applicableItems.length * price;
  }

  removeAppliedItems(items: Product[]): Product[] {
    return items.filter((item) => item.sku !== this.sku);
  }
}
