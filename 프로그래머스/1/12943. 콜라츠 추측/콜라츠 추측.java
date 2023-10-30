class Solution {
    public int solution(int num) {
        int answer = 0;
        for (int i = 1; num != 1; i++) {
            if (i >= 500) return -1;
            else if (num % 2 != 1) num /= 2;
            else num = 3*num + 1;
            answer = i;
        }
        return answer;
    }
}