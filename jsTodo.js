
// Create a new tasks by function "addTaskToList"
document.addEventListener("DOMContentLoaded", function (taskList, taskItem) {
    const newTask = localStorage.getItem("newTask");
    if (newTask) {
        addTaskToList(newTask)
        localStorage.removeItem("newTask");
    }
    });

document
    .getElementById("add-more")
    .addEventListener("click", function () {
        window.location.href = "index.html";
    });

// Function for adding new tasks
function addTaskToList (task) {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span")
    taskList.appendChild(taskItem);
    taskItem.textContent = task;

    // Button near task to delate 

    const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function () {
            taskItem.remove();
            // Code for removing the task from storage (if needed)
        });
    
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}

