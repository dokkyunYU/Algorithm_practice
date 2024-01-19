function solution(board, k) {
    return board.slice(0, k + 1).reduce((acc1,cur1,idx) => acc1 + cur1.slice(0, k - idx + 1).reduce((acc2,cur2) => cur2 + acc2), 0)
}