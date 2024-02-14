a = [i for i in input()]
print(len(a) + 2 + len([i for i in a if i == "_"]) * 5)