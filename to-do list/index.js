const submitButton = document.getElementById("btnSubmit");
const tasks = document.getElementById("tasks");
const messageElement = document.getElementById("message");
const clearButton = document.getElementById("btnClear");

submitButton.addEventListener("click", addTask);
tasks.addEventListener("click", handleTaskClick);
clearButton.addEventListener("click", clearList);

const greetingMessage = "Good, you have no tasks today!";

displayMessage(greetingMessage);

function clearList() {
  const taskList = tasks.getElementsByClassName("list-group-item");
  while (taskList.length > 0) {
    taskList[0].parentNode.removeChild(taskList[0]);
  }
  displayMessage(greetingMessage);
}

function handleTaskClick(event) {
  const style = event.target.style;
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = "";
  }
}

function addTask() {
  const newTask = document.getElementById("newTask");
  if (inputIsValid(newTask.value)) {
    tasks.innerHTML += `<li class="list-group-item"> ${newTask.value}</li>`;
    newTask.value = "";
    messageElement.style.visibility = "hidden";
  } else {
    displayMessage("Please provide non empty input!");
  }
}

function displayMessage(message) {
  messageElement.innerText = message;
  messageElement.style.visibility = "visible";
}

function inputIsValid(input) {
  if (input) {
    return true;
  }
  return false;
}
