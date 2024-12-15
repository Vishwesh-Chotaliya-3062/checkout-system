# Checkout System

This project is a simple checkout system for a computer store. It scans items in any order and calculates the total price, applying various pricing rules and promotions as specified. The system is implemented in TypeScript and includes unit tests to verify functionality.

## Features

- Scan items in any order.
- Apply pricing rules dynamically.
- Current promotions:
  - The **3-for-2 deal** on Apple TVs.
  - **Bulk discount** on Super iPads when purchasing more than 4.

## Product Catalogue

| SKU | Name        | Price   |
|-----|-------------|---------|
| ipd | Super iPad  | $549.99 |
| mbp | MacBook Pro | $1399.99|
| atv | Apple TV    | $109.50 |
| vga | VGA adapter | $30.00  |

## Pricing Rules

- **Buy X Get Y Free Rule**: Buy a certain number of items and get some for free.
- **Bulk Discount Rule**: Apply a discounted price when purchasing a specified minimum quantity of items.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Vishwesh-Chotaliya-3062/checkout-system.git
   cd checkout-system

2. Install dependencies:
   ```sh
   npm install

3. Build the project & Start:
   ```sh
   npm run start (this command will build the project and then start the application)

## Tests

Unit tests are provided to verify the functionality of the checkout system. The tests are located in the `src/__tests__` directory. Run the tests using:

```sh
npm run test
```

## Assets

![Application Output](./assets/Application%20Output.png)
![Test Cases Output](./assets/Test%20Cases%20Output.png)

## Thanks

Thank you for checking out this project! If you have any questions or feedback, feel free to reach out.
