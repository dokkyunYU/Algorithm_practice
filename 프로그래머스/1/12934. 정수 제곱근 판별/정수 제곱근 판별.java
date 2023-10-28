class Solution {
    public long solution(long n) {
        double x = Math.sqrt(n);
        if (Math.round(x) == x) return (long) ((x+1) * (x+1));
        else return -1;
    }
}