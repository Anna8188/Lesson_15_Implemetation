"use strict";
Function.prototype.customCall = function customCall(self, ...rest) {
  self._function = this;
  return self._function(...rest);
};

function f(arg1, arg2, arg3) {
  console.log(this["first name"]);
  console.log(this["last name"]);
}
const user = {
  "first name": "Anna",
  "last name": "Sargsyan",
};
f.call(user, 1, 2, 3);
f.customCall(user, 1, 2, 3);
