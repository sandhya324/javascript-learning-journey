
// Class : Class is a blueprint/template for creating objects in JavaScript.Classes were introduced in ECMAScript 6 (ES6)
//  and provide a more structured way to create objects compared to the traditional object literal syntax.

// class Student {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }
// }

// let user1 = new Student ("Sandhya", 20, "A");
// console.log(user1.name); // Output: Sandhya




// Constructor: A constructor is a special method that runs automatically when an object is created.

//This keyword : The this keyword in JavaScript refers to the current object that is executing the code.









// Object: An object is the actual thing created from that blueprint. 
// object is a named function that is used to store related data in the form of key-value pairs.

// const student = {
//     name: "Sandhya",
//     age: 20,
//     grade: "A",

       // A function inside an object is called a method
//     study: function() {
//         console.log(`${this.name} is studying.`);
//     }
// }

// console.log(student.name); // Output: Sandhya
// student.study(); // Output: Sandhya is studying.





// class User {
//      constructor(name, email){
//         this.name = name;
//         this.email = email;
//      }

//      login() {
//         console.log(`${this.name} has logged in.`);
//      }
     
//      logout(){
//          console.log(`${this.name} has logged out.`);
//      }
// }

// let user1 = new User("Sandhya", "sdhya4832@gmail.com");  //Create an object

// user1.login();    //call the methods 
// user1.logout();









//Encapsulation : Encapsulation is the concept of bundling data (properties) and methods (functions) that operate on
//  that data together, such as a class. It helps in hiding the internal details of an object and exposing
//  only the necessary functionality.

// class BankAccount {
//     constructor(balance) {
//         this.balance = balance;
//     }
// }

// let account = new BankAccount(1000);
// console.log(account.balance); // Output: 1000



// We want to protect the balance.
// JavaScript provides private fields using #.

// class BankAccount {

//     #balance;

//     constructor(balance) {
//         this.#balance = balance;
//     }

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// let account = new BankAccount(5000);
// account.deposit(1000);
// console.log(account.getBalance());



// Example 2: User Access Control

// class User {
//     #password;

//     constructor(username, password){
//         this.username = username;
//         this.#password = password;
//     }

//     login(inputPassword){
//         this.#password = inputPassword;
//         console.log(`${this.username} has logged in.`);
//     }
// }

// let user1 = new User("Sandhya", "12345678");
// user1.login("12345678"); 







//Abstraction : Abstraction is the concept of hiding the complex implementation details of an object and exposing only
//  the necessary functionality to the user. It allows users to interact with an object without needing to understand
//  its internal workings.


// class Car {

//     start() {
//         this.#startEngine();
//         console.log("Car started");
//     }

//     #startEngine() {
//         console.log("Engine is starting...");
//         // complicated internal operations
//     }
// }
  
// let car = new Car();
// car.start();


// class Program {
    
//     output(){
//         this.#compiler ();
//         console.log("Your code is correct")
//     }

//     #compiler(){
//         console.log("Compiler is processing...!");
//         // complicated internal operations
//     }
// }

// let program = new Program();
// program.output();







// Inheritance : Inheritance is a mechanism that allows one class (the child or subclass) to inherit properties and 
// methods from another class (the parent or superclass). It promotes code reusability and establishes a hierarchical 
// relationship between classes.

// class Animal {

//     eat() {
//         console.log("Animal is eating");
//     }

//     sleep() {
//         console.log("Animal is sleeping");
//     }
// }

// class Dog extends Animal {

//     bark() {
//         console.log("Dog is barking");
//     }
// }


// let dog = new Dog();
// dog.eat();
// dog.sleep();
// dog.bark();

// class Vehical{
//     brand(){
//         console.log("this is brended vehical")
//     }
// }

// class Bmw extends Vehical{
//     car(){
//         console.log("is a bmw car")
//     }
// }

// let bmw = new Bmw();
// bmw.brand()




// Extend keywod : The extends keyword is used to create a child class from a parent class.
// Super keyword : super is used to access the parent class.
// Method Overriding: A child class provides its own version of a method that already exists in the parent class.





// Poly = many
// Morph = forms

// Polymorphism: Polymorphism means the same method/interface can have different behavior depending on the object.

// method overriding, where a subclass can provide a specific implementation of a method that is already defined
//  in its superclass. 

// class Animal {

//     sound() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {

//     sound() {
//         console.log("Dog barks");
//     }
// }

// class Caw extends Animal {

//     sound() {
//         console.log("Caw meows");
//     }
// }

// let dog = new Dog();
// let caw = new Caw();

// dog.sound();
// caw.sound();



// Example 2: 

// class Student{

//     Result(){
//         console.log("Student1 got 90 Marks");
//     }
// }
// class Student2 extends Student{

//     Result(){
//         console.log("Student2 got 80 Marks");
//     }
// }
// class Student3 extends Student{
//     Result(){
//         console.log("Student3 got 70 Marks");
//     }
// }

// let student2 = new Student2();  

// student2.Result();  





















// 🔐 Encapsulation in JavaScript


// 1️⃣ Public Properties


// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// let student1 = new Student("Sandhya", 24);

// console.log(student1.name);
// console.log(student1.age);




// 2️⃣ Private Fields # 


// class BankAccount {

//     #balance;

//     constructor(balance) {
//         this.#balance = balance;
//     }

//     showBalance() {
//         console.log(this.#balance);
//     }
// }

// let account = new BankAccount(5000);
// account.showBalance();


// 3️⃣ Getters

// class Student {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     get studentName() {
//         return this.name;
//     }
// }

// const student1 = new Student("Sandhya", 24);
// console.log(student1.studentName);


// 4. Setters

// class Student {

//     constructor(name) {
//         this.name = name;
//     }

//     set studentName(newName) {
   
//         this.name = newName;
//     }
// }

// const student1 = new Student("Sandhya");
// console.log(student1.name); // Output: Sandhyavz


// function add(a,b, callback){
//     console.log(a+b)
//     callback(a,b)
// }

// function sub (a,b){
//      console.log(a-b)
// }

// add(12,4,sub)

// function sayHello() {
//     console.log("Hello!");
// }

// function executeFunction(fn) {
//     fn();
// }

// executeFunction(sayHello);


// console.log(a)
// var a = 10


// sub(12,5)

// function sub (a,b){
//      console.log(a-b)
// }


// function outer() {


//     let name = "Sandhya";

//     function inner() {
//         console.log(name);
//     }

//     inner();

  
// }

// outer();

