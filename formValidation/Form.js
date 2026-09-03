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
