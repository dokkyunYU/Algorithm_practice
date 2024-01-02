function solution(my_string, m, c) {
    return Array.from(my_string).reduce((acc,cur,idx) => idx % m === c - 1 ? acc + cur : acc, '');
}