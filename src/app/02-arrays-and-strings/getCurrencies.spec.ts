import {getCurrencies} from './getCurrencies';

describe('getCurrencies', () => {
  it('should return an array containing the right currencies',  () => {
    let result = getCurrencies();

    expect(result).toContain('EUR');
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
  });
});
