from sys import stdin
from collections import deque

readline = stdin.readline

n, r1, r2 = map(int, readline().split())
if r1 == r2:
    print(0)
else:
    rooms = [[] for _ in range(n + 1)]
    for _ in range(n - 1):
        room1, room2, length = map(int, readline().split())
        rooms[room1].append([room2, length, 0])
        rooms[room2].append([room1, length, 0])

    queue = deque(rooms[r1])
    visited = [False for _ in range(n+1)]
    visited[r1] = True
    while queue:
        next, length, max_length = queue.popleft()
        if next == r2:
            if max_length == 0:
                print(0)
            else:
                print(length - max_length)
            break
        for x in rooms[next]:
            if not visited[x[0]]:
                queue.appendleft([x[0], x[1] + length, max(x[1], max_length)])
                visited[x[0]] = True