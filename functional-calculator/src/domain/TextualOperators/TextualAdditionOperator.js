
function add(firstTherm, secondTherm) {
    return () => {
        return "add(" + firstTherm() + ", " + secondTherm() + ")";
    };
}

export { add }