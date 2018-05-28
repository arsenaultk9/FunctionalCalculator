function getNumberPartInExpression(expression) {
    if(expression.length === 0 || isNaN(expression[0])) {
        return "";
    }

    return expression[0] + getNumberPartInExpression(expression.substring(1));
}

export { getNumberPartInExpression }