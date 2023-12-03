import { test, expect } from "@playwright/test";
import { STORAGE_STATE_PATH } from "../playwright.config";

test("authorization", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.context().storageState({ path: STORAGE_STATE_PATH });
});
