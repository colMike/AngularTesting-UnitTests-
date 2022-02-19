import {compute} from './compute'

describe('computes', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should increment input by 1 if the input is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
