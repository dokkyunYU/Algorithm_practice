function solution(arr) {
    for(let i = 0; i <= 10; ++i)
        if (arr.length <= 2**i)
            return Array.from({length:2**i}, (cur,idx) => arr[idx] ?? 0);
}