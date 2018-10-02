import OperandGroup from "./OperandGroup";

function groupOperands(operands) {
    const operandGroup = OperandGroup.getOperandGroup()
    const operandsReduced = operands.reduce(operandGroupAccumulator, operandGroup);

    return OperandGroup.toList(operandsReduced);
}

function operandGroupAccumulator(operandGroup, newOperand) {
    console.log(OperandGroup.toString(operandGroup));

    if (!operandGroup.currentNode.firstOperand) {
        return OperandGroup.getWithFirstOperand(operandGroup, newOperand);
    }

    if (!operandGroup.currentNode.operator) {
        return OperandGroup.getWithOperator(operandGroup, newOperand);
    }

    if (!operandGroup.currentNode.secondOperand) {
        return OperandGroup.getWithSecondOperand(operandGroup, newOperand);
    }

    if(newOperand === "+" || newOperand === "-") {
        const newGroup = OperandGroup.getOperandGroup(operandGroup.currentNode, newOperand);
        operandGroup.currentNode = newGroup;
    }

    return operandGroup;
}


export { groupOperands }