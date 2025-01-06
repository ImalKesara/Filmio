import { test, expect } from '@playwright/test';

test('navigation smoke test', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle('Paulina Puppers');
	await expect(page.getByRole('heading', { name: 'Paulina Puppers', level: 1 })).toBeVisible();
});
