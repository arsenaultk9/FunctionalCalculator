
function add(firstTherm, secondTherm) {
    return () => {
        return firstTherm() + secondTherm();
    };
}

export { add }