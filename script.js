document.addEventListener('DOMContentLoaded', function() {

    const taskInput = document.getElementById('new-task');  // Get the task input element
    const taskButton = document.querySelector('.btn');  // Get the 'Add Task' button
    const taskContainer = document.getElementById('task-list');  // Get the task list container (ul)

    // Function to add a new task
    function addTask() {
        const taskValue = taskInput.value;  // Get the value from the input field

        // Validate input (don't add empty tasks)
        if (taskValue === "") {
            alert("Please enter a task");
            return;
        }

        // Create a new list item (li) for the task
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${taskValue}</span> <button class="delete">Delete</button>`;

        // Mark task as complete by clicking on the task text (span)
        listItem.querySelector('span').addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        // Add delete functionality (removing the task)
        listItem.querySelector('.delete').addEventListener('click', function() {
            taskContainer.removeChild(listItem);  // Remove the list item (li) from the container (ul)
        });

        // Add the new task (li) to the task list (ul)
        taskContainer.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Add event listener to the 'Add Task' button
    taskButton.addEventListener('click', addTask);
});
