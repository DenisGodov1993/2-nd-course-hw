// Задание 7. Удаление элемента
// Задача: создайте кнопку, которая удаляет первый элемент <p> с классом description.

// Инструкция:
// 1. В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description.
// 2. Используйте метод querySelector для поиска первого элемента с классом description.
// 3. Используйте метод remove для удаления этого элемента при нажатии на кнопку.

// Как должно работать: нажатие на кнопку «Удалить элемент» удаляет первый абзац с 
// классом description со страницы.

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Создано несколько абзацев, как минимум два из них имеют класс description.
// - Для поиска первого элемента с классом description используется метод querySelector.
// - Для удаления элемента при нажатии на кнопку используется метод remove.
// - Результат работы загружен на GitHub, отправлена ссылка на pull request.

const btnEl = document.querySelector('.btn');
const descriptionEl = document.querySelector('.description');
const titleEl = document.querySelector('.title');
const textEl = document.querySelector('.text');

btnEl.addEventListener('click', function () {
    const descriptionEl = document.querySelector('.description');

    if (descriptionEl) {
        descriptionEl.remove();
    }
});