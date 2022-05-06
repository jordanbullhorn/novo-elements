import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../../../../utils/playwright-dev-page';

test('enable-disable-all-fields-in-form component should match snapshot', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.setDateTime('January 01 2022 00:00:00');
  await page.goto('http://localhost:4200/examples?componentName=enable-disable-all-fields-in-form', { waitUntil: 'networkidle' });
  expect(await page.screenshot({animations: "disabled"})).toMatchSnapshot();
});
