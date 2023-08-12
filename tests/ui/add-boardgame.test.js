const { test, expect } = require("@playwright/test");

test("Check add boardgame page", async ({ page }) => {
  await page.goto(
    "http://localhost:8080/add-boardgame" ||
      "https://kainbg-boardgames.onrender.com"
  );
  const form = await page.$("form");
  expect(form).toBeTruthy();
});
