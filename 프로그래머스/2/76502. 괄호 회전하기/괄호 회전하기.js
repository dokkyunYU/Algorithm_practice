function isValid(str) {
    const stack = []
    const validArr = ["[]", "{}", "()"]
    for (const letter of str) {
        if (validArr.includes(stack.at(-1) + letter))
            stack.pop()
        else
            stack.push(letter)
    }
    return stack.length > 0 ? false : true
}

function solution(s) {
    let str = s
    let answer = +isValid(str)
    str = str.slice(1) + str.at(0)
    while (s !== str) {
        answer += isValid(str)
        str = str.slice(1) + str.at(0)
    }
    return answer;
}