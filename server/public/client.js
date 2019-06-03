$(document).ready(readyNow);

function readyNow(){
    $('#add-task').on('click', handleClickAddTask);
    $('#todo-list').on('click', '.complete-button', handleClickCompleteTask);
    handleClickAddTask();
}

function handleClickAddTask () {
    console.log("add");
    $.ajax({
        method: 'GET',
        url: '/tasks',
    }).then( (response) => {
        $('#todo-list').empty();
        response.forEach(task => {
            $('#todo-list').append(`
                <tr>
                    <td>${task.task}</td>
                    <td>${task.priority}t</td>
                    <td><button class="complete-button">Complete</button></td>
                </tr>
            `);

        });
    });
}

function handleClickCompleteTask () {
    console.log("complete");
}