let tasks = [];

document.getElementById('taskName').value = '';
 document.getElementById('dueDate').value = '';

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        list.innerHTML += `<li>${tasks[i]}</li>`;
    }
}

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
    } else {
        tasks.push(task);
        input.value = "";
        showTasks();
    }
}


function clearTask() {
    tasks = [];
    showTasks();
    deleteBtn.addEventListener("click", () => {
      // The button's parent is the list item, so we remove the parent
      listItem.remove();
    }); 
}    


document.getElementById("addBtn").addEventListener("click", addTask);