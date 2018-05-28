import * as OperandParser from "./OperandParser";
import * as EquationBuilder from "./EquationBuilder";

import * as AdditionOperator from "./Operators/AdditionOperator";
import * as SubstractionOperator from "./Operators/SubstractionOperator";
import * as MultiplicationOperator from "./Operators/MultiplicationOperator";
import * as DivisionOperator from "./Operators/DivisionOperator";

function getResultCalculation(toCalculate) {
    const operands = OperandParser.parse(toCalculate);

    return () => {
        return EquationBuilder
            .buildEquation(AdditionOperator.add,
                SubstractionOperator.substract,
                MultiplicationOperator.multiply,
                DivisionOperator.divise,
                operands);
    }
}

export { getResultCalculation }