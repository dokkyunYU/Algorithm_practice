function solution(myString) {
    return Array.from(myString).map(cur => "aA".includes(cur) ? cur.toUpperCase() : cur.toLowerCase()).join('');
}