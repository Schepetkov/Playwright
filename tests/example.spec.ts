import { test, expect } from "@playwright/test";

test("screenshot bug", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  //await page.locator(".toggle_vylO.colorModeToggle_DEke").click();
  await expect(page).toHaveScreenshot({ timeout: 10000 });
});
