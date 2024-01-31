function solution(n) {
    let num = 1;
    for (let i = 2; i <= 11; ++i) {
        num *= i;
        if (num > n)
            return i - 1;
    }
}