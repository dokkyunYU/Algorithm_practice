function solution(arr, query) {
    return query.reduce((acc,cur,idx) => idx % 2 ? acc.slice(cur) : acc.slice(0, cur + 1), arr);
}