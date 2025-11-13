import { test, expect } from '@playwright/test';

test.describe('Order Confirmation', () => {
  test('Order confirmation and redirection', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    // Add Brocolli to cart and place order
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.getByRole('link', { name: 'Cart' }).click();
    await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.getByRole('combobox').selectOption({ label: 'India' });
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Proceed' }).click();
    // Assert confirmation and redirection
    await expect(page.getByText('Thank you, your order has been placed successfully')).toBeVisible();
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL(/seleniumPractise/);
  });
});