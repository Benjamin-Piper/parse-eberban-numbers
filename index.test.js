import { describe, expect, test } from "vitest";
import parseEberbanNumber from ".";

describe("expected input", () => {
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
