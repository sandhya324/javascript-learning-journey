
// ------------------------- SELECTORS ---------------------------
// There are several ways to get elements from the DOM:

// 1. getElementById: This method returns the element that has the ID attribute with the specified value.

// const title = document.getElementById("title");
// title.textContent = "Hello World!"




// 2. getElementsByClassName: This method returns a collection of all elements in the document
//  with the specified class name.

// let message = document.getElementsByClassName("message");
// message[0].textContent = "Hello World!";
// message[1].textContent = "Welcome to JavaScript!";







// 3. getElementsByTagName: This method returns a collection of all elements in the document
//  with the specified tag name.  

// let paragraphs = document.getElementsByTagName("p");
// paragraphs[0].textContent = "This is the first paragraph.";
// paragraphs[1].textContent = "This is the second paragraph.";    





// 4. querySelector: This method returns the first element that matches a specified CSS selector(s)
//  in the document.
// let heading = document.querySelector("#title");       //Because # means ID in CSS.
// heading.textContent = "Hey there!";

// heading.style.color = "blue";


// let heading = document.querySelector(".heading");  //For class, we use . in CSS.
// heading.textContent = "This is a heading!";






// 5. querySelectorAll: This method returns a static NodeList of all elements that match a specified
// CSS selector(s) in the document.

// let messages = document.querySelectorAll(".message");
// messages[0].textContent = "One";
// messages[1].textContent = "Two";
// messages[2].textContent = "Three";










// ------------------------- Events ---------------------------
//Events : An Event is something that happens in the browser, like a user clicking a button, 
// or a page loading.


// 1. addEventListener: This method attaches an event handler to the specified element.

// let button = document.getElementById("btn");

// button.addEventListener("click", function(){
//       alert("Button clicked!");
//       const text = document.getElementById("btn");
//       text.textContent = "clicked";
// })
 












// ------------------------- Form Validation ----------------------
const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(name === "" && email === "" && password === ""){
        alert("Please fill in all fields.");
        return;
    }

    if(name === ""){
        alert("Please enter your name.");
        return;
    }

    if(email === ""){
        alert("Please enter your email.");
        return;
    }

    if(password === ""){
        alert("Please enter your password.");
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters long.");
        return;
    }

    alert("Registration successful!");

})


// const test = document.getElementById("title");
// let paragraphs = document.createElement("p");
// paragraphs.textContent = "This is a new paragraph.";
// test.appendChild(paragraphs);

