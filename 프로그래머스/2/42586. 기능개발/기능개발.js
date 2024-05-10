function solution(progresses, speeds) {
    const answer = []
    while (progresses.length) {
        let count = 0
        for (let i in progresses) {
            progresses[i] += speeds[i]
            if (progresses[i] >= 100)
                count += progresses.slice(0, i).every((cur) => cur >= 100) ? 1 : 0
        }
        if (count) {
            progresses = progresses.slice(count)
            speeds = speeds.slice(count)
            answer.push(count)
        }
    }
    return answer
}