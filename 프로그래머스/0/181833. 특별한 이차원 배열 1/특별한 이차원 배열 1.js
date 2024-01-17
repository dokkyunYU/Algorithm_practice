function solution(n) {
    return Array.from({length:n}, (cur,idx) => Array.from({length:n}, (c, i) => idx === i ? 1 : 0));
}