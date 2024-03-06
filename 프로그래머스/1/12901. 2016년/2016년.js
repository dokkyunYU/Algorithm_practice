function solution(a, b) {
    return ["THU","FRI","SAT","SUN","MON","TUE","WED"][([31,29,31,30,31,30,31,31,30,31,30,31].slice(0, a - 1).reduce((acc,cur) => acc + cur, 0) + b) % 7]
}