const puppeteer = require("puppeteer");

class BrowserAtomation {

  async launchBrowser() {
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
    });
    this.page = await this.browser.newPage();
  }




  async visitSite(url) {
    await this.page.goto(url);
  }






  async fillField(className, value) {
    const input = await this.page.$(className);
    await input.click({ clickCount: 2 });
    await input.type(value);
  }






  async selectToken(tokenClassText, token, text) {

    await this.page.waitForTimeout(2000);

    const input = await this.page.waitForSelector(
      `div ::-p-text(${tokenClassText})`
    );
    await input.click({ clickCount: 2 });

    await this.page.waitForTimeout(2000);

    await input.type(token);

    await this.page.waitForTimeout(2000);

    const element = await this.page.waitForSelector(`div ::-p-text(${text})`);

    await element.click();

    await this.page.waitForTimeout(2000);
  }





  async gotoRoute() {

    await this.page.waitForTimeout(2000);

    await this.page.evaluate(() =>
      document.querySelectorAll(`.sc-18d0abec-0.knYyMy.RouteWrapper`)[1].click()
    );
  }



}

module.exports = BrowserAtomation;
