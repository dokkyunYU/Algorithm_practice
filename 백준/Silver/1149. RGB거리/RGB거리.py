from sys import stdin
readline = stdin.readline

num = int(readline())
cost = []
for _ in range(num):
    cost.append(list(map(int, readline().split())))

dp = [[0, 0, 0] for _ in range(num)]
dp[0] = cost[0]

for i in range(1, num):
    dp[i][0] = cost[i][0] + min(dp[i-1][1], dp[i-1][2])
    dp[i][1] = cost[i][1] + min(dp[i-1][0], dp[i-1][2])
    dp[i][2] = cost[i][2] + min(dp[i-1][0], dp[i-1][1])

print(min(dp[num - 1]))