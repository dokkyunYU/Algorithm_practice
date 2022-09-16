import math

for test_count in range(1, int(input()) + 1):
    the_number = int(input())
    answer = math.pow(the_number, 1/3)
    answer = round(answer) if math.isclose(round(answer), answer) else -1
    print(f"#{test_count}", answer)