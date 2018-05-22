import * as DivisionOperator from "../../domain/Operators/DivisionOperator";

describe("DivisionOperator tests", () => {
    it("Divises two function results togethere", () => {
        // ARRANGE
        const firstTherm = () => 5;
        const secondTherm = () => 4;

        // ACT
        const derivedResult = DivisionOperator.divise(firstTherm, secondTherm);

        // ASSERT
        expect(derivedResult()).toBe(1.25);
    })
})