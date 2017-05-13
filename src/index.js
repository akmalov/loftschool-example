/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i], i, array));
    }

    return newArray;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    let newArray;
    let i;

    if (initial === undefined) {
        i = 1;
        newArray = array[0];
    } else {
        i = 0;
        newArray = initial;
    }

    for (; i < array.length; i++) {
        newArray = fn(newArray, array[i], i, array);
    }

    return newArray;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    let newArray = [];

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            newArray.push(prop);
        }
    }

    return newArray;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    let newArray = [];

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            newArray.push(prop.toUpperCase());
        }
    }

    return newArray;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
    let newArray = [];

    if (from === undefined) {
        from = 0;
    } else if (from > array.length) {
        from = array.length;
    } else if (from < 0) {
        if (from < -array.length) {
            from = 0;
        } else {
            from = array.length + from;
        }
    }

    if (to === undefined) {
        to = array.length;
    } else if (to > array.length) {
        to = array.length;
    } else if (to < 0) {
        if (to < -array.length) {
            to = 0;
        } else {
            to = array.length + to;
        }
    }

    if (from > to) {
        from = to;
    }

    for (let i = from; i < to; i++) {
        newArray.push(array[i]);
    }

    return newArray;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set(target, prop, value) {
            target[prop] = Math.pow(value, 2);

            return true;
        }
    });
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
