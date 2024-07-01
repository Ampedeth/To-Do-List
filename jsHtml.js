document
        .getElementById("add-task")
        .addEventListener("click", function () {
          const task = document.getElementById("new-task").value;
          if (task) {
            localStorage.setItem("newTask", task);
            window.location.href = "todo.html";
          }
        });