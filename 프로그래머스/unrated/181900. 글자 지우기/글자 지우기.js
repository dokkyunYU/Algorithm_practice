function solution(my_string, indices) {
    const answer = Array.from(my_string);
    indices.forEach((cur, idx) => answer[cur] = '');
    return answer.join("");
}