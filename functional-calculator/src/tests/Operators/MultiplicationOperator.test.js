import * as MultiplicationOperator from "../../domain/Operators/MultiplicationOperator";

describe("MultiplicationOperator tests", () => {
    it("Multiplies two function results togethere", () => {
        // ARRANGE
        const firstTherm = () => 5;
        const secondTherm = () => 4;

        // ACT
        const derivedResult = MultiplicationOperator.multiply(firstTherm, secondTherm);

        // ASSERT
        expect(derivedResult()).toBe(20);
    })
})