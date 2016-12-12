import { sum } from '../libs/math-rules';
import { expect } from 'chai';


describe('MathRules', () => {
  it('of course it does', () => {
      expect(sum(1,2,3)).to.eql(6);
  });
});
