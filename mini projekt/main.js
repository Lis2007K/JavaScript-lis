let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
  // Clear all weekday lists
  const allLists = document.querySelectorAll('.task-list');
  for (let i = 0; i < allLists.length; i++) {
    allLists[i].innerHTML = "";
  }

  // Render tasks
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const time = todoObject.time;
    const weekday = todoObject.weekday;

    const html = `
      <div class="task-item">
        <span>${time} — ${name}</span>
        <button class="delete-todo-button"
          onclick="
            todoList.splice(${i}, 1);
            localStorage.setItem('todoList', JSON.stringify(todoList));
            renderTodoList();
          ">Delete</button>
      </div>
    `;

    const list = document.querySelector(`.js-${weekday}-list`);
    list.innerHTML += html;
  }
}

function addTodo() {
  const nameInput = document.querySelector('.js-name-input');
  const timeInput = document.querySelector('.js-time-input');
  const weekdayInput = document.querySelector('.js-weekday-input');

  const name = nameInput.value;
  const time = timeInput.value;
  const weekday = weekdayInput.value;

  if (!name || !time || !weekday) {
    alert("Please fill all fields");
    return;
  }

  for (let i = 0; i < todoList.length; i++){
    let timeIf = todoList[i].time;
    let weekdayIf = todoList[i].weekday;

    if (time === timeIf && weekday === weekdayIf){
      alert("There is alreasy a task set for that time and date");
      timeInput.value = "";
      weekdayInput.value = "";
      return;
    }

  }

  todoList.push({
    name: name,
    time: time,
    weekday: weekday
  });

  localStorage.setItem('todoList', JSON.stringify(todoList));

  nameInput.value = "";
  timeInput.value = "";
  weekdayInput.value = "";

  renderTodoList();
}
