import * as OperandParser from "../domain/OperandParser";

describe("OperandParser Tests", () => {
    it("Three therme operand is parsed", () => {
        // ARRANGE
        const expression = "5 + 6";

        // ACT
        const operands = OperandParser.parse(expression);

        // ASSERT
        expect(operands.length).toBe(3);

        expect(operands[0]).toBe(5);
        expect(operands[1]).toBe("+");
        expect(operands[2]).toBe(6);
    })

    it("Multiple number operand is parsed", () => {
        // ARRANGE
        const expression = "545 + 6";

        // ACT
        const operands = OperandParser.parse(expression);

        // ASSERT
        expect(operands.length).toBe(3);

        expect(operands[0]).toBe(545);
        expect(operands[1]).toBe("+");
        expect(operands[2]).toBe(6);
    })

    it("With no spaces in between operands are parsed", () => {
        // ARRANGE
        const expression = "545+6";

        // ACT
        const operands = OperandParser.parse(expression);

        // ASSERT
        expect(operands.length).toBe(3);

        expect(operands[0]).toBe(545);
        expect(operands[1]).toBe("+");
        expect(operands[2]).toBe(6);
    })

    it("Five therme operand is parsed", () => {
        // ARRANGE
        const expression = "5 + 6 - 4";

        // ACT
        const operands = OperandParser.parse(expression);

        // ASSERT
        expect(operands.length).toBe(5);

        expect(operands[0]).toBe(5);
        expect(operands[1]).toBe("+");
        expect(operands[2]).toBe(6);
        expect(operands[3]).toBe("-");
        expect(operands[4]).toBe(4);
    })
})