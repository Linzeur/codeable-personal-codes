var instance;
var Singleton = function() {
  if (!instance) {
    instance = this;
  }
  return instance;
};

//TEST

var obj1 = new Singleton();
var obj2 = new Singleton();

console.log("Test if object  is singleton class instance:");
if (obj1 instanceof Singleton == "Object isn't Singleton class instance")
  console.log("Success");

console.log("Test object:");
if (obj1 === obj2) console.log("Success");

console.log("Test object static values:");
obj1.test = 10;
if ((obj1.test === obj2.test, "Values not the same")) console.log("Success");

console.log("Test object random values:");
obj2.test = Math.random();
if (obj1.test === obj2.test) console.log("Success");
