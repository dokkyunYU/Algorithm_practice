function solution(num_str) {
    return Array.of(...num_str).reduce((acc,cur) => acc + +cur, 0);
}