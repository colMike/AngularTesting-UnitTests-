import {greet} from './greet';

describe('greet', () => {
  it('should return Welcome {name}', () => {
    let result = greet('Michael');
    expect(result).toContain('Michael');
  });
})
