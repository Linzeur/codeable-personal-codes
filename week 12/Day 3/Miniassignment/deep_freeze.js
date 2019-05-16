Object.deepFreeze = function(object) {
  Object.freeze(object);
  for (let key in object) {
    if (typeof object[key] === "object") {
      Object.deepFreeze(object[key]);
    }
  }
};

//TEST

console.log("Testing example fixture");
var a = { b: [42, { x: 9 }] };
Object.deepFreeze(a);

a.b = 42;
if (JSON.stringify(a.b) === JSON.stringify([42, { x: 9 }]))
  console.log("Success 1");

a.b[1] = 42;
if (JSON.stringify(a.b[1]) === JSON.stringify({ x: 9 }))
  console.log("Success 2");

console.log("Testing Math object freeze");
var cos = Math.cos;
Object.deepFreeze(Math);
if (JSON.stringify(Math.cos) === JSON.stringify(cos)) console.log("Success 3");

console.log("Testing one level freeze on array");
var x = [1, 2, 3];
Object.deepFreeze(x);
try {
  x.push(4);
} catch (err) {}

if (JSON.stringify(x) === JSON.stringify([1, 2, 3])) console.log("Success 4");
x[3] = 4;
if (JSON.stringify(x) === JSON.stringify([1, 2, 3])) console.log("Success 5");
x.length = 1;
if (JSON.stringify(x) == JSON.stringify([1, 2, 3])) console.log("Success 6");

console.log("Testing freeze on nested array");
var x = [1, [2, [3, [4, [5, [6], 7], 8], 9], 10], 11];
Object.deepFreeze(x);
x[1][1][1][1][1] = NaN;
if (JSON.stringify(x[1][1][1][1][1]) === JSON.stringify([6]))
  console.log("Success 7");

console.log("Testing freeze on object with a property that's already frozen");
var x = [1, [2, [3, [4, [5, [6], 7], 8], 9], 10], 11];
Object.freeze(x[1][1]);
Object.deepFreeze(x);
x[1][1][1][1][1] = NaN;
if (JSON.stringify(x[1][1][1][1][1] === [6])) console.log("Success 8");
