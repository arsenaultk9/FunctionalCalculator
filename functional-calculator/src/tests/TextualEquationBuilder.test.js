import * as TextualEquationBuilder from "../domain/TextualEquationBuilder";

describe("TextualEquationBuilder tests", () => {

    describe("Basic simple operation tests", () => {

        it("Addition is evaluated", () => {
            // ARRANGE
            const toCalculate = "5 + 6 + 7";

            // ACT
            const resultCalculator = TextualEquationBuilder.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe("add(5, add(6, 7))");
        })

        it("Substraction is evaluated", () => {
            // ARRANGE
            const toCalculate = "18 - 6 - 7";

            // ACT
            const resultCalculator = TextualEquationBuilder.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(5);
        })

        it("Multiplication is evaluated", () => {
            // ARRANGE
            const toCalculate = "2 * 4 * 6";

            // ACT
            const resultCalculator = TextualEquationBuilder.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe("mul(2, mul(4, 6))");
        })

        it("Division is evaluated", () => {
            // ARRANGE
            const toCalculate = "48 / 4 / 6";

            // ACT
            const resultCalculator = TextualEquationBuilder.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe("div(48, div(4, 6))");
        })
    })

    describe("Priority of operation tests", () => {

        it("Multiplication is prioritized over addition when after", () => {
            // ARRANGE
            const toCalculate = "5 + 6 * 7";

            // ACT
            const resultCalculator = TextualEquationBuilder.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe("add(5, mul(6, 7))");
        })

        it("Multiplication is prioritized over addition when before", () => {
            // ARRANGE
            const toCalculate = "6 * 7 + 5";

            // ACT
            const resultCalculator = TextualEquationBuilder.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe("add(mul(6, 7), 5)");
        })

        it("Addition and substraction are equal", () => {
            // ARRANGE
            const toCalculate = "18 + 6 - 7";

            // ACT
            const resultCalculator = TextualEquationBuilder.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe("add(18, sub(6, 7))");
        })

        it("Multiplication and division are equal", () => {
            // ARRANGE
            const toCalculate = "2 * 4 / 2";

            // ACT
            const resultCalculator = TextualEquationBuilder.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe("mul(2, div(4, 2))");
        })

        it("Division are more important than substractions when after", () => {
            // ARRANGE
            const toCalculate = "8 - 8 / 2";

            // ACT
            const resultCalculator = TextualEquationBuilder.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe("sub(8, div(8, 2))");
        })

        it("Division are more important than substractions when before", () => {
            // ARRANGE
            const toCalculate = "8 / 8 - 1";

            // ACT
            const resultCalculator = TextualEquationBuilder.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe("sub(div(8, 8), 1)");
        })
    })
})

