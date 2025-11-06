console.log("Script started"); 

function addtask(event){
    // Get user input form
    let textbook = document.getElementById("task-input");
    let task = texbox.value;
    console.log(task);
    // Create a list item
     
    createTaskDiv(task);


    let todoList = document.getElementById("todo-list");
    // create list-item div
    let taskDiv = document.createElement("div");
     taskDiv.id = "task" + todoList.childElementCount;
     taskDiv.classList.add("list-item");
     

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
    taskDiv.appendChild(checkbox);

    // ppend label to div 
    taskDiv.appendChild(label);
    // append list-item div to the list
    todolist.appendChild(taskDiv); 
    // save task to loal storage
    localStorage.setItem(taskDiv.id, task);

    console.log(localStorage.length);
 
}    
function createTaskDiv(TaskText){
  
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

function loadTasks() {
      console.log("loading task....")
      // Get each task from localStorage
      for(let i = 0; i < localStorage.length;++){
        let key = localStorage.key(i);
        let task = localStorage.getItem(key);
        console.log(task);
      }

      // Create task divs for each task
}

loadTasks();