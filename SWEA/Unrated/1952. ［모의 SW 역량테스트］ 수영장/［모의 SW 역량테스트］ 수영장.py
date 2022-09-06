def dfs_swim(month, now_sum):
    global min_price_sum
    if now_sum > min_price_sum:
        return

    elif month > 12:
        if now_sum < min_price_sum:
            min_price_sum = now_sum
        return

    else:
        dfs_swim(month + 1, now_sum + how_many_use[month] * plans[0])
        dfs_swim(month + 1, now_sum + plans[1])
        dfs_swim(month + 3, now_sum + plans[2])


for test_count in range(1, int(input()) + 1):
    plans = list(map(int, input().split()))
    how_many_use = [0] + list(map(int, input().split()))
    min_price_sum = plans[3]
    dfs_swim(0, 0)
    print(f"#{test_count}", min_price_sum)