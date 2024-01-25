function solution(n) {
    let answer = 0;
    const nsqrt = Math.sqrt(n);
    for (let i = 1; i <= nsqrt; ++i)
        if (n % i === 0)
            ++answer;
    return answer * 2 - (nsqrt === Math.trunc(nsqrt) ? 1 : 0);
}