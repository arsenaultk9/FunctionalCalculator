import * as SubstractionOperator from "../../domain/Operators/SubstractionOperator";

describe("SubstractionOperator tests", () => {
    it("Substracts two function results togethere", () => {
        // ARRANGE
        const firstTherm = () => 5;
        const secondTherm = () => 9;

        // ACT
        const derivedResult = SubstractionOperator.substract(firstTherm, secondTherm);

        // ASSERT
        expect(derivedResult()).toBe(-4);
    })
})