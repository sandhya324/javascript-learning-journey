// Q1.Create a function called `sayHello` that prints:  Hello JavaScript

function sayHello(){
    console.log("Hello JavaScript");
}

sayHello();






// Q2.Create a function `greetUser(name)` that prints: Hello Sandhya

function greetUser(name){
    console.log("Hello " + name);
}

greetUser("Sandhya");







// Q3.Create a function: add(a, b) that returns the sum.

function add(a, b){
    return a + b;
}

let result = add(15, 25);
console.log(result); // Output: 40










// Q4.Create a function `isEven(number)` that returns `true` if the number is even and `false` otherwise.

function isEven(number){
   if(number % 2 == 0){
       return "true";  
   }
   return "false";
}

console.log(isEven(5));











// Q5.Create a function that accepts a number and prints its multiplication table. table(5);

function table(n){
    for(let i=1; i<=10; i++){
        console.log(n + " * " + i + " = " + n*i);       
    }
}

table(5);






