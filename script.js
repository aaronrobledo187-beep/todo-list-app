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