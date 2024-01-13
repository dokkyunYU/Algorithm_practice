function solution(rank, attendance) {
    return Object.entries(rank).filter((_, idx) => attendance[idx]).sort((a,b) => a[1] - b[1]).slice(0,3).reduce((acc,cur,idx) => acc + +cur[0] * 10 ** (4 - 2*idx), 0);
}