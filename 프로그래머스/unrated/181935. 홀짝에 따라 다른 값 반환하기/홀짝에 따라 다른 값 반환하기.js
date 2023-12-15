function solution(n) {
    const isEven = n % 2 === 0;
    let [a,nn] = isEven ? [2,n/2] : [1,(n+1)/2];
    return isEven ? 4 * nn*(nn + 1)*(2*nn + 1) / 6 : nn * (2*a + (nn-1)*2)/2;
}