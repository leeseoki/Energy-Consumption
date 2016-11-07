import { EnergyConsumptionPage } from './app.po';

describe('energy-consumption App', function() {
  let page: EnergyConsumptionPage;

  beforeEach(() => {
    page = new EnergyConsumptionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
