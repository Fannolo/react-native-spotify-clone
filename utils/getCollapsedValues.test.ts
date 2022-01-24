import getCollapsedValues from './getCollapsedValues';

describe('get collapsed value util', () => {
  it('should return a trimmed value with a K character if the value passed is between 1000 and 1000000', () => {
    const result = getCollapsedValues(1000);
    expect(result).toMatch('1.0K');
  });
  it('should return a value with a M character if the value passed is >= 1000000', () => {
    const result = getCollapsedValues(1000000);
    expect(result).toMatch('1.0M');
  });

  it('should return the value as it is if it does not match the conditions above', () => {
    const result = getCollapsedValues(100);
    expect(result).toMatch('100');
  });
});
