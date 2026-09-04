// const todolist = document.getElementById("todolist");


// todolist = addEventListener("submit", function(event){
//     event.defaultPrevented();

//     // let task = document.getElementById("task").value;

//     let input = document.getElementById("task").value;
//     let addTask = document.getElementById("add").value;
//     let list = document.getElementById("list");

//     // if(!task){
//     //    let addTask = document.createElement("input");
//     // }

//     if(!input){
//         let li = document.createElement("li");
//         list.appendChild(li);
//     }

// })



    let input = document.getElementById("task")
    let addTask = document.getElementById("add").value;
    let list = document.getElementById("list");

    button = addEventListener("submit", function(event){

        event.preventDefault();

        let value = input.value.trim();

        if(value == ""){
            alert("Please enter your task ");
            return;
        }

        let li = document.createElement("li");
        
        li.textContent = value;
        list.appendChild(li);

        input.value = "";

        let doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.type = "button";

        doneBtn.addEventListener("click", function(){
           if( li.style.textDecoration === "line-through"){
                li.style.textDecoration = "none";
                doneBtn.textContent = "Done";
           }
           else{
                li.style.textDecoration = "line-through";
                doneBtn.textContent = "undo";
           }
        })

        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.type = "button";

        // Delete task
        deleteBtn.addEventListener("click", function(){
            //  li.style.textDecoration = "line-through";
            li.remove();
        })

        // Put button inside li
        li.appendChild(deleteBtn);
        li.appendChild(doneBtn);

    });