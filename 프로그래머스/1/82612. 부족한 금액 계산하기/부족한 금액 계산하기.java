import java.util.stream.*;
class Solution {
    public long solution(int price, int money, int count) {
        long answer = 0L;
        for (int i = 1; i < count + 1; i++)
            answer += i;
        answer = answer * price - money;
        return answer > 0 ? answer : 0;
    }
}