function solution(n, left, right) {
    return Array.from({length:right - left + 1}, (_,idx) => {
        idx += left
        return idx % n <= Math.floor(idx / n) ? Math.floor(idx / n) + 1 : (idx % n) + 1
    })
}