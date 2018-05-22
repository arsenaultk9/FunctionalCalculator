import * as TextualAdditionOperator from "../../domain/TextualOperators/TextualAdditionOperator";

describe("TextualAdditionOperator tests", () => {
    it("Adds two function text togethere", () => {
        // ARRANGE
        const firstTherm = () => 5;
        const secondTherm = () => 9;

        // ACT
        const derivedResult = TextualAdditionOperator.add(firstTherm, secondTherm);

        // ASSERT
        expect(derivedResult()).toBe("add(5, 9)");
    })
})