import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
class Solution {
    List<Integer> nums = new ArrayList<>(Arrays.asList(new Integer[] {0,1,1}));
    int numlen = 2;
    public int solution(int n) {
        if (n > numlen) {
            while (numlen < n) {
                int nextnum = nums.get(numlen) + nums.get(numlen - 1);
                if (nextnum >= 1234567) {
                    nextnum %= 1234567;
                }
                nums.add(nextnum);
                numlen++;
            }
        }
        return nums.get(n);
    }
}