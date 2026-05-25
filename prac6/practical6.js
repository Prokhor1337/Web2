"use strict";

import { welcomeMessage, multiply, calculateAverage, squareNumber } from "./utils.js";
import { student, defaultMultiplier } from "./data.js";

const { firstName, university } = student;

console.log(welcomeMessage(firstName)); 
console.log(`Навчальний заклад: ${university}`);

const grades = [85, 90, 95];
const allGrades = [...grades, 100, 88];

console.log("Всі оцінки:", allGrades);
console.log("Середній бал:", calculateAverage(...allGrades).toFixed(1));

document.getElementById("app").innerHTML = `
    <h2>Студент: ${firstName}</h2>
    <p>Місце навчання: ${university}</p>
    <hr>
    <p>Результат множення 12 * 4 = ${multiply(12, 4)}</p>
    <p>Квадрат числа ${defaultMultiplier} дорівнює ${squareNumber(defaultMultiplier)}</p>
`;