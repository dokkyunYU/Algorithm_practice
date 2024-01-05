function solution(num_list, n) {
    return num_list.filter((cur, idx) => idx % n === 0);
}