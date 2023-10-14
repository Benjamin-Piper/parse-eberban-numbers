export function getOffset(vowelsLength) {
    /*
                                2        1        0 
      touia (length 4)  ->  5(4)  +  5(4)  +  4(4)
    */
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
    // [o,u,i,a] -> [3,3,0,2]
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
    /*
                         3        2        1        0
      [3,3,0,2]  ->  3(4)  +  3(4)  +  0(4)  +  2(4)
    */
    return vowelPosition * (4 ** ((array.length - 1) - index));
}

export default function parseEberbanNumber(eberbanNumber) {
    const vowels = eberbanNumber.substring(1);
    const offset = getOffset(vowels.length);
    const totalScore = vowels.split("")
        .map(getVowelPosition)
        .map(getVowelScore)
        .reduce((prev, curr) => prev + curr, 0);
    return offset + totalScore;
};
