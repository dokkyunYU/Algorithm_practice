function dividemax(num1, num2) {
    let number = (num1 > num2) ? parseInt(Math.sqrt(num2)) : parseInt(Math.sqrt(num1))
    for (let i = num1; i > 1; i--) {
        if (!(num1 % i) && !(num2 % i))
            return [num1 / i, num2 / i]
    }
    return [num1, num2]
}

function solution(denum1, num1, denum2, num2) {
    let answer = [denum1*num2, num1*num2, denum2*num1, num1*num2];
    return dividemax(answer[0] + answer[2], num1*num2);
}