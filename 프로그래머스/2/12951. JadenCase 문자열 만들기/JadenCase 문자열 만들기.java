class Solution {
    public String solution(String s) {
        StringBuilder answer = new StringBuilder();
        char prev = ' ';
        for (char i : s.toCharArray()) {
            if (prev == ' ')
                answer.append(Character.toUpperCase(i));
            else
                answer.append(Character.toLowerCase(i));
            prev = i;
        }
        return answer.toString();
    }
}