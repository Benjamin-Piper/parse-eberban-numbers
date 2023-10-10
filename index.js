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

export default function parseEberbanNumber(eberbanNumber) {
    return ({
        ti: 0,
        te: 1,
        ta: 2,
        to: 3,
        tu: 4,
    })[eberbanNumber];
};
