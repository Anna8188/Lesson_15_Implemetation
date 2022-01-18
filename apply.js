"use strict";
Function.prototype.customApply = function customApply(self, arr) {
  self._function = this;
  return self._function(arr);
};

function f(arg1, arg2, arg3) {
  console.log(this["first name"]);
  console.log(this["last name"]);
}
const user = {
  "first name": "Anna",
  "last name": "Sargsyan",
};
f.apply(user, [1, 2, 3]);
f.customApply(user, [1, 2, 3]);
