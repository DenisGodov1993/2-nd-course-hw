// Задание 1
// Преобразовать строку 'js' в верхний регистр.

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Строка 'js' преобразована в верхний регистр с помощью метода toUpperCase() и выведена.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

let str = 'js';
str = str.toUpperCase();
console.log(str);

// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, 
// содержащий только те элементы первого массива, которые начинаются со второй строки. 
// Регистр символов не влияет на результат.

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Функция принимает массив строк и строку, возвращает новый массив с элементами, 
// начинающимися с заданной строки, регистр не влияет.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

// Подсказка
// Используйте функции toLowerCase() и startsWith() для сравнения начала строк.

function filter(array, line) {
    let resaut = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().startsWith(line.toLowerCase())) {
            resaut.push(array[i]);
        }   
    }
    return resaut;
}
console.log(filter(['SkyPro', 'Netology', 'Skillbox'], 'sk'));

// или

// function filter(array, line) {
//     const lowerLine = line.toLowerCase();
//     return array.filter(item => item.toLowerCase().startsWith(lowerLine));
// }
// console.log(filter(['SkyPro', 'Netology', 'Skillbox'], 'sky'));

// Задание 3
// Округлить число 32.58884:
// - До меньшего целого.
// - До большего целого.
// - До ближайшего целого.

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Число округлено до меньшего целого, большего целого и ближайшего целого с 
// использованием Math.floor(), Math.ceil() и Math.round(), результаты выведены в консоль.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

// Подсказка
// Используйте встроенные функции Math.floor(), Math.ceil() и Math.round() 
// для округления значений.

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и 
// вывести их в консоль.

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 найдены с 
// использованием Math.min() и Math.max(), результаты выведены в консоль.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

// Подсказка
// Используйте функции Math.min() и Math.max() для нахождения минимального и 
// максимального значений.

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Функция выводит случайное число от 1 до 10 с использованием Math.random() 
// и Math.floor().
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

// Подсказка
// Используйте функции Math.random() и Math.floor() для генерации случайных чисел.

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomNumber());

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел 
// от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Функция принимает целое число и возвращает массив случайных чисел от 0 до этого числа, 
// длина массива — половина от переданного числа.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

// Подсказка
// В JavaScript функция Math.random() возвращает случайное число от 0 (включительно) 
// до 1 (не включая).

function getRandomNum(num) {
    const arr = [];
    const length = Math.floor(num / 2);
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * num));  
    }
    return arr;
}
console.log(getRandomNum(6));

// или

// function getRandomNum(num) {
//     return Array.from({length:Math.floor(num / 2)}, () => Math.floor(Math.random() * num));
// }
// console.log(getRandomNum(6));

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число 
// в этом диапазоне.

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Функция принимает два целых числа и возвращает случайное число в этом диапазоне 
// с использованием Math.random(), Math.floor() или Math.ceil().
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

function getRanNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRanNum(10, 12));

// Задание 8
// Вывести в консоль текущую дату.

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Текущая дата выведена в консоль с использованием объекта Date.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

console.log(new Date());

// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая 
// наступит через 73 дня после текущей.

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Переменная currentDate создана, дата через 73 дня вычислена и выведена с 
// использованием методов getDate() и setDate().
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// - Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// - Время: [часы]:[минуты]:[секунды].

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Функция принимает дату и возвращает её в заданном формате: 
// "Дата: [число] [месяц на русском] [год] — это [день недели на русском]. 
// Время: [часы]:[минуты]:[секунды]".
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

// Подсказка
// Дату и время можно получить из объекта Date.

function formatDate(date) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`
}
console.log(formatDate(new Date()));

// Основное задание по верстке макета
// Реализуйте связь с сайтом для третьей и четвертой игр.

// Игра «Переверни текст»
// Описание:
// - создайте игру, где пользователю нужно ввести текст, который будет перевернут.

// Требования:
// - Сайт запрашивает у пользователя текст.
// - Сайт переворачивает введенный текст.
// - Сайт выводит перевернутый текст.

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Связь с сайтом для третьей и четвертой игр реализована. 
// - Игра «Переверни текст» и «Викторина» работают корректно.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

// Игра «Переверни текст»:
// - Сайт запрашивает у пользователя текст, переворачивает его и выводит результат.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

function turnTheTextOver() {
    
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    const userInput = prompt('Пожалуйста, введите текст, который Вы хотите перевернуть:');
    const reversedText =  reverseString(userInput);

    if (userInput !== null) {
        alert(`Перевернутый текст: ${reversedText}`);
    } else {
        alert('Вы не ввели текст. Попробуйте снова.');
    }   
}

// Игра «Викторина»
// Описание:
// - создайте простую викторину с несколькими вопросами и вариантами ответов.

// Требования:
// - Сайт предлагает несколько вопросов и вариантов ответов.
// - Запрашивает у пользователя ответы на каждый вопрос.
// - Подсчитывает и выводит количество правильных ответов.

// Последовательность создания игры Викторина:
// 1. Используйте предоставленный массив вопросов:
// - Массив quiz содержит три вопроса с вариантами ответов и правильными ответами.
// // Массив вопросов и правильных ответов
//        const quiz = [
//            {
//                question: "Какой цвет небо?",
//                options: ["1. Красный", "2. Синий", "3. Зеленый"],
//                correctAnswer: 2 // номер правильного ответа
//            },
//            {
//                question: "Сколько дней в неделе?",
//                options: ["1. Шесть", "2. Семь", "3. Восемь"],
//                correctAnswer: 2
//            },
//            {
//                question: "Сколько у человека пальцев на одной руке?",
//                options: ["1. Четыре", "2. Пять", "3. Шесть"],
//                correctAnswer: 2
//            }
//        ];
// 2. Запросите у пользователя ответы. Используйте функцию prompt() для получения 
// ответа пользователя на каждый вопрос.
// 3. Проверьте ответы и подсчитайте правильные:
// - Сравните ответ пользователя с правильным ответом и увеличьте счетчик 
// правильных ответов, если ответ верный.
// - Выведите результат:
// 4. В конце игры выведите количество правильных ответов с помощью alert().

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Связь с сайтом для третьей и четвертой игр реализована. 
// - Игра «Переверни текст» и «Викторина» работают корректно.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

// Игра «Викторина»:
// - Вопросы и варианты ответов из массива quiz корректно предложены пользователю.
// - Ответы на вопросы запрашиваются у пользователя с помощью prompt().
// - Ответы пользователя проверяются на правильность, количество правильных ответов 
// подсчитывается и выводится.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

function quizGame() {

    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i].question;
        const options = quiz[i].options.join("\n");
        const userAnswer = prompt(`${question}\n${options}`);
        
        if (parseInt(userAnswer) === quiz[i].correctAnswer) {
            score++; 
        }
    }
    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
}