require("es6-promise");

("use strict");

first()
  .then(data => second(data))
  .then(data => console.log(data));
