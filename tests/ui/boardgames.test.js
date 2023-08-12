const { test, expect } = require("@playwright/test");

test("Check boardgames page", async ({ page }) => {
  await page.goto(
    "http://localhost:8080/boardgames" ||
      "https://kainbg-boardgames.onrender.com"
  );
  const list = await page.$("ul");
  expect(list).toBeTruthy();
});
