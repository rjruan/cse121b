document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;
        if (taskText !== '') {
            addTask(taskText, priority);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }
    });

    function addTask(taskText, priority) {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <span class="delete">X</span>`;
        li.classList.add(priority);
        insertTaskInOrder(li);
    }

    function insertTaskInOrder(task) {
        let inserted = false;
        const taskPriority = task.classList[0];
        const tasks = taskList.children;

        for (let i = 0; i < tasks.length; i++) {
            const currentPriority = tasks[i].classList[0];
            if (currentPriority === taskPriority || currentPriority > taskPriority) {
                taskList.insertBefore(task, tasks[i]);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            taskList.appendChild(task);
        }
    }
});
