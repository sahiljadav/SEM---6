//demonstrate the difference between let and war

function demo() {
    console.log("1. SCOPE");
    if (true) {
        var v = "I am VAR";
        let l = "I am LET";
    }
    console.log(v);  


    console.log("2. REDECLARATION");
    var v1 = 10;
    var v1 = 20; 
    console.log(v1);

    let l1 = 10;
   

    console.log("3. HOISTING");
    console.log(a); 
    var a = 50;

 
    let b = 60;
}

demo();
