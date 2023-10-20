import java.util.Map;
import java.util.HashMap;
class Solution {
    public int[] solution(String[] name, int[] yearning, String[][] photo) {
        Map<String, Integer> nameScoreMap = new HashMap<String, Integer>();
        int[] answer = new int[photo.length];
        for (int i = 0; i < name.length; i++) {
            nameScoreMap.put(name[i], yearning[i]);
        }
        int idx = 0;
        for (String[] line : photo) {
            for (String personName : line) {
                try {
                    answer[idx] += nameScoreMap.get(personName);
                } catch(NullPointerException e) {
                    continue;
                }
            }
            idx++;
        }
        return answer;
    }
}