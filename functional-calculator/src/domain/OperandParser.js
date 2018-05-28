import { List } from "immutable";

import * as NumberParser from "./NumberParser";
import * as ListHelpers from "./helpers/ListHelpers";

function parse(expression) {
    const expressionNoWhiteSpaces = expression.replace(/\s/g, '');

    const operands = getOperands(expressionNoWhiteSpaces).toArray();
    return operands;
}

function getOperands(expression) {
    if(expression.length === 0) return List([]);

    const nextOperand = getNextOperand(expression);
    const remainingExpression = expression.replace(nextOperand, "");

    const remainingOperands = getOperands(remainingExpression).toArray();
    return ListHelpers.addRange(List([nextOperand]), remainingOperands);
}

function getNextOperand(expression) {
    if (isNaN(expression[0])) {
        return expression[0];
    }

    const number = NumberParser.getNumberPartInExpression(expression);
    return parseInt(number);
}


export { parse }