function solution(numlist, n) {
    return numlist.map(cur => [cur, Math.abs(cur - n)]).sort((a,b) => a[1] - b[1] || b[0] - a[0]).map(cur => cur[0])
}