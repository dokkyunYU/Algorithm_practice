n = int(input())
score_list = list(map(int, input().split()))
print(sum(map(lambda x:x/max(score_list)*100, score_list))/n)