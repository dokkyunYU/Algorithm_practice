class Solution {
    public long solution(long n) {
        double x = Math.sqrt(n);
        return (Math.floor(x) == x) ? (long) ((x+1) * (x+1)) : -1;
    }
}