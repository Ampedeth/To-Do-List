
// Button to add task
document.getElementById("add-task")
        .addEventListener("click", function () {
          const task = document.getElementById("new-task").value;
          if (task) {
            const taskKey = 'task_' + Date.now()
            localStorage.setItem(taskKey, task);
            window.location.href = "todo.html";
          }
        });


// Navigator button

const toDoBtn = document.getElementById("todo-button").addEventListener("click", () => {
  window.location.href = "todo.html"
})

