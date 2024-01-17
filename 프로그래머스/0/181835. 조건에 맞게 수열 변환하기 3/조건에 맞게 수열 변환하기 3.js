function solution(arr, k) {
    return arr.map(cur => k % 2 ? cur * k : cur + k);
}