function solution(balls, share) {
    let answer = 1;
    for (let i = balls - share + 1, j = 1; i <= balls; ++i, ++j) {
        answer *= i
        answer /= j
    }
    return answer;
}