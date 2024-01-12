function solution(strArr) {
    return Math.max(...Object.values(strArr.reduce((acc,cur) => {
        acc[cur.length] ??= 0;
        ++acc[cur.length];
        return acc
    },{})))
}