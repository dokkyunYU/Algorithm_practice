function solution(numLog) {
    const command = {
        "1" : "w",
        "-1" : "s",
        "10" : "d",
        "-10" : "a"
    }
    const answer = [];
    for (let i = 1; i < numLog.length; ++i) {
        answer.push(command['' + (numLog[i] - numLog[i - 1])]);
    }
    return answer.join('');
}