import { describe, expect, test } from "vitest";
import parseEberbanNumber, { getOffset, getVowelPosition, getVowelScore } from ".";

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
    describe("Get vowel score", () => {
        test.each([
            { length: 1, vowelPosition: 0, output: 0  },
            { length: 1, vowelPosition: 1, output: 1  },
            { length: 1, vowelPosition: 2, output: 2  },
            { length: 1, vowelPosition: 3, output: 3  },
            { length: 1, vowelPosition: 4, output: 4  },
            { length: 2, vowelPosition: 0, output: 0  },
            { length: 2, vowelPosition: 1, output: 4  },
            { length: 2, vowelPosition: 2, output: 8  },
            { length: 2, vowelPosition: 3, output: 12 },
            { length: 2, vowelPosition: 4, output: 16 },
            { length: 3, vowelPosition: 0, output: 0  },
            { length: 3, vowelPosition: 1, output: 16 },
            { length: 3, vowelPosition: 2, output: 32 },
            { length: 3, vowelPosition: 3, output: 48 },
            { length: 3, vowelPosition: 4, output: 64 },
        ])("First of $length: $vowelPosition -> $output", ({ length, vowelPosition, output }) => {
            expect(getVowelScore(vowelPosition, 0, Array(length))).toBe(output);
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
    describe("2-digit numbers", () => {
        test.each([
            ["tie",  5],
            ["tia",  6],
            ["tio",  7],
            ["tiu",  8],
            ["tei",  9],
            ["tea", 10],
            ["teo", 11],
            ["teu", 12],
            ["tai", 13],
            ["tae", 14],
            ["tao", 15],
            ["tau", 16],
            ["toi", 17],
            ["toe", 18],
            ["toa", 19],
            ["tou", 20],
            ["tui", 21],
            ["tue", 22],
            ["tua", 23],
            ["tuo", 24],
        ])("%s -> %d", (eberbanNumber, decimalNumber) => {
            expect(parseEberbanNumber(eberbanNumber)).toBe(decimalNumber);
        });
    });
});
