function solution(n_str) {
    return /[^0][0-9]*/.exec(n_str)[0];
}