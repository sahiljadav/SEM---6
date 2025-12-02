//Demonstrate the Array and Object Destructuring.

const colors = ["red", "green", "blue"];

const [first, second, third] = colors;

console.log(first);  
console.log(second); 
console.log(third);  

const person = {
  name: "sahil",
  age: 19,
};

const { name, age } = person;
console.log(name); 
console.log(age);  



