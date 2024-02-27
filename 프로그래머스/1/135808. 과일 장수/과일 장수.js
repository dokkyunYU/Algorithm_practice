function solution(k, m, score) {
    let answer = 0;
    const sorted = score.sort((a,b) => a - b)
    while (sorted.length >= m) {
        answer += sorted.splice(-m,m)[0] * m
    }
    return answer
}