export function getOffset(vowelsLength) {
    if (vowelsLength === 1) {
        return 0;
    }
    let offset = 0;
    let powerCount = vowelsLength - 2;
    while (powerCount > 0) {
        offset += 5 * (4**powerCount);
        powerCount--;
    }
    offset += 4;
    return offset;
}

export function getVowelPosition(vowel, index, array) {
    const firstVowelPositions = { i:0, e:1, a:2, o:3, u:4 };
    const adjacentVowelPositions = {
        i: { e:0, a:1, o:2, u:3 },
        e: { i:0, a:1, o:2, u:3 },
        a: { i:0, e:1, o:2, u:3 },
        o: { i:0, e:1, a:2, u:3 },
        u: { i:0, e:1, a:2, o:3 },
    };
    if (index === 0) {
        return firstVowelPositions[vowel];
    }
    const vowelPosition = adjacentVowelPositions[array[index-1]][vowel];
    if (index === (array.length - 1)) {
        return vowelPosition + 1;
    }
    return vowelPosition;
}

export function getVowelScore(vowelPosition, index, array) {
    return vowelPosition * (4 ** ((array.length - 1) - index));
}

export default function parseEberbanNumber(eberbanNumber) {
    return ({
        ti: 0,
        te: 1,
        ta: 2,
        to: 3,
        tu: 4,
    })[eberbanNumber];
};
