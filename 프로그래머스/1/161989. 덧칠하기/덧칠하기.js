function solution(n, m, section) {
    let answer = 0
    for(let i = 0, d = 0; i < section.length; i += d) {
        d = 0
        while (section[i + ++d] <= section[i] + m - 1) {}
        ++answer
    }
    return answer
}