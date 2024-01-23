function solution(my_string, n) {
    return [...my_string].map(cur => cur.repeat(n)).join('');
}