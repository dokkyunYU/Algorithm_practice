function solution(num, total) {
    return Array.from({length:num}, (_,idx) => (total * 2 - num**2 + num) / (2 * num) + idx);
}