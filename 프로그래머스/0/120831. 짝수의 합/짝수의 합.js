function solution(n) {
    return Array.from({length:Math.trunc(n / 2) + 1}, (_,i) => (i) * 2).reduce((acc,cur) => acc+cur);
}