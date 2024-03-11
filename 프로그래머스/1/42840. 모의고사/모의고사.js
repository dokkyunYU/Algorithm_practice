function solution(answers) {
    const supoArr = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    const answer = [0,0,0]
    for (const idx in answers) {
        answer[0] += supoArr[0][idx % supoArr[0].length] === answers[idx]
        answer[1] += supoArr[1][idx % supoArr[1].length] === answers[idx]
        answer[2] += supoArr[2][idx % supoArr[2].length] === answers[idx]
    }
    const maxValue = Math.max(...answer)
    return answer.reduce((acc,cur,idx) => cur === maxValue ? [...acc, idx + 1] : acc, []);
}