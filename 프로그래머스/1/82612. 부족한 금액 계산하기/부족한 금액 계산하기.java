class Solution {
    public long solution(int price, int money, long count) {
        return Math.max(price * (count * (count + 1)) / 2 - money, 0);
    }
}