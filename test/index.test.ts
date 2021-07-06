import { Calculator } from '../src/index';

describe('calculate', function() {
  it('add', function() {
    const result = Calculator.sum(5, 2);
    expect(result).toBe(7);
  });

  it('subtract', () => {
    const result = Calculator.substract(5, 2);
    expect(result).toBe(3);
  });
});