export const throttle = (func = () => {}, delay = 0) => {
    let lastCall = 0;

    return function() {
        const context = this;
        const now = new Date().getTime();

        if (now - lastCall >= delay) {
            func.apply(context);
            lastCall = now;
        }
    };
};