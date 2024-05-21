function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    
    if (todoInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = todoInput.value;
        
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = function() {
            todoList.removeChild(li);
        };
        
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        todoInput.value = "";
    }
}

// The title is already contenteditable, no need for an additional function.
