import { test, expect } from '@playwright/test';

test.describe('Cart and Product Management', () => {
  test('Update item quantity in cart', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.getByRole('link', { name: 'Cart' }).click();
    // Increase quantity
    await brocolliCard.getByRole('link', { name: '+' }).click();
    await expect(brocolliCard.getByRole('spinbutton')).toHaveValue('2');
  });

  test('Remove item from cart', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.getByRole('link', { name: 'Cart' }).click();
    await page.getByRole('link', { name: '×' }).click();
    await expect(page.getByText('Brocolli - 1 Kg')).not.toBeVisible();
  });

  test('Add multiple items to cart', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    const appleCard = page.getByRole('heading', { name: 'Apple - 1 Kg' }).locator('..');
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await appleCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.getByRole('link', { name: 'Cart' }).click();
    await expect(page.getByText('Brocolli - 1 Kg')).toBeVisible();
    await expect(page.getByText('Apple - 1 Kg')).toBeVisible();
  });

  test('Search and filter products', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    await page.getByRole('searchbox').fill('Tomato');
    await expect(page.getByRole('heading', { name: 'Tomato - 1 Kg' })).toBeVisible();
  });
});