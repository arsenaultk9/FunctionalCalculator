import * as ResultCalculator from "../domain/ResultCalculator";

describe("ResultCalculator tests", () => {

    describe("Basic simple operation tests", () => {

        it("Addition is evaluated", () => {
            // ARRANGE
            const toCalculate = "5 + 6 + 7";

            // ACT
            const resultCalculator = ResultCalculator.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(18);
        })

        it("Substraction is evaluated", () => {
            // ARRANGE
            const toCalculate = "18 - 6 - 7";

            // ACT
            const resultCalculator = ResultCalculator.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(5);
        })

        it("Multiplication is evaluated", () => {
            // ARRANGE
            const toCalculate = "2 * 4 * 6";

            // ACT
            const resultCalculator = ResultCalculator.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(48);
        })

        it("Division is evaluated", () => {
            // ARRANGE
            const toCalculate = "48 / 4 / 6";

            // ACT
            const resultCalculator = ResultCalculator.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(2);
        })
    })

    describe("Formatting tests", () => {

        it("No spaces are required", () => {
            // ARRANGE
            const toCalculate = "5+6+7";

            // ACT
            const resultCalculator = ResultCalculator.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(18);
        })

        it("Can have multiple spaces", () => {
            // ARRANGE
            const toCalculate = "5   + 6   +  7";

            // ACT
            const resultCalculator = ResultCalculator.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(18);
        })
    })

    describe("Priority of operation tests", () => {

        it("Multiplication is prioritized over addition when after", () => {
            // ARRANGE
            const toCalculate = "5 + 6 * 7";

            // ACT
            const resultCalculator = ResultCalculator.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(47);
        })

        it("Multiplication is prioritized over addition when before", () => {
            // ARRANGE
            const toCalculate = "5 * 6 + 7";

            // ACT
            const resultCalculator = ResultCalculator.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(37);
        })

        it("Addition and substraction are equal", () => {
            // ARRANGE
            const toCalculate = "18 + 6 - 7";

            // ACT
            const resultCalculator = ResultCalculator.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(17);
        })

        it("Multiplication and division are equal", () => {
            // ARRANGE
            const toCalculate = "2 * 4 / 2";

            // ACT
            const resultCalculator = ResultCalculator.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(4);
        })

        it("Division are more important than substractions when after", () => {
            // ARRANGE
            const toCalculate = "8 - 8 / 2";

            // ACT
            const resultCalculator = ResultCalculator.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(4);
        })

        it("Division are more important than substractions when before", () => {
            // ARRANGE
            const toCalculate = "8 / 8 - 1";

            // ACT
            const resultCalculator = ResultCalculator.getResultCalculation(toCalculate);

            // ASSERT
            expect(resultCalculator()).toBe(0);
        })
    })
})

