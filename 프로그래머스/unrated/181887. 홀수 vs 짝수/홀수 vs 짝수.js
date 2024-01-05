function solution(num_list) {
    return Math.max(...num_list.reduce((acc,cur,idx) => (idx + 1) % 2 ? [acc[0] + cur, acc[1]] : [acc[0], acc[1] + cur], [0,0]));
}