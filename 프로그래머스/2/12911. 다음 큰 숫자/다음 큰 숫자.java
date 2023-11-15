class Solution {
    public int solution(int n) {
        int nCount = countOne(n);
        for (int i = n+1; i < 2000000; i++) {
            if (nCount == countOne(i))
                return i;
        }
        return 0;
    }
    public int countOne(int num) {
        int one = 0;
        for (int i = num; i > 0; i = i / 2) {
            if (i % 2 == 1) one++;
        }
        return one;
    }
}