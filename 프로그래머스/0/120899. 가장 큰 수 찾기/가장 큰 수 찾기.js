// function solution(array) {
//     return array.reduce((acc,cur,idx) => cur > acc[0] ? [cur, idx] : acc,[0,0])
// }

function solution(array) {
    const max = Math.max(...array)
    return [max, array.indexOf(max)]
}