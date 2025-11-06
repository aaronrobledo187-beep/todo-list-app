console.log("Script started"); 

function addtask(event){
    // Get user input form
    let textbook = document.getElementById("task-input");
    let task = texbox.value;
    console.log(task);
    // Create a list item
    
    let todoList = document.getElementById("todo-list");
    // create list-item div
    let listDiv = document.createElement("div");
     listDiv.id = "task" + todoList.childElementCount;
     listDiv.classList.add("list-item");
     

    // create checkbox
      let checkbox = document.createElement("input");
      checkbox.type ="checkbox";
      checkbox.id = "checkbox" + todoList.childElementCount;
      checkbox.addEventListener("change" , removeTask);
    // create label
    let label = document.createElement("label");
    label.id = "label" + todoList.childElementCount;
    label.innerText = task;
    
    // apend checkbox to list=item div
    listDiv.appendChild(checkbox);

    // ppend label to div 
    listDiv.appendChild(label);
    // append list-item div to the list
    todolist.appendChild(listDiv); 
}    
function removeTask(event){
    //Get id of checkbox
     let checkbox = event.target.id; // e.g checkbox10
    
     // Get id number from the checkbox id
      let idnum = checkboxId.substrings(8);
      
     //Get task div by id
     let taskDiv = document.getElementById("task +idnum");

     //Apply animation
     taskDiv.classList.add("remove-task");

    //remove the task div from layout
     setTimeout(function(){
       taskDiv.remove();
     },1000);
    
}