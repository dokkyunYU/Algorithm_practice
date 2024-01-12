function solution(arr) {
    const answer = arr.reduce((acc, cur, idx) => acc.length && acc.at(-1) === cur ? acc.slice(0, -1) : acc.concat(cur),[]);
    return answer.length ? answer : [-1];
}