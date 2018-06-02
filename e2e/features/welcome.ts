import { Given, TableDefinition, Then, When } from 'cucumber';
import { transformDataTableToArray } from '../utils/utils';
import { expect } from '../utils/chai-imports';
import { WelcomPage } from '../page-objects/welcome.po';


const welcomPage = new WelcomPage();

Given('A users opens the welcome page', () => {
  /* ... */
  return welcomPage.navigateTo();
});

Then('He should see all the awesomeness this boilerplate has to offer', async (table: TableDefinition) => {

  const tableRows = transformDataTableToArray(table);

  await expect(welcomPage.allBoilerplateFeatures.count()).to.eventually.equal(tableRows.length);

  for (let i = 0; i < tableRows.length; i++) {
    await expect(welcomPage.getBoilerplateFeatureText(i))
      .to.eventually.equal(tableRows[i].featureText);
  }
});

