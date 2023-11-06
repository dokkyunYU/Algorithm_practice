import java.util.stream.*;
class Solution {
    public int solution(int left, int right) {
        return IntStream.range(left, right + 1).reduce(0, (x,y) -> {
            double num = Math.sqrt(y);
            return (Math.round(num) == num)? x - y : x + y;
        });
    }
}