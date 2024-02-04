function solution(my_string) {
    let answer = "", result
    const regex = /(?<upper>[A-Z])|(?<lower>[a-z])/g
    while (result = regex.exec(my_string)) {
        answer += result.groups.upper?.toLowerCase() ?? result.groups.lower.toUpperCase()
    }
    return answer
}