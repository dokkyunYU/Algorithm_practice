import java.util.Set;
import java.util.HashSet;
class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = new int[2];
        Set<String> wordset = new HashSet<>();
        int idx = 0;
        char prev = words[0].charAt(0);
        for (String word : words) {
            if (wordset.contains(word) || prev != word.charAt(0)) {
                answer[1] = idx / n + 1;
                answer[0] = idx % n + 1;
                break;
            }
            wordset.add(word);
            idx++;
            prev = word.charAt(word.length() - 1);
        }
        return answer;
    }
}