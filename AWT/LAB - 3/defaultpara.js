//Demonstrate the default parameter while using a function.

function greet(name = "Guest", message = "Welcome!") {
    console.log("Hello " + name + "! " + message);
}
greet();
greet("sahil");
greet("shruti", "Have a nice day!");
 