const User = require('./user');
describe('User class', () =>{
  it('gets name', () => {
    const user = new User('Uma');
    expect(user.getName()).toBe('Uma');
  });
  it('gets introduction', () => {
    const user = new User('Uma');
    expect(user.getIntroduction()).toBe('Hi, my name is Uma');
  });
});
