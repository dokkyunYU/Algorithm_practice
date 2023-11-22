class Solution {
    String[] a1 = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"};
    String[] a2 = {"zero","one", "two", "three","four","five","six","seven","eight","nine"};
    public int solution(String s) {
        for (int i = 0; i < 10; i++)
            s = s.replace(a2[i], a1[i]);
        return Integer.valueOf(s);
    }
}