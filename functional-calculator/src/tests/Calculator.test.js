import Calculator from "../domain/Calculator";

describe("Calculator tests", () => {
    const calculator = new Calculator();

    describe("Basic simple operation tests", () => {

        it("Addition is evaluated", () => {
            // ARRANGE
            const toCalculate = "5 + 6 + 7";

            // ACT
            const result = calculator.evaluate(toCalculate);

            // ASSERT
            expect(result).toBe(18);
        })

        it("Substraction is evaluated", () => {
            // ARRANGE
            const toCalculate = "18 - 6 - 7";

            // ACT
            const result = calculator.evaluate(toCalculate);

            // ASSERT
            expect(result).toBe(5);
        })

        it("Multiplication is evaluated", () => {
            // ARRANGE
            const toCalculate = "2 * 4 * 6";

            // ACT
            const result = calculator.evaluate(toCalculate);

            // ASSERT
            expect(result).toBe(48);
        })

        it("Division is evaluated", () => {
            // ARRANGE
            const toCalculate = "48 / 4 / 6";

            // ACT
            const result = calculator.evaluate(toCalculate);

            // ASSERT
            expect(result).toBe(2);
        })
    })

    describe("Formatting tests", () => {

        it("No spaces are required", () => {
            // ARRANGE
            const toCalculate = "5+6+7";

            // ACT
            const result = calculator.evaluate(toCalculate);

            // ASSERT
            expect(result).toBe(18);
        })

        it("Can have multiple spaces", () => {
            // ARRANGE
            const toCalculate = "5   + 6   +  7";

            // ACT
            const result = calculator.evaluate(toCalculate);

            // ASSERT
            expect(result).toBe(18);
        })
    })

    describe("Priority of operation tests", () => {

        it("Multiplication is prioritized over addition", () => {
            // ARRANGE
            const toCalculate = "5 + 6 * 7";

            // ACT
            const result = calculator.evaluate(toCalculate);

            // ASSERT
            expect(result).toBe(47);
        })

        it("Addition and substraction are equal", () => {
            // ARRANGE
            const toCalculate = "18 + 6 - 7";

            // ACT
            const result = calculator.evaluate(toCalculate);

            // ASSERT
            expect(result).toBe(17);
        })

        it("Multiplication and division are equal", () => {
            // ARRANGE
            const toCalculate = "2 * 4 / 2";

            // ACT
            const result = calculator.evaluate(toCalculate);

            // ASSERT
            expect(result).toBe(4);
        })

        it("Division are more important than substractions", () => {
            // ARRANGE
            const toCalculate = "8 - 8 / 2";

            // ACT
            const result = calculator.evaluate(toCalculate);

            // ASSERT
            expect(result).toBe(4);
        })
    })
})

