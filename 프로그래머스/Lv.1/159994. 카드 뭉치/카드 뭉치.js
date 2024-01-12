function solution(cards1, cards2, goal) {
    let [i1,i2,i3] = [0,0,0];
    while (i3 < goal.length) {
        if (cards1[i1] === goal[i3])
            ++i1
        else if(cards2[i2] === goal[i3])
            ++i2
        else
            return "No";
        ++i3
    }
    return "Yes"
}