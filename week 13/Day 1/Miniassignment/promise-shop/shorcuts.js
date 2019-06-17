require("es6-promise");

("use strict");

var promise = Promise.reject("It doesn't works");

promise.then(data => console.log(data)).catch(error => console.log(error));
