function solution(start, end) {
    return Array(start - end + 1).fill(0).map((cur, idx) => start - idx);
}