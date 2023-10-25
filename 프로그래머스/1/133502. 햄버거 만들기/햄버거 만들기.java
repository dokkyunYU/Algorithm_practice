import java.util.*;
class Solution {
    public int solution(int[] ingredient) {
        int length = 0;
        int answer = 0;
        StringBuilder tower = new StringBuilder();
        for (int i : ingredient) {
            tower.append(String.valueOf(i));
            length++;
            if (length >= 4 && tower.substring(length-4,length).equals("1231")) {
                tower.delete(length-4,length);
                length -= 4;
                answer++;
            }
        }
        return answer;
    }
}