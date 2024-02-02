function solution(sides) {
    return +(sides.sort((a,b) => a - b).splice(0,2).reduce((acc,cur) => acc+ cur) <= sides[0]) + 1;
}