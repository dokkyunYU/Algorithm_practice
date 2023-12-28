function solution(my_string, s, e) {
    return my_string.split('').reduce((acc,cur,idx,arr) => idx >= s && idx <= e ? acc + arr[e + s - idx] : acc + cur, '');
}