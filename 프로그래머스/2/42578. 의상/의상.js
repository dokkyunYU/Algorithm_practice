function solution(clothes) {
    const closet = {}
    for (let [cloth, type] of clothes) {
        closet[type] = closet[type] ? closet[type] + 1 : 1
    }
    return Object.values(closet).reduce((acc,cur) => acc * (cur + 1), 1) - 1
}