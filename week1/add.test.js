const add = require('./add');

describe('add', () => {
  it ('add 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });
  it ('add 4 and 4', () => {
    expect(add(4, 4)).toBe(8);
  });
});


