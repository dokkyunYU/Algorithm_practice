function solution(n, control) {
    const command = {
        "w" : +1,
        "s" : -1,
        "d" : +10,
        "a" : -10
    }
    return [...control].reduce((acc,cur,idx) => acc + command[cur], n)
}