function solution(brown, yellow) {
    let ab = (brown + 4) / 2;
    for (let i = 3; i <= ab / 2; ++i)
        if ((ab - i) * i - brown === yellow)
            return [ab - i, i]
}