const tasksWrapper = document.querySelector('.tasks__wrapper');
let tasks = tasksWrapper.querySelectorAll('.task');
const newTaskItem = document.querySelector('.add-task')
const newTaskInput = document.querySelector('.add-task__input');
const newtaskPlaceholder = document.querySelector('.add-task__placeholder')
const concludeButton = document.querySelector('.tasks__conclude');
const cleanButton = document.querySelector('.tasks__clean');
let tasksLimit = 10;

newTaskInput.addEventListener('keydown', addTask);
newTaskInput.addEventListener('blur', cancelNewTask)
newTaskItem.addEventListener('click', beginNewTask)
concludeButton.addEventListener('click', concludeTasks)
cleanButton.addEventListener('click', cleanTasks)

function updateTaskList(){
    tasks = tasksWrapper.querySelectorAll('.task');
}

function beginNewTask(){
    newtaskPlaceholder.innerText = '';
    newTaskInput.focus();
}

function cancelNewTask(){
    newtaskPlaceholder.innerText = 'insira uma nova task...';
}

function addTask(event) {
    let text = newTaskInput.innerText;
    let tasksCounter = tasksWrapper.childElementCount;
    newTaskInput.focus();

    if(event.key == 'Enter'){
        event.preventDefault();
        if(text == ''){
            window.alert("a nova task não pode estar vazia");
            return;
        }else if(tasksCounter > tasksLimit){
            window.alert('numero máximo de tasks alcançado');
            newTaskInput.innerText = '';
            newTaskItem.style.display = 'none';
            return;
        } else {
            console.log(text);
            newTaskItem.insertAdjacentHTML('beforebegin',`<li class="task unchecked"><i><i class="ph ph-square task-icon"></i></i><p>${text}</p></li>`);
            newTaskInput.innerText = '';

            updateTaskList(); //update NodeList to include the new task
            let last = (tasks[tasks.length-1]);
            last.addEventListener('click',() => changeTaskState(last)); // create event listener to allow state change 
        }
    }
}

function changeTaskState(task){
    let checked = task.classList.contains('checked');
    let icon = task.querySelector('.task-icon');
    if(checked){ //if task item is checked
        task.classList.remove('checked');
        task.classList.add('unchecked');
        icon.classList.remove('ph-check-square');
        icon.classList.add('ph-square');
    } else {
        task.classList.remove('unchecked');
        task.classList.add('checked');
        icon.classList.remove('ph-square');
        icon.classList.add('ph-check-square')
    }
    console.log(task.classList);
}

function concludeTasks(){
    tasks.forEach((task) => {
        let icon = task.querySelector('.task-icon');
        if(task.classList.contains('checked')){
            return;
        } else {
            task.classList.remove('unchecked');
            task.classList.add('checked');
            icon.classList.remove('ph-square');
            icon.classList.add('ph-check-square')
        }
    });
}

function cleanTasks(){
    tasks.forEach((task) => task.remove());
    newTaskItem.style.display = 'flex';
    updateTaskList();
}