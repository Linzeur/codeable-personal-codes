//POP
//=====================================================

Array.prototype.popOwn = function() {
  var nArr = this.length - 1;
  last_element = this[nArr];
  delete this[nArr];
  this.length = nArr;
  return last_element;
};

//Every
//=====================================================

Array.prototype.everyOwn = function(callback) {
  let nArr = this.length;
  let con = 0;
  let success = true;
  while (con < nArr) {
    if (!callback(this[con])) {
      success = false;
      break;
    }
    con++;
  }
  return success;
};

// a = [undefined, NaN, 5, null];

// function Prueba(currentValue) {
//   return currentValue < 40;
// }
// console.log(a.everyOwn(Prueba));

//Some
//=====================================================

Array.prototype.someOwn = function(callback) {
  let nArr = this.length;
  let con = 0;
  let success = false;
  while (con < nArr) {
    if (callback(this[con])) {
      success = true;
      break;
    }
    con++;
  }
  return success;
};

// a = [50, 100, 3343, 0];

// function Prueba(currentValue) {
//   return currentValue < 40;
// }
// console.log(a.someOwn(Prueba));

//Find
//=====================================================

Array.prototype.findOwn = function(callback) {
  let nArr = this.length;
  let con = 0;
  let result = undefined;
  while (con < nArr) {
    if (callback(this[con])) {
      result = this[con];
      break;
    }
    con++;
  }
  return result;
};

// a = [50, 1001, 3343, 0];

// console.log(
//   a.findOwn(function(element) {
//     return element > 1000;
//   })
// );

//Join
//=====================================================

Array.prototype.joinOwn = function(character = ",") {
  let nArr = this.length;
  let str = "";
  for (let i = 0; i < nArr; i++) {
    if (i != 0) str += character;
    str += this[i];
  }
  return str;
};

// a = [50, 1001, 3343, 0];
// console.log(a.joinOwn("|"));
// console.log(a.joinOwn());
// a = [50];
// console.log(a.joinOwn());
// console.log(a.joinOwn(":"));

//OPTIONALS
//=====================================================

//For each
//=====================================================

Array.prototype.forEachOwn = function(callback) {
  let nArr = this.length;
  for (let i = 0; i < nArr; i++) {
    callback(this[i]);
  }
};

a = [1, 3, 5];
console.log(
  a.forEachOwn(function(element) {
    console.log(element);
  })
);
