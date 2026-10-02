const todo = document.getElementById('todo');
const progress = document.getElementById('progress');
const done = document.getElementById('done');


const tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    task.addEventListener('drag', (e) => {
        console.log('dragging', e)
    })
})

progress.addEventListener('dragenter', (e) => {

})