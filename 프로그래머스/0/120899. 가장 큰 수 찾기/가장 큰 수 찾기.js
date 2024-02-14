function solution(array) {
    return array.reduce((acc,cur,idx) => cur > acc[0] ? [cur, idx] : acc,[0,0])
}