node_cnt, line_cnt, start_node = map(int, input().split())
node_board = [[0 for _ in range(node_cnt + 1)] for _ in range(node_cnt + 1)]

for _ in range(line_cnt):
    n,m = map(int, input().split())
    node_board[n][m] = 1
    node_board[m][n] = 1

node_board_1 = [row[:] for row in node_board]
visited_1 = [False] * (node_cnt + 1)

dfs_list = []
visited_2 = [False] * (node_cnt + 1)
bfs_list = []

stack = [start_node]
while stack:
    loc_now = stack.pop()
    if not visited_1[loc_now]:
        dfs_list.append(loc_now)
        visited_1[loc_now] = True
        for i in reversed(range(node_cnt + 1)):
            if node_board_1[loc_now][i] == 1 and not visited_1[i]:
                stack.append(i)

queue = [start_node]
while queue:
    loc_now = queue.pop(0)
    if not visited_2[loc_now]:
        bfs_list.append(loc_now)
        visited_2[loc_now] = True
        for i in range(node_cnt + 1):
            if node_board[loc_now][i] == 1 and not visited_2[i]:
                queue.append(i)

print(*dfs_list)
print(*bfs_list)