function solution(arr, k) {
    let idx = 0;
    const numset = new Set();
    return Array(k).fill(-1).map((cur) => {
        while(numset.has(arr[idx]) && idx < arr.length)
            ++idx
        return numset.add(arr[idx]) && idx < arr.length ? arr[idx] : cur;  
    })
}