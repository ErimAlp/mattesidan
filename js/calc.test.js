const { pqFormel } = require("./calc");
const puppeteer = require("puppeteer");

test("PQ formeln", () => {
    expect(pqFormel(8, 7)).toBe("-1, -7")
})
test("PQ formeln", () => {
    expect(pqFormel(5, 6)).toBe("-2, -3")
})
test("PQ formeln", () => {
    expect(pqFormel(8, 16)).toBe("-4, -4")
})
test("PQ formeln", () => {
    expect(pqFormel(4, -3)).toBe("0.6457513110645907, -4.645751311064591")
})
test("PQ formeln", () => {
    expect(pqFormel(3, 2)).toBe("-1, -2")
})

test("Vad som ska göras", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 70,
      args: ["--window-size=1920, 1080"]
    });
  
    const page = await browser.newPage();
    await page.goto(
    "file:///C:/Users/alp.bayramoglu/Desktop/Webb%20Utveckling/projekt_webbhistoria-master/mattesidan/index.html"
    );
  // Här skriver du vad som ska göras på sidan
await page.click("#p");
await page.type("#p", "3");
await page.click("#q",);
await page.type("#q", "2");
await page.click("#submit");
const final_result = await page.$eval("#svar1" , el => el.textContent);
await expect(final_result).toBe("-1")

  });
  