function solution(n,a,b) {
    let [x,y,i] = [a-1, b-1, 0];
    while (x !== y) {
        x = Math.floor(x / 2);
        y = Math.floor(y / 2);
        ++i;
    }
    return i;
}