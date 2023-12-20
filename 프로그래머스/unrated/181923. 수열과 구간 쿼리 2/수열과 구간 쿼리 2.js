function solution(arr, queries) {
    const answer = [];
    queries.forEach(([s,e,k]) => {
        const tmpArr = arr.slice(s, e + 1).filter(x => x > k)
        answer.push(Math.min(...(tmpArr.length ? tmpArr : [-1])));
    })
    return answer;
}