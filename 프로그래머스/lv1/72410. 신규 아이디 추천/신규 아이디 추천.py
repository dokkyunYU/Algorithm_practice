def solution(new_id):
    answer = ''
    new_id = new_id.lower()
    for i in new_id:
        if i.islower():
            answer += i
        elif i in ['-', '_', '.']:
            answer += i
        elif i.isnumeric():
            answer += i
    new_id = answer
    answer = ''
    dot_stack = ''
    for j in new_id:
        if j == '.':
            dot_stack += '.'
        elif dot_stack:
            answer += ('.' + j)
            dot_stack = ''
        else:
            answer += j
    new_id = answer
    if new_id != '':
        if new_id[0] == '.':
            new_id = new_id[1:]
        if new_id[-1] == '.':
            new_id = new_id[:len(new_id) - 1]
    elif new_id == '':
        new_id = 'a'
    if len(new_id) >= 16:
        new_id = new_id[:15]
        if new_id[-1] == '.':
            new_id = new_id[:14]
    while len(new_id) < 3:
        new_id += new_id[-1]
    answer = new_id
    return answer