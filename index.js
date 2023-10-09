export default function parseEberbanNumber(eberbanNumber) {
    return ({
        ti: 0,
        te: 1,
        ta: 2,
        to: 3,
        tu: 4,
    })[eberbanNumber];
};
