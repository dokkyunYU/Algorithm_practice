n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

arr.sort(key=lambda x: x[0])
arr.sort(key=lambda x: x[1])

end = 0
count = 0

for i in arr:
    if i[0] >= end:
        end = i[1]
        count += 1

print(count)