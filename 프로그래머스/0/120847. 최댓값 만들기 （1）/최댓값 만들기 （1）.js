function solution(numbers) {
    const [x,y,..._] = numbers.sort((a,b) => b - a);
    return x * y;
}