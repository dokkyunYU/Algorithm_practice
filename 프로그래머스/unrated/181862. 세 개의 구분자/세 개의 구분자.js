function solution(myStr) {
    return myStr.match(/[^a^b^c]+/g) ?? ["EMPTY"];
}