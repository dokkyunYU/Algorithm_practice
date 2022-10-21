function solution(polynomial) {
    let answer = 0;
    let number = 0;
    for (let i of polynomial.split(' + '))
        if (i[i.length - 1] === 'x') {
            if (i.length === 1) {
                answer++;
                continue;
            }
            answer += parseInt(i.slice(0, -1));
        }
        else
            number += parseInt(i);
    return ((answer > 1) ? String(answer) + "x" : ((answer) ? "x" : "")) + ((answer && number) ? " + " : "") +((number) ? String(number) : "")
}
