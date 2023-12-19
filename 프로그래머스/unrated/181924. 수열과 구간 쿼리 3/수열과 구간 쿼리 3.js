function solution(arr, queries) {
    const answer = [...arr];
    for (let [idx1, idx2] of queries) {
        [answer[idx1], answer[idx2]] = [answer[idx2], answer[idx1]];
    }
    return answer;
}