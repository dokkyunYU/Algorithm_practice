
import java.util.Arrays;
class Solution {
    public double solution(int[] arr) {
        return Arrays.stream(arr).reduce(0, (x,y) -> x+y) / (double) arr.length;
    }
}