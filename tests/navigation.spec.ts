import { test, expect } from '@playwright/test';

test('navigation smoke test', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle('filmio');
	await expect(page.getByRole('heading', { name: 'Upcoming Movies', level: 1 })).toBeVisible();

	await page.getByRole('link', { name: 'Contact' }).click();
	await expect(page).toHaveTitle('contact');
	await expect(page.getByRole('heading', { name: 'Find me on socials', level: 1 })).toBeVisible();
});
