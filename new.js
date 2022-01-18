"use strict";
// function User(name) {
//   this.name = name;

//   return 12;
// }
function User(name) {
  this.name = name;

  return [2, 4, 6];
}
function fakeNew(construct, ...rest) {
  const _obj = {}; // 1
  _obj.__proto__ = construct.prototype; // 2
  const returnedValue = construct.apply(_obj, rest); // 3
  if (typeof returnedValue === "object") {
    return returnedValue;
  } // 4
  return _obj;
}

const user = new User("Anna");
const user1 = fakeNew(User, "Anna");
console.log(user);
console.log(user1);
