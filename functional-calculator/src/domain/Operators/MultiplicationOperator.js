
function multiply(firstTherm, secondTherm) {
    return () => {
        return firstTherm() * secondTherm();
    };
}

export { multiply }