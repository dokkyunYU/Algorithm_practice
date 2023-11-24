function solution(n, m) {
    const answer = [0,0]
    for (let i = 1; i < 1000000; i++) {
        if (m % i == 0 && n % i == 0)
            answer[0] = i
        if (i % m == 0 && i % n == 0) {
            answer[1] = i
            break
        }
    }
    return answer;
}