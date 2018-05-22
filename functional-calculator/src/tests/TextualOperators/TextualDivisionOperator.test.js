import * as TextualDivisionOperator from "../../domain/TextualOperators/TextualDivisionOperator";

describe("TextualDivisionOperator tests", () => {
    it("Divise two function text togethere", () => {
        // ARRANGE
        const firstTherm = () => 5;
        const secondTherm = () => 9;

        // ACT
        const derivedResult = TextualDivisionOperator.divise(firstTherm, secondTherm);

        // ASSERT
        expect(derivedResult()).toBe("div(5, 9)");
    })
})