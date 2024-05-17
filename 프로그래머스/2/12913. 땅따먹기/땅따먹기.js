function solution(land) {
    const lastRow = land.length - 1
    for (let i = 1; i <= lastRow; ++i) 
        land[i].forEach((cur, j, arr) => {
            arr[j] += Math.max(...land[i-1].slice(0, j), ...land[i-1].slice(+j + 1))
        })
    return Math.max(...land[lastRow])
}