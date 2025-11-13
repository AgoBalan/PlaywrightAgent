import { test, expect } from '@playwright/test';

test.describe('Review Cart', () => {
  test('Review product, quantity, and price in cart', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    // Add Brocolli to cart
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    // Open cart
    await page.getByRole('link', { name: 'Cart' }).click();
    // Assert product, quantity, and price
    await expect(page.getByText('Brocolli - 1 Kg')).toBeVisible();
    await expect(page.getByText('1 No.')).toBeVisible();
    await expect(page.getByText('₹ 120')).toBeVisible();
  });
});