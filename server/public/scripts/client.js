document.ready(onReady);

/**
 * To Do:
 * - Database
 *  - Create new database and todo table
 * - Server.js
 *  - Boilerplate 
 *  - Set up todo route (kind of overkill here, but good practice)
 *  - Start with GET and POST routes
 * - Client.js
 *  - Set up click handler for 'Add todo'
 * - index.html
 *  - Set up 'Add todo' input and todo table
 * 
 */



function onReady() {
    //
}

function getTasks() {
    $.ajax({
        method: 'GET',
        url: '/tasks'
    }).then(response => {
        renderTasks(response);
    }).catch(err => {
        console.log('Error with get tasks: ', err);
    })
}

function addTask() {

}

function renderTasks(tasks) {
    
}