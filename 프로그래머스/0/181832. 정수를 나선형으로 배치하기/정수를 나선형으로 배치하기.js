function solution(n) {
    const answer = Array(n).fill([]).map(() => Array(n).fill(0));
    let [x,y,dx,dy] = [0,0,0,1];
    let number = 1;
    while (number <= n ** 2) {
        answer[x][y] = number++;
        if (answer.at(x + dx)?.at(y + dy) !== 0)
            [dx,dy] = [dy, -dx]
        x += dx, y += dy;
    }
    return answer;
}