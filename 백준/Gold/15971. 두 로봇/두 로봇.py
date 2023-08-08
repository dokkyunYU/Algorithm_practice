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
    visited = set([r1])

    while queue:
        next, length, max_length = queue.popleft()
        if next == r2:
            if max_length == 0:
                print(0)
            else:
                print(length - max_length)
            break
        queue.extend(list(map(lambda x: [x[0], x[1] + length, max(x[1], max_length)], [i for i in rooms[next] if i[0] not in visited])))
        visited.update(set(map(lambda x:x[0], rooms[next])))