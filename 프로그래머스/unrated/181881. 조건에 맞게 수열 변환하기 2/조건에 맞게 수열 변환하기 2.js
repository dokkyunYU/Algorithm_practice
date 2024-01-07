function solution(arr) {
    return arr.reduce((acc,cur) => {
        let [i, prev] = [0, 0];
        while (prev !== cur) {
            prev = cur;
            if (cur >= 50 && cur % 2 === 0)
                cur /= 2;
            else if(cur < 50 && cur % 2 === 1)
                cur = cur * 2 + 1;
            ++i;
        }
        return acc < i - 1 ? i - 1 : acc;
    }, 0)
}