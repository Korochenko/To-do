const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Додавання задачі
function addTask() {
  if (inputBox.value === '') {
    alert("Треба шось внести");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// Обробник кліків на задачі
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

// Збереження задач у localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Показ задач при завантаженні
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || '';
}

// Викликаємо showTask при завантаженні сторінки
document.addEventListener("DOMContentLoaded", showTask);

