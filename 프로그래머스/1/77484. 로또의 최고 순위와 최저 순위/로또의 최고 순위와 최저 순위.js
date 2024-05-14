function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1]
    const [at, no] = lottos.reduce((acc,cur) => cur ? [acc[0] + win_nums.includes(cur), acc[1]] : [acc[0], acc[1] + 1], [0,0])
    return [rank[at+no], rank[at]]
}