function solution(n) {
    let answer = 0
    while (n) {
        if (n % 2)
            --n, ++answer
        else
            while(n % 2 === 0)
                n /= 2
    }
    return answer
}
