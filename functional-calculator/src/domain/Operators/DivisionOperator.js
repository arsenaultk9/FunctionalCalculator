
function divise(firstTherm, secondTherm) {
    return () => {
        return firstTherm() / secondTherm();
    };
}

export { divise }