import { describe, expect, test } from "vitest";
import parseEberbanNumber, { getOffset } from ".";

describe("expected input", () => {
    describe("Get offset", () => {
        test.each([
            [1, 0],
            [2, 4],
            [3, 24],
            [4, 104],
            [5, 424],
        ])("%d-digit number is offset by %d", (vowelsLength, offset) => {
            expect(getOffset(vowelsLength)).toBe(offset);
        })
    });
    describe("1-digit numbers", () => {
        test.each([
            ["ti", 0],
            ["te", 1],
            ["ta", 2],
            ["to", 3],
            ["tu", 4],
        ])("%s -> %d", (eberbanNumber, decimalNumber) => {
            expect(parseEberbanNumber(eberbanNumber)).toBe(decimalNumber);
        });
    });
});
