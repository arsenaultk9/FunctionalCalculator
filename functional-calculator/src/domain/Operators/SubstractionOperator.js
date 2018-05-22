
function substract(firstTherm, secondTherm) {
    return () => {
        return firstTherm() - secondTherm();
    };
}

export { substract }