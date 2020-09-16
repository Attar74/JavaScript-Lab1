/*************///external.js File///************/

/***Qustion number 1****/
/*** a ***/
console.log("%cQuestion 3 a: when i tried to print firstName before the line of the variable definition i got an ","color:blue",firstName); //undefined

/*** b ***/
console.log("%cQuestion 3 b:  if i defined the firstName with var i got an undefined too","color:blue"); //undefined


/***Qustion number 1****/
 console.log('%cAnswers of Question 1','color:red; background: yellow');
/*** a ***/
var number1 = 3;
var number2 = 2.9;
var number3 = 90;

/*** b ***/
var firstName = "Mahmoud";
var lastName = "Hamdy";

/*** c ***/
console.log('c-',"This is the External JavaScript file");


/***Qustion number 3****/
/*** d ***/
console.log("%cQuestion 3 d","color:blue","first name is ",firstName);
var updatedFName = firstName.replace(firstName.charAt(3), 'A');
console.log("Updated first name after replacing third char with 'A' is ", updatedFName);
