const todo = document.getElementById('todo');
const progress = document.getElementById('progress');
const done = document.getElementById('done');
let dragElement = null;

let tasksData = {};

// Helper: update all column counters
function updateCounters() {
    [todo, progress, done].forEach(col => {
        const tasks = col.querySelectorAll('.task');
        const count = col.querySelector('.right');
        count.innerText = tasks.length;
    });
}

// Helper: save all tasks to localStorage
function saveTasks() {
    [todo, progress, done].forEach(col => {
        const tasks = col.querySelectorAll('.task');
        tasksData[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector('h2').textContent,
                description: t.querySelector('p').textContent,
            };
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasksData));
}

// Helper: create a task element and wire up its events
function createTaskElement(title, description, parentColumn) {
    const div = document.createElement('div');
    div.setAttribute('draggable', true);
    div.classList.add('task');

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const p = document.createElement('p');
    p.textContent = description;

    const button = document.createElement('button');
    button.textContent = 'Delete';

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(button);

    parentColumn.appendChild(div);

    // Drag event so the board knows which element is being dragged
    div.addEventListener('drag', () => {
        dragElement = div;
    });

    // Delete button
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        div.remove();
        updateCounters();
        saveTasks();
    });

    return div;
}

// Load tasks from localStorage on page load
if (localStorage.getItem('tasks')) {
    const data = JSON.parse(localStorage.getItem('tasks'));

    for (const col in data) {
        const colElement = document.getElementById(col);
        if (!colElement) continue;

        data[col].forEach(task => {
            createTaskElement(task.title, task.description, colElement);
        });
    }
}

// Update counters after initial load
updateCounters();

// Add drag-and-drop events to each column
function addDragEvents(column) {
    column.addEventListener('dragenter', (e) => {
        e.preventDefault();
        column.classList.add('hover-over');
    });
    column.addEventListener('dragleave', (e) => {
        e.preventDefault();
        column.classList.remove('hover-over');
    });

    column.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    column.addEventListener('drop', (e) => {
        e.preventDefault();
        column.appendChild(dragElement);
        column.classList.remove('hover-over');
        updateCounters();
        saveTasks();
    });
}

addDragEvents(todo);
addDragEvents(progress);
addDragEvents(done);


/* Modal related logic */

const toggle = document.getElementById('toggle-modal');
const modalBg = document.querySelector('.modal .bg');
const modal = document.querySelector('.modal');
const addTaskBtn = document.getElementById('add-new-task');

toggle.addEventListener('click', () => {
    modal.classList.toggle('active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('active');
});

addTaskBtn.addEventListener('click', () => {
    const taskTitleInput = document.querySelector('#task-title');
    const taskDescInput = document.querySelector('#task-description');
    const taskInput = taskTitleInput.value.trim();
    const descriptionInput = taskDescInput.value.trim();

    // Don't add empty tasks
    if (!taskInput) return;

    createTaskElement(taskInput, descriptionInput, todo);

    updateCounters();
    saveTasks();

    // Clear inputs
    taskTitleInput.value = '';
    taskDescInput.value = '';

    modal.classList.remove('active');
});