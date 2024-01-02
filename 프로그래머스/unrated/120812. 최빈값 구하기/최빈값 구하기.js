function solution(array) {
    let answer = 0;
    let maxcnt = 0;
    const counting = {};
    array.forEach((cur) => {
        counting[cur] ??= 0
        ++counting[cur];
    })
    for (const [num, cnt] of Object.entries(counting)){
        if (maxcnt < cnt) {
            answer = Number(num);
            maxcnt = cnt;
        }
        else if(maxcnt === cnt) {
            answer = -1;
        }
    }
    return answer;
}