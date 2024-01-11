function solution(n) {
    return Array(Math.ceil(n / 2)).fill(0).map((_, idx) => idx * 2 + 1);
}