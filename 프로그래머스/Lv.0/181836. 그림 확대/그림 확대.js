function solution(picture, k) {
    return Array(k * picture.length).fill('').map((_,idx) => {
        let ans = '';
        for (const n of picture[Math.trunc(idx / k)])
            ans += n.repeat(k);
        return ans;
    })
}