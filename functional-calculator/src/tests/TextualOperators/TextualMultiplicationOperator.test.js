import * as TextualMultiplicationOperator from "../../domain/TextualOperators/TextualMultiplicationOperator";

describe("TextualMultiplicationOperator tests", () => {
    it("Multiply two function text togethere", () => {
        // ARRANGE
        const firstTherm = () => 5;
        const secondTherm = () => 9;

        // ACT
        const derivedResult = TextualMultiplicationOperator.multiply(firstTherm, secondTherm);

        // ASSERT
        expect(derivedResult()).toBe("mul(5, 9)");
    })
})