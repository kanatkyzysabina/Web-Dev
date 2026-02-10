const input = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('tasks-list');
const taskForm = document.getElementById('task-form');

function createTask(taskText){
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => li.remove());

    checkbox.addEventListener('click', function(){
        span.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });


    li.appendChild(checkbox);
    li.appendChild(span)
    li.appendChild(deleteButton);
    taskList.appendChild(li); 
}

taskForm.addEventListener('submit', function(e){
    e.preventDefault();
    const taskText = input.value.trim();
    if(taskText != ''){
        createTask(taskText);
        input.value='';
    }
});





