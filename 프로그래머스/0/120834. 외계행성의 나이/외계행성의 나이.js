function solution(age) {
    const newage = ["a","b","c","d","e","f","g","h","i","j"];
    let answer = ''
    while(age) {
        answer = newage[age % 10] + answer;
        age = Math.trunc(age / 10)
    }
    return answer
}