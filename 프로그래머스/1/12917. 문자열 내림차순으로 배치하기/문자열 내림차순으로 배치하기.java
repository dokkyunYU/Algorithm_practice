class Solution {
    public String solution(String s) {
        return new StringBuilder(s).chars().map(i -> 'z' - i).sorted().mapToObj(i -> String.valueOf((char)('z' - i))).reduce("", (x,y) -> x+y);
    }
}