function solution(numbers) {
    return +["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].reduce((acc,cur,idx) => acc.replace(new RegExp(cur, "g"),idx), numbers)
}