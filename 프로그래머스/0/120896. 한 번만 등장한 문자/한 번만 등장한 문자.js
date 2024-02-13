function solution(s) {
    const abc = {}
    for (const letter of s) {
        abc[letter] ??= 0
        ++abc[letter]
    }
    return Object.entries(abc).filter(cur => cur[1] < 2).map(cur => cur[0]).sort().join('')
}