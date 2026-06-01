"use strict";

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const deleteTitle = document.querySelector("p");
const heaederInput = document.querySelector("h1");

addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        li.style.cursor = "pointer";

        taskList.appendChild(li);

        console.log(`Додано завдання: "${taskText}"`);
        taskInput.value = "";
    } else {
        console.warn("Спроба додати порожнє завдання");
        alert("Введіть текст завдання!");
    }
});

deleteTitle.addEventListener("click", function(event) {
        heaederInput.remove();
});

