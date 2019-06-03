$(document).ready(readyNow);

function readyNow() {
    $('#add-task').on('click', handleClickAddTask);
    $('#todo-list').on('click', '.complete-button', handleClickCompleteTask);
    getTodoList();
}

function getTodoList() {
    $.ajax({
        method: 'GET',
        url: '/tasks'
    }).then((response) => {
        $('#todo-list').empty();
        response.forEach(task => {
            if (task.is_complete === true) {
                $('#todo-list').append(`
                    <tr class"task-complete">
                        <td>${task.task}</td>
                        <td>${task.priority}</td>
                    </tr>
                `);
            }
            else {
                $('#todo-list').append(`
                    <tr>
                        <td>${task.task}</td>
                        <td>${task.priority}</td>
                        <td><button class="complete-button" data-id="${task.id}">Complete</button></td>
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

function handleClickCompleteTask() {
    const id = ($(this).data().id);

    $.ajax({
        method: 'PUT',
        url: `/tasks/${id}`
    }).then(() => {
        getTodoList();
    });
}