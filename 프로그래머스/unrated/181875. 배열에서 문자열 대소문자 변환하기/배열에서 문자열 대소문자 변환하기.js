function solution(strArr) {
    return strArr.map((cur,idx) => idx % 2 ? cur.toUpperCase() : cur.toLowerCase());
}