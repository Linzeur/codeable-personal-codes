class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a noise, ";
  }
}

class Cat extends Animal {
  speak() {
    return super.speak() + this.name + " goes meow.";
  }
}

//TEST

let ani = new Animal("test");

var cat = new Cat("Mr Whiskers");
if (cat.speak() == "Mr Whiskers makes a noise, Mr Whiskers goes meow.")
  console.log("Success");

cat = new Cat("mr cat");
if (cat.speak() == "mr cat makes a noise, mr cat goes meow.")
  console.log("Success");
