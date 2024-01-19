function solution(arr) {
    const rc = arr.length - arr[0].length;
    if (rc > 0)
        return arr.map(cur => [...cur, ...Array(rc).fill(0)])
    return [...arr, ...Array.from({length : -rc}, () => Array(arr[0].length).fill(0))]
}