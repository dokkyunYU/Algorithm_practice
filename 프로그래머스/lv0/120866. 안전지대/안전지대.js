function solution(board) {
    let n = board.length;
    var answer = n * n;
    let drow = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dcol = [0, 1, 1, 1, 0, -1, -1, -1];
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            for (let k = 0; k < 8; k++)
                if ((0 <= i+drow[k] && i+drow[k] < n && 0 <= j+dcol[k] && j+dcol[k] < n && board[i+drow[k]][j+dcol[k]]) || board[i][j]) {
                    answer--;
                    break
                }
    return answer;
}
//  