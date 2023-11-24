function solution(s) {
    const answer = [0,0];
    let str = s;
    while (str.length > 1) {
        let prevlen = str.length;
        str = str.replace(/0/g, "");
        let nowlen = str.length;
        answer[0]++;
        answer[1] += prevlen - nowlen;
        str = binaryNumber(nowlen)
    }
    return answer;
}
function binaryNumber(num) {
    answer = []
    for (let i = num; i > 0; i = Math.floor(i / 2)) {
        answer.push(i % 2)
    }
    return answer.reverse().join('')
}