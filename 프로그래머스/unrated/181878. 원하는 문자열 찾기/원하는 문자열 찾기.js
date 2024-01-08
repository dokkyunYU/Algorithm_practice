function solution(myString, pat) {
    return myString.search(new RegExp(pat, "gi")) >= 0 ? 1 : 0
}