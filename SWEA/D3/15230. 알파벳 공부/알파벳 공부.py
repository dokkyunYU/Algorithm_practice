for test_count in range(1, int(input()) + 1):
    letter_cnt = 0
    for i, j in enumerate(input()):
        if ord(j) != 97+i:
            break
        letter_cnt = i + 1
    print(f"#{test_count}", letter_cnt)