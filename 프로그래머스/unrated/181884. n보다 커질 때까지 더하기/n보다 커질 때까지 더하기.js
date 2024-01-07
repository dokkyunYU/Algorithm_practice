function solution(numbers, n) {
    let answer = 0;
    for (let i of numbers) {
        answer += i;
        if (answer > n)
            return answer;
    }
}