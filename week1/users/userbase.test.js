const UserBase = require('./userbase');
const User = require('./user');

describe('Userbase class', () => {
  it('Gets the count of users', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const userbase = new UserBase(users);
    expect(userbase.count()).toEqual(3);
  });
  it('Gets the names of all users', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const userbase = new UserBase(users);
    expect(userbase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ])
  });
  it('returns a introduction for each user', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const userbase = new UserBase(users);
    expect(userbase.getIntroductions()).toEqual([
      'Hi, my name is Uma',
      'Hi, my name is Josh',
      'Hi, my name is Ollie'
    ]);
  });
});


