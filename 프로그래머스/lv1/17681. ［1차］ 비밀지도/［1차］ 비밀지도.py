def solution(n, arr1, arr2):
    maze_string = ""
    answer = []
    for i in range(n):
        for j in range(n-1, -1, -1):
            maze_string += "#" if arr1[i] & 1 << j or arr2[i] & 1 << j else " "
        answer.append(maze_string)
        maze_string = ""
    return answer