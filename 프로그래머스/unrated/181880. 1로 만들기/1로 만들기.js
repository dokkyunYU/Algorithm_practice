function solution(num_list) {
    return num_list.reduce((acc,cur) => {
        let i = 0;
        while (cur > 1){
            if (cur % 2)
                cur = (cur - 1) / 2;
            else 
                cur = cur / 2;
            ++i;
        }
        return acc + i;
    }, 0)
}