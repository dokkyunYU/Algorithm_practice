function solution(sizes) {
    let [w, h] = [0,0];
    for (let size of sizes) {
        let [nw, nh] = size;
        const sq1 = Math.max(w, nw) * Math.max(h, nh);
        const sq2 = Math.max(w, nh) * Math.max(h, nw);
        if (sq1 < sq2) {
            [w, h] = [Math.max(w, nw), Math.max(h, nh)];
        } else {
            [w, h] = [Math.max(w, nh), Math.max(h, nw)];
        }
    }
    return w*h;
}