import java.util.*;
class Solution {
    public int[] solution(int[] arr, int divisor) {
        List<Integer> answer = new ArrayList<>();
        for (int i : arr)
            if (i % divisor == 0)
                answer.add(i);
        answer.sort(Comparator.naturalOrder());
        return answer.size() > 0 ? answer.stream().mapToInt(Integer::intValue).toArray() : new int[] {-1};
    }
}