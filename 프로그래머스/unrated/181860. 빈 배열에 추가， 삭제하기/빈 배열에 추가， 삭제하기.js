function solution(arr, flag) {
    return arr.reduce((acc,cur,idx) => flag[idx] ? acc.concat(Array(2*cur).fill(cur)) : acc.slice(0, acc.length - cur),[]);
}