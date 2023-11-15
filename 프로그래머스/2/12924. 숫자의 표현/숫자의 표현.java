class Solution {
    public int solution(int n) {
        int answer = 0;
        int now = 0;
        for (int start = 1; start <= n; start++) {
            now = 0;
            for (int i = 0; i < n; i++) {
                now += start + i;
                if (now >= n) {
                    if (now == n) answer++;
                    break;
                }
            }
        }
        return answer;
    }
}