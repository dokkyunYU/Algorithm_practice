function solution(arr, n) {
    for (let i = 1 - arr.length % 2; i < arr.length; i += 2)
        arr[i] += n;
    return arr
}