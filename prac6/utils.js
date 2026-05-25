"use strict";

export function welcomeMessage(name) {
    return `Вітаємо на сторінці, ${name}!`; 
}

export const multiply = (a, b) => a * b; 

export function calculateAverage(...numbers) { 
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

export function squareNumber(num) {
    return num * num;
}