function solution(myString, pat) {
    return +myString.replace(/(A|B)/g, cur => cur === "A" ? "B" : "A").includes(pat);
}