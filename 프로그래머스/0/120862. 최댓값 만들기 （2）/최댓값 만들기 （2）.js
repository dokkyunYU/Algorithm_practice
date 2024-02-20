function solution(numbers) {
    numbers.sort((a,b) => a-b)
    return Math.max(numbers.at(0) * numbers.at(1), numbers.at(-2) * numbers.at(-1))
}