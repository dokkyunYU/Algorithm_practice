function solution(cipher, code) {
    return cipher.split('').reduce((a,b,c) => (c + 1) % code === 0 ? a += b : a, '');
}