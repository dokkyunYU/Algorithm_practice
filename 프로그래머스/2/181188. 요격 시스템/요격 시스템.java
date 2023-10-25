import java.util.*;
class Solution {
    public int solution(int[][] targets) {
        int answer = 1;
        Arrays.sort(targets, (x,y) -> x[0] - y[0]);
        int[] prev = {-1,-1};
        for (int[] i : targets) {
            if (prev[0] == -1) prev = i;
            else if (prev[1] <= i[0]) {
                answer++;
                prev = i;
            } else {
                prev[0] = i[0];
                prev[1] = Math.min(prev[1], i[1]);
            }
        }
        return answer;
    }
}