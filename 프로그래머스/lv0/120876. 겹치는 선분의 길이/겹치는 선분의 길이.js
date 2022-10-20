function solution(lines) {
    let arr = []
    for (let i = 0; i < 200;i++)
        arr.push(0)
    for (let line of lines) {
        let [a, b] = line;
        a += 100;
        b += 100;
        if (a > b)
            [a, b] = [b, a]
        for (let j = a; j < b; j++)
            arr[j] += 1
    }
    let answer = arr.reduce((allsum, x) => (x > 1 ? allsum + 1 : allsum), 0)
    return answer;
}