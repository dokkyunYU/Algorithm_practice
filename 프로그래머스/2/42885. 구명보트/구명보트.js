function solution(people, limit) {
    let [answer,lefted] = [0,people.length]
    const half = Math.floor(limit / 2)
    people.sort((a,b) => b - a)
    for (const person of people) {
        if (person < half)
            break
        else if (person + people.at(-1) > limit) {
            lefted -= 1
        }
        else {
            people.pop()
            lefted -= 2
        }
        ++answer
    }
    return answer + Math.ceil(lefted / 2);
}