nums = [0]
day, ddeok = map(int, input().split())
for i in range(1, day):
    if i == 1 or i == 2:
        nums.append(1)
        continue
    nums.append(nums[-2] + nums[-1])
Anum, Bnum = nums[day - 2 : day]
for B in range(1, ddeok // Bnum + 1):
    A = (ddeok - Bnum * B) // Anum
    if (ddeok - Bnum * B) % Anum or A > B:
        continue
    print(A, B, sep="\n")
    break