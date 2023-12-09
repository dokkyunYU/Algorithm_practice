function solution(d, budget) {
    var answer = 0;
    for (let i of d.sort((a,b) => a-b)) {
        budget -= i;
        if (budget < 0)
            break;
        else
            ++answer;
    }
    return answer;
}