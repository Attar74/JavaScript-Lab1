/***Qustion number 4****/

/*a*/
function summation (x, y){
    return x + y;
}

/*b*/
function fullName (fName = " ", sName = " ", lName = " "){
    fName = prompt('enter ur frist name');
    sName = prompt('enter ur second name');
    lName = prompt('enter ur last name');
    return fName+" " + sName+ " " +lName;
}

/*c*/
function factorial(number){
     if(number > 1)
        return number * factorial(number - 1);
    else
        return 1
}
function factorial2 (n){
    var sum = 1;
     for(var i = 1; i <= n ; i++){
         sum *= i;
     }
    return sum;
}

/*d*/
function calculator (n1, n2, op){
    switch(op){
        case "+":
            return n1+n2;
            break;
        case "-":
            return n1-n2;
            break;
        case "*":
            return n1*n2;
            break;
        case "/":
            if(n2 == 0)return "can't divide by zero";
            else return n1/n2;
            break;
        default:
            return "wrong sign operator";
    }
}

/*e*/
function degree (d){
    if(d >= 85 && d <= 100) return "Excellent";
    else if (d >= 75 && d < 85) return "VGood";
    else if(d >= 65 && d < 75) return "good";
    else if(d >= 50 && d < 65) return "Fair";
    else if(d < 50) return "Fail";
    else return "please enter a correct degree";
}


/*f*/
function summation2 (x = 0, y = 0){
    x = prompt('enter x');
    y = prompt('enter y');
        
    let sum = parseInt(x) + parseInt(y);
    console.log("f- ",sum);
}

/*g*/
let gVal = 100;
function test(){
    gVal = 50;
    console.log("g- ",gVal);
}
//console.log(gVal);

/*h*/
function myFunction(str) {
    for(var i = 0 ; i < str.length; i++){
        console.log(str.charCodeAt(i));
    }
}