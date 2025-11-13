import { test, expect } from '@playwright/test';

test.describe('Checkout and Place Order', () => {
  test('Complete checkout and place order', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    // Add Brocolli to cart
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    // Open cart and proceed to checkout
    await page.getByRole('link', { name: 'Cart' }).click();
    await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
    // Place order
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.getByRole('combobox').selectOption({ label: 'India' });
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Proceed' }).click();
    // Assert confirmation
    await expect(page.getByText('Thank you, your order has been placed successfully')).toBeVisible();
  });
});