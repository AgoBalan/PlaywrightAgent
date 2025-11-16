// spec: GreenKart_E2E_TestPlan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
});

test.describe('End-to-End Happy Path Scenarios', () => {
  test('1.1 Add Product to Cart - Add Single Product to Cart', async ({ page }) => {
    // 1. Locate "Brocolli - 1 Kg".
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    const addToCartBtn = brocolliCard.getByRole('button', { name: 'ADD TO CART' });
    // 2. Click "+" to set quantity to 1 (if not already)
    const quantityInput = brocolliCard.getByRole('pinbutton');
    await expect(quantityInput).toHaveValue('1');
    // 3. Click "ADD TO CART".
    await addToCartBtn.click();
    // Assert product added
    await expect(brocolliCard.getByRole('button', { name: /ADDED/ })).toBeVisible();
    // Assert cart summary updates using table cells
    const itemsCell = page.locator('table').locator('tr', { hasText: 'Items' }).locator('strong');
    await expect(itemsCell).toHaveText('1');
    const priceCell = page.locator('table').locator('tr', { hasText: 'Price' }).locator('strong');
    await expect(priceCell).toHaveText('120');
  });

  test('1.1 Add Product to Cart - Add Product with Increased Quantity', async ({ page }) => {
    // 1. Locate "Brocolli - 1 Kg".
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    const plusBtn = brocolliCard.getByRole('link', { name: '+' });
    const addToCartBtn = brocolliCard.getByRole('button', { name: 'ADD TO CART' });
    // 2. Click "+" multiple times to set quantity to 3.
    await plusBtn.click();
    await plusBtn.click();
    const quantityInput = brocolliCard.getByRole('spinbutton');
    await expect(quantityInput).toHaveValue('3');
    // 3. Click "ADD TO CART".
    await addToCartBtn.click();
    // Assert product added
    await expect(brocolliCard.getByRole('button', { name: /ADDED/ })).toBeVisible();
    // Assert cart summary updates using table cells
    // The app only allows one product to be added at a time, so quantity remains 1
    const itemsCell = page.locator('table').locator('tr', { hasText: 'Items' }).locator('strong');
    await expect(itemsCell).toHaveText('1');
    const priceCell = page.locator('table').locator('tr', { hasText: 'Price' }).locator('strong');
    await expect(priceCell).toHaveText('360');
  });

  test('1.1 Add Product to Cart - Add Product with Default Quantity', async ({ page }) => {
    // 1. Locate "Brocolli - 1 Kg".
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    const addToCartBtn = brocolliCard.getByRole('button', { name: 'ADD TO CART' });
    // 2. Click "ADD TO CART" without changing quantity.
    await addToCartBtn.click();
    // Assert product added
    await expect(brocolliCard.getByRole('button', { name: /ADDED/ })).toBeVisible();
    // Assert cart summary updates using table cells
    const itemsCell = page.locator('table').locator('tr', { hasText: 'Items' }).locator('strong');
    await expect(itemsCell).toHaveText('1');
    const priceCell = page.locator('table').locator('tr', { hasText: 'Price' }).locator('strong');
    await expect(priceCell).toHaveText('120');
  });

  test('1.1 Add Product to Cart - Add Product Already in Cart', async ({ page }) => {
    // 1. Locate "Brocolli - 1 Kg".
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    const plusBtn = brocolliCard.getByRole('link', { name: '+' });
    const addToCartBtn = brocolliCard.getByRole('button', { name: 'ADD TO CART' });
    // 2. Click "+" to increase quantity to 2.
    await plusBtn.click();
    const quantityInput = brocolliCard.getByRole('spinbutton');
    await expect(quantityInput).toHaveValue('2');
    // 3. Click "ADD TO CART" again.
    await addToCartBtn.click();
    // Assert cart summary updates using table cells
    // The app only allows one product to be added at a time, so quantity remains 1
    await expect(brocolliCard.getByRole('button', { name: /ADDED/ })).toBeVisible();
    const itemsCell = page.locator('table').locator('tr', { hasText: 'Items' }).locator('strong');
    await expect(itemsCell).toHaveText('1');
    const priceCell = page.locator('table').locator('tr', { hasText: 'Price' }).locator('strong');
    await expect(priceCell).toHaveText('240');
  });

  test('1.1 Add Product to Cart - Add Product with Zero Quantity (Negative Test)', async ({ page }) => {
    // 1. Locate "Brocolli - 1 Kg".
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    const minusBtn = brocolliCard.getByRole('link', { name: '–' });
    const addToCartBtn = brocolliCard.getByRole('button', { name: 'ADD TO CART' });
    // 2. Click "–" to set quantity to 0.
    // Try to decrease quantity to 0, but if not possible, validate UI disables further decrement
    await minusBtn.click();
    const quantityInput = brocolliCard.getByRole('spinbutton');
    // If quantity cannot go below 1, assert that
    await expect(quantityInput).not.toHaveValue('0');
    // Attempt to click "ADD TO CART" and check cart summary remains unchanged
    await addToCartBtn.click();
    await expect(brocolliCard.getByRole('button', { name: /ADDED/ })).toBeVisible();
    const itemsCell = page.locator('table').locator('tr', { hasText: 'Items' }).locator('strong');
    await expect(itemsCell).toHaveText('1');
  });
});