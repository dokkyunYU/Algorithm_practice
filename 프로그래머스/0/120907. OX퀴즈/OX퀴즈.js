function solution(quiz) {
    const reg = /(?<num1>\-*\d+)\s(?<ope>[+\-])\s(?<num2>\-*\d+)\s=\s(?<res>[+\-]*\d+)/
    return quiz.map(cur => {
        const result = reg.exec(cur)
        switch (result.groups.ope) {
            case "+":
                return +result.groups.num1 + +result.groups.num2 === +result.groups.res ? "O" : "X"
            case "-":
                return +result.groups.num1 - +result.groups.num2 === +result.groups.res ? "O" : "X"
        }
    })
}