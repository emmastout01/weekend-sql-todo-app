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
    $('#todo-table-body').on('click', '.complete-todo-button', completeTodo);
    $('#todo-table-body').on('click', '.delete-todo-button', deleteTodo);
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

function completeTodo() {
    const todoId = $(this).parent().parent().data().id;
    console.log({todoId});

    $.ajax({
        method: 'PUT',
        url: `/todo/${todoId}`
    }).then(response => {
        getTodos();
    }).catch(err => {
        console.log('Error with complete todo: ', err);
    });
}

function deleteTodo() {
    const todoId = $(this).parent().parent().data().id;

    $.ajax({
        method: 'DELETE',
        url: `/todo/${todoId}`
    }).then(response => {
        getTodos();
    }).catch(err => {
        console.log('Error with delete todo: ', err);
    });
}

function renderTodos(todos) {
    $('#todo-table-body').empty();

    for (todo of todos) {
        $('#todo-table-body').append(`
        <tr data-id="${todo.id}">
            <td>${todo.complete}</td>
            <td>${todo.name}</td>
            <td><button class="complete-todo-button">Complete</button></td>
            <td><button class="delete-todo-button">Delete</button></td>
        </tr>
    `);
    }
}