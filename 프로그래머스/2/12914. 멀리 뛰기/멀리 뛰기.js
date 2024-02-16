const arr = [1,1]
function solution(n) {
    if (!arr[n])
        arr.push(solution(n - 2) + solution(n - 1))
    if (arr[n] > 1234567)
        arr[n] %= 1234567
    return arr[n]
}