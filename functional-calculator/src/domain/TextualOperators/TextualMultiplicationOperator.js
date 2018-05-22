
function multiply(firstTherm, secondTherm) {
    return () => {
        return "mul(" + firstTherm() + ", " + secondTherm() + ")";
    };
}

export { multiply }