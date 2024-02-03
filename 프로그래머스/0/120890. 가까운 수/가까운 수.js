function solution(array, n) {
    return array.sort((a,b) => b - a).reduce((acc,cur) => Math.abs(acc - n) >= Math.abs(cur - n) ? cur : acc);
}