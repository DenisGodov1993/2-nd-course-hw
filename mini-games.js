// ИГРА № 1:
// Описание игры для сайта («Угадай число»)
// Создайте игру, в которой пользователь пытается угадать случайное число от 1 до 100.
// Требования:
// 1.Сгенерируйте случайное число от 1 до 100.
// 2.Предложите пользователю угадать это число.
// 3.Дайте подсказки: больше или меньше загаданное число.
// 4.Завершите игру, когда пользователь угадает число.

let randomNumber;
let attempts = 0;

function guessNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    
    while (1, 100) {
        const userNumber = Number(prompt('Попробуйте угадать случайное число от 1 до 100.'));
        attempts++;

        if (userNumber === null) {
            result(userNumber); // я не знаю почему не работает(((
            alert('Игра завершeна! Попробуйте снова.'); 
            break; 
        } 
      
        if (randomNumber === userNumber) {
            alert(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток. Игра завершена!`);
            break; 
        } else if (isNaN(userNumber)) {
            alert('Ошибка! Некорректный ввод! Вы ввели не число! Попробуйте снова.');
        } else if (randomNumber > userNumber) {
            alert('Загаданное число больше! Попробуйте снова.');
        } else {
            alert('Загаданное число меньше! Попробуйте снова.');
        }  
    }
}

result(userNumber);

// ИГРА № 2:
// Основное задание по верстке макета:
// 1.Реализуйте связь с сайтом для второй игры.
// 2.Создайте игру, где пользователю предлагаются простые арифметические задачи

// Требования:
// 1.Сайт генерирует случайные задачи на сложение, вычитание, умножение и деление.
// 2.Запрашивает у пользователя ответ.
// 3.Проверяет правильность ответа и выводит результат.

// Последовательность действий
// Генерация задач:
// -Случайным образом создавайте арифметические задачи на сложение, вычитание, 
// умножение и деление.
// -Например, задачи могут выглядеть так: "5 + 3", "10 - 2", "4 * 7", "20 / 4".

// Запрос ответа:
// -Запрашивайте у пользователя ответ на сгенерированную задачу.
// -Например, используя функцию prompt().

// Проверка и вывод результата:
// -Проверьте правильность ответа пользователя.
// -Выведите результат проверки: верный ответ или ошибка.

// Критерии оценки:
// -Работа будет оценена по следующим критериям
// -Связь с сайтом для второй игры реализована.
// -Арифметические задачи на сложение, вычитание, умножение и деление генерируются 
// случайным образом.
// -Ответ на задачу запрашивается у пользователя с помощью prompt().
// -Ответ пользователя проверяется на правильность, результат проверки 
// (верный ответ или ошибка) выводится.
// -Результат работы загружен на GitHub и отправлена ссылка на pull request.


const operators = ['+', '-', '*', '/'];
let randomTask;
let correctAnswer;

function simpleArithmetic() {
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 10) + 1; 
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let randomTask = `${num1} ${operator} ${num2}`; 
    const userAnswer = Number(prompt(`Решите задачу: ${randomTask}`));
    
    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = num1 / num2;
            break;
    }

    if (userAnswer === correctAnswer) {
        alert('Поздравляем!!! Правильный ответ!');
    } else {
        alert('Ответ неправильный. Попробуйте снова!');
    }
}

// ИГРА № 3:
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

// ИГРА № 4:
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