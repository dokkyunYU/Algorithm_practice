function solution(names) {
    return names.filter((cur, idx) => !(idx % 5))
}