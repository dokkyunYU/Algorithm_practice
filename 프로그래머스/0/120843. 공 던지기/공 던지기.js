function solution(numbers, k) {
    let answer = (k * 2 - 2) % numbers.length + 1;
    return answer;
}