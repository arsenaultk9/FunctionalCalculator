import * as OperandGrouper from "../domain/OperandGrouper";

describe("OperandGrouper Tests", () => {

    it("Three therme operation is grouped", () => {
        // ARRANGE
        const operands = [5, "+", 8];

        // ACT
        const operandsGrouped = OperandGrouper.groupOperands(operands);

        // ASSERT
        expect(operandsGrouped).toBe([5, "+", 8]);
    })

    it("Five therme operation is grouped", () => {
        // ARRANGE
        const operands = [5, "+", 8, "-", 4];

        // ACT
        const operandsGrouped = OperandGrouper.groupOperands(operands);

        // ASSERT
        expect(operandsGrouped).toBe([5, "+", [8, "-", 4]]);
    })

    it("Five therme operation, first three therme is priority operand, operands are grouped", () => {
        // ARRANGE
        const operands = [5, "*", 8, "-", 4];

        // ACT
        const operandsGrouped = OperandGrouper.groupOperands(operands);

        // ASSERT
        expect(operandsGrouped).toBe([[5, "*", 8], "-", 4]);
    })

    it("Five therme operation, last three therme is priority operand, operands are grouped", () => {
        // ARRANGE
        const operands = [5, "-", 8, "*", 4];

        // ACT
        const operandsGrouped = OperandGrouper.groupOperands(operands);

        // ASSERT
        expect(operandsGrouped).toBe([5, "-", [8, "*", 4]]);
    })

    it("Seven therme operation, last group is priority operation is grouped", () => {
        // ARRANGE
        const operands = [5, "+", 8, "-", 4, "*", 6];

        // ACT
        const operandsGrouped = OperandGrouper.groupOperands(operands);

        // ASSERT
        expect(operandsGrouped).toBe([5, "+", [8, "-", [4, "*", 6]]]);
    })

    it("Seven therme operation, middle group is priority operation is grouped", () => {
        // ARRANGE
        const operands = [5, "+", 8, "*", 4, "+", 6];

        // ACT
        const operandsGrouped = OperandGrouper.groupOperands(operands);

        // ASSERT
        expect(operandsGrouped).toBe([5, "+", [[8, "*", 4], "+", 6]]);
    })

    it("Seven therme operation, first group is priority operation is grouped", () => {
        // ARRANGE
        const operands = [5, "*", 8, "-", 4, "+", 6];

        // ACT
        const operandsGrouped = OperandGrouper.groupOperands(operands);

        // ASSERT
        expect(operandsGrouped).toBe([[[5, "*", 8], "-", 4], "+", 6]);
    })
})