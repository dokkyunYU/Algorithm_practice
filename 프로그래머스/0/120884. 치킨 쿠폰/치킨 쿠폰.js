function solution(chicken) {
    let coupon = chicken % 10, answer = 0
    for (let i = Math.floor(chicken / 10); i > 0 || coupon >= 10; coupon += i % 10, i = Math.floor(i / 10)) {
        answer += i
        if (coupon >= 10) {
            const tmp = Math.floor(coupon / 10)
            answer += tmp
            coupon = coupon % 10 + tmp
        }
    }
    return answer;
}