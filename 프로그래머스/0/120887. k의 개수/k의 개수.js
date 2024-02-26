function solution(i, j, k) {
    return Array.from({length: j - i + 1}, (_,idx) => idx+i).reduce((acc,cur) => acc + (String(cur).match(new RegExp('' + k, 'g'))?.length ?? 0), 0)
}