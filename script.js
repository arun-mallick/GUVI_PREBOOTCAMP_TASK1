/* 1- Declare four variables without assigning values and print them in console */
var a;
var b;
var c;
var d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

/* 2- How to get value of the variable myvar as output */
var myvar= 1;
console.log("myvar"+myvar);

/* 3- Declare variables to store your first name, last name, marital status, country and age in multiple lines */
var fName = "Arun";
var lName = "Mallick";
var maritalStatus = "Unmarried";
var country = "India";
var age = "26";
var str = fName +"\n"+lName+"\n"+maritalStatus+"\n"+country+"\n"+age;
console.log(str);

/* 4- Declare variables to store your first name, last name, marital status, country and age in a single line */
var fName = "Arun", lName = "Mallick", maritalStatus = "Unmarried", country = "India", age = "26";
var str = fName +" "+lName+" "+maritalStatus+" "+country+" "+age;
console.log(str);

/* 5- Declare variables and assign string, boolean, undefined and null data types */
var str  = "Hello";
var bool = true;
var und = undefined;
var n = null;

/* 6- Convert the string to integer */
var str = "10";
var n1 = parseInt(str); 
var n2 = (+str);
var n3 = Number(str);

/* 7- Write 6 statement which provide truthy & falsey values */
function logTruthiness (val) {
    if (val) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.");
    }
}

// Outputs: "Truthy!"
logTruthiness(true);

// Outputs: "Truthy!"
logTruthiness({});

// Outputs: "Truthy!"
logTruthiness([]);

// Outputs: "Truthy!"
logTruthiness("some string");

// Outputs: "Truthy!"
logTruthiness(3.14);

// Outputs: "Truthy!"
logTruthiness(new Date());