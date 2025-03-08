// Задание 1
// С помощью метода массива sort отсортируйте массив people по возрастанию возраста и 
// выведите результат в консоль.
// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];
// // Допишите колбэк для sort, изучите, как работает колбэк, в документации
// console.log(people.sort(...));
// // код выше должен вывеcти =>
// // [
// //  { name: 'Олег', age: 7 },
// //  { name: 'Анна', age: 17 },
// //  { name: 'Глеб', age: 29 },
// //  { name: 'Оксана', age: 47 }
// // ]

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Массив people отсортирован по возрастанию возраста с использованием метода sort и 
// корректного колбэка. Результат выведен в консоль.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

// Подсказка
// Помните, что метод sort принимает функцию сравнения в качестве аргумента. 
// Эта функция должна принимать два элемента массива и возвращать значение < 0, 
// если первый элемент должен быть перед вторым, и значение > 0, 
// если второй элемент должен быть перед первым.

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

const sortAge = (a, b) => a.age - b.age;

console.log(people.sort(sortAge)); // или console.log(people.sort((a, b) => a.age - b.age));

// Задание 2
// Реализуйте функцию filter, которая должна работать аналогично методу массива filter. 
// Возьмите за основу функцию map, которую мы реализовывали на уроке.
// Чтобы из функции map сделать filter, нужно, в зависимости от результата 
// вызова ruleFunction, принимать решение о том, добавлять в результирующий 
// массив очередной элемент или нет.

// function isPositive() {
// // писать код тут
// }
// function isMale() {
// // писать код тут
// }
// function filter() {
// // писать код тут
// }

// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(people, isMale));

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Функция filter реализована корректно, работает аналогично методу массива filter, 
// возвращает новый массив с элементами, для которых функция-правило возвращает true.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

// Подсказка
// Функция filter должна принимать массив и функцию-правило (которое возвращает true 
// или false для каждого элемента), а возвращать — новый массив, который содержит только 
// те элементы, для которых функция-правило возвращает true.

function isPositive(num) {
    return num > 0;
}
function isMale(person) {
    return person.gender === 'male'; 
}
function filter(array, ruleFunction) {
    const result = []; 
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) { 
            result.push(array[i]);
        }
    }
    return result; 
}

console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peoples, isMale));

// Задание 3
// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить 
// в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Программа выводит текущую дату каждые 3 секунды в течение 30 секунд с использованием 
// setInterval и setTimeout, последнее сообщение: «30 секунд прошло».
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

// Подсказка
// Используйте setInterval для повторяющихся задач и setTimeout для отложенного выполнения. 
// Не забудьте очистить интервал после его выполнения.

function CurrentDate() {
    const now = new Date();
    console.log(now);
}

const intervalId = setInterval(CurrentDate, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
}, 30000);

// Задание 4
// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
// Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу, 
// а спустя 1 секунду. Используйте setTimeout.

// function delayForSecond(callback) {
//     // Код писать можно только внутри этой функции
//    callback();
// }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Функция delayForSecond задерживает выполнение переданного колбэка 
// на 1 секунду с использованием setTimeout.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

function delayForSecond(callback) {
    setTimeout (callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// Задание 5
// Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:

// // Функция delayForSecond через 1 секунду пишет в консоль 
// // «Прошла одна секунда», а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) {  cb(); }
//     }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log('Привет, ${name}!');
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond(sayHi('Глеб'))

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Код исправлен так, что sayHi вызывается после delayForSecond, и приветствие 
// выводится через 1 секунду после сообщения «Прошла одна секунда».
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

// Подсказка
// Обратите внимание на то, как передается функция sayHi в качестве аргумента в 
// функцию delayForSecond. Какие данные ожидает delayForSecond и какие она получает? 
// Как можно изменить вызов delayForSecond так, чтобы он работал правильно? 
// Каким образом можно передать аргумент в функцию sayHi, 
// если вызывать ее нужно уже внутри delayForSecond?

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));


// Основное задание по верстке макета
// Реализуйте связь с сайтом для следующей игры.

// Игра «Камень, ножницы, бумага»
// Описание: создайте игру «Камень, ножницы, бумага», 
// где пользователь играет против компьютера.

// Требования:
// 1. Сайт запрашивает у пользователя его выбор (камень, ножницы, бумага).
// 2. Генерирует случайный выбор компьютера.
// 3. Определяет победителя и выводит результат.

// Последовательность создания игры «Камень, ножницы, бумага»:
// 1. Используйте функцию prompt() для получения выбора пользователя: 
// "камень", "ножницы" или "бумага".
// 2. Сгенерируйте случайный выбор компьютера.
// - Создайте массив с возможными вариантами: 
// ["камень", "ножницы", "бумага"].
// - Используйте функцию для генерации случайного индекса и 
// выберите вариант для компьютера.
// 3.Определите победителя.
//  1.) Сравните выбор пользователя и выбор компьютера.
//  2.) Используйте правила игры для определения победителя:
//   - Камень побеждает ножницы.
//   - Ножницы побеждают бумагу.
//   - Бумага побеждает камень.
//   - Если выборы совпадают, это ничья.
// 4. Выведите результат:
// - Выведите выборы пользователя и компьютера.
// - Сообщите результат игры: победа, поражение или ничья.

// Критерии оценки
// Работа будет оценена по следующим критериям:
// - Связь с сайтом для игры «Камень, ножницы, бумага» реализована.
// - Выбор пользователя запрашивается с помощью prompt() 
// ("камень", "ножницы" или "бумага").
// - Случайный выбор компьютера генерируется с использованием массива 
// ["камень", "ножницы", "бумага"] и случайного индекса.
// - Победитель определяется на основе правил игры (камень побеждает ножницы, 
// ножницы побеждают бумагу, бумага побеждает камень, одинаковые выборы — ничья).
// - Выборы пользователя и компьютера, а также результат игры 
// (победа, поражение или ничья) корректно выводятся.
// - Результат работы загружен на GitHub и отправлена ссылка на pull request.

function rockScissorsPaper() {
   
    const userChoice = prompt("Камень, ножницы или бумага?").toLowerCase();
    const choices = ["камень", "ножницы", "бумага"];

    if (!choices.includes(userChoice)) {
        alert("Неправильный выбор! Попробуйте снова.");
        return rockScissorsPaper(); 
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
}