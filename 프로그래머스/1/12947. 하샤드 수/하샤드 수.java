class Solution {
    public boolean solution(int x) {
        return x % new StringBuilder().append(x).chars().map(i -> i - '0').sum() == 0;
    }
}