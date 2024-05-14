function solution(prices) {
    const answer = Array(prices.length).fill(0), stack = [], end = prices.length - 1
    for (let idx in prices) {
        while (stack.length && prices[stack.at(-1)] > prices[idx]) {
            const i = stack.pop()
            answer[i] = idx - i
        }
        stack.push(idx)
    }
    for (let i of stack) {
        answer[i] = end - i
    }
    return answer
}