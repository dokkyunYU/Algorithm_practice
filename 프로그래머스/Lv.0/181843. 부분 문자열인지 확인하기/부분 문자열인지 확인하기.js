function solution(my_string, target) {
    return my_string.search(new RegExp(target)) >= 0 ? 1 : 0
}