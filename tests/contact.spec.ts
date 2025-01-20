import { test, expect } from '@playwright/test';

test('has links to my all socials (youtube,twitter...)', async ({ page }) => {
	await page.goto('/contact');

	await expect(page.getByRole('link', { name: 'YouTube' })).toBeVisible();
});
