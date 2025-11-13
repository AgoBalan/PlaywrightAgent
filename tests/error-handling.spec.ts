import { test, expect } from '@playwright/test';

test.describe('Error Handling & Validation', () => {
  test('Invalid quantity input', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    await brocolliCard.getByRole('spinbutton').fill('-1');
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await expect(page.getByText('Items : 0')).toBeVisible();
  });

  test('Checkout with empty cart', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    await page.getByRole('link', { name: 'Cart' }).click();
    await expect(page.getByRole('button', { name: 'PROCEED TO CHECKOUT' })).toBeDisabled();
  });

  // Network failure and UI disabled state would require advanced mocking or manual validation.
});