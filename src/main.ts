
function throttle<T extends (...args: unknown[]) => void>(func: T, limit: number):
(this: ThisParameterType<T>, ...args: Parameters<T>) => void {
    let lastFunc: number;
    let lastRan: number;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
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


const button = document.getElementById('throttleButton') as HTMLButtonElement;
const message = document.getElementById('message') as HTMLParagraphElement;


function handleClick(this: HTMLButtonElement) {
    message.textContent = `Botón clickeado a las ${new Date().toLocaleTimeString()}`;
    console.log("Botón clickeado");
}


const throttledClick = throttle(handleClick, 2000);


button.addEventListener('click', throttledClick);
