import * as TextualSubstractionOperator from "../../domain/TextualOperators/TextualSubstractionOperator";

describe("TextualSubstractionOperator tests", () => {
    it("Substract two function text togethere", () => {
        // ARRANGE
        const firstTherm = () => 5;
        const secondTherm = () => 9;

        // ACT
        const derivedResult = TextualSubstractionOperator.substract(firstTherm, secondTherm);

        // ASSERT
        expect(derivedResult()).toBe("sub(5, 9)");
    })
})