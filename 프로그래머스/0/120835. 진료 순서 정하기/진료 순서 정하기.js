function solution(emergency) {
    const sortedArr = [...emergency].sort((a,b) => b - a);
    return emergency.map(cur => sortedArr.indexOf(cur) + 1);
}