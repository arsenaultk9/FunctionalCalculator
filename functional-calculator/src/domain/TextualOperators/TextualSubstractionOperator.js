
function substract(firstTherm, secondTherm) {
    return () => {
        return "sub(" + firstTherm() + ", " + secondTherm() + ")";
    };
}

export { substract }