const num3x = [0,1,2,4,5,7,8,10,11,14,16]
function solution(n) {
    if (num3x[n])
        return num3x[n]
    else {
        for (let i = num3x.length; i <= n; ++i) {
            let num = num3x[i - 1] + 1
            while (num % 3 === 0 || String(num).includes('3')) {
                ++num
            }
            num3x.push(num)
        }
        return num3x[n]
    }
}