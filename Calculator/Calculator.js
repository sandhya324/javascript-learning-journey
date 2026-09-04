
const calculator = document.getElementById("calculator");

calculator.addEventListener("submit", function(event){
    event.preventDefault();

    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    let operator = document.getElementById("operator").value;

    switch(operator){

        case "+" :
            // if(click){
            //     console.log("Output: " + (value1 + value2));
            //     break;   
            // }

            console.log("Output: " + (value1 + value2));
            break;
        
        case "-" : 
            console.log("Output: " + (value1 - value2));
            break;

        case "*" : 
            console.log("Output: " + (value1 * value2));
            break;
        
        case "/" : 
            console.log("Output: " + (value1 / value2));
            break;

        case "%" : 
            console.log("Output: " + (value1 % value2));
            break;

    }


    if(value1==""){
        alert("Please enter value1");
        return;
    }

    if(value2==""){
        alert("Please enter value2");
        return;
    }

    if(operator==""){
        alert("Please select operator");
        return;
    }


})