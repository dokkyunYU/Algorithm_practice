function solution(citations) {
    citations.sort((a,b) => b - a)
    for (const [idx, num] of Object.entries(citations)) {
        const cnt = +idx + 1
        if (cnt >= +num)
            return num
        else if (cnt > (citations[cnt] ?? 0))
            return cnt
    }
}