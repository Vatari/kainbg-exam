const { test, expect } = require("@playwright/test");

test("Check boardgames page", async ({ page }) => {
  await page.goto("http://kainbg-boardgames.onrender.com/boardgames");
  const list = await page.$("ul");
  expect(list).toBeTruthy();
});
