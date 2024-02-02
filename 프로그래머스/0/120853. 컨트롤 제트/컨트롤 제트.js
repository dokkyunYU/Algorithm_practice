function solution(s) {
    return s.split(" ").reduce((acc,cur,idx,arr) => cur !== "Z" ? acc + +cur : acc - +arr[idx - 1],0);
}