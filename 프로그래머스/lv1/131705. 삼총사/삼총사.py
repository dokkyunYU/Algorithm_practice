def selection(number, idx=0, allsum=0, cnt=0):
    global g_allcnt
    if (cnt == 3):
        if (allsum == 0):
            g_allcnt += 1
        return
    if (idx >= len(number)):
        return
    selection(number, idx+1, allsum + number[idx], cnt+1)
    selection(number, idx+1, allsum, cnt)
    return


def solution(number):
    global g_allcnt
    g_allcnt = 0
    selection(number)
    return g_allcnt