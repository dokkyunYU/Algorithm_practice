cnt_dict = {}
for i in input():
    i = i.upper()
    if i in cnt_dict:
        cnt_dict[i] += 1
    else:
        cnt_dict[i] = 1
max_list = [k for k, t in cnt_dict.items() if max(cnt_dict.values()) == t]
max_key = max_list.pop()
print(max_key if not max_list else "?")