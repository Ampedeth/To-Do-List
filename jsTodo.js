
// "Add More Tasks" button
document
    .getElementById("add-more")
    .addEventListener("click", function () {
        window.location.href = "index.html";
    });

// Function for adding new tasks
function addTaskToList (task, taskKey) {
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
        localStorage.removeItem(taskKey)
        taskItem.remove();
    });
    
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}

// Create a new tasks by function "addTaskToList"
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < localStorage.length; i++) {
        const taskKey = localStorage.key(i);
        if (taskKey.startsWith('task_')) {
            const task = localStorage.getItem(taskKey);
            addTaskToList(task, taskKey)  
        }
        };
    })

        




// Navigator button

const htmlBtn = document.getElementById("html-button").addEventListener("click", () => { 
  window.location.href = "index.html"
})

