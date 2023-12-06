function solution(numbers) {
    const length = numbers.length;
    const numset = new Set();
    for (let i = 0; i < length; ++i){
        for(let j = 0; j < length; ++j) {
            const num = numbers[i] + numbers[j];
            if (i !== j && !numset.has(num))
                numset.add(num);
        }
    }
    return [...numset].sort((a,b) => a-b);
}