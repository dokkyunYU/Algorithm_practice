function solution(my_string) {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const abcabc = abc.toUpperCase() + abc;
    const answer = Array(52).fill(0);
    Array.of(...my_string).forEach((cur, idx) => ++answer[abcabc.indexOf(cur)]);
    return answer;
}