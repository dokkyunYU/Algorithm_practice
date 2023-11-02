import java.util.*;
class Solution {
    public long solution(long n) {
        Integer[] answer = new StringBuilder().append(n).chars().mapToObj(i -> Integer.valueOf(i-'0')).toArray(Integer[]::new);
        Arrays.sort(answer, Collections.reverseOrder());
        return Arrays.stream(answer).mapToLong(i -> i).reduce(0L, (x,y) -> 10*x + y);
    }
}