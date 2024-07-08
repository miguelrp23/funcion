
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

// Selección de elementos del DOM
const button = document.getElementById('throttleButton') as HTMLButtonElement;
const message = document.getElementById('message') as HTMLParagraphElement;

// Función que será llamada cuando se haga clic en el botón
function handleClick(this: HTMLButtonElement) {
    message.textContent = `Botón clickeado a las ${new Date().toLocaleTimeString()}`;
    console.log("Botón clickeado");
}

// Crear una versión "throttled" de la función handleClick, que solo se ejecutará una vez cada 2 segundos
const throttledClick = throttle(handleClick, 2000);

// Añadir un listener de eventos al botón, usando la función "throttled"
button.addEventListener('click', throttledClick);
