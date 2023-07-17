from sys import stdin
readline = stdin.readline

length, days = map(int, readline().split())
board = [[1 for _ in range(length)] for _ in range(length)]
grow_board_dict = {}
for day in range(days):
    idx = readline()
    grow_lists = grow_board_dict.get(idx)
    if not grow_lists:
        zero, one, two = map(int, idx.split())
        grow_list = [0 for _ in range(zero)] + [1 for _ in range(one)] + [2 for _ in range(two)]
        grow_len = 2 * length - 1
        grow_list2 = grow_list[grow_len // 2:]
        grow_board_dict.update({idx: [grow_list, grow_list2]})
    else:
        grow_list, grow_list2 = grow_lists
    for i in range(length):
        board[0][length - 1 - i] += grow_list[grow_len - 1 - i]
        board[length - 1 - i][0] += grow_list[i]
        if i == grow_len - 1 - i:
            board[0][0] -= grow_list[i]
    for i in range(1, length):
        for j in range(1, length):
            board[i][j] += grow_list2[j]
    
for line in board:
    print(*line)