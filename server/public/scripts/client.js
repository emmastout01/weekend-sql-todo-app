$(document).ready(onReady);

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
    getTodos();

    $('#add-todo-button').on('click', addTodo);
}

function getTodos() {
    $.ajax({
        method: 'GET',
        url: '/todo'
    }).then(response => {
        renderTodos(response);
    }).catch(err => {
        console.log('Error with get todos: ', err);
    });
}

function addTodo() {
    const newTodo = {
        name: $('#todo-input').val(),
        complete: false
    };

    $.ajax({
        method: 'POST',
        url: '/todo',
        data: newTodo
    }).then(response => {
        getTodos();
    }).catch(err => {
        console.log('Error with add todo: ', err);
    });
}

function renderTodos(todos) {
    console.log({todos});
    for (todo of todos) {
        $('#todo-table-body').append(`
        <tr data-id="{${todo.id}}">
            <td>${todo.complete}</td>
            <td>${todo.name}</td>
            <td><button id="complete-todo-button">Complete</button></td>
            <td><button id="delete-todo-button">Delete</button></td>
        </tr>
    `);
    }
}