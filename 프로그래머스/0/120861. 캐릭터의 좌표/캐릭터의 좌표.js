function solution(keyinput, board) {
    const range = board.map(cur => (cur - 1) / 2)
    const dir = {"up":[0,1], "down":[0,-1], "left":[-1,0], "right":[1,0]}
    return keyinput.reduce((acc,cur) => {
        if (dir[cur][0]) {
            const sum = acc[0] + dir[cur][0]
            acc[0] = sum < -range[0] || sum > range[0] ? acc[0] : sum
        }
        else {
            const sum = acc[1] + dir[cur][1]
            acc[1] = sum < -range[1] || sum > range[1] ? acc[1] : sum
        }
        return acc
    },[0,0])
}