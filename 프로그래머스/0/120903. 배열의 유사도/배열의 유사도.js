function solution(s1, s2) {
    return s1.reduce((acc,cur) => s2.indexOf(cur) >= 0 ? acc + 1 : acc, 0)
}