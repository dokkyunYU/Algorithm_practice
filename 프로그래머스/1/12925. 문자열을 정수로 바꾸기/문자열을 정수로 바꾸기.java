class Solution {
    public int solution(String s) {
        int pm = 1;
        StringBuilder answer = new StringBuilder(s);
        if (answer.substring(0,1).equals("+")) answer.delete(0,1);
        else if (answer.substring(0,1).equals("-")) {
            answer.delete(0,1);
            pm = -1;
        }
        return answer.chars().map(i -> i - 48).reduce((x,y) -> 10*x + y).orElseGet(() -> 0) * pm;
    }
}