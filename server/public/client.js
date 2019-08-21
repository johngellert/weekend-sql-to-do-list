$(document).ready(readyNow);

function readyNow() {
    $('#add-task').on('click', handleClickAddTask);
    $('#todo-list').on('click', '.complete-button', handleClickCompleteTask);
    $('#todo-list').on('click', '.delete-button', handleClickDeleteTask);
    getTodoList();
}

function getTodoList() {
    $.ajax({
        method: 'GET',
        url: '/tasks'
    }).then((response) => {
        $('#todo-list').empty();
        response.forEach(task => {
            
            if (task.priority === 'Urgent, important') {
                $('#todo-list').append(`
                    <tr id="row-ui"> 
                        <td>${task.task}</td>
                        <td>${task.priority}</td>
                        <td><button class="delete-button" data-id="${task.id}">Delete</button></td>
                    </tr>
                `);

            }
            else if (task.priority === 'Not urgent, important') {
                $('#todo-list').append(`
                <tr id="row-nui"> 
                    <td>${task.task}</td>
                    <td>${task.priority}</td>
                    <td><button class="delete-button" data-id="${task.id}">Delete</button></td>
                </tr>
                `);
            }
            else if (task.priority === 'Urgent, not important') {
                $('#todo-list').append(`
                <tr id="row-uni"> 
                    <td>${task.task}</td>
                    <td>${task.priority}</td>
                    <td><button class="delete-button" data-id="${task.id}">Delete</button></td>
                </tr>
                `);
            }
            else if (task.priority === 'Not urgent, not important') {
                $('#todo-list').append(`
                <tr id="row-nuni"> 
                    <td>${task.task}</td>
                    <td>${task.priority}</td>
                    <td><button class="delete-button" data-id="${task.id}">Delete</button></td>
                </tr>
                `);
            }
        });
    });
}

function handleClickAddTask() {
    const newTask = {
        task: $('#task').val(),
        priority: $('#priority').val()
    }

    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: newTask
    }).then(() => {
        getTodoList();
    });
}

function handleClickCompleteTask(value) {
    const id = ($(this).data().id);

    $.ajax({
        method: 'PUT',
        url: `/tasks/${id}`,
        data: value
    }).then(() => {
        getTodoList();
    });
}

function handleClickDeleteTask() {
    const result = confirm(" Are you sure you want to delete this task?")
    if (result) {
        const id = ($(this).data().id);
        $.ajax({
            method: 'DELETE',
            url: `/tasks/${id}`
        }).then(() => {
            getTodoList();
        });
    }
}