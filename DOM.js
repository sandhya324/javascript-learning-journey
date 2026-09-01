
// ------------------------- SELECTORS ---------------------------
// There are several ways to get elements from the DOM:

// 1. getElementById: This method returns the element that has the ID attribute with the specified value.

const title = document.getElementById("title");
title.textContent = "Hello World!"




// 2. getElementsByClassName: This method returns a collection of all elements in the document
//  with the specified class name.

let message = document.getElementsByClassName("message");
message[0].textContent = "Hello World!";
message[1].textContent = "Welcome to JavaScript!";





// 3. getElementsByTagName: This method returns a collection of all elements in the document
//  with the specified tag name.  

let paragraphs = document.getElementsByTagName("p");
paragraphs[0].textContent = "This is the first paragraph.";
paragraphs[1].textContent = "This is the second paragraph.";    





// 4. querySelector: This method returns the first element that matches a specified CSS selector(s)
//  in the document.
let heading = document.querySelector("#title");       //Because # means ID in CSS.
heading.textContent = "Hey there!";


let heading = document.querySelector(".heading");  //For class, we use . in CSS.
heading.textContent = "This is a heading!";






// 5. querySelectorAll: This method returns a static NodeList of all elements that match a specified
// CSS selector(s) in the document.

let messages = document.querySelectorAll(".message");
messages[0].textContent = "One";
messages[1].textContent = "Two";
messages[2].textContent = "Three";





// 6. parentElement: This property returns the parent element of the specified element.

// 7. children: This property returns a live HTMLCollection of the child elements of the specified element.

// 8. nextElementSibling: This property returns the next sibling element of the specified element.