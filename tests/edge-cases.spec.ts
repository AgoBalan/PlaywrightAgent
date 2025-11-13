import { test, expect } from '@playwright/test';

test.describe('Edge Cases & Boundary Conditions', () => {
  test('Add zero quantity', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    await brocolliCard.getByRole('link', { name: '–' }).click();
    await expect(brocolliCard.getByRole('spinbutton')).toHaveValue('0');
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await expect(page.getByText('Items : 0')).toBeVisible();
  });

  test('Add maximum quantity', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    for (let i = 0; i < 9; i++) await brocolliCard.getByRole('link', { name: '+' }).click();
    await expect(brocolliCard.getByRole('spinbutton')).toHaveValue('10');
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await expect(page.getByText('Items : 10')).toBeVisible();
  });

  test('Add same item multiple times', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await expect(page.getByText('Items : 2')).toBeVisible();
  });

  test('Search with no results', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    await page.getByRole('searchbox').fill('Dragonfruit');
    await expect(page.getByText('No results found')).toBeVisible();
  });

  test('Cart persistence on page refresh', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');
    const brocolliCard = page.getByRole('heading', { name: 'Brocolli - 1 Kg' }).locator('..');
    await brocolliCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.reload();
    await expect(page.getByText('Items : 1')).toBeVisible();
  });
});