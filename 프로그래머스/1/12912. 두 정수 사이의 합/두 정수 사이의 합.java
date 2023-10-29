import java.util.stream.LongStream;
class Solution {
    public long solution(int a, int b) {
        return LongStream.range((long) Math.min(a,b), (long) (Math.max(a,b) + 1)).sum();
    }
}