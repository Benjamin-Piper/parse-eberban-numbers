import { describe, expect, test } from "vitest";
import parseEberbanNumber, { getOffset, getVowelPosition } from ".";

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
    describe("Get vowel position", () => {
        test.each([
            { array: ["i"], index: 0, output: 0 },
            { array: ["e"], index: 0, output: 1 },
            { array: ["a"], index: 0, output: 2 },
            { array: ["o"], index: 0, output: 3 },
            { array: ["u"], index: 0, output: 4 },
            { array: ["i","e"],  index: 1, output: 1 },
            { array: ["e", "o"], index: 0, output: 1 },
            { array: ["a", "u", "o"], index: 1, output: 3 },
            { array: ["u", "i", "e"], index: 1, output: 0 },
        ])("index $index of $array -> $output", ({ array, index, output }) => {
            expect(getVowelPosition(array[index], index, array)).toBe(output);
        });
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
