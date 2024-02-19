function solution(my_str, n) {
    return Array.from({length:Math.ceil(my_str.length / n)}, (_,idx) => my_str.slice(n*idx, n*(idx+1)))
}