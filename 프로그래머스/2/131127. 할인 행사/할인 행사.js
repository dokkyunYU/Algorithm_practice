function solution(want, number, discount) {
    const buyList = discount.slice(0,10).reduce((acc,cur) => {
        const loc = want.indexOf(cur);
        if (loc >= 0)
            ++acc[loc];
        return acc;
    }, Array(number.length).fill(0));
    let answer = +(buyList.filter((cur,idx) => cur === number[idx]).length === number.length);
    for (let i = 10; i < discount.length + 10; ++i) {
        const loc1 = want.indexOf(discount[i - 10]);
        const loc2 = want.indexOf(discount[i]);
        if (loc1 >= 0)
            --buyList[loc1];
        if (loc2 >= 0)
            ++buyList[loc2];
        if (buyList.filter((cur,idx) => cur === number[idx]).length === number.length)
            ++answer;
    }
    return answer;
}