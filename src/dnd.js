/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрощено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {
    let newDiv = document.createElement('div');

    function getRandomPixels(m) {
        return Math.floor(Math.random() * m + 80) + 'px';
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    newDiv.classList.add('draggable-div');
    newDiv.style.width = getRandomPixels(400);
    newDiv.style.height = getRandomPixels(400);
    newDiv.style.top = getRandomPixels(200);
    newDiv.style.left = getRandomPixels(200);
    newDiv.style['background-color'] = getRandomColor();

    return newDiv;
}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {
    let moveElement = false;
    let deltaX, deltaY;

    target.addEventListener('mousedown', function(e) {
        e.target.classList.add('clicked');
        moveElement = true;
        deltaX = e.clientX - e.target.offsetLeft;
        deltaY = e.clientY - e.target.offsetTop
    });

    target.addEventListener('mouseup', function(e) {
        e.target.classList.remove('clicked');
        moveElement = false
    });

    target.addEventListener('mousemove', function(e) {
        if (moveElement) {
            e.target.style.top = `${e.clientY - deltaY}px`;
            e.target.style.left = `${e.clientX - deltaX}px`;
        }
    })
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    let div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации d&d
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
