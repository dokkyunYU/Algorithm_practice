length, days = map(int, input().split())
board = [[1 for _ in range(length)] for _ in range(length)]
for day in range(days):
    grow_board = [[0 for _ in range(length)] for _ in range(length)]
    zero, one, two = map(int, input().split())
    grow_list = [0 for _ in range(zero)] + [1 for _ in range(one)] + [2 for _ in range(two)]
    grow_len = 2 * length - 1
    for i in range(length):
        grow_board[0][length - 1 - i] = grow_list[grow_len - 1 - i]
        grow_board[length - 1 - i][0] = grow_list[i]
        if i == grow_len - 1 - i:
            break
    for i in range(1, length):
        for j in range(1, length):
            grow_board[i][j] = max(grow_board[i - 1][j], grow_board[i - 1][j - 1], grow_board[i][j - 1])
    
    for i in range(length):
        for j in range(length):
            board[i][j] += grow_board[i][j]

for line in board:
    print(*line)