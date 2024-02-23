function solution(score) {
    let rank = 0, rankGap = 0
    return Object.entries(score).map(cur => [+cur[0], (cur[1][0] + cur[1][1]) / 2]).sort((a,b) => b[1] - a[1]).map((cur, idx, arr) => {
        if (idx && cur[1] === arr[idx - 1][1]) {
            ++rankGap
            return [cur[0], rank]
        }
        else {
            rank += rankGap + 1
            rankGap = 0
            return [cur[0], rank]
        }   
    }).sort((a,b) => a[0] - b[0]).map(cur => cur[1])
}