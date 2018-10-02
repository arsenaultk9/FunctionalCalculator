function getOperandGroup(firstOperand, operator, secondOperand) {
    const operandGroup = {
        firstOperand: firstOperand,
        operator: operator,
        secondOperand: secondOperand,
        currentNode: undefined
    }

    operandGroup.currentNode = operandGroup;
    return operandGroup;
}

function toString(operandGroup) {
    if (operandGroup.firstOperand) {
        return `${toString(operandGroup.firstOperand)} ${operandGroup.operator} ${toString(operandGroup.secondOperand)}`;
    }

    return operandGroup;
}

function toList(operandGroup) {
    return [
        operandGroup.firstOperand.firstOperand ? toList(operandGroup.firstOperand) : operandGroup.firstOperand,
        operandGroup.operator,
        operandGroup.secondOperand.secondOperand ? toList(operandGroup.secondOperand) : operandGroup.secondOperand,
    ]
}

function getWithFirstOperand(operandGroup, value) {
    operandGroup.currentNode.firstOperand = value;
    return operandGroup;

    return {
        ...operandGroup,
        currentNode: { ...operandGroup.currentNode, firstOperand: value }
    }
}

function getWithOperator(operandGroup, value) {
    operandGroup.currentNode.operator = value;
    return operandGroup;

    return {
        ...operandGroup,
        currentNode: { ...operandGroup.currentNode, operator: value }
    }
}

function getWithSecondOperand(operandGroup, value) {
    operandGroup.currentNode.secondOperand = value;
    return operandGroup;

    return {
        ...operandGroup,
        currentNode: { ...operandGroup.currentNode, secondOperand: value }
    }
}

export default { getOperandGroup, toString, toList, getWithFirstOperand, getWithOperator, getWithSecondOperand }