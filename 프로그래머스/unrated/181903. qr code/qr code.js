function solution(q, r, code) {
    return Array.of(...code).reduce((acc,cur,idx) => idx % q === r ? acc + cur : acc, '');
}