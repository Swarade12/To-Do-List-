function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
  
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <div class="actions">
        <button class="done-btn" onclick="toggleComplete(this)">Done</button>
        <button onclick="deleteTask(this)">Delete</button>
      </div>
    `;
  
    taskList.appendChild(li);
    input.value = "";
  }
  
  function deleteTask(button) {
    const li = button.closest('li');
    li.remove();
  }
  
  function toggleComplete(button) {
    const li = button.closest('li');
    li.classList.toggle('completed');
  }
  