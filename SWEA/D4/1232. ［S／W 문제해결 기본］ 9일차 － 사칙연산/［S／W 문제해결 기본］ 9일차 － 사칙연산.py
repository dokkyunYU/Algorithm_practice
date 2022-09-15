def postorder(node_num):
    if len(calculate_tree[node_num]) > 1:
        postorder(int(calculate_tree[node_num][1]))
        postorder(int(calculate_tree[node_num][2]))
        calculate_stack.append(
            operator_dict[calculate_tree[node_num][0]](
                calculate_stack.pop(), calculate_stack.pop())
        )
    else:
        calculate_stack.append(int(calculate_tree[node_num][0]))


operator_dict = {"+": lambda x, y: y + x,
                 "-": lambda x, y: y - x,
                 "*": lambda x, y: y * x,
                 "/": lambda x, y: y / x}
for test_count in range(1, 11):
    node_count = int(input())
    calculate_tree = [[] for _ in range(node_count + 1)]
    for _ in range(node_count):
        idx = input().split()
        calculate_tree[int(idx[0])] += idx[1:]
    calculate_stack = []
    postorder(1)
    print(f"#{test_count}", int(calculate_stack[0]))