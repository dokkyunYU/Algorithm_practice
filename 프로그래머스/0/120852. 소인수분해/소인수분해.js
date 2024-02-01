

function solution(n) {
    function findPrime() {
        let primeNums = [];
        let primeNum = 1;
        function nextPrime() {
            while(++primeNum) {
                let cnt = 0;
                for (const num of primeNums) {
                    if (primeNum % num === 0)
                        break
                    ++cnt;
                }
                if (cnt === primeNums.length) {
                    primeNums.push(primeNum);
                    return primeNum;
                }
            }   
        }
        return nextPrime;
    }
    const answer = [];
    const prime = findPrime()
    while (n > 1) {
        let num = n;
        let pnum = prime()
        if (num % pnum === 0) {
            answer.push(pnum)
            while (Number.isInteger((num /= pnum)))
                n = num;
        }
    }
    return answer;
}