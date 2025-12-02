//Demonstrate how to create a class in Java Script.
class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("sahil", 20);
const person2 = new Person("shruti", 19);
const person3 = new Person("ruchi", 18);


person1.introduce(); 
person2.introduce(); 
person3.introduce(); 
