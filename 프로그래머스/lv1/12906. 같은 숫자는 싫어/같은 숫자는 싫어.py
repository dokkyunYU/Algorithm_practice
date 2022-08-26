def solution(arr):
    answer = []
    prev_num = -1
    for i in arr:
        if prev_num != i:
            answer.append(i)
        prev_num = i
    return answer