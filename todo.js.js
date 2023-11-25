const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    if (taskInput.value == "") {
        alert("Please enter a task");
    } else {
        // Create a container for the task
        let taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        // Create a new list item
        let newTask = document.createElement("li");
        newTask.textContent = taskInput.value;

        // Create a delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteButton"); // Add the deleteButton class
        deleteButton.addEventListener("click", function () {
            taskContainer.remove();
        });

        // Append the delete button and task content to the container
        taskContainer.appendChild(newTask);
        taskContainer.appendChild(deleteButton);

        // Append the task container to the task list
        taskList.appendChild(taskContainer);

        // Clear the input field
        taskInput.value = "";
    }
}
