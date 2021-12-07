const puppeteer = require("puppeteer");
var browser;
var pages;
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });

  pages = await browser.newPage();
  await pages.goto("http://localhost:3000");
});

it("it test our app component", async () => {
  let userText = await pages.evaluate(
    () => document.querySelector("h1").innerText
  );
  expect(userText).toEqual("Welcome to Login Page MR anshu");
});

it("it is test case to go to home page", async () => {
  await pages.evaluate(() => document.querySelectorAll("button")[3].click());
  let activeTabText = await pages.evaluate(
    () => document.querySelector(".active-tabs").innerText
  );

  expect(activeTabText).toEqual("Movies");
});

afterAll(async () => {
  await browser.close();
});
