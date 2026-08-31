// Regular Function: Functions are resuable block of code that perform a specific task

//Arrow Function :  Arrow function is introduced by ES6 , offering shorter syntax and simpler this handling, Regular function and arrow function are differ in behaviour , syntax and usage.



// function greet(){     //Regular Function 
//    alert("Hello !");   
// }
// greet();


// const greet = ()=>{    //Arrow Function
//     alert("Hello !");
// }
// greet();


// console.log("test")


// const add =(a,b)=>{
//     // console.log(a+b)
//     return a+b
// }


// console.log(add(7,6))


// for(i=1; i<=100; i++){

//     if(i==50){
//         continue;
//     }

//     console.log(i);

//     if(i==55){
//         break;
//     }
// }








// array

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// for(i=0; i<array.length; i++){
//     console.log(array[i]);
// }
// console.log(array.length)
// console.log(array[10]);

// console.log(array.slice(15,20));  //slice(startIndex, endIndex)  //endIndex is not included in the output   

array.push(21);  //add element at the end of the array
console.log(array);

array.push(22)
array.unshift(54);  //add element at the start of the array
console.log(array);

array.pop();  //remove element from the end of the array
console.log(array);

array.shift();  //remove element from the start of the array
console.log(array);

array.splice(5,3);  //remove element from the middle of the array
console.log(array);





// Objects 

// const notebook = {
//     brand: "HP",
//     model: "Pavilion",  
//     color: "Silver"
// };

// console.log(notebook.brand);
// console.log(notebook.model);
// console.log(notebook.color);







// Array of Objects

const notebooks = [
    {brand: "HP", model: "Pavilion", color: "Black"},
    {brand: "Dell", model: "Inspiron", color: "Black"},
    {brand: "Apple", model: "MacBook Pro", color: "Space Gray"},
]

console.log(notebooks[0].color);
console.log(notebooks[1].color);
console.log(notebooks[2].brand);

console.log(notebooks.length); //number of objects present in array

console.log(notebooks[0]); //Access an Object by its index

console.log(notebooks[2].brand); //Access property inside an object

// map() - create an array from property ***
console.log(notebooks.map(notebook => notebook.brand));

//filter() - select objects based on properties 
console.log(notebooks.filter(notebook => notebook.color ==  "Black"));

//find() - find the first matching object 
console.log(notebooks.find(notebook => notebook.brand == "HP"));


//Foreach loop though objects 
notebooks.forEach(notebook => {
    console.log(notebook.brand);
})

//Check at least 1 object is same 
console.log(notebooks.some(notebook => notebook.color == "Black"));

//Check weather all objects are same 
console.log(notebooks.every(notebook => notebook.color == "Black"));






// Object Methods 

// 1 - Object.keys() — returns an array of property names
console.log(Object.keys(notebooks));

// 2 - Object.values() — returns an array of property values
console.log(Object.values(notebooks));

// 3 - Object.entries() — returns key-value pairs
console.log(Object.entries(notebooks));

//4 - Object.assign - copy properties of one or more object
const newNotebooks = Object.assign({}, notebooks);
console.log(newNotebooks);

// 5 - Object.hasOwn() - checks if object has it's own property 
console.log(Object.hasOwn(notebooks, "brand"));

// 6 - Object.freeze() — prevents changing, adding, or deleting properties
console.log(Object.freeze(notebooks));