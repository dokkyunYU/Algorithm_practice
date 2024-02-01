function solution(my_string) {
    return Array.from(my_string).reduce((acc,cur) => Number.isInteger(+cur) ? [...acc, +cur] : acc,[]).sort()
}