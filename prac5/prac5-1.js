"use strict";

const loadBtn = document.getElementById('loadUsers');
const output = document.getElementById('userOutput');

// Асинхронна функція для отримання списку користувачів
async function loadData() {
    try {
        output.textContent = "Завантаження...";

        // 1. Надсилаємо запит до API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // 2. Перевіряємо, чи успішний статус відповіді (200-299)
        if (!response.ok) {
            throw new Error(`Помилка сервера: ${response.status}`);
        }

        // 3. Декодуємо JSON у JS-об'єкт
        const data = await response.json();

        // 4. Виводимо дані у тег <pre> з відступами для читабельності
        output.textContent = JSON.stringify(data, null, 2);

    } catch (error) {
        // Обробка помилок (наприклад, відсутність інтернету)
        console.error("Error:", error);
        output.textContent = "Помилка завантаження: " + error.message;
    }
}

loadBtn.addEventListener('click', loadData);