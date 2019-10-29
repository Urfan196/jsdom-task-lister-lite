  const todoForm = document.querySelector("#create-task-form")

  todoForm.addEventListener("submit", function(event) {
     event.preventDefault();

    const userInputField = event.target.querySelector("#new-task-description")
    
    const taskList = document.querySelector("#tasks");
    const newTask = document.createElement("p");
    newTask.textContent = userInputField.value;
    taskList.appendChild(newTask);
    
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.classList.add("button")
    newTask.appendChild(deleteButton)
  })
 
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("button"))
    event.target.parentElement.remove()
  })