function solution(intStrs, k, s, l) {
    return intStrs.map(num => Number(num.slice(s,s+l))).filter(num => num > k);
}