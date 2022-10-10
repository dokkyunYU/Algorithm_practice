n, l = input().split()
lavel = 0
student = 0
while student < int(n):
    lavel += 1
    if l in str(lavel):
        continue
    student += 1
print(lavel)
