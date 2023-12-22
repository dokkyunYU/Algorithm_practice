function solution(my_string, queries) {
    const answer = [...my_string];
    queries.forEach(([s,e]) => {
        for (let i = 0; i < (e - s)/2; ++i) {
            [answer[s + i], answer[e - i]] = [answer[e - i], answer[s + i]];
        }
    })
    return answer.join('');
}