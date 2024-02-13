function solution(my_string, num1, num2) {
    return Array.from(my_string).reduce((acc,cur,idx,arr) => acc + (idx === num1 ? arr[num2] : idx === num2 ? arr[num1] : cur),'')
}