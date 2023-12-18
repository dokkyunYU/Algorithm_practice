function solution(num_list) {
    let [n1,n2] = [1,0];
    num_list.forEach((element) => {
        n1 *= element;
        n2 += element;
    })
    return n1 < n2 ** 2 ? 1 : 0;
}