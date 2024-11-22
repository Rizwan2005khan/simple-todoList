let todoList = [];

function addTask() {
    let taskInput = document.getElementById('task-input').value
    if (taskInput) {
        todoList.push(taskInput); 
        document.getElementById('task-input').value = ''; 
        updateList(); 
    } else {
        alert('Please enter a task'); 
    }
}

function updateList() {
    let taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    todoList.forEach((task, index) => {
        let li = document.createElement('li');
        li.textContent = task;

        let removeButton = document.createElement('button');
        removeButton.textContent = '❌';
        removeButton.style.fontSize = '8px';
        removeButton.addEventListener('click', () => removeTask(index)); 
        li.appendChild(removeButton);

        taskList.appendChild(li);
    });
}

function removeTask(index) {
    todoList.splice(index, 1); 
    updateList(); 
}

document.getElementById('add-button').addEventListener('click', addTask);
