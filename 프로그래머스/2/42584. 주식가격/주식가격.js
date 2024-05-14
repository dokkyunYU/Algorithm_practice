function solution(prices) {
    const answer = [], stack = [], end = prices.length - 1
    for (let idx in prices) {
        while (stack.length && prices[stack.at(-1)] > prices[idx]) {
            const i = stack.pop()
            answer[i] = idx - i
        }
        stack.push(idx)
        answer.push(0)
    }
    for (let i of stack) {
        answer[i] = end - i
    }
    return answer
}