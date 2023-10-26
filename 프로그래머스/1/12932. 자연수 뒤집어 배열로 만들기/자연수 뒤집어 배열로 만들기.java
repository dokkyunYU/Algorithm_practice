import java.util.*;
class Solution {
    public int[] solution(long n) {
        List<Integer> answer = new ArrayList<>();
        while (n > 0) {
            answer.add(Long.valueOf(n % 10L).intValue());
            n = n / 10L;
        }
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}