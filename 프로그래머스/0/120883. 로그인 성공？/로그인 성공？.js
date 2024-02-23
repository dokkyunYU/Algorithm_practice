function solution(id_pw, db) {
    let answer = "fail"
    for (const user of db) {
        if (user[0] === id_pw[0]) {
            if (user[1] === id_pw[1])
                return "login"
            else
                answer = "wrong pw"
        }
    }
    return answer
}