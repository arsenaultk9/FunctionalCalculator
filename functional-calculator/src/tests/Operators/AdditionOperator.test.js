import * as AdditionOperator from "../../domain/Operators/AdditionOperator";

describe("AdditionOperator tests", () => {
    it("Adds two function results togethere", () => {
        // ARRANGE
        const firstTherm = () => 5;
        const secondTherm = () => 9;

        // ACT
        const derivedResult = AdditionOperator.add(firstTherm, secondTherm);

        // ASSERT
        expect(derivedResult()).toBe(14);
    })
})