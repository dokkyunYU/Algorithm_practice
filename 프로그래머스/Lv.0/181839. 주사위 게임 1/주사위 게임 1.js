function solution(a, b) {
    switch(a % 2 + b % 2) {
        case 0 :
            return Math.abs(a - b);
        case 1 :
            return 2 *(a + b);
        case 2 :
            return a**2 + b**2;
    }
}