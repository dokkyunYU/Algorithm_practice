function solution(num_list) {
    let [odd,evn] = ["",""];
    num_list.forEach(e => {
        switch(e % 2) {
            case 0 :
                evn += e;
                break;
            case 1 :
                odd += e;
                break;
        }
    })
    return Number(odd) + Number(evn)
}