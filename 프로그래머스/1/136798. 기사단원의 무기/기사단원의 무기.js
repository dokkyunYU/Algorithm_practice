function solution(number, limit, power) {
    let answer = 0;
    for (let knight = 1; knight <= number; ++knight) {
        let nums = 0
        for (let i = 1; i < Math.sqrt(knight); ++i)
            if (knight % i === 0)
                ++nums
        nums = 2 * nums + +Number.isInteger(Math.sqrt(knight))
        answer += nums <= limit ? nums : power
    }
    return answer;
}