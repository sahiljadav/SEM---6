// WAP TO DEMONSTRATE CALLBACKS IN JAVASCRIPT
function greet(name, callback) {
    console.log("Hello " + name);
    callback();     

function sayBye() {
    console.log("Goodbye!");
}

greet("sahil", sayBye);

}


