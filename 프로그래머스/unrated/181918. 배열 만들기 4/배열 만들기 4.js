function solution(arr) {
    const stk = [];
    for (let i = 0; i < arr.length;) {
        if (!stk.length)
            stk.push(arr[i++]);
        else if (stk[stk.length - 1] < arr[i])
            stk.push(arr[i++]);
        else
            stk.pop();
    }
    return stk;
}