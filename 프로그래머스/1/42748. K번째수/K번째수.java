import java.util.stream.*;
class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        int idx = 0;
        for (int[] command : commands) {
            answer[idx] = IntStream.range(command[0]-1,command[1]).map(i -> array[i]).sorted().toArray()[command[2]-1];
            idx++;
        }
        return answer;
    }
}