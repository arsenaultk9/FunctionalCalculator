
function divise(firstTherm, secondTherm) {
    return () => {
        return "div(" + firstTherm() + ", " + secondTherm() + ")";
    };
}

export { divise }