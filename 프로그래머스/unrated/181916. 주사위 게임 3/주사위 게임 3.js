function calculate(mode, ...nums) {
    switch(mode) {
        case 1:
            return 1111 * nums[0];
        case 2:
            return (10 * nums[0] + nums[1]) ** 2;
        case 3:
            return (nums[0] + nums[1]) * Math.abs(nums[0] - nums[1]);
        case 4:
            return nums[1] * nums[2];
    }
    
}

function solution(a, b, c, d) {
    const dice = {};
    for (let p of [a,b,c,d]) {
        dice[p] ??= 0;
        ++dice[p];
    }
    const diceEntry = Object.entries(dice);
    const diceLen = diceEntry.length;
    switch(diceLen) {
        case 1:
            return calculate(1, Number(diceEntry[0][0]));
        case 2:
            const [[a,aCnt],[b,bCnt]] = diceEntry;
            if (diceEntry[0][1] !== 2) {
                return calculate(2, ...(aCnt > bCnt ? [+a,+b] : [+b,+a]));
            }
            else {
                return calculate(3, +a, +b);
            }
        case 3:
            diceEntry.sort((a,b) => b[1] - a[1]);
            const [[a1,a2], [b1,b2], [c1,c2]] = diceEntry;
            return calculate(4, Number(a1), Number(b1), Number(c1));
        case 4:
            return Number(diceEntry[0][0]);
    }
    return 0;
}