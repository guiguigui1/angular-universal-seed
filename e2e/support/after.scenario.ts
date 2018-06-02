import { After, HookScenarioResult, Status } from 'cucumber';
import { browser } from 'protractor';

After(async function(scenario) {

  // take screenshot when scenario fails
  if (scenario.result.status === Status.FAILED) {
    // screenShot is a base-64 encoded PNG
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, 'image/png');
  }
});
