const User = require('./user');

class UserBase {
  constructor(users) {
    this.users = users;
  }
  count() {
    return this.users.length;
  }
  getNames() {
    return this.users.map(user => {
      return user.getName();
    });
  };
  getIntroductions() {
    return this.users.map(user => {
      return `Hi, my name is ${user.getName()}`;
    });
  };
};


module.exports = UserBase;


