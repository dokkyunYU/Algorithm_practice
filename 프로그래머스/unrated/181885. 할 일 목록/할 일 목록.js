function solution(todo_list, finished) {
    return finished.reduce((acc, cur, idx) => !cur ? [...acc, todo_list[idx]] : acc, []);
}