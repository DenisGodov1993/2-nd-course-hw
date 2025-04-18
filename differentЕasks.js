// ЗАДАЧИ НА РАБОТУ С CALLBACKS:

// ПРИМЕР РАБОТЫ С КУЛБЕКОМ:
// Функция, которая вызывает колбэк, может передать в вызов колбэка аргументы — 
// так же, как если бы она вызывала любую другую функцию:

// function functionWithCallback(callback) {
//    // Передаем в колбэк-функцию 2 аргумента: "Глеб" и "Фокин"
//    callback("Глеб", "Фокин");
// }

// functionWithCallback((name, surname) => {
//    // Внутри колбэк-функции мы можем использовать данные,
//    // которые передает в него код, который его вызывает
//    console.log(`Привет, ${name} ${surname}!`);
//    // Выведет в консоль «Привет, Глеб Фокин!»
// });

// Без колбэков можно написать код так:

// const greet = (name, surname) => {
//    console.log(`Привет, ${name} ${surname}!`);
// };

// function functionWithoutCallback() {
//    greet("Глеб", "Фокин");
// }

// functionWithoutCallback(); //Выведет в консоль «Привет, Глеб Фокин!»

// Код без колбэков выглядит проще и понятнее. 
// При этом в нем более явно описана последовательность вызовов:
// код вызывает функцию functionWithoutCallback, она вызывает 
// greet c именем и фамилией, функция greet выводит сообщение в консоль.
// С колбэком вызвать функцию greet javaсложнее:** 
// она будет вызывать колбэк, который передаст код, 
// который вызовет функцию 'functionWithCallback'.

// Задачи № 1:
// Есть функция callbackWithArrayLength. Первым аргументом она принимает массив, 
// а вторым — колбэк.
// Код функции не дописан: сейчас она всегда вызывает колбэк с числом −1. 
// Программа выводит -1 -1 -1. А должна вызывать колбэк с **длиной переданного 
// первым аргументом массива.**
// Скопируйте этот код в консоль браузера.
// Допишите тело функции так, чтобы код вызывал колбэк с 
// **длиной переданного первым аргументом массива.**
// Код должен выводить в консоль 1 2 5.

function callbackWithArrayLength(arr, callback) {
    callback(arr.length); // то, что нужно прописать для выполнения условий задачи
}

callbackWithArrayLength([1], (length) => {
	console.log(length);
});

callbackWithArrayLength([1, 1], (len) => {
	console.log(len);
});
callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
	console.log(l);
});

// Задачи № 2:
// Колбэк может быть вызван внутри функции несколько раз.
// Исправьте код функции each так, чтобы в консоль выводились 
// не индексы элементов в массиве, а сами элементы массива: 
// «Глеб», «Олег» и так далее.
// В ответ напишите новый, исправленный вариант строки, которую надо скорректировать.

function log(arrItem) {
	console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
	for (let i = 0; i < arr.length; i++) {
		cb(i);
	}
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);

function each(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]); // Передаем элемент массива вместо его индекса
    }
}

