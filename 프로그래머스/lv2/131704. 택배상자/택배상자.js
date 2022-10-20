function solution(order) {
    let sub_belt = new Array;
    let main_belt = 1;
    let answer = 0
    while (order[0] != main_belt) {
        sub_belt.push(main_belt);
        main_belt++;
    }
    answer++;
    main_belt++;
    for (let i = 1; i < order.length; i++) {
        if (order[i] < main_belt && order[i] != sub_belt[sub_belt.length - 1])
            break;
        else if (order[i] >= main_belt) {
            while (order[i] != main_belt) {
                sub_belt.push(main_belt);
                main_belt++;
            }
            answer++;
            main_belt++;
        }
        else if (order[i] === sub_belt[sub_belt.length - 1]) {
            sub_belt.pop();
            answer++;
        }
    }
    return answer;
}