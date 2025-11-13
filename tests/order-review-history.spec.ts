import { test, expect } from '@playwright/test';

test.describe('Order Review & History', () => {
  test('Post-order home redirection', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.getByRole('link', { name: 'Cart' }).click();
    await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.getByRole('combobox').selectOption({ label: 'India' });
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Proceed' }).click();
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL(/seleniumPractise/);
  });

  test('Absence of order history', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    // There is no order history feature, so assert its absence
    await expect(page.getByText(/Order History|Past Orders/)).not.toBeVisible();
  });
});