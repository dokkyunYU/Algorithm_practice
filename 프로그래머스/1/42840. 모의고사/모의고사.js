function solution(answers) {
    const supoArr = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    const answer = Array(supoArr.length).fill(0)
    for (const idx in answers) {
        for (const supoIdx in supoArr) {
            answer[supoIdx] += supoArr[supoIdx][idx % supoArr[supoIdx].length] === answers[idx]    
        }
    }
    const maxValue = Math.max(...answer)
    return answer.reduce((acc,cur,idx) => cur === maxValue ? [...acc, idx + 1] : acc, []);
}