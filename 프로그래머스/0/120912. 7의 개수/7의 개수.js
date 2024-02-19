function solution(array) {
    return array.reduce((acc,cur) => {
        let cnt = 0
        for (const letter of String(cur)) {
            if (letter === "7")
                ++cnt
        }
        return acc + cnt
    },0)
}