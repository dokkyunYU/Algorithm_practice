function solution(ineq, eq, n, m) {
    if (eq === "=" && n === m)
        return 1;
    else {
        if (ineq === "<")
            return +(n < m);
        else
            return +(n > m);
    }
    return 0;
}