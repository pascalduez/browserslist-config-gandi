const browserslist = require('browserslist');
const config = require('../');

const browsers = browserslist(config);

describe('browserslist-config-gandi', () => {
  it('should successfully resolves a list of browsers', () => {
    expect(browsers.length).toBeGreaterThan(0);
    expect(browsers).toMatchSnapshot();
  });

  afterAll(() => {
    console.log('Resolved the following browsers:\n\n', browsers.join('\n'));
  });
});
