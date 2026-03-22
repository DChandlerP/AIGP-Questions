import { test, expect } from '@playwright/test';

test('completes the entire quiz successfully', async ({ page }) => {
  // Give the test 5 minutes to complete all 100+ questions
  test.setTimeout(300000);

  // Navigate to the app (Playwright will wait for Vite to be ready)
  await page.goto('/');

  // 1. Start Screen
  await expect(page.locator('text=AIGP Practice Quiz')).toBeVisible();
  await page.click('button#start-btn');

  // 2. Play through the *entire* quiz
  // We loop dynamically until the "Quiz Complete!" screen appears
  while (true) {
    // Wait for EITHER the next question's options to appear, OR the completion screen
    const nextStep = await Promise.race([
      page.locator('.option-btn').first().waitFor({ state: 'visible', timeout: 5000 }).then(() => 'question'),
      page.locator('text=Quiz Complete!').waitFor({ state: 'visible', timeout: 5000 }).then(() => 'done')
    ]).catch(() => 'timeout');

    if (nextStep === 'done') {
      break;
    }

    // Click the first option (force click because of CSS fade-in animations)
    await page.locator('.option-btn').first().click({ force: true });

    // Verify feedback appears visually
    await expect(page.locator('#feedback-container')).toBeVisible();

    // Click Next
    await page.click('button#next-btn');
  }

  // 3. Verify Results Screen
  await expect(page.locator('text=Quiz Complete!')).toBeVisible();
  
  // Verify the restart button exists and functions
  const restartBtn = page.locator('button#restart-btn');
  await expect(restartBtn).toBeVisible();
  await restartBtn.click();
  
  // Verify we are back at the start screen
  await expect(page.locator('button#start-btn')).toBeVisible();
});
