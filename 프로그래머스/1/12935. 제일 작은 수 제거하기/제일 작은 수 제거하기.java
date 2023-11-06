import java.util.*;
class Solution {
    public int[] solution(int[] arr) {
        int length = arr.length;
        if (length == 1)
            return new int[] {-1};
        int minVal = Arrays.stream(arr).min().getAsInt();
        List<Integer> answer = new ArrayList<>();
        for (int i : arr) {
            if (i != minVal)
                answer.add(Integer.valueOf(i));
        }
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}