function solution(elements) {
    const extendElements = elements.concat(elements);
    const numSet = new Set();
    for (let i = 1; i <= elements.length; ++i) {
        for (let j = 0; j < elements.length; ++j) {
            numSet.add(extendElements.slice(j, i+j).reduce((acc,cur) => acc + cur))
        }
    }
    return numSet.size;
}