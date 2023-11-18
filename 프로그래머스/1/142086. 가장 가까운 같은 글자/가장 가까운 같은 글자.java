import java.util.Arrays;
class Solution {
    public int[] solution(String s) {
        int length = s.length();
        int[] answer = new int[length];
        int[] letters = new int[26];
        Arrays.fill(letters, -1);
        for (int i = 0; i < length; i++) {
            int idx = (int) s.charAt(i) - 'a';
            answer[i] = letters[idx] == -1 ? letters[idx] : i - letters[idx];
            letters[idx] = i;
        }
        return answer;
    }
}