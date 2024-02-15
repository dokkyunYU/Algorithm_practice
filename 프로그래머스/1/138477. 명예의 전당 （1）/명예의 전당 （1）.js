function solution(k, score) {
    const answer = [...score]
    const scArr = []
    return answer.map(cur => {
        scArr.push(cur)
        scArr.sort((a,b) => b-a)
        if (scArr.length > k)
            scArr.pop()
        return scArr.at(-1)
    })
}