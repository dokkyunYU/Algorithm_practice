function solution(hp) {
    let answer = 0;
    for (const ant of [5,3,1]) {
        answer += Math.trunc(hp / ant)
        hp %= ant
    }
    return answer;
}