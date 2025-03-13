// Задание 5. Работа с querySelectorAll
// Задача: создайте несколько элементов <p> с разными классами. 
// Используйте querySelectorAll, чтобы найти все элементы с 
// классом description и изменить их текст.

// Инструкция:
// 1. В HTML создайте несколько абзацев <p>, некоторые из них должны иметь 
// класс description.
// 2. Используйте querySelectorAll для поиска всех элементов с классом description.
// 3. Переберите найденные элементы и измените их текстовое содержимое.

// Как должно работать: после выполнения скрипта все элементы с классом description 
// изменяют свой текст на «Новый текст».

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Создано несколько абзацев, как минимум два из них имеют класс description.
// - Для поиска элементов используется метод querySelectorAll.
// - Результат работы загружен на GitHub, отправлена ссылка на pull request.

const descriptionEl = document.querySelectorAll('.description');
const titleEl = document.querySelector('.title');
const textEl = document.querySelector('.text');
const headerEl = document.querySelector('.header');

descriptionEl.forEach(function(descriptionEl) {
    descriptionEl.textContent = 'Новый текст';
});