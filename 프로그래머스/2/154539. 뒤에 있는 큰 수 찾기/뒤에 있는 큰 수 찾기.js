function solution(numbers) {
    const stack = [], answer = []
    for (let idx in numbers) {
        while (stack.length && numbers[idx] > stack.at(-1)[0]) {
            answer[stack.pop()[1]] = numbers[idx]
        }
        stack.push([numbers[idx], idx])
        answer.push(-1)
    }
    return answer
}