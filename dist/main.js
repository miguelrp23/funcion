"use strict";
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        }
        else {
            clearTimeout(lastFunc);
            lastFunc = window.setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
const button = document.getElementById('throttleButton');
const message = document.getElementById('message');
function handleClick() {
    message.textContent = `Botón clickeado a las ${new Date().toLocaleTimeString()}`;
    console.log("Botón clickeado");
}
const throttledClick = throttle(handleClick, 2000);
button.addEventListener('click', throttledClick);
//# sourceMappingURL=main.js.map