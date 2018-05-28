import * as OperandParser from "./OperandParser";
import * as EquationBuilder from "./EquationBuilder";

import * as AdditionOperator from "./Textual/TextualAdditionOperator";
import * as SubstractionOperator from "./Operators/TextualSubstractionOperator";
import * as MultiplicationOperator from "./Operators/TextualMultiplicationOperator";
import * as DivisionOperator from "./Operators/TextualDivisionOperator";

function getEquationTexte(toCalculate) {
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

export { getEquationTexte }