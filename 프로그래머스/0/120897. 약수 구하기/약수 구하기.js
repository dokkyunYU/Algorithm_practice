function solution(n) {
    const answer = []
    for(let i = 1; i <= Math.sqrt(n); ++i) {
        if (n % i === 0)
            answer.push(i)
    }
    const answer2 = []
    for (const num of answer) {
        if (n / num !== answer.at(-1))
            answer2.push(n / num)
    }
    return answer.concat(answer2.reverse())
}