//variables
var number1=3;
var number2=6;
//redeclare possibe
console.log(number1+number2);


//redeclare not possibe / reassign is possible
let place='chennai';
place='coimbatore';

console.log(place)

//redeclare not possibe /reassign not possible
const pi= 3.14;
 pi= 35;

console.log(pi);

//Data Types
string,numbers,boolean,null,undefined,symbol,object;

//function
var Milk = 23;
var Biscuit = 20;
var CoffeePowder = 50;



function calculate(a,b,c) {
    var result=a+b+c;
    return result;
}

var bread = 50;
var jam = 100;
var butter = 200;

var a = 50;
var b = 100;
var c = 200;
var d = 300

console.log(calculate(Milk,Biscuit,CoffeePowder));
console.log(calculate(bread,jam,butter));

//for/if
for(var person=0; person<100; person++) {
    if(person === 5){
    console.log(person);
    }
}
