function solution(a, b) {
    let t = 0;
    let answer = '';
    for(let i = -1; i >= -Math.max(a.length,b.length) - 1; --i) {
        if(a.at(i) || b.at(i)) {
            let num = +(a.at(i) ?? 0) + +(b.at(i) ?? 0) + t;
            t = 0;
            if (num > 9) {
                t = 1
                num -= 10
            }
            answer = num + answer;
        }
        else if(t)
            answer = t + answer;
    }
    return answer;
}