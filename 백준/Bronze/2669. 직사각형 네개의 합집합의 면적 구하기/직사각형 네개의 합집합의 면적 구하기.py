board_list = [[0]*101 for _ in range(101)]
result = 0
for _ in range(4):
    idx = list(map(int, input().split()))
    for i in range(idx[0], idx[2]):
        for j in range(idx[1], idx[3]):
            if board_list[i][j] != 1:
                board_list[i][j] = 1
                result += 1
print(result)