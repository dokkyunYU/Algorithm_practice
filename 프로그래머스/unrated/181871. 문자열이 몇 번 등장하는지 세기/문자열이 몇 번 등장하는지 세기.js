function solution(myString, pat) {
    let cnt = 0;
    for (let i = 0; i <= myString.length - pat.length;++i)
        cnt += +(myString.slice(i, pat.length + i) === pat)
    return cnt
}