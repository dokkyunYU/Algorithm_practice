function solution(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return arr1.length > arr2.length ? 1 : -1;
    else {
        const result = arr1.reduce((acc,cur,idx) => acc + (cur - arr2[idx]),0);
        return result > 0 ? 1 : result < 0 ? -1 : 0;
    }
        
                
}