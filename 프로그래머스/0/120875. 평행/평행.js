function solution(dots) {
    const lineArr = [];
    for(let i = 0; i < dots.length; ++i)
        for(let j = i + 1; j < dots.length; ++j)
            lineArr.push((dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]));
    for (let i = 0; i < 3; ++i) {
        if (lineArr[i] === lineArr[5 - i])
            return 1
    }
    return 0
}