function solution(l, r) {
    let answer = [];
    for (let i = 1; i < 64; ++i) {
        let num = parseInt(i.toString(2), 10) * 5;
        if (num >= l && num <= r)
            answer.push(num);
    }
    return answer.length ? answer : [-1];
}