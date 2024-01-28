function solution(k, tangerine) {
    const tans = {}
    let notpick = tangerine.length - k;
    for (const tan of tangerine) {
        tans[tan] ??= 0;
        ++tans[tan];
    }
    const stans = Object.entries(tans).sort((a,b) => a[1] - b[1]);
    for (let i = 0; i < stans.length; ++i) {
        if (stans[i][1] > notpick)
            return stans.length - i;
        notpick -= stans[i][1];
    }
}