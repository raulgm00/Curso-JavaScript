const newTaskInput = document.querySelector("#newTask");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

function addTask(e) {
  e.preventDefault();
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const taskItem = `<li>${taskText}<i class='bx bxs-trash'></i></li>`;
    taskList.innerHTML += taskItem;
    newTaskInput.value = "";
  }
}

addTaskButton.addEventListener("click", addTask);

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("bxs-trash")) {
    e.target.parentElement.remove();
  }
});
