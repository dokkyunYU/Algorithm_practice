function solution(n) {
    const answer = [];
    for (let i = n; i !== 1; i = i % 2 === 0 ? i / 2 : 3 * i + 1)
        answer.push(i);
    answer.push(1);
    return answer;
}