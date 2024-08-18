export const setAndRemoveClass = ({
        targetClassName = '',
        className = '',
        delay = 0,
    }) => {
    const target = document.querySelector('.' + targetClassName);

    target.classList.add(className);

    setTimeout(() => target.classList.remove(className), delay);
};